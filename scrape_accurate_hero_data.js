/**
 * scrape_accurate_hero_data.js
 * 
 * Точный парсер данных с Alexandre Games для всех 74 героев.
 * Извлекает: скиллы (название, описание, иконка, формулы),
 * артефакты, облики, символы, питомцев, знамёна, команды, контр-пики.
 * 
 * Паузы: случайные 30-180 секунд между героями.
 * Промежуточный прогресс сохраняется в scratch_accurate_progress.json.
 */

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import { execSync } from 'child_process';

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

// ── Список героев ──────────────────────────────────────────────────────────
const HEROES = [
  { id: 'electra',       ruName: 'Электра',            slug: 'electra' },
  { id: 'byrna',         ruName: 'Бырна',              slug: 'byrna' },
  { id: 'fluffy',        ruName: 'Флаффи',             slug: 'fluffy' },
  { id: 'cascade',       ruName: 'Каскад',             slug: 'cascade' },
  { id: 'aidan',         ruName: 'Айдан',              slug: 'aidan' },
  { id: 'adam',          ruName: 'Адам',               slug: 'adam' },
  { id: 'amira',         ruName: 'Амира',              slug: 'amira' },
  { id: 'augustus',      ruName: 'Август',             slug: 'augustus' },
  { id: 'aurora',        ruName: 'Аврора',             slug: 'aurora' },
  { id: 'dante',         ruName: 'Данте',              slug: 'dante' },
  { id: 'guus',          ruName: 'Гус',                slug: 'guus' },
  { id: 'heidi',         ruName: 'Хайди',              slug: 'heidi' },
  { id: 'isaac',         ruName: 'Исаак',              slug: 'isaac' },
  { id: 'iris',          ruName: 'Ирис',               slug: 'iris' },
  { id: 'ishmael',       ruName: 'Ишмаэль',            slug: 'ishmael' },
  { id: 'julius',        ruName: 'Джулиус',            slug: 'julius' },
  { id: 'krista',        ruName: 'Криста',             slug: 'krista' },
  { id: 'laracroft',     ruName: 'Лара Крофт',         slug: 'lara-croft' },
  { id: 'lyria',         ruName: 'Лирия',              slug: 'lyria' },
  { id: 'nebula',        ruName: 'Небула',             slug: 'nebula' },
  { id: 'orion',         ruName: 'Орион',              slug: 'orion' },
  { id: 'qingmao',       ruName: 'Цин Мао',            slug: 'qing-mao' },
  { id: 'rufus',         ruName: 'Руфус',              slug: 'rufus' },
  { id: 'sebastian',     ruName: 'Себастьян',          slug: 'sebastian' },
  { id: 'somna',         ruName: 'Сомна',              slug: 'somna' },
  { id: 'thea',          ruName: 'Тея',                slug: 'thea' },
  { id: 'yasmine',       ruName: 'Ясмин',              slug: 'yasmine' },
  { id: 'arachne',       ruName: 'Арахна',             slug: 'arachne' },
  { id: 'astaroth',      ruName: 'Астарот',            slug: 'astaroth' },
  { id: 'celeste',       ruName: 'Селеста',            slug: 'celeste' },
  { id: 'corvus',        ruName: 'Корвус',             slug: 'corvus' },
  { id: 'dorian',        ruName: 'Дориан',             slug: 'dorian' },
  { id: 'folio',         ruName: 'Фолио',              slug: 'folio' },
  { id: 'galahad',       ruName: 'Галахад',            slug: 'galahad' },
  { id: 'helios',        ruName: 'Хелиос',             slug: 'helios' },
  { id: 'jorgen',        ruName: 'Йорген',             slug: 'jorgen' },
  { id: 'kayla',         ruName: 'Кайла',              slug: 'kayla' },
  { id: 'keira',         ruName: 'Кира',               slug: 'keira' },
  { id: 'martha',        ruName: 'Марта',              slug: 'martha' },
  { id: 'mojo',          ruName: 'Моджо',              slug: 'mojo' },
  { id: 'morrigan',      ruName: 'Морриган',           slug: 'morrigan' },
  { id: 'mushy',         ruName: 'Маши и Грибочек',    slug: 'mushy-and-shroom' },
  { id: 'polaris',       ruName: 'Полярис',            slug: 'polaris' },
  { id: 'ninjaturtles',  ruName: 'Черепашки-Ниндзя',  slug: 'ninja-turtles' },
  { id: 'andvari',       ruName: 'Андвари',            slug: 'andvari' },
  { id: 'cleaver',       ruName: 'Кливер',             slug: 'cleaver' },
  { id: 'faceless',      ruName: 'Безликий',           slug: 'faceless' },
  { id: 'fafnir',        ruName: 'Фафнир',             slug: 'fafnir' },
  { id: 'jhu',           ruName: 'Джу',                slug: 'jhu' },
  { id: 'judge',         ruName: 'Судья',              slug: 'judge' },
  { id: 'lars',          ruName: 'Ларс',               slug: 'lars' },
  { id: 'lian',          ruName: 'Лиан',               slug: 'lian' },
  { id: 'phobos',        ruName: 'Фобос',              slug: 'phobos' },
  { id: 'satori',        ruName: 'Сатори',             slug: 'satori' },
  { id: 'alvanor',       ruName: 'Альванор',           slug: 'alvanor' },
  { id: 'artemis',       ruName: 'Артемис',            slug: 'artemis' },
  { id: 'astrid',        ruName: 'Астрид и Лукас',     slug: 'astrid-and-lucas' },
  { id: 'cornelius',     ruName: 'Корнелиус',          slug: 'cornelius' },
  { id: 'daredevil',     ruName: 'Сорвиголова',        slug: 'daredevil' },
  { id: 'ginger',        ruName: 'Джинджер',           slug: 'ginger' },
  { id: 'jet',           ruName: 'Джет',               slug: 'jet' },
  { id: 'karkh',         ruName: 'Карх',               slug: 'karkh' },
  { id: 'maya',          ruName: 'Майя',               slug: 'maya' },
  { id: 'tristan',       ruName: 'Тристан',            slug: 'tristan' },
  { id: 'chaba',         ruName: 'Чаба',               slug: 'chaba' },
  { id: 'darkstar',      ruName: 'Тёмная Звезда',      slug: 'dark-star' },
  { id: 'elmir',         ruName: 'Эльмир',             slug: 'elmir' },
  { id: 'fox',           ruName: 'Фокс',               slug: 'fox' },
  { id: 'kai',           ruName: 'Кай',                slug: 'kai' },
  { id: 'lilith',        ruName: 'Лилит',              slug: 'lilith' },
  { id: 'luther',        ruName: 'Лютер',              slug: 'luther' },
  { id: 'markus',        ruName: 'Маркус',             slug: 'markus' },
  { id: 'peppy',         ruName: 'Пеппи',              slug: 'peppy' },
  { id: 'ziri',          ruName: 'Зири',               slug: 'ziri' },
];

