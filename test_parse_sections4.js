import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
async function run() {
  const res = await fetch('https://alexandregames.com/hero-wars-dominion-era/characters/dante-en.html');
  const html = await res.text();
  const $ = cheerio.load(html);
  const artifactHeader = $('h2, h3, h4').filter((i, el) => $(el).text().toLowerCase().includes('artifact evolution'));
  let current = artifactHeader.first().next();
  while (current.length && !current.is('h2') && !current.is('h3')) {
    if (current.prop('tagName') === 'DIV') {
       console.log('--- DIV ---');
       console.log(current.html().trim());
    }
    current = current.next();
  }
}
run();
