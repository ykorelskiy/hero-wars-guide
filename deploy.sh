#!/bin/bash
# Deploy Hero Wars Guide to AdminVPS (192.109.206.42) on Port 3006
set -e

echo "=== 1. Building Vite app ==="
npm run build

echo "=== 2. Checking git status & committing changes ==="
git add .
if ! git diff-index --quiet HEAD --; then
    COMMIT_MSG=${1:-"deploy: automated update of Hero Wars Guide"}
    git commit -m "$COMMIT_MSG"
    git push origin main
    echo "[+] Local changes pushed to GitHub!"
else
    echo "[*] No uncommitted local changes."
fi

echo "=== 3. Deploying to AdminVPS (192.109.206.42:3006) ==="
ssh root@192.109.206.42 'mkdir -p /var/www/hero-wars-guide/dist'

rsync -avz --delete dist/ root@192.109.206.42:/var/www/hero-wars-guide/dist/
scp package.json package-lock.json .env vite.config.js root@192.109.206.42:/var/www/hero-wars-guide/

ssh root@192.109.206.42 << 'EOF'
set -e
cd /var/www/hero-wars-guide
npm install --production

# Create systemd service if it doesn't exist
if [ ! -f /etc/systemd/system/hero-wars-guide.service ]; then
    cat << 'SERVICE' > /etc/systemd/system/hero-wars-guide.service
[Unit]
Description=Hero Wars Guide Web App (Port 3006)
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/var/www/hero-wars-guide
ExecStart=/usr/bin/npx vite preview --port 3006 --host
Restart=always
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
SERVICE
    systemctl daemon-reload
    systemctl enable hero-wars-guide
fi

systemctl restart hero-wars-guide
echo "=== [OK] Hero Wars Guide deployment completed! Server running on http://192.109.206.42:3006 ==="
EOF
