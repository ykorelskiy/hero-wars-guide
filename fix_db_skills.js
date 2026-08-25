import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function run() {
  console.log("Upserting Byrna...");
  const byrna_data = {
    id: "byrna",
    name: "Бырна",
    role: "Маг/лечение",
    main_stat: "Интеллект",
    position: "Центральная линия",
    archetypes: ["orion"]
  };
  const { error: e1 } = await supabase.from('hw_heroes').upsert(byrna_data);
  if (e1) console.error("Error upserting Byrna:", e1);
  else console.log("Byrna upserted");

  await supabase.from('hw_heroes').update({ main_stat: 'Сила' }).eq('id', 'electra');
  await supabase.from('hw_heroes').update({ main_stat: 'Ловкость' }).eq('id', 'cascade');
  console.log("Fixed main stats for Electra and Cascade");

  // Fetch Electra skills HTML
  console.log("Fetching Electra page...");
  const res = await fetch('https://alexandregames.com/hero-wars-dominion-era/characters/electra-en.html', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = await res.text();

  // Parse skill images
  const regex = /<img[^>]+src="([^">]*skill[^">]*)"[^>]*>/gi;
  let match;
  const urls = [];
  while ((match = regex.exec(html)) !== null) {
    let src = match[1];
    // filter for electra
    if (src.toLowerCase().includes('electra') && src.toLowerCase().includes('skill')) {
        if (!urls.includes(src)) urls.push(src);
    }
  }
  
  console.log("Found skill images:", urls);

  fs.mkdirSync('public/images/skills', { recursive: true });

  for (let i = 0; i < Math.min(4, urls.length); i++) {
    let src = urls[i];
    let fullUrl = new URL(src, 'https://alexandregames.com/hero-wars-dominion-era/characters/electra-en.html').href;
    console.log(`Downloading ${fullUrl}...`);
    
    const imgRes = await fetch(fullUrl);
    const buffer = await imgRes.arrayBuffer();
    fs.writeFileSync(`public/images/skills/electra_skill_${i + 1}.png`, Buffer.from(buffer));
  }
  console.log("Done");
}

run();
