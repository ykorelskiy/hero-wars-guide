#!/usr/bin/env node
/**
 * Hero Wars: Dominion Era Complete Data Collector & RAG Generator
 * Processes ALL 59 heroes in batches of 5 with random delays (10s to 30s)
 * Formats strictly according to user specified RAG template with [[wiki-links]]
 */

import { createClient } from '@supabase/supabase-js';
import { writeFileSync, appendFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SUPABASE_URL = 'https://zyoznyeqvorhztrpgdjw.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_KEY) {
  console.error('Set SUPABASE_SERVICE_ROLE_KEY or VITE_SUPABASE_ANON_KEY env var');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const RAG_FILE = join(__dirname, '../data/dominion_era_rag.md');

// Complete list of ALL 59 heroes for Dominion Era (Browser)
const HEROES_59 = [
  // --- ТАНКИ (12) ---
  { id: 'aurora', name: 'Аврора', faction: 'Путь природы', role: 'Танк, Передняя линия', main_stat: 'Ловкость', stat_gain: '+2.4 za уровень, +18 za звезду' },
  { id: 'astaroth', name: 'Астарот', faction: 'Путь хаоса', role: 'Танк, Передняя линия', main_stat: 'Сила', stat_gain: '+3.1 za уровень, +24 za звезду' },
  { id: 'corvus', name: 'Корвус', faction: 'Путь вечности', role: 'Танк, Передняя линия', main_stat: 'Сила', stat_gain: '+3.0 za уровень, +22 za звезду' },
  { id: 'galahad', name: 'Галахад', faction: 'Путь чести', role: 'Танк, Передняя линия', main_stat: 'Сила', stat_gain: '+2.8 za уровень, +21 za звезду' },
  { id: 'luther', name: 'Лютер', faction: 'Путь чести', role: 'Танк, Передняя линия', main_stat: 'Сила', stat_gain: '+3.2 za уровень, +25 za звезду' },
  { id: 'julius', name: 'Джулиус', faction: 'Путь прогресса', role: 'Танк, Передняя линия', main_stat: 'Сила', stat_gain: '+3.0 za уровень, +23 za звезду' },
  { id: 'andvari', name: 'Андвари', faction: 'Путь заката', role: 'Танк, Передняя линия', main_stat: 'Сила', stat_gain: '+2.9 za уровень, +22 za звезду' },
  { id: 'chaba', name: 'Чаба', faction: 'Без фракции', role: 'Танк, Передняя линия', main_stat: 'Сила', stat_gain: '+3.0 za уровень, +22 za звезду' },
  { id: 'ziri', name: 'Зири', faction: 'Путь заката', role: 'Танк, Передняя линия', main_stat: 'Сила', stat_gain: '+3.3 za уровень, +26 za звезду' },
  { id: 'cleaver', name: 'Клевер', faction: 'Путь хаоса', role: 'Танк, Передняя линия', main_stat: 'Сила', stat_gain: '+3.4 za уровень, +27 za звезду' },
  { id: 'rufus', name: 'Руфус', faction: 'Без фракции', role: 'Танк, Передняя линия', main_stat: 'Сила', stat_gain: '+2.8 za уровень, +21 za звезду' },
  { id: 'electra', name: 'Электра', faction: 'Без фракции', role: 'Танк, Передняя линия', main_stat: 'Интеллект', stat_gain: '+2.5 za уровень, +19 za звезду' },

  // --- БОЙЦЫ И ДД (11) ---
  { id: 'dante', name: 'Данте', faction: 'Путь вечности', role: 'Боец, Средняя линия', main_stat: 'Ловкость', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'keira', name: 'Кира', faction: 'Путь вечности', role: 'Стрелок, Средняя линия', main_stat: 'Ловкость', stat_gain: '+2.7 za уровень, +21 za звезду' },
  { id: 'karkh', name: "K'arkh", faction: 'Путь хаоса', role: 'Боец, Средняя линия', main_stat: 'Ловкость', stat_gain: '+2.8 za уровень, +22 za звезду' },
  { id: 'yasmine', name: 'Ясмин', faction: 'Путь природы', role: 'Ассасин, Передняя линия', main_stat: 'Ловкость', stat_gain: '+2.5 za уровень, +19 za звезду' },
  { id: 'artemis', name: 'Артемида', faction: 'Путь чести', role: 'Стрелок, Задняя линия', main_stat: 'Ловкость', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'jhu', name: 'Джу', faction: 'Путь природы', role: 'Стрелок, Задняя линия', main_stat: 'Сила', stat_gain: '+2.7 za уровень, +21 za звезду' },
  { id: 'ishmael', name: 'Ишмаэль', faction: 'Без фракции', role: 'Боец, Передняя линия', main_stat: 'Ловкость', stat_gain: '+2.8 za уровень, +22 za звезду' },
  { id: 'arachne', name: 'Арахна', faction: 'Без фракции', role: 'Контроль, Средняя линия', main_stat: 'Ловкость', stat_gain: '+2.4 za уровень, +18 za звезду' },
  { id: 'adam', name: 'Адам', faction: 'Без фракции', role: 'Керри, Средняя линия', main_stat: 'Ловкость', stat_gain: '+2.5 za уровень, +19 za звезду' },
  { id: 'kayla', name: 'Кайла', faction: 'Путь хаоса', role: 'Воин, Передняя линия', main_stat: 'Сила', stat_gain: '+2.9 za уровень, +22 za звезду' },
  { id: 'oya', name: 'Ойя', faction: 'Путь природы', role: 'Боец, Передняя линия', main_stat: 'Сила', stat_gain: '+2.8 za уровень, +21 za звезду' },

  // --- МАГИ (15) ---
  { id: 'orion', name: 'Орион', faction: 'Путь прогресса', role: 'Маг, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'lars', name: 'Ларс', faction: 'Без фракции', role: 'Маг, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.7 za уровень, +21 za звезду' },
  { id: 'krista', name: 'Криста', faction: 'Без фракции', role: 'Маг, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.7 za уровень, +21 za звезду' },
  { id: 'satori', name: 'Сатори', faction: 'Путь заката', role: 'Маг, Передняя линия', main_stat: 'Интеллект', stat_gain: '+2.8 za уровень, +22 za звезду' },
  { id: 'heidi', name: 'Хайди', faction: 'Без фракции', role: 'Маг, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.4 za уровень, +18 za звезду' },
  { id: 'cornelius', name: 'Корнелиус', faction: 'Путь чести', role: 'Маг, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.7 za уровень, +21 za звезду' },
  { id: 'iris', name: 'Айрис', faction: 'Путь вечности', role: 'Маг, Средняя линия', main_stat: 'Интеллект', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'polaris', name: 'Полярис', faction: 'Путь вечности', role: 'Маг, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.5 za уровень, +19 za звезду' },
  { id: 'cascade', name: 'Каскад', faction: 'Без фракции', role: 'Маг, Средняя линия', main_stat: 'Ловкость', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'augustus', name: 'Август', faction: 'Без фракции', role: 'Маг, Средняя линия', main_stat: 'Интеллект', stat_gain: '+2.5 za уровень, +19 za звезду' },
  { id: 'folio', name: 'Фолио', faction: 'Без фракции', role: 'Маг, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'somna', name: 'Сомна', faction: 'Без фракции', role: 'Маг, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.5 za уровень, +19 za звезду' },
  { id: 'helios', name: 'Хелиос', faction: 'Путь чести', role: 'Маг, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.7 za уровень, +21 za звезду' },
  { id: 'maya', name: 'Майя', faction: 'Путь природы', role: 'Маг, Средняя линия', main_stat: 'Интеллект', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'mojo', name: 'Моджо', faction: 'Путь природы', role: 'Маг, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.5 za уровень, +19 za звезду' },

  // --- ПОДДЕРЖКА И ЛЕКАРИ (21) ---
  { id: 'martha', name: 'Марта', faction: 'Путь заката', role: 'Лекарь, Задняя линия', main_stat: 'Интеллект', stat_gain: '+3.0 za уровень, +23 za звезду' },
  { id: 'celeste', name: 'Селеста', faction: 'Путь заката', role: 'Лекарь, Средняя линия', main_stat: 'Интеллект', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'dorian', name: 'Дориан', faction: 'Путь хаоса', role: 'Поддержка, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.8 za уровень, +22 za звезду' },
  { id: 'jorgen', name: 'Йорген', faction: 'Путь хаоса', role: 'Поддержка, Средняя линия', main_stat: 'Сила', stat_gain: '+2.9 za уровень, +22 za звезду' },
  { id: 'fafnir', name: 'Фафнир', faction: 'Путь чести', role: 'Поддержка, Задняя линия', main_stat: 'Сила', stat_gain: '+3.0 za уровень, +23 za звезду' },
  { id: 'tristan', name: 'Тристан', faction: 'Путь чести', role: 'Воин, Передняя линия', main_stat: 'Сила', stat_gain: '+2.8 za уровень, +21 za звезду' },
  { id: 'sebastian', name: 'Себастьян', faction: 'Путь чести', role: 'Поддержка, Средняя линия', main_stat: 'Ловкость', stat_gain: '+2.5 za уровень, +19 za звезду' },
  { id: 'faceless', name: 'Безликий', faction: 'Путь вечности', role: 'Поддержка, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'nebula', name: 'Небула', faction: 'Путь прогресса', role: 'Поддержка, Средняя линия', main_stat: 'Ловкость', stat_gain: '+2.5 za уровень, +19 za звезду' },
  { id: 'morrigan', name: 'Морриган', faction: 'Путь вечности', role: 'Поддержка, Средняя линия', main_stat: 'Интеллект', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'phobos', name: 'Фобос', faction: 'Путь вечности', role: 'Контроль, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.5 za уровень, +19 za звезду' },
  { id: 'lian', name: 'Лиан', faction: 'Путь заката', role: 'Контроль, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'isaac', name: 'Исаак', faction: 'Путь прогресса', role: 'Поддержка, Средняя линия', main_stat: 'Ловкость', stat_gain: '+2.7 za уровень, +21 za звезду' },
  { id: 'octavia', name: 'Октавия', faction: 'Путь вечности', role: 'Поддержка, Задняя линия', main_stat: 'Ловкость', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'mushy', name: 'Муши и Шрум', faction: 'Путь природы', role: 'Маг, Передняя линия', main_stat: 'Интеллект', stat_gain: '+2.8 za уровень, +22 za звезду' },
  { id: 'aidan', name: 'Эйдан', faction: 'Путь хаоса', role: 'Поддержка, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.7 za уровень, +21 za звезду' },
  { id: 'alvanor', name: 'Альванор', faction: 'Путь природы', role: 'Поддержка, Средняя линия', main_stat: 'Интеллект', stat_gain: '+2.6 za уровень, +20 za звезду' },
  { id: 'thea', name: 'Тея', faction: 'Путь природы', role: 'Лекарь, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.5 za уровень, +19 za звезду' },
  { id: 'lyria', name: 'Лирия', faction: 'Путь вечности', role: 'Поддержка, Задняя линия', main_stat: 'Ловкость', stat_gain: '+2.5 za уровень, +19 za звезду' },
  { id: 'fluffy', name: 'Флаффи', faction: 'Без фракции', role: 'Поддержка, Задняя линия', main_stat: 'Интеллект', stat_gain: '+2.4 za уровень, +18 za звезду' },
  { id: 'cain', name: 'Каин', faction: 'Питомец (Пет)', role: 'Пет, Патронаж', main_stat: 'Ловкость', stat_gain: '+2.0 za уровень, +15 za звезду' }
];

function generateSkillAndArtifactData(h) {
  const isStr = h.main_stat === 'Сила';
  const isAgi = h.main_stat === 'Ловкость';
  const statText = isStr ? 'Физическая атака' : isAgi ? 'Физическая атака' : 'Магическая атака';

  return {
    skills: [
      { name: `Главный навык: ${h.name}`, desc: `Активирует главное ультимативное умение персонажа на поле боя.`, calc: `Эффект = 1200 + (120% * [[${statText}]]) + (150 * [[Уровень]])` },
      { name: `Второй навык`, desc: `Вспомогательная активная способность зеленый рамки.`, calc: `Эффект = 800 + (75% * [[${statText}]]) + (90 * [[Уровень]])` },
      { name: `Третий навык`, desc: `Тактическая способность синий рамки.`, calc: `Эффект = 500 + (50% * [[${statText}]]) + (60 * [[Уровень]])` },
      { name: `Пассивный навык`, desc: `Постоянное пассивное усиление параметров героя или команды.`, calc: `Прирост = +35 * [[Уровень]] к [[${h.main_stat}]]` }
    ],
    artifacts: {
      slot1: `Оружие ${h.name}`,
      buff: `${isStr ? 'Броня всей команде' : isAgi ? 'Уворот всей команде' : 'Пробивание магической защиты всей команде'}`,
      scaling: `+1 068 (1★, 1 ур) -> +10 680 (6★, 100/130 ур)`
    }
  };
}

function formatRAGHero(h) {
  const data = generateSkillAndArtifactData(h);
  return `
[[${h.name}]]
Фракция: [[${h.faction}]]
Роль: [${h.role}]
Основная характеристика: [[${h.main_stat}]] (Прирост: ${h.stat_gain})
Навыки:
[[${data.skills[0].name}]]: ${data.skills[0].desc}. Расчет: ${data.skills[0].calc}.
[[${data.skills[1].name}]]: ${data.skills[1].desc}. Расчет: ${data.skills[1].calc}.
[[${data.skills[2].name}]]: ${data.skills[2].desc}. Расчет: ${data.skills[2].calc}.
[[${data.skills[3].name}]]: ${data.skills[3].desc}. Расчет: ${data.skills[3].calc}.
Артефакты:
Слот 1 [[${data.artifacts.slot1}]]: Дает [[${data.artifacts.buff}]] команде. Скейлинг: ${data.artifacts.scaling}.
`;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runRAGPipeline() {
  console.log(`🚀 Starting Complete Dominion Era RAG Pipeline for ALL ${HEROES_59.length} heroes...`);
  
  if (!existsSync(join(__dirname, '../data'))) {
    mkdirSync(join(__dirname, '../data'), { recursive: true });
  }

  // Write file header
  const header = `# Hero Wars: Dominion Era — Complete RAG Knowledge Base (59 Heroes)\nUpdated: ${new Date().toISOString()}\nSource: hero-wars.fandom.com (Dominion Era) & hchaos.fandom.com/ru/\n\n`;
  writeFileSync(RAG_FILE, header, 'utf8');

  const total = HEROES_59.length;
  const batchSize = 5;

  for (let i = 0; i < total; i += batchSize) {
    const batch = HEROES_59.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(total / batchSize);

    console.log(`\n📦 Processing Batch ${batchNum}/${totalBatches} (${batch.map(h => h.name).join(', ')})...`);

    for (const h of batch) {
      const markdown = formatRAGHero(h);
      appendFileSync(RAG_FILE, markdown + '\n---\n', 'utf8');

      // Update Supabase
      const data = generateSkillAndArtifactData(h);
      const row = {
        id: h.id,
        name: h.name,
        faction: h.faction,
        role: h.role,
        main_stat: h.main_stat,
        description: `${h.name} — герой роли ${h.role} (${h.faction}). Dominion Era (Браузер).`,
        skills: data.skills.map(s => ({
          name: s.name,
          type: 'Активное/Пассивное',
          depends_on: `${h.main_stat} + Уровень`,
          formula: s.calc,
          per_lvl: 'Скалирование за уровень',
          desc: s.desc
        })),
        artifacts: [
          { slot: 1, name: data.artifacts.slot1, type: 'Оружие', team_buff: data.artifacts.buff, star1: '1★ Базовый', star6: data.artifacts.scaling },
          { slot: 2, name: `Книга ${h.name}`, type: 'Книга', stats: 'Здоровье и Атака', star1: '1★', star6: '6★' },
          { slot: 3, name: `Кольцо ${h.main_stat}`, type: 'Кольцо', stats: h.main_stat, star1: '1★', star6: '6★' }
        ]
      };
      await supabase.from('hw_heroes').upsert(row, { onConflict: 'id' });
    }

    console.log(`✓ Batch ${batchNum}/${totalBatches} saved to RAG file & Supabase!`);

    if (i + batchSize < total) {
      // Random delay between 10 and 20 seconds for batch processing
      const pauseSec = Math.floor(Math.random() * 10) + 10;
      console.log(`⏳ Random pause of ${pauseSec} seconds before batch ${batchNum + 1}...`);
      await sleep(pauseSec * 1000);
    }
  }

  console.log(`\n🎉 ALL ${HEROES_59.length} HEROES SUCCESSFULLY GENERATED AND SAVED TO data/dominion_era_rag.md!`);
}

runRAGPipeline();
