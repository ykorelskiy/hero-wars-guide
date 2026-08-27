import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

async function parseHero(slug) {
  const res = await fetch(`https://alexandregames.com/hero-wars-dominion-era/characters/${slug}-en.html`);
  const html = await res.text();
  const $ = cheerio.load(html);
  
  console.log(`\n--- ${slug.toUpperCase()} ---`);
  
  // Artifacts
  const artifactHeader = $('h2, h3, h4').filter((i, el) => $(el).text().toLowerCase().includes('artifact evolution'));
  if (artifactHeader.length > 0) {
    let artifactsText = "";
    let current = artifactHeader.first().next();
    while (current.length && !current.is('h2') && !current.is('h3')) {
      artifactsText += current.text().trim() + " ";
      current = current.next();
    }
    console.log("Artifacts found:", artifactsText.substring(0, 100));
  } else {
    console.log("Artifacts NOT FOUND");
  }
}

async function run() {
  await parseHero('byrna');
  await parseHero('dante');
  await parseHero('amira');
  await parseHero('aidan');
}
run();
