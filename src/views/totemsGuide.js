/* =========================================================
   Гайд: Тотемы для чайников (Hero Wars: Dominion Era)
   Интерактивная логика, 4 калькулятора, синергии и слияние
   ========================================================= */

// 1. Данные 6 Тотемов
export const TOTEMS_DATA = [
  {
    id: 'fire',
    name: '🔥 Тотем Огня',
    title: 'Вихрь разрушения (Cyclone of Destruction)',
    element: 'fire',
    img: '/images/totems/fire-totem.webp',
    reqText: '3 титана огня',
    reqCount: 3,
    baseSkill: 'Огненный циклон проносится по вражеской команде и наносит колоссальный урон всем ближайшим врагам (до 1 462 000 за удар на 130 ур. 6★). Тотем можно оверчарджить (копить энергию выше 100%), чтобы одним ударом стереть всю пачку соперника.',
    bonusType: 'Атака титанов огня',
    maxBonus: '+299 673 к атаке',
    currency: 'Трофеи Войны гильдий + Изумруды',
    strategy: 'Чистая атака и взрывной темп. Отлично синергирует с Молохом (оглушение), Араджи и супертитанами.'
  },
  {
    id: 'water',
    name: '💧 Тотем Воды',
    title: 'Благословение глубин (Blessing of the Depths)',
    element: 'water',
    img: '/images/totems/water-totem.webp',
    reqText: '3 титана воды',
    reqCount: 3,
    baseSkill: 'Создаёт целебный водоворот на 10 секунд: непрерывно исцеляет раненых союзников (лечение распределяется между пострадавшими) и наносит периодический урон врагам рядом (до 525 000 за тик).',
    bonusType: 'Атака титанов воды',
    maxBonus: '+299 673 к атаке',
    currency: 'Трофеи Войны гильдий + Изумруды',
    strategy: 'Фундамент для выживания в Подземелье (Dungeon) и затяжных боях. Даёт время Сигурду и Нове раскрыть ульты.'
  },
  {
    id: 'earth',
    name: '🌍 Тотем Земли',
    title: 'Стена жизни (Wall of Life)',
    element: 'earth',
    img: '/images/totems/earth-totem.webp',
    reqText: '3 титана земли',
    reqCount: 3,
    baseSkill: 'Воздвигает кристаллический барьер (прочность до 6 750 000 HP на 130 ур. 6★), защищающий всех союзников и отражающий 200% входящего урона обратно в атакующих титанов.',
    bonusType: 'Здоровье титанов земли',
    maxBonus: '+3 995 583 к здоровью',
    currency: 'Трофеи Войны гильдий + Изумруды',
    strategy: 'Оборонительный тотем. Мощно сочетается с Ангусом и щитами Авалона. Внимание: барьер не отражает урон чужих тотемов!'
  },
  {
    id: 'dark',
    name: '🌑 Тотем Тьмы',
    title: 'Чёрная дыра (Black Hole)',
    element: 'dark',
    img: '/images/totems/dark-totem.webp',
    reqText: '2 титана тьмы',
    reqCount: 2,
    baseSkill: 'Открывает чёрную дыру в эпицентре вражеской команды на 5 секунд. Стягивает всех титанов врага в центр и наносит урон (до 2 340 000 за удар; чем ближе к центру, тем выше урон).',
    bonusType: 'Здоровье титанов тьмы',
    maxBonus: '+3 995 583 к здоровью',
    currency: 'Трофеи Столкновения миров (CoW) + Изумруды',
    strategy: 'Стягивает врагов в плотную кучу под AoE-прокаст Тенебриса, Кероса или огненных союзников. Требует всего 2 титанов.'
  },
  {
    id: 'light',
    name: '✨ Тотем Света',
    title: 'Сверхновая (Supernova)',
    element: 'light',
    img: '/images/totems/light-totem.webp',
    reqText: '2 титана света',
    reqCount: 2,
    baseSkill: 'Заряжает Сверхновую в течение 5 секунд. Во время зарядки здоровье ваших титанов НЕ МОЖЕТ упасть ниже 1 (полный иммунитет к гибели!). Затем следует сокрушительный взрыв по всем врагам (до 5 400 000 урона).',
    bonusType: 'Атака титанов света',
    maxBonus: '+299 673 к атаке',
    currency: 'Трофеи Столкновения миров (CoW) + Изумруды',
    strategy: 'Лучший универсальный второй тотем. Защитное окно от смерти спасает от любого ваншота и переворачивает PvP-бои.'
  },
  {
    id: 'distortion',
    name: '🌀 Тотем Искажения',
    title: 'Осколки Искажения (Distortion Tower)',
    element: 'distortion',
    img: '/images/totems/distortion-totem.png',
    reqText: '3 титана искажения (Вальдур считается за 2)',
    reqCount: 3,
    baseSkill: 'Покрывает поле боя смертоносными осколками на 15 секунд. Раз в секунду толчок сотрясает случайного титана; любое перемещение врага по полю наносит ему урон пропорционально пройденной дистанции.',
    bonusType: 'Атака титанов искажения',
    maxBonus: '+299 673 к атаке',
    currency: 'Эхо перемен + Изумруды',
    strategy: 'Контроль позиции и наказание врагов с рывками/отталкиваниями. Пара Вальдур + Алекто сразу активирует тотем!'
  }
];

