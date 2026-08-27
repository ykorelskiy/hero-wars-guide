import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);
const KEYS = process.env.GEMINI_KEYS ? process.env.GEMINI_KEYS.split(',') : [];
let currentKeyIndex = 0;
function getAI() {
    const key = KEYS[currentKeyIndex];
    currentKeyIndex = (currentKeyIndex + 1) % KEYS.length;
    return new GoogleGenAI({ apiKey: key });
}

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

const PROGRESS_FILE = 'ai_parse_progress.json';
const DELAY_MS = 15000; // 15s delay

const SYSTEM_INSTRUCTION = `
Ты эксперт по игре Hero Wars: Dominion Era и профессиональный переводчик с английского на русский.
Твоя задача — получить сырой текст со страницы героя (включая HTML-ссылки на картинки, которые я тебе передам) и сформировать ИДЕАЛЬНЫЙ JSON объект героя.
Требования к переводу:
1. Перевод должен быть литературным, понятным и точным, без вкраплений английских слов в русском тексте.
2. Вся игровая терминология должна быть корректной (Physical Attack -> Физическая Атака, Dodge -> Уклонение, Armor Penetration -> Пробивание Брони, Agility -> Ловкость, Health -> Здоровье и т.д.).
3. У каждого скилла в поле "name" ОБЯЗАТЕЛЬНО указывать английское название в скобках. Например: "1 - Захват Цели (Bounty Lock)".
4. Поле "formula" должно содержать ТОЛЬКО математику (например "40% Физическая Атака + 50 * Уровень").
5. Поле "desc" должно содержать художественное описание механики скилла на русском, без цифр формул (они должны быть в поле formula).
6. Поле "priority" должно содержать краткий приоритет (например "Очень Высокий - первый скилл для прокачки").
7. В полях "pros" и "cons" должны быть реальные текстовые плюсы и минусы (например "Высокий урон по одной цели"), а не звездочки мета-рейтинга (⭐⭐⭐). Рейтинги со звездочками игнорируй!
8. Main stat (главная характеристика) для героя должна быть определена из текста: Ловкость (Agility), Сила (Strength) или Интеллект (Intelligence).
9. Используй переданные ссылки на картинки (изображения скиллов, артефактов) и вставь их в соответствующие поля "icon_url" (для скиллов) и "icon" (для артефактов).
10. JSON должен строго соответствовать требуемой структуре.
11. Обязательно извлеки контр-пики (Counters) и синергию (Best Teams / Synergy Heroes), если они есть, и переведи их причины на русский язык.
12. В поле "explanation" для каждого скилла заноси стратегическое объяснение (Skill Explanation), если оно есть в тексте. Обязательно переведи его.
13. ВНИМАНИЕ: Если в любом тексте (особенно в синергии или контр-пиках) упоминается умение другого героя, оформляй это упоминание как HTML-ссылку: \`<a href="#hero/имя_героя_на_английском?skill=номер_скилла" style="color:#38bdf8; text-decoration:underline;">текст</a>\`. Например: \`<a href="#hero/electra?skill=2" style="color:#38bdf8; text-decoration:underline;">вторым умением Электры</a>\`.
14. Извлеки секцию Conclusion (Заключение) в поле conclusion, переведя ее на русский язык.
`;

const SCHEMA = {
    type: "OBJECT",
    properties: {
        id: { type: "STRING" },
        name: { type: "STRING" },
        overview: { type: "STRING", description: "Детальный литературный перевод обзора героя" },
        pros: { type: "ARRAY", items: { type: "STRING" }, description: "Список реальных текстовых плюсов" },
        cons: { type: "ARRAY", items: { type: "STRING" }, description: "Список реальных текстовых минусов" },
        main_stat: { type: "STRING", description: "Ловкость, Сила или Интеллект" },
        counters: { 
            type: "ARRAY", 
            items: { 
                type: "OBJECT", 
                properties: { 
                    hero: { type: "STRING", description: "Имя героя, который контрит (например Fluffy)" }, 
                    reason: { type: "STRING", description: "Почему он контрит (перевод)" } 
                } 
            }, 
            description: "Список контр-пиков (Adam's Counter и т.д.)" 
        },
        best_teams: { 
            type: "ARRAY", 
            items: { 
                type: "OBJECT", 
                properties: { 
                    hero: { type: "STRING", description: "Имя героя для синергии (например Lyria, Polaris)" }, 
                    reason: { type: "STRING", description: "В чем заключается синергия (перевод)" } 
                } 
            }, 
            description: "Лучшая синергия и команды (Best Synergy Heroes / Best Teams)" 
        },
        skills: {
            type: "ARRAY",
            items: {
                type: "OBJECT",
                properties: {
                    name: { type: "STRING", description: "Имя (Английское имя)" },
                    name_en: { type: "STRING", description: "Только английское имя" },
                    type: { type: "STRING", description: "Тип: Активное умение, Пассивное, Ультимативное и т.д." },
                    desc: { type: "STRING", description: "Детальное литературное описание механики (In-game description)" },
                    explanation: { type: "STRING", description: "Развернутое стратегическое объяснение работы скилла (Skill Explanation из текста)" },
                    formula: { type: "STRING", description: "Только математическая формула и цифры, без воды" },
                    priority: { type: "STRING", description: "Приоритет прокачки" },
                    icon_url: { type: "STRING", description: "Ссылка на иконку (из переданного списка)" }
                }
            }
        },
        artifacts: {
            type: "ARRAY",
            items: {
                type: "OBJECT",
                properties: {
                    slot: { type: "STRING", description: "Оружие, Книга или Кольцо" },
                    name: { type: "STRING", description: "Название на русском" },
                    name_ru: { type: "STRING", description: "Тоже название на русском (для обратной совместимости)" },
                    desc: { type: "STRING", description: "Что дает артефакт (Статы)" },
                    priority: { type: "STRING" },
                    icon: { type: "STRING", description: "Ссылка на картинку артефакта" }
                }
            }
        },
        skins: {
            type: "ARRAY",
            items: {
                type: "OBJECT",
                properties: {
                    name: { type: "STRING", description: "Название облика" },
                    bonus: { type: "STRING", description: "Какой стат дает" },
                    priority: { type: "STRING" }
                }
            }
        },
        glyphs: {
            type: "ARRAY",
            items: {
                type: "OBJECT",
                properties: {
                    name: { type: "STRING", description: "Название символа (например Ловкость)" },
                    icon: { type: "STRING" }
                }
            }
        },
        conclusion: { type: "STRING", description: "Финальное заключение (Conclusion), качественно переведенное на русский" }
    },
    required: ["id", "name", "overview", "pros", "cons", "main_stat", "counters", "best_teams", "skills", "artifacts", "skins", "glyphs"]
};

