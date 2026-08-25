#!/usr/bin/env python3
"""
Hero Wars: Dominion Era - Pet Splash Arts & Icons Downloader (Updated)
Downloads original high-res transparent renders for all 10 pets from Fandom Wiki
Saves to ./public/images/pets/ and ./images/pets/
"""

import os
import requests
import urllib.parse

PETS_LIST = [
    {"name_ru": "Фенрис", "name_en": "Fenris", "file": "fenris.png"},
    {"name_ru": "Каин", "name_en": "Cain", "file": "cain.png"},
    {"name_ru": "Альбус", "name_en": "Albus", "file": "albus.png"},
    {"name_ru": "Мара", "name_en": "Mara", "file": "mara.png"},
    {"name_ru": "Оливер", "name_en": "Oliver", "file": "oliver.png"},
    {"name_ru": "Аксель", "name_en": "Axel", "file": "axel.png"},
    {"name_ru": "Мерлин", "name_en": "Merlin", "file": "merlin.png"},
    {"name_ru": "Векс", "name_en": "Vex", "file": "vex.png"},
    {"name_ru": "Бисквит", "name_en": "Biscuit", "file": "biscuit.png"},
    {"name_ru": "Хорус", "name_en": "Khorus", "file": "khorus.png"}
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

DIRS = [
    os.path.abspath(os.path.join(os.path.dirname(__file__), '../public/images/pets')),
    os.path.abspath(os.path.join(os.path.dirname(__file__), '../images/pets'))
]

for d in DIRS:
    os.makedirs(d, exist_ok=True)

def find_pet_image_url(pet_name_en):
    queries = [
        f"Browser {pet_name_en}.png",
        f"Browser {pet_name_en} Avatar.png",
        f"Browser {pet_name_en}",
        f"{pet_name_en}.png",
        f"{pet_name_en}.jpg",
        f"{pet_name_en}"
    ]
    for q in queries:
        api_url = f"https://hero-wars.fandom.com/api.php?action=query&list=search&srsearch={urllib.parse.quote(q)}&srnamespace=6&srlimit=10&format=json"
        try:
            r = requests.get(api_url, headers=HEADERS, timeout=10)
            results = r.json().get('query', {}).get('search', [])
            for res in results:
                t = res['title']
                t_low = t.lower()
                p_low = pet_name_en.lower()
                if p_low in t_low and ('browser' in t_low or 'avatar' in t_low or t_low == f"file:{p_low}.png" or t_low == f"file:{p_low}.jpg"):
                    img_api = f"https://hero-wars.fandom.com/api.php?action=query&titles={urllib.parse.quote(t)}&prop=imageinfo&iiprop=url&format=json"
                    r_img = requests.get(img_api, headers=HEADERS, timeout=10)
                    pages = r_img.json().get('query', {}).get('pages', {})
                    for pid, p in pages.items():
                        if 'imageinfo' in p and len(p['imageinfo']) > 0:
                            return p['imageinfo'][0]['url']
        except Exception:
            continue
    return None

def main():
    print("🐾 Downloading Pet Splash Arts & Renders...")
    for pet in PETS_LIST:
        name_ru = pet['name_ru']
        name_en = pet['name_en']
        filename = pet['file']
        
        url = find_pet_image_url(name_en)
        if url:
            try:
                r = requests.get(url, headers=HEADERS, timeout=15)
                if r.status_code == 200 and len(r.content) > 500:
                    for d in DIRS:
                        with open(os.path.join(d, filename), 'wb') as f:
                            f.write(r.content)
                    print(f"✓ Saved {name_ru} ({filename}) [{len(r.content)} bytes]")
                    continue
            except Exception as e:
                print(f"Error for {name_ru}: {e}")
        print(f"⚠️ {name_ru} - url not found")

    print("🎉 Pets download complete!")

if __name__ == "__main__":
    main()
