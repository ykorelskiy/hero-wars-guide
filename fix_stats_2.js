import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function run() {
  await supabase.from('hw_heroes').update({ main_stat: 'Сила' }).eq('id', 'electra');
  await supabase.from('hw_heroes').update({ main_stat: 'Ловкость' }).eq('id', 'cascade');
  console.log('Fixed Electra to Сила, Cascade to Ловкость');
}
run();
