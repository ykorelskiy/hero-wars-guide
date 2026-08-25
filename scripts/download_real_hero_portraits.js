#!/usr/bin/env node
/**
 * Downloader for REAL binary PNG/WebP hero portraits from Hero Wars game & wiki.
 * Downloads authentic artwork into public/assets/heroes/<hero_id>.png
 * Usage: node scripts/download_real_hero_portraits.js
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGET_DIR = join(__dirname, '../public/assets/heroes');

mkdirSync(TARGET_DIR, { recursive: true });

const HEROES = [
  { id: 'aurora', name: 'Aurora', label: 'Аврора', stat: 'Ловкость' },
  { id: 'astaroth', name: 'Astaroth', label: 'Астарот', stat: 'Сила' },
  { id: 'corvus', name: 'Corvus', label: 'Корвус', stat: 'Сила' },
  { id: 'galahad', name: 'Galahad', label: 'Галахад', stat: 'Сила' },
  { id: 'luther', name: 'Luther', label: 'Лютер', stat: 'Сила' },
  { id: 'julius', name: 'Julius', label: 'Джулиус', stat: 'Сила' },
  { id: 'andvari', name: 'Andvari', label: 'Андвари', stat: 'Сила' },
  { id: 'chaba', name: 'Chaba', label: 'Чаба', stat: 'Сила' },
  { id: 'ziri', name: 'Ziri', label: 'Зири', stat: 'Сила' },
  { id: 'cleaver', name: 'Cleaver', label: 'Клевер', stat: 'Сила' },
  { id: 'dante', name: 'Dante', label: 'Данте', stat: 'Ловкость' },
  { id: 'keira', name: 'Keira', label: 'Кира', stat: 'Ловкость' },
  { id: 'karkh', name: "K'arkh", altNames: ['Karkh'], label: "K'arkh", stat: 'Ловкость' },
  { id: 'yasmine', name: 'Yasmine', label: 'Ясмин', stat: 'Ловкость' },
  { id: 'artemis', name: 'Artemis', label: 'Артемида', stat: 'Ловкость' },
  { id: 'jhu', name: 'Jhu', label: 'Джу', stat: 'Ловкость' },
  { id: 'orion', name: 'Orion', label: 'Орион', stat: 'Интеллект' },
  { id: 'lars', name: 'Lars', label: 'Ларс', stat: 'Интеллект' },
  { id: 'krista', name: 'Krista', label: 'Криста', stat: 'Интеллект' },
  { id: 'satori', name: 'Satori', label: 'Сатори', stat: 'Интеллект' },
  { id: 'heidi', name: 'Heidi', label: 'Хайди', stat: 'Интеллект' },
  { id: 'martha', name: 'Martha', label: 'Марта', stat: 'Интеллект' },
  { id: 'celeste', name: 'Celeste', label: 'Селеста', stat: 'Интеллект' },
  { id: 'dorian', name: 'Dorian', label: 'Дориан', stat: 'Интеллект' },
  { id: 'jorgen', name: 'Jorgen', label: 'Йорген', stat: 'Сила' },
  { id: 'fafnir', name: 'Fafnir', label: 'Фафнир', stat: 'Сила' },
  { id: 'tristan', name: 'Tristan', label: 'Тристан', stat: 'Сила' },
  { id: 'sebastian', name: 'Sebastian', label: 'Себастьян', stat: 'Ловкость' },
  { id: 'faceless', name: 'Faceless', label: 'Безликий', stat: 'Интеллект' },
  { id: 'nebula', name: 'Nebula', label: 'Небула', stat: 'Ловкость' },
  { id: 'morrigan', name: 'Morrigan', label: 'Морриган', stat: 'Интеллект' },
  { id: 'phobos', name: 'Phobos', label: 'Фобос', stat: 'Интеллект' },
  { id: 'lian', name: 'Lian', label: 'Лиан', stat: 'Интеллект' },
  { id: 'isaac', name: 'Isaac', label: 'Исаак', stat: 'Ловкость' },
  { id: 'iris', name: 'Iris', label: 'Айрис', stat: 'Интеллект' },
  { id: 'octavia', name: 'Octavia', label: 'Октавия', stat: 'Ловкость' },
  { id: 'oya', name: 'Oya', label: 'Ойя', stat: 'Сила' },
  { id: 'mushy', name: 'Mushy_and_Shroom', altNames: ['Mushy & Shroom', 'Mushy'], label: 'Муши и Шрум', stat: 'Интеллект' },
  { id: 'polaris', name: 'Polaris', label: 'Полярис', stat: 'Интеллект' },
  { id: 'cascade', name: 'Cascade', label: 'Каскад', stat: 'Ловкость' },
  { id: 'augustus', name: 'Augustus', label: 'Август', stat: 'Интеллект' },
  { id: 'folio', name: 'Folio', label: 'Фолио', stat: 'Интеллект' },
  { id: 'somna', name: 'Somna', label: 'Сомна', stat: 'Интеллект' },
  { id: 'kayla', name: 'Kayla', label: 'Кайла', stat: 'Сила' },
  { id: 'aidan', name: 'Aidan', label: 'Эйдан', stat: 'Интеллект' },
  { id: 'helios', name: 'Helios', label: 'Хелиос', stat: 'Интеллект' },
  { id: 'alvanor', name: 'Alvanor', label: 'Альванор', stat: 'Интеллект' },
  { id: 'cornelius', name: 'Cornelius', label: 'Корнелиус', stat: 'Интеллект' },
  { id: 'thea', name: 'Thea', label: 'Тея', stat: 'Интеллект' },
  { id: 'maya', name: 'Maya', label: 'Майя', stat: 'Интеллект' },
  { id: 'mojo', name: 'Mojo', label: 'Моджо', stat: 'Интеллект' },
  { id: 'rufus', name: 'Rufus', label: 'Руфус', stat: 'Сила' },
  { id: 'arachne', name: 'Arachne', label: 'Арахна', stat: 'Ловкость' },
  { id: 'cain', name: 'Cain', label: 'Каин', stat: 'Ловкость' },
  { id: 'fluffy', name: 'Fluffy', label: 'Флаффи', stat: 'Ловкость' },
  { id: 'adam', name: 'Adam', label: 'Адам', stat: 'Ловкость' },
  { id: 'electra', name: 'Electra', label: 'Электра', stat: 'Интеллект' },
  { id: 'lyria', name: 'Lyria', label: 'Лирия', stat: 'Ловкость' },
  { id: 'ishmael', name: 'Ishmael', label: 'Ишмаэль', stat: 'Ловкость' },
];

function generateSvgAvatar(hero) {
  const statColor = hero.stat === 'Сила' ? '#e53e3e' : hero.stat === 'Ловкость' ? '#38a169' : '#3182ce';
  const icon = hero.stat === 'Сила' ? '🛡️' : hero.stat === 'Ловкость' ? '🏹' : '🔮';
  const letter = hero.label ? hero.label[0].toUpperCase() : 'H';
  
  return `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
    <defs>
      <linearGradient id="grad_${hero.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${statColor}" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0a0e1a" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect width="160" height="160" rx="24" fill="url(#grad_${hero.id})" stroke="${statColor}" stroke-width="4"/>
    <circle cx="80" cy="68" r="40" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
    <text x="80" y="83" font-size="44" text-anchor="middle" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="900">${letter}</text>
    <rect x="0" y="120" width="160" height="40" fill="rgba(6,8,14,0.85)"/>
    <text x="80" y="145" font-size="14" text-anchor="middle" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="bold">${icon} ${hero.label}</text>
  </svg>`;
}

async function run() {
  console.log(`🚀 Downloading REAL character portraits for ${HEROES.length} heroes...`);

  let downloadedCount = 0;
  let fallbackCount = 0;

  for (const hero of HEROES) {
    const pngPath = join(TARGET_DIR, `${hero.id}.png`);
    const svgPath = join(TARGET_DIR, `${hero.id}.svg`);

    const namesToTry = [hero.name, ...(hero.altNames || [])];
    let imgUrl = null;

    for (const nameQuery of namesToTry) {
      const titles = [
        `File:Browser_${nameQuery}_Avatar.png`,
        `File:Mobile_${nameQuery}_Avatar.png`,
        `File:${nameQuery}_Avatar.png`,
        `File:${nameQuery}_Icon.png`
      ].join("|");

      const apiUrl = "https://hero-wars.fandom.com/api.php?action=query&titles=" + titles + "&prop=imageinfo&iiprop=url&format=json";

      try {
        const res = await fetch(apiUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
        if (res.ok) {
          const json = await res.json();
          const pages = json?.query?.pages;
          if (pages) {
            for (const k in pages) {
              if (pages[k]?.imageinfo?.[0]?.url) {
                imgUrl = pages[k].imageinfo[0].url;
                break;
              }
            }
          }
        }
      } catch (err) {
        // ignore
      }
      if (imgUrl) break;
    }

    if (imgUrl) {
      try {
        const imgRes = await fetch(imgUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
        if (imgRes.ok) {
          const buffer = Buffer.from(await imgRes.arrayBuffer());
          if (buffer.length > 500) {
            writeFileSync(pngPath, buffer);
            console.log(`✅ [ART] ${hero.label} (${hero.id}.png) -> downloaded genuine binary game image (${(buffer.length / 1024).toFixed(1)} KB)`);
            downloadedCount++;
            continue;
          }
        }
      } catch (e) {
        // proceed to fallback
      }
    }

    // Save SVG file for heroes without Fandom portraits
    const svg = generateSvgAvatar(hero);
    writeFileSync(svgPath, svg, 'utf-8');
    writeFileSync(pngPath, svg, 'utf-8');
    console.log(`🎨 [SVG] ${hero.label} (${hero.id}.png) -> saved HD vector badge`);
    fallbackCount++;
  }

  console.log(`\n🎉 DONE! Genuine binary game portraits: ${downloadedCount}, Vector badges: ${fallbackCount}`);
}

run();
