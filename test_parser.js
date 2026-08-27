import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

async function parseHero(slug) {
  const url = `https://alexandregames.com/hero-wars-dominion-era/characters/${slug}-en.html`;
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);

  const guide = {
    artifacts: [],
    skins: [],
    glyphs: [],
    war_flags: [],
    patronage: [],
    conclusion: ""
  };

  // Find all h2 and h3
  let currentSection = "";
  
  $('h2, h3, h4').each((i, el) => {
    const text = $(el).text().trim().toLowerCase();
    
    if (text.includes('artifact evolution priority')) currentSection = "artifacts";
    else if (text.includes('best skins')) currentSection = "skins";
    else if (text.includes('glyph evolution priority') || text.includes('glyphs priority')) currentSection = "glyphs";
    else if (text.includes('best war flag')) currentSection = "war_flags";
    else if (text.includes('best patronage')) currentSection = "patronage";
    else if (text.includes('final thoughts') || text.includes('conclusion')) currentSection = "conclusion";
    
    // Parse individual items inside a section based on headers
    if (currentSection === "artifacts" && $(el).is('h3, h4') && text.includes('artifact')) {
        let name = $(el).text().trim();
        let desc = $(el).next('p').text().trim();
        guide.artifacts.push({ name, desc });
    }
  });

  console.log(JSON.stringify(guide, null, 2));
}

parseHero('byrna');
