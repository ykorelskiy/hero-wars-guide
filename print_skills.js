import * as cheerio from 'cheerio';

async function printSkills(slug) {
  const url = `https://alexandregames.com/hero-wars-dominion-era/characters/${slug}-en.html`;
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  
  console.log(`\n\n=== ${slug.toUpperCase()} ===`);
  
  let count = 1;
  $('p').each((i, el) => {
    const text = $(el).text().trim();
    if (text.includes('is the skill that') || text.includes('skill allows') || $(el).find('strong').length > 0) {
      if (text.length > 50 && !text.includes('Evolution Priority:')) {
          console.log(`\nSKILL ${count}:`);
          console.log(text);
          count++;
      }
    }
  });
}

(async () => {
  await printSkills('laracroft');
})();