async function fetchHtml(heroId, url) {
    let response = await fetch(url);
    if (!response.ok) {
        const url2 = `https://alexandregames.com/hero-wars-dominion-era/characters/${heroId}.html`;
        response = await fetch(url2);
        if (!response.ok) {
            console.warn(`[${heroId}] Страница не найдена! ИИ сгенерирует данные из своей базы.`);
            return '';
        }
    }
    return await response.text();
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function parseHero(hero, url) {
    const heroId = hero.id;
    console.log(`[${heroId}] Загрузка HTML...`);
    const html = await fetchHtml(hero.slug, url);
    let textContent = '';
    const images = [];

    if (html) {
        const $ = cheerio.load(html);
        $('script, style, header, footer, nav, .ad-fold-container, ins').remove();
        
        $('img').each((i, el) => {
            let src = $(el).attr('src');
            if (src) {
                if (src.startsWith('../../')) src = src.replace('../../', 'https://alexandregames.com/');
                images.push(src);
            }
        });
        textContent = $('body').text().replace(/\s+/g, ' ').trim();
    } else {
        textContent = "Page text is missing. Please use your internal knowledge base about Hero Wars Dominion Era to generate the data for this hero.";
    }

    
    const prompt = `
Анализируй героя с ID: ${heroId}. Русское имя героя: ${hero.ruName}.
Текст страницы (очищенный от HTML):
---
${textContent.substring(0, 30000)}
---
Найденные на странице изображения (выбери из них правильные для иконок скиллов и артефактов):
${images.join('\n')}

ВАЖНОЕ ТРЕБОВАНИЕ: Модель, ты должна сгенерировать максимально подробные данные!
1. Описание каждого скилла (поле desc) должно быть ДЛИННЫМ и подробным. 
2. Раздел гайда (guide.overview) должен быть развернутым текстом на несколько абзацев. НЕ оставляй эти поля пустыми!
`;

    console.log(`[${heroId}] Отправка в Gemini AI...`);
    
    let aiResult = '';
    let retries = 30;
    let success = false;
    
    while(retries > 0 && !success) {
        let ai = getAI();
        try {
            const response = await ai.models.generateContent({
                model: 'gemini-3.5-flash',
                contents: prompt,
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                    responseMimeType: 'application/json',
                    responseSchema: SCHEMA,
                    temperature: 0.7
                }
            });
            aiResult = response.text;
            const lower = aiResult.toLowerCase();
            if (lower.includes('react') || lower.includes('<div') || lower.includes('tests pass')) {
                console.warn(`[${heroId}] Обнаружена галлюцинация, пробуем еще раз...`);
                retries--;
                continue;
            }

            const parsedData = JSON.parse(aiResult);
            let hasEmptySkills = false;
            
            if (parsedData.skills && Array.isArray(parsedData.skills)) {
                parsedData.skills.forEach((s, idx) => {
                    if (!s.desc || s.desc.length < 20) {
                        console.warn(`[${heroId}] Скилл ${idx + 1} слишком короткий или пустой. Отбраковка.`);
                        hasEmptySkills = true;
                    }
                });
            } else {
                hasEmptySkills = true;
            }

            if (!parsedData.guide || !parsedData.guide.overview || parsedData.guide.overview.length < 50) {
                console.warn(`[${heroId}] Гайд слишком короткий или пустой. Отбраковка.`);
                hasEmptySkills = true;
            }

            if (hasEmptySkills) {
                console.warn(`[${heroId}] ИИ вернул неполные данные:`, JSON.stringify(parsedData, null, 2).substring(0, 500));
                retries--;
                continue;
            }

            success = true;
            aiResult = JSON.stringify(parsedData);
        } catch (e) {
            if (e.message.includes('429') || e.message.includes('RESOURCE_EXHAUSTED')) {
                console.log(`[${heroId}] Ошибка 429 (лимиты). Жду 60 секунд для сброса квоты...`);
                await new Promise(r => setTimeout(r, 60000));
                retries--;
            } else {
                console.error(`[${heroId}] Ошибка вызова ИИ:`, e.message);
                retries--;
                await new Promise(r => setTimeout(r, 10000));
            }
        }
    }
    
    if (!success) throw new Error('Не удалось получить корректный ответ от ИИ');
    return JSON.parse(aiResult);
}

