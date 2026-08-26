/* ======================================================================
   HERO WARS — ТОЧНЫЕ ДАННЫЕ СКИЛЛОВ ИЗ Alexandre Games (Dominion Era)
   Автоматически обновлено: 2026-08-26T13:41:27.079Z
   ====================================================================== */

export const HERO_SKILLS_DB = {
  "electra": [
    {
      "name": "1- Embrace of Pain (Ultimate) (1- Embrace of Pain (Ultimate))",
      "name_en": "1- Embrace of Pain (Ultimate)",
      "type": "Ультимативное умение",
      "desc": "Умение персонажа Электра.",
      "formula": "Electra creates a щит that absorbs 246821 (18% Здоровье + Level x 500 + 100) урон for 10 seconds. While the щит is active, she cannot move or act but becomes immune to Контролёр effects. When the щит expires, it explodes and deals area урон based on how much it absorbed: 51,4% (0.050% Магическая Атака + 10.1) of the total absorbed урон. | Formula щит to herself that absorbs: (18% Здоровье + Level x 500 + 100) | Formula урон: 51,4% (0.050% Магическая Атака + level x 0.1 + 10) . | Приоритет прокачки: Очень Высокий – This is Electra’s most important skill because it provides both defense and offense. The щит prevents her from dying quickly and deals strong урон when it explodes, making it essential for both survivability and team protection.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/electra/embrace-of-pain.webp"
    },
    {
      "name": "Spark of Life (Spark of Life)",
      "name_en": "Spark of Life",
      "type": "Активное умение",
      "desc": "Deals 49.509(50% Магическая Атака + level x 200 +100) урон to nearby враги and restores her own Здоровье equal to 410 % (0.010% Здоровье + level x 2 + 50) of the урон dealt. This gives Electra a constant source of healing in combat, helping her stay alive while damaging opponents.",
      "formula": "Formula - урон: 44900 (50% Магическая Атака + level x 200 +100) | Formula - Вампиризм: 410%(0.010% Здоровье + level x 2 + 50) . | Приоритет прокачки: Средний – It provides урон and self-healing, allowing Electra to sustain herself in battle. Although not as impactful as her щит, it’s still crucial for her long-term survival and consistent output.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/electra/spark-of-life.webp"
    },
    {
      "name": "Oath of Protection (Oath of Protection)",
      "name_en": "Oath of Protection",
      "type": "Активное умение",
      "desc": "For 5 seconds, Electra redirects a portion of her союзники’ incoming урон to herself for any ally whose current Здоровье is lower than hers. During “Embrace of Pain,” this effect is automatically applied. The amount redirected depends on her skill level.",
      "formula": "Note: While Electra is using her ultimate Embrace of Pain , she automatically triggers Oath of Protection again. For 5 seconds, all союзники whose current Здоровье is lower than Electra's gain a protective effect that redirects 40% (Level x 0.15 + 23.5)% the урон they receive back to her. This means that during Embrace of Pain, Electra is effectively protecting the entire team a second time, doubling the value of her defensive utility. | Formula: Redirects 40% (Level x 0.15 + 23.5)% of урон from союзники to Electra . | Приоритет прокачки: Средний Высокий – Useful in team fights to protect союзники, but it can cause Electra to take too much урон if not timed correctly. Important for Танк-style builds but secondary to her щит and main урон skill.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/electra/oath-of-protection.webp"
    },
    {
      "name": "Immortal Shell (Immortal Shell)",
      "name_en": "Immortal Shell",
      "type": "Пассивное умение",
      "desc": "At the start of battle, Electra converts all her Броня, Защита от Магии, and Уклонение into Сила. Then, for every 100 points lost from these stats, her Сила increases by 75 (0.0050% Здоровье + level x 0.15 + 11) . Once converted, her defensive stats can’t change during the fight. At max level, Electra begins the battle with the following base stats before Immortal Shell activates: When Immortal Shell triggers, Electra converts all Броня + Защита от Магии + Уклонение into Сила . At this level, the total converted amount is: 19,557 (Броня) + 23,510 (Защита от Магии) = 43,067 total points converted For every 100 points lost, Electra gains 55.08 Сила . Final Сила gained: (43,067 ÷ 100) × 55.08 = 23,721 Сила Since Electra is a Сила-based hero, each point of Сила increases her Здоровье by +40 . Total Здоровье gained: 23,721 × 40 = +948,840 Здоровье Final Здоровье after transformation: 611,542 (base) + 948,840 = 1,560,382 Здоровье This massive conversion explains why Electra becomes much tankier the moment the battle starts, even before using Embrace of Pain or Oath of Protection.",
      "formula": "Formula: Сила = 75 (0.0050% Здоровье + level x 0.15 + 11) per 100 lost defense points.",
      "priority": "Высокий – This passive gives a solid Сила boost that improves her survivability and щит Сила, but its impact is less direct than her Ultimate skill. Upgrade after her main skill.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/electra/immortal-shell.webp"
    }
  ],
  "byrna": [
    {
      "name": "1 - Roar of Nature (Ultimate) (1 - Roar of Nature (Ultimate))",
      "name_en": "1 - Roar of Nature (Ultimate)",
      "type": "Ультимативное умение",
      "desc": "Roar of Nature is the skill that makes Byrna immediately scary in long battles. It deals 66,020 magic урон to all враги and heals союзники for 66,020 Здоровье . The easy part is the teamwide урон and teamwide исцеление. The more important part is that 100% of the healing is converted into max Здоровье increase until the end of battle , so every cast makes your whole team harder to kill. Skill Animation Info",
      "formula": "Formula - Magic урон: 66,020 (70% Магическая Атака + 100 x Level + 1,000) | Formula - Healing: 66,020 (70% Магическая Атака + 100 x Level + 1,000)",
      "priority": "Очень Высокий – This should be one of the first skills you care about because it does three important jobs at once: pressure, healing, and permanent max Здоровье growth for the team.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/byrna/roar-of-nature-icon.webp"
    },
    {
      "name": "2 - Guardian Spirit (2 - Guardian Spirit)",
      "name_en": "2 - Guardian Spirit",
      "type": "Активное умение",
      "desc": "Guardian Spirit is the skill that keeps Byrna’s frontline standing. She summons a spirit that binds to the front Танк if there is one, or to a random ally otherwise. The protected hero only takes 50% of incoming урон, while the rest is transferred to the spirit. The spirit itself starts with 428,260 Здоровье , and while it is alive, Byrna stops dealing normal attack урон and instead commands the spirit to strike for 51,158 magic урон . When the protected ally is healed, the spirit is also healed for 200% of that amount, which is why this skill becomes much stronger in sustain teams. Skill Animation Info",
      "formula": "Formula - Spirit Здоровье: 428,260 (400% Магическая Атака + 1000 x Level + 1,000) | Formula - Spirit урон: 51,158 (50% Магическая Атака + 100 x Level + 1,000)",
      "priority": "Высокий – This skill is central to Byrna’s identity because it protects the frontline and creates the healing loop that keeps the whole engine running. Upgrade it early after the core healing skills.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/byrna/guardian-spirit-icon.webp"
    },
    {
      "name": "3 - Bear Cuddle (3 - Bear Cuddle)",
      "name_en": "3 - Bear Cuddle",
      "type": "Активное умение",
      "desc": "Bear Cuddle is the skill that turns single-target healing into whole-team sustain. It places a 10-second effect on the front ally and heals them for 16,263 Здоровье per second . While the effect is active, every исцеление received by that ally sends a wave to nearby союзники and restores 50% of the original healing . If Guardian Spirit is active, Bear Cuddle automatically follows the spirit’s protected ally, which makes the combo much easier to use in practice. Skill Animation Info",
      "formula": "Formula - Healing per Second: 16,263 (20% Магическая Атака + 10 x Level + 100) | Formula - Healing Reverberation: 50% of the initial healing",
      "priority": "Очень Высокий – For beginners this is one of Byrna’s best upgrades because it makes team sustain easy to feel immediately. More healing here means more survival, more spread healing, and more Living Heart triggers later.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/byrna/bear-cuddle-icon.webp"
    },
    {
      "name": "4 - Living Heart (4 - Living Heart)",
      "name_en": "4 - Living Heart",
      "type": "Пассивное умение",
      "desc": "Living Heart is Byrna’s scaling passive. Every time any ally restores Здоровье, Byrna gains 554.2 Магическая Атака until the end of battle. This does not look explosive at first glance, but once Bear Cuddle, Guardian Spirit, pet healing, and allied healing are all happening together, the number of triggers can become Очень Высокий. The Cybernetic Skin adds 106,645 Здоровье , which adds about 53.3 extra Магическая Атака to every Living Heart trigger before other battle scaling. Skill Animation Info",
      "formula": "Formula - Increased Магическая Атака: 554.2 (0.05% Здоровье + 1 x Level + 10)",
      "priority": "Высокий for PvP – This passive becomes more important after Cybernetic Skin because every healing trigger gives more Магическая Атака. For early accounts, upgrade the active healing skills first; for PvP sustain teams, bring Living Heart up soon after Bear Cuddle and Roar of Nature.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/byrna/living-heart-icon.webp"
    }
  ],
  "fluffy": [
    {
      "name": "Deal with the Devil (Ultimate) (Deal with the Devil (Ultimate))",
      "name_en": "Deal with the Devil (Ultimate)",
      "type": "Ультимативное умение",
      "desc": "Deal with the Devil envelops all allied Heroes for 12 seconds . While active, союзники are immune to урон from enemy basic attacks and reflect it back to attackers. Skill Animation Info",
      "formula": "This ultimate is a double-edged sword: it grants incredible protection against auto-attack heavy teams. Time it wisely to maximize reflections and avoid exposing союзники to heavy burst урон. | Formula: (80% Магическая Атака + 200 * level ) — max reflected урон: 117,961 . | Приоритет прокачки: Очень Высокий – This is Fluffy's signature ability. The basic-attack immunity and reflect can completely shut down physical урон dealers. Upgrade first to extend duration and reduce the self-урон ratio.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/fluffy/deal-with-the-devil-icon.webp"
    },
    {
      "name": "To Hell and Back (To Hell and Back)",
      "name_en": "To Hell and Back",
      "type": "Активное умение",
      "desc": "Baalthazar protects his flock from death for 10 seconds . All союзники who die during this time will be resurrected when the effect ends. They restore some Здоровье, and their physical and Магическая Атака are increased until the end of the battle. This is essentially a team-wide \"second chance\" mechanic. Timing is crucial: activate it before a massive enemy burst or ultimate combo. Resurrected союзники come back stronger, turning potential defeats into aggressive counter-attacks. Skill Animation Info",
      "formula": "Formula: (исцеление: 200% Магическая Атака + 400 * level ) = 281,902 ; Attack buff: (20% Магическая Атака + 50 * level ) = 29,490 . | Приоритет прокачки: Высокий – The resurrection effect is game-changing. Upgrading increases the Здоровье restored and the attack buff given to resurrected союзники. Prioritize this second.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/fluffy/to-hell-and-back-icon.webp"
    },
    {
      "name": "Mark of Death (Mark of Death)",
      "name_en": "Mark of Death",
      "type": "Активное умение",
      "desc": "Fluffy puts Marks of Death on himself, increasing his magic Броня penetration . When Fluffy dies, the Marks explode, dealing урон to enemy Heroes for each Mark. Up to 10 Marks can be active at once. Skill Animation Info",
      "formula": "This passive turns Fluffy's death into a Оружие. The more Marks accumulated, the bigger the explosion. It synergizes with risky plays: sometimes letting Fluffy fall at the right moment can wipe out weakened враги. The Пробивание Защиты от Магии bonus also makes Fluffy's other урон more effective. | Formula: (урон per Mark: 65% Магическая Атака + 200 * level ) = 100,718 ; Magic Броня pen per Mark: (5% Магическая Атака + 5 * level + 100) = 6,498 .",
      "priority": "Средний – Useful for Пробивание Защиты от Магии and the death explosion, but less impactful than the protective abilities. Upgrade third.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/fluffy/mark-of-death-icon.webp"
    },
    {
      "name": "Usurpation (Usurpation)",
      "name_en": "Usurpation",
      "type": "Пассивное умение",
      "desc": "When an enemy uses an ultimate ability , Fluffy cancels it and deals урон to them. At the same time, Fluffy takes урон based on his maximum Здоровье . This ability can trigger once every 20 seconds . The chance to cancel an ultimate ability depends on the target's level. This is Fluffy's most disruptive skill. Canceling enemy ultimates can completely swing a fight. However, the self-урон and 20-second cooldown mean you can't rely on it constantly. Best against teams with devastating single-target or AoE ultimates. Skill Animation Info",
      "formula": "Formula: (урон to enemy: 50% Магическая Атака + 150 * level + 100) = 77,076 ; Self-урон: 20% of max Здоровье (scaling formula: 20% (-0.15 * level + 39.5)). | Приоритет прокачки: Высокий – Upgrading improves the cancel chance and урон dealt. Essential against ultimate-reliant враги. Upgrade alongside or after To Hell and Back.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/fluffy/usurpation-icon.webp"
    }
  ],
  "cascade": [
    {
      "name": "Hydrokinesis (Hydrokinesis)",
      "name_en": "Hydrokinesis",
      "type": "Ультимативное умение",
      "desc": "Cascade summons a heavy rain for 6 seconds, dealing Magic урон every second to all враги. While active, враги receive 50% reduced healing and cannot be resurrected .",
      "formula": "Formula: (15% Магическая Атака + 5850) per second → total of 24,515 Magic урон per tick over 6 seconds.",
      "priority": "Очень Высокий – Cascade’s most important skill. The healing reduction + resurrection block makes it essential versus strong Хилер teams.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/cascade/hydrokinesis.webp"
    },
    {
      "name": "Tidal Wave (Tidal Wave)",
      "name_en": "Tidal Wave",
      "type": "Активное умение",
      "desc": "Cascade turns into a massive wave, rushing through враги and scattering them. Deals Magic урон to all враги hit and disrupts their frontline and backline positioning.",
      "formula": "Formula: (45% Магическая Атака + 19,600) → deals 75,594 Magic урон at level 130. | Приоритет прокачки: Высокий – Strong урон + great disruption. Directly fuels Skill 3 (Refluence) for bonus урон.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/cascade/tidal-wave.webp"
    },
    {
      "name": "Refluence (Refluence)",
      "name_en": "Refluence",
      "type": "Активное умение",
      "desc": "враги hit by Tidal Wave receive the Water Mark for 5 seconds. Each time a marked enemy takes a magical hit, they suffer extra Magic урон .",
      "formula": "Formula: (12% Магическая Атака + 6,500) → causes 21,432 Magic урон per Water Mark trigger at level 130. | Приоритет прокачки: Средний–Высокий – Amazing in Маг-based teams. Weak if your team uses mostly physical урон.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/cascade/refluence.webp"
    },
    {
      "name": "Elemental Surge (Elemental Surge)",
      "name_en": "Elemental Surge",
      "type": "Пассивное умение",
      "desc": "Boosts all союзники whose main stat is Интеллект. Their basic attacks deal bonus Magic урон based on their own Магическая Атака. Heroes who do NOT receive this bonus: Celeste and Satori , since their basic attacks are already magical. Mages with physical basic attacks (Lars, Krista, Faceless, Mojo) benefit from the effect normally.",
      "formula": "Formula: Basic attacks of empowered союзники deal bonus Magic урон equal to 46% of their Магическая Атака . | Приоритет прокачки: Средний – Good in Интеллект-based magic teams, but weaker than Cascade's direct урон and anti-исцеление tools. | Note about Elemental Surge: The bonus only applies to Интеллект heroes who have physical basic attacks . It converts 46% of their Магическая Атака into extra Magic урон on their basic hits.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/cascade/elemental-surge.webp"
    }
  ],
  "aidan": [
    {
      "name": "Phoenix’s Embrace (Phoenix’s Embrace)",
      "name_en": "Phoenix’s Embrace",
      "type": "Ультимативное умение",
      "desc": "Aidan casts a protective щит on himself and the farthest ally. This щит absorbs any incoming урон for 5 seconds. When the ally's щит ends, it explodes, dealing magic урон to nearby враги and applying a Phoenix Glyph on them. The Phoenix Glyph is essential because it enables Aidan's other abilities to work at full power.",
      "formula": "щит Durability Formula: 118,266 (80% Магическая Атака + Level × 50) | щит Explosion урон Formula: 31,356 (15% Магическая Атака + Level × 80) | Приоритет прокачки: Очень Высокий – This is Aidan's ultimate ability and the foundation of his kit. The щит protects your team while the explosion deals solid area урон. Most importantly, it applies the Phoenix Glyph which powers up his other skills. Always upgrade this first because it improves both defense and offense simultaneously.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aidan/phoenixs-embrace.webp"
    },
    {
      "name": "Ignite (Ignite)",
      "name_en": "Ignite",
      "type": "Активное умение",
      "desc": "Aidan targets the nearest enemy without a Phoenix Glyph and applies the Glyph to them. If all враги already have a Glyph, he strikes out sparks from the nearest enemy, dealing magic урон to all враги around the target. The Phoenix Glyph applies a Burn effect that deals pure урон over 6 seconds. Pure урон is special because it ignores all Броня and Защита от Магии, making it extremely effective against tanky враги.",
      "formula": "Phoenix Glyph Burn урон Formula: 9,124 pure урон per second (5.6% Магическая Атака + Level × 10) | Sparks урон Formula: 66,283 magic урон (40% Магическая Атака + Level × 80) | Приоритет прокачки: Высокий – This skill is your main source of sustained урон. The pure урон from the Burn effect is excellent for wearing down враги in longer fights, especially against heroes with Высокий defenses. Upgrade this second to maximize Aidan's offensive contribution to your team.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aidan/ignite.webp"
    },
    {
      "name": "Inner Fire (Inner Fire)",
      "name_en": "Inner Fire",
      "type": "Активное умение",
      "desc": "Aidan unleashes a fire wave that heals all союзники except himself. Additionally, he recovers Здоровье once every 2 seconds starting from the beginning of battle. Each time Aidan heals himself, his next fire wave becomes stronger, healing his team for more. When Aidan's Здоровье drops below 30%, he self-ignites and doubles his own Здоровье regeneration. He stops burning once his Здоровье is above 60%.",
      "formula": "Fire Wave Base Healing Formula: 7,307 healing per ally (4.3% Магическая Атака + Level × 10) | Aidan's Self Здоровье Regeneration Formula: 9,731 every 2 seconds (6.5% Магическая Атака + Level × 5) | Приоритет прокачки: Средний-Высокий – This is Aidan's primary healing ability and keeps your team alive in extended battles. The scaling mechanic (where his self-healing boosts team healing) is powerful, but it takes time to build up. It's less impactful in quick fights where враги burst through before healing matters. Upgrade this third, after your урон and щит skills are strong.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aidan/inner-fire.webp"
    },
    {
      "name": "Bonds of Flame (Bonds of Flame)",
      "name_en": "Bonds of Flame",
      "type": "Пассивное умение",
      "desc": "Aidan establishes a mutual bond with the farthest ally, or with Kayla if she is on the team. The bonded ally becomes the target of Phoenix's Embrace. The bonded heroes share Здоровье, meaning any healing or урон one receives is also passed to the other. Both heroes gain a bonus that scales with their basic Броня and Защита от Магии stats. The bond is created at the start of battle and only breaks if one of them dies.",
      "formula": "Броня and Защита от Магии Bonus Formula: 10% bonus (Level × 0.077 + 3.077%) | Приоритет прокачки: Средний – This is a utility skill that provides defensive bonuses and creates synergy, especially with Kayla. However, the scaling from level upgrades is minimal compared to other skills. The bond mechanic itself is useful but doesn't dramatically improve with higher skill levels. Upgrade this last, focusing on the other three skills first to maximize combat effectiveness.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aidan/bonds-of-flame.webp"
    }
  ],
  "adam": [
    {
      "name": "1 - Bounty Lock (White/Ultimate) (1 - Bounty Lock (White/Ultimate))",
      "name_en": "1 - Bounty Lock (White/Ultimate)",
      "type": "Ультимативное умение",
      "desc": "Умение персонажа Адам.",
      "formula": "In-game description: Fires a tracking round at the enemy Hero without Hunter's Mark closest to the center of the enemy team. The shot applies Hunter's Mark and deals 257,905 урон. If the target dies while affected by Hunter's Mark, the ability is immediately reset. | Skill Explanation: Bounty Lock is Adam's primary burst tool and the source of his Hunter's Mark mechanic. He fires a precision shot at the enemy closest to the center without a mark, dealing heavy physical урон and applying Hunter's Mark. The mark feeds directly into Adaptive Caliber to start stacking further bonuses, and if the marked target dies the skill resets instantly, letting Adam chain marks back-to-back. | Приоритет прокачки: Очень Высокий – First skill to upgrade because it is Adam's main урон trigger and the starting point of his entire Hunter's Mark scaling loop. Every other skill in his kit depends on marks being applied quickly and repeatedly.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/adam/bounty-lock-icon.webp"
    },
    {
      "name": "2 - Fan the Hammer (Green) (2 - Fan the Hammer (Green))",
      "name_en": "2 - Fan the Hammer (Green)",
      "type": "Активное умение",
      "desc": "Skill Explanation: Fan the Hammer adds AOE spread to Adam's otherwise single-target kit. He rapidly fires 3 shots at the nearest enemy, and each shot ricochets to every marked target on the field. The more marks Bounty Lock has applied, the more враги take simultaneous ricochet hits, turning Fan the Hammer into a multi-target pressure tool that punishes grouped or marked teams.",
      "formula": "In-game description: Fires a series of 3 shots at the nearest enemy, dealing 78,990 урон with each shot. If there are враги on the battlefield with Hunter's Mark, the shots ricochet to them, dealing 46,045 урон. Cooldown: 7s | Приоритет прокачки: Высокий – Second skill to upgrade because its ricochet урон scales directly with how many Hunter's Marks are active. Once Bounty Lock is leveled, Fan the Hammer multiplies the payoff of every mark on the board.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/adam/fan-the-hammer-icon.webp"
    },
    {
      "name": "3 - Adaptive Caliber (Violet/Passive) (3 - Adaptive Caliber (Violet/Passive))",
      "name_en": "3 - Adaptive Caliber (Violet/Passive)",
      "type": "Активное умение",
      "desc": "Skill Explanation: Adaptive Caliber is Adam's passive scaling engine. It reacts to every hit he lands: if the target still has Броня to spare, Adam gains Броня penetration to eventually cut through it; once he fully pierces Броня, he instead gains raw Физическая Атака. Both bonuses are permanent for the duration of the battle, meaning Adam grows exponentially stronger the longer a fight goes on.",
      "formula": "In-game description: Passive skill. When Adam deals physical урон and does not fully penetrate the target's Броня, his Броня Penetration increases by 3,533. If Adam fully penetrates the target's Броня, his Физическая Атака increases by 4,707. Both effects stack and last until the end of the battle.",
      "priority": "Средний Высокий – Third to upgrade because higher levels increase the Физическая Атака and Броня Penetration gained за стак, directly amplifying the snowball potential that makes Adam dangerous in prolonged fights.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/adam/adaptive-caliber-icon.webp"
    },
    {
      "name": "4 - Reactive Screen (Blue) (4 - Reactive Screen (Blue))",
      "name_en": "4 - Reactive Screen (Blue)",
      "type": "Пассивное умение",
      "desc": "Умение персонажа Адам.",
      "formula": "In-game description: Once every 10s, when Adam takes урон from враги, a smoke screen is deployed beneath him for 5s. While inside the smoke screen, Adam gains 13,436 additional Уклонение and can evade all types of урон, not just physical. Cooldown: 10s | Skill Explanation: Reactive Screen is Adam's only defensive tool and it activates automatically the moment he takes урон. A smoke screen appears under him for 5 seconds, boosting his Уклонение and allowing him to evade both physical and magic урон during that window. Because it triggers on taking a hit rather than on a timer, it reliably kicks in during the moments Adam needs it most. | Приоритет прокачки: Средний – Last to upgrade because survivability only matters once Adam already threatens enough урон to be worth protecting. Higher levels increase the Уклонение bonus, which has diminishing returns compared to leveling the offensive skills first.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/adam/reactive-screen-icon.webp"
    }
  ],
  "amira": [
    {
      "name": "Careless Wish (Careless Wish)",
      "name_en": "Careless Wish",
      "type": "Ультимативное умение",
      "desc": "Amira casts a storm of cursed gold around all враги. The more they attack, the weaker the storm becomes. After 7 seconds, it explodes and deals урон based on how strong it still is. The урон dealt by Careless Wish depends on how much power remains in the storm after 7 seconds.",
      "formula": "Приоритет прокачки: Очень Высокий – This is Amira’s main source of урон and pressure. It punishes враги for attacking, making it crucial in both PvP and PvE. Upgrading this skill increases the hurricane Сила and final урон, making her much more threatening.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/amira/careless-wish.webp"
    },
    {
      "name": "Desperate Fury (Desperate Fury)",
      "name_en": "Desperate Fury",
      "type": "Активное умение",
      "desc": "Amira tricks Ловкость-based враги by making them land no critical hits for 7 seconds, even though their critical hit chance gets increased.",
      "formula": "Приоритет прокачки: Высокий – Very effective against popular Ловкость heroes like Lara Croft, Yasmine, and Artemis. The more you upgrade, the more враги it can affect and the higher the fake critical boost ensuring their crits fail even harder.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/amira/desperate-fury.webp"
    },
    {
      "name": "Art of Deceit (Art of Deceit)",
      "name_en": "Art of Deceit",
      "type": "Активное умение",
      "desc": "Amira manipulates Интеллект-based враги by increasing their healing and then reducing their Магическая Атака. The debuff continues even after the effect ends.",
      "formula": "",
      "priority": "Средний-Высокий – Strong versus mages like Orion, Augustus, and Polaris. As the skill scales, the Магическая Атака reduction becomes more significant, reducing the impact of enemy spellcasters. Worth upgrading if you face magic-heavy teams often.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/amira/art-of-deceit.webp"
    },
    {
      "name": "Illusory Alliance (Illusory Alliance)",
      "name_en": "Illusory Alliance",
      "type": "Пассивное умение",
      "desc": "Amira tricks Сила-based враги by forcing them to send all their buffs to a fake illusion ally that does nothing and disappears after 6 seconds.",
      "formula": "Приоритет прокачки: Средний – This is a niche skill that can be useful against strong tanks or buffed warriors. However, the illusion doesn’t deal урон or Контролёр the fight, so the skill is more tactical than impactful. Upgrade only after the others are maxed.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/amira/illusory-alliance.webp"
    }
  ],
  "augustus": [
    {
      "name": "1 - Lightning Rod (1 - Lightning Rod)",
      "name_en": "1 - Lightning Rod",
      "type": "Ультимативное умение",
      "desc": "How it works in plain terms: if the target has Очень Высокий HP, Lightning Rod will deal 40% of that HP but if that would exceed Augustus’s cap, the game uses the capped value shown above.",
      "formula": "Lightning Rod hits the enemy with the highest Здоровье and deals heavy magic урон . Simple explanation for beginners: it takes a percentage of the target’s Здоровье (very strong vs tanks) but is capped by Augustus’s magic-scaling maximum. | Formula Target Здоровье: 40% Здоровье | Formula Max Magic урон: 428,286 (max: 300% Магическая Атака + (Level 130) × 150)",
      "priority": "Очень Высокий – Augustus’s main burst nuke; upgrade first to maximize his ability to remove or cripple Высокий-HP frontliners immediately.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/augustus/lightning-rod.webp"
    },
    {
      "name": "2 - Path of Least Resistance (2 - Path of Least Resistance)",
      "name_en": "2 - Path of Least Resistance",
      "type": "Активное умение",
      "desc": "Умение персонажа Август.",
      "formula": "This passive converts Augustus’s basic attacks into steady 83,081 magic урон and forces him to hit the enemy with the lowest Защита от Магии . For a new player: Augustus will always try to burn the enemy that is easiest for magic to hurt, so he finishes supports and fragile mages quickly. | Formula Magic урон: 83,081 (50% Магическая Атака + (Level 130) × 115) | Why this matters: it keeps Augustus dealing урон consistently between his big hits. Because Silence doesn't stop it, this skill is very reliable.",
      "priority": "Высокий – Boost this early after Lightning Rod to increase Augustus’s sustained DPS and kill priority targets faster.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/augustus/path-of-least-resistance.webp"
    },
    {
      "name": "3 - Grounded (3 - Grounded)",
      "name_en": "3 - Grounded",
      "type": "Активное умение",
      "desc": "Simple example: if Augustus hits someone for 100,000, Grounded can transfer up to 53,500 to nearby враги (scaled by distance). It’s powerful when враги are grouped.",
      "formula": "Whenever Augustus deals урон with Lightning Rod or his basic attack, all nearby враги take a portion of 53.5% that hit. Think of it as a \"splash\" effect: the main target takes full урон and nearby враги suffer part of it as well. Total урон: 53.5% of the triggering урон | Formula урон Transfer: 53.5% ((Level 110) × 0.35 + 15%)",
      "priority": "Средний-Высокий – Excellent for AoE and teamfights, but less urgent than his direct single-target nuke and core attack boost.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/augustus/grounded.webp"
    },
    {
      "name": "4 - Superconductivity (4 - Superconductivity)",
      "name_en": "4 - Superconductivity",
      "type": "Пассивное умение",
      "desc": "Superconductivity applies a stacking debuff that reduces an enemy’s Защита от Магии for 6s each time Augustus hits. When Защита от Магии is fully penetrated, extra magic урон converts into pure урон which ignores resistances.",
      "formula": "Formula Защита от Магии Reduction: -3993.93 (1.5% Магическая Атака + (Level 90) × 15 + 600) | Plainly: every hit weakens the enemy against magic. Over time this makes Augustus and all magic союзники hit much harder. It’s an indirect but team-amplifying effect. | Приоритет прокачки: Средний – Great in long fights and magic comps, but relies on other skills landing first, so upgrade after direct-урон abilities. | Note: This skill has exceptional synergy with Orion . Orion is the fastest ultimate attacker in Hero Wars and one of the few heroes who rapidly gains Energy, allowing him to trigger his ultimate repeatedly. Every time Orion casts his ultimate, he also activates his Оружие artifact , granting Пробивание Защиты от Магии to all союзники. This penetration significantly amplifies the effectiveness of Augustus’s ability, letting Augustus convert even more урон into pure урон against враги.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/augustus/superconductivity.webp"
    }
  ],
  "aurora": [
    {
      "name": "Crystal of Selias (Crystal of Selias)",
      "name_en": "Crystal of Selias",
      "type": "Ультимативное умение",
      "desc": "Aurora’s main offensive skill. She releases a powerful flash of light at the center of the enemy team, dealing area-of-effect урон. It activates frequently and is essential for her overall урон and team synergy.",
      "formula": "Приоритет прокачки: Очень Высокий – This skill deals massive AoE урон and contributes to energy gain. Its Ascension effect makes it a critical part of her combo chain.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aurora/crystal-of-selias.webp"
    },
    {
      "name": "Crystalline Onslaught (Crystalline Onslaught)",
      "name_en": "Crystalline Onslaught",
      "type": "Активное умение",
      "desc": "A single-target melee strike that stuns and damages a nearby enemy. Useful for interrupting enemy abilities and adding crowd Контролёр to the frontline. Note that stun success decreases against Высокий-level opponents.",
      "formula": "",
      "priority": "Высокий – This skill adds tactical utility, allowing Aurora to disrupt and Контролёр dangerous враги. Excellent in PvP and frontline duels.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aurora/crystalline-onslaught.webp"
    },
    {
      "name": "Piercing Light (Piercing Light)",
      "name_en": "Piercing Light",
      "type": "Активное умение",
      "desc": "Aurora casts a linear beam of light, damaging all враги in its path. It has a short cooldown and helps charge her artifact while applying light pressure across the enemy line.",
      "formula": "Приоритет прокачки: Средний-Высокий – While it lacks Контролёр effects, it’s useful for consistent chip урон and energy regeneration, helping Aurora cycle her skills and artifact.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aurora/piercing-light.webp"
    },
    {
      "name": "Rainbow Halo (Rainbow Halo)",
      "name_en": "Rainbow Halo",
      "type": "Пассивное умение",
      "desc": "Aurora’s passive щит that absorbs 85% of incoming magic урон. Once it absorbs enough урон, it explodes and damages surrounding враги. It activates automatically, adding both defense and retaliation урон.",
      "formula": "Ascension skill: Perfect Rainbow Halo – Once Ascension is unlocked, this щит also absorbs 25% of the physical урон Aurora dodges. This makes her significantly tougher against physical teams and improves the explosion урон further. It pairs especially well with Уклонение-Поддержка heroes like Dante and Fafnir. | Приоритет прокачки: Средний – This passive is more effective in late-game with higher Здоровье and Уклонение stats. For newer players, it's solid but not urgent to max early.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aurora/rainbow-halo.webp"
    }
  ],
  "dante": [
    {
      "name": "1 - Instrument of Fate (Ultimate) (1 - Instrument of Fate (Ultimate))",
      "name_en": "1 - Instrument of Fate (Ultimate)",
      "type": "Ультимативное умение",
      "desc": "Instrument of Fate is Dante’s main burst tool. He throws 4 spectral spears at multiple враги, dealing 210,193 physical урон and pushing targets back. This gives him real frontline disruption while also pressuring several враги at once, which is why the skill stays central in both PvP and PvE. Skill Info",
      "formula": "Formula - Physical урон: 210,193 (220% Физическая Атака + 100 x Level)",
      "priority": "Очень Высокий – This is the first skill to care about because it is Dante’s clearest source of burst, positioning pressure, and artifact activation tempo.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/dante/instrument-of-fate.webp"
    },
    {
      "name": "2 - Foresight (2 - Foresight)",
      "name_en": "2 - Foresight",
      "type": "Активное умение",
      "desc": "Foresight gives all союзники 16,524 Уклонение for 5 seconds. This is the skill that turns Dante from a selfish урон dealer into a real Уклонение-core enabler, because it helps the whole team survive physical pressure while also making Dante lineups much more frustrating to pin down. Skill Info",
      "formula": "Formula - Bonus Уклонение: 16,524 (18% Физическая Атака + 3 x Level)",
      "priority": "Высокий – Upgrade this early because Dante teams become much more stable when the Уклонение window is large enough to create missed attacks and energy swings.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/dante/foresight.webp"
    },
    {
      "name": "3 - Shackles of Weakness (3 - Shackles of Weakness)",
      "name_en": "3 - Shackles of Weakness",
      "type": "Активное умение",
      "desc": "Shackles of Weakness adds a debuff layer to Dante’s spear hits. Whenever a spectral spear from Instrument of Fate or Retribution lands, Dante reduces the enemy’s main stat by 7,022 for 5 seconds. That lowers enemy урон, defense scaling, or healing scaling depending on who gets hit, which gives Dante more value than a pure урон Стрелок in longer fights. Skill Info",
      "formula": "Formula - Main Stat Reduction: 7,022 (7% Физическая Атака + 8 x Level - 292)",
      "priority": "Средний Высокий – This is worth leveling before Retribution in most builds because the stat reduction applies more consistently across fights and improves Dante’s overall pressure profile.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/dante/shackles-of-weakness.webp"
    },
    {
      "name": "4 - Retribution (4 - Retribution)",
      "name_en": "4 - Retribution",
      "type": "Пассивное умение",
      "desc": "Retribution is Dante’s automatic punish when the enemy plays into his Уклонение pattern. After dodging урон greater than 5% of his total Здоровье, he throws a spectral spear at the nearest enemy for 111,596 physical урон . The effect is powerful in the right matchup, but it is more conditional than the rest of his kit because it depends on successful dodges and meaningful incoming hits. Skill Info",
      "formula": "Formula - Physical урон: 111,596 (110% Физическая Атака + 100 x Level)",
      "priority": "Средний – This skill is still good, but it becomes best when Dante already has enough Уклонение Поддержка and survivability to trigger it often.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/dante/retribution.webp"
    }
  ],
  "guus": [
    {
      "name": "March of the Geese (March of the Geese)",
      "name_en": "March of the Geese",
      "type": "Ультимативное умение",
      "desc": "This is Guus's ultimate skill. For 5 seconds, golden geese исцеление союзники and gray geese урон враги. The healing and урон happen every 0.5 seconds. However, Guus cannot attack or use other skills during this time. If interrupted, he keeps some Energy based on the time left.",
      "formula": "Приоритет прокачки: Очень Высокий – This skill brings the biggest healing impact in large fights and synergizes with his other abilities. More power here increases both healing and урон output significantly.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/guus/march-of-the-geese.webp"
    },
    {
      "name": "Feathers of Gold (Feathers of Gold)",
      "name_en": "Feathers of Gold",
      "type": "Активное умение",
      "desc": "This skill gives all союзники a Golden Feather that heals them over 5 seconds. It also has a passive: while March of the Geese is active, any ally healed by golden geese receives this feather as well.",
      "formula": "Приоритет прокачки: Высокий – The healing effect is moderate, but the passive synergy with the ultimate skill increases overall healing during fights. Better at keeping your whole team healthy over time.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/guus/feathers-of-gold.webp"
    },
    {
      "name": "Guardian Goose (Guardian Goose)",
      "name_en": "Guardian Goose",
      "type": "Активное умение",
      "desc": "This ability works like a protective щит. If an ally with a Golden Feather is about to drop below 25% HP, this skill heals them before the hit lands, and gives bonus healing based on how long the feather had left. It triggers only once per feather.",
      "formula": "Приоритет прокачки: Средний-Высокий – It can save союзники from fatal урон, but it only works in specific moments. Still, upgrading it boosts the life-saving potential when it does activate.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/guus/guardian-goose.webp"
    },
    {
      "name": "Lay on Feathers (Lay on Feathers)",
      "name_en": "Lay on Feathers",
      "type": "Пассивное умение",
      "desc": "This is Guus's basic attack skill. Instead of damaging враги, he heals nearby союзники who don’t already have a feather. It’s constant healing with every attack, but only affects one target at a time.",
      "formula": "",
      "priority": "Средний – It gives consistent healing, but compared to his other skills, the impact is lower. Still useful in long fights or when no skills are ready.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/guus/lay-on-feathers.webp"
    }
  ],
  "heidi": [
    {
      "name": "1 - Deathflower (1 - Deathflower)",
      "name_en": "1 - Deathflower",
      "type": "Ультимативное умение",
      "desc": "Heidi summons a large poisonous mushroom in the center of the enemy team. The spores continuously poison all nearby враги, dealing pure урон over time. This ability hits multiple враги at once, which makes it her strongest and most reliable source of урон in long fights. The Ascension upgrade makes Deathflower even more dangerous by increasing the poison урон every 0.5 seconds. This causes the урон to stack rapidly, burning through even tanky враги.",
      "formula": "Formula: ( 55% Магическая Атака + Ivl * 70) Pure урон every 3s . | Приоритет прокачки: Очень Высокий – This is Heidi’s main урон-dealing skill. It affects multiple враги and scales well with her Магическая Атака, making it crucial to level first for maximum effectiveness. | Formula: +10% more Pure урон every 0.5s .",
      "priority": "Высокий – Unlocking this makes Heidi’s main skill scale much faster, but since Ascension takes time to unlock, it’s a secondary upgrade after her core skills are leveled.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/heidi/deathflower.webp"
    },
    {
      "name": "2 - Toxic Spit (2 - Toxic Spit)",
      "name_en": "2 - Toxic Spit",
      "type": "Активное умение",
      "desc": "Heidi fires a poisoned dart at the nearest enemy, blinding them and dealing pure урон over time. The blind effect is short but can interrupt dangerous attackers like K’arkh or Dante, giving your team a survival edge.",
      "formula": "Formula: 51369 Pure урон + ( 60% Магическая Атака + Ivl * 75) Pure урон over 5s . | Приоритет прокачки: Высокий – The consistent poison and blind effect make it an excellent follow-up skill. It’s single-target but provides both урон and Контролёр, useful in every fight.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/heidi/toxic-spit.webp"
    },
    {
      "name": "3 - Snake Charmer (3 - Snake Charmer)",
      "name_en": "3 - Snake Charmer",
      "type": "Активное умение",
      "desc": "Heidi throws a snake at the enemy with the lowest Здоровье, instantly biting them for massive pure урон. This skill is perfect for finishing off Низкий-HP враги who survive her poison effects.",
      "formula": "Formula: ( 70% Магическая Атака + Ivl * 100 + 2000) Pure урон . | Приоритет прокачки: Средний Высокий – Great for securing kills and increasing overall burst урон. It’s less consistent than her AoE poison but still powerful when maxed later in progression.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/heidi/snake-charmer.webp"
    },
    {
      "name": "4 - Spy Camo (4 - Spy Camo)",
      "name_en": "4 - Spy Camo",
      "type": "Пассивное умение",
      "desc": "When Heidi avoids урон for 2 seconds, she becomes camouflaged, increasing her chance to Уклонение any type of attack. Each successful Уклонение restores Energy, helping her use skills faster. However, since her main defense already comes from Уклонение and she’s often safe in the middle line, this skill isn’t as crucial early on. After Ascension, Spy Camo gains an additional offensive effect. While camouflaged, Heidi deals extra skill урон that increases the longer she stays hidden, turning her defensive skill into a hybrid offensive tool.",
      "formula": "Formula: Уклонение increases from 20% to ( Ivl * 0.5 + 40% ) . | Приоритет прокачки: Средний – Provides good survivability but doesn’t directly increase her урон. Upgrade it after her main offensive skills. | Formula: Bonus skill урон from 5% up to 20% .",
      "priority": "Низкий – This is useful later in the game, but since Ascension unlocks late and relies on staying hidden, it’s not a priority for beginners.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/heidi/spy-camo.webp"
    }
  ],
  "isaac": [
    {
      "name": "4th – High-Voltage Module (4th – High-Voltage Module)",
      "name_en": "4th – High-Voltage Module",
      "type": "Ультимативное умение",
      "desc": "This ability triggers after the third activation of Tes’Lin’s Overdrive, dealing урон to all враги. While it can add some extra team-wide pressure, battles often end before Isaac activates his silence three times, so this skill rarely shows its true potential.",
      "formula": "Formula: (110% Phys. atk. + Ivl * 50 + 2010) .",
      "priority": "Средний – Nice to have, but not reliable in most fights since battles usually end quickly. Focus on other skills first.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/isaac/high-voltage-module.webp"
    }
  ],
  "iris": [
    {
      "name": "Expose Soul (Expose Soul)",
      "name_en": "Expose Soul",
      "type": "Ультимативное умение",
      "desc": "Умение персонажа Ирис.",
      "formula": "How it works: Iris reveals the soul of the nearest enemy for 13 seconds. Any урон the soul takes is instantly transferred as pure урон to the enemy’s real body — this means it ignores Броня and Защита от Магии completely. It’s especially strong against tanks and heroes with Высокий defenses. | Formula: Pure урон = ( 200% Здоровье + Ivl * 350 + 100) . | Приоритет прокачки: Очень Высокий – This is Iris’s most powerful skill. It defines her entire playstyle, allowing her to destroy tanks by dealing unavoidable урон. Max this one first for the biggest battle impact.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/iris/expose-soul.webp"
    },
    {
      "name": "Otherworldly Creature (Otherworldly Creature)",
      "name_en": "Otherworldly Creature",
      "type": "Активное умение",
      "desc": "How it works: Iris summons a dark familiar near the farthest enemy. The creature moves toward her, biting враги along the way. Each bite hits harder than the last, so it deals increasing Физическая Атака as it returns to Iris.",
      "formula": "Formula Физическая Атака : ( 37% Магическая Атака + Ivl * 65) for the first bite, and each next bite adds Физическая Атака ( 9% Магическая Атака + Ivl * 25) . | Приоритет прокачки: Высокий – This skill provides steady magic урон and charges Iris’s synergy ability. It’s a great secondary source of power and should be leveled after Expose Soul.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/iris/otherworldly-creature.webp"
    },
    {
      "name": "Demonic Synergy (Demonic Synergy)",
      "name_en": "Demonic Synergy",
      "type": "Активное умение",
      "desc": "How it works: After the familiar returns to Iris, it transfers all the energy (Soul Fury) it collected from its bites. Each charge boosts Iris’s next basic attack, adding powerful Физическая Атака .",
      "formula": "Formula: Физическая Атака = ( 35% Магическая Атака + Ivl * 20 + 650) per charge. | Приоритет прокачки: Средний Высокий – This skill adds solid bonus урон when combined with the familiar’s attacks. It’s very useful for consistent extra DPS but not as critical as her main урон skill.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/iris/demonic-synergy.webp"
    },
    {
      "name": "Seed of Destruction (Seed of Destruction)",
      "name_en": "Seed of Destruction",
      "type": "Пассивное умение",
      "desc": "Умение персонажа Ирис.",
      "formula": "How it works: Iris drains a bit of Здоровье from all враги, creates a Seed of Destruction, and launches it at the nearest enemy. The attack deals physical урон equal to the total amount of Здоровье absorbed. | Formula Здоровье absorbed : ( 25% Магическая Атака + Ivl * 80 + 3200) Здоровье absorbed per enemy. | Приоритет прокачки: Средний – This ability helps deal some extra урон, but since it depends on enemy Здоровье and isn’t pure урон, it’s less effective than her main abilities. Upgrade it last if you have spare resources.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/iris/seed-of-destruction.webp"
    }
  ],
  "ishmael": [
    {
      "name": "Awakening (Awakening)",
      "name_en": "Awakening",
      "type": "Ультимативное умение",
      "desc": "Ishmael transforms into his demonic form, gaining a huge boost to attack speed and critical hit chance. This is the skill that makes Ishmael deadly, because the faster he attacks and the more criticals he lands, the more Здоровье he restores through Вампиризм. The downside is that he slowly loses energy, and when it reaches zero, the form ends.",
      "formula": "Formula: (Critical hit chance increase: 1300 + (Skill Level × 10)) . | Ascension skill: Brutal Awakening – Critical hits deal x4 урон instead of x2 when in demonic form. This makes Ishmael’s late game power skyrocket, turning him into one of the strongest урон dealers if well supported.",
      "priority": "Очень Высокий – This is Ishmael’s core skill. Without it, he is much weaker. Always max this first to make him a true carry.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ishmael/awakening.webp"
    },
    {
      "name": "Phantom (Phantom)",
      "name_en": "Phantom",
      "type": "Активное умение",
      "desc": "Ishmael becomes much harder to hit, dodging physical attacks for a short time. Each Уклонение gives him extra power, helping him stay alive and deal more урон. However, if the enemy’s level is much higher, the Уклонение chance is reduced. Ascension skill: Elusive Phantom – Lets Ishmael Уклонение not just physical, but also magical attacks. This makes him much stronger against mages and balanced teams, greatly boosting his survivability.",
      "formula": "Formula: (Уклонение chance depends on Ishmael’s level vs. target level) . | Приоритет прокачки: Высокий – Survivability is key. This skill keeps Ishmael alive long enough to unleash his урон. Upgrade after Awakening.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ishmael/phantom.webp"
    },
    {
      "name": "Dark Craft (Dark Craft)",
      "name_en": "Dark Craft",
      "type": "Активное умение",
      "desc": "This passive skill increases Ishmael’s Вампиризм, meaning he heals himself every time he deals урон. The stronger his criticals, the more Здоровье he recovers. This works perfectly with Awakening and makes him very hard to kill if he keeps attacking.",
      "formula": "Formula: (Вампиризм % = 75 + (Skill Level × 0.576924 + 11.53848)) .",
      "priority": "Средний Высокий – A good skill to invest in, but only after Awakening and Phantom are well-leveled. It helps Ishmael survive longer battles.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ishmael/dark-craft.webp"
    },
    {
      "name": "Storm Blades (Storm Blades)",
      "name_en": "Storm Blades",
      "type": "Пассивное умение",
      "desc": "Every third hit Ishmael lands stuns his opponent for one second. This can be useful to disrupt враги, but since the stun chance decreases against higher-level враги, it is more reliable in late game.",
      "formula": "Formula: (Stun chance depends on Ishmael’s level vs. target level) .",
      "priority": "Низкий – While the stun can help, it is not as important as his other skills. Upgrade this last, after all other abilities are strong.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ishmael/storm-blades.webp"
    }
  ],
  "julius": [
    {
      "name": "Defense Meowtrix (Defense Meowtrix)",
      "name_en": "Defense Meowtrix",
      "type": "Ультимативное умение",
      "desc": "This is Julius’s main skill. It creates a huge team-wide щит that absorbs урон and then heals all союзники after it’s broken. The more Физическая Атака Julius has, the stronger this щит and исцеление become.",
      "formula": "",
      "priority": "Очень Высокий – It protects the whole team and heals them, so upgrading this boosts survivability for everyone.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/julius/defense-meowtrix.webp"
    },
    {
      "name": "Copycat Device (Copycat Device)",
      "name_en": "Copycat Device",
      "type": "Активное умение",
      "desc": "This skill shields Julius, and if the щит survives for 5 seconds, it copies the remaining amount to all союзники. Every time Julius gets a щит, he gains permanent Физическая Атака power for the rest of the fight.",
      "formula": "Приоритет прокачки: Высокий – Strong synergy skill that improves team protection and boosts Julius's урон over time.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/julius/copycat-device.webp"
    },
    {
      "name": "Nine-Lives Engine (Nine-Lives Engine)",
      "name_en": "Nine-Lives Engine",
      "type": "Активное умение",
      "desc": "This passive ability activates whenever an ally loses a щит. It removes negative effects and temporarily increases their Броня and Защита от Магии. It helps keep the team safe even after shields break.",
      "formula": "",
      "priority": "Средний-Высокий – Helps cleanse debuffs and adds a small defense boost, but it's not as impactful as his main щит skills.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/julius/nine-lives-engine.webp"
    },
    {
      "name": "Purrfect Reflexes (Purrfect Reflexes)",
      "name_en": "Purrfect Reflexes",
      "type": "Пассивное умение",
      "desc": "This skill gives your whole team bonus speed for each active щит on the battlefield. Faster attacks and skills can help you win faster, but the boost is small unless many shields are active.",
      "formula": "",
      "priority": "Средний – Useful when there are lots of shields in play, but doesn’t work well in every situation. Upgrade it last.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/julius/purrfect-reflexes.webp"
    }
  ],
  "krista": [
    {
      "name": "Icy Vengeance (Icy Vengeance)",
      "name_en": "Icy Vengeance",
      "type": "Ультимативное умение",
      "desc": "Krista launches 5 ice crystals that hit враги one by one, dealing area урон. This is her main source of consistent урон and activates often during fights.",
      "formula": "Formula: (584 + 35% Магическая Атака + Level × 100) | Приоритет прокачки: Очень Высокий – This is Krista’s strongest and most reliable урон skill. Upgrading it first maximizes her team impact in every battle.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/krista/icy-vengeance.webp"
    },
    {
      "name": "Chains of Frost (Chains of Frost)",
      "name_en": "Chains of Frost",
      "type": "Активное умение",
      "desc": "Krista strikes the center of the enemy team, reducing their Защита от Магии and applying a Mark of Water. This sets up extra урон from her and other Water Mark heroes.",
      "formula": "Formula: (10% Магическая Атака + Level × 20) | Ascension skill: Generous Water Marks – союзники исцеление for 50% of the magic урон dealt to враги with a Water Mark. This makes Krista an amazing Поддержка-урон hybrid. | Приоритет прокачки: Высокий – Important for boosting your whole team’s урон and healing at Ascension. Level this after her first skill.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/krista/chains-of-frost.webp"
    },
    {
      "name": "Frozen Needles (Frozen Needles)",
      "name_en": "Frozen Needles",
      "type": "Активное умение",
      "desc": "Krista freezes the ground, creating ice thorns that hurt враги when they move. Once the ice melts, all standing враги receive a Water Mark. This skill is situational but very useful in longer battles.",
      "formula": "Formula: (12% Магическая Атака + Level × 25 + 500) | Приоритет прокачки: Средний-Высокий – It deals good урон and spreads Marks of Water, but it’s less reliable than her first two skills.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/krista/frozen-needles.webp"
    },
    {
      "name": "Crystallization (Crystallization)",
      "name_en": "Crystallization",
      "type": "Пассивное умение",
      "desc": "When Krista is about to take heavy урон, she protects herself with an ice block that absorbs 50% of the incoming урон for 2 seconds. It’s a defensive survival tool, not a урон source.",
      "formula": "Ascension skill: Volatile Crystallization – After the щит ends, the block explodes, dealing (40% Магическая Атака + 1500) урон to nearby враги. This adds offensive value later in the game.",
      "priority": "Средний – Early on, this skill is only defensive. It becomes better with Ascension, but still less important than her main offensive skills.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/krista/crystallization.webp"
    }
  ],
  "laracroft": [
    {
      "name": "Power of the Tombs (Power of the Tombs)",
      "name_en": "Power of the Tombs",
      "type": "Ультимативное умение",
      "desc": "Lara activates an ancient relic that damages all враги and heals союзники. Her basic attacks also fire 2 powered-up shots instead of one. Ascension skill: Power of the Sacred Tombs upgrades this ability to fire 4 shots after a critical hit. While powerful, this is an end-game enhancement that doesn't change the early priority.",
      "formula": "Formula: (урон & Healing depend on Физическая Атака) . | Приоритет прокачки: Высокий – This is Lara's ultimate ability and should be your top priority. It deals урон to ALL враги while healing your team, making it incredibly valuable in every battle. The passive double-shot effect dramatically increases her basic attack урон from the very beginning.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lara-croft/power-of-the-tombs.webp"
    },
    {
      "name": "Critical Thinking (Critical Thinking)",
      "name_en": "Critical Thinking",
      "type": "Активное умение",
      "desc": "Lara focuses for 6 seconds, significantly increasing her chance to land critical hits and making those critical hits deal much more урон. Ascension skill: Absolute Critical Thinking guarantees critical hits against stunned враги. This is a powerful upgrade but requires team synergy, making it less important for beginners.",
      "formula": "Formula: (0.027% Phys. atk. + Ivl * 0.6 + 200)% . | Приоритет прокачки: Высокий – This should be your second priority because it dramatically increases all of Lara's урон output. Critical hits are essential for marksmen, and this skill makes her basic attacks and other abilities hit much harder. It works especially well with her double-shot passive.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lara-croft/critical-thinking.webp"
    },
    {
      "name": "Steady Shot (Steady Shot)",
      "name_en": "Steady Shot",
      "type": "Активное умение",
      "desc": "Lara fires an explosive arrow at the central enemy, damaging and stunning all враги in the explosion radius for 2 seconds.",
      "formula": "Formula: (30% Phys. atk. + Ivl * 15 + 300) урон . | Приоритет прокачки: Средний – This ability provides valuable crowd Контролёр (stun) which can interrupt enemy abilities. While useful, it's less important than her урон-boosting skills early on. Upgrade this after her core урон abilities are sufficiently leveled, as crowd Контролёр becomes more important in mid-to-late game.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lara-croft/steady-shot.webp"
    },
    {
      "name": "Lost Knowledge (Lost Knowledge)",
      "name_en": "Lost Knowledge",
      "type": "Активное умение",
      "desc": "A passive ability that adds random artifact effects to Lara's Jade Necklace whenever it activates, providing various stat bonuses.",
      "formula": "Formula: 4710 (5% Phys. atk. + Ivl * 10 + 415) bonus power .",
      "priority": "Низкий – This is a supportive passive ability that provides random bonuses. While potentially helpful, it's unreliable since you can't Контролёр which bonus you get. More importantly, it only unlocks at level 90, making it irrelevant for beginners. Focus on this last, after all other skills are well-developed.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lara-croft/lost-knowledge.webp"
    },
    {
      "name": "Expedition Expert (Expedition Expert)",
      "name_en": "Expedition Expert",
      "type": "Пассивное умение",
      "desc": "Expedition Bonus (Passive): Lara Croft (Red rank or higher) unlocks a powerful expedition advantage:",
      "formula": "",
      "priority": "UNIQUE BONUS – This isn’t a skill you level up, but a passive reward for owning Lara Croft. The extra daily expedition dramatically increases your artifact fragments and resources over time, making her one of the most valuable long-term investments in Hero Wars even if you never place her in a battle team.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lara-croft/expedition-expert.webp"
    }
  ],
  "lyria": [
    {
      "name": "4th – Shackles of Doom (4th – Shackles of Doom)",
      "name_en": "4th – Shackles of Doom",
      "type": "Ультимативное умение",
      "desc": "Skill Animation Info",
      "formula": "In-game description: Passive skill. The hero exudes an aura that decreases the Уклонение stat of all враги within the area of effect. All affected враги receive additional physical урон from physical attacks. The size of the aura scales with the number of undead units in allied team. | Skill Explanation: This passive aura works automatically every battle — no button needed. “Уклонение” means the chance an enemy has to avoid your attacks entirely. By reducing their Уклонение, your physical heroes land more hits consistently. On top of that, every hit that connects deals extra Physical урон . The more undead союзники you have, the wider this aura spreads, covering more враги at once. Upgrading it increases how much Уклонение is reduced and how much extra урон враги take. It’s essential against Уклонение-heavy teams like Dante or Yasmine. | Formula – Уклонение Reduction: 29,848 (30% Физическая Атака + 50 × level) | Formula – Extra Physical урон за удар: 7,783 (10% Физическая Атака) | Приоритет прокачки: Высокий – Even though it’s passive, this aura provides constant value in every single battle. Reducing enemy Уклонение is game-changing against teams built around Dante, Heidi, or Yasmine. The extra physical урон also stacks up across a long fight. Upgrade this alongside Bonds of Alliance as your second priority group.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lyria/lyria-4th-skill-icon.webp"
    }
  ],
  "nebula": [
    {
      "name": "Astral Projection (Astral Projection)",
      "name_en": "Astral Projection",
      "type": "Ультимативное умение",
      "desc": "Nebula fires a slow energy ball that explodes either when it hits the last enemy or is activated manually. It splits урон and drains energy from враги in the area. However, because Nebula turns her basic attacks into buffs through Equilibrium, it takes a long time for her to activate this skill (she needs full energy). Ascension skill: Astral Balance Projection – When activated, this skill also grants 2 союзники a boost to both physical and magical attack for 5 seconds. While helpful, it still depends on her activating the ultimate, which takes time for beginners.",
      "formula": "",
      "priority": "Низкий - It’s her ultimate, but she rarely activates it due to her Поддержка playstyle and Низкий energy gain.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/nebula/astral-projection.webp"
    },
    {
      "name": "Serenity (Serenity)",
      "name_en": "Serenity",
      "type": "Активное умение",
      "desc": "This skill heals two nearby союзники and removes negative effects (debuffs). If only one ally is nearby, the healing goes to that hero. Very useful for keeping the team alive, especially in close formations.",
      "formula": "Ascension skill: Absolute Serenity – If an ally receives a debuff within 4 seconds after Serenity, Nebula cancels the effect and heals again. This makes her healing even more powerful and reactive.",
      "priority": "Высокий - Great for team survival, and it activates more often than the ultimate.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/nebula/serenity.webp"
    },
    {
      "name": "Disharmony (Disharmony)",
      "name_en": "Disharmony",
      "type": "Активное умение",
      "desc": "Automatically deals урон to the enemy with the lowest Здоровье. It’s a simple attack that helps finish off враги, but it’s not as impactful as her Поддержка skills.",
      "formula": "Приоритет прокачки: Средний - Decent урон, especially in long fights. It happens automatically and helps secure kills.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/nebula/disharmony.webp"
    },
    {
      "name": "Equilibrium (Equilibrium)",
      "name_en": "Equilibrium",
      "type": "Пассивное умение",
      "desc": "This is Nebula’s core skill. It turns her basic attacks into Поддержка boosts, increasing the physical and magical attack of nearby союзники. This happens constantly and makes a huge difference for урон dealers.",
      "formula": "",
      "priority": "Очень Высокий - Her most important skill. It defines her role in the team and improves the whole team's performance.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/nebula/equilibrium.webp"
    }
  ],
  "orion": [
    {
      "name": "1 - Total Destruction (1 - Total Destruction)",
      "name_en": "1 - Total Destruction",
      "type": "Ультимативное умение",
      "desc": "Skill Animation Info",
      "formula": "Total Destruction is Orion's ultimate burst tool. He fires 6 rockets at the враги with the highest Здоровье, and each rocket deals 62,098 magic урон . This is easy to understand in battle: Orion aims at the healthiest targets so he can quickly break the enemy core instead of wasting his burst on almost dead heroes. | Formula - Magic урон: 62,098 (45% Магическая Атака + 50 x Level) | Ascension V - Tactical Destruction: When an enemy is stunned or slowed, they receive a mark. When Orion uses this skill, he launches an extra rocket at every marked target and each extra rocket deals 41,866 magic урон . Because Ascension V comes late, the base skill is already worth leveling, and ascension simply pushes it even higher. | Formula - Ascension Bonus урон: 41,866 (30% Магическая Атака + 4,800)",
      "priority": "Высокий – This is Orion's main burst button, so upgrading it keeps his kill pressure relevant from the early game to endgame. It becomes even better once your account eventually unlocks the ascension extra rockets.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/orion/total-destruction.webp"
    },
    {
      "name": "2 - Magnetic Field (2 - Magnetic Field)",
      "name_en": "2 - Magnetic Field",
      "type": "Активное умение",
      "desc": "Magnetic Field explodes on the enemy back line, deals 50,721 magic урон in an area, and slows враги for 4 seconds. In simple terms, this skill helps Orion touch the heroes hiding behind the Танк line and makes them easier to finish because the slow can also prepare targets for his ascension ultimate. Skill Animation Info",
      "formula": "Formula - Magic урон: 50,721 (40% Магическая Атака + 10 x Level)",
      "priority": "Средний – The slow and back-line reach are valuable, but Orion can already do his main job without maxing this first. Upgrade it after the skills that directly define his burst rhythm.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/orion/magnetic-field.webp"
    },
    {
      "name": "3 - Antimatter Blast (3 - Antimatter Blast)",
      "name_en": "3 - Antimatter Blast",
      "type": "Активное умение",
      "desc": "Skill Animation Info",
      "formula": "Antimatter Blast fires a missile at the nearest enemy, deals 106,642 magic урон , and stuns that target for 4 seconds. For players who want the easy explanation: this is Orion's Контролёр shot. It locks down the closest threat while still hitting hard enough to matter. | Formula - Magic урон: 106,642 (80% Магическая Атака + 60 x Level) | Ascension II - Antimatter Chain: After the first hit, the projectile bounces to the 2 nearest враги. Each bounce deals 53,321 magic урон and stuns for 1 second. Because this upgrade unlocks earlier than Ascension V, it is a meaningful future boost, but the base single-target Контролёр is already the main reason to level the skill. | Formula - Ascension Bounce урон: 53,321 (40% Магическая Атака + 3,900)",
      "priority": "Средний Высокий – This skill adds strong Контролёр and a heavy burst hit, so it deserves good investment. It stays below Orion's top priorities because his energy engine and main ultimate usually decide more fights first.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/orion/antimatter-blast.webp"
    },
    {
      "name": "4 - Full Charge (4 - Full Charge)",
      "name_en": "4 - Full Charge",
      "type": "Пассивное умение",
      "desc": "Full Charge is the passive that makes Orion feel fast. Every attack gives him 550 extra energy , which means he reaches Total Destruction much earlier and cycles back to it faster than many other mages. If you ever wondered why Orion seems to cast nonstop, this is the answer. Skill Animation Info",
      "formula": "Formula - Extra Energy: 550 (5 x Level - 100)",
      "priority": "Очень Высокий – For beginners this is the upgrade that changes Orion the most because more energy means more ultimates, more artifact activations, and more total pressure. Level it as early as possible.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/orion/full-charge.webp"
    }
  ],
  "qingmao": [
    {
      "name": "1. Qing Long (Ultimate) (1. Qing Long (Ultimate))",
      "name_en": "1. Qing Long (Ultimate)",
      "type": "Ультимативное умение",
      "desc": "Qing Mao summons the dragon spirit of her brother, which strikes the nearest враги three times. Each hit deals physical урон , pushes враги back (disrupting their positioning), and applies a burning effect for 5 seconds. The burn deals additional урон over time. This is a powerful ultimate that combines burst урон, crowd Контролёр, and sustained урон. This Ascension transforms Qing Long into a devastating ultimate. For each blinded enemy on the battlefield (up to 5), the dragon deals one additional hit. If you've blinded 3 враги with Spear of Dawn, the dragon hits 6 times instead of 3 doubling the урон! This creates incredible synergy between her skills. The Ascension V upgrade is difficult to unlock (requires Высокий Ascension level), but it's what makes Qing Mao a top-tier урон dealer in the late game. Maximum Bonus Hits: 5 (requires 5 blinded враги)",
      "formula": "урон за удар Formula: 36,772 (30% Физическая Атака + 75 × level) | Flame урон Formula: 21,914 (20% Физическая Атака + 30 × level) over 5 seconds | Приоритет прокачки: Высокий – A strong ultimate that deals significant урон. However, it becomes truly exceptional only after unlocking Ascension V, which adds extra hits based on blinded враги. Upgrade this third, after your passive and Spear of Dawn. | Extra урон за удар: 21,014 (20% Физическая Атака + 3,000) | Extra Flame урон: 10,207 (10% Физическая Атака + 1,200)",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/qing-mao/qing-long-icon.webp"
    },
    {
      "name": "2. Spear of Dawn (Periodic) (2. Spear of Dawn (Periodic))",
      "name_en": "2. Spear of Dawn (Periodic)",
      "type": "Активное умение",
      "desc": "Qing Mao throws her spear at the nearest враги, blinding them for 3 seconds. Blinded враги have drastically reduced Меткость, causing many of their attacks to miss. This provides excellent crowd Контролёр and defensive value. More importantly, each blinded enemy on the battlefield increases the power of her ultimate ability (Qing Long), adding extra dragon strikes. Blind Duration: 3 seconds | Cooldown: 15 seconds",
      "formula": "урон Formula: 21,914 (20% Физическая Атака + 30 × level) | Приоритет прокачки: Очень Высокий – Essential for synergy with her ultimate. The blind effect provides both defense (враги miss attacks) and offense (triggers extra ultimate урон). This skill is the key to unlocking Qing Mao's full potential when combined with her Ascension V ultimate.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/qing-mao/spear-of-dawn-icon.webp"
    },
    {
      "name": "3. Dragon's Claw (Periodic) (3. Dragon's Claw (Periodic))",
      "name_en": "3. Dragon's Claw (Periodic)",
      "type": "Активное умение",
      "desc": "Qing Mao slashes the nearest enemy with a powerful claw attack that deals урон based on the target's current Здоровье. This means it's most effective against враги with Высокий Здоровье pools the more HP they have, the more урон this skill deals (up to a maximum cap). This makes it excellent for taking down tanky front-line heroes. The skill has a 7-second initial cooldown and then activates every 23 seconds. Cooldown: 23 seconds | Initial Cooldown: 7 seconds",
      "formula": "урон Formula: 21% of target's current Здоровье (0.1 × level + 10) | Maximum урон Cap: 228518 (25% Физическая Атака + 1,550 × level + 35,500) | Приоритет прокачки: Высокий – Good урон output, especially against Высокий-HP враги. However, it's less impactful than her other skills because it doesn't provide team-wide benefits or synergy. Upgrade this last, after focusing on her passive, blind, and ultimate abilities.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/qing-mao/dragons-claw-icon.webp"
    },
    {
      "name": "4. Open Heart (Passive) (4. Open Heart (Passive))",
      "name_en": "4. Open Heart (Passive)",
      "type": "Пассивное умение",
      "desc": "This passive skill makes Qing Mao an Броня shredder. Every time she attacks an enemy, she permanently reduces their Броня for the rest of the battle. This stacking effect means that the longer the fight goes on, the more vulnerable враги become to physical урон from your entire team. Think of it like peeling away layers of protection each attack makes the enemy weaker. When you unlock this Ascension skill, Open Heart becomes even more devastating. In addition to reducing Броня, Qing Mao now decreases the enemy's maximum Здоровье by 100% of her basic attack урон (up to 40% reduction). This means tanky враги lose a huge chunk of their Здоровье pool permanently, making them much easier to eliminate. While Ascension skills take time to unlock, this enhancement makes Open Heart even more valuable.",
      "formula": "Броня Reduction Formula: 470 за удар (4 × level +110) | Приоритет прокачки: Очень Высокий – This is Qing Mao's most important skill. The Броня reduction amplifies урон from your entire team, not just Qing Mao. More Броня reduction = more урон everyone deals. Always upgrade this first. | Max Здоровье Reduction: Up to 40% (100% of basic attack урон)",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/qing-mao/open-heart-icon.webp"
    }
  ],
  "rufus": [
    {
      "name": "Rakashi’s Barrier (Rakashi’s Barrier)",
      "name_en": "Rakashi’s Barrier",
      "type": "Ультимативное умение",
      "desc": "Rufus creates a magic щит that protects the entire team. This щит absorbs all incoming magic урон and gets stronger with Rufus’s Магическая Атака stat.",
      "formula": "Приоритет прокачки: Высокий - This is Rufus's most important skill. It protects the whole team from dangerous magic attacks. The stronger the skill, the more magic урон it can block.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/rufus/rakashis-barrier.webp"
    },
    {
      "name": "Rakashi’s Mockery (Rakashi’s Mockery)",
      "name_en": "Rakashi’s Mockery",
      "type": "Активное умение",
      "desc": "Rufus attacks the enemy with the highest magic power. It deals урон over time for 4 seconds. The урон depends on his Магическая Атака.",
      "formula": "Приоритет прокачки: Средний - This skill helps weaken strong enemy mages. It does extra урон over time but is not as essential as his щит or resurrection.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/rufus/rakashis-mockery.webp"
    },
    {
      "name": "Devourer of (Devourer of)",
      "name_en": "Devourer of",
      "type": "Активное умение",
      "desc": "Rufus heals himself by converting part of the урон blocked by his щит into Здоровье. He recovers 65% of the урон absorbed by Rakashi’s Barrier.",
      "formula": "",
      "priority": "Средний - This skill keeps Rufus alive longer, especially against magic teams. It works well with his щит, but doesn't protect others.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/rufus/devourer-of.webp"
    },
    {
      "name": "Rakashi’s Oath (Rakashi’s Oath)",
      "name_en": "Rakashi’s Oath",
      "type": "Пассивное умение",
      "desc": "Rufus can only die from physical урон. If a magic or pure урон attack kills him, he revives with some Здоровье, based on his Магическая Атака.",
      "formula": "",
      "priority": "Низкий - This passive is very useful, but it works even without upgrades. Leveling it up only increases how much Здоровье he revives with.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/rufus/rakashis-oath.webp"
    }
  ],
  "sebastian": [
    {
      "name": "Ode to Serenity (Ode to Serenity)",
      "name_en": "Ode to Serenity",
      "type": "Ультимативное умение",
      "desc": "This is Sebastian’s ultimate skill. It instantly removes all debuffs from your team and creates a щит that blocks 15 new debuffs from being applied. In simple terms, it “cleans” your team and then prevents враги like Lian, Satori, or Jorgen from disabling your союзники again.",
      "formula": "Приоритет прокачки: Очень Высокий – This is his strongest ability because it guarantees your team stays free from Контролёр effects, making it the first skill you should max out.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/sebastian/ode-to-serenity.webp"
    },
    {
      "name": "Battle Song (Battle Song)",
      "name_en": "Battle Song",
      "type": "Активное умение",
      "desc": "Умение персонажа Себастьян.",
      "formula": "This skill increases the critical hit chance of all союзники for 5 seconds. Formula: (0.1% Физическая Атака + Level * 0.2 + 15)% . That means the stronger your Sebastian’s Физическая Атака, the higher the bonus critical chance your team gets. | Приоритет прокачки: Высокий – Critical chance is a huge урон booster for many heroes (like Jhu , Yasmine , or Ishmael ). Upgrade this second, right after his ultimate.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/sebastian/battle-song.webp"
    },
    {
      "name": "Striking Solo (Striking Solo)",
      "name_en": "Striking Solo",
      "type": "Активное умение",
      "desc": "Умение персонажа Себастьян.",
      "formula": "While Battle Song is active, союзники’ critical hits deal extra pure урон. Formula: (0.12% Физическая Атака + Level * 0.2 + 4)% of the critical урон dealt . “Pure урон” ignores Броня and Защита от Магии, so this adds a lot of value in long fights. | Приоритет прокачки: Средний Высокий – This skill is powerful but works best only if you already have crit-based урон dealers. Upgrade after Ode to Serenity and Battle Song.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/sebastian/striking-solo.webp"
    },
    {
      "name": "Public Idol (Public Idol)",
      "name_en": "Public Idol",
      "type": "Пассивное умение",
      "desc": "Умение персонажа Себастьян.",
      "formula": "Sebastian enters battle with extra energy, allowing him to cast Ode to Serenity faster. Formula: (0.0595% Физическая Атака + Level * 0.2 + 8)% . This means at the start of every fight he’s already closer to using his ultimate.",
      "priority": "Средний – It helps, but since Sebastian gains energy quickly in battles anyway, this is less important than his other skills.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/sebastian/public-idol.webp"
    }
  ],
  "somna": [
    {
      "name": "4th Skill - Domain of Tranquility (4th Skill - Domain of Tranquility)",
      "name_en": "4th Skill - Domain of Tranquility",
      "type": "Ультимативное умение",
      "desc": "Умение персонажа Сомна.",
      "formula": "In-game description: Passive skill. When an opponent deals урон to Somna or adjacent союзники, 1 Sleepiness effect is applied to the enemy who dealt the урон. If the урон was dealt by an ultimate ability, 2 Sleepiness effects are applied. This effect can trigger no more often than once every 1s. Sleepiness chance is lowered if the target's level is above 130. | Skill Explanation: враги help Somna build her Контролёр simply by attacking her area. Ultimate урон is punished harder with two stacks, creating a fast path toward Counting Sheep's transformation. | Приоритет прокачки: Высокий – It accelerates Somna's whole Sleepiness engine, especially against area and ultimate урон, but it still needs her active Контролёр skills to cash in those stacks.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/somna/domain-of-tranquility-icon.webp"
    }
  ],
  "thea": [
    {
      "name": "Solar Sanctuary (Solar Sanctuary)",
      "name_en": "Solar Sanctuary",
      "type": "Ультимативное умение",
      "desc": "Solar Sanctuary is Thea’s ultimate healing skill, restoring Здоровье to the entire team. Its power scales with Магическая Атака, making it stronger as she develops.",
      "formula": "Ascension skill: With ascension, this ability becomes Blessed Solar Sanctuary : any excess healing turns into a щит that absorbs incoming урон a strong advantage in extended battles.",
      "priority": "Высокий",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/thea/solar-sanctuary.webp"
    },
    {
      "name": "Healing Beam (Healing Beam)",
      "name_en": "Healing Beam",
      "type": "Активное умение",
      "desc": "Healing Beam targets the ally with the lowest Здоровье, delivering a focused исцеление that scales with Магическая Атака. It's essential for saving key teammates in critical moments.",
      "formula": "Ascension skill: With ascension, it becomes Radiant Healing Beam : the healed ally takes 50% less урон for 5 seconds, adding strong protection after the исцеление lands.",
      "priority": "Очень Высокий",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/thea/healing-beam.webp"
    },
    {
      "name": "Vow of Silence (Vow of Silence)",
      "name_en": "Vow of Silence",
      "type": "Активное умение",
      "desc": "A useful crowd Контролёр skill that silences враги, stopping them from casting skills for 3 seconds. Effective against magic-heavy teams.",
      "formula": "",
      "priority": "Средний",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/thea/vow-of-silence.webp"
    },
    {
      "name": "Second Wind (Second Wind)",
      "name_en": "Second Wind",
      "type": "Пассивное умение",
      "desc": "A passive boost to speed for союзники below 30% Здоровье. Nice bonus in the background, especially for speeding up clutch plays or healers and урон dealers recovering from the brink.",
      "formula": "",
      "priority": "Низкий",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/thea/second-wind.webp"
    }
  ],
  "yasmine": [
    {
      "name": "Dance of Death (Dance of Death)",
      "name_en": "Dance of Death",
      "type": "Ультимативное умение",
      "desc": "Yasmine paralyzes the last enemy who attacked her for 3 seconds, teleports behind them, strikes 7 times, and applies an Ассасин’s Mark. While this skill is active, she cannot receive debuffs. After the attack, she returns to her original position and continues to attack the marked target. This is Yasmine’s main урон skill and the core of her gameplay. It deals massive single-target урон and makes her untouchable while active.",
      "formula": "урон Formula: 40% Физическая Атака + 40 × Level за удар. | Calculated урон: 0.4 × 89,672 + 40 × 130 = 41,069 урон за удар . Since the skill hits 7 times, the total burst урон is approximately 287,482 before defenses. | Приоритет прокачки: 1 (Highest) — This skill defines Yasmine’s entire strategy. Upgrading it first greatly increases her burst урон and survivability.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/yasmine/dance-of-death.webp"
    },
    {
      "name": "Assassin's Instinct (Assassin's Instinct)",
      "name_en": "Assassin's Instinct",
      "type": "Активное умение",
      "desc": "When Dance of Death is used, Yasmine gains bonus critical hit chance and Уклонение for 10 seconds. This makes her harder to hit and increases her chances to land critical hits. This skill boosts both her offense and defense, especially during her most dangerous moments right after using her ultimate skill. Расчётный бонус: 0.4 × 89,672 + 40 × 130 + 500 = 41,569 bonus Critical Hit Chance and 41,569 bonus Уклонение for 10 seconds.",
      "formula": "Формула эффекта: 40% Физическая Атака + 40 × Level + 500 for bonus Critical Hit Chance and Уклонение .",
      "priority": "2 — A great follow-up to improve her survivability and ensure more poison stacks through critical hits.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/yasmine/assassins-instinct.webp"
    },
    {
      "name": "Embrace of Pain (Embrace of Pain)",
      "name_en": "Embrace of Pain",
      "type": "Активное умение",
      "desc": "Yasmine’s critical hits poison враги. If a poisoned enemy is hit again, the poison duration resets and the урон stacks up to 10 times. Each poison effect deals pure урон over time. This skill adds consistent урон during long fights. The stacking poison can finish off враги even if they survive her main skill.",
      "formula": "урон Formula: 33% Физическая Атака + 30 × Level pure урон per poison stack every 5 seconds. | Calculated урон: 0.33 × 89,672 + 30 × 130 = 33,492 pure урон за стак every 5 seconds. At 10 stacks, this reaches approximately 334,918 pure урон every 5 seconds before reductions or cleanses.",
      "priority": "3 — While strong, it depends heavily on critical hits. Level it after boosting her main attack and crit rate.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/yasmine/embrace-of-pain.webp"
    },
    {
      "name": "Unknown Toxin (Unknown Toxin)",
      "name_en": "Unknown Toxin",
      "type": "Пассивное умение",
      "desc": "враги poisoned by Yasmine receive less healing. Each time they are healed, a portion of it is blocked based on Yasmine’s stats. While useful against healing-heavy teams, it is situational and doesn’t directly increase her урон output.",
      "formula": "Формула блокировки лечения: 20% Физическая Атака + 30 × Level + 500 blocked healing per исцеление. | Расчётный эффект: 0.2 × 89,672 + 30 × 130 + 500 = 22,334 healing blocked each time a poisoned enemy is healed. | Приоритет прокачки: 4 (Lowest) — It's helpful in specific fights, but it's the least important for raw урон. Upgrade this last.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/yasmine/unknown-toxin.webp"
    }
  ],
  "arachne": [
    {
      "name": "Skill 1: Hyper Jump (Skill 1: Hyper Jump)",
      "name_en": "Skill 1: Hyper Jump",
      "type": "Ультимативное умение",
      "desc": "Arachne makes a Hyper Jump towards the lowest-Здоровье enemy , dealing 74,135 magic урон, and leaps back. The jump triggers an explosion wave on hitting the target, stunning nearby враги for 5 seconds . This is her primary engagement tool that initiates combat and provides crucial crowd Контролёр.",
      "formula": "урон Formula: 74,135 ( 95% Магическая Атака + Level × 60 ) | Приоритет прокачки: Высокий – This is Arachne's main урон ability with the highest base magic урон ( 74,135 ). Upgrading it increases both урон output and the reliability of her engagement. The 5-second stun duration makes this skill invaluable for team fights, allowing your team to focus down враги while they're incapacitated. Combined with her 80% Вампиризм , this skill also helps Arachne sustain herself during combat by healing for significant amounts with each hit.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/arachne/hyper-jump-icon.webp"
    },
    {
      "name": "Skill 2: Demolition Robot (Skill 2: Demolition Robot)",
      "name_en": "Skill 2: Demolition Robot",
      "type": "Активное умение",
      "desc": "Arachne summons a monster that charges at the first enemy it sees, exploding and dealing 26,148 magic урон while stunning враги for 2 seconds . This skill adds additional crowd Контролёр to Arachne's arsenal and provides consistent урон during extended fights.",
      "formula": "Explosion урон Formula: 26,148 ( 30% Магическая Атака + Level × 40 ) | Приоритет прокачки: Средний – While this skill provides useful crowd Контролёр with a 2-second stun, its урон output ( 26,148 ) is significantly lower than Hyper Jump. The stun duration is also shorter. Upgrade this skill after prioritizing her more impactful abilities. However, the additional Контролёр can be valuable in Контролёр-focused team compositions, especially when paired with heroes like Lian or Polaris.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/arachne/demolition-robot-icon.webp"
    },
    {
      "name": "Skill 3: Minefield (Skill 3: Minefield)",
      "name_en": "Skill 3: Minefield",
      "type": "Активное умение",
      "desc": "Arachne triggers a minefield under nearby враги, dealing 21,357 pure урон. Pure урон is special because it completely ignores both Броня and Защита от Магии, making it extremely effective against tanky враги that would normally resist magical attacks.",
      "formula": "Pure урон Formula: 21,357 ( 25% Магическая Атака + Level × 30 + 600 ) | Приоритет прокачки: Средний-Высокий – The pure урон nature of this skill makes it incredibly valuable despite the lower урон number ( 21,357 ). Since pure урон ignores all defenses, every point of урон translates directly to enemy Здоровье loss. This is particularly effective against heroes with Высокий Броня or Защита от Магии like Galahad, Aurora, or Corvus. Upgrade this skill before Demolition Robot but after Hyper Jump and Plasma Explosion to maximize your anti-Танк potential.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/arachne/minefield-icon.webp"
    },
    {
      "name": "Skill 4: Plasma Explosion (Ultimate) (Skill 4: Plasma Explosion (Ultimate))",
      "name_en": "Skill 4: Plasma Explosion (Ultimate)",
      "type": "Пассивное умение",
      "desc": "If the target's Здоровье drops below 20% during Hyper Jump, Arachne triggers a devastating Plasma Explosion dealing a massive 165,652 pure урон. This is Arachne's execution ability that finishes off weakened враги. The pure урон ensures even the tankiest heroes cannot escape death when they reach the threshold.",
      "formula": "Pure урон Formula: 165,652 ( 200% Магическая Атака + Level × 200 + 8,000 ) | Приоритет прокачки: Очень Высокий – This is Arachne's most crucial skill with an absolutely devastating 165,652 pure урон output nearly 8 times stronger than Minefield! As an execution ability, it guarantees kills on враги below 20% Здоровье regardless of their defensive stats. This makes Arachne a nightmare for enemy supports and урон dealers who drop Низкий in fights. Prioritize maxing this skill first to ensure your executions are successful and to maximize your impact in team fights. The scaling with Магическая Атака ( 200% ) also means this benefits greatly from equipment upgrades.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/arachne/plasma-explosion-icon.webp"
    }
  ],
  "astaroth": [
    {
      "name": "Flame Veil (Flame Veil)",
      "name_en": "Flame Veil",
      "type": "Ультимативное умение",
      "desc": "Casts a щит that blocks physical урон on the entire team. The щит's capacity is shared between all team members.",
      "formula": "",
      "priority": "1 (Highest)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/astaroth/astaroth-1st-skill.webp"
    },
    {
      "name": "Devastation (Devastation)",
      "name_en": "Devastation",
      "type": "Активное умение",
      "desc": "Astaroth spews a flare of hellfire, burning up some of the energy accumulated by the furthest enemy.",
      "formula": "",
      "priority": "4 (Lowest)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/astaroth/astaroth-2nd-skill.webp"
    },
    {
      "name": "Demon's Allegiance (Demon's Allegiance)",
      "name_en": "Demon's Allegiance",
      "type": "Активное умение",
      "desc": "Passive skill. Astaroth maintains a connection with the ally who has the least Здоровье left and takes on a part of the physical урон inflicted against that ally.",
      "formula": "",
      "priority": "3",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/astaroth/astaroth-3rd-skill.webp"
    },
    {
      "name": "Last Word (Last Word)",
      "name_en": "Last Word",
      "type": "Пассивное умение",
      "desc": "Once per battle, Astaroth resurrects a fallen ally (or himself).",
      "formula": "",
      "priority": "2",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/astaroth/astaroth-4th-skill.webp"
    }
  ],
  "celeste": [
    {
      "name": "4th - Zenith (4th - Zenith)",
      "name_en": "4th - Zenith",
      "type": "Ультимативное умение",
      "desc": "This is Celeste’s passive ability. In Dark Form, her basic attacks deal magic урон. In Light Form, her basic attacks исцеление союзники a little. While this is helpful, it doesn’t have as much impact as her other abilities.",
      "formula": "Formula: Dark – (70% Mag. atk. + Ivl * 150 + 6000) | Light – (40% Mag. atk. + Ivl * 150 + 6000) . | Приоритет прокачки: Низкий – Upgrade this last. It is only a bonus effect, while her other skills are more important for battles.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/celeste/zenith.webp"
    }
  ],
  "corvus": [
    {
      "name": "1. Strike of the Damned (1. Strike of the Damned)",
      "name_en": "1. Strike of the Damned",
      "type": "Ультимативное умение",
      "desc": "Corvus smashes enemy frontline, reducing all their defenses. Each Undead ally makes this 10% stronger.",
      "formula": "урон Formula: (100% Физическая Атака + Level × 100) | Defense Reduction Formula: (10% Физическая Атака + Level × 25) | Приоритет прокачки: Высокий – This is Corvus' main offensive skill. The defense reduction helps your entire team deal more урон, especially against tanks. Upgrade this early as it scales well with both Физическая Атака and Hero Level.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/corvus/strike-of-the-damned.webp"
    },
    {
      "name": "2. Unity of the Damned (2. Unity of the Damned)",
      "name_en": "2. Unity of the Damned",
      "type": "Активное умение",
      "desc": "Corvus boosts attack power for all Undead союзники (like Morrigan, Lyria, Phobos) for 10 seconds.",
      "formula": "Attack Bonus Formula: (25% Физическая Атака + Level × 15)",
      "priority": "Средний Высокий – Only valuable if you have other Undead heroes. The bonus scales with Физическая Атака, so upgrade this if running an Undead team, otherwise prioritize other skills.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/corvus/unity-of-the-damned.webp"
    },
    {
      "name": "3. Altar of Souls (3. Altar of Souls)",
      "name_en": "3. Altar of Souls",
      "type": "Активное умение",
      "desc": "Summons an altar that damages враги whenever they attack your team. The altar's Сила depends on Corvus' Здоровье.",
      "formula": "урон Formula: (1.2% Здоровье + Level × 10 + 10) | Здоровье Formula: (90% Здоровье + Level × 200 + 4000) | Приоритет прокачки: Очень Высокий – Corvus' most powerful skill. The altar scales with his massive Здоровье pool, dealing урон while protecting your team. Always max this first as it makes Corvus both tankier and more dangerous.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/corvus/altar-of-souls.webp"
    },
    {
      "name": "4. Royal Defense (4. Royal Defense)",
      "name_en": "4. Royal Defense",
      "type": "Пассивное умение",
      "desc": "When an ally falls below 20% Здоровье, Corvus pulls them to safety (8 second cooldown). No урон formula - this is a positioning effect that doesn't scale with stats.",
      "formula": "",
      "priority": "Средний – While potentially life-saving, this only triggers when союзники are nearly dead and has a long cooldown. Upgrade last as it doesn't improve with levels or stats.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/corvus/royal-defense.webp"
    }
  ],
  "dorian": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "folio": [
    {
      "name": "Weight of Knowledge (Weight of Knowledge)",
      "name_en": "Weight of Knowledge",
      "type": "Ультимативное умение",
      "desc": "This is Folio’s strongest and most dangerous skill. He drops a magical ink blot on the враги, which grows and explodes after 5 seconds. The longer it charges, the more урон it does. It also deals extra урон based on how much smarter Folio is than his враги!",
      "formula": "Приоритет прокачки: Высокий – This is Folio’s main урон ability. Upgrading it boosts his teamfight power and punishes враги with Низкий Интеллект.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/folio/weight-of-knowledge.webp"
    },
    {
      "name": "Mind Stealer (Mind Stealer)",
      "name_en": "Mind Stealer",
      "type": "Активное умение",
      "desc": "This skill targets the smartest enemy and steals a big chunk of their Интеллект, making them weaker and boosting Folio. If it fails to steal, it deals massive magic урон instead.",
      "formula": "Приоритет прокачки: Высокий – This makes Folio even smarter and stronger during battles. If stealing fails, the backup урон is still very powerful.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/folio/mind-stealer.webp"
    },
    {
      "name": "Inky Friends (Inky Friends)",
      "name_en": "Inky Friends",
      "type": "Активное умение",
      "desc": "Folio creates two magical clones that look like friendly blobs of ink. They don’t move, but they protect your team and apply weaker versions of his second skill to nearby враги when hit.",
      "formula": "Приоритет прокачки: Средний – This skill adds protection and chip урон, but it's not as strong or impactful as his main урон or Интеллект-stealing spells.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/folio/inky-friends.webp"
    },
    {
      "name": "Superior Copying (Superior Copying)",
      "name_en": "Superior Copying",
      "type": "Пассивное умение",
      "desc": "This is a passive skill. When Folio’s clones disappear, he switches places with the one that has the most Здоровье. If he dies while the clones are active, he can come back using the strongest clone’s Здоровье.",
      "formula": "Приоритет прокачки: Низкий – It’s a great survival skill, but doesn’t improve урон or Контролёр. Useful, but not your main upgrade focus early on.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/folio/superior-copying.webp"
    }
  ],
  "galahad": [
    {
      "name": "1. Iron Skies (Ultimate) (1. Iron Skies (Ultimate))",
      "name_en": "1. Iron Skies (Ultimate)",
      "type": "Ультимативное умение",
      "desc": "Galahad calls down swords of justice from above, striking all враги on the battlefield. This is his ultimate ability , triggered when his energy bar fills completely. The swords rain down dealing physical урон to multiple враги simultaneously, making it excellent for damaging entire enemy teams. 💉 Вампиризм Synergy: Since this skill hits multiple враги , it triggers massive healing through Galahad's 45% Вампиризм. The more враги you hit, the more Здоровье you recover—making this ultimate both an offensive and defensive tool. After unlocking Ascension V, Iron Skies gains a powerful additional effect. Now, when the swords strike враги who have less than 30% Здоровье remaining, those враги receive the Retaliation debuff (maximum 5 враги per cast). This enhancement transforms your ultimate from pure урон into a finisher that can trigger multiple counter-attacks against weakened foes. Ascension Note: This upgrade makes Iron Skies even more valuable, but remember that Ascension takes considerable time to unlock. Even without it, the base skill deserves top priority.",
      "formula": "урон Formula: 28,628 (30% Физическая Атака + 60 × level) | Приоритет прокачки: Очень Высокий – This is Galahad's ultimate ability and your primary source of area урон. Every upgrade increases the урон significantly, affecting all враги hit. Since it's your ultimate, it charges throughout battle and can turn fights around. Prioritize this skill first as it provides the best return on investment for both урон output and team fight impact. | Effect: Applies Retaliation to враги below 30% Здоровье (max 5 targets)",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/galahad/iron-skies-icon.webp"
    },
    {
      "name": "2. Unstoppable Charge (2. Unstoppable Charge)",
      "name_en": "2. Unstoppable Charge",
      "type": "Активное умение",
      "desc": "Galahad charges forward fearlessly, breaking through any Контролёр effects (stuns, freezes, silences) that are affecting him. As he dashes, he deals physical урон to all nearby враги in his path. This skill has a 15-second cooldown , meaning Galahad can use it multiple times during a battle. It's essential for both mobility and survivability, allowing him to escape dangerous situations or dive into enemy formations. Cooldown: 15 seconds 💉 Вампиризм Synergy: Each enemy hit during the charge provides healing through 45% Вампиризм. With frequent activations (every 15s), this skill constantly sustains Galahad during prolonged fights. Upon reaching Ascension II, Unstoppable Charge gains an automatic trigger: whenever the closest enemy activates their ultimate ability, Galahad immediately charges at them, bypassing his normal ability queue. This can only occur once every 7 seconds. Additionally, the first enemy hit by this reactive charge loses 30% of their energy , potentially delaying or preventing their next ultimate. Ascension Note: This enhancement adds significant strategic value by interrupting enemy ultimates and controlling energy. However, since Ascension II comes much earlier than V, you might have this sooner, making the skill even more worthy of investment.",
      "formula": "урон Formula: 41,214 (50% Физическая Атака + 50 × level) | Приоритет прокачки: Высокий – This skill keeps Galahad alive and fighting by removing crowd Контролёр effects that would otherwise neutralize him. The урон is respectable and it activates frequently due to the short cooldown. Upgrade this second to improve both survivability and sustained урон. The Контролёр-break mechanic is invaluable against teams with heavy crowd Контролёр. | Effect: Auto-triggers when nearest enemy uses ultimate (once per 7s) + Target loses 30% energy",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/galahad/unstoppable-charge-icon.webp"
    },
    {
      "name": "3. Retaliation (Periodic) (3. Retaliation (Periodic))",
      "name_en": "3. Retaliation (Periodic)",
      "type": "Активное умение",
      "desc": "Galahad performs a special counter-attack, automatically striking the enemy with the lowest current Здоровье . This is a periodic skill that activates automatically every 20.5 seconds throughout the battle. It's Galahad's way of finishing off weakened враги, dealing substantial physical урон . The skill smartly targets whoever is closest to death, making it excellent for securing eliminations. Cooldown: 20.5 seconds",
      "formula": "урон Formula: 61,042 (80% Физическая Атака + 50 × level) | 💉 Вампиризм Synergy: With the highest урон multiplier (80% Физическая Атака), this skill provides Galahad's largest single-target исцеление through Вампиризм. Each Retaliation strike can recover substantial Здоровье, making it crucial for sustained survivability. | Приоритет прокачки: Высокий – This skill has the highest base урон of all Galahad's abilities and automatically targets the most vulnerable enemy. It's extremely efficient for finishing off opponents that your team has weakened. Upgrade this alongside Unstoppable Charge, as the Высокий урон multiplier means each level provides significant урон increases. This skill has no Ascension upgrade, so what you invest goes directly into proven, reliable урон.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/galahad/retaliation-icon.webp"
    },
    {
      "name": "4. Pride of Harun (Periodic) (4. Pride of Harun (Periodic))",
      "name_en": "4. Pride of Harun (Periodic)",
      "type": "Пассивное умение",
      "desc": "Cooldown: 18 seconds",
      "formula": "This skill has both passive and active components. Passive: Galahad's Iron Skies ultimate now deals an additional 17,135 pure урон with every cast. Active: Every 18 seconds, Galahad enters a heroic state for 10 seconds, during which ALL his skills and basic attacks deal extra pure урон . Pure урон ignores both Броня and Защита от Магии, making it extremely valuable. | 💉 Вампиризм Synergy: Since Вампиризм works with all урон dealt by abilities (physical, magic, AND pure), this extra pure урон also heals Galahad through his 45% Вампиризм! This makes Pride of Harun significantly more valuable for sustained survivability—you're healing from both physical AND pure урон portions simultaneously. | Passive Bonus Formula: 17,135 pure урон added to Iron Skies (20% Физическая Атака + 25 × level) | Active Buff: All skills/attacks +17,135 pure урон for 10 seconds | Приоритет прокачки: Средний-Высокий – While pure урон is excellent and this skill enhances your ultimate permanently, it should be upgraded after the first three skills. The passive bonus only affects Iron Skies (which you're already upgrading), and the active buff, while strong, has less immediate impact than your other abilities. However, it's still worth upgrading steadily—just prioritize your ultimate, charge, and retaliation first. This skill scales well but benefits most when your other skills are already strong.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/galahad/pride-of-harun-icon.webp"
    }
  ],
  "helios": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "jorgen": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "kayla": [
    {
      "name": "4th – Overheat (4th – Overheat)",
      "name_en": "4th – Overheat",
      "type": "Ультимативное умение",
      "desc": "After Kayla stops burning, she enters the Overheated state, gaining additional Броня and Защита от Магии . This helps her survive a bit longer after her fiery assault ends.",
      "formula": "Броня Bonus Formula: (27240 + 35% Физическая Атака + Ivl * 20 + 800) . Защита от Магии Bonus Formula: (27240 + 35% Физическая Атака + Ivl * 20 + 800) . | Приоритет прокачки: Средний – While it helps her defense, it doesn’t increase her offensive potential. Upgrade this last, since her main value comes from урон rather than defense boosts.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/kayla/overheat.webp"
    }
  ],
  "keira": [
    {
      "name": "Blade Whirlwind (Blade Whirlwind)",
      "name_en": "Blade Whirlwind",
      "type": "Ультимативное умение",
      "desc": "Keira throws spinning blades that travel to the farthest enemy and come back, hitting all враги in their path. When the blades return, they silence враги for 4 seconds, which stops them from using their skills temporarily. This is her strongest skill, dealing урон to multiple враги and helping Контролёр the battle. Ascension skill: Raging Blade Whirlwind – After the blades return, Keira gains the Enraged Soul buff for 2 seconds, greatly boosting her speed.",
      "formula": "Приоритет прокачки: Высокий – This is Keira’s main урон and Контролёр skill. It affects multiple враги and gains a powerful buff after ascension.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/keira/skill-1.webp"
    },
    {
      "name": "Enraged Soul (Enraged Soul)",
      "name_en": "Enraged Soul",
      "type": "Активное умение",
      "desc": "This skill increases Keira’s attack and skill speed for 5 seconds, up to 300%. This makes her deal more урон very quickly, especially after she uses Blade Whirlwind. It’s great for fast-paced attacks during a fight. Ascension skill: Undying Enraged Soul – Keira revives once per battle with some Здоровье and becomes Undead, continuing to fight until the battle ends. This gives her a second chance if she is defeated.",
      "formula": "Приоритет прокачки: Средний – The speed boost improves her overall урон. After ascension, it also adds survivability with resurrection.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/keira/skill-2.webp"
    },
    {
      "name": "Dancing Blades (Dancing Blades)",
      "name_en": "Dancing Blades",
      "type": "Активное умение",
      "desc": "This passive skill lets Keira’s normal attacks bounce between враги. Each bounce deals 25% of the original урон. This helps her hit more враги at once, but the урон is smaller compared to her main skills.",
      "formula": "Приоритет прокачки: Низкий – It adds some extra урон, but it’s not as impactful as her active skills, especially early in the game.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/keira/skill-3.webp"
    },
    {
      "name": "Piercing Pain (Piercing Pain)",
      "name_en": "Piercing Pain",
      "type": "Пассивное умение",
      "desc": "This passive skill gives Keira extra урон when the enemy's Броня is lower than her Броня penetration. It helps her hit harder against weaker targets, but it depends on the enemy’s defense and doesn't work well against all heroes.",
      "formula": "Приоритет прокачки: Lowest – The extra урон only works in certain cases and doesn’t affect all враги. It’s not reliable early on.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/keira/skill-4.webp"
    }
  ],
  "martha": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "mojo": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "morrigan": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "mushy": [
    {
      "name": "Perfect Copy (Perfect Copy)",
      "name_en": "Perfect Copy",
      "type": "Ультимативное умение",
      "desc": "Perfect Copy creates an inactive Shroom with missing Здоровье. Once fully healed, it activates and becomes a full clone able to attack and use all learned skills. Up to 3 active Shrooms can exist, greatly increasing team pressure and battlefield Контролёр. Ascension Skill: Unlocked at Ascension V . This new ascension effect keeps Shroom's copies active even after Mushy & Shroom die, which greatly improves their value in longer fights and prevents all generated pressure from disappearing when the main hero falls.",
      "formula": "Formula (Здоровье Scaling): 545,230 (50% Здоровье + Lvl * 100) | Effect: Shroom's copies stay active after Mushy and Shroom's death",
      "priority": "Очень Высокий – This is Mushy & Shroom’s strongest ability because all their gameplay revolves around healing the clones to activate them. More levels = healthier clones = faster activation = more battlefield presence.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/mushy-and-shroom/perfect-copy.webp"
    },
    {
      "name": "Wild Growth (Wild Growth)",
      "name_en": "Wild Growth",
      "type": "Активное умение",
      "desc": "Wild Growth is a passive skill that heals inactive Shrooms and Spore Mushrooms automatically. This healing gets stronger with each active clone, making the entire kit ramp up extremely quickly. More healing = faster clone activation = more silence and explosions later. Ascension Skill: Unlocked at Ascension II . When a Spore Mushroom or a Shroom copy fully restores its Здоровье for the first time, Mushy & Shroom are healed. This adds an extra sustain loop on top of the hero's normal healing engine.",
      "formula": "Formula (Healing per second): 2.75% + 7,610 (8% Магическая Атака + Lvl * 20) | Приоритет прокачки: Высокий – This passive accelerates everything Mushy & Shroom do. More healing means faster clone activations, more explosions, and stronger урон scaling later. | Formula (Healing): From Shroom: 130,250 (200% Магическая Атака + 5,000) From Spore Mushroom: 13,025 (20% Магическая Атака + 500)",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/mushy-and-shroom/wild-growth.webp"
    },
    {
      "name": "Branching Mycelium (Branching Mycelium)",
      "name_en": "Branching Mycelium",
      "type": "Активное умение",
      "desc": "Branching Mycelium spawns 3 Spore Mushrooms that become active after being fully healed. Once activated, they run toward the enemy and explode, dealing magic урон and applying silence for 4 seconds. Cooldown: 11s",
      "formula": "Formula (Explosion урон): 52,938 (70% Магическая Атака + Lvl * 70) | Formula (Spore Starting Здоровье): 170,314 (16% Здоровье) | Приоритет прокачки: Средний-Высокий – The silence and AoE magic урон are extremely strong, but the value depends on how fast the spores are healed. Still very important for Контролёр and burst.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/mushy-and-shroom/branching-mycelium.webp"
    },
    {
      "name": "Will-o'-the-Wisp (Will-o'-the-Wisp)",
      "name_en": "Will-o'-the-Wisp",
      "type": "Пассивное умение",
      "desc": "Cooldown: 18s",
      "formula": "Will-o’-the-Wisp deals magic урон to the nearest enemy. The урон increases based on healing received since the last cast: 50% of Mushy’s healing and 150% of allied healing is turned into additional урон. | Formula (Base Magic урон): 63,100 (80% Магическая Атака + Lvl * 100) | Formula (Max Extra урон): 208,235 (12% Здоровье + Lvl * 600 + 2,500) | Приоритет прокачки: Средний – The scaling урон is strong but inconsistent, because it depends on external healing. Good skill, but not as essential as clones, passives, and silence.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/mushy-and-shroom/will-o-the-wisp.webp"
    }
  ],
  "polaris": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "ninjaturtles": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "andvari": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "cleaver": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "faceless": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "fafnir": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "jhu": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "judge": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "lars": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "lian": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "phobos": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "satori": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "alvanor": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "artemis": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "astrid": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "cornelius": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "daredevil": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "ginger": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "jet": [
    {
      "name": "Elixir of Vigor (Elixir of Vigor)",
      "name_en": "Elixir of Vigor",
      "type": "Ультимативное умение",
      "desc": "Jet channels a life-giving elixir toward the ally with the highest Физическая Атака . While the effect is active, that ally gains increased Физическая Атака , 30% faster attack speed, and regenerates Здоровье every second until Jet’s energy runs out or he’s interrupted.",
      "formula": "Formula: ( 20% Магическая Атака + Ivl * 50) Физическая Атака boost. Здоровье regen per second: ( 25% Магическая Атака + Ivl * 50) . | Приоритет прокачки: Очень Высокий – This is Jet’s signature skill and his main source of team Поддержка. It can dramatically increase your main урон dealer’s performance, especially in physical teams like Dante, Yasmine, or K’arkh compositions.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/jet/elixir-of-vigor.webp"
    },
    {
      "name": "Acid Shot (Acid Shot)",
      "name_en": "Acid Shot",
      "type": "Активное умение",
      "desc": "Jet fires acid at the enemy with the highest Броня, reducing their Броня for 8 seconds. This helps your урон dealers hit harder, especially against tough tanks.",
      "formula": "Formula: ( 10% Магическая Атака + Ivl * 25) Броня Reduction. | Приоритет прокачки: Средний-Высокий – The effect is strong in physical teams, but less impactful if your main heroes deal magic or pure урон. Upgrade after his main and passive abilities.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/jet/acid-shot.webp"
    },
    {
      "name": "Potion of Fatigue (Potion of Fatigue)",
      "name_en": "Potion of Fatigue",
      "type": "Активное умение",
      "desc": "Jet throws a poisoned flask that prevents nearby враги from regenerating Здоровье for 8 seconds. While useful, this effect has limited value in endgame fights where most opponents rely on щит or burst mechanics instead of healing.",
      "formula": "Приоритет прокачки: Средний – The healing block can help against specific heroes like Maya or Celeste, but it’s situational. Upgrade last, since the impact is smaller in Высокий-level fights where healing is less dominant.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/jet/potion-of-fatigue.webp"
    },
    {
      "name": "Inordinate Fury (Inordinate Fury)",
      "name_en": "Inordinate Fury",
      "type": "Пассивное умение",
      "desc": "While Jet is alive, all союзники gain an increased chance to land critical hits. This passive effect makes the entire team more dangerous, especially heroes who rely on critical урон. When the Inordinate Fury arrow appears above your союзники’ heads during battle, it means they are receiving a critical hit chance bonus . However, this bonus only works for Физическая Атака heroes. Magic-based heroes do not benefit from this effect unless they have physical basic attacks . In that case, they can land critical hits with their basic attacks, but not with their skills.",
      "formula": "Formula: ( 2.5% Магическая Атака + Ivl * 15 + 100) Critical Hit Chance bonus. | Приоритет прокачки: Высокий – This passive runs constantly, boosting all союзники without requiring activation. It’s particularly effective in teams with critical-based урон dealers, multiplying Jet’s usefulness throughout the battle.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/jet/inordinate-fury.webp"
    }
  ],
  "karkh": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "maya": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "tristan": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "chaba": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "darkstar": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "elmir": [
    {
      "name": "4th – Many Truths (4th – Many Truths)",
      "name_en": "4th – Many Truths",
      "type": "Ультимативное умение",
      "desc": "This passive skill gives a chance to summon more clones when Elmir uses his second skill. It works automatically and helps create chaos on the battlefield.",
      "formula": "",
      "priority": "Низкий – Helpful in some situations, but it depends on other skills being used first. Upgrade this last.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/elmir/many-truths.webp"
    }
  ],
  "fox": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "kai": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "lilith": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "luther": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "markus": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "peppy": [
    {
      "name": "Умение 1",
      "name_en": "Skill 1",
      "type": "Ультимативное умение",
      "desc": "Главное умение.",
      "formula": "",
      "priority": "1 (Наивысший)"
    },
    {
      "name": "Умение 2",
      "name_en": "Skill 2",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "2"
    },
    {
      "name": "Умение 3",
      "name_en": "Skill 3",
      "type": "Активное умение",
      "desc": "Активное умение.",
      "formula": "",
      "priority": "3"
    },
    {
      "name": "Умение 4",
      "name_en": "Skill 4",
      "type": "Пассивное умение",
      "desc": "Пассивное умение.",
      "formula": "",
      "priority": "4 (Наименьший)"
    }
  ],
  "ziri": [
    {
      "name": "Focus of Hatred (Focus of Hatred)",
      "name_en": "Focus of Hatred",
      "type": "Ультимативное умение",
      "desc": "This skill makes Ziri shout and taunt all враги, forcing them to attack her instead of her союзники for 8 seconds. While taunting, she gets a big bonus to both Броня and Защита от Магии, reducing the урон she takes.",
      "formula": "Приоритет прокачки: Очень Высокий – This is Ziri’s core tanking tool. The stronger the skill, the better she absorbs урон and protects the team. It should be your top priority.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ziri/focus-of-hatred.webp"
    },
    {
      "name": "Reflection of Pain (Reflection of Pain)",
      "name_en": "Reflection of Pain",
      "type": "Активное умение",
      "desc": "This skill reflects all physical урон Ziri takes back at the attacker for 8 seconds. It's like a magical mirror great against physical heroes like Ishmael or Keira.",
      "formula": "Приоритет прокачки: Высокий – Very effective in physical matchups. Upgrading this skill boosts Ziri’s threat level and punishes урон dealers who try to burst her down.",
      "priority": "",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ziri/reflection-of-pain.webp"
    },
    {
      "name": "Shelter of Sands (Shelter of Sands)",
      "name_en": "Shelter of Sands",
      "type": "Активное умение",
      "desc": "When Ziri’s Здоровье drops below 30%, she burrows underground, avoiding all attacks and healing herself for 7 seconds. It happens automatically once every 15 seconds.",
      "formula": "",
      "priority": "Средний-Высокий – This is great for survival, especially in longer fights. Boost it to make Ziri last longer when focused by враги.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ziri/shelter-of-sands.webp"
    },
    {
      "name": "Fury of Akhreb Ummi (Fury of Akhreb Ummi)",
      "name_en": "Fury of Akhreb Ummi",
      "type": "Пассивное умение",
      "desc": "When Ziri comes out of hiding, she stuns and knocks back nearby враги and instantly activates her reflection skill. Great for disrupting front lines.",
      "formula": "",
      "priority": "Средний – While useful, this passive relies on her going underground first. Upgrade it later once your other skills are stronger.",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ziri/fury-of-akhreb-ummi.webp"
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
