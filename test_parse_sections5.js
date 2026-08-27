import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
async function run() {
  const res = await fetch('https://alexandregames.com/hero-wars-dominion-era/characters/dante-en.html');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  // Skins
  const skinsHeader = $('h2, h3').filter((i, el) => $(el).text().toLowerCase().includes('best skins'));
  let current = skinsHeader.first().next();
  console.log('--- SKINS ---');
  while (current.length && !current.is('h2')) {
    if (current.prop('tagName') === 'DIV' || current.prop('tagName') === 'H3') {
       console.log(current.prop('tagName'), current.html().trim().substring(0, 150));
    }
    current = current.next();
  }

  // Glyphs
  const glyphsHeader = $('h2, h3').filter((i, el) => $(el).text().toLowerCase().includes('glyph evolution priority') || $(el).text().toLowerCase().includes('glyphs priority'));
  current = glyphsHeader.first().next();
  console.log('--- GLYPHS ---');
  while (current.length && !current.is('h2')) {
    if (current.prop('tagName') === 'DIV' || current.prop('tagName') === 'H3') {
       console.log(current.prop('tagName'), current.html().trim().substring(0, 150));
    }
    current = current.next();
  }
}
run();
