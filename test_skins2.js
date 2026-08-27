import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
async function run() {
  const res = await fetch('https://alexandregames.com/hero-wars-dominion-era/characters/dante-en.html');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const skinsHeader = $('h2').filter((i, el) => $(el).text().toLowerCase().includes('best skins'));
  let current = skinsHeader.first().next();
  while (current.length && !current.is('h2')) {
    console.log(current.prop('tagName'), current.html() ? current.html().trim().substring(0, 100) : '');
    current = current.next();
  }
}
run();
