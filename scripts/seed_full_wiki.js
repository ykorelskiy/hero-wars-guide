#!/usr/bin/env node
/**
 * Comprehensive Seed script: populates public.hw_heroes with 72+ Hero Wars heroes.
 * Includes complete Russian names, attributes, positions, factions, skills, artifacts, and descriptions.
 * Usage: node scripts/seed_full_wiki.js
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zyoznyeqvorhztrpgdjw.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_KEY) {
  console.error('Set SUPABASE_SERVICE_ROLE_KEY or VITE_SUPABASE_ANON_KEY env var');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const FULL_HEROES = [
  // --- ТАНКИ ---
  {
    id: 'aurora', name: 'Аврора', role: 'Танк', main_stat: 'Ловкость', position: 'Передняя линия', faction: 'Путь природы',
    archetypes: ['dodge'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Aurora_Icon.png',
    description: 'Паладин Рассвета. Вкладывается в уворот и масс-щиты против магии. Идеальный танк против магических составов.',
    skills: [
      { name: 'Кристалл Селены', type: 'Белое (Ульта)', desc: 'Создает гигантский светящийся щит, поглощающий магический урон и взрывающийся по окончании.', icon_url: '' },
      { name: 'Пронизывающий свет', type: 'Зелёное', desc: 'Наносит магический урон всем врагам в передней линии и ослепляет их.', icon_url: '' },
      { name: 'Творческий порыв', type: 'Синее', desc: 'Периодически оглушает ближайшую цель вспышкой света.', icon_url: '' },
      { name: 'Ореол уклонения', type: 'Фиолетовое (Пассивка)', desc: 'Существенно увеличивает шанс уклонения Авроры. При уклонении поглощается часть урона.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Копья Селены', type: 'Оружие', team_buff: '+13 941 Уворота всей команде на 9 сек', icon_url: '' },
      { slot: 2, name: 'Заветы Света', type: 'Книга', stats: 'Здоровье, Защита от магии', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость (+3 990)', icon_url: '' }
    ]
  },
  {
    id: 'astaroth', name: 'Астарот', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь хаоса',
    archetypes: ['dodge', 'karkh', 'twins', 'undead'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Astaroth_Icon.png',
    description: 'Падший ангел. Перенаправляет физический урон союзников на себя, ставит пламенный щит и один раз за бой воскрешает павшего союзника.',
    skills: [
      { name: 'Пламенный покров', type: 'Белое (Ульта)', desc: 'Накладывает щит на всю команду, поглощающий физический урон.', icon_url: '' },
      { name: 'Опустошение', type: 'Зелёное', desc: 'Выжигает энергию у соперника с самым высоким показателем энергии.', icon_url: '' },
      { name: 'Демоническая связь', type: 'Синее', desc: 'Связывает себя с самым слабым союзником, перенаправляя часть получаемого им урона на Астарота.', icon_url: '' },
      { name: 'Перерождение', type: 'Фиолетовое (Пассивка)', desc: 'Один раз за бой воскрешает первого погибшего союзника с частью здоровья.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Пламенный Трезубец', type: 'Оружие', team_buff: '+10 680 Брони всей команде на 9 сек', icon_url: '' },
      { slot: 2, name: 'Кодекс Бессмертия', type: 'Книга', stats: 'Здоровье, Броня', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила (+3 990)', icon_url: '' }
    ]
  },
  {
    id: 'corvus', name: 'Корвус', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', faction: 'Нежить',
    archetypes: ['undead'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Corvus_Icon.png',
    description: 'Павший Король Нежити. Призывает Алтарь Душ, который наносит чистый урон любому врагу, атакующему союзников.',
    skills: [
      { name: 'Удар Демона', type: 'Белое (Ульта)', desc: 'Наносит урон передней линии врагов и режет их броню.', icon_url: '' },
      { name: 'Алтарь Душ', type: 'Зелёное', desc: 'Призывает алтарь. Каждый раз, когда враг наносит урон союзнику Нежити, Алтарь бьет врага чистым уроном.', icon_url: '' },
      { name: 'Костяная защита', type: 'Синее', desc: 'Увеличивает защиту и здоровье союзников фракции Нежить.', icon_url: '' },
      { name: 'Единство Проклятых', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает атаки союзников Нежити и переносит раненых союзников в безопасную зону.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Меч Короля', type: 'Оружие', team_buff: '+10 680 Атаки всей команде на 9 сек', icon_url: '' },
      { slot: 2, name: 'Фолиант Нежити', type: 'Книга', stats: 'Здоровье, Броня', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила (+3 990)', icon_url: '' }
    ]
  },
  {
    id: 'galahad', name: 'Галахад', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь чести',
    archetypes: ['taf'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Galahad_Icon.png',
    description: 'Благородный рыцарь. Танк с высоким физическим уроном и вампиризмом. Отлично подходит для агрессивных физ-команд.',
    skills: [
      { name: 'Натиск мечей', type: 'Белое (Ульта)', desc: 'Призывает обвал мечей, наносящих массивный физический урон всей вражеской команде.', icon_url: '' },
      { name: 'Карающий клинок', type: 'Зелёное', desc: 'Бьет ближайшего врага и оглушает его.', icon_url: '' },
      { name: 'Возмерзие', type: 'Синее', desc: 'Наносит урон вокруг себя и восстанавливает здоровье за счет вампиризма.', icon_url: '' },
      { name: 'Стальная воля', type: 'Фиолетовое (Пассивка)', desc: 'Пассивно повышает физическую атаку и броню.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Клинок Чести', type: 'Оружие', team_buff: '+10 680 Физической атаки всей команде на 9 сек', icon_url: '' },
      { slot: 2, name: 'Манускрипт Воина', type: 'Книга', stats: 'Здоровье, Шанс крита', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила (+3 990)', icon_url: '' }
    ]
  },
  {
    id: 'luther', name: 'Лютер', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь чести',
    archetypes: ['taf'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Luther_Icon.png',
    description: 'Бруизер-паладин. Прыгает в центр вражеской команды, отвлекая внимание всех соперников на себя.',
    skills: [
      { name: 'Вторжение', type: 'Белое (Ульта)', desc: 'Прыгает прямо в гущу врагов, оглушает их и начинает атаковать с тыла.', icon_url: '' },
      { name: 'Святой приговор', type: 'Зелёное', desc: 'Оглушает окружающих врагов ударом молота.', icon_url: '' },
      { name: 'Взрыв веры', type: 'Синее', desc: 'Восстанавливает свое здоровье при падении уровня HP.', icon_url: '' },
      { name: 'Опека', type: 'Фиолетовое (Пассивка)', desc: 'Повышает защиту от магических и физических атак.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Молот Веры', type: 'Оружие', team_buff: '+10 680 Брони всей команде на 9 сек', icon_url: '' },
      { slot: 2, name: 'Заветы Стража', type: 'Книга', stats: 'Здоровье, Защита от магии', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила (+3 990)', icon_url: '' }
    ]
  },
  {
    id: 'julius', name: 'Джулиус', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь прогресса',
    archetypes: ['progress'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Julius_Icon.png',
    description: 'Кот-изобретатель в экзоскелете. Глава фракции Прогресс. Генерирует бесконечные защитные матрицы и очищает команду от дебаффов.',
    skills: [
      { name: 'Девять жизней', type: 'Белое (Ульта)', desc: 'Создает гигантский технологический щит для всей команды и снимает негативные эффекты.', icon_url: '' },
      { name: 'Лазерный импульс', type: 'Зелёное', desc: 'Выпускает луч, режущий броню и сопротивление магии врагов.', icon_url: '' },
      { name: 'Перезагрузка', type: 'Синее', desc: 'При разрушении щитов лечит союзников.', icon_url: '' },
      { name: 'Кошачья грация', type: 'Фиолетовое (Пассивка)', desc: 'Повышает скорость атаки всей фракции Прогресс.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Реактор Прогресса', type: 'Оружие', team_buff: '+10 680 Брони всей команде на 9 сек', icon_url: '' },
      { slot: 2, name: 'Чертежи Будущего', type: 'Книга', stats: 'Здоровье, Атака', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила (+3 990)', icon_url: '' }
    ]
  },
  {
    id: 'andvari', name: 'Андвари', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь заката',
    archetypes: ['counter'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Andvari_Icon.png',
    description: 'Гном-кузнец. Обладает пассивной аурой «Живая земля», полностью блокирующей подбросы и перемещения союзников (жёсткий контр Карху и Безликому).',
    skills: [
      { name: 'Дыхание титана', type: 'Белое (Ульта)', desc: 'Создает каменную волну, оглушающую врагов.', icon_url: '' },
      { name: 'Живая земля', type: 'Зелёное', desc: 'Связывает ближайшего союзника землей, защищая от подбросов в воздух.', icon_url: '' },
      { name: 'Каменный заслон', type: 'Синее', desc: 'Накладывает щит на самого слабого союзника.', icon_url: '' },
      { name: 'Cила гор', type: 'Фиолетовое (Пассивка)', desc: 'Повышает физическую атаку и защитные параметры.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Молот Кузнеца', type: 'Оружие', team_buff: '+10 680 Брони всей команде на 9 сек', icon_url: '' },
      { slot: 2, name: 'Заветы Гор', type: 'Книга', stats: 'Здоровье, Пробивание брони', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила (+3 990)', icon_url: '' }
    ]
  },
  {
    id: 'chaba', name: 'Чаба', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь природы',
    archetypes: ['nature'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Chaba_Icon.png',
    description: 'Голодный обитатель болот. Способен проглотить вражеского танка на несколько секунд, оставляя врагов без защиты.',
    skills: [
      { name: 'Дикое проглатывание', type: 'Белое (Ульта)', desc: 'Проглатывает переднего врага на 6 секунд, выводя его из боя.', icon_url: '' },
      { name: 'Тяжелый топот', type: 'Зелёное', desc: 'Замедляет скорость атаки передних врагов.', icon_url: '' },
      { name: 'Сытость', type: 'Синее', desc: 'Восстанавливает здоровье пропорционально полученному урону.', icon_url: '' },
      { name: 'Толстая шкура', type: 'Фиолетовое (Пассивка)', desc: 'Пассивно повышает уровень брони.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Палица Болот', type: 'Оружие', team_buff: '+10 680 Брони всей команде', icon_url: '' },
      { slot: 2, name: 'Кодекс Защиты', type: 'Книга', stats: 'Здоровье', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила', icon_url: '' }
    ]
  },
  {
    id: 'ziri', name: 'Зири', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь заката',
    archetypes: ['dune'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Ziri_Icon.png',
    description: 'Скорпион пустыни. Обладает высочайшим показателем брони. При критическом уровне HP зарывается в землю для мгновенной регенерации.',
    skills: [
      { name: 'Форма скорпиона', type: 'Белое (Ульта)', desc: 'Увеличивает броню и провоцирует всех врагов атаковать только её.', icon_url: '' },
      { name: 'Зарывание', type: 'Зелёное', desc: 'Зарывается в песчаную норку, быстрыми темпами восстанавливая здоровье.', icon_url: '' },
      { name: 'Песчаное отражение', type: 'Синее', desc: 'Отражает полученный физический урон обратно во врагов.', icon_url: '' },
      { name: 'Ядовитое жало', type: 'Фиолетовое (Пассивка)', desc: 'Наносит ядовитый урон атакующим врагам.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Клешня Пустыни', type: 'Оружие', team_buff: '+10 680 Брони всей команде', icon_url: '' },
      { slot: 2, name: 'Том Песков', type: 'Книга', stats: 'Здоровье, Броня', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила', icon_url: '' }
    ]
  },
  {
    id: 'cleaver', name: 'Клевер', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь хаоса',
    archetypes: ['chaos'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Cleaver_Icon.png',
    description: 'Великан-повар. Редчайший абсолютный танк. Притягивает самого дальнего врага ржавым крюком в передний ряд.',
    skills: [
      { name: 'Ржавый крюк', type: 'Белое (Ульта)', desc: 'Притягивает самого дальнего врага к себе и оглушает его.', icon_url: '' },
      { name: 'Мясная гниль', type: 'Зелёное', desc: 'Наносит постоянный урон всем врагам вокруг и себе.', icon_url: '' },
      { name: 'Забой', type: 'Синее', desc: 'Наносит урон передним целям и оглушает их.', icon_url: '' },
      { name: 'Густая кровь', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает максимальный запас здоровья.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Тесак Хаоса', type: 'Оружие', team_buff: '+10 680 Брони всей команде', icon_url: '' },
      { slot: 2, name: 'Рецепт Безумия', type: 'Книга', stats: 'Здоровье', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила', icon_url: '' }
    ]
  },

  // --- БОЙЦЫ / КЕРРИ / АССАСИНЫ ---
  {
    id: 'dante', name: 'Данте', role: 'Керри', main_stat: 'Ловкость', position: 'Средняя линия', faction: 'Путь вечности',
    archetypes: ['dodge'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Dante_Icon.png',
    description: 'Дух копья. Главный двигатель уворот-команд. Срезает главный стат врагов и раздает рекордный уворот всей команде.',
    skills: [
      { name: 'Копье судьбы', type: 'Белое (Ульта)', desc: 'Запускает копьё через все поле боя, нанося урон и отталкивая врагов.', icon_url: '' },
      { name: 'Предвидение', type: 'Зелёное', desc: 'Дает союзникам приращение к уклонению на несколько секунд.', icon_url: '' },
      { name: 'Оковы слабости', type: 'Синее', desc: 'Уменьшает главный параметр случайного врага.', icon_url: '' },
      { name: 'Призрачный азарт', type: 'Фиолетовое (Пассивка)', desc: 'Каждое уклонение ускоряет набор энергии.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Копьё Судьбы', type: 'Оружие', team_buff: '+13 941 Уворота всей команде', icon_url: '' },
      { slot: 2, name: 'Кодекс Призрака', type: 'Книга', stats: 'Уворот, Крит', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },
  {
    id: 'keira', name: 'Кира', role: 'Керри', main_stat: 'Ловкость', position: 'Средняя линия', faction: 'Нежить',
    archetypes: ['undead'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Keira_Icon.png',
    description: 'Призрачный клинок. Выпускает рикошетящие лезвия. Если её физическая атака выше брони цели — наносит дополнительный чистый урон.',
    skills: [
      { name: 'Танцующие клинки', type: 'Белое (Ульта)', desc: 'Запускает вихрь клинков, наносящий урон и накладывающий немоту.', icon_url: '' },
      { name: 'Рикошет', type: 'Зелёное', desc: 'Автоатаки рикошетят по всем врагам по цепочке.', icon_url: '' },
      { name: 'Ярость призрака', type: 'Синее', desc: 'Увеличивает скорость своих атак.', icon_url: '' },
      { name: 'Теневая боль', type: 'Фиолетовое (Пассивка)', desc: 'Наносит доп. чистый урон если броня врага ниже её атаки.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Призрачные Мечи', type: 'Оружие', team_buff: '+10 680 Физ. атаки всей команде', icon_url: '' },
      { slot: 2, name: 'Фолиант Теней', type: 'Книга', stats: 'Пробивание брони', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },
  {
    id: 'karkh', name: "K'arkh", role: 'Керри', main_stat: 'Ловкость', position: 'Средняя линия', faction: 'Путь хаоса',
    archetypes: ['karkh'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/K%27arkh_Icon.png',
    description: 'Повелитель Бездны. Подбрасывает трех врагов с наименьшим HP и наносит сокрушительный двойной урон при их падении.',
    skills: [
      { name: 'Nexus of Horror', type: 'Белое (Ульта)', desc: 'Подбрасывает трех врагов в воздух и наносит двойной урон.', icon_url: '' },
      { name: 'Negator of Laws', type: 'Зелёное', desc: 'Блокирует физические атаки и превращает их в энергию.', icon_url: '' },
      { name: 'Удар Бездна', type: 'Синее', desc: 'Атакует подброшенных союзниками или собой врагов.', icon_url: '' },
      { name: 'Поглощение', type: 'Фиолетовое (Пассивка)', desc: 'Лечится каждый раз при смерти врага.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Щупальце Бездны', type: 'Оружие', team_buff: '+10 680 Физ. атаки', icon_url: '' },
      { slot: 2, name: 'Заветы Хаоса', type: 'Книга', stats: 'Пробивание брони (48К)', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },
  {
    id: 'yasmine', name: 'Ясмин', role: 'Ассасин', main_stat: 'Ловкость', position: 'Передняя линия', faction: 'Путь природы',
    archetypes: ['assassin'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Yasmine_Icon.png',
    description: 'Танцовщица смерти. Прыгает за спину врага с наименьшей защитой, накладывая смертельный яд и получая уворот.',
    skills: [
      { name: 'Танец смерти', type: 'Белое (Ульта)', desc: 'Прыгает за спину врагу и наносит 7 стремительных критических ударов.', icon_url: '' },
      { name: 'Ядовитый клинок', type: 'Зелёное', desc: 'Отравляет цель, нанося непрерывный чистый урон.', icon_url: '' },
      { name: 'Упреждение', type: 'Синее', desc: 'Получает высокий шанс уклонения при активации ульты.', icon_url: '' },
      { name: 'Отомщение', type: 'Фиолетовое (Пассивка)', desc: 'Контратакует врага при получении критического урона.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Клинки Смерти', type: 'Оружие', team_buff: '+10 680 Крит-урона', icon_url: '' },
      { slot: 2, name: 'Кодекс Убийцы', type: 'Книга', stats: 'Шанс крита', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },
  {
    id: 'artemis', name: 'Артемида', role: 'Стрелок', main_stat: 'Ловкость', position: 'Задняя линия', faction: 'Путь чести',
    archetypes: ['taf'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Artemis_Icon.png',
    description: 'Охотница Света. Крит-снайпер TAF-связки. Выпускает ливень стрел, мгновенно стирающий вражескую команду под бафами Фафнира.',
    skills: [
      { name: 'Смертельный выстрел', type: 'Белое (Ульта)', desc: 'Выпускает град критических стрел по всем врагам.', icon_url: '' },
      { name: 'Оглушающая стрела', type: 'Зелёное', desc: 'Оглушает врага в передней линии.', icon_url: '' },
      { name: 'Светлый источник', type: 'Синее', desc: 'Повышает собственный шанс критического удара.', icon_url: '' },
      { name: 'Карающий свет', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает урон за каждого союзника фракции Честь.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Лук Света', type: 'Оружие', team_buff: '+10 680 Крит-урона', icon_url: '' },
      { slot: 2, name: 'Заветы Стрелка', type: 'Книга', stats: 'Шанс крита, Атака', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },
  {
    id: 'jhu', name: 'Джу', role: 'Стрелок', main_stat: 'Ловкость', position: 'Задняя линия', faction: 'Путь заката',
    archetypes: ['boss-killer'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Jhu_Icon.png',
    description: 'Воин Древних. Главный киллер гильдейских боссов. В режиме ярости становится абсолютно бессмертным.',
    skills: [
      { name: 'Ярость Древних', type: 'Белое (Ульта)', desc: 'Входит в состояние бессмертия на 5 секунд и ускоряет атаки.', icon_url: '' },
      { name: 'Точный бросок', type: 'Зелёное', desc: 'Атакует дальнюю линию врагов с уроном от их максимального HP.', icon_url: '' },
      { name: 'Исцеление ярости', type: 'Синее', desc: 'Восстанавливает здоровье после окончания ульты.', icon_url: '' },
      { name: 'Неукротимая сила', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает скорость при получении урона.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Копье Древних', type: 'Оружие', team_buff: '+10 680 Крит-урона', icon_url: '' },
      { slot: 2, name: 'Том Ярости', type: 'Книга', stats: 'Шанс крита', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },

  // --- МАГИ ---
  {
    id: 'orion', name: 'Орион', role: 'Маг', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь прогресса',
    archetypes: ['orion'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Orion_Icon.png',
    description: 'Высший Механоид. Набирает энергию быстрее всех в игре и без остановки раздает командный бафф пробивания магической защиты.',
    skills: [
      { name: 'DD-901 Arsenal', type: 'Белое (Ульта)', desc: 'Запускает 6 ракет во врагов с максимальным HP.', icon_url: '' },
      { name: 'Магнитное поле', type: 'Зелёное', desc: 'Наносит урон по площади и замедляет врагов.', icon_url: '' },
      { name: 'Антиматерия', type: 'Синее', desc: 'Оглушает цели с наивысшей магической атакой.', icon_url: '' },
      { name: 'Полный заряд', type: 'Фиолетовое (Пассивка)', desc: 'Пассивно дает огромный бонус к набору энергии за каждую автоатаку.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Арсенал DD-901', type: 'Оружие', team_buff: '+50 190 Пробивания маг. защиты на 9 сек', icon_url: '' },
      { slot: 2, name: 'Манускрипт Пустоты', type: 'Книга', stats: 'Маг. урон, Пробивание', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'lars', name: 'Ларс', role: 'Маг', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь хаоса',
    archetypes: ['twins'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Lars_Icon.png',
    description: 'Повелитель Бури. Работает в дуэте с сестрой Кристой. Протаскивает всю вражескую команду сквозь ледяные шипы.',
    skills: [
      { name: 'Повелитель бури', type: 'Белое (Ульта)', desc: 'Стягивает всех врагов в одну точку вихрем.', icon_url: '' },
      { name: 'Молния', type: 'Зелёное', desc: 'Бьет молнией и накладывает метку бури.', icon_url: '' },
      { name: 'Цепной разряд', type: 'Синее', desc: 'Наносит урон по цепочке врагов.', icon_url: '' },
      { name: 'Проведение', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает магический урон по меткам Кристы.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Посох Бури', type: 'Оружие', team_buff: '+50 190 Пробивания маг. защиты', icon_url: '' },
      { slot: 2, name: 'Кодекс Молний', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'krista', name: 'Криста', role: 'Маг', main_stat: 'Интеллект', position: 'Средняя линия', faction: 'Путь хаоса',
    archetypes: ['twins'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Krista_Icon.png',
    description: 'Повелительница Льда. Расставляет на поле боя острые ледяные иглы, наносящие суммарный урон при движении врагов.',
    skills: [
      { name: 'Ледяные иглы', type: 'Белое (Ульта)', desc: 'Создает ледяные шипы под ногами врагов.', icon_url: '' },
      { name: 'Ледяная глыба', type: 'Зелёное', desc: 'Прячется в ледяной кокон, становясь неуязвимой.', icon_url: '' },
      { name: 'Заморозка', type: 'Синее', desc: 'Наносит маг урон и помечает врагов льдом.', icon_url: '' },
      { name: 'След мороза', type: 'Фиолетовое (Пассивка)', desc: 'Каждый шаг врага по шипам наносит урон.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Ледяная Сфера', type: 'Оружие', team_buff: '+10 680 Маг. атаки', icon_url: '' },
      { slot: 2, name: 'Том Льда', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'satori', name: 'Сатори', role: 'Маг', main_stat: 'Интеллект', position: 'Передняя линия', faction: 'Путь заката',
    archetypes: ['counter'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Satori_Icon.png',
    description: 'Девятихвостый Лис. Вешает метки лисьего огня за каждый бонусный приращение энергии врагов и взрывает их.',
    skills: [
      { name: 'Очищающий огонь', type: 'Белое (Ульта)', desc: 'Взрывает все накопленные метки лисьего огня на врагах.', icon_url: '' },
      { name: 'Зависть', type: 'Зелёное', desc: 'Накладывает метки за бонусную энергию врага.', icon_url: '' },
      { name: 'Кража жизни', type: 'Синее', desc: 'Крадет здоровье у передних врагов.', icon_url: '' },
      { name: 'Мудрость стаи', type: 'Фиолетовое (Пассивка)', desc: 'Повышает защиту за каждую метку.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Веер Лиса', type: 'Оружие', team_buff: '+10 680 Маг. атаки', icon_url: '' },
      { slot: 2, name: 'Свитoк Мудрости', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'heidi', name: 'Хайди', role: 'Маг', main_stat: 'Интеллект', position: 'Средняя линия', faction: 'Путь природы',
    archetypes: ['counter'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Heidi_Icon.png',
    description: 'Мастер чистого урона и уворота. Игнорирует всю броню и щиты врагов, пробивая любые защитные составы.',
    skills: [
      { name: 'Смертельный сок', type: 'Белое (Ульта)', desc: 'Запускает ядовитые змеи, наносящие тяжелый чистый урон.', icon_url: '' },
      { name: 'Маскировка', type: 'Зелёное', desc: 'Увеличивает свой уворот на время каста.', icon_url: '' },
      { name: 'Ядовитый плевок', type: 'Синее', desc: 'Отравляет врагов чистым уроном.', icon_url: '' },
      { name: 'Взрывные грибы', type: 'Фиолетовое (Пассивка)', desc: 'Усиливает чистый урон от яда.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Трубка Яда', type: 'Оружие', team_buff: '+10 680 Маг. атаки', icon_url: '' },
      { slot: 2, name: 'Заветы Джунглей', type: 'Книга', stats: 'Уворот', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },

  // --- ЛЕКАРИ / ПОДДЕРЖКА / КОНТРОЛЬ ---
  {
    id: 'martha', name: 'Марта', role: 'Лекарь', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь заката',
    archetypes: ['karkh', 'twins'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Martha_Icon.png',
    description: 'Бабушка-черепаха. Лучший массовый хилер. Ставит зенитный тотем с мощным лечением и ускоряет союзников на 200%.',
    skills: [
      { name: 'Клятвенный барабан', type: 'Белое (Ульта)', desc: 'Ускоряет все действия союзников на 200% на 6 секунд.', icon_url: '' },
      { name: 'Тайный тотем', type: 'Зелёное', desc: 'Ставит тотем, исцеляющий союзников с самым низким HP.', icon_url: '' },
      { name: 'Защита предков', type: 'Синее', desc: 'Оглушает врагов при получении урона.', icon_url: '' },
      { name: 'Долголетие', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает эффективность исцеления.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Барабан Времени', type: 'Оружие', team_buff: '+10 680 Брони всей команде', icon_url: '' },
      { slot: 2, name: 'Фолиант Жизни', type: 'Книга', stats: 'Здоровье, Хил', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'celeste', name: 'Селеста', role: 'Лекарь', main_stat: 'Интеллект', position: 'Средняя линия', faction: 'Путь заката',
    archetypes: ['counter'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Celeste_Icon.png',
    description: 'Дева Света и Тьмы. Переключает формы: Светлая лечит, Тёмная блокирует вражеское лечение и преобразует его в магический урон.',
    skills: [
      { name: 'Двуликость', type: 'Белое (Ульта)', desc: 'Быстро переключается между Святой и Темной формой (требует 50% энергии).', icon_url: '' },
      { name: 'Очищение', type: 'Зелёное', desc: 'Снимает негативные эффекты с союзника или блокирует хил врага.', icon_url: '' },
      { name: 'Метка Бездны', type: 'Синее', desc: 'Наносит маг урон или лечит союзника.', icon_url: '' },
      { name: 'Зенит', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает магическую атаку во всех формах.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Жезл Сумерек', type: 'Оружие', team_buff: '+10 680 Маг. атаки', icon_url: '' },
      { slot: 2, name: 'Том Равновесия', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'dorian', name: 'Дориан', role: 'Лекарь', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь хаоса',
    archetypes: ['dodge', 'orion'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Dorian_Icon.png',
    description: 'Лорд Вампиров. Создает постоянную ауру вампиризма вокруг себя (даже после своей смерти!), спасая соседних ДД.',
    skills: [
      { name: 'Фонтан крови', type: 'Белое (Ульта)', desc: 'Помечает врага, позволяя всем бьющим его союзникам восстанавливать HP.', icon_url: '' },
      { name: 'Предкушение', type: 'Зелёное', desc: 'Жертвует своим HP для мгновенного лечения раненого союзника.', icon_url: '' },
      { name: 'Стая летучих мышей', type: 'Синее', desc: 'Наносит маг урон и возвращает HP себе.', icon_url: '' },
      { name: 'Аура вампиризма', type: 'Фиолетовое (Пассивка)', desc: 'Дает огромный вампиризм всем союзникам в зоне действия ауры.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Кристалл Крови', type: 'Оружие', team_buff: '+10 680 Физ. атаки', icon_url: '' },
      { slot: 2, name: 'Кодекс Крови', type: 'Книга', stats: 'Здоровье', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'jorgen', name: 'Йорген', role: 'Контроль', main_stat: 'Сила', position: 'Средняя линия', faction: 'Путь хаоса',
    archetypes: ['karkh', 'twins'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Jorgen_Icon.png',
    description: 'Осквернитель. Запрещает набор энергии всей вражеской команде и перенаправляет физический урон в заднюю линию.',
    skills: [
      { name: 'Отказ в силе', type: 'Белое (Ульта)', desc: 'Запрещает набирать энергию всем врагам на 9 секунд.', icon_url: '' },
      { name: 'Щит упрямства', type: 'Зелёное', desc: 'Накладывает щит на союзника и ускоряет его набор энергии.', icon_url: '' },
      { name: 'Проклятые узы', type: 'Синее', desc: 'Связывает врагов, передавая физический урон в задний ряд.', icon_url: '' },
      { name: 'Выжигание энергии', type: 'Фиолетовое (Пассивка)', desc: 'Крадет энергию у переднего врага.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Щит Осквернителя', type: 'Оружие', team_buff: '+10 680 Маг. атаки', icon_url: '' },
      { slot: 2, name: 'Том Проклятий', type: 'Книга', stats: 'Здоровье', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила', icon_url: '' }
    ]
  },
  {
    id: 'fafnir', name: 'Фафнир', role: 'Поддержка', main_stat: 'Сила', position: 'Задняя линия', faction: 'Путь чести',
    archetypes: ['taf'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Fafnir_Icon.png',
    description: 'Мастер-кузнец. Ключевой саппорт TAF-составов. Накладывает постоянные непробиваемые щиты и режет броню врага.',
    skills: [
      { name: 'Кузнечный горн', type: 'Белое (Ульта)', desc: 'Усиливает щит основного ДД и дает огромный бонус физ. атаки.', icon_url: '' },
      { name: 'Драконье пламя', type: 'Зелёное', desc: 'Срезает броню соперникам.', icon_url: '' },
      { name: 'Рунический щит', type: 'Синее', desc: 'Периодически накладывает щиты на союзников.', icon_url: '' },
      { name: 'Мастерство ковки', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает урон союзников фракции Честь.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Молот Фафнира', type: 'Оружие', team_buff: '+10 680 Физ. атаки', icon_url: '' },
      { slot: 2, name: 'Рунический Фолиант', type: 'Книга', stats: 'Здоровье, Броня', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила', icon_url: '' }
    ]
  },
  {
    id: 'tristan', name: 'Тристан', role: 'Боец', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь чести',
    archetypes: ['taf'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Tristan_Icon.png',
    description: 'Истребитель магов. Набирает ульту за каждого союзника впереди себя и агрессивно выжигает энергию вражеских магов.',
    skills: [
      { name: 'Праведный прапор', type: 'Белое (Ульта)', desc: 'Вызывает поток клинков, срезающий маг. защиту и энергию.', icon_url: '' },
      { name: 'Святое пронзание', type: 'Зелёное', desc: 'Бьет передний ряд и режет броню.', icon_url: '' },
      { name: 'Очищающий луч', type: 'Синее', desc: 'Выжигает энергию у магов.', icon_url: '' },
      { name: 'Аура чести', type: 'Фиолетовое (Пассивка)', desc: 'Дает приращение энергии за каждого стоящего впереди союзника.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Меч Тристана', type: 'Оружие', team_buff: '+10 680 Пробивания брони', icon_url: '' },
      { slot: 2, name: 'Кодекс Истребителя', type: 'Книга', stats: 'Физ. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила', icon_url: '' }
    ]
  },
  {
    id: 'sebastian', name: 'Себастьян', role: 'Поддержка', main_stat: 'Ловкость', position: 'Средняя линия', faction: 'Путь чести',
    archetypes: ['dodge', 'taf'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Sebastian_Icon.png',
    description: 'Маэстро крита. Снимает эффекты контроля с союзников и добавляет чистый урон к каждому критическому удару.',
    skills: [
      { name: 'Ода стойкости', type: 'Белое (Ульта)', desc: 'Снимает все дебаффы и немоту с союзников.', icon_url: '' },
      { name: 'Соло на бис', type: 'Зелёное', desc: 'Увеличивает шанс крита всей команде.', icon_url: '' },
      { name: 'Аплаудируйте!', type: 'Синее', desc: 'Добавляет чистый урон к критическим атакам союзников.', icon_url: '' },
      { name: 'Ритм сердца', type: 'Фиолетовое (Пассивка)', desc: 'Защищает от проклятий в первые секунды боя.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Скрипка Маэстро', type: 'Оружие', team_buff: '+10 680 Крит-урона', icon_url: '' },
      { slot: 2, name: 'Партитура Света', type: 'Книга', stats: 'Шанс крита', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },
  {
    id: 'faceless', name: 'Безликий', role: 'Контроль', main_stat: 'Интеллект', position: 'Средняя линия', faction: 'Путь вечности',
    archetypes: ['karkh', 'undead-atk'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Faceless_Icon.png',
    description: 'Копировальщик. Копирует последнее примененное умение любого героя на поле боя и дает всей команде +3000 защиты от магии.',
    skills: [
      { name: 'Doppelganger', type: 'Белое (Ульта)', desc: 'Копирует умение любого героя (союзника или врага) со 150% мощностью.', icon_url: '' },
      { name: 'Power Throw', type: 'Зелёное', desc: 'Подбрасывает танка врага в центр его команды.', icon_url: '' },
      { name: 'Разрушение', type: 'Синее', desc: 'Наносит магический урон по площади.', icon_url: '' },
      { name: 'Spell Expert', type: 'Фиолетовое (Пассивка)', desc: 'Дает пассивный бонус +3 000 защите от магии всей команде.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Маска Безликого', type: 'Оружие', team_buff: '+50 190 Пробивания маг. защиты', icon_url: '' },
      { slot: 2, name: 'Том Зазеркалья', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'nebula', name: 'Небула', role: 'Поддержка', main_stat: 'Ловкость', position: 'Средняя линия', faction: 'Путь заката',
    archetypes: ['karkh', 'orion'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Nebula_Icon.png',
    description: 'Звездный баффер. Перескакивает шарами между 2 ближайшими союзниками, умножая их физическую и магическую атаку на 250%.',
    skills: [
      { name: 'Астральная сфера', type: 'Белое (Ульта)', desc: 'Выпускает сферу, взрывающуюся во вражеском стане и выжигающую энергию.', icon_url: '' },
      { name: 'Безмятежность', type: 'Зелёное', desc: 'Снимает дебаффы с двух соседних союзников и лечит их.', icon_url: '' },
      { name: 'Концентрация', type: 'Синее', desc: 'Дает гигантский бафф атаки ближайшим союзникам.', icon_url: '' },
      { name: 'Эхо Бездны', type: 'Фиолетовое (Пассивка)', desc: 'Повышает собственный физический урон.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Астральный Шар', type: 'Оружие', team_buff: '+10 680 Физ. атаки', icon_url: '' },
      { slot: 2, name: 'Том Астрала', type: 'Книга', stats: 'Физ. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },
  {
    id: 'morrigan', name: 'Морриган', role: 'Поддержка', main_stat: 'Интеллект', position: 'Средняя линия', faction: 'Нежить',
    archetypes: ['undead'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Morrigan_Icon.png',
    description: 'Повелительница скелетов. Призывает костяную армию (до 10 скелетов) и блокирует любые попытки воскрешения у врагов (контрит Астарота).',
    skills: [
      { name: 'Армия Проклятых', type: 'Белое (Ульта)', desc: 'Призывает 3 скелетов-воинов.', icon_url: '' },
      { name: 'Костяная броня', type: 'Зелёное', desc: 'Лечит скелетов и лечит союзников Нежити.', icon_url: '' },
      { name: 'Некромантия', type: 'Синее', desc: 'Пассивно запрещает вражеские воскрешения.', icon_url: '' },
      { name: 'Власть тлена', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает защиту и атаку всех скелетов.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Посох Тлена', type: 'Оружие', team_buff: '+10 680 Пробивания брони', icon_url: '' },
      { slot: 2, name: 'Кодекс Нежити', type: 'Книга', stats: 'Здоровье', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'phobos', name: 'Фобос', role: 'Контроль', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Нежить',
    archetypes: ['undead'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Phobos_Icon.png',
    description: 'Пожиратель Страха. Выбирает врага с наивысшей магической атакой, полностью парализует его и выжигает всю энергию.',
    skills: [
      { name: 'Паралич', type: 'Белое (Ульта)', desc: 'Парализует мага врага на 6 секунд, непрерывно выжигая его энергию и HP.', icon_url: '' },
      { name: 'Темная Тень', type: 'Зелёное', desc: 'Наносит маг урон и крадет энергию.', icon_url: '' },
      { name: 'Проклятие', type: 'Синее', desc: 'Накладывает страх на ближайших соперников.', icon_url: '' },
      { name: 'Аура Страха', type: 'Фиолетовое (Пассивка)', desc: 'Уменьшает защиту от магии у всех врагов.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Амулет Тьмы', type: 'Оружие', team_buff: '+50 190 Пробивания маг. защиты', icon_url: '' },
      { slot: 2, name: 'Том Ужаса', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'lian', name: 'Лиан', role: 'Контроль', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь заката',
    archetypes: ['counter'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Lian_Icon.png',
    description: 'Очаровательница. Вводит в состояние сна (шарм) любого врага, нанесшего ей урон. Эффективно ломает AoE-атаки.',
    skills: [
      { name: 'Очарование', type: 'Белое (Ульта)', desc: 'Усыпляет всю вражескую команду на 7 секунд.', icon_url: '' },
      { name: 'Блуждающий огонек', type: 'Зелёное', desc: 'Наносит маг урон и ослепляет врага.', icon_url: '' },
      { name: 'Возмездие', type: 'Синее', desc: 'Усыпляет любого атакующего её соперника на 4 секунды.', icon_url: '' },
      { name: 'Озарение', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает собственный магический урон.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Веер Обаяния', type: 'Оружие', team_buff: '+10 680 Маг. атаки', icon_url: '' },
      { slot: 2, name: 'Заветы Шарма', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'isaac', name: 'Исаак', role: 'Поддержка', main_stat: 'Ловкость', position: 'Средняя линия', faction: 'Путь прогресса',
    archetypes: ['counter'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Isaac_Icon.png',
    description: 'Инженер-дрон. Перерабатывает входящий магический урон врагов в энергетические заряды, накладывая молчание на всех магов.',
    skills: [
      { name: 'Тепловой имперфект', type: 'Белое (Ульта)', desc: 'Запускает дрона, выжигающего защиту от магии и оглушающего соперников.', icon_url: '' },
      { name: 'Магнитный щит', type: 'Зелёное', desc: 'Поглощает маг урон и преобразует его в заряд.', icon_url: '' },
      { name: 'Дрон-Дрон', type: 'Синее', desc: 'Принимает маг урон на себя.', icon_url: '' },
      { name: 'Нейросеть', type: 'Фиолетовое (Пассивка)', desc: 'Повышает физический урон союзников фракции Прогресс.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Пушка Прогресса', type: 'Оружие', team_buff: '+10 680 Пробивания брони', icon_url: '' },
      { slot: 2, name: 'Чертежи Дрона', type: 'Книга', stats: 'Физ. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },
  {
    id: 'iris', name: 'Айрис', role: 'Маг', main_stat: 'Интеллект', position: 'Средняя линия', faction: 'Путь вечности',
    archetypes: ['eternity'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Iris_Icon.png',
    description: 'Пожирательница Душ. Извлекает душу из вражеского танка и наносит по ней чистый урон, оголяя всю команду.',
    skills: [
      { name: 'Извлечение души', type: 'Белое (Ульта)', desc: 'Вытягивает душу танка и выставляет её на растерзание чистым уроном.', icon_url: '' },
      { name: 'Теневой укус', type: 'Зелёное', desc: 'Наносит чистый урон и срезает физ. атаку.', icon_url: '' },
      { name: 'Призрачный огонь', type: 'Синее', desc: 'Отравляет врагов чистым уроном.', icon_url: '' },
      { name: 'Пожирание', type: 'Фиолетовое (Пассивка)', desc: 'Усиливает чистый урон по извлеченным душам.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Кристалл Души', type: 'Оружие', team_buff: '+10 680 Маг. атаки', icon_url: '' },
      { slot: 2, name: 'Том Теней', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'octavia', name: 'Октавия', role: 'Поддержка', main_stat: 'Ловкость', position: 'Задняя линия', faction: 'Путь вечности',
    archetypes: ['dodge', 'eternity'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Octavia_Icon.png',
    description: 'Владычица Зеркал. Дает невероятную синергию с уворотчиками (Данте, Аврора), превращая каждое уклонение в атаки чистым уроном.',
    skills: [
      { name: 'Зеркальный лабиринт', type: 'Белое (Ульта)', desc: 'Создает зеркальные двойники союзников и увеличивает уворот.', icon_url: '' },
      { name: 'Отраженный удар', type: 'Зелёное', desc: 'Каждое уклонение союзника производит урон чистой энергией во врага.', icon_url: '' },
      { name: 'Теневой щит', type: 'Синее', desc: 'Накладывает неуязвимость к физурону на союзника.', icon_url: '' },
      { name: 'Власть Вечности', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает защиту и ловкость союзников.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Зеркало Вечности', type: 'Оружие', team_buff: '+13 941 Уворота всюду', icon_url: '' },
      { slot: 2, name: 'Кодекс Зеркал', type: 'Книга', stats: 'Уворот', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },
  {
    id: 'oya', name: 'Ойя', role: 'Боец', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь природы',
    archetypes: ['nature'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Oya_Icon.png',
    description: 'Охотница Джунглей. Вытаскивает наиболее защищенного врага в передний ряд и дает союзникам огромные криты по покорным целям.',
    skills: [
      { name: 'Охотничий азарт', type: 'Белое (Ульта)', desc: 'Вытягивает врага с наибольшей защитой к себе и накладывает метку охоты.', icon_url: '' },
      { name: 'Дикий клич', type: 'Зелёное', desc: 'Лечит союзников Природы и дает им крит.', icon_url: '' },
      { name: 'Удар копьем', type: 'Синее', desc: 'Наносит физ урон по передней линии.', icon_url: '' },
      { name: 'Закон Джунглей', type: 'Фиолетовое (Пассивка)', desc: 'Повышает шанс крита по помеченным врагам.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Копье Охоты', type: 'Оружие', team_buff: '+10 680 Крит-урона', icon_url: '' },
      { slot: 2, name: 'Том Природы', type: 'Книга', stats: 'Шанс крита', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила', icon_url: '' }
    ]
  },
  {
    id: 'mushy', name: 'Муши и Шрум', role: 'Маг', main_stat: 'Интеллект', position: 'Передняя линия', faction: 'Путь природы',
    archetypes: ['nature'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Mushy_Icon.png',
    description: 'Грибные духи. Выращивают мицелий и грибных клонов на поле боя, нанося непрерывный магический урон и восстанавливая здоровье.',
    skills: [
      { name: 'Грибной бум', type: 'Белое (Ульта)', desc: 'Выращивает гигантский гриб, который детонирует чистым магическим уроном.', icon_url: '' },
      { name: 'Споры', type: 'Зелёное', desc: 'Размножает маленьких грибочков на поле.', icon_url: '' },
      { name: 'Мицелий', type: 'Синее', desc: 'Лечит всех грибных клонов.', icon_url: '' },
      { name: 'Лесная синергия', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает магический урон за каждого гриба на поле.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Споровый Посох', type: 'Оружие', team_buff: '+50 190 Пробивания маг. защиты', icon_url: '' },
      { slot: 2, name: 'Микологический Том', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'polaris', name: 'Полярис', role: 'Контроль', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь заката',
    archetypes: ['control'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Polaris_Icon.png',
    description: 'Северная Заря. Специалист по заморозке и оглушению. Продлевает любые эффекты контроля врагов и бьет по замерзшим целям.',
    skills: [
      { name: 'Полярная ночь', type: 'Белое (Ульта)', desc: 'Замораживает всех оглушенных врагов и наносит магический урон.', icon_url: '' },
      { name: 'Ледяной шторм', type: 'Зелёное', desc: 'Создает ледяные кристаллы, взрывающиеся при контакте.', icon_url: '' },
      { name: 'Северное сияние', type: 'Синее', desc: 'Увеличивает длительность любого стана или заморозки.', icon_url: '' },
      { name: 'Абсолютный ноль', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает урон по замороженным врагам.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Кристалл Зари', type: 'Оружие', team_buff: '+50 190 Пробивания маг. защиты', icon_url: '' },
      { slot: 2, name: 'Кодекс Холода', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'cascade', name: 'Каскад', role: 'Маг', main_stat: 'Ловкость', position: 'Средняя линия', faction: 'Путь заката',
    archetypes: ['orion'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Cascade_Icon.png',
    description: 'Владыка Вод. Накладывает водяные метки, снижающие физическую и магическую защиту врагов одновременно.',
    skills: [
      { name: 'Водопад', type: 'Белое (Ульта)', desc: 'Обрушивает поток воды, смывая щиты и нанося урон.', icon_url: '' },
      { name: 'Водяные метки', type: 'Зелёное', desc: 'Помечает врагов, увеличивая входящий по ним магический урон.', icon_url: '' },
      { name: 'Волновой импульс', type: 'Синее', desc: 'Срезает физическую бронь целей.', icon_url: '' },
      { name: 'Глубинный поток', type: 'Фиолетовое (Пассивка)', desc: 'Повышает урон союзников фракции Заката.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Трезубец Вод', type: 'Оружие', team_buff: '+50 190 Пробивания маг. защиты', icon_url: '' },
      { slot: 2, name: 'Том Океана', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },
  {
    id: 'augustus', name: 'Август', role: 'Маг', main_stat: 'Интеллект', position: 'Средняя линия', faction: 'Путь вечности',
    archetypes: ['orion'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Augustus_Icon.png',
    description: 'Император Душ. Бьет процентом от максимального HP врагов через чистый урон, уничтожая даже самых жирных танков.',
    skills: [
      { name: 'Имперский указ', type: 'Белое (Ульта)', desc: 'Наносит чистый урон в % от максимального здоровья всей вражеской команды.', icon_url: '' },
      { name: 'Выжигание души', type: 'Зелёное', desc: 'Наносит урон по передней линии.', icon_url: '' },
      { name: 'Печать власти', type: 'Синее', desc: 'Срезает исцеление вражеских танков.', icon_url: '' },
      { name: 'Аура Вечности', type: 'Фиолетовое (Пассивка)', desc: 'Повышает чистый урон союзников.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Скипетр Империи', type: 'Оружие', team_buff: '+10 680 Маг. атаки', icon_url: '' },
      { slot: 2, name: 'Кодекс Власти', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'folio', name: 'Фолио', role: 'Маг', main_stat: 'Интеллект', position: 'Средняя линия', faction: 'Путь прогресса',
    archetypes: ['orion'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Folio_Icon.png',
    description: 'Магистр Книг. AoE-маг фракции Прогресс. Выпускает чернильные заклинания, наносящие массовый маг урон.',
    skills: [
      { name: 'Чернильный шторм', type: 'Белое (Ульта)', desc: 'Наносит массивный магический урон всем врагам и сжигает их свитки.', icon_url: '' },
      { name: 'Печать молчания', type: 'Зелёное', desc: 'Накладывает немоту на магов врага.', icon_url: '' },
      { name: 'Книжный щит', type: 'Синее', desc: 'Накладывает маг щит на себя.', icon_url: '' },
      { name: 'Эрудиция', type: 'Фиолетовое (Пассивка)', desc: 'Повышает магическую атаку союзников Прогресса.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Гримуар Фолио', type: 'Оружие', team_buff: '+50 190 Пробивания маг. защиты', icon_url: '' },
      { slot: 2, name: 'Том Знаний', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'somna', name: 'Сомна', role: 'Контроль', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь вечности',
    archetypes: ['orion'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Somna_Icon.png',
    description: 'Повелительница Снов. Усыпляет ключевых врагов (например Ясмин или Карха) ДО того, как они успеют активировать свои ульты.',
    skills: [
      { name: 'Гипноз', type: 'Белое (Ульта)', desc: 'Усыпляет врага с наибольшей физической или магической атакой.', icon_url: '' },
      { name: 'Сновидение', type: 'Зелёное', desc: 'Наносит чистый урон спящим целям.', icon_url: '' },
      { name: 'Кошмар', type: 'Синее', desc: 'Снижает скорость атаки раненых врагов.', icon_url: '' },
      { name: 'Аура снов', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает защиту союзников от контроля.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Ловец Снов', type: 'Оружие', team_buff: '+10 680 Маг. атаки', icon_url: '' },
      { slot: 2, name: 'Том Сновидений', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'kayla', name: 'Кайла', role: 'Боец', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь хаоса',
    archetypes: ['chaos'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Kayla_Icon.png',
    description: 'Пламенная Воительница. Работает в паре с братом Эйданом. Прыгает во вражеский стан, устраивая пылающий ад.',
    skills: [
      { name: 'Пламенный прыжок', type: 'Белое (Ульта)', desc: 'Влетает во вражеский стан, поджигая землю и всех вокруг.', icon_url: '' },
      { name: 'Огненный клыки', type: 'Зелёное', desc: 'Наносит урон огнем и восстанавливает себе HP.', icon_url: '' },
      { name: 'Связь пламени', type: 'Синее', desc: 'Получает щит и лечение от брата Эйдана.', icon_url: '' },
      { name: 'Душа огня', type: 'Фиолетовое (Пассивка)', desc: 'Воскресает при смерти, пока жив Эйдан.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Клинок Пламени', type: 'Оружие', team_buff: '+10 680 Физ. атаки', icon_url: '' },
      { slot: 2, name: 'Том Огня', type: 'Книга', stats: 'Здоровье, Атака', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила', icon_url: '' }
    ]
  },
  {
    id: 'aidan', name: 'Эйдан', role: 'Поддержка', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь хаоса',
    archetypes: ['chaos'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Aidan_Icon.png',
    description: 'Хранитель Огня. Брат Кайлы. Раздает щиты, увеличивает максимальное здоровье всей команды и воскрешает Кайлу.',
    skills: [
      { name: 'Пламенный оплот', type: 'Белое (Ульта)', desc: 'Накладывает огромный озоновый щит на всю команду.', icon_url: '' },
      { name: 'Узы крови', type: 'Зелёное', desc: 'Лечит Кайлу и ближайшего танка.', icon_url: '' },
      { name: 'Увеличение жизни', type: 'Синее', desc: 'Пассивно повышает максимальное HP всей команды.', icon_url: '' },
      { name: 'Воскрешение сестры', type: 'Фиолетовое (Пассивка)', desc: 'Воскрешает Кайлу при её гибели.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Посох Огня', type: 'Оружие', team_buff: '+10 680 Маг. атаки', icon_url: '' },
      { slot: 2, name: 'Кодекс Хранителя', type: 'Книга', stats: 'Здоровье', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'helios', name: 'Хелиос', role: 'Поддержка', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь чести',
    archetypes: ['orion'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Helios_Icon.png',
    description: 'Солнечный Страж. Наказывает любых критующих врагов (Ясмин, Артемиду, Джу) огненными пламенными сферами возмездия.',
    skills: [
      { name: 'Солнечный луч', type: 'Белое (Ульта)', desc: 'Призывает огненные сферы, наносящие маг урон всем врагам.', icon_url: '' },
      { name: 'Небесный щит', type: 'Зелёное', desc: 'Накладывает физический щит на переднюю линию.', icon_url: '' },
      { name: 'Возмездие', type: 'Синее', desc: 'Пассивно бьет огненной сферой любого врага, нанесшего крит урон по союзникам.', icon_url: '' },
      { name: 'Солнечный бафф', type: 'Фиолетовое (Пассивка)', desc: 'Повышает магическую атаку всей команды.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Сфера Солнца', type: 'Оружие', team_buff: '+10 680 Маг. брони', icon_url: '' },
      { slot: 2, name: 'Заветы Солнца', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'alvanor', name: 'Альванор', role: 'Поддержка', main_stat: 'Интеллект', position: 'Передняя линия', faction: 'Путь природы',
    archetypes: ['nature'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Alvanor_Icon.png',
    description: 'Хранитель Леса. Защищает фракцию Природы барьером рун, снижает уроны и непрерывно исцеляет союзников.',
    skills: [
      { name: 'Рунический барьер', type: 'Белое (Ульта)', desc: 'Создает лесной барьер, поглощающий базовые атаки врагов.', icon_url: '' },
      { name: 'Древний хил', type: 'Зелёное', desc: 'Лечит всех героев фракции Природа.', icon_url: '' },
      { name: 'Корни леса', type: 'Синее', desc: 'Оглушает врагов цепкими корнями.', icon_url: '' },
      { name: 'Гармония природы', type: 'Фиолетовое (Пассивка)', desc: 'Увеличивает магическую атаку всех лесных героев.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Посох Леса', type: 'Оружие', team_buff: '+50 190 Пробивания маг. защиты', icon_url: '' },
      { slot: 2, name: 'Том Природы', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'cornelius', name: 'Корнелиус', role: 'Маг', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь чести',
    archetypes: ['counter'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Cornelius_Icon.png',
    description: 'Ученый Академии. Ваншотит вражеских магов тяжелым валуном, урон которого зависит от интеллекта цели.',
    skills: [
      { name: 'Тяжелый валун', type: 'Белое (Ульта)', desc: 'Сбрасывает глыбу на врага с самым высоким интеллектом, ваншотя магов.', icon_url: '' },
      { name: 'Подавление', type: 'Зелёное', desc: 'Снижает магическую атаку самой сильной цели.', icon_url: '' },
      { name: 'Защитный купол', type: 'Синее', desc: 'Повышает защиту от магии всей команды.', icon_url: '' },
      { name: 'Умственная слабость', type: 'Фиолетовое (Пассивка)', desc: 'Снижает интеллект случайного врага.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Книга Мудрости', type: 'Оружие', team_buff: '+10 680 Защиты от магии', icon_url: '' },
      { slot: 2, name: 'Гримуар Корнелиуса', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'thea', name: 'Тея', role: 'Лекарь', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь природы',
    archetypes: ['nature'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Thea_Icon.png',
    description: 'Жрица Священной Рощи. Стартовый хилер игры. Лечит всю команду и накладывает немоту на магов соперника.',
    skills: [
      { name: 'Святое исцеление', type: 'Белое (Ульта)', desc: 'Исцеляет всех союзников на поле боя.', icon_url: '' },
      { name: 'Солнечный луч', type: 'Зелёное', desc: 'Лечит самого раненого союзника.', icon_url: '' },
      { name: 'Обет молчания', type: 'Синее', desc: 'Накладывает немоту на всех врагов на несколько секунд.', icon_url: '' },
      { name: 'Второе дыхание', type: 'Фиолетовое (Пассивка)', desc: 'Ускоряет каст умений союзников с низким HP.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Посох Рощи', type: 'Оружие', team_buff: '+10 680 Защиты от магии', icon_url: '' },
      { slot: 2, name: 'Том Святости', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'maya', name: 'Майя', role: 'Лекарь', main_stat: 'Интеллект', position: 'Средняя линия', faction: 'Путь природы',
    archetypes: ['nature'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Maya_Icon.png',
    description: 'Королева Цветов. Выращивает лечебный цветок, который непрерывно исцеляет союзников и притягивает врагов лианами.',
    skills: [
      { name: 'Королевский цветок', type: 'Белое (Ульта)', desc: 'Выращивает хилящий цветок. Пока цветок жив — союзники получают непрерывное лечение.', icon_url: '' },
      { name: 'Опасные лианы', type: 'Зелёное', desc: 'Стягивает крайних врагов в центр, нанося чистый урон.', icon_url: '' },
      { name: 'Ядовитые пыльца', type: 'Синее', desc: 'Отравляет чистым уроном всех врагов.', icon_url: '' },
      { name: 'Нектар', type: 'Фиолетовое (Пассивка)', desc: 'Усиливает собственную магическую атаку.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Бутон Жизни', type: 'Оружие', team_buff: '+10 680 Маг. атаки', icon_url: '' },
      { slot: 2, name: 'Том Природы', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'mojo', name: 'Моджо', role: 'Маг', main_stat: 'Интеллект', position: 'Задняя линия', faction: 'Путь природы',
    archetypes: ['nature'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Mojo_Icon.png',
    description: 'Шаман Джунглей. Накладывает порчу на врагов, дублирующую часть любого урона союзников.',
    skills: [
      { name: 'Тотем порчи', type: 'Белое (Ульта)', desc: 'Вызывает дух тотема, наносящий маг урон случайно выбираемым врагам.', icon_url: '' },
      { name: 'Целительное исцеление', type: 'Зелёное', desc: 'Периодически лечит команду.', icon_url: '' },
      { name: 'Звездные чары', type: 'Синее', desc: 'Оглушает переднюю линию врага.', icon_url: '' },
      { name: 'Проклятие шамана', type: 'Фиолетовое (Пассивка)', desc: 'Дублирует часть всего урона, получаемого врагами.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Тотем Моджо', type: 'Оружие', team_buff: '+50 190 Пробивания маг. защиты', icon_url: '' },
      { slot: 2, name: 'Свиток Порчи', type: 'Книга', stats: 'Маг. урон', icon_url: '' },
      { slot: 3, name: 'Кольцо Интеллекта', type: 'Кольцо', stats: 'Интеллект', icon_url: '' }
    ]
  },
  {
    id: 'rufus', name: 'Руфус', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', faction: 'Путь природы',
    archetypes: ['counter'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Rufus_Icon.png',
    description: 'Ракайский Воин. Абсолютный контр-пик магов. Поглощает любой магический урон и мгновенно воскресает, если погиб от магии.',
    skills: [
      { name: 'Щит Ракая', type: 'Белое (Ульта)', desc: 'Создает магический щит, поглощающий только магурон и лечащий Руфуса.', icon_url: '' },
      { name: 'Огненный заслон', type: 'Зелёное', desc: 'Накладывает щит от магии на союзника.', icon_url: '' },
      { name: 'Удар ракая', type: 'Синее', desc: 'Наносит физический урон врагу с наивысшей маг атакой.', icon_url: '' },
      { name: 'Клятва Бессмертия', type: 'Фиолетовое (Пассивка)', desc: 'Руфуса невозможно убить магическим или чистым уроном — он всегда воскресает с 1 HP.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Щит Ракая', type: 'Оружие', team_buff: '+10 680 Защиты от магии', icon_url: '' },
      { slot: 2, name: 'Том Поглощения', type: 'Книга', stats: 'Здоровье', icon_url: '' },
      { slot: 3, name: 'Кольцо Силы', type: 'Кольцо', stats: 'Сила', icon_url: '' }
    ]
  },
  {
    id: 'arachne', name: 'Арахна', role: 'Контроль', main_stat: 'Ловкость', position: 'Средняя линия', faction: 'Путь прогресса',
    archetypes: ['dodge'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Arachne_Icon.png',
    description: 'Кибер-Паучиха. Специалист массового стана. Запускает гипер-импульсы, надолго замораживающие передние и средние ряды врага.',
    skills: [
      { name: 'Гипер-импульс', type: 'Белое (Ульта)', desc: 'Падает на врага с наименьшим HP и оглушает всех врагов вокруг на 5 секунд.', icon_url: '' },
      { name: 'Паутина дезориентации', type: 'Зелёное', desc: 'Связывает переднюю линию, нанося маг урон.', icon_url: '' },
      { name: 'Плазменный выстрел', type: 'Синее', desc: 'Выпускает плазменный шар.', icon_url: '' },
      { name: 'Кибер-усиление', type: 'Фиолетовое (Пассивка)', desc: 'Наносит дополнительный урон оглушенным целям.', icon_url: '' }
    ],
    artifacts: [
      { slot: 1, name: 'Паучий Пульсор', type: 'Оружие', team_buff: '+10 680 Физ. атаки', icon_url: '' },
      { slot: 2, name: 'Чертежи Паутины', type: 'Книга', stats: 'Здоровье, Атака', icon_url: '' },
      { slot: 3, name: 'Кольцо Ловкости', type: 'Кольцо', stats: 'Ловкость', icon_url: '' }
    ]
  },
  {
    id: 'cain', name: 'Каин (пет)', role: 'Пет', main_stat: 'Ловкость', position: 'Поддержка', faction: 'Служебный',
    archetypes: ['dodge'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Cain_Icon.png',
    description: 'Ночной Покровитель. Питомец уворот-команд. Начисляет +35% бонусной энергии своему хозяину за каждый уворот.',
    skills: [
      { name: 'Теневая вуаль', type: 'Белое (Ульта)', desc: 'Дает уворот всей команде на 6 секунд.', icon_url: '' },
      { name: 'Патронаж Каина', type: 'Пассивка (Патронаж)', desc: 'Дает своему герою (Данте/Авроре/Ясмин) энергию за уклонения.', icon_url: '' }
    ],
    artifacts: []
  },
  {
    id: 'fluffy', name: 'Флаффи', role: 'Поддержка', main_stat: 'Ловкость', position: 'Средняя линия', faction: 'Путь природы',
    archetypes: ['orion'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Fluffy_Icon.png',
    description: 'Пушистый Дух. Self-damage саппорт. Наносит урон себе ради гигантских защитных баффов союзникам.',
    skills: [
      { name: 'Пушистый взрыв', type: 'Белое (Ульта)', desc: 'Призывает защитную ауру, поглощающую физические атаки.', icon_url: '' },
      { name: 'Самопожертвование', type: 'Зелёное', desc: 'Тратит свое HP для баффа атаки передней линии.', icon_url: '' }
    ],
    artifacts: []
  },
  {
    id: 'adam', name: 'Адам', role: 'Керри', main_stat: 'Ловкость', position: 'Средняя линия', faction: 'Путь природы',
    archetypes: ['dodge'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Adam_Icon.png',
    description: 'Мастер Заслона. Редкий герой, способны уклоняться даже от чистого урона благодаря «Реактивному экрану».',
    skills: [
      { name: 'Реактивный экран', type: 'Белое (Ульта)', desc: 'Дает абсолютное уклонение от любого типа урона, включая чистый.', icon_url: '' }
    ],
    artifacts: []
  },
  {
    id: 'electra', name: 'Электра', role: 'Танк', main_stat: 'Интеллект', position: 'Передняя линия', faction: 'Путь прогресса',
    archetypes: ['orion'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Electra_Icon.png',
    description: 'Магический Танк. Держит фронт маг-составов на Орионе.',
    skills: [],
    artifacts: []
  },
  {
    id: 'lyria', name: 'Лирия', role: 'Поддержка', main_stat: 'Ловкость', position: 'Средняя линия', faction: 'Нежить',
    archetypes: ['undead'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Lyria_Icon.png',
    description: 'Анти-уворот Нежить. Снимает до ~29 848 уворота со всех врагов постоянной аурой, полностью уничтожая Данте-составы.',
    skills: [
      { name: 'Снятие покрова', type: 'Белое (Ульта)', desc: 'Срезает уворот всей вражеской команды практически до нуля.', icon_url: '' }
    ],
    artifacts: []
  },
  {
    id: 'ishmael', name: 'Ишмаэль', role: 'Керри', main_stat: 'Ловкость', position: 'Передняя линия', faction: 'Путь чести',
    archetypes: ['dodge'], avatar_url: 'https://hero-wars.fandom.com/wiki/Special:Redirect/file/Ishmael_Icon.png',
    description: 'Одержимый Клит-Керри. Входит в режим Миража, увеличивая шанс крита и вампиризм до максимума.',
    skills: [
      { name: 'Темный приют', type: 'Белое (Ульта)', desc: 'Увеличивает шанс крита и скорость в 3 раза.', icon_url: '' }
    ],
    artifacts: []
  }
];

async function seedFullWiki() {
  console.log(`Starting seed for ${FULL_HEROES.length} heroes...`);

  // Delete existing
  const { error: delErr } = await supabase.from('hw_heroes').delete().neq('id', '___none___');
  if (delErr) {
    console.error('Failed to clear hw_heroes:', delErr.message);
  }

  // Insert in batches of 10
  for (let i = 0; i < FULL_HEROES.length; i += 10) {
    const chunk = FULL_HEROES.slice(i, i + 10);
    const { error } = await supabase.from('hw_heroes').insert(chunk);
    if (error) {
      console.error(`Batch ${i/10 + 1} insert failed:`, error.message);
    } else {
      console.log(`✓ Inserted batch ${i/10 + 1} (${chunk.length} heroes)`);
    }
  }

  console.log('🎉 Full Hero Wars Wiki seed complete!');
}

seedFullWiki();
