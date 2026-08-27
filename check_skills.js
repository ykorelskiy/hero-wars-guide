import * as cheerio from 'cheerio';

async function extract(slug) {
  const url = `https://alexandregames.com/hero-wars-dominion-era/characters/${slug}-en.html`;
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const skillText = [];
  $('p').each((i, el) => {
    const text = $(el).text();
    if (text.includes('is the skill that') || text.includes('skill allows') || $(el).find('strong').length > 0) {
      if (text.length > 50 && !text.includes('Evolution Priority:')) {
          skillText.push(text);
      }
    }
  });
  
  const imgs = [];
  $('img[src*="skills/"], img[src*="skill-"], img[src*="-skill"]').each((i, el) => {
    imgs.push($(el).attr('alt') || $(el).attr('src'));
  });
  
  console.log('=== ' + slug + ' ===');
  console.log('Images:', imgs.slice(0, 4));
  skillText.slice(0, 4).forEach(t => console.log('- ' + t.substring(0, 150) + '...'));
}

(async () => {
  await extract('dante');
  await extract('amira');
  await extract('fluffy');
  await extract('aidan');
  await extract('lyria');
  await extract('laracroft');
})();
