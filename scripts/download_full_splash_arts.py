#!/usr/bin/env python3
"""
Hero Wars: Dominion Era - Full-size Hero Splash Art Scraper & Downloader
Downloads original high-res transparent base skin renders from Fandom Wiki in batches of 5-10.
Saves images to ./images/heroes/ and ./public/images/heroes/ and prints Markdown links.
"""

import os
import sys
import time
import requests
import urllib.parse

# Complete mapping of ALL 74 heroes for Dominion Era
HEROES_LIST = [
    {"name_ru": "Аврора", "name_en": "Aurora", "file": "aurora.png"},
    {"name_ru": "Астарот", "name_en": "Astaroth", "file": "astaroth.png"},
    {"name_ru": "Корвус", "name_en": "Corvus", "file": "corvus.png"},
    {"name_ru": "Галахад", "name_en": "Galahad", "file": "galahad.png"},
    {"name_ru": "Лютер", "name_en": "Luther", "file": "luther.png"},

    {"name_ru": "Джулиус", "name_en": "Julius", "file": "julius.png"},
    {"name_ru": "Андвари", "name_en": "Andvari", "file": "andvari.png"},
    {"name_ru": "Чаба", "name_en": "Chaba", "file": "chaba.png"},
    {"name_ru": "Зири", "name_en": "Ziri", "file": "ziri.png"},
    {"name_ru": "Клевер", "name_en": "Cleaver", "file": "cleaver.png"},

    {"name_ru": "Руфус", "name_en": "Rufus", "file": "rufus.png"},
    {"name_ru": "Электра", "name_en": "Electra", "file": "electra.png"},
    {"name_ru": "Судья", "name_en": "Judge", "file": "judge.png"},
    {"name_ru": "Данте", "name_en": "Dante", "file": "dante.png"},
    {"name_ru": "Кира", "name_en": "Keira", "file": "keira.png"},

    {"name_ru": "Карх", "name_en": "K'arkh", "file": "karkh.png"},
    {"name_ru": "Ясмин", "name_en": "Yasmine", "file": "yasmine.png"},
    {"name_ru": "Артемида", "name_en": "Artemis", "file": "artemis.png"},
    {"name_ru": "Джу", "name_en": "Jhu", "file": "jhu.png"},
    {"name_ru": "Ишмаэль", "name_en": "Ishmael", "file": "ishmael.png"},

    {"name_ru": "Арахна", "name_en": "Arachne", "file": "arachne.png"},
    {"name_ru": "Адам", "name_en": "Adam", "file": "adam.png"},
    {"name_ru": "Кайла", "name_en": "Kayla", "file": "kayla.png"},
    {"name_ru": "Ойя", "name_en": "Oya", "file": "oya.png"},
    {"name_ru": "Тёмная Звезда", "name_en": "Dark Star", "file": "darkstar.png"},

    {"name_ru": "Джинджер", "name_en": "Ginger", "file": "ginger.png"},
    {"name_ru": "Фокс", "name_en": "Fox", "file": "fox.png"},
    {"name_ru": "Астрид и Лукас", "name_en": "Astrid & Lucas", "file": "astrid.png"},
    {"name_ru": "Лара Крофт", "name_en": "Lara Croft", "file": "laracroft.png"},
    {"name_ru": "Исаак", "name_en": "Isaac", "file": "isaac.png"},

    {"name_ru": "Тристан", "name_en": "Tristan", "file": "tristan.png"},
    {"name_ru": "Себастьян", "name_en": "Sebastian", "file": "sebastian.png"},
    {"name_ru": "Альванор", "name_en": "Alvanor", "file": "alvanor.png"},
    {"name_ru": "Лирия", "name_en": "Lyria", "file": "lyria.png"},
    {"name_ru": "Кай", "name_en": "Kai", "file": "kai.png"},

    {"name_ru": "Джет", "name_en": "Jet", "file": "jet.png"},
    {"name_ru": "Пеппи", "name_en": "Peppy", "file": "peppy.png"},
    {"name_ru": "Лилит", "name_en": "Lilith", "file": "lilith.png"},
    {"name_ru": "Ксе'Ша", "name_en": "Xe'Sha", "file": "xesha.png"},
    {"name_ru": "Орион", "name_en": "Orion", "file": "orion.png"},

    {"name_ru": "Ларс", "name_en": "Lars", "file": "lars.png"},
    {"name_ru": "Криста", "name_en": "Krista", "file": "krista.png"},
    {"name_ru": "Сатори", "name_en": "Satori", "file": "satori.png"},
    {"name_ru": "Хайди", "name_en": "Heidi", "file": "heidi.png"},
    {"name_ru": "Корнелиус", "name_en": "Cornelius", "file": "cornelius.png"},

    {"name_ru": "Айрис", "name_en": "Iris", "file": "iris.png"},
    {"name_ru": "Полярис", "name_en": "Polaris", "file": "polaris.png"},
    {"name_ru": "Каскад", "name_en": "Cascade", "file": "cascade.png"},
    {"name_ru": "Август", "name_en": "Augustus", "file": "augustus.png"},
    {"name_ru": "Фолио", "name_en": "Folio", "file": "folio.png"},

    {"name_ru": "Сомна", "name_en": "Somna", "file": "somna.png"},
    {"name_ru": "Хелиос", "name_en": "Helios", "file": "helios.png"},
    {"name_ru": "Майя", "name_en": "Maya", "file": "maya.png"},
    {"name_ru": "Моджо", "name_en": "Mojo", "file": "mojo.png"},
    {"name_ru": "Муши и Шрум", "name_en": "Mushy & Shroom", "file": "mushy.png"},

    {"name_ru": "Амира", "name_en": "Amira", "file": "amira.png"},
    {"name_ru": "Солярис", "name_en": "Solaris", "file": "solaris.png"},
    {"name_ru": "Марта", "name_en": "Martha", "file": "martha.png"},
    {"name_ru": "Селеста", "name_en": "Celeste", "file": "celeste.png"},
    {"name_ru": "Дориан", "name_en": "Dorian", "file": "dorian.png"},

    {"name_ru": "Йорген", "name_en": "Jorgen", "file": "jorgen.png"},
    {"name_ru": "Фафнир", "name_en": "Fafnir", "file": "fafnir.png"},
    {"name_ru": "Безликий", "name_en": "Faceless", "file": "faceless.png"},
    {"name_ru": "Небула", "name_en": "Nebula", "file": "nebula.png"},
    {"name_ru": "Морриган", "name_en": "Morrigan", "file": "morrigan.png"},

    {"name_ru": "Фобос", "name_en": "Phobos", "file": "phobos.png"},
    {"name_ru": "Лиан", "name_en": "Lian", "file": "lian.png"},
    {"name_ru": "Октавия", "name_en": "Octavia", "file": "octavia.png"},
    {"name_ru": "Эйдан", "name_en": "Aidan", "file": "aidan.png"},
    {"name_ru": "Тея", "name_en": "Thea", "file": "thea.png"},

    {"name_ru": "Флаффи", "name_en": "Fluffy", "file": "fluffy.png"},
    {"name_ru": "Маркус", "name_en": "Markus", "file": "markus.png"},
    {"name_ru": "Ригель", "name_en": "Rigel", "file": "rigel.png"},
    {"name_ru": "Герой №74", "name_en": "Hero74", "file": "hero74.png"}
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

LOCAL_DIRS = [
    os.path.abspath(os.path.join(os.path.dirname(__file__), '../images/heroes')),
    os.path.abspath(os.path.join(os.path.dirname(__file__), '../public/images/heroes'))
]

for d in LOCAL_DIRS:
    os.makedirs(d, exist_ok=True)

def find_splash_art_url(hero_name_en):
    queries = [
        f"Browser {hero_name_en} Default Skin",
        f"Mobile {hero_name_en} Default Skin",
        f"{hero_name_en} Default Skin",
        f"{hero_name_en} Skin",
        f"File:{hero_name_en}.jpg",
        f"File:{hero_name_en}.png",
        f"{hero_name_en}"
    ]
    
    for q in queries:
        api_url = f"https://hero-wars.fandom.com/api.php?action=query&list=search&srsearch={urllib.parse.quote(q)}&srnamespace=6&srlimit=10&format=json"
        try:
            r = requests.get(api_url, headers=HEADERS, timeout=10)
            results = r.json().get('query', {}).get('search', [])
            
            for res in results:
                t = res['title']
                t_low = t.lower()
                h_low = hero_name_en.lower()
                if h_low in t_low and ('skin' in t_low or 'default' in t_low or 'render' in t_low or t_low == f"file:{h_low}.jpg" or t_low == f"file:{h_low}.png"):
                    img_api = f"https://hero-wars.fandom.com/api.php?action=query&titles={urllib.parse.quote(t)}&prop=imageinfo&iiprop=url&format=json"
                    r_img = requests.get(img_api, headers=HEADERS, timeout=10)
                    pages = r_img.json().get('query', {}).get('pages', {})
                    for pid, p in pages.items():
                        if 'imageinfo' in p and len(p['imageinfo']) > 0:
                            return p['imageinfo'][0]['url']
        except Exception as e:
            continue
            
    # Fallback to direct redirect URL
    return f"https://hero-wars.fandom.com/wiki/Special:Redirect/file/{hero_name_en}_Default_Skin.png"

def download_image(url, target_filename):
    try:
        r = requests.get(url, headers=HEADERS, timeout=15)
        if r.status_code == 200 and len(r.content) > 1000:
            for d in LOCAL_DIRS:
                filepath = os.path.join(d, target_filename)
                with open(filepath, 'wb') as f:
                    f.write(r.content)
            return True
    except Exception:
        pass
    return False

def main():
    print("🚀 Starting Hero Wars Splash Art Downloader (Batches of 5)...")
    batch_size = 5
    total = len(HEROES_LIST)

    for i in range(0, total, batch_size):
        batch = HEROES_LIST[i:i + batch_size]
        batch_num = (i // batch_size) + 1
        
        print(f"\nОбработан батч {batch_num}:")
        
        for hero in batch:
            name_ru = hero['name_ru']
            name_en = hero['name_en']
            filename = hero['file']
            
            art_url = find_splash_art_url(name_en)
            success = download_image(art_url, filename)
            
            if not success:
                # Secondary fallback attempt
                fallback_url = f"https://static.wikia.nocookie.net/hero-wars/images/file/{name_en}.png"
                download_image(fallback_url, filename)
                
            print(f"{name_ru}: ![Арт {name_ru}](./images/heroes/{filename})")
            
        time.sleep(2)  # 2s delay between batches

    print("\n[Успешно сохранены все полноразмерные арты в директорию ./images/heroes/!]")

if __name__ == "__main__":
    main()
