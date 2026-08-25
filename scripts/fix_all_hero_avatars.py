#!/usr/bin/env python3
import requests
from PIL import Image
import io
import os

headers = {'User-Agent': 'Mozilla/5.0'}

# Known clean square icon URLs from alexandregames.com and fandom
HERO_ICON_SOURCES = {
    'electra': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/electra/electra.webp',
    'cascade': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/cascade/cascade.webp',
    'fluffy': 'https://alexandregames.com/imagens/image-shared/fluffy-300px.webp',
    'somna': 'https://alexandregames.com/imagens/image-shared/somna-300px.webp',
    'byrna': 'https://alexandregames.com/imagens/image-shared/byrna-300px.webp',
    'adam': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/adam/default-skin-icon.webp',
    'aurora': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/aurora/aurora-500px.webp',
    'astaroth': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/astaroth/astaroth-400px.webp',
    'dante': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/dante/dante-500px.webp',
    'julius': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/julius/julius-400px.webp',
    'ziri': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/ziri/ziri-400px.webp',
    'augustus': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/augustus/augustus-400px.webp',
    'aidan': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/aidan/aidan-400px.webp',
    'yasmine': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/yasmine/yasmine-400px.webp'
}

os.makedirs('public/assets/heroes', exist_ok=True)
os.makedirs('public/images/heroes', exist_ok=True)

for hid, url in HERO_ICON_SOURCES.items():
    try:
        r = requests.get(url, headers=headers, timeout=8)
        if r.status_code == 200 and len(r.content) > 1000:
            img = Image.open(io.BytesIO(r.content))
            
            # Save square asset icon
            img.save(f'public/assets/heroes/{hid}.png', 'PNG')
            img.save(f'public/images/heroes/{hid}.png', 'PNG')
            print(f'✓ Successfully updated avatar for {hid} ({img.size[0]}x{img.size[1]})')
        else:
            print(f'⚠️ HTTP {r.status_code} for {hid}')
    except Exception as e:
        print(f'⚠️ Error for {hid}: {e}')
