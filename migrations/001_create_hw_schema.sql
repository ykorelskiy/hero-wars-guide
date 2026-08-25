-- ============================================================
-- Hero Wars Guide — Schema Migration
-- Creates isolated schema 'hw' inside the pulse Supabase project.
-- Pulse tables in 'public' remain untouched.
-- ============================================================

-- 1. Create schema
CREATE SCHEMA IF NOT EXISTS hw;

-- 2. Grant access to Supabase roles
GRANT USAGE ON SCHEMA hw TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA hw TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA hw
  GRANT ALL ON TABLES TO anon, authenticated, service_role;

-- 3. Heroes table
CREATE TABLE hw.heroes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  archetypes TEXT[] NOT NULL,
  icon_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Teams table
CREATE TABLE hw.teams (
  id TEXT PRIMARY KEY,
  tier TEXT NOT NULL CHECK (tier IN ('S', 'A', 'B')),
  name TEXT NOT NULL,
  tag TEXT NOT NULL,
  lineup JSONB NOT NULL,
  hook TEXT NOT NULL,
  mechanics JSONB NOT NULL,
  build TEXT NOT NULL,
  counters JSONB NOT NULL,
  subs TEXT NOT NULL,
  pros TEXT[] NOT NULL,
  cons TEXT[] NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Advice table
CREATE TABLE hw.advice (
  archetype TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  description TEXT NOT NULL,
  counter_teams TEXT[] NOT NULL,
  reasons JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 6. Battle log (analytics)
CREATE TABLE hw.battle_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT,
  selected_heroes TEXT[] NOT NULL,
  detected_archetype TEXT NOT NULL,
  recommended_teams TEXT[] NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 7. RLS policies
ALTER TABLE hw.heroes ENABLE ROW LEVEL SECURITY;
ALTER TABLE hw.teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE hw.advice ENABLE ROW LEVEL SECURITY;
ALTER TABLE hw.battle_log ENABLE ROW LEVEL SECURITY;

-- Read access for everyone (public guide data)
CREATE POLICY "heroes_read" ON hw.heroes FOR SELECT USING (true);
CREATE POLICY "teams_read" ON hw.teams FOR SELECT USING (true);
CREATE POLICY "advice_read" ON hw.advice FOR SELECT USING (true);

-- Battle log: anyone can insert (anonymous analytics) and read
CREATE POLICY "battle_log_insert" ON hw.battle_log FOR INSERT WITH CHECK (true);
CREATE POLICY "battle_log_read" ON hw.battle_log FOR SELECT USING (true);