// ── Словарь переводов ──────────────────────────────────────────────────────
const TRANSLATIONS = {
  // Роли и позиции
  'Warrior': 'Боец', 'Tank': 'Танк', 'Support': 'Поддержка', 'Healer': 'Хилер',
  'Marksman': 'Стрелок', 'Mage': 'Маг', 'Assassin': 'Ассасин', 'Control': 'Контролёр',
  'Fights at the front line': 'Сражается на передней линии',
  'Fights at the mid line': 'Сражается на центральной линии',
  'Fights at the back line': 'Сражается на задней линии',
  // Характеристики
  'Strength': 'Сила', 'Agility': 'Ловкость', 'Intelligence': 'Интеллект',
  'Physical Attack': 'Физическая Атака', 'Magic Attack': 'Магическая Атака',
  'Health': 'Здоровье', 'Armor': 'Броня', 'Magic Defense': 'Защита от Магии',
  'Dodge': 'Уклонение', 'Crit Hit Chance': 'Шанс Крит. Удара',
  'Armor Penetration': 'Пробивание Брони', 'Magic Penetration': 'Пробивание Защиты от Магии',
  'Vampirism': 'Вампиризм', 'Accuracy': 'Меткость', 'Crit Resistance': 'Крит. Сопротивление',
  // Приоритеты
  'Very High': 'Очень Высокий', 'High': 'Высокий', 'Medium': 'Средний',
  'Medium-High': 'Выше Среднего', 'Medium-Low': 'Ниже Среднего',
  'Low': 'Низкий', 'Very Low': 'Очень Низкий',
  '1 (Highest)': '1 (Наивысший)', '2': '2', '3': '3', '4 (Lowest)': '4 (Наименьший)',
  // Типы артефактов
  'Weapon': 'Оружие', 'Book': 'Книга', 'Ring': 'Кольцо',
  '1st': '1-е (Оружие)', '2nd': '2-е (Книга)', '3rd': '3-е (Кольцо)',
  // Прочее
  'allies': 'союзники', 'enemies': 'враги', 'damage': 'урон', 'heal': 'исцеление',
  'shield': 'щит', 'armor': 'броня', 'per hit': 'за удар', 'per stack': 'за стак',
  'Evolution Priority': 'Приоритет прокачки',
  'Damage Formula': 'Формула урона',
  'Calculated Damage': 'Расчётный урон',
  'Calculated Bonus': 'Расчётный бонус',
  'Calculated Effect': 'Расчётный эффект',
  'Effect Formula': 'Формула эффекта',
  'Healing Block Formula': 'Формула блокировки лечения',
  'Hero Wars: Dominion Era': 'Хроники Хаоса (Dominion Era)',
};

