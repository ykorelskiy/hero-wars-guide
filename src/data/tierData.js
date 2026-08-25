/* ======================================================================
   HERO WARS — TIER LIST DATABASE
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
  'A': {
    name: 'A Tier (Хорошая Классика)',
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.15)',
    border: '#60a5fa',
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
  // S++ Tier
  electra: 'S++',
  cascade: 'S++',
  fluffy: 'S++',

  // S+ Tier
  aidan: 'S+',
  adam: 'S+',
  amira: 'S+',
  augustus: 'S+',
  aurora: 'S+',
  dante: 'S+',
  heidi: 'S+',
  isaac: 'S+',
  iris: 'S+',
  ishmael: 'S+',
  julius: 'S+',
  krista: 'S+',
  laracroft: 'S+',
  lyria: 'S+',
  nebula: 'S+',
  octavia: 'S+',
  orion: 'S+',
  oya: 'S+',
  polaris: 'S+',
  rufus: 'S+',
  sebastian: 'S+',
  somna: 'S+',
  thea: 'S+',

  // S Tier
  astaroth: 'S',
  arachne: 'S',
  celeste: 'S',
  corvus: 'S',
  folio: 'S',
  galahad: 'S',
  kayla: 'S',
  keira: 'S',
  mushy: 'S',

  // A Tier
  andvari: 'A',
  artemis: 'A',
  astrid: 'A',
  chaba: 'A',
  cornelius: 'A',
  dorian: 'A',
  faceless: 'A',
  fafnir: 'A',
  fox: 'A',
  ginger: 'A',
  helios: 'A',
  jhu: 'A',
  jorgen: 'A',
  judge: 'A',
  kai: 'A',
  lars: 'A',
  lian: 'A',
  luther: 'A',
  markus: 'A',
  martha: 'A',
  maya: 'A',
  mojo: 'A',
  morrigan: 'A',
  peppy: 'A',
  phobos: 'A',
  rigel: 'A',
  satori: 'A',
  tristan: 'A',
  lilith: 'A',
  xesha: 'A',
  jet: 'A',

  // B Tier
  ziri: 'B'
};

export function getHeroTier(heroId) {
  return HERO_TIERS[heroId] || 'A';
}
