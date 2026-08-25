#!/usr/bin/env python3
import requests
import os
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0'}

# Official square icon URL mapping from alexandregames.com / fandom
ICON_URLS = {
    'electra': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/electra/electra-icon-75px.webp',
    'byrna': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/byrna/byrna-icon-75px.webp',
    'fluffy': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/fluffy/fluffy-icon-75px.webp',
    'cascade': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/cascade/cascade-icon-75px.webp',
    'adam': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/adam/default-skin-icon.webp',
    'chaba': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/chaba/chaba-icon-75px.webp',
    'thea': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/thea/thea-icon-75px.webp',
    'aurora': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/aurora/aurora-icon-75px.webp',
    'astaroth': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/astaroth/astaroth-icon-75px.webp',
    'corvus': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/corvus/corvus-icon-75px.webp',
    'dante': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/dante/dante-icon-75px.webp',
    'keira': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/keira/keira-icon-75px.webp',
    'yasmine': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/yasmine/yasmine-icon-75px.webp',
    'ishmael': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/ishmael/ishmael-icon-75px.webp',
    'arachne': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/arachne/arachne-icon-75px.webp',
    'kayla': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/kayla/kayla-icon-75px.webp',
    'isaac': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/isaac/isaac-icon-75px.webp',
    'sebastian': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/sebastian/sebastian-icon-75px.webp',
    'lyria': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/lyria/lyria-icon-75px.webp',
    'jet': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/jet/jet-icon-75px.webp',
    'orion': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/orion/orion-icon-75px.webp',
    'krista': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/krista/krista-icon-75px.webp',
    'heidi': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/heidi/heidi-icon-75px.webp',
    'iris': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/iris/iris-icon-75px.webp',
    'augustus': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/augustus/augustus-icon-75px.webp',
    'folio': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/folio/folio-icon-75px.webp',
    'somna': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/somna/somna-icon-75px.webp',
    'mushy': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/mushy/mushy-icon-75px.webp',
    'amira': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/amira/amira-icon-75px.webp',
    'celeste': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/celeste/celeste-icon-75px.webp',
    'nebula': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/nebula/nebula-icon-75px.webp',
    'aidan': 'https://alexandregames.com/hero-wars-dominion-era/images/hero/aidan/aidan-icon-75px.webp'
}

os.makedirs('public/assets/heroes', exist_ok=True)

for hid, url in ICON_URLS.items():
    dest_path = f'public/assets/heroes/{hid}.png'
    try:
        r = requests.get(url, headers=headers, timeout=8)
        if r.status_code == 200 and len(r.content) > 1000:
            with open(dest_path, 'wb') as f:
                f.write(r.content)
            print(f'✓ Downloaded icon for {hid} ({len(r.content)} bytes)')
        else:
            print(f'⚠️ Failed to download icon for {hid}: HTTP {r.status_code}')
    except Exception as e:
        print(f'⚠️ Error downloading icon for {hid}: {e}')
