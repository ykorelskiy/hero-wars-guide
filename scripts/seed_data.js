#!/usr/bin/env node
/**
 * Seed script: imports HEROES, TEAMS, ADVICE from data.js into Supabase hw schema.
 * Usage: node scripts/seed_data.js
 * 
 * NOTE: Uses dynamic import to load data.js as a side-effect module,
 * extracting globals via vm context.
 */

import { readFileSync } from 'fs';
import { createClient } from '@supabase/supabase-js';
import vm from 'vm';

// --- Config ---
const SUPABASE_URL = 'https://zyoznyeqvorhztrpgdjw.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_KEY) {
  console.error('Set SUPABASE_SERVICE_ROLE_KEY or VITE_SUPABASE_ANON_KEY env var');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// --- Load data.js via vm ---
const code = readFileSync(new URL('../data.js', import.meta.url), 'utf-8')
  .replace(/^const /gm, 'var '); // const is block-scoped in vm, var leaks to context
const ctx = {};
vm.createContext(ctx);
vm.runInContext(code, ctx);
const { HEROES, TEAMS, ADVICE } = ctx;

console.log(`Loaded: ${HEROES.length} heroes, ${TEAMS.length} teams, ${Object.keys(ADVICE).length} advice rules`);

// --- Seed Heroes ---
async function seedHeroes() {
  await supabase.from('hw_heroes').delete().neq('id', '___none___');
  
  const { error } = await supabase.from('hw_heroes').insert(
    HEROES.map(h => ({
      id: h.id,
      name: h.name,
      role: h.role,
      archetypes: h.archetypes,
    }))
  );
  if (error) throw new Error(`Heroes insert failed: ${error.message}`);
  console.log(`✓ ${HEROES.length} heroes inserted`);
}

// --- Seed Teams ---
async function seedTeams() {
  await supabase.from('hw_teams').delete().neq('id', '___none___');
  
  const { error } = await supabase.from('hw_teams').insert(
    TEAMS.map(t => ({
      id: t.id,
      tier: t.tier,
      name: t.name,
      tag: t.tag,
      lineup: t.lineup,
      hook: t.hook,
      mechanics: t.mechanics,
      build: t.build,
      counters: t.counters,
      subs: t.subs,
      pros: t.pros,
      cons: t.cons,
    }))
  );
  if (error) throw new Error(`Teams insert failed: ${error.message}`);
  console.log(`✓ ${TEAMS.length} teams inserted`);
}

// --- Seed Advice ---
async function seedAdvice() {
  await supabase.from('hw_advice').delete().neq('archetype', '___none___');
  
  const rows = Object.entries(ADVICE).map(([key, v]) => ({
    archetype: key,
    label: v.label,
    description: v.desc,
    counter_teams: v.counterTeams,
    reasons: v.reason,
  }));
  
  const { error } = await supabase.from('hw_advice').insert(rows);
  if (error) throw new Error(`Advice insert failed: ${error.message}`);
  console.log(`✓ ${rows.length} advice rules inserted`);
}

// --- Run ---
try {
  await seedHeroes();
  await seedTeams();
  await seedAdvice();
  console.log('\n🎉 All data seeded successfully!');
} catch (err) {
  console.error('Seed failed:', err.message);
  process.exit(1);
}
