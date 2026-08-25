#!/usr/bin/env python3
import requests
from PIL import Image
import io
import os
import json

headers = {'User-Agent': 'Mozilla/5.0'}

HEROES = [
    'aurora', 'astaroth', 'corvus', 'galahad', 'luther', 'julius', 'andvari', 'chaba', 'ziri', 'cleaver', 'rufus', 'electra', 'judge',
    'dante', 'keira', 'karkh', 'yasmine', 'artemis', 'jhu', 'ishmael', 'arachne', 'kayla', 'oya', 'darkstar', 'ginger', 'fox', 'astrid',
    'laracroft', 'isaac', 'tristan', 'sebastian', 'alvanor', 'lyria', 'kai', 'jet', 'peppy', 'lilith', 'xesha', 'orion', 'lars', 'krista',
    'satori', 'heidi', 'cornelius', 'iris', 'polaris', 'cascade', 'augustus', 'folio', 'somna', 'helios', 'maya', 'mojo', 'mushy', 'amira',
    'solaris', 'martha', 'celeste', 'dorian', 'jorgen', 'fafnir', 'faceless', 'nebula', 'morrigan', 'phobos', 'lian', 'octavia', 'aidan',
    'thea', 'markus', 'rigel', 'adam', 'fluffy', 'byrna'
]

os.makedirs('public/assets/heroes', exist_ok=True)
os.makedirs('public/images/heroes', exist_ok=True)
os.makedirs('public/images/skills', exist_ok=True)

print("Starting unified asset download for all 73 heroes...")

for hid in HEROES:
    # 1. Official 75x75 Default Skin Icon
    skin_icon_urls = [
        f'https://alexandregames.com/hero-wars-dominion-era/images/hero/{hid}/default-skin.webp',
        f'https://alexandregames.com/hero-wars-dominion-era/images/hero/{hid}/default-skin-icon.webp',
        f'https://alexandregames.com/hero-wars-dominion-era/images/hero/{hid}/{hid}-icon.webp',
        f'https://alexandregames.com/hero-wars-dominion-era/images/hero/{hid}/{hid}-icon-75px.webp'
    ]
    
    icon_saved = False
    for u in skin_icon_urls:
        try:
            r = requests.get(u, headers=headers, timeout=5)
            if r.status_code == 200 and len(r.content) > 1000:
                img = Image.open(io.BytesIO(r.content))
                img.save(f'public/assets/heroes/{hid}.png', 'PNG')
                icon_saved = True
                break
        except Exception:
            pass
            
    if not icon_saved:
        print(f'⚠️ No default-skin.webp for {hid}, keeping existing headshot icon')
    else:
        print(f'✓ Downloaded official 75x75 Default Skin Icon for {hid}')

    # 2. Full Splash Art
    splash_urls = [
        f'https://alexandregames.com/hero-wars-dominion-era/images/hero/{hid}/{hid}-500px.webp',
        f'https://alexandregames.com/hero-wars-dominion-era/images/hero/{hid}/{hid}-400px.webp',
        f'https://alexandregames.com/imagens/image-shared/{hid}-300px.webp',
        f'https://alexandregames.com/hero-wars-dominion-era/images/hero/{hid}/{hid}.webp'
    ]
    
    splash_saved = False
    for u in splash_urls:
        try:
            r = requests.get(u, headers=headers, timeout=5)
            if r.status_code == 200 and len(r.content) > 2000:
                img = Image.open(io.BytesIO(r.content))
                img.save(f'public/images/heroes/{hid}.png', 'PNG')
                splash_saved = True
                break
        except Exception:
            pass
            
    if splash_saved:
        print(f'  ✓ Downloaded Splash Art for {hid}')

print("✓ Unified asset processing finished for all heroes!")