// 2. Навыки Слияния (12 стихийных + 5 первичных)
export const FUSION_SKILLS_DATA = [
  // Стихийные (Активные)
  {
    id: 'ice-age',
    name: 'Ice Age (Ледниковый период)',
    tier: 'S',
    type: 'el',
    img: '/images/totems/ice-age.webp',
    desc: 'После активации базового тотема врага замораживает всех его титанов на 1 сек (полная потеря хода) и накладывает «Хрупкость»: +55% к любому получаемому урону на 15 секунд.',
    synergy: 'Универсальный топ-1 для PvP. Сбивает тайминг врага и усиливает ваш ответный прокаст.',
    statVal: '+55% входящего урона, заморозка 1 сек, длительность 15 сек'
  },
  {
    id: 'dreamveil',
    name: 'Dreamveil (Завеса снов)',
    tier: 'S',
    type: 'el',
    img: '/images/totems/dreamveil.webp',
    desc: 'После активации базового тотема врага усыпляет ВСЕХ его титанов на 7,75 сек. Спящие титаны бездействуют, пока не получат сильный урон (порог 2 925 000 HP) или пока не истечёт время. Перезарядка: 10 сек.',
    synergy: 'Абсолютный контроль в ручном бою: позволяет переждать бафы врага и точечно уничтожить цель.',
    statVal: 'Сон 7,75 сек, порог пробуждения 2,925 млн урона, кд 10 сек'
  },
  {
    id: 'nova-frare',
    name: 'Nova Flare (Вспышка сверхновой)',
    tier: 'S',
    type: 'el',
    img: '/images/totems/nova-frare.webp',
    desc: 'Создаёт вспышку на 5 сек. Первые 2 секунды здоровье союзников не падает ниже 1 (окно бессмертия), после чего происходит мощнейший взрыв, наносящий 5 449 641 урона всем врагам.',
    synergy: 'Идеален для Огня и Света: спасает команду от ваншота и мгновенно контратакует колоссальным AoE.',
    statVal: '5,45 млн взрывного урона, 2 сек защиты от смерти'
  },
  {
    id: 'last-flash',
    name: 'Last Flash (Последняя вспышка)',
    tier: 'S',
    type: 'el',
    img: '/images/totems/last-flash.webp',
    desc: 'Когда союзный титан должен погибнуть, он впадает в пылающую ярость на 20 сек: скорость +15%, атака +112 125, неуязвимость ко всем эффектам, здоровье не ниже 1. Погибает только после окончания эффекта. Раз за бой.',
    synergy: 'Клатч-навык для танков (Молох, Ангус, Сигурд, Нова в первой линии). Танк живёт ещё 20 сек и спамит станами.',
    statVal: '20 сек неуязвимости, +15% скорости, +112к атаки'
  },
  {
    id: 'murmur-of-the-crags',
    name: 'Murmur of the Crags (Шёпот утёсов)',
    tier: 'A',
    type: 'el',
    img: '/images/totems/murmur-of-the-crags.webp',
    desc: 'Создаёт каменный каскад на поле боя: защитный барьер поглощает 5 654 756 урона со всех союзников и отражает 200% поглощённого урона обратно в атакующих врагов.',
    synergy: 'Лучший защитный выбор для команд Воды и Земли. Даёт время накопить энергию Сигурду и Гипериону.',
    statVal: 'Барьер на 5,65 млн HP + 200% отражения урона'
  },
  {
    id: 'dark-matter',
    name: 'Dark Matter (Тёмная материя)',
    tier: 'A',
    type: 'el',
    img: '/images/totems/dark-matter.webp',
    desc: 'Каждое оглушение (стан) врага призывает комету: наносит 2 437 500 урона и накладывает +75% уязвимости к стихийному урону на 21 секунду.',
    synergy: 'Имба в станящих пачках: Молох (огонь), Нова (вода), Амон и Ригель (свет). Каждое оглушение роняет комету.',
    statVal: '2,44 млн урона кометы, +75% стихийной уязвимости на 21 сек'
  },
  {
    id: 'main-sequence',
    name: 'Main Sequence (Главная последовательность)',
    tier: 'A',
    type: 'el',
    img: '/images/totems/main-sequence.webp',
    desc: 'Каждые 5 секунд перманентно увеличивает показатель атаки всех союзных титанов на +146 250 до самого конца боя.',
    synergy: 'Раскрывается в затяжных оборонительных боях Вода + Земля. Через 30 секунд боя пачка наносит чудовищный урон.',
    statVal: '+146 250 атаки всей команде каждые 5 сек'
  },
  {
    id: 'flame-dance',
    name: 'Flame Dance (Танец пламени)',
    tier: 'A',
    type: 'el',
    img: '/images/totems/flame-dance.webp',
    desc: 'Призывает пламенный вихрь, который проносится по вражеской команде и наносит 973 294 урона при каждой активации.',
    synergy: 'Прямолинейный агрессивный выбор для Огня и Тьмы. Помогает пробить плотные щиты в начале боя.',
    statVal: '973к прямого урона при срабатывании'
  },
  {
    id: 'gravitational-anomaly',
    name: 'Gravitational Anomaly (Гравитационная аномалия)',
    tier: 'B',
    type: 'el',
    img: '/images/totems/gravitational-anomaly.webp',
    desc: 'Создаёт гравитационную воронку в центре вражеской команды на 5 сек, стягивая врагов и нанося до 1 669 078 урона в эпицентре.',
    synergy: 'Хороша под магов и стрелков с сплэш-уроном. Частично дублирует функционал тотема Тьмы.',
    statVal: '1,67 млн урона в эпицентре, стяжка 5 сек'
  },
  {
    id: 'the-depths-whisper',
    name: 'The Depths Whisper (Шёпот глубин)',
    tier: 'B',
    type: 'el',
    img: '/images/totems/the-depths-whisper.webp',
    desc: 'Призывает водяной вихрь на 10 сек: наносит 486 647 урона врагам и восстанавливает 486 647 суммарного здоровья раненым союзникам при каждой активации.',
    synergy: 'Сустейн для Воды и Света. Надёжно в PVE и подземелье, но в быстром PvP уступает взрывным скиллам.',
    statVal: '486к хила + 486к урона за тик'
  },
  {
    id: 'star-dust',
    name: 'Star Dust (Звёздная пыль)',
    tier: 'B',
    type: 'el',
    img: '/images/totems/star-dust.webp',
    desc: 'Магическая буря на 15 сек. Раз в секунду толкает случайного титана. Любое перемещение титана наносит ему 828 750 урона в зависимости от расстояния.',
    synergy: 'Ситуативный контрпик против команд с большим количеством рывков, стяжек и отталкиваний.',
    statVal: '828к урона за движение, толчок раз в 1 сек'
  },
  {
    id: 'wrath-of-the-depths',
    name: 'Wrath of the Depths (Гнев глубин)',
    tier: 'B',
    type: 'el',
    img: '/images/totems/wrath-of-the-depths.webp',
    desc: 'При гибели союзный титан каменеет, взмывает в небо и обрушивается в центр врагов: наносит 2 193 750 урона и оглушает врагов на 4 секунды. Раз за бой.',
    synergy: 'Реактивный навык возмездия. Уступает навыкам упреждающего контроля и спасения титанов.',
    statVal: '2,19 млн урона, 4 сек стана по центру врагов'
  },

  // Первичные (Пассивные)
  {
    id: 'triple-cycle',
    name: 'Triple Cycle (Тройной цикл)',
    tier: 'S',
    type: 'pr',
    img: '/images/totems/triple-cycle.webp',
    desc: 'Самоподдерживающаяся петля: получение щита лечит (39 000 HP/сек); лечение повышает атаку (+170 625); баф атаки накладывает щит (прочность 351 000). Длительность эффектов 12 сек, кд 10 сек.',
    synergy: 'Лучший универсальный первичный навык в игре. Запускается от любых действий лекарей и щитовиков.',
    statVal: 'Щит 351к, атака +170к, хил 39к/сек (цикл 12 сек)'
  },
  {
    id: 'primal-zeal',
    name: 'Primal Zeal (Первичное рвение)',
    tier: 'A',
    type: 'pr',
    img: '/images/totems/primal-zeal.webp',
    desc: 'При использовании базового умения титан с вероятностью 70% мгновенно восстанавливает 255 энергии (кд 5 секунд).',
    synergy: 'Ускоряет перезарядку ульт титанов и ускоряет накопление энергии для повторной ульты тотема.',
    statVal: '+255 энергии с шансом 70% (кд 5 сек)'
  },
  {
    id: 'echo-aegis',
    name: 'Echo Aegis (Эхо-эгида)',
    tier: 'A',
    type: 'pr',
    img: '/images/totems/echo-aegis.webp',
    desc: 'Когда наложенный на союзника щит разрушается, через 5 секунд на него накладывается новый щит прочностью 23,5% от максимального здоровья титана (шанс 120%, избыток идёт в прочность).',
    synergy: 'Превосходно сочетается с Землёй (щиты Авалона) и барьером тотема Земли, создавая каскадную защиту.',
    statVal: 'Новый щит 23,5% от макс HP при пробитии'
  },
  {
    id: 'pulse-of-the-ancients',
    name: 'Pulse of the Ancients (Пульс древних)',
    tier: 'A',
    type: 'pr',
    img: '/images/totems/pulse-of-the-ancients.webp',
    desc: 'Каждое применение способности союзным титаном исцеляет его на 780 000 здоровья (не чаще раза в 8,5 секунд).',
    synergy: 'Надёжный пассивный отхил для выносливых титанов в затяжных боях.',
    statVal: '780 000 лечения после каста умения'
  },
  {
    id: 'call-of-elements',
    name: 'Call of Elements (Зов стихий)',
    tier: 'B',
    type: 'pr',
    img: '/images/totems/call-of-elements.webp',
    desc: 'Атака титана увеличивается пропорционально потерянному здоровью: +14 625 атаки за каждые недостающие 11% HP.',
    synergy: 'Рискованный берсерк-мод. Отлично синергирует с Last Flash, когда титан долго живёт на 1 HP.',
    statVal: '+14 625 атаки за каждые 11% потерянного HP'
  }
];

