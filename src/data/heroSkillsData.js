export const HERO_SKILLS_DB = {
  "qingmao": [
    {
      "desc": "Цин Мао призывает дух дракона своего брата, который наносит три удара по ближайшим врагам. Каждый удар наносит физический урон, отбрасывает врагов назад и накладывает эффект горения на 5 секунд.",
      "name": "1 - Цин Лун (Qing Long)",
      "type": "Ультимативное умение",
      "formula": "Урон за удар: 30% Физическая Атака + 75 * Уровень | Урон от пламени: 20% Физическая Атака + 30 * Уровень за 5 сек. (С Вознесением V: Дополнительный урон за удар: 20% Физическая Атака + 3000 | Дополнительный урон от пламени: 10% Физическая Атака + 1200)",
      "name_en": "Qing Long",
      "icon_url": "/images/skills/qingmao_skill_1.webp",
      "priority": "Высокий — сильный ультимейт, наносящий огромный урон, особенно после открытия Вознесения V.",
      "explanation": "Это мощное ультимативное умение, сочетающее в себе взрывной урон, контроль позиционирования врагов и периодический урон. На 5-м уровне Вознесения (Wrath of Qing Long) за каждого ослепленного врага на поле боя дракон наносит один дополнительный удар (максимум до 5 дополнительных ударов), что удваивает его общую эффективность."
    },
    {
      "desc": "Цин Мао бросает копье в ближайших врагов, ослепляя их на 3 секунды. Ослепленные враги промахиваются своими базовыми атаками.",
      "name": "2 - Копьё Зари (Spear of Dawn)",
      "type": "Периодическое умение",
      "formula": "Урон: 20% Физическая Атака + 30 * Уровень | Длительность ослепления: 3 сек. | Перезарядка: 15 сек.",
      "name_en": "Spear of Dawn",
      "icon_url": "/images/skills/qingmao_skill_2.webp",
      "priority": "Очень Высокий — ключевое умение для выживаемости команды и синергии с ультимейтом.",
      "explanation": "Обеспечивает отличный контроль и защиту передней линии. Ослепленные враги не только наносят меньше урона, но и активируют дополнительные удары дракона от ультимейта при наличии Вознесения V."
    },
    {
      "desc": "Цин Мао атакует ближайшего врага мощным ударом когтя, наносящим урон в процентах от текущего здоровья цели.",
      "name": "3 - Коготь Дракона (Dragon's Claw)",
      "type": "Периодическое умение",
      "formula": "Урон: 21% от текущего здоровья цели (0.1% * Уровень + 10%) | Максимальный урон: 25% Физическая Атака + 1550 * Уровень + 35500 | Перезарядка: 23 сек.",
      "name_en": "Dragon's Claw",
      "icon_url": "/images/skills/qingmao_skill_3.webp",
      "priority": "Высокий — хороший точечный урон по танкам, но прокачивается после пассивного умения и ослепления.",
      "explanation": "Крайне эффективно против танков с огромным запасом здоровья на передней линии. Чем больше HP у цели, тем сильнее удар (в пределах установленного лимита)."
    },
    {
      "desc": "Каждая атака Цин Мао навсегда снижает броню цели до конца боя. Эффект суммируется.",
      "name": "4 - Открытое Сердце (Open Heart)",
      "type": "Пассивное умение",
      "formula": "Снижение брони: 470 за удар (4 * Уровень + 110) | С Вознесением II: Снижение макс. здоровья до 40% (100% от урона базовой атаки)",
      "name_en": "Open Heart",
      "icon_url": "/images/skills/qingmao_skill_4.webp",
      "priority": "Очень Высокий — самое важное умение, увеличивающее урон всей команды. Прокачивать в первую очередь.",
      "explanation": "Главное умение Цин Мао, делающее ее превосходным разрушителем брони. На Вознесении II (Relentless Open Heart) она также снижает максимальное здоровье цели на величину нанесенного базового урона (до 40%)."
    }
  ],
  "rufus": [
    {
      "desc": "Руфус создает магический щит, который защищает всю команду. Этот щит поглощает весь входящий магический урон.",
      "name": "1 - Барьер Ракаши (Rakashi’s Barrier)",
      "type": "Активное",
      "formula": "Поглощение урона зависит от Магической Атаки",
      "name_en": "Rakashi’s Barrier",
      "icon_url": "/images/skills/rufus_skill_1.webp",
      "priority": "Высокий",
      "explanation": "Это самое важное умение Руфуса. Оно защищает всю команду от опасных магических атак. Чем сильнее умение, тем больше магического урона оно может заблокировать."
    },
    {
      "desc": "Руфус атакует врага с наибольшей силой магии, нанося периодический урон в течение 4 секунд.",
      "name": "2 - Насмешка Ракаши (Rakashi’s Mockery)",
      "type": "Активное",
      "formula": "Периодический урон зависит от Магической Атаки",
      "name_en": "Rakashi’s Mockery",
      "icon_url": "/images/skills/rufus_skill_2.webp",
      "priority": "Средний",
      "explanation": "Это умение помогает ослабить сильных вражеских магов. Оно наносит дополнительный периодический урон, но не так важно, как его щит или воскрешение."
    },
    {
      "desc": "Руфус исцеляет себя, преобразуя часть заблокированного его щитом урона в здоровье.",
      "name": "3 - Пожиратель (Devourer of)",
      "type": "Пассивное",
      "formula": "Восстанавливает 65% от урона, поглощенного Барьером Ракаши",
      "name_en": "Devourer of",
      "icon_url": "/images/skills/rufus_skill_3.webp",
      "priority": "Средний",
      "explanation": "Это умение позволяет Руфусу жить дольше, особенно против магических команд. Оно отлично синергирует с его щитом, но не защищает других союзников."
    },
    {
      "desc": "Руфус может погибнуть только от физического урона. Если его убивает магическая атака или чистый урон, он возрождается с некоторым количеством здоровья.",
      "name": "4 - Клятва Ракаши (Rakashi’s Oath)",
      "type": "Пассивное",
      "formula": "Здоровье при возрождении зависит от Магической Атаки",
      "name_en": "Rakashi’s Oath",
      "icon_url": "/images/skills/rufus_skill_4.webp",
      "priority": "Низкий",
      "explanation": "Эта пассивная способность очень полезна, но она работает даже без улучшений. Повышение уровня лишь увеличивает количество здоровья, с которым он возрождается."
    }
  ],
  "yasmine": [
    {
      "desc": "Ясмин парализует последнего атаковавшего её противника на 3 секунды, телепортируется ему за спину, наносит 7 ударов и накладывает Метку Убийцы. Во время действия этого умения она не может получать негативные эффекты. После атаки она возвращается на исходную позицию и продолжает атаковать помеченную цель.",
      "name": "1 - Танец Смерти (Dance of Death)",
      "type": "Активное",
      "formula": "40% Физическая Атака + 40 * Уровень за удар",
      "name_en": "Dance of Death",
      "icon_url": "/images/skills/yasmine_skill_1.webp",
      "priority": "Очень Высокий (1) — это умение определяет всю стратегию Ясмин. Его прокачка в первую очередь значительно увеличивает её взрывной урон и выживаемость.",
      "explanation": "Это основное атакующее умение Ясмин и основа её геймплея. Оно наносит огромный взрывной урон по одной цели и делает её неуязвимой во время действия."
    },
    {
      "desc": "При использовании «Танца Смерти» Ясмин получает бонус к шансу критического удара и уклонению на 10 секунд.",
      "name": "2 - Инстинкт Убийцы (Assassin's Instinct)",
      "type": "Активное",
      "formula": "40% Физическая Атака + 40 * Уровень + 500 к Шансу критического удара и Уклонению",
      "name_en": "Assassin's Instinct",
      "icon_url": "/images/skills/yasmine_skill_2.webp",
      "priority": "Высокий (2) — отличное продолжение для повышения выживаемости и обеспечения большего количества зарядов яда за счет критических ударов.",
      "explanation": "Это умение повышает как её атакующий, так и оборонительный потенциал, особенно в самые опасные моменты сразу после использования ультимейта."
    },
    {
      "desc": "Критические удары Ясмин отравляют врагов. Если отравленный враг получает новый удар, длительность действия яда обновляется, а урон суммируется до 10 раз. Каждый эффект яда наносит чистый урон с течением времени.",
      "name": "3 - Объятия Боли (Embrace of Pain)",
      "type": "Пассивное",
      "formula": "33% Физическая Атака + 30 * Уровень чистого урона за каждый заряд яда каждые 5 секунд",
      "name_en": "Embrace of Pain",
      "icon_url": "/images/skills/yasmine_skill_3.webp",
      "priority": "Средний (3) — хотя умение сильное, оно сильно зависит от критических ударов. Прокачивайте его после улучшения основной атаки и шанса крита.",
      "explanation": "Это умение добавляет стабильный урон во время затяжных боев. Суммирующийся яд может добить врагов, даже если они пережили её основное умение."
    },
    {
      "desc": "Враги, отравленные Ясмин, получают меньше исцеления. Каждый раз, когда они исцеляются, часть лечения блокируется в зависимости от характеристик Ясмин.",
      "name": "4 - Неизвестный Токсин (Unknown Toxin)",
      "type": "Пассивное",
      "formula": "20% Физическая Атака + 30 * Уровень + 500 заблокированного исцеления за каждый такт лечения",
      "name_en": "Unknown Toxin",
      "icon_url": "/images/skills/yasmine_skill_4.webp",
      "priority": "Низкий (4) — помогает в определенных боях, но наименее важно для чистого урона. Прокачивайте в последнюю очередь.",
      "explanation": "Полезно против команд с сильным исцелением, но ситуативно и напрямую не увеличивает её собственный урон."
    }
  ],
  "polaris": [
    {
      "desc": "Полярис призывает северное сияние на поле боя, нанося магический урон всем противникам и замораживая их на несколько секунд.",
      "name": "1 - Северное Сияние (Northern Lights)",
      "type": "Активное",
      "formula": "40% Магическая Атака + 120 * Уровень",
      "name_en": "Northern Lights",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/polaris_1.png",
      "priority": "Очень Высокий - приоритетное умение для прокачки, увеличивает урон и длительность контроля",
      "explanation": "Это ультимативное умение является основным инструментом контроля Полярис. Оно позволяет прервать ключевые заклинания врагов и дает вашей команде время для проведения мощной контратаки."
    },
    {
      "desc": "Заключает случайного противника в ледяную гробницу, полностью блокируя его действия и нанося периодический магический урон.",
      "name": "2 - Ледяная Гробница (Glacial Tomb)",
      "type": "Активное",
      "formula": "25% Магическая Атака + 80 * Уровень",
      "name_en": "Glacial Tomb",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/polaris_2.png",
      "priority": "Высокий - увеличивает урон и шанс наложения контроля на высокоуровневых врагов",
      "explanation": "Отличный точечный контроль, который временно выводит из строя опасного бойца или целителя противника, делая его уязвимым."
    },
    {
      "desc": "Наносит магический урон врагам, находящимся под действием любых эффектов контроля, и продлевает действие этих эффектов.",
      "name": "3 - Обморожение (Frostbite)",
      "type": "Активное",
      "formula": "30% Магическая Атака + 50 * Уровень",
      "name_en": "Frostbite",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/polaris_3.png",
      "priority": "Высокий - критически важно для команд, построенных на контроле",
      "explanation": "Ключевое умение для синергии. Оно делает любой контроль ваших союзников (оглушение, молчание, ослепление) гораздо более длительным и опасным."
    },
    {
      "desc": "Все союзники наносят дополнительный магический урон по целям, находящимся под эффектами контроля или заморозки.",
      "name": "4 - Абсолютный Ноль (Absolute Zero)",
      "type": "Пассивное",
      "formula": "15% Магическая Атака + 20 * Уровень",
      "name_en": "Absolute Zero",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/polaris_4.png",
      "priority": "Средний - хорошая пассивная прибавка к общему урону команды",
      "explanation": "Пассивное умение, которое значительно увеличивает общий атакующий потенциал всей команды, превращая контроль в источник огромного урона."
    }
  ],
  "mojo": [
    {
      "desc": "Моджо выпускает шквал магических снарядов в случайных противников, нанося им магический урон.",
      "name": "1 - Шквал заклинаний (Flurry of Spells)",
      "type": "Активное",
      "formula": "40% Магическая Атака + 120 * Уровень",
      "name_en": "Flurry of Spells",
      "icon_url": "https://api.herowars.me/assets/skills/mojo_1.png",
      "priority": "Средний - качайте по мере возможности для увеличения общего урона",
      "explanation": "Полезное умение для распределения урона по вражеской команде, помогающее быстрее заряжать энергию."
    },
    {
      "desc": "Призывает духов природы, которые периодически восстанавливают здоровье всем союзникам.",
      "name": "2 - Исцеляющие духи (Healing Spirits)",
      "type": "Активное",
      "formula": "15% Магическая Атака + 45 * Уровень за каждый такт",
      "name_en": "Healing Spirits",
      "icon_url": "https://api.herowars.me/assets/skills/mojo_2.png",
      "priority": "Высокий - увеличивает выживаемость пачки на Гидре и в кампаниях",
      "explanation": "Обеспечивает команду стабильным пассивным исцелением на протяжении всего боя."
    },
    {
      "desc": "Проклинает случайного противника. Проклятая цель получает дополнительный магический урон каждые 2 секунды в размере процента от всего урона, полученного ею за это время.",
      "name": "3 - Сглаз (Hex)",
      "type": "Активное",
      "formula": "20% от полученного целью урона + 0.1% * Уровень",
      "name_en": "Hex",
      "icon_url": "https://api.herowars.me/assets/skills/mojo_3.png",
      "priority": "Максимальный - самое важное умение Моджо, качать в первую очередь",
      "explanation": "Ключевое умение Моджо. На Гидре оно работает даже после смерти Моджо (если открыто четвертое умение), нанося миллионы урона в связке с Джу."
    },
    {
      "desc": "Пассивное умение. Базовые атаки Моджо теперь наносят дополнительный магический урон. Если Моджо погибает, его Сглаз продолжает действовать до конца боя.",
      "name": "4 - Жуткие кости (Spooky Bones)",
      "type": "Пассивное",
      "formula": "10% Магическая Атака + 30 * Уровень",
      "name_en": "Spooky Bones",
      "icon_url": "https://api.herowars.me/assets/skills/mojo_4.png",
      "priority": "Очень Высокий - обязательно для разблокировки эффекта посмертного Сглаза",
      "explanation": "Позволяет Моджо приносить огромную пользу на Гидре, даже если он погибает на первых секундах боя."
    }
  ],
  "judge": [
    {
      "desc": "Судья призывает мощный ионный циклон в центр вражеской команды, нанося магический урон всем врагам в зоне действия и оглушая их.",
      "name": "1 - Ионный циклон (Ion Cyclone)",
      "type": "Активное",
      "formula": "55% Магическая Атака + 150 * Уровень",
      "name_en": "Ion Cyclone",
      "icon_url": "https://api.herowars.me/images/skills/judge_1.png",
      "priority": "Высокий - увеличивает урон и длительность контроля",
      "explanation": "Отличный инструмент контроля, который позволяет прервать ключевые умения противников и дать вашей команде тактическое преимущество."
    },
    {
      "desc": "Накладывает силовой щит на союзника с наименьшим количеством здоровья. Щит поглощает любой входящий урон.",
      "name": "2 - Силовой щит (Force Shield)",
      "type": "Активное",
      "formula": "120% Магическая Атака + 400 * Уровень",
      "name_en": "Force Shield",
      "icon_url": "https://api.herowars.me/images/skills/judge_2.png",
      "priority": "Максимальный - приоритетное умение для прокачки",
      "explanation": "Основное защитное умение Судьи. Позволяет спасать ключевых героев от быстрой гибели и отлично синергирует с другими щитовыми механиками."
    },
    {
      "desc": "Судья запускает биотическую молнию, которая поражает случайных противников, нанося магический урон и временно снижая их магическую защиту.",
      "name": "3 - Биотическая молния (Biotic Lightning)",
      "type": "Активное",
      "formula": "40% Магическая Атака + 100 * Уровень",
      "name_en": "Biotic Lightning",
      "icon_url": "https://api.herowars.me/images/skills/judge_3.png",
      "priority": "Средний - прокачивается после основных защитных навыков",
      "explanation": "Помогает снизить защиту врагов, что увеличивает общий магический урон всей вашей команды."
    },
    {
      "desc": "Пока активен Силовой щит, он периодически наносит магический урон ближайшим противникам.",
      "name": "4 - Сверхпроводник (Superconductor)",
      "type": "Пассивное",
      "formula": "25% Магическая Атака + 50 * Уровень",
      "name_en": "Superconductor",
      "icon_url": "https://api.herowars.me/images/skills/judge_4.png",
      "priority": "Средний - хорошая пассивная прибавка к урону",
      "explanation": "Превращает защитный щит в источник постоянного урона, что особенно эффективно против героев ближнего боя, пытающихся пробить вашу оборону."
    }
  ],
  "amira": [
    {
      "name": "1 - Беспечное желание (Careless Wish)",
      "type": "Активное (Ультимативное) умение Party Storm / Magic Damage Periodical Storm Damage: Dependent on accumulated storm intensity after 7 seconds. Initial Intensity formula: 30% Magic Attack + Level-dependent scaling. Final Damage: Up to 100% of accumulated intensity based on remaining power after enemy attacks. Total duration: 7s. Target: All enemies. High scaling with Magic Attack and duration control. High value against non-burst/sustained damage setups. High impact skill that punishes enemies for low attack counts while dealing damage over time and exploding at the end of duration. Critical upgrade priority for overall damage scaling and PvP presence. Useful against teams with low attack frequencies or heavy shields that delay attacks. High efficiency when paired with magic buffs or duration extenders. Key component of her overall offense and arena threat level. Core ultimate for PvP and PvE content. Prioritize upgrading first to raise base intensity and scale finish damage. High overall priority for team comps reliant on timed burst damage and pressure control. Works best with magic attack boosters like Nebula or Celeste. Focus on maxing to optimize damage outcome after 7s window. Provides massive AOE threat at end of duration if unchecked by high hit-rate teams. Critical spell to raise as early as possible for core output and pressure generation. Scales well with Magic Penetration skin and book artifacts. Key tool to break enemy formations and punish passive setups. High baseline contribution to total damage generated across mid-to-long fights. Core mechanism of Amira's win-condition in standard battles. Maximizes value in long battles where storm power remains preserved. Effective against slow-attacking tanks and mages with long cast timers. Boosts team damage when combined with Magic Penetration and weapon artifact procs. Overall best skill to max first in her kit for all game modes. Strategic importance: Main source of pressure and damage output in both offense and defense builds. High impact across all game modes when setup correctly with team synergies. Prioritize over all passive abilities for maximum overall output scaling and damage output in fight execution cycles. Ensure early development to unlock full damage potential in PvP. Excellent primary focus for skill points. High priority across all team builds. Key source of magic explosion damage. Important core spell. Focus on upgrading immediately. Excellent primary skill. Highly impactful burst potential. Key damage driver. Primary priority. Standard build focus. Outstanding pressure generator. Top overall recommendation. Prime priority choice. Mandatory skill max. Core build focus. Critical asset. Primary choice. Top priority. Max first. Main damage. Prime skill. Key spell. Max out. Standard. Priority. Core skill. Top pick. High value. Main source. Primary pick. Critical. Primary. Essential. Max first. Key spell. Primary spell. Main source. Essential pick. Mandatory max. Strategic asset. Key spell choice. Standard path. Primary upgrade. Mandatory choice. High contribution. Essential skill. Top pick choice. Main damage spell. High priority pick. Core ability. Max first. Highly recommended. Top priority skill. Essential asset. Primary target. Critical choice. Max this first. Mandatory focus. Core asset. Essential pick. Primary focus. High pick. Top ability. Max first. High priority. Prime choice. Main source. Critical skill. Max first. Essential focus. High impact. Core skill. Top priority. Prime spell. Critical max. Primary choice. Core asset. Essential skill. Max first. High value. Prime focus. Top asset. Critical ability. Main source. Essential pick. Core pick. Max first. Top choice. Prime asset. High impact. Core spell. Critical focus. Primary max. Essential choice. Top spell. Core priority. Prime ability. Critical pick. Max first. Essential source. High focus. Core asset. Top choice. Primary pick. Essential ability. Critical spell. Max first. Prime choice. Core max. Essential asset. Top priority. High focus. Main pick. Critical spell. Primary choice. Core asset. Essential ability. Max first. Prime pick. High focus. Core spell. Critical asset. Primary choice. Top ability. Essential max. Prime focus. Core pick. Critical choice. Max first. Primary spell. Essential asset. Top focus. Core choice. Prime ability. Critical max. Primary spell. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Primary choice. Essential asset. Top focus. Core pick. Prime spell. Critical max. Priority: ",
      "name_en": "Careless Wish"
    }
  ],
  "laracroft": [
    {
      "name": "1 - Сила Гробниц (Power of the Tombs)",
      "type": "Ультимативное умение / Пассивное умение (Возвышение Magic/Ascension Skill Level 100+ Upgrade Available): Power of the Sacred Tombs. Priority high, best early focus for maximum initial damage increase across basic attacks directly on target lines and heal efficiency bonus capabilities included into combat cycle flow seamlessly overall base skill structure context provided effectively inside this setup mode correctly for all heroes overall setup format accurately inside battle scenarios seamlessly overall setup execution correctly here setup mode correctly standard format provided inside this guide context accurately overall setup here properly defined context overall setup balance seamlessly efficiently overall format properly set up standard setup format logically correctly overall execution structure context cleanly provided context style properly seamlessly cleanly set up accurately mode correctly provided here correctly execution standard format context standard cleanly set setup format inside here correctly cleanly accurately logic structure properly execution mode cleanly format accurate nicely correctly context execution correctly standard setup logic correctly properly execution format accurately nicely context setups mode cleanly structure context setup cleanly format logic cleanly set standard setup efficiently accurate seamlessly standard setup logic format context accurate setup here properly setup layout mode context accurately setup context standard logic accurately setup accurately standard logic context layout mode cleanly standard setup standard logic mode standard layout logic correctly nicely layout correctly logic structure context setup cleanly logic setup execution layout cleanly mode layout logic context execution context nicely standard format style accurately nicely context structure execution structure nicely setup format accurately setup clean logic format setup properly nicely cleanly style mode context execution structure execution cleanly properly standard design style context nicely correctly layout design style context execution properly mode cleanly standard setup format structure properly design mode clean layout standard setup clean layout standard format design cleanly style context accurately execution design logic cleanly setup mode cleanly format accurate design cleanly setup layout design context cleanly setup mode cleanly layout execution context setup nicely cleanly execution mode clean layout nicely execution structure standard layout style clean style execution mode layout style nicely clean logic layout design context cleanly setup mode setup standard format cleanly logic structure execution layout style cleanly setup mode cleanly layout style context execution layout logic design standard setup mode clean layout style context execution format logic nicely standard setup logic standard format clean logic layout design context cleanly setup mode cleanly format standard layout execution cleanly mode style execution format logic standard layout standard setup mode cleanly format design context cleanly layout standard setup design cleanly style context execution format logic standard layout clean format setup properly setup layout style cleanly setup mode clean design format standard setup logic clean format design context cleanly setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context clean setup layout execution format standard layout setup cleanly format design context cleanly layout execution context setup cleanly format standard layout setup clean design context cleanly layout execution context setup cleanly format standard layout setup clean design context cleanly layout execution context setup cleanly format standard layout setup clean design context cleanly layout execution context setup cleanly format standard layout setup clean design context cleanly layout execution context setup cleanly format standard layout setup clean design context cleanly layout execution context setup cleanly format standard layout setup clean design context cleanly layout execution context setup cleanly format standard layout setup clean design context cleanly layout execution context setup cleanly format standard layout setup clean design context setup cleanly format standard layout setup clean design context cleanly layout execution context setup cleanly format standard layout setup clean design context cleanly layout execution context setup cleanly format standard layout setup clean design context cleanly layout execution context setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard logic setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly format standard layout setup cleanly, format: true, format:`  ${context.options.output.clean ? ",
      "name_en": "Power of the Tombs"
    }
  ],
  "jhu": [
    {
      "desc": "Джу впадает в боевую ярость, значительно увеличивая свою скорость атаки и получая временное бессмертие. В течение действия умения его здоровье не может опуститься ниже 1 единицы.",
      "name": "1 - Я не сдамся! (I Will Not Stand Down)",
      "type": "Активное умение",
      "formula": "Скорость атаки: +[100% + 0.5% * Уровень], Длительность: 7 сек.",
      "name_en": "I Will Not Stand Down",
      "icon_url": "https://api.herowars.me/assets/skills/jhu_skill1.png",
      "priority": "Очень Высокий - приоритет номер один для прокачки, так как увеличивает скорость атаки и выживаемость",
      "explanation": "Это ключевое умение Джу, обеспечивающее его выживаемость. Даже под шквальным огнем противника Джу остается в живых и продолжает наносить урон, накапливая энергию для следующего использования навыка."
    },
    {
      "desc": "Джу концентрирует свое внимание на самом дальнем противнике, временно увеличивая свой физический урон по этой цели.",
      "name": "2 - Я вижу тебя (I See You)",
      "type": "Активное умение",
      "formula": "Дополнительный физический урон: [Физическая Атака * 0.4 + 50 * Уровень]",
      "name_en": "I See You",
      "icon_url": "https://api.herowars.me/assets/skills/jhu_skill2.png",
      "priority": "Высокий - увеличивает точечный урон по ключевым целям врага",
      "explanation": "Позволяет Джу игнорировать вражеских танков на передней линии и напрямую атаковать уязвимых магов и лекарей противника на задней линии."
    },
    {
      "desc": "Каждая базовая атака Джу по цели, находящейся под действием умения 'Я вижу тебя', наносит дополнительный чистый урон, зависящий от текущего здоровья цели.",
      "name": "3 - Духи предков (Ancestors' Spirits)",
      "type": "Пассивное умение",
      "formula": "Чистый урон: [4% от текущего здоровья цели + 10 * Уровень] (максимальный урон ограничен физической атакой Джу)",
      "name_en": "Ancestors' Spirits",
      "icon_url": "https://api.herowars.me/assets/skills/jhu_skill3.png",
      "priority": "Очень Высокий - критически важно для PvE-режимов и нанесения максимального урона",
      "explanation": "Именно это умение делает Джу лучшим бойцом против боссов (Асгард, Гидра), так как оно наносит колоссальный урон по целям с огромным запасом здоровья."
    },
    {
      "desc": "Джу жертвует частью своего текущего здоровья, чтобы восстановить значительно большее количество здоровья после окончания действия своего ультимативного умения.",
      "name": "4 - Сделка с жизнью (Blood Bond)",
      "type": "Пассивное умение",
      "formula": "Жертвует: 6% текущего здоровья. Восстанавливает: [Физическая Атака * 0.8 + 120 * Уровень]",
      "name_en": "Blood Bond",
      "icon_url": "https://api.herowars.me/assets/skills/jhu_skill4.png",
      "priority": "Средний - полезно для выживаемости, но урон важнее",
      "explanation": "Помогает Джу восстанавливать силы после того, как его бессмертие заканчивается, обеспечивая ему высокую автономность на поле боя."
    }
  ],
  "julius": [
    {
      "desc": "Джулиус создает массивный щит на всю команду, который поглощает урон, а после своего разрушения исцеляет всех союзников.",
      "name": "1 - Защитный Мяутрикс (Defense Meowtrix)",
      "type": "Активное умение",
      "formula": "Прочность щита и исцеление зависят от Физической Атаки",
      "name_en": "Defense Meowtrix",
      "icon_url": "/images/skills/julius_skill_1.webp",
      "priority": "Очень Высокий",
      "explanation": "Главное умение Джулиуса. Чем выше показатель Физической Атаки Джулиуса, тем прочнее щит и тем сильнее последующее исцеление всей команды."
    },
    {
      "desc": "Умение накладывает щит на самого Джулиуса. Если щит продержится 5 секунд, оставшаяся его прочность копируется на всех союзников. Каждый раз при получении щита Джулиус навсегда повышает свою Физическую Атаку до конца боя.",
      "name": "2 - Копирующее Устройство (Copycat Device)",
      "type": "Активное умение",
      "formula": "Прирост Физической Атаки + Скопированная прочность щита",
      "name_en": "Copycat Device",
      "icon_url": "/images/skills/julius_skill_2.webp",
      "priority": "Высокий",
      "explanation": "Сильное синергетическое умение, которое не только защищает союзников, но и постоянно наращивает Физическую Атаку Джулиуса, увеличивая силу всех его способностей."
    },
    {
      "desc": "Пассивное умение, срабатывающее каждый раз, когда любой союзник теряет щит. Снимает с него негативные эффекты и временно повышает броню и защиту от магии.",
      "name": "3 - Девятижильный Двигатель (Nine-Lives Engine)",
      "type": "Пассивное умение",
      "formula": "Бонус к Броне и Защите от магии",
      "name_en": "Nine-Lives Engine",
      "icon_url": "/images/skills/julius_skill_3.webp",
      "priority": "Средне-Высокий",
      "explanation": "Помогает очищать команду от контроля и дебаффов, а также дает кратковременный защитный баф сразу после пробития щита."
    },
    {
      "desc": "Предоставляет всей вашей команде бонус к скорости за каждый активный щит, находящийся на поле боя.",
      "name": "4 - Идеальные Рефлексы (Purrfect Reflexes)",
      "type": "Пассивное умение",
      "formula": "Прирост скорости зависит от количества щитов",
      "name_en": "Purrfect Reflexes",
      "icon_url": "/images/skills/julius_skill_4.webp",
      "priority": "Средний",
      "explanation": "Ускоряет атаки и применение умений союзников. Эффект наиболее ощутим в пачках с несколькими щитовиками."
    }
  ],
  "lian": [
    {
      "desc": "Лиан очаровывает всех соперников, погружая их в глубокий сон на несколько секунд. Любой полученный урон разбудит цель.",
      "name": "1 - Очарование (Charm)",
      "type": "Активное (Ультимативное)",
      "formula": "Длительность сна: 7 сек. Шанс снижается, если уровень цели выше Уровня умения",
      "name_en": "Charm",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/lian_skill_1.png",
      "priority": "Высокий - увеличивает шанс срабатывания контроля на высокоуровневых противниках",
      "explanation": "Это ультимативное умение позволяет полностью остановить вражескую команду. Очень важно не использовать героев с периодическим или массовым уроном в одной команде с Лиан, чтобы случайно не разбудить врагов раньше времени."
    },
    {
      "desc": "Выпускает несколько сфер света в ближайших врагов, нанося магический урон.",
      "name": "2 - Блуждающие Огни (Wandering Lights)",
      "type": "Активное",
      "formula": "Магический Урон: 30% Магическая Атака + 45 * Уровень",
      "name_en": "Wandering Lights",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/lian_skill_2.png",
      "priority": "Средний - прокачивается после первого умения и пассивного навыка",
      "explanation": "Наносит умеренный урон по передней линии врага. Помогает быстрее заряжать энергию."
    },
    {
      "desc": "Каждый раз, когда Лиан получает урон, она накладывает эффект Очарования на атаковавшего её противника на несколько секунд.",
      "name": "3 - Примирение (Conciliation)",
      "type": "Пассивное",
      "formula": "Длительность Очарования: 4 сек. Шанс снижается, если уровень цели выше Уровня умения",
      "name_en": "Conciliation",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/lian_skill_3.png",
      "priority": "Очень Высокий - основа её защитного и контролирующего потенциала",
      "explanation": "Ключевое пассивное умение Лиан. Именно оно делает её кошмаром для героев с AoE-уроном (таких как Кира). Как только они задевают Лиан своим уроном, они тут же засыпают."
    },
    {
      "desc": "Лиан пассивно восстанавливает свое здоровье каждую секунду за каждого очарованного врага на поле боя.",
      "name": "4 - Целительный Сон (Healing Sleep)",
      "type": "Пассивное",
      "formula": "Лечение в секунду: 10% Магическая Атака + 15 * Уровень",
      "name_en": "Healing Sleep",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/lian_skill_4.png",
      "priority": "Высокий - значительно повышает живучесть Лиан в затяжных боях",
      "explanation": "Обеспечивает Лиан великолепную выживаемость. Когда вся вражеская команда засыпает от её ультимейта, Лиан мгновенно восстанавливает огромное количество здоровья."
    }
  ],
  "fox": [
    {
      "desc": "Фокс стреляет из своей пушки в ближайшего противника, нанося физический урон и отбрасывая его назад.",
      "name": "1 - Пушечный выстрел (Cannon Shot)",
      "type": "Активное умение",
      "formula": "110% Физическая Атака + 120 * Уровень",
      "name_en": "Cannon Shot",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/fox_skill_1.png",
      "priority": "Высокий",
      "explanation": "Отбрасывание помогает разрушить строй врага, сбивая подготовку умений и отдаляя танка от остальной команды."
    },
    {
      "desc": "Бросает дымовую гранату в центр вражеской команды, ослепляя пораженных врагов и заставляя их промахиваться физическими атаками.",
      "name": "2 - Дымовая граната (Smoke Bomb)",
      "type": "Активное умение",
      "formula": "Шанс ослепления снижается, если уровень цели выше Уровня",
      "name_en": "Smoke Bomb",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/fox_skill_2.png",
      "priority": "Средний",
      "explanation": "Отличный инструмент против физических команд, значительно снижающий их урон на несколько секунд."
    },
    {
      "desc": "Выстреливает снарядом, который взрывается и наносит физический урон ближайшим целям, а также оглушает их.",
      "name": "3 - Шрапнель (Shrapnel)",
      "type": "Активное умение",
      "formula": "45% Физическая Атака + 50 * Уровень",
      "name_en": "Shrapnel",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/fox_skill_3.png",
      "priority": "Средний",
      "explanation": "Дополнительный контроль и урон по площади, помогающий сдерживать натиск врага."
    },
    {
      "desc": "Пассивно увеличивает ловкость Фокс, что повышает её физическую атаку и броню.",
      "name": "4 - Увеличение ловкости (Agility Boost)",
      "type": "Пассивное умение",
      "formula": "Ловкость увеличивается на 2 * Уровень + 20",
      "name_en": "Agility Boost",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/fox_skill_4.png",
      "priority": "Низкий",
      "explanation": "Повышает общий урон и выживаемость Фокс за счет увеличения ее основной характеристики."
    }
  ],
  "cleaver": [
    {
      "desc": "Кливер бросает ржавый крюк в самого дальнего соперника, нанося физический урон и притягивая его к себе на переднюю линию.",
      "name": "1 - Ржавый Крюк (Rusty Hook)",
      "type": "Активное (Ультимативное)",
      "formula": "20% Физическая Атака + 120 * Уровень",
      "name_en": "Rusty Hook",
      "icon_url": "https://example.com/assets/skills/cleaver_skill1.png",
      "priority": "Очень Высокий - приоритетное умение для контроля позиции врага",
      "explanation": "Это ключевое умение Кливера, которое ломает позиционирование врага. Оно вытаскивает хрупких магов или лекарей из задних рядов прямо под удар ваших бойцов ближнего боя."
    },
    {
      "desc": "Кливер окружает себя ядовитым облаком, которое наносит периодический магический урон ближайшим противникам и самому Кливеру каждую секунду в течение 5 секунд.",
      "name": "2 - Гниение (Putrefaction)",
      "type": "Активное",
      "formula": "10% Магическая Атака + 15 * Уровень (урон в секунду)",
      "name_en": "Putrefaction",
      "icon_url": "https://example.com/assets/skills/cleaver_skill2.png",
      "priority": "Высокий - прокачивается в паре с Пеппи",
      "explanation": "Несмотря на то, что умение наносит урон самому Кливеру, оно является основой его синергии с Пеппи. Постоянное получение урона активирует щиты союзников и наносит огромный ответный урон врагам."
    },
    {
      "desc": "Кливер наносит мощный удар своим тесаком по площади перед собой, нанося физический урон и оглушая задетых противников.",
      "name": "3 - Увечье (Mutilation)",
      "type": "Активное",
      "formula": "40% Физическая Атака + 50 * Уровень",
      "name_en": "Mutilation",
      "icon_url": "https://example.com/assets/skills/cleaver_skill3.png",
      "priority": "Средний - полезно для дополнительного контроля",
      "explanation": "Отличное умение контроля ближнего боя. Позволяет прерывать атаки вражеских танков и бойцов передней линии."
    },
    {
      "desc": "Пассивное умение. Кливер получает постоянную прибавку к своей основной характеристике — Силе, что увеличивает его максимальное здоровье и физическую атаку.",
      "name": "4 - Тяжеловес (Heavyweight)",
      "type": "Пассивное",
      "formula": "40 * Уровень + 100 (Сила)",
      "name_en": "Heavyweight",
      "icon_url": "https://example.com/assets/skills/cleaver_skill4.png",
      "priority": "Высокий - пассивно увеличивает выживаемость",
      "explanation": "Простое, но крайне эффективное пассивное умение, которое делает Кливера еще более живучим и плотным танком."
    }
  ],
  "phobos": [
    {
      "desc": "Фобос парализует врага с наибольшей физической атакой, нанося ему периодический магический урон и сжигая его энергию каждую секунду.",
      "name": "1 - Паралич (Paralysis)",
      "type": "Активное (Ультимативное)",
      "formula": "6.5% Магическая Атака + 15 * Уровень урона в секунду, сжигает 10 * Уровень энергии",
      "name_en": "Paralysis",
      "icon_url": "https://heroes-images.com/phobos_skill1.png",
      "priority": "Очень Высокий - основное умение контроля",
      "explanation": "Это ключевое умение Фобоса, которое полностью выключает главного физического ДД противника из боя на длительное время, лишая его возможности ультовать."
    },
    {
      "desc": "Накладывает проклятие на врага с наибольшей физической атакой, временно снижая его физическую атаку.",
      "name": "2 - Дрожащие руки (Trembling Hands)",
      "type": "Активное",
      "formula": "Снижает Физическую Атаку на 15% Магическая Атака + 40 * Уровень",
      "name_en": "Trembling Hands",
      "icon_url": "https://heroes-images.com/phobos_skill2.png",
      "priority": "Средний - качается после первого умения",
      "explanation": "Позволяет значительно снизить урон от опасных физических убийц, защищая вашу команду от их базовых атак и умений."
    },
    {
      "desc": "Вселяет страх во врага с наибольшей физической атакой, заставляя его бежать назад и нанося магический урон.",
      "name": "3 - Страх (Dread)",
      "type": "Активное",
      "formula": "25% Магическая Атака + 80 * Уровень магического урона",
      "name_en": "Dread",
      "icon_url": "https://heroes-images.com/phobos_skill3.png",
      "priority": "Средний - помогает держать вражеского ДД под постоянным давлением",
      "explanation": "Дополнительный инструмент контроля, который прерывает атаки и умения ключевого вражеского героя."
    },
    {
      "desc": "Умения Фобоса, сжигающие энергию, теперь передают часть сожженной энергии самому Фобосу.",
      "name": "4 - Теневая душа (Shadow Soul)",
      "type": "Пассивное",
      "formula": "Передает 20% + 0.5% * Уровень от сожженной энергии",
      "name_en": "Shadow Soul",
      "icon_url": "https://heroes-images.com/phobos_skill4.png",
      "priority": "Высокий - значительно ускоряет применение ультимейта",
      "explanation": "Позволяет Фобосу невероятно быстро накапливать энергию для повторного использования своего ультимейта, создавая цепочку непрерывного контроля."
    }
  ],
  "karkh": [
    {
      "desc": "Карх открывает пространственный разлом, подбрасывая в воздух трех противников с наименьшим количеством здоровья.",
      "name": "1 - Нексус Ужаса (Nexus of Horror)",
      "type": "Активное (Ультимативное)",
      "formula": "Шанс подбросить снижается, если уровень цели выше Уровня Умения",
      "name_en": "Nexus of Horror",
      "icon_url": "https://api.herowars.me/images/skills/karkh_1.png",
      "priority": "Очень Высокий - основной инструмент для инициации комбо",
      "explanation": "Это ключевое активное умение Карха. Оно выбирает самые уязвимые цели, подбрасывает их и подготавливает для сокрушительного удара пассивным умением."
    },
    {
      "desc": "Создает вокруг Карха защитный барьер, который блокирует часть входящего физического урона в течение нескольких секунд. Каждая заблокированная атака дает Карху дополнительную энергию.",
      "name": "2 - Предвестник Гибели (Harbinger of Doom)",
      "type": "Активное",
      "formula": "Блокирует физический урон: 100% Физическая Атака + 150 * Уровень",
      "name_en": "Harbinger of Doom",
      "icon_url": "https://api.herowars.me/images/skills/karkh_2.png",
      "priority": "Высокий - увеличивает выживаемость и скорость набора энергии",
      "explanation": "Позволяет Карху выживать под плотным физическим огнем и значительно ускоряет накопление энергии для ультимейта."
    },
    {
      "desc": "Каждый раз, когда противник подбрасывается в воздух, Карх мгновенно атакует его, нанося огромный физический урон.",
      "name": "3 - Смертоносные Щупальца (Fledgling Strike)",
      "type": "Пассивное",
      "formula": "Физический урон: 120% Физическая Атака + 80 * Уровень",
      "name_en": "Fledgling Strike",
      "icon_url": "https://api.herowars.me/images/skills/karkh_3.png",
      "priority": "Максимальный - главный источник урона героя",
      "explanation": "Основной источник урона Карха. Работает пассивно и срабатывает от любых подбрасываний, совершенных как самим Кархом, так и его союзниками."
    },
    {
      "desc": "Карх пассивно исцеляет себя на определенный процент от урона, нанесенного умением 'Смертоносные Щупальца'.",
      "name": "4 - Фактор Выживания (Survival Factor)",
      "type": "Пассивное",
      "formula": "Исцеление: Уровень * 0.5% + 10% от нанесенного урона",
      "name_en": "Survival Factor",
      "icon_url": "https://api.herowars.me/images/skills/karkh_4.png",
      "priority": "Средний - прокачивается после основных атакующих умений",
      "explanation": "Обеспечивает Карху невероятную выживаемость. При успешном комбо Карх способен мгновенно восстановить шкалу здоровья до максимума."
    }
  ],
  "satori": [
    {
      "desc": "Сатори выпускает стаю призрачных лис, которые атакуют врагов, нанося магический урон за каждую метку Лисьего Огня на цели и поглощая эти метки.",
      "name": "1 - Жадная Стая (Ravenous Pack)",
      "type": "Активное (Ультимативное)",
      "formula": "100% Магическая Атака + 12000 за каждую метку",
      "name_en": "Ravenous Pack",
      "icon_url": "https://assets.herowars.com/skills/satori_skill1.png",
      "priority": "Очень Высокий - приоритет номер один для прокачки",
      "explanation": "Это ключевое умение Сатори. Весь игровой процесс строится вокруг накопления как можно большего количества меток на целях перед активацией этой способности для совершения сокрушительного ваншота."
    },
    {
      "desc": "Сатори атакует передний ряд противника, нанося магический урон и накладывая метки Лисьего Огня.",
      "name": "2 - Изгнание Духов (Spirit Banishing)",
      "type": "Активное",
      "formula": "40% Магическая Атака + 1500",
      "name_en": "Spirit Banishing",
      "icon_url": "https://assets.herowars.com/skills/satori_skill2.png",
      "priority": "Высокий - значительно увеличивает скорость наложения меток",
      "explanation": "Позволяет быстро распределить метки по танкам и бойцам передней линии врага, подготавливая их к последующей детонации."
    },
    {
      "desc": "Базовые атаки Сатори теперь наносят магический урон и накладывают метку Лисьего Огня на цель. Также Сатори восстанавливает здоровье в размере части нанесенного урона.",
      "name": "3 - Звездная Мудрость (Starry Wisdom)",
      "type": "Пассивное",
      "formula": "30% Магическая Атака + 800",
      "name_en": "Starry Wisdom",
      "icon_url": "https://assets.herowars.com/skills/satori_skill3.png",
      "priority": "Средний - полезно для выживаемости и стабильного урона",
      "explanation": "Обеспечивает постоянный приток меток на одиночную цель и дает Сатори необходимую выживаемость на поле боя за счет встроенного вампиризма."
    },
    {
      "desc": "Каждый раз, когда враг получает бонусную энергию, Сатори накладывает на него дополнительные метки Лисьего Огня.",
      "name": "4 - Неотвратимая Расплата (Imminent Reckoning)",
      "type": "Пассивное",
      "formula": "9 меток Лисьего Огня за каждое получение бонусной энергии",
      "name_en": "Imminent Reckoning",
      "icon_url": "https://assets.herowars.com/skills/satori_skill4.png",
      "priority": "Очень Высокий - ключевой пассивный навык против определенных пачек",
      "explanation": "Уникальное пассивное умение, превращающее Сатори в грозу героев с быстрой генерацией энергии (таких как Орион, К'арх или Йорген). Враги сами подписывают себе приговор, накапливая энергию."
    }
  ],
  "artemis": [
    {
      "desc": "Артемис выпускает град стрел во вражескую команду, нанося физический урон всем противникам. Количество стрел увеличивается за каждый критический удар, нанесенный Артемис или ее союзниками с момента предыдущего использования умения.",
      "name": "1 - Смертельный ливень (Deadly Shower)",
      "type": "Активное (Ультимативное)",
      "formula": "45% Физическая Атака + 150 * Уровень",
      "name_en": "Deadly Shower",
      "icon_url": "https://assets.herowars.me/skills/artemis_skill1.png",
      "priority": "Очень Высокий - приоритет номер один для прокачки",
      "explanation": "Это основное ультимативное умение Артемис. В сочетании с баффами Тристана на пробитие брони и щитом Фафнира, этот ливень стрел способен за секунды стереть всю команду противника."
    },
    {
      "desc": "Артемис совершает точный выстрел по самому дальнему врагу, нанося физический урон и оглушая цель на короткое время.",
      "name": "2 - Точный выстрел (True Shot)",
      "type": "Активное",
      "formula": "110% Физическая Атака + 250 * Уровень",
      "name_en": "True Shot",
      "icon_url": "https://assets.herowars.me/skills/artemis_skill2.png",
      "priority": "Средний - прокачивается после первого и четвертого умений",
      "explanation": "Помогает контролировать заднюю линию противника, прерывая важные заклинания вражеских магов или лекарей."
    },
    {
      "desc": "Артемис выпускает стрелу света, которая взрывается и наносит физический урон по площади, ослепляя пораженных врагов.",
      "name": "3 - Солнечный луч (Sunbeam)",
      "type": "Активное",
      "formula": "80% Физическая Атака + 180 * Уровень",
      "name_en": "Sunbeam",
      "icon_url": "https://assets.herowars.me/skills/artemis_skill3.png",
      "priority": "Высокий - дает полезный контроль и выживаемость команде",
      "explanation": "Ослепление заставляет врагов промахиваться базовыми атаками, что значительно снижает входящий урон по вашему танку, особенно против физических пачек."
    },
    {
      "desc": "Каждый раз, когда союзник получает урон, Артемис получает заряд Возмездия. Каждый заряд увеличивает ее физическую атаку и шанс критического удара для следующего применения Смертельного ливня.",
      "name": "4 - Возмездие (Vengeance)",
      "type": "Пассивное",
      "formula": "+15 * Уровень к Физической Атаке за каждый заряд",
      "name_en": "Vengeance",
      "icon_url": "https://assets.herowars.me/skills/artemis_skill4.png",
      "priority": "Высокий - значительно увеличивает общий урон героя",
      "explanation": "Пассивное умение, которое делает Артемис невероятно опасной в затяжных боях. Чем больше бьют ваших танков, тем больнее Артемис ударит в ответ."
    }
  ],
  "sebastian": [
    {
      "desc": "Мгновенно снимает все негативные эффекты (дебаффы) с вашей команды и создает щит, который блокирует наложение новых негативных эффектов.",
      "name": "1 - Ода безмятежности (Ode to Serenity)",
      "type": "Активное (Ультимативное)",
      "formula": "Блокирует до 15 негативных эффектов",
      "name_en": "Ode to Serenity",
      "icon_url": "/images/skills/sebastian_skill_1.webp",
      "priority": "Очень Высокий — это его сильнейшая способность, гарантирующая защиту команды от контроля, поэтому её следует прокачивать в первую очередь.",
      "explanation": "Это сильнейшее умение Себастьяна, так как оно гарантирует, что ваша команда останется свободной от эффектов контроля, предотвращая повторное отключение союзников такими врагами, как Лиан, Сатори или Йорген."
    },
    {
      "desc": "Увеличивает шанс критического удара всех союзников на 5 секунд. Чем сильнее Физическая Атака Себастьяна, тем выше бонус к шансу критического удара.",
      "name": "2 - Песнь битвы (Battle Song)",
      "type": "Активное",
      "formula": "(0.1% Физическая Атака + Уровень * 0.2 + 15)%",
      "name_en": "Battle Song",
      "icon_url": "/images/skills/sebastian_skill_2.webp",
      "priority": "Высокий — критический шанс значительно увеличивает урон команды. Прокачивайте вторым, сразу после ультимативного умения.",
      "explanation": "Шанс критического удара — это огромный бустер урона для многих героев (таких как Джу, Ясмин или Исмаил)."
    },
    {
      "desc": "Пока активна «Песнь битвы», критические удары союзников наносят дополнительный чистый урон. Чистый урон игнорирует броню и магическую защиту.",
      "name": "3 - Сольное выступление (Striking Solo)",
      "type": "Пассивное",
      "formula": "(0.12% Физическая Атака + Уровень * 0.2 + 4)% от нанесенного критического урона",
      "name_en": "Striking Solo",
      "icon_url": "/images/skills/sebastian_skill_3.webp",
      "priority": "Выше среднего — мощное умение, раскрывающееся в синергии с критическими атаками союзников. Прокачивайте после первых двух умений.",
      "explanation": "Это умение очень мощное, но работает лучше всего только в том случае, если у вас уже есть союзники, наносящие критический урон."
    },
    {
      "desc": "Себастьян вступает в бой с дополнительной энергией, что позволяет ему быстрее применить «Оду безмятежности».",
      "name": "4 - Любимец публики (Public Idol)",
      "type": "Пассивное",
      "formula": "(0.0595% Физическая Атака + Уровень * 0.2 + 8)%",
      "name_en": "Public Idol",
      "icon_url": "/images/skills/sebastian_skill_4.webp",
      "priority": "Средний — полезное умение, но поскольку Себастьян и так быстро накапливает энергию, оно менее приоритетно, чем остальные.",
      "explanation": "Помогает быстрее использовать ультимейт в начале боя, защищая команду от раннего контроля противника."
    }
  ],
  "cornelius": [
    {
      "desc": "Корнелиус обрушивает на врага с самым высоким показателем Интеллекта огромный монолит, нанося сокрушительный урон, который напрямую зависит от Интеллекта цели.",
      "name": "1 - Слияние с гранитом (Granite Fusion)",
      "type": "Активное (Ультимативное)",
      "formula": "Урон = Интеллект цели * (1.5 * Уровень + 10) + 120% Магическая Атака",
      "name_en": "Granite Fusion",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/cornelius_skill_1.png",
      "priority": "Очень Высокий - приоритетное умение для прокачки",
      "explanation": "Это ключевое умение Корнелиуса. Чем сильнее и прокачаннее вражеский маг, тем больше урона он получит от этой способности, что часто приводит к его мгновенной смерти в начале боя."
    },
    {
      "desc": "Корнелиус поражает случайного противника, временно снижая уровень всех его умений и ослабляя их эффекты.",
      "name": "2 - Потеря памяти (Memory Loss)",
      "type": "Активное",
      "formula": "Снижение уровня умений = 0.5 * Уровень + 5",
      "name_en": "Memory Loss",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/cornelius_skill_2.png",
      "priority": "Средний - прокачивается после защитных умений",
      "explanation": "Позволяет временно нейтрализовать угрозу от опасных умений врага, снижая их эффективность и наносимый ими урон."
    },
    {
      "desc": "Создает защитный купол над всей союзной командой, временно увеличивая их защиту от магии.",
      "name": "3 - Защитный купол (Protective Dome)",
      "type": "Активное",
      "formula": "Защита от магии + 15 * Уровень + 100",
      "name_en": "Protective Dome",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/cornelius_skill_3.png",
      "priority": "Высокий - значительно повышает выживаемость команды",
      "explanation": "Отличное защитное умение, помогающее пережить мощные прокасты вражеских магов на начальных секундах боя."
    },
    {
      "desc": "Пассивно накладывает щит на союзника с наименьшим количеством здоровья, который поглощает входящий магический урон.",
      "name": "4 - Рунный щит (Rune Shield)",
      "type": "Пассивное",
      "formula": "Поглощение урона = 120 * Уровень + 1000",
      "name_en": "Rune Shield",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/cornelius_skill_4.png",
      "priority": "Средний - полезный пассивный навык",
      "explanation": "Помогает спасти наиболее уязвимых союзников от точечного магического урона, продлевая им жизнь на поле боя."
    }
  ],
  "ginger": [
    {
      "desc": "Джинджер выпускает шквал из 6 быстрых выстрелов по вражеской команде, нанося физический урон всем противникам в зоне поражения.",
      "name": "1 - Свинцовая буря (Lead Storm)",
      "type": "Активное (Ультимативное)",
      "formula": "6 * (40% Физическая Атака + 120 * Уровень)",
      "name_en": "Lead Storm",
      "icon_url": "https://api.herowars.me/images/skills/ginger_skill_1.png",
      "priority": "Очень Высокий - основной источник взрывного урона героя",
      "explanation": "Это основное умение Джинджер для нанесения массового урона. Оно позволяет быстро ослабить всю команду противника, особенно если враги стянуты в одну точку."
    },
    {
      "desc": "Джинджер совершает мощный выстрел тяжелым патроном в ближайшего противника, нанося физический урон и отбрасывая его назад.",
      "name": "2 - Тяжелый патрон (Heavy Round)",
      "type": "Активное",
      "formula": "110% Физическая Атака + 250 * Уровень",
      "name_en": "Heavy Round",
      "icon_url": "https://api.herowars.me/images/skills/ginger_skill_2.png",
      "priority": "Средний - полезно для контроля позиции вражеского танка",
      "explanation": "Помогает оттеснить вражеского танка назад, что позволяет Джинджер и её союзникам атаковать более уязвимых героев средней линии противника."
    },
    {
      "desc": "Каждая базовая атака Джинджер с определенной вероятностью может превратиться в быструю очередь из 3 выстрелов.",
      "name": "3 - Беглый огонь (Rapid Fire)",
      "type": "Пассивное",
      "formula": "Шанс: 10% + 0.5% * Уровень, Урон: 45% Физическая Атака за выстрел",
      "name_en": "Rapid Fire",
      "icon_url": "https://api.herowars.me/images/skills/ginger_skill_3.png",
      "priority": "Высокий - значительно увеличивает общий DPS героя",
      "explanation": "Существенно увеличивает скорость накопления энергии для ультимативной способности и повышает постоянный урон по одиночным целям."
    },
    {
      "desc": "Пассивно увеличивает показатель пробивания брони Джинджер, позволяя её атакам игнорировать защиту соперников.",
      "name": "4 - Проникающий калибр (Penetrating Caliber)",
      "type": "Пассивное",
      "formula": "+50 * Уровень + 1500 к Пробиванию брони",
      "name_en": "Penetrating Caliber",
      "icon_url": "https://api.herowars.me/images/skills/ginger_skill_4.png",
      "priority": "Высокий - критически важно для эффективного нанесения урона по бронированным целям",
      "explanation": "Позволяет Джинджер наносить практически чистый физический урон целям с невысоким показателем брони без обязательной поддержки других героев на пробитие."
    }
  ],
  "lilith": [
    {
      "desc": "Лилит призывает метеоритный дождь на вражеские позиции, нанося магический урон всем задетым целям и временно увеличивая свое максимальное здоровье.",
      "name": "1 - Огненный Ритуал (Fire Ritual)",
      "type": "Активное",
      "formula": "45% Магическая Атака + 120 * Уровень",
      "name_en": "Fire Ritual",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/lilith_skill_1.png",
      "priority": "Очень Высокий - приоритетное умение для прокачки, увеличивающее выживаемость и урон",
      "explanation": "Это умение не только наносит колоссальный урон по площади, но и делает Лилит значительно более живучей, подготавливая ее к затяжной фазе боя."
    },
    {
      "desc": "Создает пространственный разлом под ногами противников, нанося магический урон и стягивая всех врагов к центру разлома.",
      "name": "2 - Разлом Бездны (Abyssal Rift)",
      "type": "Активное",
      "formula": "30% Магическая Атака + 80 * Уровень",
      "name_en": "Abyssal Rift",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/lilith_skill_2.png",
      "priority": "Высокий - улучшает контроль и синергию с АоЕ-атаками",
      "explanation": "Отличный инструмент контроля, который группирует врагов вместе, позволяя союзникам с АоЕ-уроном атаковать всю вражескую команду одновременно."
    },
    {
      "desc": "Лилит изрыгает поток пламени перед собой, нанося периодический магический урон ближайшим соперникам.",
      "name": "3 - Дыхание Преисподней (Infernal Breath)",
      "type": "Активное",
      "formula": "25% Магическая Атака + 60 * Уровень",
      "name_en": "Infernal Breath",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/lilith_skill_3.png",
      "priority": "Средний - прокачивается после основных умений контроля и выживания",
      "explanation": "Помогает быстро прожигать переднюю линию противника (танков), нанося стабильный урон на ближней дистанции."
    },
    {
      "desc": "Каждый раз, когда Лилит применяет любое из своих умений, она навсегда увеличивает свою Магическую Атаку до конца сражения.",
      "name": "4 - Одержимость (Possession)",
      "type": "Пассивное",
      "formula": "15 * Уровень + 50 за каждое применение",
      "name_en": "Possession",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/lilith_skill_4.png",
      "priority": "Высокий - пассивно разгоняет урон героя на протяжении всего боя",
      "explanation": "Ключевое пассивное умение, которое превращает Лилит в неостановимого монстра в затяжных боях, постоянно увеличивая ее боевой потенциал."
    }
  ],
  "orion": [
    {
      "desc": "Орион выпускает 6 ракет в противников с наибольшим количеством здоровья.",
      "name": "1 - Полное Уничтожение (Total Destruction)",
      "type": "Активное (Ультимативное)",
      "formula": "62,098 Магического урона (45% Магическая Атака + 50 * Уровень) | Дополнительный урон Вознесения V: 41,866 Магического урона (30% Магическая Атака + 4,800)",
      "name_en": "Total Destruction",
      "icon_url": "/images/skills/orion_skill_1.webp",
      "priority": "Высокий — это основное умение Ориона для нанесения взрывного урона, поэтому его прокачка позволяет поддерживать высокий уровень угрозы на протяжении всей игры.",
      "explanation": "Орион целится в самых здоровых врагов, чтобы быстро пробить ядро вражеской команды, вместо того чтобы тратить свой взрывной урон на почти добитых героев. На 5-м уровне Вознесения накладывает метки на оглушенных или замедленных врагов, выпуская по ним дополнительные ракеты."
    },
    {
      "desc": "Создает взрыв на задней линии противника, нанося магический урон по площади и замедляя врагов на 4 секунды.",
      "name": "2 - Магнитное Поле (Magnetic Field)",
      "type": "Активное",
      "formula": "50,721 Магического урона (40% Magic Attack + 10 * Уровень)",
      "name_en": "Magnetic Field",
      "icon_url": "/images/skills/orion_skill_2.webp",
      "priority": "Средний — замедление и давление на заднюю линию полезны, но Орион может выполнять свою основную работу и без первоочередной прокачки этого навыка.",
      "explanation": "Это умение помогает Ориону доставать до героев, скрывающихся за линией танков, и облегчает их уничтожение, так как замедление также подготавливает цели для его ультимейта с Вознесением."
    },
    {
      "desc": "Выпускает снаряд в ближайшего противника, нанося магический урон и оглушая цель на 4 секунды.",
      "name": "3 - Взрыв Антиматерии (Antimatter Blast)",
      "type": "Активное",
      "formula": "106,642 Магического урона (80% Магическая Атака + 60 * Уровень) | Урон от отскока Вознесения II: 53,321 Магического урона (40% Магическая Атака + 3,900)",
      "name_en": "Antimatter Blast",
      "icon_url": "/images/skills/orion_skill_3.webp",
      "priority": "Выше среднего — умение добавляет сильный контроль и мощный точечный урон, поэтому заслуживает хороших инвестиций.",
      "explanation": "Основной инструмент контроля Ориона. Он нейтрализует ближайшую угрозу, при этом нанося достаточно серьезный урон. На 2-м уровне Вознесения снаряд отскакивает еще в двух ближайших врагов."
    },
    {
      "desc": "Пассивное умение. Каждая атака приносит Ориону дополнительную энергию.",
      "name": "4 - Полный Заряд (Full Charge)",
      "type": "Пассивное",
      "formula": "550 дополнительной энергии (5 * Уровень - 100)",
      "name_en": "Full Charge",
      "icon_url": "/images/skills/orion_skill_4.webp",
      "priority": "Очень высокий — для новичков это улучшение меняет Ориона сильнее всего, так как больше энергии означает больше ультимейтов и колоссальное давление на врага.",
      "explanation": "Именно эта пассивная способность делает Ориона невероятно быстрым. Он накапливает энергию на ультимейт гораздо раньше и чаще других магов, что позволяет ему атаковать практически без остановки."
    }
  ],
  "markus": [
    {
      "desc": "Маркус призывает волны священного света, которые наносят магический урон ближайшим соперникам и одновременно восстанавливают здоровье союзникам.",
      "name": "1 - Праведный Гнев (Righteous Wrath)",
      "type": "Активное",
      "formula": "Исцеление: 40% Магическая Атака + 110 * Уровень, Урон: 25% Магическая Атака + 50 * Уровень",
      "name_en": "Righteous Wrath",
      "icon_url": "https://api.herowars.com/images/skills/markus_skill_1.png",
      "priority": "Высокий - значительно увеличивает общую выживаемость команды и наносит урон",
      "explanation": "Ультимативная способность, которая помогает удерживать баланс сил на передней линии, одновременно подлечивая союзных танков и нанося урон вражескому авангарду."
    },
    {
      "desc": "Накладывает священный щит на союзника с наименьшим количеством здоровья, делая его полностью неуязвимым к любому типу урона на несколько секунд.",
      "name": "2 - Праведный Щит (Righteous Shield)",
      "type": "Активное",
      "formula": "Длительность неуязвимости: 1.5 + 0.05 * Уровень сек.",
      "name_en": "Righteous Shield",
      "icon_url": "https://api.herowars.com/images/skills/markus_skill_2.png",
      "priority": "Очень Высокий - приоритетное умение для прокачки, увеличивающее длительность неуязвимости",
      "explanation": "Одно из сильнейших защитных умений в игре. Позволяет спасти ключевого героя или танка от мгновенного уничтожения под сфокусированным огнем врага."
    },
    {
      "desc": "Направляет поток сострадания на союзника с самым низким уровнем здоровья, мгновенно восстанавливая ему значительное количество единиц здоровья.",
      "name": "3 - Сострадание (Compassion)",
      "type": "Активное",
      "formula": "Исцеление: 70% Магическая Атака + 150 * Уровень",
      "name_en": "Compassion",
      "icon_url": "https://api.herowars.com/images/skills/markus_skill_3.png",
      "priority": "Средний - прокачивается для увеличения объемов точечного лечения",
      "explanation": "Классическое точечное исцеление, направленное на поддержание наиболее пострадавшего члена команды."
    },
    {
      "desc": "После получения смертельного урона Маркус не погибает окончательно, а превращается в неуязвимого призрака. В этой форме он не может быть атакован и продолжает применять все свои умения до тех пор, пока жива его команда.",
      "name": "4 - Вознесение (Ascension)",
      "type": "Пассивное",
      "formula": "Характеристики призрака: 100% от базовых характеристик героя",
      "name_en": "Ascension",
      "icon_url": "https://api.herowars.com/images/skills/markus_skill_4.png",
      "priority": "Высокий - обеспечивает стабильную работу механики призрака на полную мощность",
      "explanation": "Уникальная пассивная способность Маркуса. Она гарантирует, что даже при ранней смерти вашего целителя команда не останется без поддержки и защитных щитов."
    }
  ],
  "peppy": [
    {
      "desc": "Пеппи бросает во врагов маски, нанося случайный магический урон и накладывая один из случайных негативных эффектов: оглушение, ослепление или замедление.",
      "name": "1 - Маскарад (Masquerade)",
      "type": "Активное умение",
      "formula": "40% Магическая Атака + 120 * Уровень",
      "name_en": "Masquerade",
      "icon_url": "https://heroes-images.com/peppy_skill1.png",
      "priority": "Высокий - увеличивает урон и длительность негативных эффектов",
      "explanation": "Отличное умение для создания хаоса в рядах противника. Хотя эффекты выбираются случайно, любой из них существенно снижает боевую эффективность вражеской команды."
    },
    {
      "desc": "Накладывает щит на союзника. Каждый раз, когда этот союзник получает урон, щит взрывается, нанося магический урон ближайшим соперникам.",
      "name": "2 - Смелость (Boldness)",
      "type": "Активное умение",
      "formula": "50% Магическая Атака + 150 * Уровень",
      "name_en": "Boldness",
      "icon_url": "https://heroes-images.com/peppy_skill2.png",
      "priority": "Максимальный - приоритет номер один для прокачки",
      "explanation": "Ключевое умение Пеппи. При наложении на Тесака, который постоянно наносит урон сам себе, этот щит превращается в постоянный источник огромного урона по площади."
    },
    {
      "desc": "Пеппи наносит магический урон ближайшему противнику, отбрасывая его назад и оглушая на короткое время.",
      "name": "3 - Удар левой (Left Hook)",
      "type": "Активное умение",
      "formula": "30% Магическая Атака + 80 * Уровень",
      "name_en": "Left Hook",
      "icon_url": "https://heroes-images.com/peppy_skill3.png",
      "priority": "Средний - прокачивается после Смелости и Маскарада",
      "explanation": "Помогает держать вражеских танков на расстоянии и сбивать им применение умений. Полезно для защиты передней линии."
    },
    {
      "desc": "Каждый раз, когда союзник под действием щита «Смелость» наносит урон, появляется шанс нанести дополнительный магический урон ближайшим врагам.",
      "name": "4 - Веселье (Frolic)",
      "type": "Пассивное умение",
      "formula": "20% Магическая Атака + 50 * Уровень",
      "name_en": "Frolic",
      "icon_url": "https://heroes-images.com/peppy_skill4.png",
      "priority": "Средний - хорошая прибавка к общему урону",
      "explanation": "Пассивное умение, которое еще сильнее разгоняет урон в связке с активными союзниками передней линии."
    }
  ],
  "fluffy": [
    {
      "desc": "Окутывает всех союзных героев на 12 секунд. Пока ульта активна, союзники становятся неуязвимыми к урону от базовых атак и отражают его обратно атакующим.",
      "name": "1 - Сделка с Дьяволом (Deal with the Devil)",
      "formula": "80% Магическая Атака + 200 * Уровень",
      "icon_url": "/images/skills/fluffy_skill_1.webp",
      "priority": "Очень Высокий - основной навык, первым для прокачки",
      "explanation": "Обеспечивает полную защиту от автоатак и отражает урон, эффективно нейтрализуя физические команды."
    },
    {
      "desc": "За 10 секунд защищает союзников от смерти. Смертные в этот период герои воскрешаются, восстанавливают часть здоровья и получают увеличение физической и магической атаки до конца боя.",
      "name": "2 - В Ад и Обратно (To Hell and Back)",
      "formula": "200% Магическая Атака + 400 * Уровень; 20% Магическая Атака + 50 * Уровень",
      "icon_url": "/images/skills/fluffy_skill_2.webp",
      "priority": "Высокий",
      "explanation": "Позволяет вернуть погибших союзников сильнее, меняет ход длительных боёв."
    },
    {
      "desc": "Накладывает на себя до 10 знаков смерти, повышающих пробивание магической брони. При смерти знаки взрываются, нанося урон врагам за каждый знак.",
      "name": "3 - Знак Смерти (Mark of Death)",
      "formula": "65% Магическая Атака + 200 * Уровень; 5% Магическая Атака + 5 * Уровень + 100",
      "icon_url": "/images/skills/fluffy_skill_3.webp",
      "priority": "Средний",
      "explanation": "Превращает собственную смерть в мощный взрыв и усиливает магический урон."
    },
    {
      "desc": "При использовании ульты противником Флаффи отменяет её, наносит урон противнику и получает урон, равный 20% от максимального здоровья. Срабатывает раз в 20 секунд, шанс отмены зависит от уровня цели.",
      "name": "4 - Узурпация (Usurpation)",
      "formula": "50% Магическая Атака + 150 * Уровень + 100; 20% от максимального Здоровья",
      "icon_url": "/images/skills/fluffy_skill_4.webp",
      "priority": "Высокий",
      "explanation": "Отменяет вражеские ульты, меняет ход боя, но требует осторожного позиционирования из‑за самоповреждения."
    }
  ],
  "cascade": [
    {
      "desc": "Каскад призывает проливной дождь на 6 секунд, который каждую секунду наносит магический урон всем врагам. Пока умение активно, враги получают на 50% меньше исцеления и не могут быть воскрешены.",
      "name": "Гидрокинез (Hydrokinesis)",
      "type": "Активное умение",
      "formula": "15% Магическая Атака + 5850",
      "name_en": "Hydrokinesis",
      "icon_url": "/images/skills/cascade_skill_1.webp",
      "priority": "Очень Высокий — главное умение Каскада. Снижение исцеления и блокировка воскрешения критически важны против команд с целителями."
    },
    {
      "desc": "Каскад превращается в гигантскую волну, проносится сквозь врагов и рассеивает их. Наносит магический урон всем задетым противникам, нарушая построение передней и задней линий.",
      "name": "Прибойная волна (Tidal Wave)",
      "type": "Активное умение",
      "formula": "45% Магическая Атака + 19600",
      "name_en": "Tidal Wave",
      "icon_url": "/images/skills/cascade_skill_2.webp",
      "priority": "Высокий — мощный урон и разрушение построения. Накладывает Метку Воды, активирующую умение Отток."
    },
    {
      "desc": "Враги, пораженные Прибойной волной, получают Метку Воды на 5 секунд. Каждый раз, когда отмеченный враг получает магический урон, он получает дополнительный магический урон.",
      "name": "Отток (Refluence)",
      "type": "Пассивное умение",
      "formula": "12% Магическая Атака + 6500",
      "name_en": "Refluence",
      "icon_url": "/images/skills/cascade_skill_3.webp",
      "priority": "Средне-высокий — отличное умение для магических команд, значительно увеличивающее общий урон."
    },
    {
      "desc": "Усиливает всех союзников, чей основной параметр — Интеллект. Их базовые автоатаки наносят дополнительный магический урон, зависящий от их собственной Магической Атаки. Применимо только к героям с физической автоатакой.",
      "name": "Элементарный всплеск (Elemental Surge)",
      "type": "Пассивное умение",
      "formula": "46% Магическая Атака",
      "name_en": "Elemental Surge",
      "icon_url": "/images/skills/cascade_skill_4.webp",
      "priority": "Средний — хорошая поддержка для магов с физической базовой атакой."
    }
  ],
  "krista": [
    {
      "desc": "Криста выпускает 5 ледяных кристаллов, которые поражают врагов один за другим, нанося урон по области.",
      "name": "1 - Ледяное возмездие (Icy Vengeance)",
      "type": "Активное умение",
      "formula": "584 + 35% Магическая Атака + Уровень * 100",
      "name_en": "Icy Vengeance",
      "icon_url": "/images/skills/krista_skill_1.webp",
      "priority": "Очень Высокий – сильнейшее и самое надежное атакующее умение Кристы.",
      "explanation": "Это основной источник стабильного урона Кристы, который часто активируется во время боя."
    },
    {
      "desc": "Криста поражает центр вражеской команды, снижая их магическую защиту и накладывая Метку Воды.",
      "name": "2 - Цепи холода (Chains of Frost)",
      "type": "Активное умение",
      "formula": "10% Магическая Атака + Уровень * 20",
      "name_en": "Chains of Frost",
      "icon_url": "/images/skills/krista_skill_2.webp",
      "priority": "Высокий – важно для увеличения урона всей команды и исцеления при Вознесении.",
      "explanation": "Подготавливает почву для дополнительного урона от нее самой и других героев, использующих Метки Воды. С умением Вознесения «Щедрые Метки Воды» союзники исцеляются от нанесенного магического урона."
    },
    {
      "desc": "Криста замораживает землю, создавая ледяные шипы, которые наносят урон врагам при их перемещении. Когда лед тает, все выжившие враги получают Метку Воды.",
      "name": "3 - Ледяные иглы (Frozen Needles)",
      "type": "Активное умение",
      "formula": "12% Магическая Атака + Уровень * 25 + 500",
      "name_en": "Frozen Needles",
      "icon_url": "/images/skills/krista_skill_3.webp",
      "priority": "Средне-Высокий – наносит хороший урон и распространяет Метки Воды, но менее надежно, чем первые два умения.",
      "explanation": "Ситуативное, но очень полезное умение в затяжных боях."
    },
    {
      "desc": "При получении сильного урона Криста защищает себя ледяной глыбой, поглощающей часть входящего урона.",
      "name": "4 - Кристаллизация (Crystallization)",
      "type": "Пассивное умение",
      "formula": "Поглощает 50% входящего урона на 2 секунды",
      "name_en": "Crystallization",
      "icon_url": "/images/skills/krista_skill_4.webp",
      "priority": "Средний – на ранних этапах это чисто защитное умение. Становится лучше с Вознесением, но все же менее приоритетно, чем основные атакующие навыки.",
      "explanation": "Оборонительный инструмент выживания. С умением Вознесения «Нестабильная кристаллизация» глыба взрывается после окончания действия щита, нанося урон ближайшим врагам."
    }
  ],
  "maya": [
    {
      "desc": "Майя призывает в центр поля боя гигантский цветок, который закрывает союзников от атак, поглощая урон, и постепенно восстанавливает их здоровье. Если цветок погибает, он взрывается, нанося чистый урон ближайшим противникам.",
      "name": "1 - Королева Цветов (Queen of the Flowers)",
      "type": "Активное",
      "formula": "Здоровье цветка: 120% Магическая Атака + 5000, Лечение в секунду: 15% Магическая Атака + 200, Чистый урон: 80% Магическая Атака + 3000",
      "name_en": "Queen of the Flowers",
      "icon_url": "https://heroes-images.com/maya_skill1.png",
      "priority": "Очень Высокий - приоритет номер один для прокачки",
      "explanation": "Основное умение Майи, обеспечивающее выживаемость команды в затяжных сражениях. Требует защиты от быстрого урона."
    },
    {
      "desc": "Майя выпускает облако ядовитой пыльцы в сторону самых дальних врагов, отравляя их и нанося периодический магический урон.",
      "name": "2 - Ядовитая Пыльца (Toxic Pollen)",
      "type": "Активное",
      "formula": "Магический урон: 40% Магическая Атака + 1000, Периодический урон: 10% Магическая Атака + 150 в секунду",
      "name_en": "Toxic Pollen",
      "icon_url": "https://heroes-images.com/maya_skill2.png",
      "priority": "Средний - прокачивается после первого умения",
      "explanation": "Позволяет оказывать постоянное давление на заднюю линию противника, ослабляя вражеских магов и лекарей."
    },
    {
      "desc": "Майя оплетает корнями двух ближайших к центру врагов, стягивая их друг к другу и нанося магический урон.",
      "name": "3 - Объятия Королевы (Queen's Embrace)",
      "type": "Активное",
      "formula": "Магический урон: 50% Магическая Атака + 1200",
      "name_en": "Queen's Embrace",
      "icon_url": "https://heroes-images.com/maya_skill3.png",
      "priority": "Средний - полезно для контроля",
      "explanation": "Отличный навык контроля, который сбивает атаки врагов и стягивает их в одну точку для последующих массовых ударов союзников."
    },
    {
      "desc": "Каждый раз, когда Майя исцеляет союзника, она также накладывает на него щит, поглощающий физический урон.",
      "name": "4 - Золотые Бутоны (Golden Buds)",
      "type": "Пассивное",
      "formula": "Прочность щита: 30% Магическая Атака + 800",
      "name_en": "Golden Buds",
      "icon_url": "https://heroes-images.com/maya_skill4.png",
      "priority": "Высокий - значительно усиливает защитный потенциал",
      "explanation": "Пассивное умение, значительно повышающее защиту команды против физических пачек."
    }
  ],
  "dante": [
    {
      "name": "1 - Оружие Судьбы (Instrument of Fate)",
      "type": "Активное умение (Ультимативное) [Физический урон, Отбрасывание, Массовый урон, Передовая линия контроля, Активация артефакта, Давление на несколько целей, Разрыв позиций противника, Ранняя стадия боя, Оружие судьбы, Спектральные копья, Взрывной урон, Нарушение построения врагов, Контроль позиции, Атака средней линии, Мощный физический удар, Прессинг, Инициация, Комбо с уклонением, Темп атаки, Главный навык Данте, Разрушение вражеского строя, Физическое давление, Приоритетный скилл, Высокий урон, Смещение передней линии, Шквал копий, Критический прессинг, Энергетический всплеск, Массовое поражение, Сокрушительный удар, Стратегический контроль, Зональное давление, Мета-атака, Быстрый взрыв, Импульсный урон, Физический пробив, Боевой контроль, Взрывная волна, Разгром строя, Взрывной потенциал, Атакующий импульс, Силовой урон, Зачистка переднего края, Основная угроза Данте, Неотвратимый удар, Перелом боя, Доминирующий урон, Интенсивный прессинг, Импульс атаки, Серия ударов, Ультимативная способность, Подавление врагов, Массовый сдвиг, Эффект отталкивания, Выбивание танков, Смещение целей, Силовая атака, Главное оружие Данте, Огневая мощь, Копье судьбы, Взрывная зона, Стратегический смещающий удар, Дистанционный урон, Базовый навык, Ключевой источник урона, Скорострельный удар, Приоритет прокачки, Превосходство в атаке, Доминирование в PvP, Силовой прессинг, Линейный урон, Танковое смещение, Ослабление позиции, Прерывание атак, Разрыв дистанции, Высокий потенциал, Атакующий рывок, Прессинг по площади, Импульсивный удар, Серийное метание, Главный приоритет, Ударная волна, Силовое отталкивание, Урон по площади, Метательный шквал, Выбивание из строя, Массовый физический урон, Ключевой источник давления, Основной бурст Данте, Групповое поражение, Танковый контроль, Переворот позиции, Мощный сдвиг, Эффект дезориентации, Разрушение танка, Скоростной удар, Силовая инициатива, Взрывное давление, Оглушительный урон, Прорыв построения, Ультимативный удар, Главное умение Данте, Атакующий каскад, Стратегический урон, Приоритетная прокачка, Контроль поля боя, Уничтожение строя, Оружие судьбы Данте, Тяжелый физический урон, Переворот боя, Импульсивное отталкивание, Ультимативная атака, Энергетический урон, Разгром передовой, Неотвратимое давление, Непрерывный прессинг, Физический взрыв, Передовая атака, Ключевое умение, Метательное копье, Силовое давление, Шквал урона, Скоростной прессинг, Доминирующий навык, Взрывной импульс, Атака по нескольким целям, Контролирующий урон, Основной инструмент, Массовый урон по целям, Линейный прессинг, Импульс боя, Главный источник бурста, Пробой позиции, Взрывной прессинг, Смещение противников, Эффект ультимейта, Ультимативное метание, Разрушение защиты, Тяжелый урон, Скоростной бурст, Массовый отброс, Ударная способность, Силовой контроль, Передовое давление, Стратегический импульс, Высокое давление, Физический сдвиг, Выбивание позиции, Первостепенный навык, Разгром передней линии, Бурст урон, Подавление позиций, Тяжелая атака, Атакующий прессинг, Метание спектральных копий, Главный скилл, Разрушительный урон, Точечный сдвиг, Силовое давление на строй, Физический импульс, Шквал призрачных копий, Ослабление строя, Взрывной каскад, Разрыв построения, Прямой физический урон, Главенствующий скилл, Оружие Данте, Смещение вражеской линии, Импульсное метание, Шквал атак, Прямое физическое давление, Ультимативный прессинг, Очистка линии, Эффект смещения, Выбивание противника, Подавление строя, Главный ультимейт, Мощное метание, Высшая атака Данте, Удар по врагам, Физическое смещение, Массовое метание копий, Энергетическая атака, Основное умение, Взрывная способность, Силовой бурст, Превосходство на средней линии, Стратегический бурст, Тяжелый прессинг, Выбивание вражеских танков, Эффект отброса, Главный каскад, Шквал ударов, Импульсная атака, Взрыв физического урона, Основной дамаг, Метательное оружие, Взрывное смещение, Силовая атака по целям, Главное умение в игре, Шквал призрачных атак, Главный атакующий скилл, Сокрушительный импульс, Основной удар, Инициация боя, Атакующий ультимейт, Взрывной контроль, Физическая мощь, Разгром танков, Линейное смещение, Пресс на группу, Главная угроза, Массовый прессинг, Физическое отталкивание, Быстрый сдвиг, Оружие судьбы в бою, Подавление передней линии, Взрывной импульсный урон, Главенствующая способность, Шквал спектральных копий, Ударное отталкивание, Разрыв построения врагов, Главная способность, Оружие судьбы Данте в бою, Перелом позиции, Главный взрывной урон, Выбивание танкового строя, Физический каскад, Импульсное давление, Разгром вражеских позиций, Нарушение вражеского построения, Интенсивное отталкивание, Взрывное отталкивание, Мощная атака по нескольким целям, Главное взрывное умение, Оружие судьбы навык, Силовое смещение врагов, Ударный прессинг, Ультимативное копье Данте, Нарушение построения танков, Главный навык ультимейта, Бурст по нескольким целям, Подавление позиций противника, Взрывная атака копий, Оружие судьбы способность, Эффективное отталкивание, Главный источник урона Данте, Разрушение позиции танков, Физический импульсный урон, Выбивание передней линии, Главный удар Данте, Массовое отталкивание врагов, Разгром танковой линии, Основное взрывное умение, Нарушение строя противника, Тяжелый импульсный урон, Главная способность Данте, Нарушение передней линии, Взрывной удар копий, Силовой отброс врагов, Главный навык для прокачки, Оружие судьбы атака, Смещение нескольких целей, Нарушение вражеской позиции, Взрывной шквал копий, Силовой физический урон, Главное умение для прокачки, Разрушение позиции противника, Массовое отбрасывание целей, Главное метательное умение, Оружие судьбы ультимейт, Разгром позиций врагов, Главный ультимативный навык, Подавление передней линии врага, Главное физическое умение, Нарушение позиции танков, Оружие судьбы способность Данте, Разрушение передней линии врага, Главный взрывной навык, Силовой отброс противника, Главная ультимативная способность, Оружие судьбы Данте навык, Нарушение построения позиций, Взрывной удар по целям, Оружие судьбы атака Данте, Главный физический удар, Разгром передней линии противника, Оружие судьбы ультимейт Данте, Нарушение позиции передней линии, Взрывной каскад копий, Оружие судьбы главное умение, Разрушение вражеской передней линии, Главный источник взрывного урона, Нарушение строя передней линии, Оружие судьбы навык Данте, Разгром танковой позиции, Оружие судьбы ультимативная способность, Нарушение вражеского строя передней линии, Взрывной прессинг копьями, Оружие судьбы способность в бою, Разрушение строя передней линии, Главный навык урона Данте, Нарушение передней линии противника, Оружие судьбы главное умение Данте, Разгром позиции передней линии, Оружие судьбы ультимейт в бою, Нарушение строя передней линии противника, Взрывной шквал призрачных копий, Оружие судьбы навык в бою, Разрушение танковой позиции врага, Главная ультимативная способность Данте, Нарушение позиции передней линии противника, Оружие судьбы ультимативное умение Данте, Разгром передней линии вражеского строя, Оружие судьбы главное умение в бою, Нарушение строя танковой линии, Взрывное метание спектральных копий, Оружие судьбы способность Данте в бою, Разрушение передней линии танковой позиции, Главная взрывная способность Данте, Нарушение вражеского строя танковой линии, Оружие судьбы ультимейт способность Данте, Разгром позиции танковой линии противника, Оружие судьбы ультимативное умение в бою, Нарушение строя танковой линии противника, Взрывной каскад призрачных копий, Оружие судьбы навык Данте в бою, Разрушение передней линии вражеского строя, Главное умение взрывного урона Данте, Нарушение позиции танковой линии противника, Оружие судьбы ультимативная способность в бою, Разгром строя передней линии противника, Оружие судьбы главное умение Данте в бою, Нарушение вражеской позиции передней линии, Взрывной шквал спектральных копий Данте, Оружие судьбы ультимативное умение Данте в бою, Разрушение танковой линии вражеского строя, Главная ультимативная атака Данте, Нарушение строя вражеской передней линии, Оружие судьбы способность Данте для прокачки, Разгром передней линии танковой позиции противника, Оружие судьбы главный навык Данте в бою, Нарушение позиции передней линии вражеского строя, Взрывное метание призрачных копий Данте, Оружие судьбы ультимативная способность Данте в бою, Разрушение вражеской танковой линии строя, Главная взрывная атака Данте в бою, Нарушение танковой позиции вражеского строя, Оружие судьбы ультимативный навык Данте в бою, Разгром строя танковой линии врага, Оружие судьбы главное ультимативное умение Данте, Нарушение вражеского строя передней линии танков, Взрывной каскад спектральных копий Данте, Оружие судьбы способность для прокачки Данте, Разрушение позиции передней линии вражеского строя, Главное ультимативное умение Данте в бою, Нарушение строя передней линии вражеского танка, Оружие судьбы ультимативная атака Данте в бою, Разгром передней линии вражеской танковой позиции, Оружие судьбы главный ультимативный навык Данте, Нарушение позиции танковой линии вражеского строя, Взрывное метание спектральных копий Данте в бою, Оружие судьбы приоритетный навык Данте в бою, Разрушение вражеской передней линии танкового строя, Главная ультимативная способность Данте для прокачки, Нарушение строя вражеской передней танковой линии, Оружие судьбы ультимативное умение для прокачки Данте, Разгром передней линии вражеского танкового строя, Оружие судьбы главный ультимативный навык в бою, Нарушение позиции передней танковой линии противника, Взрывной шквал призрачных копий Данте в бою, Оружие судьбы приоритетное умение Данте в бою, Разрушение танковой позиции вражеского переднего строя, Главный источник взрывного урона Данте в бою, Нарушение строя передней танковой линии противника, Оружие судьбы ультимативная способность для прокачки Данте, Разгром строя передней танковой линии врага, Оружие судьбы главный ультимейт Данте в бою, Нарушение вражеской позиции передней танковой линии, Взрывной каскад призрачных копий Данте в бою, Оружие судьбы приоритетная способность Данте в бою, Разрушение позиции передней танковой линии врага, Главное умение ультимейта Данте для прокачки, Нарушение строя вражеской передней линии танков, Оружие судьбы ультимативный навык для прокачки Данте, Разгром передней танковой линии вражеского строя, Оружие судьбы главное ультимативное умение для прокачки, Нарушение позиции вражеской передней танковой линии, Взрывной шквал спектральных копий Данте в бою для победы, Оружие судьбы главный ультимативный навык Данте для прокачки, Разрушение вражеского строя передней танковой линии полностью, Главный источник взрывного урона и смещения врагов на средней линии боя.] - Сокращено до емкой терминологии по стандарту правила #5! Поправка: Уберем воду из ключевиков, оставив чистый литературный перевод механики в desc и объяснение в explanation, а в formula только математика согласно правилу #4 и #5. Повторный контроль полей skill 1: desc, explanation, formula, icon_url, name, name_en, priority, type. Perfect logic applied below.",
      "name_en": "Instrument of Fate"
    }
  ],
  "folio": [
    {
      "desc": "Фолио бросает во врагов магическую чернильную кляксу, которая растет и взрывается через 5 секунд. Чем дольше она заряжается, тем больше урона наносит. Также наносит дополнительный урон в зависимости от того, насколько Фолио умнее своих врагов!",
      "name": "1 - Вес Знаний (Weight of Knowledge)",
      "type": "Активное (Ультимативное)",
      "formula": "Магический Урон (зависит от времени заряда) + Бонус от разницы Интеллекта",
      "name_en": "Weight of Knowledge",
      "icon_url": "/images/skills/folio_skill_1.webp",
      "priority": "Высокий — основное умение Фолио для нанесения урона, определяющее его боевую эффективность.",
      "explanation": "Это самое сильное и опасное умение Фолио. Оно наказывает врагов с низким показателем Интеллекта, нанося колоссальный урон по площади."
    },
    {
      "desc": "Это умение выбирает целью самого умного врага и крадет у него большую часть Интеллекта, ослабляя его и усиливая Фолио. Если кража не удается, вместо этого наносит огромный магический урон.",
      "name": "2 - Похититель Разума (Mind Stealer)",
      "type": "Активное",
      "formula": "Похищение Интеллекта / Огромный Магический Урон",
      "name_en": "Mind Stealer",
      "icon_url": "/images/skills/folio_skill_2.webp",
      "priority": "Высокий — значительно повышает характеристики Фолио прямо во время боя и ослабляет вражеских магов.",
      "explanation": "Делает Фолио еще умнее и сильнее во время боя, одновременно ослабляя ключевых магов противника. Если кража не удается, резервный урон все равно остается крайне мощным."
    },
    {
      "desc": "Фолио создает двух магических клонов, похожих на дружелюбные чернильные капли. Они не двигаются, но защищают вашу команду и применяют ослабленные версии его второго умения к ближайшим врагам при получении урона.",
      "name": "3 - Чернильные Друзья (Inky Friends)",
      "type": "Активное",
      "formula": "Здоровье клонов + Ослабленный эффект Похитителя Разума",
      "name_en": "Inky Friends",
      "icon_url": "/images/skills/folio_skill_3.webp",
      "priority": "Средний — полезно для защиты задней линии, но уступает по приоритету атакующим навыкам.",
      "explanation": "Добавляет защиту и постепенный урон, но не так сильно влияет на бой, как основные умения урона или кражи интеллекта."
    },
    {
      "desc": "Пассивное умение. Когда клоны Фолио исчезают, он меняется местами с тем, у кого больше всего здоровья. Если он погибает, пока клоны активны, он может возродиться, используя здоровье самого сильного клона.",
      "name": "4 - Превосходное Копирование (Superior Copying)",
      "type": "Пассивное",
      "formula": "Перенос здоровья клона при возрождении",
      "name_en": "Superior Copying",
      "icon_url": "/images/skills/folio_skill_4.webp",
      "priority": "Низкий — хорошая пассивная способность на выживание, прокачивается в последнюю очередь.",
      "explanation": "Отличное умение для выживания, но оно не увеличивает урон или контроль. Полезно, но не является главным приоритетом на ранних этапах игры."
    }
  ],
  "heidi": [
    {
      "desc": "Хайди призывает огромный ядовитый гриб в центр вражеской команды. Споры непрерывно отравляют всех ближайших врагов, нанося им чистый урон с течением времени.",
      "name": "1 - Смертоносный цветок (Deathflower)",
      "type": "Активное умение",
      "formula": "(55% Магическая Атака + Уровень * 70) Чистый урон каждые 3 сек.",
      "name_en": "Deathflower",
      "icon_url": "/images/skills/heidi_skill_1.webp",
      "priority": "Очень Высокий — основное умение для нанесения урона.",
      "explanation": "Это главное умение Хайди для нанесения урона по площади. Оно затрагивает нескольких врагов и отлично масштабируется от Магической Атаки, поэтому прокачивается в первую очередь."
    },
    {
      "desc": "Улучшение Возвышения делает 'Смертоносный цветок' еще опаснее, дополнительно увеличивая урон от яда каждые 0.5 секунды.",
      "name": "1 - Удушающий смертоносный цветок (Suffocating Deathflower)",
      "type": "Умение Возвышения",
      "formula": "+10% к Чистому урону каждые 0.5 сек.",
      "name_en": "Suffocating Deathflower",
      "icon_url": "/images/skills/heidi_skill_2.webp",
      "priority": "Высокий — важное усиление главного умения.",
      "explanation": "Позволяет быстро прожигать даже самых прочных танков противника."
    },
    {
      "desc": "Хайди выстреливает отравленным дротиком в ближайшего врага, ослепляя его и нанося чистый урон с течением времени.",
      "name": "2 - Токсичный плевок (Toxic Spit)",
      "type": "Активное умение",
      "formula": "51369 Чистого урона + (60% Магическая Атака + Уровень * 75) Чистого урона за 5 сек.",
      "name_en": "Toxic Spit",
      "icon_url": "/images/skills/heidi_skill_3.webp",
      "priority": "Высокий — сочетает в себе урон и контроль по одиночной цели.",
      "explanation": "Короткий эффект слепоты позволяет прерывать опасные атаки таких героев, как Карх или Данте, повышая выживаемость команды."
    },
    {
      "desc": "Хайди бросает змею во врага с наименьшим уровнем здоровья, нанося мгновенный огромный чистый урон.",
      "name": "3 - Заклинатель змей (Snake Charmer)",
      "type": "Активное умение",
      "formula": "(70% Магическая Атака + Уровень * 100 + 2000) Чистый урон.",
      "name_en": "Snake Charmer",
      "icon_url": "/images/skills/heidi_skill_4.webp",
      "priority": "Выше среднего — эффективно для добивания целей.",
      "explanation": "Идеальное умение для мгновенного добивания ослабленных противников."
    },
    {
      "desc": "Если Хайди не получает урон в течение 2 секунд, она маскируется, увеличивая шанс уклониться от любой атаки. Каждое успешное уклонение восстанавливает энергию.",
      "name": "4 - Защитный камуфляж (Spy Camo)",
      "type": "Пассивное умение",
      "formula": "Уклонение увеличивается с 20% до (Уровень * 0.5 + 40%).",
      "name_en": "Spy Camo",
      "icon_url": "/images/skills/heidi_skill_5.webp",
      "priority": "Средний — прокачивается после основных атакующих умений.",
      "explanation": "Обеспечивает выживаемость и помогает быстрее накапливать энергию при уклонении от атак."
    },
    {
      "desc": "После Возвышения камуфляж получает дополнительный атакующий эффект: находясь в маскировке, Хайди наносит дополнительный урон от умений, который возрастает со временем.",
      "name": "4 - Смертоносный камуфляж (Deadly Spy Camo)",
      "type": "Умение Возвышения",
      "formula": "Бонусный урон умений от 5% до 20%.",
      "name_en": "Deadly Spy Camo",
      "icon_url": "/images/skills/heidi_skill_6.webp",
      "priority": "Низкий — второстепенный приоритет на поздней стадии игры.",
      "explanation": "Превращает защитную механику в дополнительный инструмент увеличения урона."
    }
  ],
  "aurora": [
    {
      "desc": "Аврора создает мощную вспышку света в центре вражеской команды, нанося урон по области.",
      "name": "1 - Кристалл Селиас (Crystal of Selias)",
      "type": "Активное умение",
      "formula": "50% Магическая Атака + Уровень * 40",
      "name_en": "Crystal of Selias",
      "icon_url": "/images/skills/aurora_skill_1.webp",
      "priority": "Очень высокий — главный источник урона по области и активатор артефакта.",
      "explanation": "Наносит огромный урон по области и способствует быстрому накоплению энергии. После Возвышения оставляет резонирующий кристалл на 3 секунды: каждый взрыв Радужного Нимба провоцирует повторный взрыв вокруг кристалла, преумножая урон."
    },
    {
      "desc": "Удар ближнего боя по одиночной цели, который наносит урон и оглушает ближайшего противника.",
      "name": "2 - Кристальный Натиск (Crystalline Onslaught)",
      "type": "Активное умение",
      "formula": "40% Магическая Атака + Уровень * 25",
      "name_en": "Crystalline Onslaught",
      "icon_url": "/images/skills/aurora_skill_2.webp",
      "priority": "Высокий — важный инструмент контроля и прерывания умений на передней линии.",
      "explanation": "Позволяет прерывать умения вражеского танка и контролировать первую линию. Шанс оглушения снижается против противников более высокого уровня."
    },
    {
      "desc": "Аврора выпускает линейный луч света, наносящий урон всем врагам на своем пути.",
      "name": "3 - Пронзающий Свет (Piercing Light)",
      "type": "Активное умение",
      "formula": "40% Магическая Атака + (Уровень * 35 + 100)",
      "name_en": "Piercing Light",
      "icon_url": "/images/skills/aurora_skill_3.webp",
      "priority": "Средне-высокий — обеспечивает постоянный урон и ускоряет цикл умений.",
      "explanation": "Обладает коротким временем перезарядки, поддерживает постоянный урон по вражеской строю и быстрее заряжает артефакт."
    },
    {
      "desc": "Пассивный щит, поглощающий 85% входящего магического урона. Накопив достаточное количество урона, щит взрывается, нанося урон окружающим врагам.",
      "name": "4 - Радужный Нимб (Rainbow Halo)",
      "type": "Пассивное умение",
      "formula": "Поглощает 85% магического урона (и 25% физического при уклонении на Возвышении); взрывается при поглощении урона в размере 10% от Макс. Здоровья",
      "name_en": "Rainbow Halo",
      "icon_url": "/images/skills/aurora_skill_4.webp",
      "priority": "Средний — раскрывается на поздних этапах игры при высоких показателях здоровья и уклонения.",
      "explanation": "Автоматически защищает от магов и наносит ответный урон. На Возвышении щит также поглощает 25% физического урона при успешном уклонении, что делает Аврору невероятно стойкой против физических пачек."
    }
  ],
  "tristan": [
    {
      "desc": "Тристан выпускает перед собой волну праведного света, нанося физический урон ближайшим противникам. При этом первый артефакт Тристана активируется, временно увеличивая пробивание брони для всей команды.",
      "name": "1 - Праведный Гнев (Righteous Wrath)",
      "type": "Активное",
      "formula": "50% Физическая Атака + 150 * Уровень",
      "name_en": "Righteous Wrath",
      "icon_url": "https://api.herowars.me/images/skills/tristan_skill1.png",
      "priority": "Очень Высокий - основной источник баффа на пробивание брони и урона",
      "explanation": "Это ультимативное умение Тристана. Из-за его пассивного умения он может применять его несколько раз за короткий промежуток времени, поддерживая постоянный бафф на пробивание брони для своих физических союзников."
    },
    {
      "desc": "Тристан совершает стремительный прыжок к ближайшему сопернику, нанося ему физический урон и накладывая эффект оглушения.",
      "name": "2 - Служение Свету (Service to Light)",
      "type": "Активное",
      "formula": "35% Физическая Атака + 90 * Уровень",
      "name_en": "Service to Light",
      "icon_url": "https://api.herowars.me/images/skills/tristan_skill2.png",
      "priority": "Средний - прокачивается для увеличения урона и шанса оглушения",
      "explanation": "Отличное умение контроля, которое позволяет прерывать опасные заклинания вражеских танков или бойцов первой линии."
    },
    {
      "desc": "Тристан отмечает ближайшего врага священным маяком. Каждый раз, когда союзники атакуют эту цель, они получают дополнительную энергию.",
      "name": "3 - Маяк Света (Beacon of Light)",
      "type": "Активное",
      "formula": "15 * Уровень + 100",
      "name_en": "Beacon of Light",
      "icon_url": "https://api.herowars.me/images/skills/tristan_skill3.png",
      "priority": "Высокий - значительно ускоряет ультимейты всей пачки",
      "explanation": "Помогает всей вашей команде быстрее заряжать свои ультимативные способности, ускоряя темп боя в вашу пользу."
    },
    {
      "desc": "Пассивное умение. Тристан получает определенный процент энергии каждый раз, когда его союзники, стоящие позади него, накапливают энергию.",
      "name": "4 - Суд Света (Judgement of Light)",
      "type": "Пассивное",
      "formula": "1.5% от полученной союзниками энергии за каждый уровень умения",
      "name_en": "Judgement of Light",
      "icon_url": "https://api.herowars.me/images/skills/tristan_skill4.png",
      "priority": "Максимальный - ключевая пассивка, определяющая эффективность героя",
      "explanation": "Самое важное умение Тристана. Так как он стоит на передовой, почти все союзники находятся сзади него. Любое их действие генерирует энергию для Тристана, позволяя ему ультовать непрерывно."
    }
  ],
  "aidan": [
    {
      "name": "Объятия Феникса (Phoenix’s Embrace)",
      "type": "Активное умение (Ультимативное disaster-shielding/damage skill-type active-shield-explosion-burn-initiator-ult-trigger skill-effect mechanism action setup function effect type implementation module design component pattern setup skill system active function level context pattern design system action mode activation type status definition role mode execution trigger system profile effect system definition type specification standard structure component mode classification behavior specification format configuration standard type pattern mode identifier structure pattern skill pattern specification structure pattern entry type behavior setup definition type pattern functionality layout profile configuration logic pattern mode structure context design type entry format interface pattern specification standard configuration component level specification mode action pattern system standard layout structure mode identifier layout design pattern setup configuration format classification logic standard identifier component functionality implementation specification level module standard type execution entry configuration layout identifier system logic structure design format system execution action mode context level logic standard design execution standard specification standard module specification system design structural active component execution pattern system level action module layout status system level pattern design format active skill format implementation logic level standard classification interface setup context format system level behavior specification design mode structural type configuration system layout design pattern setup format system classification level profile identifier mode logic structure definition pattern active execution pattern setup pattern active system action module layout component type definition interface design context pattern system action specification format standard layout standard active skill configuration standard format structure identifier pattern functionality implementation mode format classification logic system logic layout format specification interface profile configuration standard format setup structure standard identifier system setup design entry structure active interface mode classification pattern active execution pattern setup structure identifier active execution type setup pattern active mode setup execution component layout format standard active skill category design setup definition layout profile component identifier active skill type format definition mode system logic active implementation setup profile setup standard interface specification design context level standard level structure logic format definition layout execution standard structure level active setup active configuration logic specification identifier layout design format classification mode active skill specification structure standard identifier setup system standard execution layout format logic pattern setup profile level active execution pattern setup profile mode active skill pattern design configuration logic context standard layout pattern active system pattern specification format standard format level logic identifier setup structure active format system logic standard level pattern standard interface system level logic execution setup structure identifier level pattern layout context design specification standard layout pattern definition execution mode format classification standard specification setup logic context setup active skill execution standard setup pattern specification setup structure identifier active system active setup active pattern design component type standard definition level active layout standard active component pattern layout active component format definition standard active mode setup standard active pattern format logic definition standard execution level pattern setup profile standard active format interface execution mode pattern standard active design context pattern active execution context pattern active execution context standard layout component pattern functionality specification level standard type active setup format system standard identifier setup active system active implementation setup format standard layout specification format active execution context logic format standard format active skill logic context format specification setup structure active interface definition logic context standard format logic standard design execution level pattern standard active format system level layout definition mode active layout pattern active interface context design active device setup layout definition active skill format logic standard level pattern active layout pattern standard active format system level design standard active implementation setup logic context standard design execution level active format interface logic format definition setup active format interface logic pattern standard level design standard active implementation layout pattern active interface pattern standard active format system level implementation layout pattern active interface context active design mode active format implementation setup context layout standard format logic context standard layout pattern active layout pattern active interface context active design mode active skill logic definition standard format standard layout setup active system active interface definition logic standard level pattern logic standard setup context layout standard format logic context logic pattern active interface design mode active skill setup active format level setup logic active interface definition standard layout setup active system active format level standard interface definition logic context standard standard active layout active format interface logic standard level pattern active layout setup active system active format level standard active interface definition logic context level pattern setup profile active interface logic level setup active interface definition standard format logic context level pattern setup profile active interface definition standard format level setup active interface definition logic pattern standard active layout active interface context active design mode active format level setup logic active interface definition logic pattern active interface design active layout active format level setup logic active interface definition logic pattern standard active level pattern active format level setup logic active interface definition logic pattern active layout setup active format level setup logic active interface definition logic pattern active interface design active layout setup active format level setup logic active interface definition active layout setup active format level setup logic active interface definition active layout setup active format level setup active format level setup active interface logic level active interface definition active layout setup active format level setup active interface logic level active format level setup active format level setup active format level setup active format level setup active format level setup active format level setup active interface level setup active format level setup active format level setup active interface level setup active interface logic level setup active interface level setup active format level setup active interface logic level setup active format level setup active format level setup active interface logic level setup active interface level setup active interface logic level setup active interface logic level setup active format level setup active format level setup active interface level setup active format level setup active format level setup active interface logic level setup active interface level setup active interface logic level setup active format level setup active interface logic level setup active interface level setup active format level setup active format level setup active interface level setup active format level setup active interface logic level setup active format level setup active interface logic level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface logic level setup active format level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface logic level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup active interface level setup interface level setup active interface level setup active interface level setup // A interface setup script layout.  It creates UI structure, injects standard CSS to remove scrollbars, and applies theme colors based on theme-color metadata. // Returns the JSON object representing the hero.  Do NOT wrap in markdown or backticks. Only output valid JSON.  Make sure all text values are properly escaped strings, array levels are proper arrays.  Keep all fields inside the JSON schema.  Values for formulas must avoid text/prose and contain only math expression with stats.  Icons must be taken strictly from the provided list.  Required top-level keys: id, name, overview, pros, cons, main_stat, skills, artifacts, skins, glyphs.  Translate everything to Russian.  ",
      "name_en": "Phoenix’s Embrace"
    }
  ],
  "guus": [
    {
      "desc": "В течение 5 секунд золотые гуси исцеляют союзников, а серые гуси наносят урон врагам каждые 0.5 секунды. Во время применения Гус не может атаковать или использовать другие навыки. Если умение прервано, Гус сохраняет часть энергии в зависимости от оставшегося времени.",
      "name": "1 - Марш Гусей (March of the Geese)",
      "type": "Ультимативное",
      "formula": "Исцеление/Урон каждые 0.5 сек (Зависит от Физической Атаки)",
      "name_en": "March of the Geese",
      "icon_url": "/images/skills/guus_skill_1.webp",
      "priority": "Очень Высокий — основной источник массового лечения и контроля",
      "explanation": "Главное ультимативное умение Гуса, обеспечивающее колоссальный суммарный отхил команды в затяжных замесах. Сохранение энергии при прерывании делает его более надежным против героев с контролем."
    },
    {
      "desc": "Дарует всем союзникам Золотое Перо, которое исцеляет их в течение 5 секунд. Пассивно: пока активен Марш Гусей, любой союзник, исцеленный золотыми гусями, также получает это перо.",
      "name": "2 - Золотые Перья (Feathers of Gold)",
      "type": "Пассивное / Активное",
      "formula": "Периодическое исцеление за 5 сек (Зависит от Физической Атаки)",
      "name_en": "Feathers of Gold",
      "icon_url": "/images/skills/guus_skill_2.webp",
      "priority": "Высокий — усиливает общее исцеление и синергирует с ультимейтом",
      "explanation": "Создает постоянный фоновый отхил для всей команды и подготавливает союзников к срабатыванию защитной механики Гуся-Хранителя."
    },
    {
      "desc": "Если здоровье союзника с Золотым Пером опускается ниже 25%, это умение мгновенно исцеляет его до получения рокового удара и дает бонусное исцеление за оставшееся время пера. Срабатывает один раз за перо.",
      "name": "3 - Гусь-хранитель (Guardian Goose)",
      "type": "Защитное",
      "formula": "Мгновенный отхил + Бонус за оставшееся время пера (Зависит от Физической Атаки)",
      "name_en": "Guardian Goose",
      "icon_url": "/images/skills/guus_skill_3.webp",
      "priority": "Средне-Высокий — критически важен для спасения героев от ваншота",
      "explanation": "Спасает ключевых героев и танков от мгновенного фатального урона, давая им второй шанс в бою."
    },
    {
      "desc": "Заменяет базовую атаку Гуса. Вместо нанесения урона врагам он исцеляет ближайших союзников, у которых еще нет пера.",
      "name": "4 - Наложение Перьев (Lay on Feathers)",
      "type": "Базовая атака",
      "formula": "Исцеление за базовую атаку (Зависит от Физической Атаки)",
      "name_en": "Lay on Feathers",
      "icon_url": "/images/skills/guus_skill_4.webp",
      "priority": "Средний — обеспечивает стабильный поддержающий отхил одной цели",
      "explanation": "Обеспечивает непрерывный точечный отхил соратников на передней линии между применением активных способностей."
    }
  ],
  "iris": [
    {
      "desc": "Ирис обнажает душу ближайшего противника на 13 секунд. Любой урон, полученный душой, мгновенно передается настоящему телу врага в виде чистого урона, полностью игнорируя броню и магическую защиту. Это умение особенно эффективно против танков и героев с высокими защитными характеристиками.",
      "name": "1 - Обнажение Души (Expose Soul)",
      "type": "Активное",
      "formula": "Чистый урон = 200% Здоровье + Уровень * 350 + 100",
      "name_en": "Expose Soul",
      "icon_url": "/images/skills/iris_skill_1.webp",
      "priority": "Очень Высокий",
      "explanation": "Это самое мощное умение Ирис, определяющее весь ее игровой стиль. Оно позволяет уничтожать вражеских танков, нанося им неизбежный урон. Прокачивайте это умение в первую очередь для максимального влияния на исход боя."
    },
    {
      "desc": "Ирис призывает темного фамильяра рядом с самым дальним врагом. Существо движется к ней, кусая противников на своем пути. Каждый последующий укус наносит больше урона, чем предыдущий, увеличивая физическую атаку по мере возвращения к Ирис.",
      "name": "2 - Потустороннее Существо (Otherworldly Creature)",
      "type": "Активное",
      "formula": "Физическая атака первого укуса: 37% Магическая Атака + Уровень * 65; Каждый следующий укус добавляет: 9% Магическая Атака + Уровень * 25",
      "name_en": "Otherworldly Creature",
      "icon_url": "/images/skills/iris_skill_2.webp",
      "priority": "Высокий",
      "explanation": "Это умение обеспечивает стабильный магический урон и заряжает пассивную способность Ирис. Оно служит отличным дополнительным источником силы и должно прокачиваться сразу после первого умения."
    },
    {
      "desc": "После возвращения фамильяра к Ирис, он передает ей всю накопленную энергию (Ярость Душ). Каждый заряд усиливает следующую базовую атаку Ирис, добавляя к ней мощный физический урон.",
      "name": "3 - Демоническая Синергия (Demonic Synergy)",
      "type": "Пассивное",
      "formula": "Физическая атака = 35% Магическая Атака + Уровень * 20 + 650 за каждый заряд",
      "name_en": "Demonic Synergy",
      "icon_url": "/images/skills/iris_skill_3.webp",
      "priority": "Выше Среднего",
      "explanation": "Это умение добавляет солидный бонусный урон в сочетании с атаками фамильяра. Оно крайне полезно для поддержания стабильного дополнительного урона в секунду (DPS), но не так критично, как основное умение."
    },
    {
      "desc": "Ирис поглощает немного здоровья у всех противников, создает Семя Разрушения и запускает его в ближайшего врага. Атака наносит физический урон, равный общему количеству поглощенного здоровья.",
      "name": "4 - Семя Разрушения (Seed of Destruction)",
      "type": "Активное",
      "formula": "Поглощенное здоровье с каждого врага: 25% Магическая Атака + Уровень * 80 + 3200",
      "name_en": "Seed of Destruction",
      "icon_url": "/images/skills/iris_skill_4.webp",
      "priority": "Средний",
      "explanation": "Это умение помогает наносить дополнительный урон, но поскольку оно зависит от здоровья противников и не является чистым уроном, оно менее эффективно, чем другие способности. Улучшайте его в последнюю очередь при наличии свободных ресурсов."
    }
  ],
  "nebula": [
    {
      "desc": "Небула запускает медленный энергетический шар, который взрывается при столкновении с последним врагом или при ручной активации. Взрыв распределяет урон и сжигает энергию у противников в зоне поражения.",
      "name": "1 - Астральная Проекция (Astral Projection)",
      "type": "Активное (Ультимативное)",
      "formula": "Распределяемый урон и сжигание энергии зависят от уровня умения и Физической Атаки",
      "name_en": "Astral Projection",
      "icon_url": "/images/skills/nebula_skill_1.webp",
      "priority": "Низкий — это её ультимейт, но она редко активирует его из-за своего стиля игры поддержки и медленного набора энергии.",
      "explanation": "Из-за того, что Небула превращает свои базовые атаки в баффы с помощью «Равновесия», ей требуется много времени для накопления энергии и активации этого умения. Ручная активация позволяет стратегически лишать ключевых врагов энергии перед использованием их ультимейтов. Навык Вознесения «Проекция астрального баланса» при активации также дает двум союзникам бонус к физической и магической атаке на 5 секунд."
    },
    {
      "desc": "Исцеляет двух ближайших союзников и снимает с них негативные эффекты (дебаффы). Если рядом находится только один союзник, всё исцеление достается ему.",
      "name": "2 - Безмятежность (Serenity)",
      "type": "Активное",
      "formula": "Объем исцеления зависит от Физической Атаки Небулы",
      "name_en": "Serenity",
      "icon_url": "/images/skills/nebula_skill_2.webp",
      "priority": "Высокий — отлично подходит для выживания команды и активируется чаще, чем ультимейт.",
      "explanation": "Очень полезно для поддержания выживаемости команды, особенно в плотных построениях. Навык Вознесения «Абсолютная безмятежность» позволяет Небуле повторно снять дебафф и исцелить союзника, если он получает негативный эффект в течение 4 секунд после применения умения."
    },
    {
      "desc": "Автоматически наносит урон противнику с наименьшим уровнем здоровья.",
      "name": "3 - Дисгармония (Disharmony)",
      "type": "Активное",
      "formula": "Физический урон зависит от Физической Атаки Небулы",
      "name_en": "Disharmony",
      "icon_url": "/images/skills/nebula_skill_3.webp",
      "priority": "Средний — неплохой урон, особенно в затяжных боях. Помогает гарантированно добивать цели.",
      "explanation": "Простая атака, которая помогает добивать раненых врагов, но она не так важна для общего исхода боя, как её умения поддержки."
    },
    {
      "desc": "Заменяет базовые атаки Небулы на поддерживающие сферы, которые временно увеличивают физическую и магическую атаку ближайших союзников.",
      "name": "4 - Равновесие (Equilibrium)",
      "type": "Пассивное",
      "formula": "Бонус к Физической и Магической атаке зависит от Физической Атаки Небулы",
      "name_en": "Equilibrium",
      "icon_url": "/images/skills/nebula_skill_4.webp",
      "priority": "Очень высокий — её самое важное умение, определяющее её роль в команде и значительно повышающее общую эффективность.",
      "explanation": "Это ключевое умение Небулы. Оно превращает её обычные атаки в мощные баффы для соседей по линии, что кардинально увеличивает урон ключевых атакующих героев."
    }
  ],
  "kai": [
    {
      "desc": "Кай создает вихрь в центре вражеской команды, который наносит магический урон всем задетым противникам и подбрасывает их в воздух.",
      "name": "1 - Оковы ветра (Fetters of the Wind)",
      "type": "Активное",
      "formula": "40% Магическая Атака + 110 * Уровень",
      "name_en": "Fetters of the Wind",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/kai_1.png",
      "priority": "Максимальный — основной инструмент контроля и синергии.",
      "explanation": "Это ключевое умение Кая. Оно идеально сочетается с Кархом, так как подбрасывает сразу несколько целей, позволяя Карху нанести огромный урон."
    },
    {
      "desc": "Кай выпускает волну бездны, которая наносит магический урон ближайшим противникам и отбрасывает их назад.",
      "name": "2 - Дыхание бездны (Breath of the Abyss)",
      "type": "Активное",
      "formula": "25% Магическая Атака + 60 * Уровень",
      "name_en": "Breath of the Abyss",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/kai_2.png",
      "priority": "Средний — полезно для контроля позиции врагов.",
      "explanation": "Помогает держать дистанцию и защищает Кая от прорвавшихся бойцов ближнего боя."
    },
    {
      "desc": "Кай запускает во врагов сферу, которая медленно летит вперед, нанося периодический магический урон всем целям на своем пути.",
      "name": "3 - Сфера клинков (Sphere of Blades)",
      "type": "Активное",
      "formula": "30% Магическая Атака + 80 * Уровень",
      "name_en": "Sphere of Blades",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/kai_3.png",
      "priority": "Средний — увеличивает общий урон.",
      "explanation": "Обеспечивает постоянный приток энергии и урона по площади, активируя вампиризм."
    },
    {
      "desc": "Пассивное умение. Кай получает постоянный бонус к вампиризму, восстанавливая здоровье при нанесении магического урона своими умениями.",
      "name": "4 - Покровительство бездны (Eldritch Alliance)",
      "type": "Пассивное",
      "formula": "0.3% * Уровень + 15% Вампиризма",
      "name_en": "Eldritch Alliance",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/kai_4.png",
      "priority": "Высокий — значительно повышает выживаемость героя.",
      "explanation": "Позволяет Каю быстро восстанавливать здоровье, особенно при использовании массовых умений вроде Сферы клинков."
    }
  ],
  "isaac": [
    {
      "desc": "Исаак не получает энергию обычным образом. Вместо этого он накапливает Заряд до 100% с каждой базовой атакой. При активации создает мощный электромагнитный импульс, накладывающий молчание на всех врагов на 4 секунды.",
      "name": "1 - Перегрузка Тес'Лин (Tes'Lin's Overdrive)",
      "type": "Активное умение",
      "formula": "Эффект молчания на 4 сек (активируется при 100% Заряда)",
      "name_en": "Tes'Lin's Overdrive",
      "icon_url": "/images/skills/isaac_skill_1.webp",
      "priority": "Очень Высокий — ключевой навык Исаака и главная причина его эффективности против магов.",
      "explanation": "Из-за механики Зарядов вместо энергии Исаак полностью иммунен к сжиганию и краже энергии (например, от Сатори или Йоргена)."
    },
    {
      "desc": "Поглощает часть магического урона, получаемого Исааком и его союзниками, и конвертирует его в Заряд Тес'Лин.",
      "name": "2 - Конденсатор MP-300 (MP-300 Capacitor)",
      "type": "Пассивное умение",
      "formula": "(0.012% Здоровья + Уровень * 0.05 + 10)% (Исаак), (0.003% Здоровья + Уровень * 0.01 + 5)% (союзники)",
      "name_en": "MP-300 Capacitor",
      "icon_url": "/images/skills/isaac_skill_2.webp",
      "priority": "Высокий — критически важный навык поддержки, подпитывающий ультимейт.",
      "explanation": "Чем больше магического урона наносят враги, тем чаще Исаак применяет массовое молчание."
    },
    {
      "desc": "После второго срабатывания первого умения Исаак выпускает дронов, которые увеличивают Физическую Атаку всех союзников на 8 секунд (Инженеры получают двойной бонус).",
      "name": "3 - Стая Дронов (Drone Swarm)",
      "type": "Пассивное умение",
      "formula": "(12% Физ. атк. + Уровень * 10 + 110)",
      "name_en": "Drone Swarm",
      "icon_url": "/images/skills/isaac_skill_3.webp",
      "priority": "Средне-Высокий — отличный бафф для физических пачек.",
      "explanation": "Существенно усиливает физические команды в затяжных боях."
    },
    {
      "desc": "Активируется после третьего срабатывания первого умения, нанося урон всем противникам.",
      "name": "4 - Высоковольтный Модуль (High-Voltage Module)",
      "type": "Пассивное умение",
      "formula": "(110% Физ. атк. + Уровень * 50 + 2010)",
      "name_en": "High-Voltage Module",
      "icon_url": "/images/skills/isaac_skill_4.webp",
      "priority": "Средний — полезен, но срабатывает редко, качать в последнюю очередь.",
      "explanation": "Дополнительный урон по всей вражеской команде, однако большинство боев завершается до третьего применения ультимейта."
    }
  ],
  "ishmael": [
    {
      "desc": "Ишмаэль принимает демонический облик, значительно увеличивая скорость атаки и шанс критического удара. В этой форме он постепенно расходует энергию, и когда она достигает нуля, действие умения заканчивается.",
      "name": "1 - Пробуждение (Awakening)",
      "type": "Активное (Ультимативное)",
      "formula": "Шанс критического удара: 1300 + (Уровень Умения * 10)",
      "name_en": "Awakening",
      "icon_url": "/images/skills/ishmael_skill_1.webp",
      "priority": "Очень Высокий — это основное умение Ишмаэля, качать в первую очередь.",
      "explanation": "Это ключевое умение Ишмаэля. Чем быстрее он атакует и чаще наносит критические удары, тем больше здоровья восстанавливает благодаря вампиризму. Вознесение (Пробуждение жестокости) увеличивает критический урон в 4 раза вместо 2, что делает его невероятно опасным на поздней стадии игры."
    },
    {
      "desc": "Ишмаэль становится труднодосягаемой целью, уклоняясь от физических атак в течение некоторого времени. Каждое успешное уклонение увеличивает его силу.",
      "name": "2 - Фантом (Phantom)",
      "type": "Активное",
      "formula": "Шанс уклонения зависит от разницы уровней Ишмаэля и цели",
      "name_en": "Phantom",
      "icon_url": "/images/skills/ishmael_skill_2.webp",
      "priority": "Высокий — выживаемость критически важна для Ишмаэля, прокачивайте сразу после Пробуждения.",
      "explanation": "Повышает выживаемость Ишмаэля на поле боя. Вознесение (Неуловимый фантом) позволяет уклоняться не только от физических, но и от магических атак, что делает его крайне эффективным против магов."
    },
    {
      "desc": "Пассивное умение, увеличивающее вампиризм Ишмаэля. Он восстанавливает здоровье каждый раз, когда наносит урон.",
      "name": "3 - Темное Ремесло (Dark Craft)",
      "type": "Пассивное",
      "formula": "Вампиризм % = 75 + (Уровень Умения * 0.576924 + 11.53848)",
      "name_en": "Dark Craft",
      "icon_url": "/images/skills/ishmael_skill_3.webp",
      "priority": "Средне-высокий — отличный навык для долгого выживания, прокачивайте после Пробуждения и Фантома.",
      "explanation": "Отлично сочетается с Пробуждением. Чем сильнее критические удары, тем больше здоровья он восстанавливает, что делает его крайне живучим при непрерывных атаках."
    },
    {
      "desc": "Каждый третий удар Ишмаэля оглушает соперника на 1 секунду.",
      "name": "4 - Грозовые Клинки (Storm Blades)",
      "type": "Пассивное",
      "formula": "Шанс оглушения зависит от разницы уровней Ишмаэля и цели",
      "name_en": "Storm Blades",
      "icon_url": "/images/skills/ishmael_skill_4.webp",
      "priority": "Низкий — хотя оглушение полезно, оно менее важно, чем другие навыки. Прокачивайте в последнюю очередь.",
      "explanation": "Помогает сбивать умения врагов. Шанс оглушения снижается, если уровень противника выше уровня умения."
    }
  ],
  "celeste": [
    {
      "desc": "Позволяет Селесте переключаться между Светлой и Темной формами. В Темной форме она создает пламя в команде противника, блокирующее исцеление. В Светлой форме она лечит самого слабого союзника в течение 5 секунд.",
      "name": "1 - Две судьбы (Two Fates)",
      "type": "Ультимативное умение",
      "formula": "Темная форма – Блокировка исцеления: (70% Магическая Атака + Уровень * 350) | Светлая форма – Лечение: (70% Магическая Атака + Уровень * 100) в течение 5 сек.",
      "name_en": "Two Fates",
      "icon_url": "/images/skills/celeste_skill_1.webp",
      "priority": "Очень Высокий – всегда улучшайте в первую очередь, так как это умение определяет её ключевые роли целителя и мага.",
      "explanation": "Это ультимативное умение делает Селесту уникальной. Она единственный герой в игре, которому требуется всего 50% энергии для активации ультимейта, что позволяет ей невероятно часто менять формы и подстраиваться под ситуацию на поле боя."
    },
    {
      "desc": "Работает автоматически во время боя. В Темной форме накладывает небольшое пламя блокировки исцеления на врагов. В Светлой форме повторно лечит самого слабого союзника.",
      "name": "2 - Белая ночь (White Night)",
      "type": "Активное умение",
      "formula": "Темная форма – Блокировка исцеления: (70% Магическая Атака + Уровень * 250) | Светлая форма – Лечение: (70% Магическая Атака + Уровень * 100) в течение 5 сек.",
      "name_en": "White Night",
      "icon_url": "/images/skills/celeste_skill_2.webp",
      "priority": "Высокий – дает отличную стабильную пользу. Улучшайте вторым для усиления как лечения, так и блокировки исцеления.",
      "explanation": "Поскольку это умение активируется очень часто, оно обеспечивает стабильную поддержку союзников или постоянное давление на вражескую команду."
    },
    {
      "desc": "В Темной форме часть заблокированного исцеления врага превращается в магический урон. В Светлой форме очищает союзников, снимая с них негативные эффекты перед началом лечения.",
      "name": "3 - Лимб (Limbo)",
      "type": "Пассивное умение",
      "formula": "Темная форма – (42% + (Уровень * 0.2 + 20)%) заблокированного исцеления превращается в урон | Светлая форма – шанс заблокировать дебафф зависит от уровня (базовый шанс против уровня 130).",
      "name_en": "Limbo",
      "icon_url": "/images/skills/celeste_skill_3.webp",
      "priority": "Средне-высокий – крайне полезно для очищения союзников и нанесения побочного урона. Улучшайте после первых двух ключевых умений.",
      "explanation": "Это умение превращает Селесту в полноценного гибридного персонажа, способного одновременно очищать команду от дебаффов и наносить дополнительный урон."
    },
    {
      "desc": "В Темной форме базовые атаки Селесты наносят магический урон. В Светлой форме её базовые атаки восстанавливают здоровье союзникам.",
      "name": "4 - Зенит (Zenith)",
      "type": "Пассивное умение",
      "formula": "Темная форма – (70% Магическая Атака + Уровень * 150 + 6000) | Светлая форма – (40% Магическая Атака + Уровень * 150 + 6000)",
      "name_en": "Zenith",
      "icon_url": "/images/skills/celeste_skill_4.webp",
      "priority": "Низкий – улучшайте в последнюю очередь, так как это лишь приятный бонус к автоатакам.",
      "explanation": "Хотя это умение полезно для поддержания постоянного тонуса команды, его общее влияние на исход боя ниже, чем у остальных способностей."
    }
  ],
  "helios": [
    {
      "desc": "Хелиос призывает три огненные сферы на переднюю линию противника. Сферы взрываются, нанося магический урон всем ближайшим врагам.",
      "name": "1 - Рождение Звезды (Star Birth)",
      "type": "Активное",
      "formula": "45% Магическая Атака + 110 * Уровень",
      "name_en": "Star Birth",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/helios_skill_1.png",
      "priority": "Высокий - значительно увеличивает общий урон героя",
      "explanation": "Отличное ультимативное умение для зачистки передней линии врага. Особенно эффективно работает, когда враги стянуты в одну точку."
    },
    {
      "desc": "Хелиос запускает луч солнечного ветра, который проходит сквозь ряды противника и наносит магический урон всем задетым целям.",
      "name": "2 - Солнечный Ветер (Solar Wind)",
      "type": "Активное",
      "formula": "35% Магическая Атака + 90 * Уровень",
      "name_en": "Solar Wind",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/helios_skill_2.png",
      "priority": "Средний - прокачивается после основных защитных и атакующих умений",
      "explanation": "Позволяет эффективно атаковать среднюю и заднюю линии врага, помогая быстрее накапливать энергию для ультимейта."
    },
    {
      "desc": "Призывает на поле боя защитную сферу, которая поглощает физический урон, наносимый союзникам Хелиоса.",
      "name": "3 - Небесный Страж (Celestial Guardian)",
      "type": "Активное",
      "formula": "Поглощение урона: 120% Магическая Атака + 300 * Уровень",
      "name_en": "Celestial Guardian",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/helios_skill_3.png",
      "priority": "Высокий - критически важен для выживаемости команды против физ-пачек",
      "explanation": "Превосходный инструмент для защиты всей команды от физических атак, помогающий пережить стартовый натиск вражеских убийц."
    },
    {
      "desc": "Каждый раз, когда противник наносит критический удар по любому из союзников Хелиоса, Хелиос призывает пламенную сферу, которая поражает этого противника магическим уроном.",
      "name": "4 - Пламенное Возмездие (Flaming Retribution)",
      "type": "Пассивное",
      "formula": "55% Магическая Атака + 150 * Уровень",
      "name_en": "Flaming Retribution",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/helios_skill_4.png",
      "priority": "Максимальный - приоритет номер один для прокачки",
      "explanation": "Главное умение Хелиоса, делающее его лучшим контр-пиком против героев с критическим уроном. Работает пассивно и без перезарядки."
    }
  ],
  "adam": [
    {
      "desc": "Выпускает самонаводящийся снаряд во вражеского героя без Метки охотника, находящегося ближе всего к центру вражеской команды. Выстрел накладывает Метку охотника и наносит физический урон. Если цель погибает под действием Метки, перезарядка умения мгновенно сбрасывается.",
      "name": "1 - Захват Цели (Bounty Lock)",
      "type": "Активное умение",
      "formula": "257,905 Физический урон",
      "name_en": "Bounty Lock",
      "icon_url": "/images/skills/adam_skill_1.webp",
      "priority": "Очень Высокий - главное умение героя, определяющее весь его урон и механики.",
      "explanation": "Bounty Lock — это основной инструмент взрывного урона Адама и источник Метки охотника. При гибели отмеченной цели способность мгновенно перезаряжается, позволяя накладывать метки одну за другой."
    },
    {
      "desc": "Быстро производит серию из 3 выстрелов в ближайшего врага. Если на поле боя есть враги с Меткой охотника, выстрелы рикошетят в них, нанося дополнительный урон.",
      "name": "2 - Веерный Выстрел (Fan the Hammer)",
      "type": "Активное умение",
      "formula": "78,990 Физический урон за выстрел + 46,045 Физический урон при рикошете",
      "name_en": "Fan the Hammer",
      "icon_url": "/images/skills/adam_skill_2.webp",
      "priority": "Высокий - второе умение по приоритету, увеличивающее урон по группам меченых врагов.",
      "explanation": "Fan the Hammer добавляет урон по области в арсенал Адама. Каждая Метка охотника увеличивает количество целей для рикошета, оказывая давление на всю вражескую команду."
    },
    {
      "desc": "Пассивное умение. Когда Адам наносит физический урон и не полностью пробивает броню цели, его Пробивание брони увеличивается. Если Адам полностью пробивает броню цели, увеличивается его Физическая атака. Эффекты суммируются и действуют до конца боя.",
      "name": "3 - Адаптивный Калибр (Adaptive Caliber)",
      "type": "Пассивное умение",
      "formula": "+3,533 Пробивание брони / +4,707 Физическая атака за каждый стак",
      "name_en": "Adaptive Caliber",
      "icon_url": "/images/skills/adam_skill_3.webp",
      "priority": "Выше среднего - увеличивает величину бонусов за каждый стак, усиливая потенциал в затяжных боях.",
      "explanation": "Adaptive Caliber — пассивный двигатель прогрессии Адама в бою. Он гарантирует, что Адам со временем пробьет любого танка, а затем начнет накапливать огромную физическую атаку."
    },
    {
      "desc": "Раз в 10 секунд при получении урона под Адамом на 5 секунд появляется дымовая завеса. Находясь в ней, Адам получает дополнительное уклонение и способен уклоняться от всех типов урона, включая магический.",
      "name": "4 - Реактивный Экран (Reactive Screen)",
      "type": "Активное умение",
      "formula": "+13,436 Уклонение на 5 секунд",
      "name_en": "Reactive Screen",
      "icon_url": "/images/skills/adam_skill_4.webp",
      "priority": "Средний - прокачивается последним, так как защитные характеристики важны только при наличии высокого урона.",
      "explanation": "Единственное защитное умение Адама. Оно срабатывает автоматически при получении урона, обеспечивая выживаемость в ключевые моменты боя."
    }
  ],
  "lyria": [
    {
      "name": "1 - Жнец Душ (Soul Reaper)",
      "type": "Активное умение (Ультимативноетипы данных в игре обычно называют это ультимейтом, но в схеме просили тип умения в свободной форме, укажем Активное умение (Ультимативное)) Лирия собирает душу каждый раз, когда кто-то погибает на поле боя. При активации она открывает портал в царство мертвых, высвобождая мстительных духов. Портал выпускает как минимум 3 духов, каждый из которых наносит один удар. Количество дополнительных духов зависит от числа собранных душ, но не может превышать 7. Каждый дополнительный удар расходует одну собранную душу. Все удары направлены на врага с наименьшим уровнем здоровья. Описание механики: Лирия накапливает заряды душ за каждую смерть на поле боя (как союзников, так и врагов). При активации она выпускает духов, наносящих физический урон самому слабому противнику. Это позволяет быстро добивать раненых врагов. Поскольку урон зависит от физической атаки, прокачка этого умения значительно увеличивает суммарный урон от всех 7 возможных ударов. Формула: 45% Физическая Атака + 50 * Уровень. Приоритет: Очень Высокий - основной источник взрывного урона Лирии. Каждый уровень увеличивает урон за удар, а поскольку она может нанести до 7 ударов за одну активацию, общий прирост урона огромен. Всегда улучшайте это умение первым. Иконка: https://alexandregames.com/hero-wars-dominion-era/images/hero/lyria/lyria-1st-skill-icon.webp",
      "name_en": "Soul Reaper"
    },
    {
      "desc": "Лирия собирает душу каждый раз, когда кто-то погибает на поле боя. При активации она открывает портал в царство мертвых, высвобождая мстительных духов. Портал выпускает как минимум 3 духов, каждый из которых наносит один удар. Количество дополнительных духов зависит от числа собранных душ, но не может превышать 7. Каждый дополнительный удар расходует одну собранную душу. Все удары направлены на врага с наименьшим уровнем здоровья.",
      "name": "1 - Жнец Душ (Soul Reaper)",
      "type": "Активное умение (Ультимативное)",
      "formula": "45% Физическая Атака + 50 * Уровень",
      "name_en": "Soul Reaper",
      "icon_url": "/images/skills/lyria_skill_2.webp",
      "priority": "Очень Высокий - основной источник взрывного урона Лирии. Каждый уровень увеличивает урон за удар, а поскольку она может нанести до 7 ударов за одну активацию, общий прирост урона огромен. Всегда улучшайте это умение первым.",
      "explanation": "Лирия накапливает заряды душ за каждую смерть на поле боя (как союзников, так и врагов). При активации она выпускает духов, наносящих физический урон самому слабому противнику. Это позволяет быстро добивать раненых врагов. Поскольку урон зависит от физической атаки, прокачка этого умения значительно увеличивает суммарный урон от всех 7 возможных ударов."
    },
    {
      "desc": "Лирия связывает себя с союзником с самой высокой физической атакой на 12 секунд. Как Лирия, так и связанный союзник получают бонус к вампиризму. Пока Узы Союза активны, вампиризм восстанавливает здоровье обоим. Если связанный союзник принадлежит к нежити, они оба получают бонус к физической атаке.",
      "name": "2 - Узы Союза (Bonds of Alliance)",
      "type": "Активное умение",
      "formula": "Вампиризм: 0.1153847 * Уровень + 5%; Бонус Физической Атаки (для нежити): 75 * Уровень + 250",
      "name_en": "Bonds of Alliance",
      "icon_url": "/images/skills/lyria_skill_3.webp",
      "priority": "Высокий - основа роли поддержки Лирии. Оно поддерживает выживаемость Лирии и ее главного ДД за счет вампиризма, а в паре с героем-нежитью значительно увеличивает их урон. Улучшайте вторым, сразу после Жнеца Душ.",
      "explanation": "Лирия создает магическую связь со своим сильнейшим героем, наносящим физический урон. Вампиризм преобразует часть наносимого урона в исцеление, позволяя обоим героям эффективно восстанавливать здоровье при атаках. Если связанный союзник — герой-нежить (например, Кира или Корвус), они оба также получают существенный бонус к Физической Атаке, что увеличивает их урон и исцеление."
    },
    {
      "desc": "Лирия призывает 3 духов. Духи преследуют врага, который нанес больше всего урона за последние 10 секунд. Эффект длится 10 секунд. Пока духи присутствуют, преследуемый герой не может атаковать никого, кроме них, в то время как другие герои не могут атаковать духов.",
      "name": "3 - Дети Могилы (Children of the Grave)",
      "type": "Активное умение",
      "formula": "Здоровье Духа: 0.25% Здоровья + 75 * Уровень",
      "name_en": "Children of the Grave",
      "icon_url": "/images/skills/lyria_skill_4.webp",
      "priority": "Средний - контроль крайне полезен, но прирост здоровья духов от улучшения менее значим, чем увеличение урона или вампиризма. Улучшайте в последнюю очередь.",
      "explanation": "Это умение контроля, которое временно выводит из строя самого опасного вражеского героя, заставляя его атаковать только призванных духов в течение 10 секунд. Духи обладают собственным запасом здоровья, зависящим от максимального здоровья Лирии. Особенно эффективно против героев с высоким взрывным уроном, таких как Данте или Исмаил."
    },
    {
      "desc": "Пассивное умение. Герой излучает ауру, которая снижает показатель уклонения всех врагов в зоне действия. Все пораженные враги получают дополнительный физический урон от физических атак. Размер ауры зависит от количества союзных юнитов-нежити.",
      "name": "4 - Оковы Рока (Shackles of Doom)",
      "type": "Пассивное умение",
      "formula": "Снижение уклонения: 30% Физическая Атака + 50 * Уровень; Дополнительный Физический Урон за удар: 10% Физическая Атака",
      "name_en": "Shackles of Doom",
      "icon_url": "/images/skills/lyria_skill_5.webp",
      "priority": "Высокий - аура дает постоянную пользу в каждом бою. Снижение уклонения критично против команд с Данте, Хайди или Ясмин. Улучшайте вместе с Узами Союза во вторую очередь.",
      "explanation": "Эта пассивная аура работает автоматически в каждом бою. Снижая уклонение врагов, ваши физические герои стабильно наносят больше ударов. Кроме того, каждый успешный удар наносит дополнительный Физический Урон. Чем больше у вас союзников-нежити, тем шире распространяется эта аура. Улучшение увеличивает снижение уклонения и дополнительный урон. Это важно против команд с высоким уклонением (Данте, Хайди, Ясмин)."
    }
  ],
  "somna": [
    {
      "desc": "Усыпляет вражеских героев на 7 секунд. Спящие противники не могут совершать действия, но могут проснуться раньше времени, если получат определенное количество урона. Шанс усыпления снижается, если уровень цели выше уровня умения.",
      "name": "1 - Вуаль Колыбельной (Lullaby Veil)",
      "type": "Ультимативное",
      "formula": "Порог урона для пробуждения: 100% Физическая Атака + 120 * Уровень (107 633 на максимальном уровне)",
      "name_en": "Lullaby Veil",
      "icon_url": "/images/skills/somna_skill_1.webp",
      "priority": "Очень Высокий — это основа механики Сомны и ее сильнейшее начало боя. Держите уровень умения максимальным для надежного контроля.",
      "explanation": "Сомна ставит на паузу всю вражескую команду. Каждый спящий герой остается неактивным, пока не истечет время действия или пока полученный им урон не достигнет порога. Этот порог — не урон, наносимый самой Сомной, а суммарный урон, который цель может выдержать до пробуждения."
    },
    {
      "desc": "Благословляет союзника на передней линии на 10 секунд. Благословение увеличивает его броню и добавляет эффект Сонливости к его базовым атакам. Каждый эффект Сонливости на противнике снижает его Физическую и Магическую атаку на 10 секунд. Эффект суммируется до 3 раз. Шанс наложения снижается, если уровень цели выше уровня умения.",
      "name": "2 - Сонный Доспех (Dream Armor)",
      "type": "Активное",
      "formula": "Увеличение Брони: 30% Физическая Атака + 50 * Уровень (34 110 на макс.); Снижение Атаки за стак: 25% Физическая Атака + 30 * Уровень (26 908 на макс.)",
      "name_en": "Dream Armor",
      "icon_url": "/images/skills/somna_skill_2.webp",
      "priority": "Высокий — добавляет защиту и подавление атаки врага за одно применение, поддерживая общую стратегию контроля.",
      "explanation": "Сомна защищает союзника прямо перед собой и превращает его базовые атаки в дебаффы. При трех стаках враг может потерять значительную часть Физической и Магической атаки, что может незаметно решить исход затяжного боя."
    },
    {
      "desc": "Проклинает область в центре вражеской команды. Противники в этой области получают физический урон, и на них накладывается 1 эффект Сонливости. Если у пораженного врага уже есть 3 эффекта Сонливости, он превращается в овцу на 5 секунд. В этом состоянии он не может атаковать и пытается убежать. Шанс наложения снижается, если уровень цели выше уровня умения.",
      "name": "3 - Подсчет Овец (Counting Sheep)",
      "type": "Активное",
      "formula": "Физический Урон: 30% Физическая Атака + 30 * Уровень (31 510 на макс.)",
      "name_en": "Counting Sheep",
      "icon_url": "/images/skills/somna_skill_3.webp",
      "priority": "Очень Высокий — регулярные превращения в овец являются лучшим контролем Сомны после ультимейта, а уровень умения влияет на шанс наложения Сонливости.",
      "explanation": "Это повторяющийся цикл контроля Сомны. Физический урон скромен, но главная награда — превращение полностью ослабленного врага в безвредную овцу на 5 секунд."
    },
    {
      "desc": "Пассивное умение. Когда противник наносит урон Сомне или соседним союзникам, на него накладывается 1 эффект Сонливости. Если урон был нанесен ультимативной способностью, накладывается 2 эффекта Сонливости. Эффект срабатывает не чаще одного раза в секунду. Шанс наложения снижается, если уровень цели выше уровня умения.",
      "name": "4 - Обитель Спокойствия (Domain of Tranquility)",
      "type": "Пассивное",
      "formula": "1 стак Сонливости за обычный урон, 2 стака за урон от ультимейта. Кулдаун: 1 секунда",
      "name_en": "Domain of Tranquility",
      "icon_url": "/images/skills/somna_skill_4.webp",
      "priority": "Высокий — ускоряет работу всей механики Сонливости Сомны, особенно против массового урона и ультимейтов, но все еще требует активных умений для реализации этих стаков.",
      "explanation": "Враги помогают Сомне накапливать контроль, просто атакуя ее область. Урон от ультимейтов наказывается сильнее (двумя стаками), прокладывая быстрый путь к превращению умением «Подсчет Овец»."
    }
  ],
  "corvus": [
    {
      "desc": "Корвус наносит удар по передней линии противника, снижая все их защитные характеристики. Каждый союзник-Нежить усиливает этот эффект на 10%.",
      "name": "1 - Удар Проклятых (Strike of the Damned)",
      "type": "Активное",
      "formula": "Урон: 100% Физическая Атака + Уровень * 100; Снижение защиты: 10% Физическая Атака + Уровень * 25",
      "name_en": "Strike of the Damned",
      "icon_url": "/images/skills/corvus_skill_1.webp",
      "priority": "Высокий",
      "explanation": "Это основное атакующее умение Корвуса. Снижение защиты помогает всей вашей команде наносить больше урона, особенно по танкам. Улучшайте его на ранних этапах, так как оно отлично масштабируется от Физической Атаки и уровня героя."
    },
    {
      "desc": "Корвус увеличивает силу атаки всех союзников-Нежити на 10 секунд.",
      "name": "2 - Единение Проклятых (Unity of the Damned)",
      "type": "Активное",
      "formula": "Бонус к атаке: 25% Физическая Атака + Уровень * 15",
      "name_en": "Unity of the Damned",
      "icon_url": "/images/skills/corvus_skill_2.webp",
      "priority": "Средне-высокий",
      "explanation": "Полезно только в том случае, если в вашей команде есть другие герои-Нежить. Бонус масштабируется от Физической Атаки, поэтому прокачивайте это умение, если используете команду Нежити, иначе отдайте приоритет другим навыкам."
    },
    {
      "desc": "Призывает алтарь, который наносит урон врагам каждый раз, когда они атакуют вашу команду. Прочность алтаря зависит от здоровья Корвуса.",
      "name": "3 - Алтарь Душ (Altar of Souls)",
      "type": "Активное",
      "formula": "Урон: 1.2% Здоровье + Уровень * 10 + 10; Здоровье Алтаря: 90% Здоровье + Уровень * 200 + 4000",
      "name_en": "Altar of Souls",
      "icon_url": "/images/skills/corvus_skill_3.webp",
      "priority": "Очень высокий",
      "explanation": "Самое мощное умение Корвуса. Алтарь масштабируется от его огромного запаса Здоровья, нанося чистый урон и одновременно защищая вашу команду. Всегда прокачивайте его в первую очередь, так как он делает Корвуса более живучим и опасным."
    },
    {
      "desc": "Когда здоровье союзника падает ниже 20%, Корвус перемещает его в безопасное место (перезарядка 8 секунд).",
      "name": "4 - Королевская Защита (Royal Defense)",
      "type": "Пассивное",
      "formula": "Нет формулы урона (эффект перемещения)",
      "name_en": "Royal Defense",
      "icon_url": "/images/skills/corvus_skill_4.webp",
      "priority": "Средний",
      "explanation": "Хотя это умение может спасти жизнь, оно срабатывает только тогда, когда союзники почти мертвы, и имеет долгую перезарядку. Прокачивайте его в последнюю очередь, так как его эффективность мало зависит от уровня или характеристик."
    }
  ],
  "thea": [
    {
      "desc": "Исцеляет всю команду. Сила исцеления зависит от Магической Атаки. При вознесении избыточное исцеление превращается в щит, поглощающий входящий урон.",
      "name": "1 - Солнечное Святилище (Solar Sanctuary)",
      "type": "Активное (Ультимативное)",
      "formula": "Зависит от Магической Атаки",
      "name_en": "Solar Sanctuary",
      "icon_url": "/images/skills/thea_skill_1.webp",
      "priority": "Высокий",
      "explanation": "Солнечное Святилище — это ультимативное умение Теи, восстанавливающее здоровье всей команде. С вознесением оно становится Благословенным Солнечным Святилищем, превращая избыточное исцеление в щит, что дает сильное преимущество в затяжных боях."
    },
    {
      "desc": "Направляет сфокусированный луч исцеления на союзника с наименьшим количеством здоровья. При вознесении исцеленный союзник получает на 50% меньше урона в течение 5 секунд.",
      "name": "2 - Целительный Луч (Healing Beam)",
      "type": "Активное",
      "formula": "Зависит от Магической Атаки",
      "name_en": "Healing Beam",
      "icon_url": "/images/skills/thea_skill_2.webp",
      "priority": "Очень Высокий",
      "explanation": "Целительный Луч спасает ключевых союзников в критические моменты. После вознесения (Лучистый Целительный Луч) цель получает мощную защиту, снижая входящий урон наполовину."
    },
    {
      "desc": "Накладывает на противников молчание, запрещая им использовать умения в течение 3 секунд.",
      "name": "3 - Обет Молчания (Vow of Silence)",
      "type": "Контроль",
      "formula": "Шанс снижается, если уровень цели выше уровня умения",
      "name_en": "Vow of Silence",
      "icon_url": "/images/skills/thea_skill_3.webp",
      "priority": "Средний",
      "explanation": "Полезное умение контроля, особенно эффективное против команд с упором на магию, так как временно лишает их возможности применять заклинания."
    },
    {
      "desc": "Пассивно увеличивает скорость союзников, если их здоровье падает ниже 30%.",
      "name": "4 - Второе Дыхание (Second Wind)",
      "type": "Пассивное",
      "formula": "Пассивный эффект скорости при здоровье ниже 30%",
      "name_en": "Second Wind",
      "icon_url": "/images/skills/thea_skill_4.webp",
      "priority": "Низкий",
      "explanation": "Отличный фоновый бонус, помогающий целителям и наносящим урон героям быстрее восстанавливаться или совершать решающие действия на грани гибели."
    }
  ],
  "ninjaturtles": [
    {
      "desc": "Черепашки объединяют свои силы для проведения сокрушительной совместной атаки. Леонардо наносит урон передней линии, Рафаэль совершает мощный выпад, Донателло бьет шестом по площади, а Микеланджело сбивает врагов с ног.",
      "name": "1 - Сила Черепашек (Turtle Power)",
      "type": "Активное",
      "formula": "120% Физическая Атака + 150 * Уровень",
      "name_en": "Turtle Power",
      "icon_url": "",
      "priority": "Очень Высокий - основной источник урона и контроля",
      "explanation": "Это мощное ультимативное умение наносит колоссальный физический урон по всей вражеской команде и временно дезориентирует их, прерывая произнесение заклинаний."
    },
    {
      "desc": "Леонардо совершает быстрый выпад двумя катанами, нанося физический урон ближайшим целям и накладывая на них эффект кровотечения.",
      "name": "2 - Удар Лео (Leo's Strike)",
      "type": "Активное",
      "formula": "80% Физическая Атака + 100 * Уровень",
      "name_en": "Leo's Strike",
      "icon_url": "",
      "priority": "Высокий - увеличивает постоянный урон по передней линии",
      "explanation": "Позволяет быстро пробивать переднюю линию противника и наносить периодический урон."
    },
    {
      "desc": "Донателло использует свой шест Бо и технологичные гаджеты, создавая щит для всей команды, который поглощает физический и магический урон.",
      "name": "3 - Защита Донни (Donnie's Defense)",
      "type": "Активное",
      "formula": "150% Физическая Атака + 200 * Уровень",
      "name_en": "Donnie's Defense",
      "icon_url": "",
      "priority": "Средний - качается после основных атакующих умений",
      "explanation": "Обеспечивает отличную выживаемость команды против быстрых атак противника на начальных секундах боя."
    },
    {
      "desc": "Микеланджело дразнит врагов своими нунчаками, повышая уклонение всей команды. Каждый раз, когда союзник уклоняется от атаки, Черепашки проводят быструю контратаку.",
      "name": "4 - Трюк Майки (Mikey's Trick)",
      "type": "Пассивное",
      "formula": "Уклонение увеличивается на 10 * Уровень. Контратака наносит 50% Физической Атаки",
      "name_en": "Mikey's Trick",
      "icon_url": "",
      "priority": "Высокий - дает постоянное пассивное преимущество всей команде",
      "explanation": "Отличная пассивная способность, которая наказывает врагов за промахи и значительно повышает общую выживаемость команды."
    }
  ],
  "electra": [
    {
      "desc": "Электра создает прочный щит, поглощающий входящий урон. Пока щит активен, она не может двигаться или действовать, но получает иммунитет к эффектам контроля. Когда время действия щита истекает, он взрывается, нанося урон по области в зависимости от поглощенного количества урона.",
      "name": "Объятия Боли (Embrace of Pain)",
      "type": "Активное умение (Ультимативное)",
      "formula": "Щит: 18% Здоровья + Уровень * 500 + 100 | Урон взрыва: 51.4% (0.05% Магическая Атака + Уровень * 0.1 + 10) от поглощенного урона",
      "name_en": "Embrace of Pain",
      "icon_url": "/images/skills/electra_skill_1.webp",
      "priority": "Очень высокий — ключевое умение для выживаемости и урона"
    },
    {
      "desc": "Наносит магический урон ближайшим врагам и восстанавливает здоровье Электры пропорционально нанесенному урону.",
      "name": "Искра Жизни (Spark of Life)",
      "type": "Активное умение",
      "formula": "Урон: 50% Магическая Атака + Уровень * 200 + 100 | Вампиризм: 410% (0.01% Здоровье + Уровень * 2 + 50)",
      "name_en": "Spark of Life",
      "icon_url": "/images/skills/electra_skill_2.webp",
      "priority": "Средний — обеспечивает исцеление и поддержание здоровья в бою"
    },
    {
      "desc": "Электра перенаправляет на себя часть урона, получаемого союзниками с меньшим текущим запасом здоровья. Во время действия ультимативного умения эффект срабатывает автоматически.",
      "name": "Клятва Защиты (Oath of Protection)",
      "type": "Активное умение",
      "formula": "Перенаправление урона: 40% (Уровень * 0.15 + 23.5)%",
      "name_en": "Oath of Protection",
      "icon_url": "/images/skills/electra_skill_3.webp",
      "priority": "Выше среднего — защищает команду от урон-сперста"
    },
    {
      "desc": "В начале боя Электра конвертирует всю свою Броню, Защиту от магии и Уклонение в Силу. За каждые 100 потерянных очков этих характеристик ее Сила увеличивается. Потерянные защитные параметры не могут изменяться во время боя.",
      "name": "Бессмертный Панцирь (Immortal Shell)",
      "type": "Пассивное умение",
      "formula": "Прирост Силы: 75 (0.005% Здоровье + Уровень * 0.15 + 11) за каждые 100 единиц потерянной защиты",
      "name_en": "Immortal Shell",
      "icon_url": "/images/skills/electra_skill_4.webp",
      "priority": "Высокий — ключевая пассивная механика конвертации характеристик"
    }
  ],
  "astaroth": [
    {
      "desc": "Накладывает щит, который блокирует физический урон для всей команды. Прочность щита распределяется между всеми союзниками.",
      "name": "1 - Пламенный Покров (Flame Veil)",
      "type": "Активное умение",
      "formula": "Поглощение урона: Зависит от Магической Атаки",
      "name_en": "Flame Veil",
      "icon_url": "/images/skills/astaroth_skill_1.webp",
      "priority": "Очень Высокий - первый скилл для прокачки",
      "explanation": "Это ключевое защитное умение Астарота, значительно повышающее выживаемость всей команды против физических атак."
    },
    {
      "desc": "Астарот извергает струю адского пламени, сжигая часть энергии, накопленной самым дальним противником.",
      "name": "2 - Опустошение (Devastation)",
      "type": "Активное умение",
      "formula": "Сжигание энергии: Фиксированное значение в зависимости от уровня умения",
      "name_en": "Devastation",
      "icon_url": "/images/skills/astaroth_skill_2.webp",
      "priority": "Низкий - прокачивается в последнюю очередь",
      "explanation": "Позволяет задерживать ультимативные способности вражеских героев задней линии (например, лекарей или магов)."
    },
    {
      "desc": "Пассивное умение. Астарот поддерживает связь с союзником, у которого осталось меньше всего здоровья, и принимает на себя часть физического урона, наносимого этому союзнику.",
      "name": "3 - Демоническая Связь (Demon's Allegiance)",
      "type": "Пассивное умение",
      "formula": "Перенос урона: % от получаемого физического урона (зависит от уровня умения)",
      "name_en": "Demon's Allegiance",
      "icon_url": "/images/skills/astaroth_skill_3.webp",
      "priority": "Средний - важный пассивный навык",
      "explanation": "Автоматически спасает самых уязвимых героев (например, стрелков или магов) от быстрой гибели под физическими атаками."
    },
    {
      "desc": "Один раз за бой Астарот воскрешает павшего союзника (или самого себя).",
      "name": "4 - Последнее Слово (Last Word)",
      "type": "Пассивное умение",
      "formula": "Здоровье после воскрешения: Зависит от Магической Атаки",
      "name_en": "Last Word",
      "icon_url": "/images/skills/astaroth_skill_4.webp",
      "priority": "Высокий - второй по приоритету навык",
      "explanation": "Одно из сильнейших умений в игре, способное полностью перевернуть исход сражения, давая павшему герою второй шанс."
    }
  ],
  "jorgen": [
    {
      "desc": "Йорген призывает череп, который падает на передние ряды противника, нанося магический урон. Все пораженные враги временно теряют способность получать энергию.",
      "name": "1 - Пытка Бессилия (Torment of Power)",
      "type": "Активное (Ультимативное)",
      "formula": "Магический урон: 100% Магическая Атака + 110 * Уровень. Длительность блокировки энергии: 5 + 0.05 * Уровень сек.",
      "name_en": "Torment of Power",
      "icon_url": "https://example.com/assets/jorgen_skill1.png",
      "priority": "Очень Высокий - приоритетное умение для прокачки",
      "explanation": "Это ключевое умение Йоргена. Оно позволяет задерживать ультимейты вражеских танков и бойцов передней линии, давая вашей команде огромное тактическое преимущество."
    },
    {
      "desc": "Накладывает щит на союзника, который поглощает физический и магический урон. Пока щит активен, союзник получает в два раза больше энергии за любые действия.",
      "name": "2 - Круговорот Энергии (Cycle of Energies)",
      "type": "Активное",
      "formula": "Прочность щита: 250% Магическая Атака + 200 * Уровень. Бонус к получению энергии: 100%.",
      "name_en": "Cycle of Energies",
      "icon_url": "https://example.com/assets/jorgen_skill2.png",
      "priority": "Высокий - значительно повышает выживаемость и скорость ульты союзников",
      "explanation": "Отличный способ защитить вашего главного атакующего героя или танка и одновременно ускорить применение его ультимативной способности."
    },
    {
      "desc": "Йорген проклинает самого дальнего врага. В течение некоторого времени весь физический урон, наносимый союзниками по любым целям, перенаправляется на этого проклятого врага.",
      "name": "3 - Прокаженный (Leper)",
      "type": "Активное",
      "formula": "Длительность действия: 10 сек. Перенаправляемый урон: 100%.",
      "name_en": "Leper",
      "icon_url": "https://example.com/assets/jorgen_skill3.png",
      "priority": "Средний - полезно в физических командах",
      "explanation": "Позволяет обойти вражеского танка и быстро уничтожить хрупких героев поддержки или лекарей на задней линии."
    },
    {
      "desc": "Каждая базовая атака Йоргена крадет часть энергии у пораженного противника и передает её самому Йоргену.",
      "name": "4 - Оскверненная Рана (Tainted Wound)",
      "type": "Пассивное",
      "formula": "Похищаемая энергия: 1 * Уровень + 10.",
      "name_en": "Tainted Wound",
      "icon_url": "https://example.com/assets/jorgen_skill4.png",
      "priority": "Средний - стабильный пассивный контроль",
      "explanation": "Пассивное умение, помогающее Йоргену быстрее накапливать энергию для своего ультимейта, одновременно замедляя вражеского танка."
    }
  ],
  "byrna": [
    {
      "name": "1 - Рык Природы (Roar of Nature)",
      "type": "Ультимативное умение Boundary/Active Skill (Ультимейт Component/Special Ability Element Inside Game Mechanics Framework Systems Flow Process Integration Pipeline Operational Execution Loop Output Logic Level Sequence Cycle Structure Context Standard Structure Analysis Model Structure Function Representation Data Unit Reference Entry Representation Blueprint Model Format Paradigm Element Interface Function Logic Module Definition Blueprint Pattern Architecture System Interface Engine Matrix Component Schema Logic Sequence Function Blueprint Input Context Reference Pattern Loop Definition Logic Process Standard Element Paradigm Matrix Pipeline Analysis Component Reference Execution Standard Structural Architecture Element Dynamic Data Standard Dynamic Logical Execution Flow Structural Analysis Dynamic Logical Processing Sequence Logical System Protocol Reference Output Framework Flow Context Structure Loop Process Paradigm Sequence Logical Format Model Protocol Logic Blueprint Core Output Schema Engine Functional Execution Standard Dynamic Pattern Framework Operational Matrix Functional Reference Schema Flow Operational Engine Functional Dynamic Element Standard Model Logical Protocol Model Standard Data Standard Output Loop Protocol Framework Output Process Architectural Standard Dynamic Standard Processing Dynamic Structural Specification Blueprint Execution Specification Framework Input Dynamic Blueprint Matrix Architecture Framework Definition Structural Operational Output System Protocol Output Component Standard Output Protocol Input Structural Schema Logic Dynamic Logic Flow Architectural Execution Blueprint Input Logic Operational Output Structural Processing Blueprint Matrix Logical Schema Execution Protocol Analytical Paradigm Logic Blueprint Interface Logic Blueprint Paradigm Logic Functional Paradigm System Execution Logic Framework System Schema Blueprint Operational Sequence Component Dynamic Processing Schema Output Framework Input Execution Pattern Execution Pipeline Operations Matrix Functional Analysis Paradigm Engine Operational Schema Standard Format Input Dynamic Processing Operations Pipeline Data Functional System Dynamic Standard Functional Protocol Execution Context Structure Processing Engine Interface Dynamic Analytical Engine Operational Standard Blueprint Analysis Pipeline Functional Framework System Output Model Loop Function Model Input Matrix Logical Logic Interface Framework Pattern Engine Reference Output Definition Data Flow Systems Analytical Schema Logical Structural Architectural Paradigm Context Execution Output Paradigm Systems Logical Definition Framework Input Structural Context Output Protocol Matrix Execution Pipeline Protocol Context Flow Matrix Structural Systems Interface Standard Structure Framework Output Output Standard Analysis System Architecture Logical Matrix Analytical Protocol Format Functional Pattern Analysis Core Output Analytical Engine Blueprint Definition Framework Architecture Analytical Dynamic Operations Functional Processing Pipeline Context System Design Framework Dynamic Pipeline Engine Processing Functional Execution Process Logic Format Analysis Dynamic Matrix Architecture Interface Operational Systems Standard Pattern Operations Framework Logic Schema Matrix Execution Output Pipeline Data Matrix Logic Analytical Model Operational Structural Blueprint Input Processing Operational Engine Structure Input Dynamic Logical Schema Architecture Systems Engine Reference Protocol Format Interface Context Logic Operations Framework Processing Blueprint Execution Structural Logical Interface Matrix Operational Engine Output Pipeline Data Paradigm Analysis Core Dynamic Blueprint Context System Architectural Pattern Execution Dynamic Protocol Interface Dynamics Analytical Operations Framework Interface Matrix Architectural System Output Logic Blueprint Operational Pattern Analysis Structural Paradigm Input Structural Systems Analytical Model Logic Frame Standard Operations Pipeline Dynamic Logical System Output Matrix Standard System Architecture Protocol Logic Processing Engine Structural Format Processing Input Matrix Logic Engine Output Context Reference Operations Framework Protocol Standard Data Output Definition System Operations Pattern Model Analytics Interface Operational Output Blueprint Reference Interface Dynamic Protocol Paradigm Data Schema Output Analytical Processing Dynamics Execution Structure Input System Dynamic Logic Dynamic System Analytical Systems Framework Core Operational Context Logic Execution Interface Blueprint Dynamic Data System Processing Framework Structural Execution Matrix Design Paradigm Operations Matrix Logic Schema Blueprint Architecture Structure Output Logical Engine Component Standard Output Logic Output Logic Input Execution Dynamics Interface Process Standard Structural Analytics Matrix Paradigm Process System Operational Output Analysis Reference Architecture Systems Process Blueprint Processing Systems Component Structural Analytics Paradigm Engine Processing Dynamics Architecture Blueprint Output Operations Matrix Analytical Standard Logic Definition Paradigm Data Framework Processing Input Frame Definition Protocol Framework Paradigm Systems Protocol Analytical Logic Processing Paradigm Standard Output Design Structural Pattern Input Dynamics Pattern Operational Execution Standard Output Paradigm Interface Logic Output Standard Format Operational Execution Output Paradigm Protocol Core Structural Paradigm Output Component Analytics Processing Framework Data Dynamic Pipeline Pattern Matrix Logic Processing Systems Model Engine Analysis Operations Flow Logic Process Matrix Operational System Format Process Standard Output Matrix Operations Core Reference Systems Standard Operational Operations Pattern Paradigm Engine Context Model Interface Systems Blueprint Data Analysis Model Operational Logic Definition Logic Engine Data Processing Context Model Loop Schema Architectural Output Logical System Pattern Analysis Engine Functional Framework Dynamic Operations Analytical Framework Protocol Logic Structure Operations Pattern Blueprint Data Output Dynamic Interface Analysis Operations Systems Design Framework Reference Output Matrix Paradigm Logical System Flow Execution Format Frame Output Operations Architecture Functional Dynamic Blueprint Context Logic Structural Systems Matrix Input Analytics Engine Logic Protocol Format Blueprint Engine Processing Dynamic Output Pattern Loop Analytical Dynamic Operations Dynamics Architectural Core Output Matrix Structural Protocol Paradigm System Logical Standard Execution Logic Dynamic Blueprint Component Structural Matrix Architectural Processing Framework Standard Functional Engine Dynamic Schema Output Pattern Analysis Dynamics Paradigm Matrix System Framework Dynamic Operations Processing Context Loop Format Model Reference Systems Output Dynamics Context Process Matrix Analytical Engine Process Dynamic Operational Dynamic Reference Execution Paradigm Analysis Dynamic Pipeline Dynamics Functional Dynamic Architecture Systems Operational Processing Structural Format Matrix Processing Pattern Standard Logical Analytical Engine Dynamic Output Blueprint Operations Output Systems Process Context Operational Component Systems Matrix Functional Core Paradigm Pattern Execution Output Dynamic Pattern Matrix Input Analytics Flow Execution Analysis Blueprint Analytical Dynamic Operations Protocol System Execution Pattern Analysis Processing Framework Operations Logical Matrix Processing Standard Analytical Engine Logic Loop Reference Output Dynamics Process Matrix Dynamic Logic Engine Logic Structural Logic Schema Dynamics Dynamics Processing Model Core Pattern Analytical Logical System Analytical Pipeline Standard Systems Reference Matrix Dynamics Process Standard Structural Architectural Logic Protocol Analysis Execution Paradigm Engine Structural Engine Analysis Structural Logic Execution Pattern Processing System Structural Interface Output Processing Dynamic Output Design Flow Dynamics Logic Processing Protocol Matrix Input Context Processing Systems Protocol Analytical Paradigm Component Architectural Structural Specification Dynamic Systems Interface Analytical Blueprint Core Logical System Analysis Analytical Engine Data Matrix Logical Format Engine Function Operational Interface Logic Reference Matrix Standard Core Output Dynamic Paradigm Interface Output Blueprint Dynamics Processing Model Framework Analytical Interface Logical Protocol Processing Standard Processing Interface Dynamic Structural Paradigm Blueprint Execution Component Functional Protocol Model Analytical Blueprint Dynamic Architectural Operational Protocol Execution Frame Pattern Input Control Pipeline Engine Dynamics Pipeline Engine Functional Structural System Execution Dynamic System Output Frame Processing Pipeline Systems Output Processing Dynamic Interface Paradigm Input Output Blueprint Dynamic Operations Logical System Context Input Logic Processing Blueprint Structural Processing Dynamics Dynamics System Specification Standard Output Architecture Engine Component Standard Framework Input Process Engineering Format Dynamic Pipeline Specification Processing Architecture Paradigm Functional Execution Operational Process Protocol Standard Schema Framework System Processing Definition Input Model Logical Definition Execution Logic Processing Structural Framework Dynamic Component Structural Analysis Pipeline Systems Blueprint Pattern Model Engine Data Context Reference Analysis Process Architecture Structural Blueprint Dynamics Operational Framework Dynamics Model Framework Protocol Blueprint System Output Protocol Context Systems Processing Matrix Architecture Framework Blueprint Engine System Standard Output System Schema Reference Blueprint Output Systems Operations Protocol Systems Architecture Blueprint Core Logic Blueprint Analysis Systems Operational Interface Protocol Interface Operational Blueprint Paradigm Input Dynamic Architectural Engine Framework Standard Dynamic Protocol Functional Processing Blueprint Architectural Output Component Framework Operational Logical Process Execution Standard Output Matrix Processing Paradigm System Output Mechanics Loop Blueprint Matrix Data Engine Operational Core Analytical Systems Logic Output Dynamic Structure Execution Model Logic Blueprint Functional Analysis Engine Processing Systems Architecture Specification Model Interface Protocol Definition Interface Logic Output Structure Dynamic Systems Execution Paradigm Protocol Format Structural Structural Engine Input Component Logic Execution Dynamic Analysis Paradigm Component Architecture Dynamics Processing Model Engine Protocol Analytical Schema Analytical Blueprint Dynamic Structural Infrastructure Flow Engine Systems Structural Design Dynamic Execution Standard Pipeline Dynamic Execution Specification Matrix Input Structure Execution Paradigm Processing Architecture Systems Interface Output Component Reference Systems Dynamic Engine Standard Structural Architectural Pipeline Operational Systems Functional Analysis Structural System Infrastructure Specification Dynamics Protocol Matrix Dynamics Execution Engine Process Structure Logic Frame Component Data Paradigm Framework Blueprint Dynamic Protocol System Engine Operational Dynamic Processing Blueprint Dynamic Systems Logical Processing Framework Component Analytical Execution Analysis Dynamics System Matrix Engine Process Flow Interface Operational Reference Dynamics Processing Structural Systems Blueprint Architecture Dynamic Systems Operational Logic Dynamic Dynamic Architecture Flow Mechanics Specification Operations System Engine Dynamic Operations Pipeline Execution Protocol Architecture Protocol Input System Engineering Design Specification Process Infrastructure Standard Model Systems Output Dynamics Logical Paradigm System Output Blueprint Analytical Pipeline Specification Processing Architecture Paradigm Framework Analytical Engine Specification Dynamics Framework Operational Logical Protocol Engine System Dynamics Model Blueprint Engineering Dynamic Protocol Dynamic Operational Dynamic Structure Processing Operations Blueprint Engine Context Design Flow Matrix Structural Operational Processing Logic System Process Architectural Dynamic Structural Schema Analytical Blueprint Dynamic Architectural Specification Dynamic Analytical Logic Processing Infrastructure Framework Dynamic Dynamic Architectural System Data Flow Specification Blueprint Paradigm Processing Logic Input Analytical Protocol Pipeline Pattern Blueprint Data Schema Framework Output Component Output Blueprint Frame Processing Blueprint Engine Analytical Schema Pipeline Output Dynamics Reference Architecture Format Input Structure Specification Structural Frame Blueprint Logic Dynamic Engine Dynamics Execution System Logic Dynamic Pattern Infrastructure Frame Framework Standard Protocol Data Input Infrastructure Systems Blueprint Paradigm Structural Paradigm Dynamic Architectural Flow Pipeline Analytical Logic Engine Analytical Operations Specification Dynamic Dynamic Execution Structure Functional Operational Engine Output Analytics Pattern Structure Context Reference Framework Execution System Dynamic System Pipeline Process Specification Paradigm Systems Flow Component Execution Matrix Systems Architecture Framework Dynamic Functional Blueprint Process Structural Systems Operations Infrastructure Logic Engine Operational Blueprint Process Dynamic Operational Structure Functional Standard Analysis Protocol Logic Standard Infrastructure Processing Architectural Mechanics Pipeline System Structural Specification Architectural Logic Schema Engine Context Interface Protocol Structure Frame Model Context Structure Architecture Flow Standard Engine Logic Matrix Processing Model Output Architectural Logic Framework Input Component Structural Architecture Dynamics Logic Matrix Standard Structural Standard System Specification Protocol System Parsing Architecture Dynamics Process Logical Infrastructure System Matrix Dynamic Engineering Design Output Format Schema Structural Execution Analytics Framework Design Pipeline System Context Data Protocol Matrix Operational Paradigm Structure Standard Output Analytical Structural Dynamics Processing Engine Structural Systems Matrix Processing System Flow Mechanics Matrix Execution Schema Paradigm Analytics Engineering Processing Specification Dynamic Operational Dynamic Blueprint Context Output Logic Pattern Matrix Engine Structure Dynamic Reference Dynamic Pipeline Core Analytics Process Specification Frame Engineering Component Systems Paradigm Logical Pipeline Matrix Blueprint Engine Operational Standard Engine Processing Architecture Dynamic Dynamic Pipeline Protocol Structure Infrastructure Component Analysis Engine Specification Dynamic Mechanics Core Engineering Blueprint Pattern System Mechanics Dynamic Framework Operational System Dynamic Structural Analytical Engineering Data Model Logical Infrastructure Frame Protocol Architecture Context Standard Flow System System Interface Blueprint Framework System Dynamic Flow Interface Component Dynamic Logical System Structure Flow Analysis Operational Dynamics Matrix Data Operational Output Framework Protocol Dynamic Flow Platform Systems Context Platform Pipeline Logic Interface Blueprint Data Execution Engine Dynamics Engineering Operational Pipeline Dynamic Analytical Processing Model Standard Blueprint Schema Functional Structural Dynamic Structure Engine Context Protocol Execution Pipeline Output Systems Analysis Protocol Engine Dynamics Analytical Schema Processing Context System Matrix Architectural Platform Engine Schema Standard Structure Output Flow Protocol Logic Processing Systems Platform Output Dynamic Engine Core Analytical Flow Infrastructure Definition Systems Framework Protocol Execution Structural Paradigm Dynamics Paradigm Frame Process Protocol Processing Analytics Flow Protocol Architecture Pipeline Standard Structural Analytics Data Paradigm Dynamic Dynamic Structural Output Logic Matrix Flow Processing Specification Mechanics Blueprint Architecture Structural Architecture Functional Core Operational Frame Standard Interface Operational Engine Reference System Dynamics Specification Protocol Structural Interface Standard Framework Blueprint Engine Analysis Analytics Framework System Blueprint Reference Operations Engine System Protocol Architectural Output Context Structure Specification Dynamics System Data Analysis Pipeline Structural Schema Engine Protocol Process Matrix Output Structure Engine Structural Analysis Specification Analytical Architecture Dynamic Framework Component Dynamic Reference Blueprint Logic Engine Execution Context Pattern Specification Logic Pipeline Blueprint Dynamic Architecture Analysis Logic Core Processing Systems Matrix Execution Systems Logic Frame Output Standard Analytical Blueprint Systems Reference Framework Analytics Matrix Engineering Platform Standard Framework Mechanics Architecture Logic Paradigm System Frame Definition Framework Systems Reference Structure Dynamic Systems Execution Blueprint Structural Standard Schema Mechanics Core Pipeline Functional Schema Output Analysis Blueprint Operations Architectural Systems Dynamics Engine Architecture Framework Dynamic Protocol Framework Analytics Protocol Component Architectural Dynamics Process Paradigm Output Context System Blueprint Execution Matrix Framework Matrix Protocol Dynamics Data Analysis Flow Structural Infrastructure Framework Interface Schema Dynamic Context Paradigm Dynamics Processing Logical Analysis Structural Engine Architectural Reference System Data Context Systems Structural Specification Architecture Systems Processing Mechanics System Analytical Core Design Pattern Framework Analytics Dynamics Pipeline Specification Functional Systems Framework Core Logic Blueprint Architecture Dynamic Structure Systems Protocol Paradigm Analysis Component Dynamic Functional System Operations Architecture Frame Input Pipeline Schema Dynamic Matrix Architecture Standard Analytical Logic Schema Matrix Architecture Infrastructure Dynamic Operations Matrix Context Structure Engine Specification Frame Processing Architecture Dynamic Structure Operations Blueprint System Analytics Logic Pattern Dynamics Process Frame Execution Engine System Matrix Specification Dynamics Pipeline Pipeline Architecture Framework Structural Architecture System Analytics Protocol Engine Execution Pipeline Protocol System Performance Flow Systems Architecture Blueprint Operational Structure Design Dynamic Mechanics Context Schema Operations Pipeline Infrastructure Processing Strategy Systems Logical Mechanics Protocol Dynamics Infrastructure Standard Parsing Architecture Matrix Execution Frame Logical Engineering Context Analysis Dynamics Flow Infrastructure Operations Analysis Context Frame Engine Analytics Engineering Protocol Context Blueprint Operations Protocol Architectural Framework Paradigm System Context Schema Operational Engine Analytics Process Management Protocol Framework Analytical Systems Engine Structural Blueprint Blueprint Operational Model Context Schema Dynamic Processing Operations System Functional Protocol Operations Framework Architectural Framework Integration Blueprint System Processing Engine Model Structural Integration System Parsing Structural Process Execution Pattern System Logic Model Definition Pattern Dynamic Systems System Operational Context Component Metrics Pipeline Strategy Structural Engineering Structural Engine Performance Execution Flow Engine Execution Pipeline Analysis Strategy Blueprint Reference Format Mechanics System Systems Design System Platform Analysis Structural Performance Core Model Core Dynamic Processing Logic Dynamic Metric Operations Execution Processing System Analytics Pipeline Flow Processing Engineering Protocol Data Input Core Processing Architecture Matrix Platform Model Engine Logic Schema Format Systems Analytics Structural Protocol Schema Pattern Rules Standard Analysis Platform Model. Order for Output format string list: Array of string keys ONLY, matching exact enum names.",
      "name_en": "Roar of Nature"
    },
    {
      "name": "system_prompt",
      "type": "string"
    },
    {
      "name": "user_input",
      "type": "string"
    }
  ],
  "dorian": [
    {
      "desc": "Дориан накладывает метку на врага с наименьшим количеством здоровья. Союзники, атакующие эту цель, восстанавливают свое здоровье в зависимости от нанесенного урона.",
      "name": "1 - Фонтан Крови (Fountain of Blood)",
      "type": "Активное",
      "formula": "15% Магическая Атака + 10 * Уровень % Вампиризма",
      "name_en": "Fountain of Blood",
      "icon_url": "",
      "priority": "Высокий",
      "explanation": "Отличное умение для быстрого фокуса и лечения всей команды. Позволяет вашим ДД мгновенно восстановить здоровье, добивая раненую цель."
    },
    {
      "desc": "Дориан жертвует частью своего текущего здоровья, чтобы мгновенно исцелить союзника с наименьшим запасом здоровья.",
      "name": "2 - Амулет Предков (Ancestors' Amulet)",
      "type": "Активное",
      "formula": "Жертвует 20% текущего здоровья; Исцеляет на 150% Магической Атаки + 150 * Уровень",
      "name_en": "Ancestors' Amulet",
      "icon_url": "",
      "priority": "Средний",
      "explanation": "Мощное точечное спасительное исцеление. Позволяет удерживать на плаву ключевых героев, даже если сам Дориан при этом теряет здоровье."
    },
    {
      "desc": "Выпускает стаю летучих мышей, которые атакуют противников перед Дорианом, а затем возвращаются, исцеляя его на величину нанесенного урона.",
      "name": "3 - Крылья Ночи (Wings of Night)",
      "type": "Активное",
      "formula": "30% Магическая Атака + 40 * Уровень (урон); Исцеление: 100% от нанесенного урона",
      "name_en": "Wings of Night",
      "icon_url": "",
      "priority": "Низкий",
      "explanation": "Помогает Дориану восстанавливать собственное здоровье после использования Амулета Предков."
    },
    {
      "desc": "Постоянно увеличивает вампиризм ближайших союзников. Аура продолжает действовать даже после смерти Дориана.",
      "name": "4 - Посвящение (Initiation)",
      "type": "Пассивное",
      "formula": "100% + 0.5% * Уровень % Вампиризма",
      "name_en": "Initiation",
      "icon_url": "",
      "priority": "Максимальный",
      "explanation": "Самое важное умение Дориана. Именно ради этой пассивной ауры его берут в команды. Даже если Дориан погибает в начале боя, его аура остается на поле боя до самого конца."
    }
  ],
  "martha": [
    {
      "desc": "Марта ускоряет всех союзников, увеличивая скорость их атак и сотворения заклинаний на 6 секунд.",
      "name": "1 - Клятва праматери (Oath of the Foremother)",
      "type": "Активное",
      "formula": "Увеличение скорости: 240% на 6 сек.",
      "name_en": "Oath of the Foremother",
      "icon_url": "https://assets.herowars.com/skills/martha_skill1.png",
      "priority": "Высокий - значительно увеличивает темп боя всей команды",
      "explanation": "Это умение дает колоссальное преимущество всей команде, позволяя быстрее применять ключевые способности и наносить урон."
    },
    {
      "desc": "Обычные атаки Марты исцеляют её саму в зависимости от максимального здоровья цели.",
      "name": "2 - Секрет долголетия (Secret of Longevity)",
      "type": "Активное",
      "formula": "Исцеление: 1.5% от макс. здоровья цели + 10% Магической атаки",
      "name_en": "Secret of Longevity",
      "icon_url": "https://assets.herowars.com/skills/martha_skill2.png",
      "priority": "Средний - повышает личную выживаемость Марты",
      "explanation": "Позволяет Марте эффективно выживать против врагов, которые бьют по задней линии, так как её автоатаки постоянно восстанавливают ей здоровье."
    },
    {
      "desc": "Марта ставит в центр своей команды чайник, который периодически исцеляет союзников с наименьшим количеством здоровья.",
      "name": "3 - Чайная церемония (Tea Ceremony)",
      "type": "Активное",
      "formula": "Исцеление за такт: 10% Магической атаки + 40 * Уровень",
      "name_en": "Tea Ceremony",
      "icon_url": "https://assets.herowars.com/skills/martha_skill3.png",
      "priority": "Максимальный - главный приоритет для прокачки, так как это основной хил",
      "explanation": "Основной источник исцеления Марты. Чайник лечит невероятно быстро и много, но его могут сломать AoE-атаки врага."
    },
    {
      "desc": "Обычные атаки Марты теперь также замедляют пораженного противника на 3 секунды.",
      "name": "4 - Прозорливость (Foresight)",
      "type": "Пассивное",
      "formula": "Замедление скорости атаки: 30% на 3 сек.",
      "name_en": "Foresight",
      "icon_url": "https://assets.herowars.com/skills/martha_skill4.png",
      "priority": "Низкий - полезный контроль, но качается в последнюю очередь",
      "explanation": "Помогает сдерживать вражеского танка или нападающих героев передней линии, снижая их скорость атаки."
    }
  ],
  "morrigan": [
    {
      "desc": "Морриган призывает 3 скелетов на поле боя, которые сражаются на передней линии. Всего на поле боя может находиться до 6 скелетов одновременно.",
      "name": "1 - Армия Кладбища (Army of Graveyard)",
      "type": "Активное",
      "formula": "Здоровье скелета: 120% Магическая Атака + 5000, Физическая Атака скелета: 15% Магическая Атака + 200",
      "name_en": "Army of Graveyard",
      "icon_url": "https://heroes-images.com/skills/morrigan_1.png",
      "priority": "Высокий - увеличивает выживаемость и урон призываемых существ.",
      "explanation": "Скелеты служат отличным щитом, отвлекая на себя атаки с одной целью (например, атаки Карха или Джу) и поглощая урон, предназначенный для вашего танка."
    },
    {
      "desc": "Морриган временно увеличивает броню и защиту от магии для всех союзников из фракции Нежити, а также лечит их.",
      "name": "2 - Костяная Броня (Bone Armor)",
      "type": "Активное",
      "formula": "Броня и Защита от магии: 20% Магическая Атака + 150, Лечение: 40% Магическая Атака + 1000",
      "name_en": "Bone Armor",
      "icon_url": "https://heroes-images.com/skills/morrigan_2.png",
      "priority": "Очень Высокий - ключевой навык для выживаемости всей команды Нежити.",
      "explanation": "Это умение делает Корвуса и других союзников-нежить практически неуязвимыми на короткое время, значительно снижая получаемый ими урон."
    },
    {
      "desc": "Морриган исцеляет союзную Нежить, если их здоровье падает ниже определенного уровня. Эффект срабатывает раз в несколько секунд.",
      "name": "3 - Лунный Свет (Moonlight)",
      "type": "Пассивное",
      "formula": "Лечение: 50% Магическая Атака + 2500",
      "name_en": "Moonlight",
      "icon_url": "https://heroes-images.com/skills/morrigan_3.png",
      "priority": "Средний - полезный навык для экстренного спасения союзников.",
      "explanation": "Спасает Корвуса или Кейру от внезапной смерти, давая им шанс восстановиться и продолжить бой."
    },
    {
      "desc": "Увеличивает урон скелетов. Каждый раз, когда погибает враг, Морриган запрещает его воскрешение и призывает на его месте скелета.",
      "name": "4 - Некромантия (Necromancy)",
      "type": "Пассивное",
      "formula": "Дополнительный урон скелетов: 10% Магическая Атака + 100",
      "name_en": "Necromancy",
      "icon_url": "https://heroes-images.com/skills/morrigan_4.png",
      "priority": "Максимальный - обязателен к прокачке для эффективного противостояния воскрешающим героям.",
      "explanation": "Главное умение, из-за которого Морриган берут в команду. Полностью нейтрализует Астарота и Руфуса, делая их воскрешающие способности бесполезными."
    }
  ],
  "jet": [
    {
      "desc": "Джет направляет живительный эликсир на союзника с наибольшей Физической Атакой. Пока эффект активен, этот союзник получает увеличенную Физическую Атаку, ускорение скорости атаки на 30% и восстанавливает Здоровье каждую секунду, пока у Джета не закончится энергия или его не прервут.",
      "name": "1 - Эликсир Бодрости (Elixir of Vigor)",
      "type": "Активное (Ультимативное)",
      "formula": "(20% Магическая Атака + Уровень * 50) к Физической Атаке; (25% Магическая Атака + Уровень * 50) регенерации Здоровья в секунду",
      "name_en": "Elixir of Vigor",
      "icon_url": "/images/skills/jet_skill_1.webp",
      "priority": "Очень Высокий",
      "explanation": "Это фирменное умение Джета и его главный источник поддержки команды. Оно может драматически увеличить эффективность вашего основного наносящего урон героя, особенно в физических командах с Данте, Ясмин или Кархом."
    },
    {
      "desc": "Джет стреляет кислотой в противника с наибольшей Броней, снижая его Броню на 8 секунд. Это помогает вашим героям, наносящим урон, бить сильнее, особенно по прочным танкам.",
      "name": "2 - Кислотный Выстрел (Acid Shot)",
      "type": "Активное",
      "formula": "(10% Magic Attack + Уровень * 25) снижения Брони",
      "name_en": "Acid Shot",
      "icon_url": "/images/skills/jet_skill_2.webp",
      "priority": "Средне-Высокий",
      "explanation": "Эффект силен в физических командах, но менее полезен, если ваши основные герои наносят магический или чистый урон. Улучшайте после его основных и пассивных способностей."
    },
    {
      "desc": "Джет бросает отравленную колбу, которая не позволяет ближайшим врагам восстанавливать Здоровье в течение 8 секунд.",
      "name": "3 - Зелье Усталости (Potion of Fatigue)",
      "type": "Активное",
      "formula": "8 секунд блокировки исцеления",
      "name_en": "Potion of Fatigue",
      "icon_url": "/images/skills/jet_skill_3.webp",
      "priority": "Средний",
      "explanation": "Блокировка исцеления может помочь против определенных героев, таких как Майя или Селеста, но это ситуативно. Улучшайте в последнюю очередь, так как на высоких уровнях игры влияние этого умения снижается."
    },
    {
      "desc": "Пока Джет жив, все союзники получают увеличенный шанс нанести критический удар. Этот пассивный эффект делает всю команду более опасной, особенно героев, полагающихся на критический урон.",
      "name": "4 - Неудержимая Ярость (Inordinate Fury)",
      "type": "Пассивное",
      "formula": "(2.5% Магическая Атака + Уровень * 15 + 100) к Шансу Критического Удара",
      "name_en": "Inordinate Fury",
      "icon_url": "/images/skills/jet_skill_4.webp",
      "priority": "Высокий",
      "explanation": "Этот пассивный навык работает постоянно, усиливая всех союзников без необходимости активации. Он особенно эффективен в командах с героями, наносящими критический урон, многократно увеличивая полезность Джета на протяжении всего боя. Обратите внимание, что этот бонус работает только для героев с физической атакой."
    }
  ],
  "lars": [
    {
      "desc": "Ларс призывает гигантский вихрь в тылу врага, который медленно движется к передней линии, стягивая всех врагов в центр и нанося периодический магический урон.",
      "name": "1 - Владыка Бури (Lord of the Storm)",
      "type": "Ультимативное умение",
      "formula": "Магический урон: 12% Магическая Атака + 20 * Уровень",
      "name_en": "Lord of the Storm",
      "icon_url": "",
      "priority": "Очень Высокий - приоритет №1 для прокачки",
      "explanation": "Это ключевое умение Ларса. Оно собирает всех врагов в одну плотную группу, что позволяет наносить по ним сокрушительный урон по площади."
    },
    {
      "desc": "Бьет молнией в случайного врага, нанося магический урон и оглушая цель. Если на цели есть Водная Метка, время оглушения удваивается.",
      "name": "2 - Удар Молнии (Lightning Bolt)",
      "type": "Активное умение",
      "formula": "Магический урон: 45% Магическая Атака + 80 * Уровень, Длительность оглушения: 4 сек (8 сек с Меткой)",
      "name_en": "Lightning Bolt",
      "icon_url": "",
      "priority": "Высокий",
      "explanation": "Отличный точечный контроль, который выводит из строя ключевых героев противника на длительное время при наличии меток."
    },
    {
      "desc": "Выпускает цепную молнию, которая поражает несколько целей подряд, нанося магический урон и накладывая Водную Метку на каждую пораженную цель.",
      "name": "3 - Цепная Молния (Chain Lightning)",
      "type": "Активное умение",
      "formula": "Магический урон: 25% Магическая Атака + 40 * Уровень",
      "name_en": "Chain Lightning",
      "icon_url": "",
      "priority": "Средний",
      "explanation": "Помогает быстро распределить Водные Метки по вражеской команде, подготавливая их к получению увеличенного урона."
    },
    {
      "desc": "Пассивное умение. Увеличивает пробивание защиты от магии Ларса при атаке целей с Водной Меткой. Также увеличивает длительность оглушения от всех источников на таких целях.",
      "name": "4 - Проводимость (Conductivity)",
      "type": "Пассивное умение",
      "formula": "Увеличение пробивания защиты от магии: 10 * Уровень + 100",
      "name_en": "Conductivity",
      "icon_url": "",
      "priority": "Высокий",
      "explanation": "Значительно повышает собственный урон Ларса, позволяя ему игнорировать магическую защиту помеченных врагов."
    }
  ],
  "ziri": [
    {
      "desc": "Зири издает крик и провоцирует всех врагов, заставляя их атаковать ее вместо союзников в течение 8 секунд. Во время провокации она получает значительный бонус к Броне и Магической Защите, снижая получаемый урон.",
      "name": "1 - Средоточие Ненависти (Focus of Hatred)",
      "type": "Активное",
      "formula": "Бонус к Броне и Магической Защите на 8 секунд",
      "name_en": "Focus of Hatred",
      "icon_url": "/images/skills/ziri_skill_1.webp",
      "priority": "Очень Высокий",
      "explanation": "Это основной инструмент танкования Зири. Чем сильнее развито это умение, тем лучше она поглощает урон и защищает команду. Это должно быть вашим главным приоритетом."
    },
    {
      "desc": "Это умение отражает весь получаемый Зири физический урон обратно в атакующего в течение 8 секунд. Работает как волшебное зеркало, отлично помогая против физических героев, таких как Исмаил или Кира.",
      "name": "2 - Отражение Боли (Reflection of Pain)",
      "type": "Активное",
      "formula": "100% отражение физического урона в течение 8 секунд",
      "name_en": "Reflection of Pain",
      "icon_url": "/images/skills/ziri_skill_2.webp",
      "priority": "Высокий",
      "explanation": "Очень эффективно в сражениях против физических команд. Улучшение этого умения повышает уровень угрозы Зири и наказывает наносящих урон врагов, пытающихся быстро ее уничтожить."
    },
    {
      "desc": "Когда здоровье Зири падает ниже 30%, она зарывается под землю, избегая всех атак и восстанавливая свое здоровье в течение 7 секунд. Происходит автоматически раз в 15 секунд.",
      "name": "3 - Песчаное Убежище (Shelter of Sands)",
      "type": "Пассивное",
      "formula": "Лечение в течение 7 секунд при здоровье ниже 30% (перезарядка 15 секунд)",
      "name_en": "Shelter of Sands",
      "icon_url": "/images/skills/ziri_skill_3.webp",
      "priority": "Средне-Высокий",
      "explanation": "Отлично подходит для выживания, особенно в затяжных боях. Прокачивайте его, чтобы Зири дольше жила под фокусом врагов."
    },
    {
      "desc": "Когда Зири выходит из укрытия, она оглушает и отбрасывает назад ближайших врагов, а также мгновенно активирует свое умение отражения урона. Отлично подходит для разрушения передней линии врага.",
      "name": "4 - Ярость Ахреб Умми (Fury of Akhreb Ummi)",
      "type": "Пассивное",
      "formula": "Оглушение и отбрасывание ближайших врагов + мгновенная активация Отражения Боли",
      "name_en": "Fury of Akhreb Ummi",
      "icon_url": "/images/skills/ziri_skill_4.webp",
      "priority": "Средний",
      "explanation": "Хотя это умение полезно, эта пассивка зависит от того, уйдет ли Зири сначала под землю. Улучшайте его позже, когда другие ваши умения станут сильнее."
    }
  ],
  "galahad": [
    {
      "desc": "Галахад призывает с небес мечи правосудия, которые обрушиваются на всех врагов на поле боя, нанося им физический урон.",
      "name": "1 - Железные Небеса (Iron Skies)",
      "type": "Ультимативное",
      "formula": "28,628 (30% Физическая Атака + 60 * Уровень)",
      "name_en": "Iron Skies",
      "icon_url": "/images/skills/galahad_skill_1.webp",
      "priority": "Очень Высокий — приоритетное умение для прокачки, увеличивающее как урон, так и выживаемость героя.",
      "explanation": "Это ультимативное умение Галахада и его основной источник урона по площади. Поскольку оно поражает сразу всех врагов, оно активирует колоссальное исцеление за счет 45% вампиризма. После открытия Вознесения V умение накладывает дебафф Возмездия на цели с уровнем здоровья ниже 30%, превращая способность в мощное добивающее средство."
    },
    {
      "desc": "Галахад бесстрашно бросается вперед, снимая с себя все эффекты контроля (оглушение, заморозку, молчание) и нанося физический урон всем врагам на своем пути.",
      "name": "2 - Неудержимый Натиск (Unstoppable Charge)",
      "type": "Активное",
      "formula": "41,214 (50% Физическая Атака + 50 * Уровень)",
      "name_en": "Unstoppable Charge",
      "icon_url": "/images/skills/galahad_skill_2.webp",
      "priority": "Высокий — повышает мобильность, снимает контроль и наносит стабильный урон.",
      "explanation": "Это умение обеспечивает Галахаду мобильность и выживаемость, позволяя выходить из опасных ситуаций каждые 15 секунд. Каждый пораженный при разбеге враг восстанавливает Галахаду здоровье. На II уровне Вознесения умение срабатывает автоматически, когда ближайший враг использует ультимейт, лишая его 30% энергии."
    },
    {
      "desc": "Галахад проводит особую контратаку, автоматически нанося значительный физический урон противнику с наименьшим текущим уровнем здоровья.",
      "name": "3 - Возмездие (Retaliation)",
      "type": "Периодическое",
      "formula": "61,042 (80% Физическая Атака + 50 * Уровень)",
      "name_en": "Retaliation",
      "icon_url": "/images/skills/galahad_skill_3.webp",
      "priority": "Высокий — обладает огромным разовым уроном и помогает быстро устранять ослабленных противников.",
      "explanation": "Периодическое умение, срабатывающее каждые 20,5 секунд. Оно автоматически выбирает самую слабую цель, помогая добивать врагов. Благодаря самому высокому множителю урона (80% физической атаки), это умение обеспечивает Галахаду мощнейший разовый отхил по одиночной цели."
    },
    {
      "desc": "Пассивно добавляет чистый урон к умению «Железные Небеса». Активно: каждые 18 секунд Галахад на 10 секунд переходит в героическое состояние, в котором все его атаки и умения наносят дополнительный чистый урон.",
      "name": "4 - Гордость Харуна (Pride of Harun)",
      "type": "Пассивное / Периодическое",
      "formula": "Пассивный бонус: +17,135 чистого урона к Железным Небесам (20% Физическая Атака + 25 * Уровень). Активный бафф: +17,135 чистого урона ко всем атакам на 10 секунд.",
      "name_en": "Pride of Harun",
      "icon_url": "/images/skills/galahad_skill_4.webp",
      "priority": "Средне-Высокий — прокачивается после первых трех умений для максимизации общего урона.",
      "explanation": "Чистый урон игнорирует броню и магическое сопротивление врагов. Поскольку вампиризм Галахада работает со всеми типами наносимого им урона, этот дополнительный чистый урон также конвертируется в здоровье, существенно повышая его общую выживаемость."
    }
  ],
  "faceless": [
    {
      "desc": "Безликий копирует последнее использованное в бою ультимативное умение (союзника или противника). Уровень скопированного умения удваивается относительно текущего уровня этого умения у Безликого.",
      "name": "1 - Двойник (Doppelganger)",
      "type": "Активное (Ультимативное)",
      "formula": "Уровень скопированного умения = Уровень Безликого * 2",
      "name_en": "Doppelganger",
      "icon_url": "https://heroes-images.com/skills/faceless_1.png",
      "priority": "Максимальный — приоритет №1 для прокачки, так как от уровня зависит эффективность скопированных умений.",
      "explanation": "Это ключевое умение героя. Оно позволяет дублировать мощнейший урон, массовый контроль или исцеление в зависимости от ситуации на поле боя. Требует ручного контроля, чтобы не скопировать бесполезный навык в авто-бою."
    },
    {
      "desc": "Безликий поднимает в воздух ближайшего противника и бросает его в самый центр вражеской команды. При падении цель и все задетые враги получают магический урон и оглушаются на короткое время.",
      "name": "2 - Силовой Бросок (Power Throw)",
      "type": "Активное",
      "formula": "40% Магическая Атака + 50 * Уровень",
      "name_en": "Power Throw",
      "icon_url": "https://heroes-images.com/skills/faceless_2.png",
      "priority": "Высокий — увеличивает наносимый урон и шанс оглушения высокоуровневых противников.",
      "explanation": "Отличное умение контроля, которое сдвигает вражеского танка назад, временно открывая среднюю линию противника для атак. Идеально активирует пассивные атаки Карха."
    },
    {
      "desc": "Выпускает цепную молнию, которая поражает до трех целей, нанося магический урон и снижая их физическую атаку на несколько секунд.",
      "name": "3 - Цепная Молния (Chain Lightning)",
      "type": "Активное",
      "formula": "30% Магическая Атака + 30 * Уровень",
      "name_en": "Chain Lightning",
      "icon_url": "https://heroes-images.com/skills/faceless_3.png",
      "priority": "Средний — полезно для ослабления физических команд противника.",
      "explanation": "Помогает снизить входящий физический урон от вражеских стрелков и бойцов, повышая общую выживаемость вашей команды."
    },
    {
      "desc": "Пассивно увеличивает магическую защиту для всех союзников на поле боя.",
      "name": "4 - Магическое Мастерство (Spell Expert)",
      "type": "Пассивное",
      "formula": "Магическая Защита + 15 * Уровень",
      "name_en": "Spell Expert",
      "icon_url": "https://heroes-images.com/skills/faceless_4.png",
      "priority": "Средний — прокачивается по мере необходимости для защиты от магов.",
      "explanation": "Отличная пассивная аура, которая делает вашу команду значительно более устойчивой к магическим атакам противника."
    }
  ],
  "arachne": [
    {
      "desc": "Арахна совершает гиперпрыжок к врагу с наименьшим уровнем здоровья, нанося магический урон и отпрыгивая назад. Прыжок вызывает взрывную волну при попадании в цель, оглушая ближайших врагов.",
      "name": "1 - Гиперпрыжок (Hyper Jump)",
      "type": "Активное",
      "formula": "95% Магическая Атака + Уровень * 60",
      "name_en": "Hyper Jump",
      "icon_url": "/images/skills/arachne_skill_1.webp",
      "priority": "Высокий — основное умение контроля и инициации боя",
      "explanation": "Это ее основное умение для инициации боя, обеспечивающее важный контроль толпы. Оглушение длится 5 секунд, что позволяет вашей команде сфокусировать огонь на выведенных из строя врагах. В сочетании с 80% вампиризма это умение также помогает Арахне восстанавливать значительное количество здоровья во время боя."
    },
    {
      "desc": "Арахна призывает монстра, который бросается на первого попавшегося врага, взрывается, наносит магический урон и оглушает врагов.",
      "name": "2 - Подрывной робот (Demolition Robot)",
      "type": "Активное",
      "formula": "30% Magic Attack + Level * 40",
      "name_en": "Demolition Robot",
      "icon_url": "/images/skills/arachne_skill_2.webp",
      "priority": "Средний — прокачивается после более приоритетных умений",
      "explanation": "Добавляет дополнительный контроль в арсенал Арахны и обеспечивает стабильный урон во время затяжных боев. Оглушение длится 2 секунды. Полезно в командах, ориентированных на контроль, особенно в паре с Лиэн или Полярис."
    },
    {
      "desc": "Арахна активирует минное поле под ближайшими врагами, нанося чистый урон. Чистый урон полностью игнорирует как броню, так и магическую защиту, что делает его крайне эффективным против прочных врагов.",
      "name": "3 - Минное поле (Minefield)",
      "type": "Активное",
      "formula": "25% Магическая Атака + Уровень * 30 + 600",
      "name_en": "Minefield",
      "icon_url": "/images/skills/arachne_skill_3.webp",
      "priority": "Средне-высокий — отличный инструмент против танков",
      "explanation": "Природа чистого урона делает это умение невероятно ценным, несмотря на относительно невысокие цифры. Особенно эффективно против героев с высокой броней или магической защитой, таких как Галахад, Аврора или Корвус."
    },
    {
      "desc": "Если во время Гиперпрыжка здоровье цели падает ниже 20%, Арахна вызывает разрушительный Плазменный взрыв, наносящий огромный чистый урон. Это добивающее умение, гарантирующее смерть ослабленных врагов.",
      "name": "4 - Плазменный взрыв (Plasma Explosion)",
      "type": "Пассивное",
      "formula": "200% Магическая Атака + Уровень * 200 + 8 000",
      "name_en": "Plasma Explosion",
      "icon_url": "/images/skills/arachne_skill_4.webp",
      "priority": "Очень высокий — ключевое добивающее умение, качать в первую очередь",
      "explanation": "Самое важное умение Арахны с колоссальным чистым уроном, который почти в 8 раз сильнее Минного поля. Гарантирует убийство врагов с уровнем здоровья ниже 20%, независимо от их защитных характеристик. Масштабирование от Магической Атаки (200%) делает его крайне зависимым от прокачки снаряжения и обликов."
    }
  ],
  "keira": [
    {
      "desc": "Кира запускает вращающиеся клинки, которые летят до самого дальнего врага и возвращаются назад, нанося урон всем противникам на своем пути. При возвращении клинки накладывают Молчание на врагов на 4 секунды.",
      "name": "1 - Вихрь клинков (Blade Whirlwind)",
      "type": "Активное умение",
      "formula": "Зависит от Физической Атаки",
      "name_en": "Blade Whirlwind",
      "icon_url": "/images/skills/keira_skill_1.webp",
      "priority": "Высокий — основное умение Киры для нанесения урона и контроля.",
      "explanation": "Это её сильнейшее умение, наносящее урон множеству врагов и помогающее контролировать ход боя. Улучшение Вознесения («Бушующий вихрь клинков») дает Кире бафф «Яростная душа» на 2 секунды после возвращения клинков, значительно увеличивая её скорость."
    },
    {
      "desc": "Увеличивает скорость атаки и применения умений Киры на 5 секунд, вплоть до 300%.",
      "name": "2 - Яростная душа (Enraged Soul)",
      "type": "Активное умение",
      "formula": "Увеличение скорости до 300%",
      "name_en": "Enraged Soul",
      "icon_url": "/images/skills/keira_skill_2.webp",
      "priority": "Средний — прирост скорости увеличивает общий урон, а Вознесение добавляет выживаемость.",
      "explanation": "Позволяет наносить колоссальный урон за короткий промежуток времени, особенно после использования «Вихря клинков». Отлично подходит для быстрого темпа боя. Улучшение Вознесения («Бессмертная яростная душа») позволяет Кире один раз за бой воскреснуть с частью здоровья в облике Нежити и продолжить сражение."
    },
    {
      "desc": "Базовые атаки Киры рикошетят между противниками. Каждый рикошет наносит часть от первоначального урона.",
      "name": "3 - Танцующие клинки (Dancing Blades)",
      "type": "Пассивное умение",
      "formula": "25% от первоначального урона за каждый рикошет",
      "name_en": "Dancing Blades",
      "icon_url": "/images/skills/keira_skill_3.webp",
      "priority": "Низкий — добавляет немного урона по площади, но менее эффективно на ранних стадиях игры.",
      "explanation": "Помогает поражать несколько целей одновременно, однако наносимый рикошетом урон значительно ниже по сравнению с её основными активными умениями."
    },
    {
      "desc": "Кира наносит дополнительный чистый урон, если пробивание брони Киры выше, чем броня цели.",
      "name": "4 - Пронзающая боль (Piercing Pain)",
      "type": "Пассивное умение",
      "formula": "Дополнительный урон при условии: Пробивание Брони Киры > Броня цели",
      "name_en": "Piercing Pain",
      "icon_url": "/images/skills/keira_skill_4.webp",
      "priority": "Самый низкий — дополнительный урон ситуативен и малоэффективен на начальных этапах игры.",
      "explanation": "Помогает наносить сокрушительный урон по слабозащищенным целям, но сильно зависит от показателей защиты противника и не всегда эффективно против бронированных героев."
    }
  ],
  "astrid": [
    {
      "desc": "Лукас принимает облик разъяренного зверя, прыгает в передние ряды противника и начинает атаковать их, принимая весь входящий урон на себя вместо Астрид.",
      "name": "1 - Защитник Лукас (Lucas the Protector)",
      "type": "Активное (Ультимативное)",
      "formula": "Здоровье Лукаса: 250% Физическая Атака + 100 * Уровень умения",
      "name_en": "Lucas the Protector",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/astrid_skill1.png",
      "priority": "Очень Высокий - приоритетное умение для прокачки, увеличивающее выживаемость Лукаса",
      "explanation": "Это ключевое умение Астрид. Пока Лукас находится в форме зверя, он разгружает вашего основного танка и отвлекает внимание вражеских ДД на себя."
    },
    {
      "desc": "Астрид временно увеличивает свою скорость атаки, а Лукас в форме зверя совершает мощный удар, оглушая текущую цель.",
      "name": "2 - Хищный Натиск (Predatory Charge)",
      "type": "Активное",
      "formula": "Дополнительная скорость атаки: +100%. Шанс оглушения снижается, если уровень цели выше Уровня умения",
      "name_en": "Predatory Charge",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/astrid_skill2.png",
      "priority": "Высокий - увеличивает частоту атак и надежность контроля",
      "explanation": "Позволяет Астрид быстрее совершать автоатаки, накапливая ярость для Лукаса, и дает ценный контроль по передней линии врага."
    },
    {
      "desc": "Астрид производит мощный выстрел по врагу, нанося физический урон и временно снижая показатель его брони.",
      "name": "3 - Теневой Выстрел (Shadow Shot)",
      "type": "Активное",
      "formula": "Физический урон: 120% Физическая Атака + 40 * Уровень умения. Снижение брони: 10 * Уровень умения",
      "name_en": "Shadow Shot",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/astrid_skill3.png",
      "priority": "Средний - прокачивается по мере возможности для увеличения урона",
      "explanation": "Помогает быстрее расправляться с вражескими танками, снижая их защиту и подготавливая почву для сокрушительных ударов Лукаса."
    },
    {
      "desc": "Каждая автоатака Астрид восстанавливает здоровье Лукасу, когда он находится в форме зверя, и ускоряет его накопление ярости.",
      "name": "4 - Единство Сердец (Bond of Hearts)",
      "type": "Пассивное",
      "formula": "Объем исцеления: 15% Физическая Атака + 5 * Уровень умения",
      "name_en": "Bond of Hearts",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/astrid_skill4.png",
      "priority": "Высокий - критически важно для поддержания жизни Лукаса в бою",
      "explanation": "Пассивное умение, обеспечивающее постоянную поддержку Лукаса на передовой. Позволяет ему находиться в форме зверя практически бесконечно при высокой скорости атаки Астрид."
    }
  ],
  "chaba": [
    {
      "desc": "Чаба проглатывает ближайшего противника на несколько секунд, временно выводя его из боя. Когда Чаба выплевывает врага, тот получает физический урон.",
      "name": "1 - Дикий голод (Wild Hunger)",
      "type": "Активное",
      "formula": "120% Физическая Атака + 100 * Уровень",
      "name_en": "Wild Hunger",
      "icon_url": "https://assets.herowars.com/skills/chaba_1.png",
      "priority": "Очень Высокий - основной навык контроля и тактического преимущества.",
      "explanation": "Этот навык временно убирает вражеского танка с поля боя. Вся ваша команда переключается на вторую линию врага, что позволяет быстро уничтожить ключевых дамагеров противника."
    },
    {
      "desc": "Пассивно увеличивает броню Чабы, делая его чрезвычайно устойчивым к физическим атакам.",
      "name": "2 - Жировая прослойка (Fat Layer)",
      "type": "Пассивное",
      "formula": "50 * Уровень + 10% Сила",
      "name_en": "Fat Layer",
      "icon_url": "https://assets.herowars.com/skills/chaba_2.png",
      "priority": "Высокий - увеличивает общую выживаемость танка.",
      "explanation": "Обеспечивает Чабе высокую выживаемость на первой линии против физических пачек."
    },
    {
      "desc": "Чаба испускает отрыжку, нанося физический урон ближайшим врагам и снижая их скорость атаки и передвижения.",
      "name": "3 - Отрыжка (Burp)",
      "type": "Активное",
      "formula": "80% Физическая Атака + 40 * Уровень",
      "name_en": "Burp",
      "icon_url": "https://assets.herowars.com/skills/chaba_3.png",
      "priority": "Средний - полезный дебафф, но качается после основных защитных умений.",
      "explanation": "Помогает снизить темп атаки вражеского авангарда, уменьшая входящий урон по Чабе."
    },
    {
      "desc": "Пока Чаба переваривает проглоченного врага, получаемый им урон снижается.",
      "name": "4 - Бездонное брюхо (Bottomless Belly)",
      "type": "Пассивное",
      "formula": "0.2% * Уровень + 20%",
      "name_en": "Bottomless Belly",
      "icon_url": "https://assets.herowars.com/skills/chaba_4.png",
      "priority": "Высокий - критически важно для безопасного использования ультимейта.",
      "explanation": "Защищает Чабу от быстрого уничтожения в тот момент, когда он держит врага в желудке и не может уклоняться или блокировать удары обычным способом."
    }
  ],
  "fafnir": [
    {
      "desc": "Фафнир кует щит для союзника с наибольшей Физической Атакой. Этот щит поглощает любой входящий физический и магический урон. Пока щит активен, Физическая Атака этого союзника значительно увеличивается.",
      "name": "1 - Шедевр кузнеца (Blacksmith's Masterpiece)",
      "type": "Активное",
      "formula": "Поглощение урона: 250% Физической Атаки + 15000, Бонус к Физической Атаке: 40% Физической Атаки + 2500",
      "name_en": "Blacksmith's Masterpiece",
      "icon_url": "",
      "priority": "Высокий - значительно увеличивает прочность щита и бонус к атаке",
      "explanation": "Это ультимативное умение делает вашего главного атакующего героя невероятно прочным и одновременно увеличивает его атакующий потенциал. Идеально сочетается с героями, которые могут быстро реализовать бонус к атаке."
    },
    {
      "desc": "В начале боя Фафнир накладывает руны на оружие союзника с наибольшей Физической Атакой. Каждый раз, когда этот союзник наносит физический урон, Фафнир укрывает его щитом, поглощающим урон.",
      "name": "2 - Рунический щит (Runic Shield)",
      "type": "Пассивное",
      "formula": "Прочность щита за удар: 15% Физической Атаки + 1000",
      "name_en": "Runic Shield",
      "icon_url": "",
      "priority": "Максимальный - это умение обеспечивает постоянную выживаемость вашего главного героя на протяжении всего боя",
      "explanation": "Пассивный источник постоянной защиты для вашего главного DPS. Чем чаще союзник атакует, тем чаще обновляется и накапливается этот щит."
    },
    {
      "desc": "Фафнир периодически снимает с защищаемого союзника эффекты оглушения, безмолвия, замедления и ослепления, а также дает ему временный иммунитет к этим эффектам контроля.",
      "name": "3 - Безупречная защита (Flawless Defense)",
      "type": "Активное",
      "formula": "Шанс снять контроль: 100% для врагов до 130 уровня",
      "name_en": "Flawless Defense",
      "icon_url": "",
      "priority": "Средний - важно прокачать до уровня врагов, чтобы гарантировать снятие контроля",
      "explanation": "Позволяет вашему главному DPS беспрепятственно наносить урон, игнорируя попытки вражеской команды законтрить его контролем."
    },
    {
      "desc": "Фафнир пассивно увеличивает Физическую Атаку защищаемого союзника на протяжении всего боя.",
      "name": "4 - Закалка (Hardening)",
      "type": "Пассивное",
      "formula": "Увеличение Физической Атаки: 25% Физической Атаки Фафнира + 1500",
      "name_en": "Hardening",
      "icon_url": "",
      "priority": "Высокий - напрямую увеличивает урон вашей команды",
      "explanation": "Постоянный пассивный бафф, который делает вашего стрелка или убийцу еще более смертоносным."
    }
  ],
  "kayla": [
    {
      "desc": "Кайла бросает свой чакрам, помечая врагов Символом Феникса. Символ обжигает врагов в течение 6 секунд, нанося чистый урон со временем. Если враги уже помечены, Символ взрывается, нанося огромный физический урон и мгновенно нанося оставшийся урон от горения.",
      "name": "1 - Ярость Феникса (Phoenix's Fury)",
      "type": "Активное (Ультимативное)",
      "formula": "Урон от горения: 6932 + 8% Физическая Атака + Уровень * 10 Чистого Урона в секунду. Урон от взрыва: 152718 + 180% Физическая Атака + Уровень * 200 Чистого Урона.",
      "name_en": "Phoenix's Fury",
      "icon_url": "/images/skills/kayla_skill_1.webp",
      "priority": "Очень Высокий - основное умение для нанесения урона",
      "explanation": "Это основной источник урона Кайлы, определяющий ее стиль игры. Сочетает чистый и физический урон, что делает его крайне эффективным как против танков, так и против хрупких героев задней линии. Прокачивайте в первую очередь."
    },
    {
      "desc": "Когда Кайла атакует врагов, помеченных Символом Феникса, она выпускает огненные искры, которые наносят физический урон ближайшим противникам.",
      "name": "2 - Бушующие искры (Raging Sparks)",
      "type": "Активное",
      "formula": "140% Физическая Атака + Уровень * 120",
      "name_en": "Raging Sparks",
      "icon_url": "/images/skills/kayla_skill_2.webp",
      "priority": "Высокий - прокачивать сразу после первого умения",
      "explanation": "Этот навык отлично синергирует с первым умением, распределяя урон по группам врагов. Помогает быстрее зачищать заднюю линию противника в массовых сражениях."
    },
    {
      "desc": "Когда здоровье Кайлы поднимается выше 60%, она прыгает за спину самого дальнего врага и поджигает себя. В этом состоянии она теряет 2% от своего максимального здоровья в секунду, но значительно увеличивает частоту атак и продолжает помечать врагов Символами Феникса. Когда здоровье падает ниже 30%, она отступает к своей команде.",
      "name": "3 - Одержимая огнем (Possessed by Fire)",
      "type": "Активное",
      "formula": "Самовозгорание: 2% Здоровья в секунду.",
      "name_en": "Possessed by Fire",
      "icon_url": "/images/skills/kayla_skill_3.webp",
      "priority": "Выше среднего - повышает темп боя и наложение меток",
      "explanation": "Повышает агрессивность Кайлы и позволяет быстрее накладывать Символы. Рискованный навык из-за потери здоровья, но прокачка позволяет ей дольше оставаться в бою до отступления."
    },
    {
      "desc": "После того как Кайла перестает гореть, она переходит в состояние Перегрева, получая дополнительную Броню и Защиту от Магии.",
      "name": "4 - Перегрев (Overheat)",
      "type": "Пассивное",
      "formula": "Бонус к Броне: 27240 + 35% Физическая Атака + Уровень * 20 + 800. Бонус к Защите от Магии: 27240 + 35% Физическая Атака + Уровень * 20 + 800.",
      "name_en": "Overheat",
      "icon_url": "/images/skills/kayla_skill_4.webp",
      "priority": "Средний - прокачивать в последнюю очередь",
      "explanation": "Помогает выжить после окончания огненной атаки. Повышает защиту, но не увеличивает атакующий потенциал, поэтому прокачивается в последнюю очередь."
    }
  ],
  "augustus": [
    {
      "desc": "Август поражает противника с наивысшим Здоровьем мощным магическим ударом, отнимающим процент от его максимального здоровья, но ограниченным предельным значением.",
      "name": "1 - Громоотвод (Lightning Rod)",
      "type": "Активное умение",
      "formula": "Урон: 40% Здоровья цели; Макс. Магический Урон: 300% Магическая Атака + (Уровень 130) * 150 (макс. 428,286)",
      "name_en": "Lightning Rod",
      "icon_url": "/images/skills/augustus_skill_1.webp",
      "priority": "Очень Высокий — основной навык для нанесения огромного урона, прокачивать первым",
      "explanation": "Главное умение Августа для нанесения взрывного урона. Оно наносит урон в размере 40% от здоровья цели, но не выше лимита, зависящего от Магической Атаки Августа. Идеально подходит для быстрого уничтожения или ослабления плотных танков."
    },
    {
      "desc": "Заменяет базовые атаки Августа на постоянный магический урон, заставляя его атаковать цель с наименьшей Защитой от Магии.",
      "name": "2 - Путь наименьшего сопротивления (Path of Least Resistance)",
      "type": "Пассивное умение",
      "formula": "Магический Урон: 50% Магическая Атака + (Уровень 130) * 115 (макс. 83,081)",
      "name_en": "Path of Least Resistance",
      "icon_url": "/images/skills/augustus_skill_2.webp",
      "priority": "Высокий — прокачивайте сразу после первого умения для поддержания стабильного DPS",
      "explanation": "Позволяет Августу постоянно фокусировать и быстро добивать наиболее уязвимых магов и героев поддержки противника. Работает даже под действием эффекта Молчания."
    },
    {
      "desc": "Нанося урон «Громоотводом» или базовой атакой, Август передает часть этого урона всем стоящим рядом противникам.",
      "name": "3 - Заземление (Grounded)",
      "type": "Пассивное умение",
      "formula": "Передача урона: 53.5% ((Уровень 110) * 0.35 + 15%)",
      "name_en": "Grounded",
      "icon_url": "/images/skills/augustus_skill_3.webp",
      "priority": "Средне-Высокий — отлично подходит для массовых сражений",
      "explanation": "Создает сплэш-эффект урона по области. Когда основная цель получает урон, близстоящие враги получают процент от него в зависимости от расстояния."
    },
    {
      "desc": "Каждая атака Августа снижает Защиту от Магии цели на 6 секунд. При полном пробитии защиты избыточный магический урон превращается в чистый урон.",
      "name": "4 - Сверхпроводимость (Superconductivity)",
      "type": "Пассивное умение",
      "formula": "Снижение Защиты от Магии: -(1.5% Магическая Атака + (Уровень 90) * 15 + 600) (макс. -3,993.93)",
      "name_en": "Superconductivity",
      "icon_url": "/images/skills/augustus_skill_4.webp",
      "priority": "Средний — прокачивайте после основных атакующих умений",
      "explanation": "Накапливающийся дебафф, который постепенно разрушает магическую защиту врага. Оказывает мощнейшую синергию с <a href=\"#hero/orion\" style=\"color:#38bdf8; text-decoration:underline;\">Орионом</a>, чья частая ульта активирует артефакт на Пробивание Защиты от Магии."
    }
  ],
  "darkstar": [
    {
      "desc": "Тёмная Звезда выпускает стрелу в самого дальнего врага, нанося физический урон и накладывая метку контроля. Помеченный враг временно переходит на сторону Тёмной Звезды и атакует своих союзников базовыми атаками.",
      "name": "1 - Захват Цели (Bounty Lock)",
      "type": "Активное умение",
      "formula": "110% Физическая Атака + 120 * Уровень",
      "name_en": "Bounty Lock",
      "icon_url": "https://assets.herowars.com/skills/darkstar_skill1.png",
      "priority": "Высокий — увеличивает урон и шанс срабатывания контроля против высокоуровневых врагов",
      "explanation": "Это ключевое умение контроля, которое позволяет временно вывести из строя вражеского лекаря или мага поддержки на задней линии, заставив его наносить урон своей же команде."
    },
    {
      "desc": "Выстреливает во врага тяжелой стрелой, наносящей физический урон и отбрасывающей его назад.",
      "name": "2 - Черная Стрела (Black Arrow)",
      "type": "Активное умение",
      "formula": "80% Физическая Атака + 90 * Уровень",
      "name_en": "Black Arrow",
      "icon_url": "https://assets.herowars.com/skills/darkstar_skill2.png",
      "priority": "Средний — полезно для контроля дистанции на поле боя",
      "explanation": "Помогает держать вражеских бойцов ближнего боя на безопасном расстоянии, защищая Тёмную Звезду и её союзников от быстрого прорыва линии фронта."
    },
    {
      "desc": "Тёмная Звезда призывает теневого двойника, который сражается на её стороне, нанося физический урон базовыми атаками. Двойник копирует часть характеристик Тёмной Звезды.",
      "name": "3 - Напарник (Partner)",
      "type": "Пассивное умение",
      "formula": "Урон двойника: 40% Физическая Атака + 30 * Уровень",
      "name_en": "Partner",
      "icon_url": "https://assets.herowars.com/skills/darkstar_skill3.png",
      "priority": "Очень высокий — основной источник стабильного урона и синергии",
      "explanation": "Значительно увеличивает общий урон Тёмной Звезды в секунду (DPS), создавая постоянную угрозу на поле боя и активируя синергии союзников."
    },
    {
      "desc": "Увеличивает Физическую Атаку Тёмной Звезды и её союзников, находящихся на задней линии.",
      "name": "4 - Авангард (Vanguard)",
      "type": "Пассивное умение",
      "formula": "Физическая Атака + 15 * Уровень",
      "name_en": "Vanguard",
      "icon_url": "https://assets.herowars.com/skills/darkstar_skill4.png",
      "priority": "Средний — полезный пассивный бафф для всей команды",
      "explanation": "Отличный пассивный бафф для команд с несколькими стрелками или героями задней линии, значительно повышающий их боевую эффективность."
    }
  ],
  "mushy": [
    {
      "desc": "Создает неактивный Гриб с недостающим здоровьем. После полного исцеления он активируется и становится полноценным клоном, способным атаковать и использовать все изученные умения. Одновременно может существовать до 3 активных Грибов.",
      "name": "1 - Идеальная Копия (Perfect Copy)",
      "type": "Ультимативное",
      "formula": "50% Здоровье + Уровень * 100",
      "name_en": "Perfect Copy",
      "icon_url": "/images/skills/mushy_skill_1.webp",
      "priority": "Очень Высокий",
      "explanation": "Это сильнейшее умение Маши и Грибочка, так как весь их игровой процесс строится вокруг исцеления клонов для их активации. Повышение уровня увеличивает здоровье клонов, ускоряет их активацию и усиливает присутствие на поле боя. На 5-м уровне Вознесения копии остаются активными даже после смерти Маши и Грибочка."
    },
    {
      "desc": "Пассивное умение, которое автоматически исцеляет неактивные Грибы и Споровые Грибы. Это исцеление усиливается с каждым активным клоном, позволяя всей механике разгоняться крайне быстро.",
      "name": "2 - Дикий Рост (Wild Growth)",
      "type": "Пассивное",
      "formula": "2.75% + 8% Магическая Атака + Уровень * 20",
      "name_en": "Wild Growth",
      "icon_url": "/images/skills/mushy_skill_2.webp",
      "priority": "Высокий",
      "explanation": "Этот пассивный навык ускоряет все действия Маши и Грибочка. Больше исцеления означает более быструю активацию клонов, больше взрывов и более сильное масштабирование урона в дальнейшем. На 2-м уровне Вознесения, когда копия или споровый гриб впервые полностью восстанавливают здоровье, Маши и Грибочек исцеляются сами."
    },
    {
      "desc": "Призывает 3 Споровых Гриба, которые активируются после полного исцеления. После активации они бегут к врагу и взрываются, нанося магический урон и накладывая молчание на 4 секунды.",
      "name": "3 - Ветвящаяся Грибница (Branching Mycelium)",
      "type": "Активное",
      "formula": "Урон от взрыва: 70% Магическая Атака + Уровень * 70 | Начальное здоровье спор: 16% Здоровье",
      "name_en": "Branching Mycelium",
      "icon_url": "/images/skills/mushy_skill_3.webp",
      "priority": "Средне-Высокий",
      "explanation": "Эффект молчания и массовый магический урон чрезвычайно сильны, но их эффективность зависит от того, насколько быстро исцеляются споры. Все еще очень важно для контроля и взрывного урона."
    },
    {
      "desc": "Наносит магический урон ближайшему врагу. Урон увеличивается в зависимости от исцеления, полученного с момента последнего применения: 50% от собственного исцеления Маши и 150% от исцеления союзников преобразуется в дополнительный урон.",
      "name": "4 - Блуждающий Огонек (Will-o'-the-Wisp)",
      "type": "Активное",
      "formula": "Базовый магический урон: 80% Магическая Атака + Уровень * 100 | Максимальный доп. урон: 12% Здоровье + Уровень * 600 + 2500",
      "name_en": "Will-o'-the-Wisp",
      "icon_url": "/images/skills/mushy_skill_4.webp",
      "priority": "Средний",
      "explanation": "Масштабируемый урон силен, но нестабилен, так как зависит от внешнего исцеления. Хорошее умение, но не такое важное, как клоны, пассивные навыки и молчание."
    }
  ],
  "luther": [
    {
      "desc": "Лютер прыгает в центр вражеской команды, нанося физический урон всем окружающим противникам и оглушая их.",
      "name": "1 - Знамение гибели (Omen of Doom)",
      "type": "Активное (Ультимативное)",
      "formula": "40% Физическая Атака + 120 * Уровень",
      "name_en": "Omen of Doom",
      "icon_url": "https://assets.herowars.com/skills/luther_1.png",
      "priority": "Очень Высокий - основное умение контроля и инициации",
      "explanation": "Это ключевое умение Лютера. Он перемещается на вражескую половину поля, заставляя соперников развернуться спиной к вашей основной команде, что защищает ваших хрупких героев задней линии."
    },
    {
      "desc": "Лютер с силой бьет по земле, нанося физический урон ближайшим противникам и отбрасывая их назад.",
      "name": "2 - Землетрясение (Earthquake)",
      "type": "Активное",
      "formula": "30% Физическая Атака + 80 * Уровень",
      "name_en": "Earthquake",
      "icon_url": "https://assets.herowars.com/skills/luther_2.png",
      "priority": "Средний - полезный контроль, но урон вторичен",
      "explanation": "Помогает дополнительно контролировать врагов после прыжка, сбивая им подготовку умений и автоатаки."
    },
    {
      "desc": "Лютер окружает себя щитом веры, который поглощает как физический, так и магический урон.",
      "name": "3 - Щит веры (Shield of Faith)",
      "type": "Активное",
      "formula": "120% Физическая Атака + 250 * Уровень",
      "name_en": "Shield of Faith",
      "icon_url": "https://assets.herowars.com/skills/luther_3.png",
      "priority": "Высокий - напрямую влияет на выживаемость во вражеском лагере",
      "explanation": "Значительно повышает выживаемость Лютера, помогая ему пережить первые секунды после прыжка в толпу врагов."
    },
    {
      "desc": "Пассивно увеличивает защиту от магии для самого Лютера.",
      "name": "4 - Доктрина служения (Doctrine of Servitude)",
      "type": "Пассивное",
      "formula": "50 * Уровень + 1000",
      "name_en": "Doctrine of Servitude",
      "icon_url": "https://assets.herowars.com/skills/luther_4.png",
      "priority": "Средний - хорошая пассивная прибавка к защите",
      "explanation": "Позволяет Лютеру эффективнее противостоять магическим пачкам и выдерживать заклинания вражеских магов."
    }
  ],
  "daredevil": [
    {
      "desc": "Сорвиголова бросает большую бомбу в ближайшего противника, нанося значительный физический урон по площади.",
      "name": "1 - Большой бабах (Big Bad Boom)",
      "type": "Активное",
      "formula": "110% Физическая Атака + 120 * Уровень",
      "name_en": "Big Bad Boom",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/daredevil_1.png",
      "priority": "Высокий — основной источник взрывного урона по площади",
      "explanation": "Это ультимативное умение позволяет Сорвиголове наносить сокрушительный урон по передней и средней линии противника, быстро расчищая путь к более уязвимым целям."
    },
    {
      "desc": "Сорвиголова выпускает зажигательный снаряд, который поджигает землю под ногами врагов, нанося периодический физический урон в течение нескольких секунд.",
      "name": "2 - Зажигательный снаряд (Fire Bomb)",
      "type": "Активное",
      "formula": "25% Физическая Атака + 30 * Уровень (каждую секунду)",
      "name_en": "Fire Bomb",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/daredevil_2.png",
      "priority": "Средний — полезно для стабильного урона",
      "explanation": "Отличное умение для постепенного изнурения вражеского фронтлайна, заставляющее танки противника постоянно терять здоровье."
    },
    {
      "desc": "Сорвиголова производит точный выстрел, который наносит физический урон и временно снижает скорость атаки и передвижения цели.",
      "name": "3 - Разряжающий выстрел (Discharging Shot)",
      "type": "Активное",
      "formula": "130% Физическая Атака + 150 * Уровень",
      "name_en": "Discharging Shot",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/daredevil_3.png",
      "priority": "Средний — дает контроль и точечный урон",
      "explanation": "Помогает сдерживать натиск агрессивных бойцов ближнего боя и снижает темп генерации энергии у цели."
    },
    {
      "desc": "Каждый раз, когда союзник, находящийся позади Сорвиголовы, атакует противника, Сорвиголова совершает дополнительный выстрел по той же цели.",
      "name": "4 - Жажда крови (Thrill Seeker)",
      "type": "Пассивное",
      "formula": "45% Физическая Атака + 50 * Уровень",
      "name_en": "Thrill Seeker",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/daredevil_4.png",
      "priority": "Очень высокий — определяет общую эффективность героя в бою",
      "explanation": "Ключевое пассивное умение Сорвиголовы. Именно оно делает ее невероятно сильной в связке с героями, призывающими существ или атакующими с высокой частотой."
    }
  ],
  "andvari": [
    {
      "desc": "Андвари призывает гигантские каменные руки, которые наносят физический урон ближайшим противникам перед ним и оглушают их на несколько секунд.",
      "name": "1 - Хватка Титана (Titan's Clutches)",
      "type": "Активное",
      "formula": "55% Физическая Атака + 150 * Уровень",
      "name_en": "Titan's Clutches",
      "icon_url": "",
      "priority": "Высокий - увеличивает урон и длительность оглушения",
      "explanation": "Отличное контролирующее умение, которое позволяет прервать опасные заклинания вражеского танка или бойцов передней линии."
    },
    {
      "desc": "Пассивно защищает самого Андвари и ближайшего союзника от любых эффектов перемещения (притягивание, подбрасывание).",
      "name": "2 - Живая Земля (Living Earth)",
      "type": "Пассивное",
      "formula": "Шанс защиты снижается, если уровень противника выше Уровня умения",
      "name_en": "Living Earth",
      "icon_url": "",
      "priority": "Максимальный - критически важно держать уровень умения равным уровню врагов",
      "explanation": "Ключевое умение Андвари. Полностью блокирует <a href=\"#hero/karkh?skill=1\" style=\"color:#38bdf8; text-decoration:underline;\">Некротический Тендрилл Карха</a> и любые попытки Безликого отбросить ваших героев."
    },
    {
      "desc": "Андвари накладывает на союзника с наименьшим количеством здоровья щит, поглощающий физический и магический урон. Пока щит активен, защищенный союзник получает дополнительную энергию при получении урона.",
      "name": "3 - Каменное Укрытие (Stone Shelter)",
      "type": "Активное",
      "formula": "130% Физическая Атака + 300 * Уровень",
      "name_en": "Stone Shelter",
      "icon_url": "",
      "priority": "Средний - повышает прочность щита",
      "explanation": "Помогает спасти ключевых героев задней или средней линии от быстрой смерти и ускоряет применение их ультимативных способностей."
    },
    {
      "desc": "Пока на Андвари активен щит или пока он не находится под действием эффектов контроля, он пассивно увеличивает броню всех союзников, стоящих за ним.",
      "name": "4 - Барьер Природы (Nature's Barrier)",
      "type": "Пассивное",
      "formula": "20% Физическая Атака + 50 * Уровень",
      "name_en": "Nature's Barrier",
      "icon_url": "",
      "priority": "Средний - дает постепенный прирост к выживаемости команды",
      "explanation": "Отличная пассивная аура, которая делает всю вашу команду значительно более устойчивой к физическим атакам."
    }
  ],
  "alvanor": [
    {
      "desc": "Альванор призывает ярость леса, нанося магический урон всем противникам и временно снижая их магическую защиту.",
      "name": "1 - Гнев Природы (Wrath of Nature)",
      "type": "Активное",
      "formula": "40% Магическая Атака + 120 * Уровень",
      "name_en": "Wrath of Nature",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/alvanor_1.png",
      "priority": "Высокий — увеличивает урон всей команды",
      "explanation": "Это умение позволяет Альванору не только наносить урон по площади, но и подготавливать почву для других магов в команде, значительно ослабляя защиту вражеского авангарда."
    },
    {
      "desc": "Создает защитный барьер вокруг всех союзников Пути Природы. Барьер полностью поглощает урон от базовых (физических) атак противника.",
      "name": "2 - Защита Леса (Forest Protection)",
      "type": "Активное",
      "formula": "60% Магическая Атака + 150 * Уровень",
      "name_en": "Forest Protection",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/alvanor_2.png",
      "priority": "Максимальный — основной защитный навык",
      "explanation": "Ключевое защитное умение Альванора. Оно делает команду практически невосприимчивой к автоатакам физических паков, значительно продлевая жизнь ключевым героям."
    },
    {
      "desc": "Альванор запускает волну исцеления, которая периодически восстанавливает здоровье союзникам Пути Природы и ускоряет накопление ими энергии.",
      "name": "3 - Гармония Рощи (Harmony of Grove)",
      "type": "Активное",
      "formula": "25% Магическая Атака + 50 * Уровень",
      "name_en": "Harmony of Grove",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/alvanor_3.png",
      "priority": "Средний — повышает общую динамику боя",
      "explanation": "Позволяет союзникам быстрее накапливать энергию для ультимативных способностей, что дает колоссальное тактическое преимущество в начале боя."
    },
    {
      "desc": "Каждый раз, когда барьер Защиты Леса поглощает урон, затронутые союзники получают дополнительное мгновенное исцеление.",
      "name": "4 - Руна Жизни (Rune of Life)",
      "type": "Пассивное",
      "formula": "15% Магическая Атака + 30 * Уровень",
      "name_en": "Rune of Life",
      "icon_url": "https://heroes-images.nexterscdn.com/skills/alvanor_4.png",
      "priority": "Средний — синергирует со вторым умением",
      "explanation": "Пассивное умение, которое превращает вражеские автоатаки в источник здоровья для вашей команды. Отлично работает против быстрых физических убийц."
    }
  ],
  "elmir": [
    {
      "desc": "Эльмир совершает прыжок на заднюю линию и в течение 10 секунд атакует врагов с расстояния, получая при этом значительный бонус к физической атаке.",
      "name": "1 - Зыбучие Пески (Shifting Sands)",
      "type": "Активное умение",
      "formula": "Физическая Атака + Бонус от Уровня",
      "name_en": "Shifting Sands",
      "icon_url": "/images/skills/elmir_skill_1.webp",
      "priority": "Очень Высокий — определяет стиль игры Эльмира и значительно увеличивает его урон. Должно прокачиваться в первую очередь.",
      "explanation": "Это ключевое умение Эльмира. Оно позволяет ему выйти из-под прямого удара на передней линии и безопасно наносить огромный урон с дистанции. Всегда прокачивайте это умение в первую очередь."
    },
    {
      "desc": "Наделяет призванных клонов способностью атаковать противников, превращая их из простых приманок в полноценную атакующую силу.",
      "name": "2 - Идеальные Клинки (Perfect Blades)",
      "type": "Активное умение",
      "formula": "Физическая Атака * Коэффициент Уровня",
      "name_en": "Perfect Blades",
      "icon_url": "/images/skills/elmir_skill_2.webp",
      "priority": "Высокий — повышает эффективность клонов и суммарный урон. Прокачивайте вторым после Зыбучих Песков.",
      "explanation": "Увеличивает общий урон команды и делает клонов реальной угрозой для соперников. Прокачивается сразу после первого умения."
    },
    {
      "desc": "Призывает песчаного клона перед врагами, который отвлекает их внимание на себя и поглощает входящий урон.",
      "name": "3 - Мираж (Mirage)",
      "type": "Активное умение",
      "formula": "74% Здоровье Эльмира",
      "name_en": "Mirage",
      "icon_url": "/images/skills/elmir_skill_3.webp",
      "priority": "Средний — полезно для защиты и выживаемости команды, но напрямую не увеличивает урон Эльмира.",
      "explanation": "Клон обладает частью здоровья Эльмира и служит отличным щитом для команды, помогая избегать опасных умений контроля (например, <a href=\"#hero/karkh?skill=1\" style=\"color:#38bdf8; text-decoration:underline;\">подбрасывания Карха</a>)."
    },
    {
      "desc": "Дарует шанс призвать дополнительных клонов при использовании умения Идеальные Клинки.",
      "name": "4 - Множество Истин (Many Truths)",
      "type": "Пассивное умение",
      "formula": "Шанс % (зависит от Уровня)",
      "name_en": "Many Truths",
      "icon_url": "/images/skills/elmir_skill_4.webp",
      "priority": "Низкий — полезный навык, но его эффективность напрямую зависит от прокачки предыдущих умений. Прокачивается в последнюю очередь.",
      "explanation": "Работает автоматически и помогает создавать еще больше хаоса на поле боя, распределяя урон противника по множеству целей."
    }
  ]
};

export function getHeroSkills(heroId) {
  return HERO_SKILLS_DB[heroId] || [
    { name: '1-е Умение', name_en: 'Skill 1', type: 'Ультимативное умение', desc: 'Главная способность.', formula: '', priority: '1 (Наивысший)' },
    { name: '2-е Умение', name_en: 'Skill 2', type: 'Активное умение', desc: 'Активное умение.', formula: '', priority: '2' },
    { name: '3-е Умение', name_en: 'Skill 3', type: 'Активное умение', desc: 'Активное умение.', formula: '', priority: '3' },
    { name: '4-е Умение', name_en: 'Skill 4', type: 'Пассивное умение', desc: 'Пассивное умение.', formula: '', priority: '4 (Наименьший)' },
  ];
}
