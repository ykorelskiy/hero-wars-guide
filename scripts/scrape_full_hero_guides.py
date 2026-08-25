#!/usr/bin/env python3
import requests
import re
import json
import os
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

HERO_SLUGS = {
    'aurora': 'aurora-en.html',
    'astaroth': 'astaroth-en.html',
    'corvus': 'corvus-en.html',
    'galahad': 'galahad-en.html',
    'luther': 'luther-en.html',
    'julius': 'julius-en.html',
    'andvari': 'andvari-en.html',
    'chaba': 'chaba-en.html',
    'ziri': 'ziri-en.html',
    'cleaver': 'cleaver-en.html',
    'rufus': 'rufus-en.html',
    'electra': 'electra-en.html',
    'judge': 'judge-en.html',
    'dante': 'dante-en.html',
    'keira': 'keira-en.html',
    'karkh': 'karkh-en.html',
    'yasmine': 'yasmine-en.html',
    'artemis': 'artemis-en.html',
    'jhu': 'jhu-en.html',
    'ishmael': 'ishmael-en.html',
    'arachne': 'arachne-en.html',
    'kayla': 'kayla-en.html',
    'oya': 'oya-en.html',
    'darkstar': 'dark-star-en.html',
    'ginger': 'ginger-en.html',
    'fox': 'fox-en.html',
    'astrid': 'astrid-and-lucas-en.html',
    'laracroft': 'lara-croft-en.html',
    'isaac': 'isaac-en.html',
    'tristan': 'tristan-en.html',
    'sebastian': 'sebastian-en.html',
    'alvanor': 'alvanor-en.html',
    'lyria': 'lyria-en.html',
    'kai': 'kai-en.html',
    'jet': 'jet-en.html',
    'peppy': 'peppy-en.html',
    'lilith': 'lilith-en.html',
    'xesha': 'xesha-en.html',
    'orion': 'orion-en.html',
    'lars': 'lars-en.html',
    'krista': 'krista-en.html',
    'satori': 'satori-en.html',
    'heidi': 'heidi-en.html',
    'cornelius': 'cornelius-en.html',
    'iris': 'iris-en.html',
    'polaris': 'polaris-en.html',
    'cascade': 'cascade-en.html',
    'augustus': 'augustus-en.html',
    'folio': 'folio-en.html',
    'somna': 'somna-en.html',
    'helios': 'helios-en.html',
    'maya': 'maya-en.html',
    'mojo': 'mojo-en.html',
    'mushy': 'mushy-and-shroom-en.html',
    'amira': 'amira-en.html',
    'solaris': 'solaris-en.html',
    'martha': 'martha-en.html',
    'celeste': 'celeste-en.html',
    'dorian': 'dorian-en.html',
    'jorgen': 'jorgen-en.html',
    'fafnir': 'fafnir-en.html',
    'faceless': 'faceless-en.html',
    'nebula': 'nebula-en.html',
    'morrigan': 'morrigan-en.html',
    'phobos': 'phobos-en.html',
    'lian': 'lian-en.html',
    'octavia': 'octavia-en.html',
    'aidan': 'aidan-en.html',
    'thea': 'thea-en.html',
    'markus': 'markus-en.html',
    'rigel': 'rigel-en.html',
    'adam': 'adam-en.html',
    'fluffy': 'fluffy-en.html'
}

def parse_hero_guide(hid, slug):
    url = f'https://alexandregames.com/hero-wars-dominion-era/characters/{slug}'
    guide = {
        'heroId': hid,
        'url': url,
        'overview': '',
        'skins_priority': [],
        'artifacts_priority': [],
        'glyphs_priority': [],
        'skills_priority': [],
        'best_allies': '',
        'counters': '',
        'pets_synergy': ''
    }

    try:
        r = requests.get(url, headers=headers, timeout=6)
        if r.status_code == 200:
            soup = BeautifulSoup(r.text, 'html.parser')
            text = soup.get_text()

            # Extract sections
            # 1. Overview / Intro
            ps = [p.get_text().strip() for p in soup.find_all('p') if len(p.get_text().strip()) > 40]
            if ps:
                guide['overview'] = ps[0]

            # Parse headers and bullet lists
            headers_tags = soup.find_all(['h2', 'h3', 'h4', 'strong'])
            for tag in headers_tags:
                txt = tag.get_text().strip()

                # Skins
                if 'skin' in txt.lower() and 'priority' in txt.lower():
                    next_ul = tag.find_next(['ul', 'ol', 'p'])
                    if next_ul:
                        guide['skins_priority'].append(next_ul.get_text().strip().replace('\n', ' '))

                # Artifacts
                if 'artifact' in txt.lower() and 'priority' in txt.lower():
                    next_ul = tag.find_next(['ul', 'ol', 'p'])
                    if next_ul:
                        guide['artifacts_priority'].append(next_ul.get_text().strip().replace('\n', ' '))

                # Glyphs
                if 'glyph' in txt.lower() and 'priority' in txt.lower():
                    next_ul = tag.find_next(['ul', 'ol', 'p'])
                    if next_ul:
                        guide['glyphs_priority'].append(next_ul.get_text().strip().replace('\n', ' '))

                # Counters
                if 'counter' in txt.lower() or 'weakness' in txt.lower():
                    next_p = tag.find_next(['p', 'div', 'ul'])
                    if next_p and len(next_p.get_text().strip()) > 20:
                        guide['counters'] += ' ' + next_p.get_text().strip()

                # Allies
                if 'synergy' in txt.lower() or 'best team' in txt.lower() or 'allies' in txt.lower():
                    next_p = tag.find_next(['p', 'div', 'ul'])
                    if next_p and len(next_p.get_text().strip()) > 20:
                        guide['best_allies'] += ' ' + next_p.get_text().strip()

                # Pets
                if 'pet' in txt.lower() and 'synergy' in txt.lower():
                    next_p = tag.find_next(['p', 'div'])
                    if next_p:
                        guide['pets_synergy'] += ' ' + next_p.get_text().strip()

            print(f'✓ Parsed {hid} from alexandregames.com')
        else:
            print(f'⚠️ HTTP {r.status_code} for {hid}')
    except Exception as e:
        print(f'⚠️ Error parsing {hid}: {e}')

    return guide

print('Scraping hero guides from alexandregames.com...')
results = {}
for hid, slug in HERO_SLUGS.items():
    results[hid] = parse_hero_guide(hid, slug)

print(f'Total guides parsed: {len(results)}')
with open('hero_guides_scraped.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