// 3. Таблица порогов Bad Luck Protection (BLP)
export const BLP_THRESHOLDS = [
  { num: 1,  emeralds: 4500,     comment: 'Фактически бесплатно (квест на 9 призывов по 500💎 возвращает 5000💎). Сильнейшая стихия.' },
  { num: 2,  emeralds: 45000,    comment: 'Гарантированно для вашей сильнейшей по мощи стихии титанов!' },
  { num: 3,  emeralds: 466667,   comment: 'Стихия тотема случайная. Начинается резкий рост порога.' },
  { num: 4,  emeralds: 850000,   comment: 'Случайная стихия.' },
  { num: 5,  emeralds: 1133333,  comment: 'Случайная стихия.' },
  { num: 6,  emeralds: 1416667,  comment: 'Случайная стихия.' },
  { num: 7,  emeralds: 1700000,  comment: 'Случайная стихия.' },
  { num: 8,  emeralds: 1983333,  comment: 'Случайная стихия.' },
  { num: 9,  emeralds: 2266667,  comment: 'Случайная стихия.' },
  { num: 10, emeralds: 2550000,  comment: 'Случайная стихия.' },
  { num: 15, emeralds: 3966667,  comment: 'Случайная стихия.' },
  { num: 20, emeralds: 5433329,  comment: 'Случайная стихия.' },
  { num: 30, emeralds: 8433329,  comment: 'Абсолютный кап Алтаря стихий (максимум 100 фрагментов).' }
];