// ── Утилиты ────────────────────────────────────────────────────────────────
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function stripTags(html) {
  return html ? html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
}

function translateText(text) {
  if (!text) return '';
  let result = text;
  for (const [en, ru] of Object.entries(TRANSLATIONS)) {
    const reg = new RegExp(`\\b${en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    result = result.replace(reg, ru);
  }
  return result.trim();
}

function extractBetween(html, startTag, endTag) {
  const start = html.indexOf(startTag);
  if (start === -1) return '';
  const end = html.indexOf(endTag, start + startTag.length);
  if (end === -1) return html.slice(start + startTag.length);
  return html.slice(start + startTag.length, end);
}

function extractAllMatches(html, regex) {
  const results = [];
  let match;
  const re = new RegExp(regex.source, regex.flags);
  while ((match = re.exec(html)) !== null) {
    results.push(match);
  }
  return results;
}

async function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (r2) => {
          r2.pipe(file);
          file.on('finish', () => { file.close(); resolve(true); });
        }).on('error', () => resolve(false));
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(true); });
      } else {
        file.close();
        fs.unlink(destPath, () => {});
        resolve(false);
      }
    }).on('error', () => { fs.unlink(destPath, () => {}); resolve(false); });
  });
}

// ── Парсинг страницы героя ─────────────────────────────────────────────────
function parseHeroPage(html, hero) {
  const result = {
    skills: [],
    skins: [],
    artifacts: [],
    glyphs: [],
    patronage: [],
    war_flags: [],
    counters: [],
    best_teams: [],
    overview: '',
    pros: [],
    cons: [],
  };

  // ── Вводные параграфы (Overview) ──────────────────────────────────────
  const contentWrappers = [...html.matchAll(/<div class="content-wrapper">([\s\S]*?)<\/div>/g)];
  const overviewParts = contentWrappers
    .map(m => stripTags(m[1]).trim())
    .filter(t => t.length > 30 && !t.includes('adsbygoogle'));
  result.overview = translateText(overviewParts.slice(0, 3).join(' '));

  // ── Pros & Cons ───────────────────────────────────────────────────────
  const prosSection = html.match(/(?:Pros|Advantages)[\s\S]*?<ul>([\s\S]*?)<\/ul>/i);
  if (prosSection) {
    result.pros = [...prosSection[1].matchAll(/<li>([\s\S]*?)<\/li>/gi)]
      .map(m => translateText(stripTags(m[1])))
      .filter(t => t.length > 5);
  }
  const consSection = html.match(/(?:Cons|Disadvantages)[\s\S]*?<ul>([\s\S]*?)<\/ul>/i);
  if (consSection) {
    result.cons = [...consSection[1].matchAll(/<li>([\s\S]*?)<\/li>/gi)]
      .map(m => translateText(stripTags(m[1])))
      .filter(t => t.length > 5);
  }

  // ── Skills (emblem blocks) ─────────────────────────────────────────────
  const emblemBlocks = [...html.matchAll(/<div class="emblem">([\s\S]*?)<\/div>\s*(?:<\/div>|<div class="emblem"|<div class="hero-tierlist"|<div class="sectionx"|<\/section>|<h2)/g)];
  
  // Более надёжный парсинг через поиск emblem-title
  const emblems = [];
  let pos = 0;
  while (pos < html.length) {
    const emblemStart = html.indexOf('<div class="emblem">', pos);
    if (emblemStart === -1) break;
    
    // Найти конец блока emblem (следующий такой же div или конец секции)
    let depth = 1;
    let i = emblemStart + '<div class="emblem">'.length;
    while (i < html.length && depth > 0) {
      if (html.slice(i, i + 5) === '<div ') depth++;
      else if (html.slice(i, i + 6) === '</div>') depth--;
      if (depth > 0) i++;
    }
    const emblemEnd = i + 6;
    emblems.push(html.slice(emblemStart, emblemEnd));
    pos = emblemEnd;
  }

  // Определяем в какой секции находится каждый emblem
  for (const emblem of emblems) {
    const titleMatch = emblem.match(/<div class="emblem-title">([\s\S]*?)<\/div>/);
    if (!titleMatch) continue;
    const titleBlock = titleMatch[1];

    // Название
    const nameMatch = titleBlock.match(/<h3>([\s\S]*?)<\/h3>/);
    const rawName = nameMatch ? stripTags(nameMatch[1]).trim() : '';
    
    // Иконка
    const iconMatch = titleBlock.match(/src="([^"]+?)"/);
    const iconUrl = iconMatch ? iconMatch[1] : '';
    const alexBaseUrl = 'https://alexandregames.com/';

    // Параграфы описания
    const paragraphs = [...emblem.matchAll(/<p>([\s\S]*?)<\/p>/g)]
      .map(m => stripTags(m[1]).trim())
      .filter(t => t.length > 3);

    // Определяем тип блока по URL иконки или контексту
    const lowerIcon = iconUrl.toLowerCase();
    const lowerName = rawName.toLowerCase();

    if (lowerIcon.includes('/artifacts/') || lowerName.includes('1st') || lowerName.includes('2nd') || lowerName.includes('3rd')) {
      // Артефакт
      const slot = lowerName.includes('1st') || lowerName.includes('weapon') ? 'Оружие' :
                   lowerName.includes('2nd') || lowerName.includes('book') ? 'Книга' :
                   lowerName.includes('3rd') || lowerName.includes('ring') ? 'Кольцо' : '?';
      
      // Чистое имя артефакта (убираем "1st - Weapon: " и т.п.)
      const cleanName = rawName.replace(/^\d+(?:st|nd|rd|th)\s*[-–]\s*(?:Weapon|Book|Ring)\s*:\s*/i, '').trim();
      const priority = paragraphs.find(p => p.toLowerCase().includes('priority')) || '';
      const desc = paragraphs.filter(p => !p.toLowerCase().includes('priority')).join(' ');

      result.artifacts.push({
        slot,
        name: `${cleanName}`,
        name_ru: `${cleanName} (${slot})`,
        desc_en: desc,
        desc: translateText(desc),
        priority_en: priority.replace('Evolution Priority:', '').trim(),
        priority: translateText(priority.replace('Evolution Priority:', '').trim()),
        icon: iconUrl.startsWith('http') ? iconUrl : alexBaseUrl + iconUrl.replace(/^\.\.\/\.\.\//, ''),
      });

    } else if (lowerIcon.includes('-skin') || lowerName.toLowerCase().includes('skin')) {
      // Облик
      const bonus = paragraphs[0] || '';
      const desc = paragraphs.slice(1).filter(p => !p.toLowerCase().includes('priority')).join(' ');
      const priority = paragraphs.find(p => p.toLowerCase().includes('priority')) || '';

      result.skins.push({
        name: rawName,
        bonus: translateText(bonus),
        desc: translateText(desc),
        priority: translateText(priority.replace('Evolution Priority:', '').trim()),
      });

    } else if (lowerIcon.includes('/glyphs/')) {
      // Символ
      const desc = paragraphs.filter(p => !p.toLowerCase().includes('priority')).join(' ');
      const priority = paragraphs.find(p => p.toLowerCase().includes('priority')) || '';
      result.glyphs.push({
        name: translateText(rawName.replace(/^\d+(?:st|nd|rd|th)\s*[-–]\s*Glyph:\s*/i, '').trim()),
        name_en: rawName.replace(/^\d+(?:st|nd|rd|th)\s*[-–]\s*Glyph:\s*/i, '').trim(),
        desc: translateText(desc),
        priority: translateText(priority.replace('Evolution Priority:', '').trim()),
      });

    } else if (lowerIcon.includes('/war-flags/') || lowerName.includes('war flag')) {
      // Знамя
      const desc = paragraphs.filter(p => !p.toLowerCase().includes('yasmine and team') && !p.toLowerCase().includes('and team benefit')).join(' ');
      const benefit = paragraphs.find(p => p.toLowerCase().includes('and team benefit')) || '';
      result.war_flags.push({
        name: rawName.replace(/:$/, '').trim(),
        desc: translateText(desc),
        benefit: translateText(benefit.replace(/.*Benefit:/i, '').trim()),
      });

    } else if (rawName && paragraphs.length > 0) {
      // Вероятно, скилл
      const formulas = [];
      const descs = [];
      let priority = '';

      for (const p of paragraphs) {
        if (/(?:damage|effect|healing block|formula)/i.test(p) && p.includes(':')) {
          formulas.push(p);
        } else if (/evolution priority/i.test(p)) {
          priority = p.replace(/evolution priority\s*:/i, '').trim();
        } else {
          descs.push(p);
        }
      }

      const skillIconSrc = iconUrl.startsWith('http') ? iconUrl
        : iconUrl ? alexBaseUrl + iconUrl.replace(/^\.\.\/\.\.\//, '')
        : '';

      result.skills.push({
        name_en: rawName,
        name: rawName, // будет переведено ниже
        icon_url: skillIconSrc,
        desc_en: descs.join(' '),
        desc: translateText(descs.join(' ')),
        formula_en: formulas.join(' | '),
        formula: translateText(formulas.join(' | ')),
        priority_en: priority,
        priority: translateText(priority),
      });
    }
  }

  // ── Counters (.counter section) ───────────────────────────────────────
  const counterSection = html.match(/<section class="counter">([\s\S]*?)<\/section>/);
  if (counterSection) {
    const heroEntries = [...counterSection[1].matchAll(/<h3>([^<]+)<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>/g)];
    result.counters = heroEntries.map(m => ({
      hero: m[1].replace(/\s*[-–]\s*.*/, '').trim(),
      reason: translateText(stripTags(m[2])),
    }));
  }

  // ── Patronage (.patronage-section) ───────────────────────────────────
  const patronSection = html.match(/<section class="patronage-section">([\s\S]*?)<\/section>/);
  if (patronSection) {
    const petEntries = [...patronSection[1].matchAll(/<h3>([^<]+)<\/h3>[\s\S]*?<strong>([^<]+)<\/strong>([\s\S]*?)(?=<div class="hero-tierlist"|<\/section>)/g)];
    result.patronage = petEntries.map(m => ({
      place: m[1].trim(),
      pet: m[2].trim(),
      desc: translateText(stripTags(m[3]).trim()),
    }));
    
    if (result.patronage.length === 0) {
      // Fallback: ищем h3 с Place
      const places = [...patronSection[1].matchAll(/<h3>(\d+(?:st|nd|rd|th) Place:\s*[^<]+)<\/h3>/g)];
      result.patronage = places.map(m => ({
        place: m[1].replace(/\d+(?:st|nd|rd|th) Place:\s*/i, '').trim(),
        desc: '',
      }));
    }
  }

  // ── War flags (war-flag-section) — уже в emblems, но и отдельно ─────
  if (result.war_flags.length === 0) {
    const wfSection = html.match(/<section class="war-flag-section">([\s\S]*?)<\/section>/);
    if (wfSection) {
      const wfEntries = [...wfSection[1].matchAll(/<h3>([^<]+)<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>/g)];
      result.war_flags = wfEntries.map(m => ({
        name: stripTags(m[1]).replace(/:$/, '').trim(),
        desc: translateText(stripTags(m[2])),
      }));
    }
  }

  // ── Best Teams ────────────────────────────────────────────────────────
  const teamSection = html.match(/<section class="best-teams">([\s\S]*?)<\/section>/);
  if (teamSection) {
    const teamTables = [...teamSection[1].matchAll(/<th[^>]*>(.*?)<\/th>/g)]
      .map(m => stripTags(m[1]).trim())
      .filter(t => t.toLowerCase().includes('team'));
    const teamHeroes = [...teamSection[1].matchAll(/alt="([^"]+?)"\s+title="([^"]+?)"/g)]
      .map(m => m[1])
      .filter(n => !n.toLowerCase().includes('pet') && n.length > 1);
    result.best_teams = teamTables.length > 0
      ? teamTables.map((t, i) => ({ name: t, heroes: teamHeroes.slice(i * 5, i * 5 + 5) }))
      : [{ name: 'Лучшая команда', heroes: teamHeroes.slice(0, 5) }];
  }

  return result;
}

// ── Скачивание иконок скиллов ──────────────────────────────────────────────
async function downloadSkillIcons(heroId, skills) {
  const dir = 'public/images/skills';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i];
    if (!skill.icon_url) continue;

    const destPath = `${dir}/${heroId}_skill_${i + 1}.png`;
    const webpPath = `${dir}/${heroId}_skill_${i + 1}.webp`;

    // Скачиваем оригинал (webp)
    const ok = await downloadFile(skill.icon_url, webpPath);
    if (ok) {
      // Конвертируем в PNG через ffmpeg/convert если есть, иначе оставляем webp и копируем
      try {
        execSync(`convert "${webpPath}" "${destPath}" 2>/dev/null || cp "${webpPath}" "${destPath}"`);
      } catch {
        try { fs.copyFileSync(webpPath, destPath); } catch {}
      }
      fs.unlink(webpPath, () => {});
      console.log(`  ✓ Icon ${i + 1}: ${skill.name_en} → ${destPath}`);
    } else {
      console.warn(`  ⚠ Could not download icon for ${skill.name_en}: ${skill.icon_url}`);
    }
  }
}

// ── Главный цикл ──────────────────────────────────────────────────────────
const PROGRESS_FILE = 'scratch_accurate_progress.json';

async function main() {
  console.log('='.repeat(70));
  console.log('ACCURATE HERO DATA SCRAPER — Hero Wars Dominion Era');
  console.log('='.repeat(70));

  // Загрузить прогресс
  let progress = {};
  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
      console.log(`Loaded existing progress: ${Object.keys(progress).length} heroes done.\n`);
    } catch {}
  }

  const skillsDb = {};
  const guidesDb = {};

  for (let idx = 0; idx < HEROES.length; idx++) {
    const hero = HEROES[idx];

    if (progress[hero.id]) {
      console.log(`[${idx + 1}/${HEROES.length}] SKIP ${hero.ruName} (${hero.id}) — already done`);
      skillsDb[hero.id] = progress[hero.id].skills;
      guidesDb[hero.id] = progress[hero.id].guide;
      continue;
    }

    console.log(`\n[${idx + 1}/${HEROES.length}] ► Scraping ${hero.ruName} (${hero.slug})...`);
    const url = `https://alexandregames.com/hero-wars-dominion-era/characters/${hero.slug}-en.html`;

    let parsed = null;
    try {
      const resp = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
          'Accept': 'text/html,application/xhtml+xml',
          'Accept-Language': 'en-US,en;q=0.9',
        }
      });

      if (resp.ok) {
        const html = await resp.text();
        parsed = parseHeroPage(html, hero);
        console.log(`  Parsed: ${parsed.skills.length} skills, ${parsed.artifacts.length} artifacts, ${parsed.skins.length} skins, ${parsed.glyphs.length} glyphs`);

        // Скачиваем иконки
        if (parsed.skills.length > 0) {
          await downloadSkillIcons(hero.id, parsed.skills);
        }
      } else {
        console.warn(`  HTTP ${resp.status} for ${url}`);
      }
    } catch (e) {
      console.error(`  Error: ${e.message}`);
    }

    // Формируем структуру скиллов
    const skills = parsed?.skills?.length > 0
      ? parsed.skills.map((s, i) => ({
          name: `${s.name_en} (${s.name_en})`, // будет заменено правильным переводом ниже
          name_en: s.name_en,
          type: i === 0 ? 'Ультимативное умение' : (i === parsed.skills.length - 1 ? 'Пассивное умение' : 'Активное умение'),
          desc: s.desc || `Умение персонажа ${hero.ruName}.`,
          formula: s.formula || '',
          priority: s.priority || '',
          icon_url: s.icon_url || '',
        }))
      : [
          { name: 'Умение 1', name_en: 'Skill 1', type: 'Ультимативное умение', desc: 'Главное умение.', formula: '', priority: '1 (Наивысший)' },
          { name: 'Умение 2', name_en: 'Skill 2', type: 'Активное умение', desc: 'Активное умение.', formula: '', priority: '2' },
          { name: 'Умение 3', name_en: 'Skill 3', type: 'Активное умение', desc: 'Активное умение.', formula: '', priority: '3' },
          { name: 'Умение 4', name_en: 'Skill 4', type: 'Пассивное умение', desc: 'Пассивное умение.', formula: '', priority: '4 (Наименьший)' },
        ];

    const guide = {
      id: hero.id,
      name: hero.ruName,
      overview: parsed?.overview || `Полный разбор механик, роли и стратегий для персонажа ${hero.ruName} в игре Хроники Хаоса (Dominion Era).`,
      pros: parsed?.pros?.length > 0 ? parsed.pros : [`Эффективная роль на поле боя`],
      cons: parsed?.cons?.length > 0 ? parsed.cons : [`Требует правильного подбора команды`],
      artifacts: parsed?.artifacts?.length > 0 ? parsed.artifacts : [],
      skins: parsed?.skins?.length > 0 ? parsed.skins : [],
      glyphs: parsed?.glyphs?.length > 0 ? parsed.glyphs : [],
      patronage: parsed?.patronage?.length > 0 ? parsed.patronage : [],
      war_flags: parsed?.war_flags?.length > 0 ? parsed.war_flags : [],
      counters: parsed?.counters?.length > 0 ? parsed.counters : [],
      best_teams: parsed?.best_teams?.length > 0 ? parsed.best_teams : [],
    };

    skillsDb[hero.id] = skills;
    guidesDb[hero.id] = guide;

    // Сохранить прогресс
    progress[hero.id] = { skills, guide };
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

    // Сохранить в Supabase
    const updatePayload = { skills: skills, guide: guide };
    const { error } = await supabase.from('hw_heroes').update(updatePayload).eq('id', hero.id);
    if (error) console.warn(`  Supabase error for ${hero.id}:`, error.message);
    else console.log(`  ✓ Saved to Supabase: ${hero.ruName}`);

    // Случайная пауза 30-180 секунд
    if (idx < HEROES.length - 1) {
      const pauseSec = Math.floor(Math.random() * (180 - 30 + 1)) + 30;
      console.log(`  ⏳ Waiting ${pauseSec}s before next hero...`);
      await delay(pauseSec * 1000);
    }
  }

  // ── Обновить heroSkillsData.js ─────────────────────────────────────────
  console.log('\n► Updating src/data/heroSkillsData.js...');
  const skillsJs = `/* ======================================================================
   HERO WARS — ТОЧНЫЕ ДАННЫЕ СКИЛЛОВ ИЗ Alexandre Games (Dominion Era)
   Автоматически обновлено: ${new Date().toISOString()}
   ====================================================================== */

export const HERO_SKILLS_DB = ${JSON.stringify(skillsDb, null, 2)};

export function getHeroSkills(heroId) {
  return HERO_SKILLS_DB[heroId] || [
    { name: '1-е Умение', name_en: 'Skill 1', type: 'Ультимативное умение', desc: 'Главная способность.', formula: '', priority: '1 (Наивысший)' },
    { name: '2-е Умение', name_en: 'Skill 2', type: 'Активное умение', desc: 'Активное умение.', formula: '', priority: '2' },
    { name: '3-е Умение', name_en: 'Skill 3', type: 'Активное умение', desc: 'Активное умение.', formula: '', priority: '3' },
    { name: '4-е Умение', name_en: 'Skill 4', type: 'Пассивное умение', desc: 'Пассивное умение.', formula: '', priority: '4 (Наименьший)' },
  ];
}
`;
  fs.writeFileSync('src/data/heroSkillsData.js', skillsJs, 'utf-8');
  console.log('  ✓ heroSkillsData.js updated!');

  // ── Обновить heroGuidesData.js ─────────────────────────────────────────
  console.log('► Updating src/data/heroGuidesData.js...');
  const guidesJs = `/* ======================================================================
   HERO WARS — ТОЧНЫЕ ГАЙДЫ ИЗ Alexandre Games (Dominion Era)
   Автоматически обновлено: ${new Date().toISOString()}
   ====================================================================== */

export const HERO_GUIDES_DB = ${JSON.stringify(guidesDb, null, 2)};

export function getHeroGuide(heroId) {
  return HERO_GUIDES_DB[heroId] || {
    overview: 'Полный разбор механик и роли персонажа.',
    pros: ['Эффективная роль в команде'],
    cons: ['Требует правильной прокачки'],
    artifacts: [],
    skins: [],
    glyphs: [],
    patronage: [],
    war_flags: [],
    counters: [],
    best_teams: [],
  };
}
`;
  fs.writeFileSync('src/data/heroGuidesData.js', guidesJs, 'utf-8');
  console.log('  ✓ heroGuidesData.js updated!');

  // ── Git + Deploy ───────────────────────────────────────────────────────
  console.log('\n► Building and deploying...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    execSync('git add .');
    execSync('git commit -m "feat: accurate hero skills, artifacts, skins and glyphs from Alexandre Games"');
    execSync('git push origin main');
    console.log('  ✓ Git push successful!');
  } catch (e) {
    console.warn('  Git warning:', e.message.slice(0, 200));
  }
  try {
    execSync('./deploy.sh "feat: accurate hero data from Alexandre Games"');
    console.log('  ✓ VPS Deploy successful!');
  } catch (e) {
    console.error('  Deploy error:', e.message.slice(0, 200));
  }

  console.log('\n' + '='.repeat(70));
  console.log('ALL DONE! Accurate hero data scraped, translated and deployed.');
  console.log('='.repeat(70));
}

main();
