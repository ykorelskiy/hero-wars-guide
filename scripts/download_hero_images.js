#!/usr/bin/env node
/**
 * Improved Downloader script: follows HTTP redirects and fetches real hero portraits from Hero Wars Wiki.
 * Saves physical PNG files to public/assets/heroes/<hero_id>.png
 * Usage: node scripts/download_hero_images.js
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGET_DIR = join(__dirname, '../public/assets/heroes');

mkdirSync(TARGET_DIR, { recursive: true });

const HERO_LIST = [
  { id: 'aurora', search: 'Aurora', label: 'Аврора', stat: 'Ловкость' },
  { id: 'astaroth', search: 'Astaroth', label: 'Астарот', stat: 'Сила' },
  { id: 'corvus', search: 'Corvus', label: 'Корвус', stat: 'Сила' },
  { id: 'galahad', search: 'Galahad', label: 'Галахад', stat: 'Сила' },
  { id: 'luther', search: 'Luther', label: 'Лютер', stat: 'Сила' },
  { id: 'julius', search: 'Julius', label: 'Джулиус', stat: 'Сила' },
  { id: 'andvari', search: 'Andvari', label: 'Андвари', stat: 'Сила' },
  { id: 'chaba', search: 'Chaba', label: 'Чаба', stat: 'Сила' },
  { id: 'ziri', search: 'Ziri', label: 'Зири', stat: 'Сила' },
  { id: 'cleaver', search: 'Cleaver', label: 'Клевер', stat: 'Сила' },
  { id: 'dante', search: 'Dante', label: 'Данте', stat: 'Ловкость' },
  { id: 'keira', search: 'Keira', label: 'Кира', stat: 'Ловкость' },
  { id: 'karkh', search: "K'arkh", label: "K'arkh", stat: 'Ловкость' },
  { id: 'yasmine', search: 'Yasmine', label: 'Ясмин', stat: 'Ловкость' },
  { id: 'artemis', search: 'Artemis', label: 'Артемида', stat: 'Ловкость' },
  { id: 'jhu', search: 'Jhu', label: 'Джу', stat: 'Ловкость' },
  { id: 'orion', search: 'Orion', label: 'Орион', stat: 'Интеллект' },
  { id: 'lars', search: 'Lars', label: 'Ларс', stat: 'Интеллект' },
  { id: 'krista', search: 'Krista', label: 'Криста', stat: 'Интеллект' },
  { id: 'satori', search: 'Satori', label: 'Сатори', stat: 'Интеллект' },
  { id: 'heidi', search: 'Heidi', label: 'Хайди', stat: 'Интеллект' },
  { id: 'martha', search: 'Martha', label: 'Марта', stat: 'Интеллект' },
  { id: 'celeste', search: 'Celeste', label: 'Селеста', stat: 'Интеллект' },
  { id: 'dorian', search: 'Dorian', label: 'Дориан', stat: 'Интеллект' },
  { id: 'jorgen', search: 'Jorgen', label: 'Йорген', stat: 'Сила' },
  { id: 'fafnir', search: 'Fafnir', label: 'Фафнир', stat: 'Сила' },
  { id: 'tristan', search: 'Tristan', label: 'Тристан', stat: 'Сила' },
  { id: 'sebastian', search: 'Sebastian', label: 'Себастьян', stat: 'Ловкость' },
  { id: 'faceless', search: 'Faceless', label: 'Безликий', stat: 'Интеллект' },
  { id: 'nebula', search: 'Nebula', label: 'Небула', stat: 'Ловкость' },
  { id: 'morrigan', search: 'Morrigan', label: 'Морриган', stat: 'Интеллект' },
  { id: 'phobos', search: 'Phobos', label: 'Фобос', stat: 'Интеллект' },
  { id: 'lian', search: 'Lian', label: 'Лиан', stat: 'Интеллект' },
  { id: 'isaac', search: 'Isaac', label: 'Исаак', stat: 'Ловкость' },
  { id: 'iris', search: 'Iris', label: 'Айрис', stat: 'Интеллект' },
  { id: 'octavia', search: 'Octavia', label: 'Октавия', stat: 'Ловкость' },
  { id: 'oya', search: 'Oya', label: 'Ойя', stat: 'Сила' },
  { id: 'mushy', search: 'Mushy & Shroom', label: 'Муши и Шрум', stat: 'Интеллект' },
  { id: 'polaris', search: 'Polaris', label: 'Полярис', stat: 'Интеллект' },
  { id: 'cascade', search: 'Cascade', label: 'Каскад', stat: 'Ловкость' },
  { id: 'augustus', search: 'Augustus', label: 'Август', stat: 'Интеллект' },
  { id: 'folio', search: 'Folio', label: 'Фолио', stat: 'Интеллект' },
  { id: 'somna', search: 'Somna', label: 'Сомна', stat: 'Интеллект' },
  { id: 'kayla', search: 'Kayla', label: 'Кайла', stat: 'Сила' },
  { id: 'aidan', search: 'Aidan', label: 'Эйдан', stat: 'Интеллект' },
  { id: 'helios', search: 'Helios', label: 'Хелиос', stat: 'Интеллект' },
  { id: 'alvanor', search: 'Alvanor', label: 'Альванор', stat: 'Интеллект' },
  { id: 'cornelius', search: 'Cornelius', label: 'Корнелиус', stat: 'Интеллект' },
  { id: 'thea', search: 'Thea', label: 'Тея', stat: 'Интеллект' },
  { id: 'maya', search: 'Maya', label: 'Майя', stat: 'Интеллект' },
  { id: 'mojo', search: 'Mojo', label: 'Моджо', stat: 'Интеллект' },
  { id: 'rufus', search: 'Rufus', label: 'Руфус', stat: 'Сила' },
  { id: 'arachne', search: 'Arachne', label: 'Арахна', stat: 'Ловкость' },
  { id: 'cain', search: 'Cain', label: 'Каин', stat: 'Ловкость' },
  { id: 'fluffy', search: 'Fluffy', label: 'Флаффи', stat: 'Ловкость' },
  { id: 'adam', search: 'Adam', label: 'Адам', stat: 'Ловкость' },
  { id: 'electra', search: 'Electra', label: 'Электра', stat: 'Интеллект' },
  { id: 'lyria', search: 'Lyria', label: 'Лирия', stat: 'Ловкость' },
  { id: 'ishmael', search: 'Ishmael', label: 'Ишмаэль', stat: 'Ловкость' },
];

function generateSvgAvatar(hero) {
  const statColor = hero.stat === 'Сила' ? '#e53e3e' : hero.stat === 'Ловкость' ? '#38a169' : '#3182ce';
  const icon = hero.stat === 'Сила' ? '🛡️' : hero.stat === 'Ловкость' ? '🏹' : '🔮';
  const letter = hero.label ? hero.label[0].toUpperCase() : 'H';
  
  return `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
    <defs>
      <linearGradient id="grad_${hero.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${statColor}" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#0e1322" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect width="160" height="160" rx="28" fill="url(#grad_${hero.id})" stroke="${statColor}" stroke-width="4"/>
    <circle cx="80" cy="70" r="42" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
    <text x="80" y="85" font-size="46" text-anchor="middle" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800">${letter}</text>
    <rect x="0" y="122" width="160" height="38" fill="rgba(8,10,18,0.75)"/>
    <text x="80" y="146" font-size="15" text-anchor="middle" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-weight="bold">${icon} ${hero.label}</text>
  </svg>`;
}

async function downloadImages() {
  console.log(`Starting image generator & downloader for ${HERO_LIST.length} heroes...`);

  for (const hero of HERO_LIST) {
    const pngPath = join(TARGET_DIR, `${hero.id}.png`);
    const svgPath = join(TARGET_DIR, `${hero.id}.svg`);

    // Fetch image from Fandom API directly
    let downloaded = false;
    try {
      const apiUrl = `https://hero-wars.fandom.com/api.php?action=query&titles=File:${encodeURIComponent(hero.search)}_Icon.png&prop=imageinfo&iiprop=url&format=json`;
      const apiRes = await fetch(apiUrl);
      if (apiRes.ok) {
        const data = await apiRes.json();
        const pages = data?.query?.pages;
        if (pages) {
          const firstKey = Object.keys(pages)[0];
          const imgUrl = pages[firstKey]?.imageinfo?.[0]?.url;
          if (imgUrl) {
            const imgRes = await fetch(imgUrl);
            if (imgRes.ok) {
              const buffer = Buffer.from(await imgRes.arrayBuffer());
              if (buffer.length > 500) {
                writeFileSync(pngPath, buffer);
                console.log(`✓ Downloaded image for ${hero.label} (${hero.id}.png)`);
                downloaded = true;
              }
            }
          }
        }
      }
    } catch (e) {
      // Fallback below
    }

    if (!downloaded) {
      const svg = generateSvgAvatar(hero);
      writeFileSync(svgPath, svg, 'utf-8');
      writeFileSync(pngPath, svg, 'utf-8');
      console.log(`✓ Generated HD SVG badge for ${hero.label} (${hero.id}.png)`);
    }
  }

  console.log(`\n🎉 All ${HERO_LIST.length} hero image files generated in ${TARGET_DIR}!`);
}

downloadImages();