// 4. Типы сфер
export const SPHERES_DATA = [
  { name: 'Малая элементальная сфера', img: '/images/totems/sphere-lesser-elemental.webp', pool: 'Вода, Огонь, Земля', type: 'Случайный выбор' },
  { name: 'Элементальная сфера призыва', img: '/images/totems/sphere-elemental.webp', pool: 'Вода, Огонь, Земля', type: 'Вы выбираете стихию' },
  { name: 'Сфера призыва духа Света', img: '/images/totems/sphere-light.webp', pool: 'Свет', type: 'Фиксированная стихия' },
  { name: 'Сфера призыва духа Тьмы', img: '/images/totems/sphere-dark.webp', pool: 'Тьма', type: 'Фиксированная стихия' },
  { name: 'Древняя элементальная сфера', img: '/images/totems/sphere-ancient.webp', pool: 'Свет, Тьма', type: 'Случайный выбор' },
  { name: 'Малая абсолютная сфера', img: '/images/totems/sphere-lesser-absolute.webp', pool: 'Вода, Огонь, Земля, Свет, Тьма', type: 'Случайный выбор' },
  { name: 'Абсолютная сфера призыва', img: '/images/totems/sphere-absolute.webp', pool: 'Вода, Огонь, Земля, Свет, Тьма', type: 'Вы выбираете стихию' },
  { name: 'Сфера Искажённого духа', img: '/images/totems/sphere-distorted.png', pool: 'Все 6 стихий (включая Искажение)', type: 'Вы выбираете стихию' }
];

