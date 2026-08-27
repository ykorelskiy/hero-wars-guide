import * as cheerio from 'cheerio';
import fs from 'fs';

async function extract(slug) {
  const url = `https://alexandregames.com/hero-wars-dominion-era/characters/${slug}-en.html`;
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  
  let result = `=== ${slug} ===\n`;
  
  // Get all paragraphs
  $('p').each((i, el) => {
    const text = $(el).text().trim();
    if (text.length > 30) {
      result += text + '\n';
    }
  });
  
  return result + '\n\n';
}

(async () => {
  const slugs = ['dante', 'amira', 'fluffy', 'aidan', 'lyria', 'laracroft', 'byrna'];
  let allText = '';
  for (const slug of slugs) {
    allText += await extract(slug);
  }
  fs.writeFileSync('hero_texts.txt', allText);
  console.log('Saved to hero_texts.txt');
})();
