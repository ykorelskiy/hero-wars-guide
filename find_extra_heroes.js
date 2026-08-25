import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

const alex_heroes = [
  'Electra', 'Byrna', 'Fluffy', 'Cascade', 'Aidan', 'Adam', 'Amira', 'Augustus', 'Aurora', 
  'Dante', 'Guus', 'Heidi', 'Isaac', 'Iris', 'Ishmael', 'Julius', 'Krista', 'Lara Croft', 
  'Lyria', 'Nebula', 'Orion', 'Qing Mao', 'Rufus', 'Sebastian', 'Somna', 'Thea', 'Yasmine', 
  'Arachne', 'Astaroth', 'Celeste', 'Corvus', 'Dorian', 'Folio', 'Galahad', 'Helios', 
  'Jorgen', 'Kayla', 'Keira', 'Martha', 'Mojo', 'Morrigan', 'Mushy and Shroom', 'Polaris', 
  'Ninja Turtles', 'Andvari', 'Cleaver', 'Faceless', 'Fafnir', 'Jhu', 'Judge', 'Lars', 
  'Lian', 'Phobos', 'Satori', 'Alvanor', 'Artemis', 'Astrid and Lucas', 'Cornelius', 
  'Daredevil', 'Ginger', 'Jet', "K'arkh", 'Maya', 'Tristan', 'Chabba', 'Dark Star', 
  'Elmir', 'Fox', 'Kai', 'Lilith', 'Luther', 'Markus', 'Peppy', 'Ziri'
];

function norm(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const alex_norm_map = {};
for (const ah of alex_heroes) {
  const n = norm(ah);
  alex_norm_map[n] = ah;
  if (n === 'laracroft') alex_norm_map['laracroft'] = ah;
  if (n === 'mushyandshroom') alex_norm_map['mushy'] = ah;
  if (n === 'astridandlucas') alex_norm_map['astrid'] = ah;
  if (n === 'qingmao') alex_norm_map['qingmao'] = ah;
  if (n === 'darkstar') alex_norm_map['darkstar'] = ah;
}

async function run() {
  const { data: db_heroes } = await supabase.from('hw_heroes').select('id, name');
  const extra = [];
  for (const db_h of db_heroes) {
    const n_hid = norm(db_h.id);
    if (!alex_norm_map[n_hid]) {
      extra.push(db_h);
    }
  }

  console.log('EXTRA HEROES IN DB TO REMOVE:');
  console.log(JSON.stringify(extra, null, 2));
}

run();
