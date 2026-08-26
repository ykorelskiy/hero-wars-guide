import fs from 'fs';
const content = fs.readFileSync('parse_adam_test.js', 'utf8');
const modified = content.replace('for (const hero of HEROES) {', 'const hero = HEROES.find(h => h.id === "adam");\n    if (hero) {\n').replace('console.log("Парсинг всех героев завершен!");', '}');
fs.writeFileSync('parse_adam_test.js', modified);
