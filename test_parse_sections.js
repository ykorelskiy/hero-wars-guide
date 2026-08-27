import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

async function run() {
  const res = await fetch('https://alexandregames.com/hero-wars-dominion-era/characters/byrna-en.html');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const artifactHeader = $('h2, h3').filter((i, el) => $(el).text().toLowerCase().includes('artifact evolution'));
  let current = artifactHeader.next();
  while (current.length && !current.is('h2') && !current.is('h3')) {
    console.log(current.prop('tagName'), current.text().trim().substring(0, 50));
    current = current.next();
  }
}
run();