// Рекомендации сборок навыков слияния по стихиям
export const ELEMENT_RECOMMENDED_BUILDS = {
  fire: {
    title: '🔥 Огненная сборка (Максимальный взрывной урон)',
    active: 'Nova Flare или Flame Dance',
    passive: 'Primal Zeal или Triple Cycle',
    reason: 'Огню требуется как можно быстрее стереть вражескую передовую. Nova Flare защищает от смертельного контрудара и наносит колоссальный урон, а Primal Zeal даёт быстрый набор энергии для повторной ульты Молоха и Араджи.'
  },
  water: {
    title: '💧 Водная сборка (Непробиваемый сустейн и контроль)',
    active: 'Murmur of the Crags или Ice Age',
    passive: 'Triple Cycle или Pulse of the Ancients',
    reason: 'Воде нужно время, чтобы Сигурд прожал неуязвимость, а Нова заморозила заднюю линию. Murmur of the Crags поглощает колоссальный урон, а Triple Cycle зацикливает лечение Сигурда в щиты и атаку.'
  },
  earth: {
    title: '🌍 Земляная сборка (Кристаллическая крепость)',
    active: 'Murmur of the Crags или Main Sequence',
    passive: 'Echo Aegis или Triple Cycle',
    reason: 'Земля рассчитывает на затяжной бой и живучесть Ангуса. Echo Aegis постоянно обновляет щиты при их сбивании, а Main Sequence разгоняет атаку команды до небес.'
  },
  light: {
    title: '✨ Сборка Света (Оглушение и контр-атака)',
    active: 'Dark Matter или Ice Age',
    passive: 'Triple Cycle или Primal Zeal',
    reason: 'Титаны Света (Ригель, Амон, Ияри) обладают частыми оглушениями. Dark Matter вызывает комету на каждое оглушение и увеличивает стихийный урон по цели на 75%!'
  },
  dark: {
    title: '🌑 Сборка Тьмы (Агрессивная стяжка и дебаф)',
    active: 'Flame Dance или Gravitational Anomaly',
    passive: 'Triple Cycle или Primal Zeal',
    reason: 'Чёрная дыра стягивает всех врагов в одну точку, где вихрь Flame Dance наносит максимальный концентрированный урон всей пачке врага сразу.'
  },
  distortion: {
    title: '🌀 Сборка Искажения (Осколочная зона и толчки)',
    active: 'Star Dust или Ice Age',
    passive: 'Triple Cycle или Primal Zeal',
    reason: 'Осколочное поле Искажения бьёт за перемещение врагов, а Star Dust добавляет регулярные толчки раз в секунду, провоцируя непрерывный урон за движение.'
  }
};

let isTotemsInitialized = false;

export function initTotemsGuide() {
  if (isTotemsInitialized) return;
  isTotemsInitialized = true;

  renderTotemCards();
  renderSpheresTable();
  renderBLPTable();
  initSquadActivator();
  initBLPCalculator();
  initUpgradeCostCalculator();
  initFusionSkillsViewer();
  initScrollSpy();
  initFaqAccordion();
}

// Рендер 6 карточек тотемов
function renderTotemCards() {
  const container = document.getElementById('totemShowcaseGrid');
  if (!container) return;

  container.innerHTML = TOTEMS_DATA.map(t => `
    <article class="totem-card ${t.element}">
      <div class="totem-card-head">
        <div class="totem-card-img-wrap">
          <img src="${t.img}" alt="${t.name}" loading="lazy">
        </div>
        <div class="totem-card-title-group">
          <h3>${t.name}</h3>
          <span class="totem-pill ${t.element}">${t.reqText}</span>
        </div>
      </div>
      <div class="totem-card-body">
        <p><strong>Базовый навык:</strong> ${t.baseSkill}</p>
      </div>
      <div class="totem-card-bonus">
        <strong>Постоянный пассивный бонус (ур. 130):</strong>
        <span>${t.maxBonus} (${t.bonusType})</span>
      </div>
      <div style="font-size: 0.8rem; color: #94a3b8; margin-top: auto;">
        💎 <b>Ресурс прокачки:</b> ${t.currency}
      </div>
    </article>
  `).join('');
}

