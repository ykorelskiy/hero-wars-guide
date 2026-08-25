/* ======================================================================
   HERO WARS — TIER LIST DATABASE (100% Dominion Era Sync)
   ====================================================================== */

export const TIER_RANKS = {
  'S++': {
    name: 'S++ Tier (Божественная Мета)',
    color: '#ef4444',
    bg: 'rgba(239, 68, 68, 0.15)',
    border: '#f87171',
    desc: 'Абсолютные лидеры мета-игры. Определяют стратегию боёв в Арене и Межсерверной Войне ГИ.'
  },
  'S+': {
    name: 'S+ Tier (Топовые Герои)',
    color: '#f97316',
    bg: 'rgba(249, 115, 22, 0.15)',
    border: '#fb923c',
    desc: 'Высокоэффективные мета-персонажи, входящие в 90%+ сильнейших связок.'
  },
  'S': {
    name: 'S Tier (Сильные Герои)',
    color: '#eab308',
    bg: 'rgba(234, 179, 8, 0.15)',
    border: '#facc15',
    desc: 'Отличные узкоспециализированные герои и надёжные керри/танки/саппорты.'
  },
  'A+': {
    name: 'A+ Tier (Надёжный Выбор)',
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.15)',
    border: '#60a5fa',
    desc: 'Сильные ситуативные персонажи для специализированных пачек.'
  },
  'A': {
    name: 'A Tier (Хорошая Классика)',
    color: '#06b6d4',
    bg: 'rgba(6, 182, 212, 0.15)',
    border: '#22d3ee',
    desc: 'Сбалансированные герои для базовых пачек и средних этапов игры.'
  },
  'B': {
    name: 'B Tier (Ситуативные)',
    color: '#6b7280',
    bg: 'rgba(107, 114, 128, 0.15)',
    border: '#9ca3af',
    desc: 'Герои для специфических контр-составов или начального прохождения.'
  }
};

export const HERO_TIERS = {
  electra: 'S++',
  byrna: 'S++',
  fluffy: 'S++',
  cascade: 'S++',
  aidan: 'S+',
  adam: 'S+',
  amira: 'S+',
  augustus: 'S+',
  aurora: 'S+',
  dante: 'S+',
  guus: 'S+',
  heidi: 'S+',
  isaac: 'S+',
  iris: 'S+',
  ishmael: 'S+',
  julius: 'S+',
  krista: 'S+',
  laracroft: 'S+',
  lyria: 'S+',
  nebula: 'S+',
  orion: 'S+',
  qingmao: 'S+',
  rufus: 'S+',
  sebastian: 'S+',
  somna: 'S+',
  thea: 'S+',
  yasmine: 'S+',
  arachne: 'S',
  astaroth: 'S',
  celeste: 'S',
  corvus: 'S',
  dorian: 'S',
  folio: 'S',
  galahad: 'S',
  helios: 'S',
  jorgen: 'S',
  kayla: 'S',
  keira: 'S',
  martha: 'S',
  mojo: 'S',
  morrigan: 'S',
  mushy: 'S',
  polaris: 'S',
  ninjaturtles: 'S',
  andvari: 'A+',
  cleaver: 'A+',
  faceless: 'A+',
  fafnir: 'A+',
  jhu: 'A+',
  judge: 'A+',
  lars: 'A+',
  lian: 'A+',
  phobos: 'A+',
  satori: 'A+',
  alvanor: 'A',
  artemis: 'A',
  astrid: 'A',
  cornelius: 'A',
  daredevil: 'A',
  ginger: 'A',
  jet: 'A',
  karkh: 'A',
  maya: 'A',
  tristan: 'A',
  chaba: 'B',
  darkstar: 'B',
  elmir: 'B',
  fox: 'B',
  kai: 'B',
  lilith: 'B',
  luther: 'B',
  markus: 'B',
  peppy: 'B',
  ziri: 'B',
};

export function getHeroTier(heroId) {
  return HERO_TIERS[heroId] || 'B';
}
