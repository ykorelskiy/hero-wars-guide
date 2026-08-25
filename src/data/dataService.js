import { supabase } from '../lib/supabase.js';
import {
  HEROES as fallbackHeroes,
  TEAMS as fallbackTeams,
  ADVICE as fallbackAdvice
} from './fallbackData.js';

let cache = {
  heroes: null,
  teams: null,
  advice: null,
  isOffline: false,
};

export async function loadAllData() {
  try {
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Supabase request timeout')), 3000));
    const loadPromise = Promise.all([
      supabase.from('hw_heroes').select('*'),
      supabase.from('hw_teams').select('*'),
      supabase.from('hw_advice').select('*'),
    ]);

    const [hRes, tRes, aRes] = await Promise.race([loadPromise, timeout]);

    if (hRes.error || !hRes.data || hRes.data.length === 0) throw new Error('Heroes load error');
    if (tRes.error || !tRes.data || tRes.data.length === 0) throw new Error('Teams load error');
    if (aRes.error || !aRes.data || aRes.data.length === 0) throw new Error('Advice load error');

    cache.heroes = hRes.data.map(h => ({ ...h, archetypes: h.archetypes || [] }));
    cache.teams = tRes.data;
    
    // Transform array of advice rows back to object key-value { archetype: { label, desc, counterTeams, reason } }
    const adviceMap = {};
    aRes.data.forEach(row => {
      adviceMap[row.archetype] = {
        label: row.label,
        desc: row.description,
        counterTeams: row.counter_teams,
        reason: row.reasons,
      };
    });
    cache.advice = adviceMap;
    cache.isOffline = false;
    console.log('✓ Loaded data from Supabase');
  } catch (err) {
    console.warn('⚠️ Supabase load failed, using fallback offline data:', err.message || err);
    cache.heroes = fallbackHeroes.map(h => ({ ...h, archetypes: h.archetypes || [] }));
    cache.teams = fallbackTeams;
    cache.advice = fallbackAdvice;
    cache.isOffline = true;
  }
}

export function getHeroes() {
  return cache.heroes || fallbackHeroes;
}

export function getTeams() {
  return cache.teams || fallbackTeams;
}

export function getAdvice() {
  return cache.advice || fallbackAdvice;
}

export function isOfflineMode() {
  return cache.isOffline;
}

export function heroById(id) {
  return getHeroes().find(h => h.id === id);
}

export function teamById(id) {
  return getTeams().find(t => t.id === id);
}

// Log analysis recommendation to Supabase
export async function logBattleRecommendation(selectedHeroes, archetype, recommendedTeams) {
  try {
    let sessionId = localStorage.getItem('hw_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      localStorage.setItem('hw_session_id', sessionId);
    }
    
    await supabase.from('hw_battle_log').insert({
      session_id: sessionId,
      selected_heroes: Array.from(selectedHeroes),
      detected_archetype: archetype,
      recommended_teams: recommendedTeams,
    });
  } catch (e) {
    console.warn('Failed to log recommendation:', e);
  }
}