// Рендер таблицы типов сфер
function renderSpheresTable() {
  const tbody = document.getElementById('totemSpheresTableBody');
  if (!tbody) return;

  tbody.innerHTML = SPHERES_DATA.map(s => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="${s.img}" alt="${s.name}" style="width:34px;height:34px;object-fit:contain;">
          <strong>${s.name}</strong>
        </div>
      </td>
      <td>${s.pool}</td>
      <td><span class="totems-pill ${s.type.includes('выбираете') ? 'water' : ''}">${s.type}</span></td>
    </tr>
  `).join('');
}

// Рендер таблицы порогов BLP
function renderBLPTable() {
  const tbody = document.getElementById('totemBLPTableBody');
  if (!tbody) return;

  tbody.innerHTML = BLP_THRESHOLDS.map(b => `
    <tr>
      <td><b>#${b.num}</b></td>
      <td style="color:#f59e0b;font-weight:700;">${b.emeralds.toLocaleString()} 💎</td>
      <td style="color:#cbd5e1;font-size:0.86rem;">${b.comment}</td>
    </tr>
  `).join('');
}

// -------------------------------------------------------------
// Калькулятор 1: Проверка пачки и активация тотемов (с призывателями)
// -------------------------------------------------------------
function initSquadActivator() {
  const inputs = ['fire', 'water', 'earth', 'distortion', 'light', 'dark'];
  const outBox = document.getElementById('squadActivatorResult');
  const chkSummonerValdur = document.getElementById('chkSummonerValdur');
  const chkSummonerVerdoc = document.getElementById('chkSummonerVerdoc');

  function update() {
    if (!outBox) return;

    let fire = +document.getElementById('sq_fire')?.value || 0;
    let water = +document.getElementById('sq_water')?.value || 0;
    let earth = +document.getElementById('sq_earth')?.value || 0;
    let dist = +document.getElementById('sq_distortion')?.value || 0;
    let light = +document.getElementById('sq_light')?.value || 0;
    let dark = +document.getElementById('sq_dark')?.value || 0;

    let rawSlots = fire + water + earth + dist + light + dark;

    // Бонусы призывателей (засчитываются за 2 титана своей стихии)
    let effectiveDist = dist + (chkSummonerValdur?.checked ? 1 : 0);
    let effectiveVerdoc = chkSummonerVerdoc?.checked ? 1 : 0;
    let effectiveWater = water + effectiveVerdoc;
    let effectiveEarth = earth + effectiveVerdoc;

    let activeTotems = [];

    if (fire >= 3) activeTotems.push({ id: 'fire', name: '🔥 Тотем Огня', priority: 2 });
    if (effectiveWater >= 3) activeTotems.push({ id: 'water', name: '💧 Тотем Воды', priority: 1 });
    if (effectiveEarth >= 3) activeTotems.push({ id: 'earth', name: '🌍 Тотем Земли', priority: 3 });
    if (effectiveDist >= 3) activeTotems.push({ id: 'distortion', name: '🌀 Тотем Искажения', priority: 6 });
    if (light >= 2) activeTotems.push({ id: 'light', name: '✨ Тотем Света', priority: 5 });
    if (dark >= 2) activeTotems.push({ id: 'dark', name: '🌑 Тотем Тьмы', priority: 4 });

    let html = `<div>Всего титанов в слотах: <b>${rawSlots} из 5</b>.</div>`;

    if (rawSlots > 5) {
      html += `<div style="color:#ef4444;font-weight:bold;margin-top:6px;">⚠️ В команде не может быть больше 5 титанов! Уменьшите число титанов.</div>`;
    }

    if (activeTotems.length === 0) {
      html += `<div style="color:#94a3b8;margin-top:8px;">❌ <b>Ни один тотем не активируется.</b> Нужно минимум 3 титана для Воды/Огня/Земли/Искажения или 2 для Света/Тьмы.</div>`;
    } else if (activeTotems.length === 1) {
      html += `<div style="color:#10b981;font-weight:bold;margin-top:8px;font-size:1.05rem;">
        ✅ Активен 1 тотем: <span style="color:#38bdf8;">${activeTotems[0].name}</span>
      </div>`;
    } else {
      // Сортировка по порядку срабатывания в бою: Вода > Огонь > Земля > Тьма > Свет > Искажение
      activeTotems.sort((a, b) => a.priority - b.priority);
      const first = activeTotems[0];
      const second = activeTotems[1];

      html += `<div style="color:#10b981;font-weight:bold;margin-top:8px;font-size:1.05rem;">
        ⚡ Двойная активация! Активны 2 тотема: <span style="color:#f59e0b;">${first.name}</span> и <span style="color:#a855f7;">${second.name}</span>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:10px;padding:10px 14px;margin-top:10px;border-left:3px solid #f59e0b;font-size:0.9rem;">
        🎯 <b>Очерёдность применения:</b> Первым гарантированно сработает <b>${first.name}</b> (на него рекомендуется ставить активный навык контроля или щита, например <i>Ice Age</i>).
        Вторым сработает <b>${second.name}</b> (на него выгоднее ставить пассивный навык <i>Triple Cycle</i>).<br>
        ⚠️ <b>Правило слияния:</b> Не ставьте один и тот же навык на оба тотема — дубликаты навыков НЕ стакаются!
      </div>`;
    }

    outBox.innerHTML = html;
  }

  inputs.forEach(id => {
    document.getElementById(`sq_${id}`)?.addEventListener('input', update);
  });
  chkSummonerValdur?.addEventListener('change', update);
  chkSummonerVerdoc?.addEventListener('change', update);

  update();
}

// -------------------------------------------------------------
// Калькулятор 2: Защита от неудач (BLP) и расчет изумрудов
// -------------------------------------------------------------
function initBLPCalculator() {
  const selTarget = document.getElementById('blpTargetTotem');
  const inpSpent = document.getElementById('blpSpentEmeralds');
  const outBox = document.getElementById('blpCalcResult');

  function update() {
    if (!selTarget || !inpSpent || !outBox) return;

    const targetNum = +selTarget.value || 1;
    const spent = +inpSpent.value || 0;

    const entry = BLP_THRESHOLDS.find(b => b.num === targetNum) || { emeralds: targetNum * 350000 };
    const required = entry.emeralds;
    const remaining = Math.max(0, required - spent);
    const progressPercent = Math.min(100, Math.round((spent / required) * 100));

    let html = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span>Прогресс до гарантированного фрагмента #${targetNum}:</span>
        <b style="color:#38bdf8;">${progressPercent}%</b>
      </div>
      <div class="totem-progress-wrap">
        <div class="totem-progress-bar" style="width: ${progressPercent}%;"></div>
      </div>
      <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:0.9rem;margin-top:10px;">
        <span>Порог гаранта: <b style="color:#f59e0b;">${required.toLocaleString()} 💎</b></span>
        <span>Осталось потратить: <b style="color:#ef4444;">${remaining.toLocaleString()} 💎</b></span>
      </div>
    `;

    if (remaining === 0) {
      html += `<div style="color:#10b981;font-weight:bold;margin-top:10px;">🎉 Поздравляем! Порог защиты от неудач достигнут! Фрагмент гарантирован при следующем призыве.</div>`;
    } else {
      if (targetNum <= 2) {
        html += `<div style="font-size:0.86rem;color:#cbd5e1;margin-top:10px;">💡 <b>Совет:</b> Этот фрагмент гарантированно выпадет для вашей сильнейшей по мощи стихии титанов. Убедитесь, что прокачали титанов желаемой стихии перед призывом!</div>`;
      } else {
        html += `<div style="font-size:0.86rem;color:#cbd5e1;margin-top:10px;">💡 <b>Совет:</b> Начиная с 3-го тотема, стихия случайна. Выгоднее копить изумруды до специальных ивентов на открытие Алтаря или использовать Сферы выбора стихии.</div>`;
      }
    }

    outBox.innerHTML = html;
  }

  selTarget?.addEventListener('change', update);
  inpSpent?.addEventListener('input', update);

  update();
}