async function processHero(hero) {
    const heroId = hero.id;
    const url = `https://alexandregames.com/hero-wars-dominion-era/characters/${hero.slug}-en.html`;
    
    try {
        const data = await parseHero(hero, url);
        
        console.log(`[${heroId}] Скачивание иконок скиллов...`);
        for (let i = 0; i < data.skills.length; i++) {
            const skill = data.skills[i];
            if (skill.icon_url) {
                const filename = `${heroId}_skill_${i+1}.webp`;
                const destPath = path.join('public', 'images', 'skills', filename);
                try {
                    const res = await fetch(skill.icon_url);
                    if (res.ok) {
                        const buffer = await res.arrayBuffer();
                        fs.writeFileSync(destPath, Buffer.from(buffer));
                        skill.icon_url = `/images/skills/${filename}`;
                    }
                } catch (err) {
                    console.warn(` - Ошибка сети для ${skill.icon_url}`);
                }
            }
        }
        
        const guide_data = {
            overview: data.overview,
            pros: data.pros,
            cons: data.cons,
            artifacts: data.artifacts,
            skins: data.skins,
            glyphs: data.glyphs,
            counters: data.counters || [],
            best_teams: data.best_teams || [],
            conclusion: data.conclusion || "",
            patronage: [],
            war_flags: []
        };
        
        console.log(`[${heroId}] Обновление Supabase...`);
        const { error } = await supabase
            .from('hw_heroes')
            .update({ 
                skills: data.skills,
                guide: guide_data 
            })
            .eq('id', heroId);
            
        if (error) {
            console.error(`[${heroId}] Ошибка БД:`, error);
        } else {
            console.log(`[${heroId}] Готово!`);
        }
        return true;
    } catch (e) {
        console.error(`[${heroId}] Произошла ошибка:`, e.message || e);
        return false;
    }
}

async function main() {
    let progress = [];
    if (fs.existsSync(PROGRESS_FILE)) {
        progress = JSON.parse(fs.readFileSync(PROGRESS_FILE));
    }
    
    for (const hero of HEROES) {
        if (progress.includes(hero.id) || hero.id === 'adam') { continue; }
        
        const success = await processHero(hero);
        if (success) {
            progress.push(hero.id);
            fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress));
        }
        
        console.log(`Ожидание ${DELAY_MS/1000} секунд перед следующим героем...`);
        await delay(DELAY_MS);
    }
    
    console.log("Парсинг всех героев завершен!");
    
    // После завершения надо обновить локальные файлы
    const { data: allHeroes } = await supabase.from('hw_heroes').select('*');
    if (allHeroes) {
        const skillsObj = {};
        const guidesObj = {};
        allHeroes.forEach(h => {
            skillsObj[h.id] = h.skills;
            guidesObj[h.id] = h.guide;
        });
        let skillsJs = `export const HERO_SKILLS_DB = ${JSON.stringify(skillsObj, null, 2)};\n\n`;
        skillsJs += `export function getHeroSkills(heroId) {
  return HERO_SKILLS_DB[heroId] || [
    { name: '1-е Умение', name_en: 'Skill 1', type: 'Ультимативное умение', desc: 'Главная способность.', formula: '', priority: '1 (Наивысший)' },
    { name: '2-е Умение', name_en: 'Skill 2', type: 'Активное умение', desc: 'Активное умение.', formula: '', priority: '2' },
    { name: '3-е Умение', name_en: 'Skill 3', type: 'Активное умение', desc: 'Активное умение.', formula: '', priority: '3' },
    { name: '4-е Умение', name_en: 'Skill 4', type: 'Пассивное умение', desc: 'Пассивное умение.', formula: '', priority: '4 (Наименьший)' },
  ];
}\n`;

        let guidesJs = `export const HERO_GUIDES_DB = ${JSON.stringify(guidesObj, null, 2)};\n\n`;
        guidesJs += `export function getHeroGuide(heroId) {
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
}\n`;

        fs.writeFileSync('src/data/heroSkillsData.js', skillsJs);
        fs.writeFileSync('src/data/heroGuidesData.js', guidesJs);
        console.log("Локальные файлы heroSkillsData.js и heroGuidesData.js обновлены!");
    }
}

main();
