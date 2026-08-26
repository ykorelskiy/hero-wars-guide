import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);
const ai = new GoogleGenAI({}); // Автоматически подхватит GEMINI_API_KEY из .env

async function fetchHtml(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return await response.text();
}

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
8. Main stat (главная характеристика) для Адама - это Ловкость (Agility). У других героев может быть другая.
9. Используй переданные ссылки на картинки (изображения скиллов, артефактов) и вставь их в соответствующие поля "icon_url" (для скиллов) и "icon" (для артефактов).
10. JSON должен строго соответствовать требуемой структуре.
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
        skills: {
            type: "ARRAY",
            items: {
                type: "OBJECT",
                properties: {
                    name: { type: "STRING", description: "Имя (Английское имя)" },
                    name_en: { type: "STRING", description: "Только английское имя" },
                    type: { type: "STRING", description: "Тип: Активное умение, Пассивное, Ультимативное и т.д." },
                    desc: { type: "STRING", description: "Детальное литературное описание механики" },
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
                    priority: { type: "STRING" }
                }
            }
        }
    },
    required: ["id", "name", "overview", "pros", "cons", "main_stat", "skills", "artifacts", "skins", "glyphs"]
};

async function parseHero(heroId, url) {
    console.log(`[${heroId}] Загрузка страницы...`);
    const html = await fetchHtml(url);
    const $ = cheerio.load(html);

    // Удаляем мусор
    $('script, style, header, footer, nav, .ad-fold-container, ins').remove();

    // Извлекаем ссылки на картинки
    const images = [];
    $('img').each((i, el) => {
        let src = $(el).attr('src');
        if (src) {
            // Нормализуем относительные ссылки
            if (src.startsWith('../../')) src = src.replace('../../', 'https://alexandregames.com/');
            images.push(src);
        }
    });

    const textContent = $('body').text().replace(/\\s+/g, ' ').trim();
    
    // Формируем промпт
    const prompt = `
Анализируй героя с ID: ${heroId}.
Текст страницы (уже очищенный от HTML):
---
${textContent.substring(0, 30000)} // Ограничим, чтобы влезло
---
Найденные на странице изображения (выбери из них правильные для иконок скиллов и артефактов):
${images.join('\\n')}
`;

    console.log(`[${heroId}] Отправка в Gemini AI...`);
    
    const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            responseMimeType: 'application/json',
            responseSchema: SCHEMA,
            temperature: 0.1
        }
    });

    const jsonText = response.text;
    console.log(`[${heroId}] Ответ получен. Парсинг JSON...`);
    
    try {
        const heroData = JSON.parse(jsonText);
        return heroData;
    } catch (e) {
        console.error(`[${heroId}] Ошибка парсинга JSON от Gemini:`, e);
        console.log("Сырой ответ:", jsonText);
        throw e;
    }
}

async function main() {
    const heroId = 'adam';
    const url = 'https://alexandregames.com/hero-wars-dominion-era/characters/adam-en.html';
    
    try {
        const data = await parseHero(heroId, url);
        fs.writeFileSync('adam_test_result.json', JSON.stringify(data, null, 2));
        console.log(`[${heroId}] Успешно сохранен в adam_test_result.json`);
        
        const guide_data = {
            overview: data.overview,
            pros: data.pros,
            cons: data.cons,
            artifacts: data.artifacts,
            skins: data.skins,
            glyphs: data.glyphs,
            counters: [],
            patronage: [],
            war_flags: []
        };
        
        console.log(`[${heroId}] Скачивание иконок скиллов...`);
        for (let i = 0; i < data.skills.length; i++) {
            const skill = data.skills[i];
            if (skill.icon_url) {
                // Имя файла на диске: adam_skill_1.webp
                const filename = `${heroId}_skill_${i+1}.webp`;
                const destPath = path.join('public', 'images', 'skills', filename);
                
                try {
                    const res = await fetch(skill.icon_url);
                    if (res.ok) {
                        const buffer = await res.arrayBuffer();
                        fs.writeFileSync(destPath, Buffer.from(buffer));
                        console.log(` - Сохранено ${filename}`);
                        skill.icon_url = `/images/skills/${filename}`;
                    } else {
                        console.warn(` - Ошибка скачивания ${skill.icon_url}: ${res.status}`);
                    }
                } catch (err) {
                    console.warn(` - Ошибка сети для ${skill.icon_url}`, err);
                }
            }
        }
        
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
            console.log(`[${heroId}] База данных успешно обновлена!`);
            // Update local DB just for immediate reflection
            // Wait, local DB syncs separately via sync_all_heroes.js usually, but we can just run that after.
        }
        
    } catch (e) {
        console.error("Критическая ошибка:", e);
    }
}

main();