// -------------------------------------------------------------
// Калькулятор 3: Стоимость прокачки уровней (1–130) и звёзд (1–6)
// -------------------------------------------------------------
function initUpgradeCostCalculator() {
  const selElement = document.getElementById('upgElement');
  const inpLvlFrom = document.getElementById('upgLvlFrom');
  const inpLvlTo = document.getElementById('upgLvlTo');
  const selStarsFrom = document.getElementById('upgStarsFrom');
  const selStarsTo = document.getElementById('upgStarsTo');
  const outBox = document.getElementById('upgCalcResult');

  function update() {
    if (!outBox) return;

    const el = selElement?.value || 'fire';
    let fromLvl = Math.max(1, Math.min(130, +inpLvlFrom?.value || 1));
    let toLvl = Math.max(fromLvl, Math.min(130, +inpLvlTo?.value || 130));
    let fromStars = +selStarsFrom?.value || 1;
    let toStars = Math.max(fromStars, +selStarsTo?.value || 6);

    // Расчет примерной стоимости уровней
    // Каждый уровень требует трофеев или изумрудов
    const lvlDiff = toLvl - fromLvl;
    const estEmeraldsForLvl = lvlDiff * 1450;
    const estTrophiesForLvl = lvlDiff * 45;

    // Расчет фрагментов для звёзд: 1★(1) -> 2★(+1) -> 3★(+1) -> 4★(+1) -> 5★(+1) -> 6★(+1) = всего 6 фрагментов
    const fragmentsNeeded = toStars - fromStars;

    let currencyName = 'Трофеев Войны гильдий';
    if (el === 'dark' || el === 'light') currencyName = 'Трофеев Столкновения миров (CoW)';
    if (el === 'distortion') currencyName = 'Эхо перемен';

    let statBonus = '';
    if (el === 'earth' || el === 'dark') {
      const hp = Math.round((toLvl / 130) * (toStars / 6) * 3995583);
      statBonus = `+${hp.toLocaleString()} Здоровья титанам стихии`;
    } else {
      const atk = Math.round((toLvl / 130) * (toStars / 6) * 299673);
      statBonus = `+${atk.toLocaleString()} Атаки титанам стихии`;
    }

    outBox.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin-bottom:12px;">
        <div style="background:rgba(0,0,0,0.3);padding:12px 14px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);">
          <div style="color:#94a3b8;font-size:0.8rem;text-transform:uppercase;">Стоимость уровней (трофеи)</div>
          <div style="font-size:1.2rem;font-weight:700;color:#38bdf8;">${estTrophiesForLvl.toLocaleString()} ${currencyName}</div>
        </div>
        <div style="background:rgba(0,0,0,0.3);padding:12px 14px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);">
          <div style="color:#94a3b8;font-size:0.8rem;text-transform:uppercase;">Или альтернативно в изумрудах</div>
          <div style="font-size:1.2rem;font-weight:700;color:#f59e0b;">~${estEmeraldsForLvl.toLocaleString()} 💎</div>
        </div>
        <div style="background:rgba(0,0,0,0.3);padding:12px 14px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);">
          <div style="color:#94a3b8;font-size:0.8rem;text-transform:uppercase;">Фрагментов / сфер для звёзд</div>
          <div style="font-size:1.2rem;font-weight:700;color:#10b981;">${fragmentsNeeded} фрагментов</div>
        </div>
      </div>
      <div style="background:rgba(56,189,248,0.1);border:1px solid rgba(56,189,248,0.3);border-radius:10px;padding:12px 16px;font-size:0.95rem;">
        <b>Итоговый пассивный бонус на ${toLvl} ур. (${toStars}★):</b> <span style="color:#38bdf8;font-weight:700;">${statBonus}</span>
      </div>
    `;
  }

  selElement?.addEventListener('change', update);
  inpLvlFrom?.addEventListener('input', update);
  inpLvlTo?.addEventListener('input', update);
  selStarsFrom?.addEventListener('change', update);
  selStarsTo?.addEventListener('change', update);

  update();
}

// -------------------------------------------------------------
// Калькулятор 4: Навыки слияния, фильтры и советчик сборок
// -------------------------------------------------------------
function initFusionSkillsViewer() {
  const container = document.getElementById('fusionSkillsGrid');
  const tabs = document.querySelectorAll('.totem-tab-btn');
  const buildAdvisorBox = document.getElementById('totemBuildAdvisorResult');
  const selBuildElement = document.getElementById('totemAdvisorElementSelect');

  let currentFilter = 'all';

  function renderSkills() {
    if (!container) return;

    let filtered = FUSION_SKILLS_DATA;
    if (currentFilter === 'el') filtered = filtered.filter(s => s.type === 'el');
    if (currentFilter === 'pr') filtered = filtered.filter(s => s.type === 'pr');
    if (currentFilter === 's') filtered = filtered.filter(s => s.tier === 'S');
    if (currentFilter === 'a') filtered = filtered.filter(s => s.tier === 'A');
    if (currentFilter === 'b') filtered = filtered.filter(s => s.tier === 'B');

    container.innerHTML = filtered.map(s => `
      <div class="skill-card">
        <div class="skill-card-top">
          <img src="${s.img}" alt="${s.name}" loading="lazy">
          <div class="skill-card-title">
            <h4>${s.name}</h4>
            <div style="display:flex;gap:6px;align-items:center;">
              <span class="skill-tier-badge tier-${s.tier.toLowerCase()}">Тир ${s.tier}</span>
              <span style="font-size:0.75rem;color:#94a3b8;">${s.type === 'el' ? 'Стихийный (активный)' : 'Первичный (пассивный)'}</span>
            </div>
          </div>
        </div>
        <div class="skill-desc">${s.desc}</div>
        <div style="font-size:0.8rem;color:#38bdf8;background:rgba(2,132,199,0.1);padding:6px 10px;border-radius:6px;">
          📊 <b>Макс. ранг:</b> ${s.statVal}
        </div>
        <div class="skill-synergy">
          💡 ${s.synergy}
        </div>
      </div>
    `).join('');
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      renderSkills();
    });
  });

  // Обновление советчика сборок под выбранную стихию
  function updateAdvisor() {
    if (!buildAdvisorBox || !selBuildElement) return;
    const el = selBuildElement.value;
    const build = ELEMENT_RECOMMENDED_BUILDS[el] || ELEMENT_RECOMMENDED_BUILDS.fire;

    buildAdvisorBox.innerHTML = `
      <div style="font-size:1.1rem;font-weight:700;color:#f8fafc;margin-bottom:8px;">${build.title}</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-bottom:12px;">
        <div style="background:rgba(234,88,12,0.15);border:1px solid rgba(234,88,12,0.3);border-radius:10px;padding:12px;">
          <div style="color:#fdba74;font-size:0.8rem;text-transform:uppercase;font-weight:700;">Рекомендуемый стихийный (активный)</div>
          <div style="color:#fff;font-weight:700;font-size:1rem;margin-top:4px;">${build.active}</div>
        </div>
        <div style="background:rgba(124,58,237,0.15);border:1px solid rgba(124,58,237,0.3);border-radius:10px;padding:12px;">
          <div style="color:#c4b5fd;font-size:0.8rem;text-transform:uppercase;font-weight:700;">Рекомендуемый первичный (пассивный)</div>
          <div style="color:#fff;font-weight:700;font-size:1rem;margin-top:4px;">${build.passive}</div>
        </div>
      </div>
      <div style="font-size:0.92rem;line-height:1.6;color:#cbd5e1;background:rgba(0,0,0,0.3);padding:12px 16px;border-radius:8px;border-left:3px solid #38bdf8;">
        <b>Почему эта связка:</b> ${build.reason}
      </div>
    `;
  }

  selBuildElement?.addEventListener('change', updateAdvisor);

  renderSkills();
  updateAdvisor();
}

// Плавный скролл и подсветка активного раздела TOC
function initScrollSpy() {
  const links = document.querySelectorAll('.totems-toc a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#tt-')) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          history.pushState(null, '', targetId);
          el.scrollIntoView({ behavior: 'smooth' });
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });

  window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 160;
    links.forEach(link => {
      const sec = document.querySelector(link.hash);
      if (sec && sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
}

// Аккордеон FAQ
function initFaqAccordion() {
  // Браузерный тег <details> обрабатывает открытие сам
}
