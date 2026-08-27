import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
async function run() {
  const res = await fetch('https://alexandregames.com/hero-wars-dominion-era/characters/lara-croft-en.html');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const skinsHeader = $('h2, h3').filter((i, el) => $(el).text().toLowerCase().includes('best skins'));
  let current = skinsHeader.first().next();
  while (current.length && !current.is('h2')) {
    if (current.prop('tagName') === 'DIV' || current.prop('tagName') === 'H3' || current.prop('tagName') === 'P') {
       console.log(current.prop('tagName'), current.text().trim().substring(0, 150));
    }
    current = current.next();
  }
}
run();
