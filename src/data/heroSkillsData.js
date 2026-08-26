export const HERO_SKILLS_DB = {
  "yasmine": [
    {
      "desc": "Yasmine paralyzes the last enemy who attacked her for 3 seconds, teleports behind them, strikes 7 times, and applies an Ассасин’s Mark. While this skill is active, she cannot receive debuffs. After the attack, she returns to her original position and continues to attack the marked target. This is Yasmine’s main урон skill and the core of her gameplay. It deals massive single-target урон and makes her untouchable while active.",
      "name": "Dance of Death (Dance of Death)",
      "type": "Ультимативное умение",
      "formula": "урон Formula: 40% Физическая Атака + 40 × Level за удар. | Calculated урон: 0.4 × 89,672 + 40 × 130 = 41,069 урон за удар . Since the skill hits 7 times, the total burst урон is approximately 287,482 before defenses. | Приоритет прокачки: 1 (Highest) — This skill defines Yasmine’s entire strategy. Upgrading it first greatly increases her burst урон and survivability.",
      "name_en": "Dance of Death",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/yasmine/dance-of-death.webp",
      "priority": ""
    },
    {
      "desc": "When Dance of Death is used, Yasmine gains bonus critical hit chance and Уклонение for 10 seconds. This makes her harder to hit and increases her chances to land critical hits. This skill boosts both her offense and defense, especially during her most dangerous moments right after using her ultimate skill. Расчётный бонус: 0.4 × 89,672 + 40 × 130 + 500 = 41,569 bonus Critical Hit Chance and 41,569 bonus Уклонение for 10 seconds.",
      "name": "Assassin's Instinct (Assassin's Instinct)",
      "type": "Активное умение",
      "formula": "Формула эффекта: 40% Физическая Атака + 40 × Level + 500 for bonus Critical Hit Chance and Уклонение .",
      "name_en": "Assassin's Instinct",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/yasmine/assassins-instinct.webp",
      "priority": "2 — A great follow-up to improve her survivability and ensure more poison stacks through critical hits."
    },
    {
      "desc": "Yasmine’s critical hits poison враги. If a poisoned enemy is hit again, the poison duration resets and the урон stacks up to 10 times. Each poison effect deals pure урон over time. This skill adds consistent урон during long fights. The stacking poison can finish off враги even if they survive her main skill.",
      "name": "Embrace of Pain (Embrace of Pain)",
      "type": "Активное умение",
      "formula": "урон Formula: 33% Физическая Атака + 30 × Level pure урон per poison stack every 5 seconds. | Calculated урон: 0.33 × 89,672 + 30 × 130 = 33,492 pure урон за стак every 5 seconds. At 10 stacks, this reaches approximately 334,918 pure урон every 5 seconds before reductions or cleanses.",
      "name_en": "Embrace of Pain",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/yasmine/embrace-of-pain.webp",
      "priority": "3 — While strong, it depends heavily on critical hits. Level it after boosting her main attack and crit rate."
    },
    {
      "desc": "враги poisoned by Yasmine receive less healing. Each time they are healed, a portion of it is blocked based on Yasmine’s stats. While useful against healing-heavy teams, it is situational and doesn’t directly increase her урон output.",
      "name": "Unknown Toxin (Unknown Toxin)",
      "type": "Пассивное умение",
      "formula": "Формула блокировки лечения: 20% Физическая Атака + 30 × Level + 500 blocked healing per исцеление. | Расчётный эффект: 0.2 × 89,672 + 30 × 130 + 500 = 22,334 healing blocked each time a poisoned enemy is healed. | Приоритет прокачки: 4 (Lowest) — It's helpful in specific fights, but it's the least important for raw урон. Upgrade this last.",
      "name_en": "Unknown Toxin",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/yasmine/unknown-toxin.webp",
      "priority": ""
    }
  ],
  "qingmao": [
    {
      "desc": "Qing Mao summons the dragon spirit of her brother, which strikes the nearest враги three times. Each hit deals physical урон , pushes враги back (disrupting their positioning), and applies a burning effect for 5 seconds. The burn deals additional урон over time. This is a powerful ultimate that combines burst урон, crowd Контролёр, and sustained урон. This Ascension transforms Qing Long into a devastating ultimate. For each blinded enemy on the battlefield (up to 5), the dragon deals one additional hit. If you've blinded 3 враги with Spear of Dawn, the dragon hits 6 times instead of 3 doubling the урон! This creates incredible synergy between her skills. The Ascension V upgrade is difficult to unlock (requires Высокий Ascension level), but it's what makes Qing Mao a top-tier урон dealer in the late game. Maximum Bonus Hits: 5 (requires 5 blinded враги)",
      "name": "1. Qing Long (Ultimate) (1. Qing Long (Ultimate))",
      "type": "Ультимативное умение",
      "formula": "урон за удар Formula: 36,772 (30% Физическая Атака + 75 × level) | Flame урон Formula: 21,914 (20% Физическая Атака + 30 × level) over 5 seconds | Приоритет прокачки: Высокий – A strong ultimate that deals significant урон. However, it becomes truly exceptional only after unlocking Ascension V, which adds extra hits based on blinded враги. Upgrade this third, after your passive and Spear of Dawn. | Extra урон за удар: 21,014 (20% Физическая Атака + 3,000) | Extra Flame урон: 10,207 (10% Физическая Атака + 1,200)",
      "name_en": "1. Qing Long (Ultimate)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/qing-mao/qing-long-icon.webp",
      "priority": ""
    },
    {
      "desc": "Qing Mao throws her spear at the nearest враги, blinding them for 3 seconds. Blinded враги have drastically reduced Меткость, causing many of their attacks to miss. This provides excellent crowd Контролёр and defensive value. More importantly, each blinded enemy on the battlefield increases the power of her ultimate ability (Qing Long), adding extra dragon strikes. Blind Duration: 3 seconds | Cooldown: 15 seconds",
      "name": "2. Spear of Dawn (Periodic) (2. Spear of Dawn (Periodic))",
      "type": "Активное умение",
      "formula": "урон Formula: 21,914 (20% Физическая Атака + 30 × level) | Приоритет прокачки: Очень Высокий – Essential for synergy with her ultimate. The blind effect provides both defense (враги miss attacks) and offense (triggers extra ultimate урон). This skill is the key to unlocking Qing Mao's full potential when combined with her Ascension V ultimate.",
      "name_en": "2. Spear of Dawn (Periodic)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/qing-mao/spear-of-dawn-icon.webp",
      "priority": ""
    },
    {
      "desc": "Qing Mao slashes the nearest enemy with a powerful claw attack that deals урон based on the target's current Здоровье. This means it's most effective against враги with Высокий Здоровье pools the more HP they have, the more урон this skill deals (up to a maximum cap). This makes it excellent for taking down tanky front-line heroes. The skill has a 7-second initial cooldown and then activates every 23 seconds. Cooldown: 23 seconds | Initial Cooldown: 7 seconds",
      "name": "3. Dragon's Claw (Periodic) (3. Dragon's Claw (Periodic))",
      "type": "Активное умение",
      "formula": "урон Formula: 21% of target's current Здоровье (0.1 × level + 10) | Maximum урон Cap: 228518 (25% Физическая Атака + 1,550 × level + 35,500) | Приоритет прокачки: Высокий – Good урон output, especially against Высокий-HP враги. However, it's less impactful than her other skills because it doesn't provide team-wide benefits or synergy. Upgrade this last, after focusing on her passive, blind, and ultimate abilities.",
      "name_en": "3. Dragon's Claw (Periodic)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/qing-mao/dragons-claw-icon.webp",
      "priority": ""
    },
    {
      "desc": "This passive skill makes Qing Mao an Броня shredder. Every time she attacks an enemy, she permanently reduces their Броня for the rest of the battle. This stacking effect means that the longer the fight goes on, the more vulnerable враги become to physical урон from your entire team. Think of it like peeling away layers of protection each attack makes the enemy weaker. When you unlock this Ascension skill, Open Heart becomes even more devastating. In addition to reducing Броня, Qing Mao now decreases the enemy's maximum Здоровье by 100% of her basic attack урон (up to 40% reduction). This means tanky враги lose a huge chunk of their Здоровье pool permanently, making them much easier to eliminate. While Ascension skills take time to unlock, this enhancement makes Open Heart even more valuable.",
      "name": "4. Open Heart (Passive) (4. Open Heart (Passive))",
      "type": "Пассивное умение",
      "formula": "Броня Reduction Formula: 470 за удар (4 × level +110) | Приоритет прокачки: Очень Высокий – This is Qing Mao's most important skill. The Броня reduction amplifies урон from your entire team, not just Qing Mao. More Броня reduction = more урон everyone deals. Always upgrade this first. | Max Здоровье Reduction: Up to 40% (100% of basic attack урон)",
      "name_en": "4. Open Heart (Passive)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/qing-mao/open-heart-icon.webp",
      "priority": ""
    }
  ],
  "rufus": [
    {
      "desc": "Rufus creates a magic щит that protects the entire team. This щит absorbs all incoming magic урон and gets stronger with Rufus’s Магическая Атака stat.",
      "name": "Rakashi’s Barrier (Rakashi’s Barrier)",
      "type": "Ультимативное умение",
      "formula": "Приоритет прокачки: Высокий - This is Rufus's most important skill. It protects the whole team from dangerous magic attacks. The stronger the skill, the more magic урон it can block.",
      "name_en": "Rakashi’s Barrier",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/rufus/rakashis-barrier.webp",
      "priority": ""
    },
    {
      "desc": "Rufus attacks the enemy with the highest magic power. It deals урон over time for 4 seconds. The урон depends on his Магическая Атака.",
      "name": "Rakashi’s Mockery (Rakashi’s Mockery)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Средний - This skill helps weaken strong enemy mages. It does extra урон over time but is not as essential as his щит or resurrection.",
      "name_en": "Rakashi’s Mockery",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/rufus/rakashis-mockery.webp",
      "priority": ""
    },
    {
      "desc": "Rufus heals himself by converting part of the урон blocked by his щит into Здоровье. He recovers 65% of the урон absorbed by Rakashi’s Barrier.",
      "name": "Devourer of (Devourer of)",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Devourer of",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/rufus/devourer-of.webp",
      "priority": "Средний - This skill keeps Rufus alive longer, especially against magic teams. It works well with his щит, but doesn't protect others."
    },
    {
      "desc": "Rufus can only die from physical урон. If a magic or pure урон attack kills him, he revives with some Здоровье, based on his Магическая Атака.",
      "name": "Rakashi’s Oath (Rakashi’s Oath)",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Rakashi’s Oath",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/rufus/rakashis-oath.webp",
      "priority": "Низкий - This passive is very useful, but it works even without upgrades. Leveling it up only increases how much Здоровье he revives with."
    }
  ],
  "mojo": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "judge": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "jhu": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "amira": [
    {
      "desc": "Amira casts a storm of cursed gold around all враги. The more they attack, the weaker the storm becomes. After 7 seconds, it explodes and deals урон based on how strong it still is. The урон dealt by Careless Wish depends on how much power remains in the storm after 7 seconds.",
      "name": "Careless Wish (Careless Wish)",
      "type": "Ультимативное умение",
      "formula": "Приоритет прокачки: Очень Высокий – This is Amira’s main source of урон and pressure. It punishes враги for attacking, making it crucial in both PvP and PvE. Upgrading this skill increases the hurricane Сила and final урон, making her much more threatening.",
      "name_en": "Careless Wish",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/amira/careless-wish.webp",
      "priority": ""
    },
    {
      "desc": "Amira tricks Ловкость-based враги by making them land no critical hits for 7 seconds, even though their critical hit chance gets increased.",
      "name": "Desperate Fury (Desperate Fury)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Высокий – Very effective against popular Ловкость heroes like Lara Croft, Yasmine, and Artemis. The more you upgrade, the more враги it can affect and the higher the fake critical boost ensuring their crits fail even harder.",
      "name_en": "Desperate Fury",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/amira/desperate-fury.webp",
      "priority": ""
    },
    {
      "desc": "Amira manipulates Интеллект-based враги by increasing their healing and then reducing their Магическая Атака. The debuff continues even after the effect ends.",
      "name": "Art of Deceit (Art of Deceit)",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Art of Deceit",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/amira/art-of-deceit.webp",
      "priority": "Средний-Высокий – Strong versus mages like Orion, Augustus, and Polaris. As the skill scales, the Магическая Атака reduction becomes more significant, reducing the impact of enemy spellcasters. Worth upgrading if you face magic-heavy teams often."
    },
    {
      "desc": "Amira tricks Сила-based враги by forcing them to send all their buffs to a fake illusion ally that does nothing and disappears after 6 seconds.",
      "name": "Illusory Alliance (Illusory Alliance)",
      "type": "Пассивное умение",
      "formula": "Приоритет прокачки: Средний – This is a niche skill that can be useful against strong tanks or buffed warriors. However, the illusion doesn’t deal урон or Контролёр the fight, so the skill is more tactical than impactful. Upgrade only after the others are maxed.",
      "name_en": "Illusory Alliance",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/amira/illusory-alliance.webp",
      "priority": ""
    }
  ],
  "laracroft": [
    {
      "desc": "Lara activates an ancient relic that damages all враги and heals союзники. Her basic attacks also fire 2 powered-up shots instead of one. Ascension skill: Power of the Sacred Tombs upgrades this ability to fire 4 shots after a critical hit. While powerful, this is an end-game enhancement that doesn't change the early priority.",
      "name": "Power of the Tombs (Power of the Tombs)",
      "type": "Ультимативное умение",
      "formula": "Formula: (урон & Healing depend on Физическая Атака) . | Приоритет прокачки: Высокий – This is Lara's ultimate ability and should be your top priority. It deals урон to ALL враги while healing your team, making it incredibly valuable in every battle. The passive double-shot effect dramatically increases her basic attack урон from the very beginning.",
      "name_en": "Power of the Tombs",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lara-croft/power-of-the-tombs.webp",
      "priority": ""
    },
    {
      "desc": "Lara focuses for 6 seconds, significantly increasing her chance to land critical hits and making those critical hits deal much more урон. Ascension skill: Absolute Critical Thinking guarantees critical hits against stunned враги. This is a powerful upgrade but requires team synergy, making it less important for beginners.",
      "name": "Critical Thinking (Critical Thinking)",
      "type": "Активное умение",
      "formula": "Formula: (0.027% Phys. atk. + Ivl * 0.6 + 200)% . | Приоритет прокачки: Высокий – This should be your second priority because it dramatically increases all of Lara's урон output. Critical hits are essential for marksmen, and this skill makes her basic attacks and other abilities hit much harder. It works especially well with her double-shot passive.",
      "name_en": "Critical Thinking",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lara-croft/critical-thinking.webp",
      "priority": ""
    },
    {
      "desc": "Lara fires an explosive arrow at the central enemy, damaging and stunning all враги in the explosion radius for 2 seconds.",
      "name": "Steady Shot (Steady Shot)",
      "type": "Активное умение",
      "formula": "Formula: (30% Phys. atk. + Ivl * 15 + 300) урон . | Приоритет прокачки: Средний – This ability provides valuable crowd Контролёр (stun) which can interrupt enemy abilities. While useful, it's less important than her урон-boosting skills early on. Upgrade this after her core урон abilities are sufficiently leveled, as crowd Контролёр becomes more important in mid-to-late game.",
      "name_en": "Steady Shot",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lara-croft/steady-shot.webp",
      "priority": ""
    },
    {
      "desc": "A passive ability that adds random artifact effects to Lara's Jade Necklace whenever it activates, providing various stat bonuses.",
      "name": "Lost Knowledge (Lost Knowledge)",
      "type": "Активное умение",
      "formula": "Formula: 4710 (5% Phys. atk. + Ivl * 10 + 415) bonus power .",
      "name_en": "Lost Knowledge",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lara-croft/lost-knowledge.webp",
      "priority": "Низкий – This is a supportive passive ability that provides random bonuses. While potentially helpful, it's unreliable since you can't Контролёр which bonus you get. More importantly, it only unlocks at level 90, making it irrelevant for beginners. Focus on this last, after all other skills are well-developed."
    },
    {
      "desc": "Expedition Bonus (Passive): Lara Croft (Red rank or higher) unlocks a powerful expedition advantage:",
      "name": "Expedition Expert (Expedition Expert)",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Expedition Expert",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lara-croft/expedition-expert.webp",
      "priority": "UNIQUE BONUS – This isn’t a skill you level up, but a passive reward for owning Lara Croft. The extra daily expedition dramatically increases your artifact fragments and resources over time, making her one of the most valuable long-term investments in Hero Wars even if you never place her in a battle team."
    }
  ],
  "lian": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "fox": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "julius": [
    {
      "desc": "This is Julius’s main skill. It creates a huge team-wide щит that absorbs урон and then heals all союзники after it’s broken. The more Физическая Атака Julius has, the stronger this щит and исцеление become.",
      "name": "Defense Meowtrix (Defense Meowtrix)",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Defense Meowtrix",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/julius/defense-meowtrix.webp",
      "priority": "Очень Высокий – It protects the whole team and heals them, so upgrading this boosts survivability for everyone."
    },
    {
      "desc": "This skill shields Julius, and if the щит survives for 5 seconds, it copies the remaining amount to all союзники. Every time Julius gets a щит, he gains permanent Физическая Атака power for the rest of the fight.",
      "name": "Copycat Device (Copycat Device)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Высокий – Strong synergy skill that improves team protection and boosts Julius's урон over time.",
      "name_en": "Copycat Device",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/julius/copycat-device.webp",
      "priority": ""
    },
    {
      "desc": "This passive ability activates whenever an ally loses a щит. It removes negative effects and temporarily increases their Броня and Защита от Магии. It helps keep the team safe even after shields break.",
      "name": "Nine-Lives Engine (Nine-Lives Engine)",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Nine-Lives Engine",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/julius/nine-lives-engine.webp",
      "priority": "Средний-Высокий – Helps cleanse debuffs and adds a small defense boost, but it's not as impactful as his main щит skills."
    },
    {
      "desc": "This skill gives your whole team bonus speed for each active щит on the battlefield. Faster attacks and skills can help you win faster, but the boost is small unless many shields are active.",
      "name": "Purrfect Reflexes (Purrfect Reflexes)",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Purrfect Reflexes",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/julius/purrfect-reflexes.webp",
      "priority": "Средний – Useful when there are lots of shields in play, but doesn’t work well in every situation. Upgrade it last."
    }
  ],
  "cleaver": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "phobos": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "karkh": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "satori": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "artemis": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "sebastian": [
    {
      "desc": "This is Sebastian’s ultimate skill. It instantly removes all debuffs from your team and creates a щит that blocks 15 new debuffs from being applied. In simple terms, it “cleans” your team and then prevents враги like Lian, Satori, or Jorgen from disabling your союзники again.",
      "name": "Ode to Serenity (Ode to Serenity)",
      "type": "Ультимативное умение",
      "formula": "Приоритет прокачки: Очень Высокий – This is his strongest ability because it guarantees your team stays free from Контролёр effects, making it the first skill you should max out.",
      "name_en": "Ode to Serenity",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/sebastian/ode-to-serenity.webp",
      "priority": ""
    },
    {
      "desc": "Умение персонажа Себастьян.",
      "name": "Battle Song (Battle Song)",
      "type": "Активное умение",
      "formula": "This skill increases the critical hit chance of all союзники for 5 seconds. Formula: (0.1% Физическая Атака + Level * 0.2 + 15)% . That means the stronger your Sebastian’s Физическая Атака, the higher the bonus critical chance your team gets. | Приоритет прокачки: Высокий – Critical chance is a huge урон booster for many heroes (like Jhu , Yasmine , or Ishmael ). Upgrade this second, right after his ultimate.",
      "name_en": "Battle Song",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/sebastian/battle-song.webp",
      "priority": ""
    },
    {
      "desc": "Умение персонажа Себастьян.",
      "name": "Striking Solo (Striking Solo)",
      "type": "Активное умение",
      "formula": "While Battle Song is active, союзники’ critical hits deal extra pure урон. Formula: (0.12% Физическая Атака + Level * 0.2 + 4)% of the critical урон dealt . “Pure урон” ignores Броня and Защита от Магии, so this adds a lot of value in long fights. | Приоритет прокачки: Средний Высокий – This skill is powerful but works best only if you already have crit-based урон dealers. Upgrade after Ode to Serenity and Battle Song.",
      "name_en": "Striking Solo",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/sebastian/striking-solo.webp",
      "priority": ""
    },
    {
      "desc": "Умение персонажа Себастьян.",
      "name": "Public Idol (Public Idol)",
      "type": "Пассивное умение",
      "formula": "Sebastian enters battle with extra energy, allowing him to cast Ode to Serenity faster. Formula: (0.0595% Физическая Атака + Level * 0.2 + 8)% . This means at the start of every fight he’s already closer to using his ultimate.",
      "name_en": "Public Idol",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/sebastian/public-idol.webp",
      "priority": "Средний – It helps, but since Sebastian gains energy quickly in battles anyway, this is less important than his other skills."
    }
  ],
  "cornelius": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "ginger": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "lilith": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "orion": [
    {
      "desc": "Skill Animation Info",
      "name": "1 - Total Destruction (1 - Total Destruction)",
      "type": "Ультимативное умение",
      "formula": "Total Destruction is Orion's ultimate burst tool. He fires 6 rockets at the враги with the highest Здоровье, and each rocket deals 62,098 magic урон . This is easy to understand in battle: Orion aims at the healthiest targets so he can quickly break the enemy core instead of wasting his burst on almost dead heroes. | Formula - Magic урон: 62,098 (45% Магическая Атака + 50 x Level) | Ascension V - Tactical Destruction: When an enemy is stunned or slowed, they receive a mark. When Orion uses this skill, he launches an extra rocket at every marked target and each extra rocket deals 41,866 magic урон . Because Ascension V comes late, the base skill is already worth leveling, and ascension simply pushes it even higher. | Formula - Ascension Bonus урон: 41,866 (30% Магическая Атака + 4,800)",
      "name_en": "1 - Total Destruction",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/orion/total-destruction.webp",
      "priority": "Высокий – This is Orion's main burst button, so upgrading it keeps his kill pressure relevant from the early game to endgame. It becomes even better once your account eventually unlocks the ascension extra rockets."
    },
    {
      "desc": "Magnetic Field explodes on the enemy back line, deals 50,721 magic урон in an area, and slows враги for 4 seconds. In simple terms, this skill helps Orion touch the heroes hiding behind the Танк line and makes them easier to finish because the slow can also prepare targets for his ascension ultimate. Skill Animation Info",
      "name": "2 - Magnetic Field (2 - Magnetic Field)",
      "type": "Активное умение",
      "formula": "Formula - Magic урон: 50,721 (40% Магическая Атака + 10 x Level)",
      "name_en": "2 - Magnetic Field",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/orion/magnetic-field.webp",
      "priority": "Средний – The slow and back-line reach are valuable, but Orion can already do his main job without maxing this first. Upgrade it after the skills that directly define his burst rhythm."
    },
    {
      "desc": "Skill Animation Info",
      "name": "3 - Antimatter Blast (3 - Antimatter Blast)",
      "type": "Активное умение",
      "formula": "Antimatter Blast fires a missile at the nearest enemy, deals 106,642 magic урон , and stuns that target for 4 seconds. For players who want the easy explanation: this is Orion's Контролёр shot. It locks down the closest threat while still hitting hard enough to matter. | Formula - Magic урон: 106,642 (80% Магическая Атака + 60 x Level) | Ascension II - Antimatter Chain: After the first hit, the projectile bounces to the 2 nearest враги. Each bounce deals 53,321 magic урон and stuns for 1 second. Because this upgrade unlocks earlier than Ascension V, it is a meaningful future boost, but the base single-target Контролёр is already the main reason to level the skill. | Formula - Ascension Bounce урон: 53,321 (40% Магическая Атака + 3,900)",
      "name_en": "3 - Antimatter Blast",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/orion/antimatter-blast.webp",
      "priority": "Средний Высокий – This skill adds strong Контролёр and a heavy burst hit, so it deserves good investment. It stays below Orion's top priorities because his energy engine and main ultimate usually decide more fights first."
    },
    {
      "desc": "Full Charge is the passive that makes Orion feel fast. Every attack gives him 550 extra energy , which means he reaches Total Destruction much earlier and cycles back to it faster than many other mages. If you ever wondered why Orion seems to cast nonstop, this is the answer. Skill Animation Info",
      "name": "4 - Full Charge (4 - Full Charge)",
      "type": "Пассивное умение",
      "formula": "Formula - Extra Energy: 550 (5 x Level - 100)",
      "name_en": "4 - Full Charge",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/orion/full-charge.webp",
      "priority": "Очень Высокий – For beginners this is the upgrade that changes Orion the most because more energy means more ultimates, more artifact activations, and more total pressure. Level it as early as possible."
    }
  ],
  "markus": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "peppy": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "fluffy": [
    {
      "desc": "Deal with the Devil envelops all allied Heroes for 12 seconds . While active, союзники are immune to урон from enemy basic attacks and reflect it back to attackers. Skill Animation Info",
      "name": "Deal with the Devil (Ultimate) (Deal with the Devil (Ultimate))",
      "type": "Ультимативное умение",
      "formula": "This ultimate is a double-edged sword: it grants incredible protection against auto-attack heavy teams. Time it wisely to maximize reflections and avoid exposing союзники to heavy burst урон. | Formula: (80% Магическая Атака + 200 * level ) — max reflected урон: 117,961 . | Приоритет прокачки: Очень Высокий – This is Fluffy's signature ability. The basic-attack immunity and reflect can completely shut down physical урон dealers. Upgrade first to extend duration and reduce the self-урон ratio.",
      "name_en": "Deal with the Devil (Ultimate)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/fluffy/deal-with-the-devil-icon.webp",
      "priority": ""
    },
    {
      "desc": "Baalthazar protects his flock from death for 10 seconds . All союзники who die during this time will be resurrected when the effect ends. They restore some Здоровье, and their physical and Магическая Атака are increased until the end of the battle. This is essentially a team-wide \"second chance\" mechanic. Timing is crucial: activate it before a massive enemy burst or ultimate combo. Resurrected союзники come back stronger, turning potential defeats into aggressive counter-attacks. Skill Animation Info",
      "name": "To Hell and Back (To Hell and Back)",
      "type": "Активное умение",
      "formula": "Formula: (исцеление: 200% Магическая Атака + 400 * level ) = 281,902 ; Attack buff: (20% Магическая Атака + 50 * level ) = 29,490 . | Приоритет прокачки: Высокий – The resurrection effect is game-changing. Upgrading increases the Здоровье restored and the attack buff given to resurrected союзники. Prioritize this second.",
      "name_en": "To Hell and Back",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/fluffy/to-hell-and-back-icon.webp",
      "priority": ""
    },
    {
      "desc": "Fluffy puts Marks of Death on himself, increasing his magic Броня penetration . When Fluffy dies, the Marks explode, dealing урон to enemy Heroes for each Mark. Up to 10 Marks can be active at once. Skill Animation Info",
      "name": "Mark of Death (Mark of Death)",
      "type": "Активное умение",
      "formula": "This passive turns Fluffy's death into a Оружие. The more Marks accumulated, the bigger the explosion. It synergizes with risky plays: sometimes letting Fluffy fall at the right moment can wipe out weakened враги. The Пробивание Защиты от Магии bonus also makes Fluffy's other урон more effective. | Formula: (урон per Mark: 65% Магическая Атака + 200 * level ) = 100,718 ; Magic Броня pen per Mark: (5% Магическая Атака + 5 * level + 100) = 6,498 .",
      "name_en": "Mark of Death",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/fluffy/mark-of-death-icon.webp",
      "priority": "Средний – Useful for Пробивание Защиты от Магии and the death explosion, but less impactful than the protective abilities. Upgrade third."
    },
    {
      "desc": "When an enemy uses an ultimate ability , Fluffy cancels it and deals урон to them. At the same time, Fluffy takes урон based on his maximum Здоровье . This ability can trigger once every 20 seconds . The chance to cancel an ultimate ability depends on the target's level. This is Fluffy's most disruptive skill. Canceling enemy ultimates can completely swing a fight. However, the self-урон and 20-second cooldown mean you can't rely on it constantly. Best against teams with devastating single-target or AoE ultimates. Skill Animation Info",
      "name": "Usurpation (Usurpation)",
      "type": "Пассивное умение",
      "formula": "Formula: (урон to enemy: 50% Магическая Атака + 150 * level + 100) = 77,076 ; Self-урон: 20% of max Здоровье (scaling formula: 20% (-0.15 * level + 39.5)). | Приоритет прокачки: Высокий – Upgrading improves the cancel chance and урон dealt. Essential against ultimate-reliant враги. Upgrade alongside or after To Hell and Back.",
      "name_en": "Usurpation",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/fluffy/usurpation-icon.webp",
      "priority": ""
    }
  ],
  "krista": [
    {
      "desc": "Krista launches 5 ice crystals that hit враги one by one, dealing area урон. This is her main source of consistent урон and activates often during fights.",
      "name": "Icy Vengeance (Icy Vengeance)",
      "type": "Ультимативное умение",
      "formula": "Formula: (584 + 35% Магическая Атака + Level × 100) | Приоритет прокачки: Очень Высокий – This is Krista’s strongest and most reliable урон skill. Upgrading it first maximizes her team impact in every battle.",
      "name_en": "Icy Vengeance",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/krista/icy-vengeance.webp",
      "priority": ""
    },
    {
      "desc": "Krista strikes the center of the enemy team, reducing their Защита от Магии and applying a Mark of Water. This sets up extra урон from her and other Water Mark heroes.",
      "name": "Chains of Frost (Chains of Frost)",
      "type": "Активное умение",
      "formula": "Formula: (10% Магическая Атака + Level × 20) | Ascension skill: Generous Water Marks – союзники исцеление for 50% of the magic урон dealt to враги with a Water Mark. This makes Krista an amazing Поддержка-урон hybrid. | Приоритет прокачки: Высокий – Important for boosting your whole team’s урон and healing at Ascension. Level this after her first skill.",
      "name_en": "Chains of Frost",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/krista/chains-of-frost.webp",
      "priority": ""
    },
    {
      "desc": "Krista freezes the ground, creating ice thorns that hurt враги when they move. Once the ice melts, all standing враги receive a Water Mark. This skill is situational but very useful in longer battles.",
      "name": "Frozen Needles (Frozen Needles)",
      "type": "Активное умение",
      "formula": "Formula: (12% Магическая Атака + Level × 25 + 500) | Приоритет прокачки: Средний-Высокий – It deals good урон and spreads Marks of Water, but it’s less reliable than her first two skills.",
      "name_en": "Frozen Needles",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/krista/frozen-needles.webp",
      "priority": ""
    },
    {
      "desc": "When Krista is about to take heavy урон, she protects herself with an ice block that absorbs 50% of the incoming урон for 2 seconds. It’s a defensive survival tool, not a урон source.",
      "name": "Crystallization (Crystallization)",
      "type": "Пассивное умение",
      "formula": "Ascension skill: Volatile Crystallization – After the щит ends, the block explodes, dealing (40% Магическая Атака + 1500) урон to nearby враги. This adds offensive value later in the game.",
      "name_en": "Crystallization",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/krista/crystallization.webp",
      "priority": "Средний – Early on, this skill is only defensive. It becomes better with Ascension, but still less important than her main offensive skills."
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
  "maya": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "dante": [
    {
      "desc": "Instrument of Fate is Dante’s main burst tool. He throws 4 spectral spears at multiple враги, dealing 210,193 physical урон and pushing targets back. This gives him real frontline disruption while also pressuring several враги at once, which is why the skill stays central in both PvP and PvE. Skill Info",
      "name": "1 - Instrument of Fate (Ultimate) (1 - Instrument of Fate (Ultimate))",
      "type": "Ультимативное умение",
      "formula": "Formula - Physical урон: 210,193 (220% Физическая Атака + 100 x Level)",
      "name_en": "1 - Instrument of Fate (Ultimate)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/dante/instrument-of-fate.webp",
      "priority": "Очень Высокий – This is the first skill to care about because it is Dante’s clearest source of burst, positioning pressure, and artifact activation tempo."
    },
    {
      "desc": "Foresight gives all союзники 16,524 Уклонение for 5 seconds. This is the skill that turns Dante from a selfish урон dealer into a real Уклонение-core enabler, because it helps the whole team survive physical pressure while also making Dante lineups much more frustrating to pin down. Skill Info",
      "name": "2 - Foresight (2 - Foresight)",
      "type": "Активное умение",
      "formula": "Formula - Bonus Уклонение: 16,524 (18% Физическая Атака + 3 x Level)",
      "name_en": "2 - Foresight",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/dante/foresight.webp",
      "priority": "Высокий – Upgrade this early because Dante teams become much more stable when the Уклонение window is large enough to create missed attacks and energy swings."
    },
    {
      "desc": "Shackles of Weakness adds a debuff layer to Dante’s spear hits. Whenever a spectral spear from Instrument of Fate or Retribution lands, Dante reduces the enemy’s main stat by 7,022 for 5 seconds. That lowers enemy урон, defense scaling, or healing scaling depending on who gets hit, which gives Dante more value than a pure урон Стрелок in longer fights. Skill Info",
      "name": "3 - Shackles of Weakness (3 - Shackles of Weakness)",
      "type": "Активное умение",
      "formula": "Formula - Main Stat Reduction: 7,022 (7% Физическая Атака + 8 x Level - 292)",
      "name_en": "3 - Shackles of Weakness",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/dante/shackles-of-weakness.webp",
      "priority": "Средний Высокий – This is worth leveling before Retribution in most builds because the stat reduction applies more consistently across fights and improves Dante’s overall pressure profile."
    },
    {
      "desc": "Retribution is Dante’s automatic punish when the enemy plays into his Уклонение pattern. After dodging урон greater than 5% of his total Здоровье, he throws a spectral spear at the nearest enemy for 111,596 physical урон . The effect is powerful in the right matchup, but it is more conditional than the rest of his kit because it depends on successful dodges and meaningful incoming hits. Skill Info",
      "name": "4 - Retribution (4 - Retribution)",
      "type": "Пассивное умение",
      "formula": "Formula - Physical урон: 111,596 (110% Физическая Атака + 100 x Level)",
      "name_en": "4 - Retribution",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/dante/retribution.webp",
      "priority": "Средний – This skill is still good, but it becomes best when Dante already has enough Уклонение Поддержка and survivability to trigger it often."
    }
  ],
  "folio": [
    {
      "desc": "This is Folio’s strongest and most dangerous skill. He drops a magical ink blot on the враги, which grows and explodes after 5 seconds. The longer it charges, the more урон it does. It also deals extra урон based on how much smarter Folio is than his враги!",
      "name": "Weight of Knowledge (Weight of Knowledge)",
      "type": "Ультимативное умение",
      "formula": "Приоритет прокачки: Высокий – This is Folio’s main урон ability. Upgrading it boosts his teamfight power and punishes враги with Низкий Интеллект.",
      "name_en": "Weight of Knowledge",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/folio/weight-of-knowledge.webp",
      "priority": ""
    },
    {
      "desc": "This skill targets the smartest enemy and steals a big chunk of their Интеллект, making them weaker and boosting Folio. If it fails to steal, it deals massive magic урон instead.",
      "name": "Mind Stealer (Mind Stealer)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Высокий – This makes Folio even smarter and stronger during battles. If stealing fails, the backup урон is still very powerful.",
      "name_en": "Mind Stealer",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/folio/mind-stealer.webp",
      "priority": ""
    },
    {
      "desc": "Folio creates two magical clones that look like friendly blobs of ink. They don’t move, but they protect your team and apply weaker versions of his second skill to nearby враги when hit.",
      "name": "Inky Friends (Inky Friends)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Средний – This skill adds protection and chip урон, but it's not as strong or impactful as his main урон or Интеллект-stealing spells.",
      "name_en": "Inky Friends",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/folio/inky-friends.webp",
      "priority": ""
    },
    {
      "desc": "This is a passive skill. When Folio’s clones disappear, he switches places with the one that has the most Здоровье. If he dies while the clones are active, he can come back using the strongest clone’s Здоровье.",
      "name": "Superior Copying (Superior Copying)",
      "type": "Пассивное умение",
      "formula": "Приоритет прокачки: Низкий – It’s a great survival skill, but doesn’t improve урон or Контролёр. Useful, but not your main upgrade focus early on.",
      "name_en": "Superior Copying",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/folio/superior-copying.webp",
      "priority": ""
    }
  ],
  "tristan": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "aurora": [
    {
      "desc": "Aurora’s main offensive skill. She releases a powerful flash of light at the center of the enemy team, dealing area-of-effect урон. It activates frequently and is essential for her overall урон and team synergy.",
      "name": "Crystal of Selias (Crystal of Selias)",
      "type": "Ультимативное умение",
      "formula": "Приоритет прокачки: Очень Высокий – This skill deals massive AoE урон and contributes to energy gain. Its Ascension effect makes it a critical part of her combo chain.",
      "name_en": "Crystal of Selias",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aurora/crystal-of-selias.webp",
      "priority": ""
    },
    {
      "desc": "A single-target melee strike that stuns and damages a nearby enemy. Useful for interrupting enemy abilities and adding crowd Контролёр to the frontline. Note that stun success decreases against Высокий-level opponents.",
      "name": "Crystalline Onslaught (Crystalline Onslaught)",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Crystalline Onslaught",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aurora/crystalline-onslaught.webp",
      "priority": "Высокий – This skill adds tactical utility, allowing Aurora to disrupt and Контролёр dangerous враги. Excellent in PvP and frontline duels."
    },
    {
      "desc": "Aurora casts a linear beam of light, damaging all враги in its path. It has a short cooldown and helps charge her artifact while applying light pressure across the enemy line.",
      "name": "Piercing Light (Piercing Light)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Средний-Высокий – While it lacks Контролёр effects, it’s useful for consistent chip урон and energy regeneration, helping Aurora cycle her skills and artifact.",
      "name_en": "Piercing Light",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aurora/piercing-light.webp",
      "priority": ""
    },
    {
      "desc": "Aurora’s passive щит that absorbs 85% of incoming magic урон. Once it absorbs enough урон, it explodes and damages surrounding враги. It activates automatically, adding both defense and retaliation урон.",
      "name": "Rainbow Halo (Rainbow Halo)",
      "type": "Пассивное умение",
      "formula": "Ascension skill: Perfect Rainbow Halo – Once Ascension is unlocked, this щит also absorbs 25% of the physical урон Aurora dodges. This makes her significantly tougher against physical teams and improves the explosion урон further. It pairs especially well with Уклонение-Поддержка heroes like Dante and Fafnir. | Приоритет прокачки: Средний – This passive is more effective in late-game with higher Здоровье and Уклонение stats. For newer players, it's solid but not urgent to max early.",
      "name_en": "Rainbow Halo",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/aurora/rainbow-halo.webp",
      "priority": ""
    }
  ],
  "heidi": [
    {
      "desc": "Heidi summons a large poisonous mushroom in the center of the enemy team. The spores continuously poison all nearby враги, dealing pure урон over time. This ability hits multiple враги at once, which makes it her strongest and most reliable source of урон in long fights. The Ascension upgrade makes Deathflower even more dangerous by increasing the poison урон every 0.5 seconds. This causes the урон to stack rapidly, burning through even tanky враги.",
      "name": "1 - Deathflower (1 - Deathflower)",
      "type": "Ультимативное умение",
      "formula": "Formula: ( 55% Магическая Атака + Ivl * 70) Pure урон every 3s . | Приоритет прокачки: Очень Высокий – This is Heidi’s main урон-dealing skill. It affects multiple враги and scales well with her Магическая Атака, making it crucial to level first for maximum effectiveness. | Formula: +10% more Pure урон every 0.5s .",
      "name_en": "1 - Deathflower",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/heidi/deathflower.webp",
      "priority": "Высокий – Unlocking this makes Heidi’s main skill scale much faster, but since Ascension takes time to unlock, it’s a secondary upgrade after her core skills are leveled."
    },
    {
      "desc": "Heidi fires a poisoned dart at the nearest enemy, blinding them and dealing pure урон over time. The blind effect is short but can interrupt dangerous attackers like K’arkh or Dante, giving your team a survival edge.",
      "name": "2 - Toxic Spit (2 - Toxic Spit)",
      "type": "Активное умение",
      "formula": "Formula: 51369 Pure урон + ( 60% Магическая Атака + Ivl * 75) Pure урон over 5s . | Приоритет прокачки: Высокий – The consistent poison and blind effect make it an excellent follow-up skill. It’s single-target but provides both урон and Контролёр, useful in every fight.",
      "name_en": "2 - Toxic Spit",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/heidi/toxic-spit.webp",
      "priority": ""
    },
    {
      "desc": "Heidi throws a snake at the enemy with the lowest Здоровье, instantly biting them for massive pure урон. This skill is perfect for finishing off Низкий-HP враги who survive her poison effects.",
      "name": "3 - Snake Charmer (3 - Snake Charmer)",
      "type": "Активное умение",
      "formula": "Formula: ( 70% Магическая Атака + Ivl * 100 + 2000) Pure урон . | Приоритет прокачки: Средний Высокий – Great for securing kills and increasing overall burst урон. It’s less consistent than her AoE poison but still powerful when maxed later in progression.",
      "name_en": "3 - Snake Charmer",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/heidi/snake-charmer.webp",
      "priority": ""
    },
    {
      "desc": "When Heidi avoids урон for 2 seconds, she becomes camouflaged, increasing her chance to Уклонение any type of attack. Each successful Уклонение restores Energy, helping her use skills faster. However, since her main defense already comes from Уклонение and she’s often safe in the middle line, this skill isn’t as crucial early on. After Ascension, Spy Camo gains an additional offensive effect. While camouflaged, Heidi deals extra skill урон that increases the longer she stays hidden, turning her defensive skill into a hybrid offensive tool.",
      "name": "4 - Spy Camo (4 - Spy Camo)",
      "type": "Пассивное умение",
      "formula": "Formula: Уклонение increases from 20% to ( Ivl * 0.5 + 40% ) . | Приоритет прокачки: Средний – Provides good survivability but doesn’t directly increase her урон. Upgrade it after her main offensive skills. | Formula: Bonus skill урон from 5% up to 20% .",
      "name_en": "4 - Spy Camo",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/heidi/spy-camo.webp",
      "priority": "Низкий – This is useful later in the game, but since Ascension unlocks late and relies on staying hidden, it’s not a priority for beginners."
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
      "desc": "This is Guus's ultimate skill. For 5 seconds, golden geese исцеление союзники and gray geese урон враги. The healing and урон happen every 0.5 seconds. However, Guus cannot attack or use other skills during this time. If interrupted, he keeps some Energy based on the time left.",
      "name": "March of the Geese (March of the Geese)",
      "type": "Ультимативное умение",
      "formula": "Приоритет прокачки: Очень Высокий – This skill brings the biggest healing impact in large fights and synergizes with his other abilities. More power here increases both healing and урон output significantly.",
      "name_en": "March of the Geese",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/guus/march-of-the-geese.webp",
      "priority": ""
    },
    {
      "desc": "This skill gives all союзники a Golden Feather that heals them over 5 seconds. It also has a passive: while March of the Geese is active, any ally healed by golden geese receives this feather as well.",
      "name": "Feathers of Gold (Feathers of Gold)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Высокий – The healing effect is moderate, but the passive synergy with the ultimate skill increases overall healing during fights. Better at keeping your whole team healthy over time.",
      "name_en": "Feathers of Gold",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/guus/feathers-of-gold.webp",
      "priority": ""
    },
    {
      "desc": "This ability works like a protective щит. If an ally with a Golden Feather is about to drop below 25% HP, this skill heals them before the hit lands, and gives bonus healing based on how long the feather had left. It triggers only once per feather.",
      "name": "Guardian Goose (Guardian Goose)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Средний-Высокий – It can save союзники from fatal урон, but it only works in specific moments. Still, upgrading it boosts the life-saving potential when it does activate.",
      "name_en": "Guardian Goose",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/guus/guardian-goose.webp",
      "priority": ""
    },
    {
      "desc": "This is Guus's basic attack skill. Instead of damaging враги, he heals nearby союзники who don’t already have a feather. It’s constant healing with every attack, but only affects one target at a time.",
      "name": "Lay on Feathers (Lay on Feathers)",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Lay on Feathers",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/guus/lay-on-feathers.webp",
      "priority": "Средний – It gives consistent healing, but compared to his other skills, the impact is lower. Still useful in long fights or when no skills are ready."
    }
  ],
  "kai": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "iris": [
    {
      "desc": "Умение персонажа Ирис.",
      "name": "Expose Soul (Expose Soul)",
      "type": "Ультимативное умение",
      "formula": "How it works: Iris reveals the soul of the nearest enemy for 13 seconds. Any урон the soul takes is instantly transferred as pure урон to the enemy’s real body — this means it ignores Броня and Защита от Магии completely. It’s especially strong against tanks and heroes with Высокий defenses. | Formula: Pure урон = ( 200% Здоровье + Ivl * 350 + 100) . | Приоритет прокачки: Очень Высокий – This is Iris’s most powerful skill. It defines her entire playstyle, allowing her to destroy tanks by dealing unavoidable урон. Max this one first for the biggest battle impact.",
      "name_en": "Expose Soul",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/iris/expose-soul.webp",
      "priority": ""
    },
    {
      "desc": "How it works: Iris summons a dark familiar near the farthest enemy. The creature moves toward her, biting враги along the way. Each bite hits harder than the last, so it deals increasing Физическая Атака as it returns to Iris.",
      "name": "Otherworldly Creature (Otherworldly Creature)",
      "type": "Активное умение",
      "formula": "Formula Физическая Атака : ( 37% Магическая Атака + Ivl * 65) for the first bite, and each next bite adds Физическая Атака ( 9% Магическая Атака + Ivl * 25) . | Приоритет прокачки: Высокий – This skill provides steady magic урон and charges Iris’s synergy ability. It’s a great secondary source of power and should be leveled after Expose Soul.",
      "name_en": "Otherworldly Creature",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/iris/otherworldly-creature.webp",
      "priority": ""
    },
    {
      "desc": "How it works: After the familiar returns to Iris, it transfers all the energy (Soul Fury) it collected from its bites. Each charge boosts Iris’s next basic attack, adding powerful Физическая Атака .",
      "name": "Demonic Synergy (Demonic Synergy)",
      "type": "Активное умение",
      "formula": "Formula: Физическая Атака = ( 35% Магическая Атака + Ivl * 20 + 650) per charge. | Приоритет прокачки: Средний Высокий – This skill adds solid bonus урон when combined with the familiar’s attacks. It’s very useful for consistent extra DPS but not as critical as her main урон skill.",
      "name_en": "Demonic Synergy",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/iris/demonic-synergy.webp",
      "priority": ""
    },
    {
      "desc": "Умение персонажа Ирис.",
      "name": "Seed of Destruction (Seed of Destruction)",
      "type": "Пассивное умение",
      "formula": "How it works: Iris drains a bit of Здоровье from all враги, creates a Seed of Destruction, and launches it at the nearest enemy. The attack deals physical урон equal to the total amount of Здоровье absorbed. | Formula Здоровье absorbed : ( 25% Магическая Атака + Ivl * 80 + 3200) Здоровье absorbed per enemy. | Приоритет прокачки: Средний – This ability helps deal some extra урон, but since it depends on enemy Здоровье and isn’t pure урон, it’s less effective than her main abilities. Upgrade it last if you have spare resources.",
      "name_en": "Seed of Destruction",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/iris/seed-of-destruction.webp",
      "priority": ""
    }
  ],
  "nebula": [
    {
      "desc": "Nebula fires a slow energy ball that explodes either when it hits the last enemy or is activated manually. It splits урон and drains energy from враги in the area. However, because Nebula turns her basic attacks into buffs through Equilibrium, it takes a long time for her to activate this skill (she needs full energy). Ascension skill: Astral Balance Projection – When activated, this skill also grants 2 союзники a boost to both physical and magical attack for 5 seconds. While helpful, it still depends on her activating the ultimate, which takes time for beginners.",
      "name": "Astral Projection (Astral Projection)",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Astral Projection",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/nebula/astral-projection.webp",
      "priority": "Низкий - It’s her ultimate, but she rarely activates it due to her Поддержка playstyle and Низкий energy gain."
    },
    {
      "desc": "This skill heals two nearby союзники and removes negative effects (debuffs). If only one ally is nearby, the healing goes to that hero. Very useful for keeping the team alive, especially in close formations.",
      "name": "Serenity (Serenity)",
      "type": "Активное умение",
      "formula": "Ascension skill: Absolute Serenity – If an ally receives a debuff within 4 seconds after Serenity, Nebula cancels the effect and heals again. This makes her healing even more powerful and reactive.",
      "name_en": "Serenity",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/nebula/serenity.webp",
      "priority": "Высокий - Great for team survival, and it activates more often than the ultimate."
    },
    {
      "desc": "Automatically deals урон to the enemy with the lowest Здоровье. It’s a simple attack that helps finish off враги, but it’s not as impactful as her Поддержка skills.",
      "name": "Disharmony (Disharmony)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Средний - Decent урон, especially in long fights. It happens automatically and helps secure kills.",
      "name_en": "Disharmony",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/nebula/disharmony.webp",
      "priority": ""
    },
    {
      "desc": "This is Nebula’s core skill. It turns her basic attacks into Поддержка boosts, increasing the physical and magical attack of nearby союзники. This happens constantly and makes a huge difference for урон dealers.",
      "name": "Equilibrium (Equilibrium)",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Equilibrium",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/nebula/equilibrium.webp",
      "priority": "Очень Высокий - Her most important skill. It defines her role in the team and improves the whole team's performance."
    }
  ],
  "celeste": [
    {
      "desc": "This is Celeste’s passive ability. In Dark Form, her basic attacks deal magic урон. In Light Form, her basic attacks исцеление союзники a little. While this is helpful, it doesn’t have as much impact as her other abilities.",
      "name": "4th - Zenith (4th - Zenith)",
      "type": "Ультимативное умение",
      "formula": "Formula: Dark – (70% Mag. atk. + Ivl * 150 + 6000) | Light – (40% Mag. atk. + Ivl * 150 + 6000) . | Приоритет прокачки: Низкий – Upgrade this last. It is only a bonus effect, while her other skills are more important for battles.",
      "name_en": "4th - Zenith",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/celeste/zenith.webp",
      "priority": ""
    }
  ],
  "isaac": [
    {
      "desc": "This ability triggers after the third activation of Tes’Lin’s Overdrive, dealing урон to all враги. While it can add some extra team-wide pressure, battles often end before Isaac activates his silence three times, so this skill rarely shows its true potential.",
      "name": "4th – High-Voltage Module (4th – High-Voltage Module)",
      "type": "Ультимативное умение",
      "formula": "Formula: (110% Phys. atk. + Ivl * 50 + 2010) .",
      "name_en": "4th – High-Voltage Module",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/isaac/high-voltage-module.webp",
      "priority": "Средний – Nice to have, but not reliable in most fights since battles usually end quickly. Focus on other skills first."
    }
  ],
  "ishmael": [
    {
      "desc": "Ishmael transforms into his demonic form, gaining a huge boost to attack speed and critical hit chance. This is the skill that makes Ishmael deadly, because the faster he attacks and the more criticals he lands, the more Здоровье he restores through Вампиризм. The downside is that he slowly loses energy, and when it reaches zero, the form ends.",
      "name": "Awakening (Awakening)",
      "type": "Ультимативное умение",
      "formula": "Formula: (Critical hit chance increase: 1300 + (Skill Level × 10)) . | Ascension skill: Brutal Awakening – Critical hits deal x4 урон instead of x2 when in demonic form. This makes Ishmael’s late game power skyrocket, turning him into one of the strongest урон dealers if well supported.",
      "name_en": "Awakening",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ishmael/awakening.webp",
      "priority": "Очень Высокий – This is Ishmael’s core skill. Without it, he is much weaker. Always max this first to make him a true carry."
    },
    {
      "desc": "Ishmael becomes much harder to hit, dodging physical attacks for a short time. Each Уклонение gives him extra power, helping him stay alive and deal more урон. However, if the enemy’s level is much higher, the Уклонение chance is reduced. Ascension skill: Elusive Phantom – Lets Ishmael Уклонение not just physical, but also magical attacks. This makes him much stronger against mages and balanced teams, greatly boosting his survivability.",
      "name": "Phantom (Phantom)",
      "type": "Активное умение",
      "formula": "Formula: (Уклонение chance depends on Ishmael’s level vs. target level) . | Приоритет прокачки: Высокий – Survivability is key. This skill keeps Ishmael alive long enough to unleash his урон. Upgrade after Awakening.",
      "name_en": "Phantom",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ishmael/phantom.webp",
      "priority": ""
    },
    {
      "desc": "This passive skill increases Ishmael’s Вампиризм, meaning he heals himself every time he deals урон. The stronger his criticals, the more Здоровье he recovers. This works perfectly with Awakening and makes him very hard to kill if he keeps attacking.",
      "name": "Dark Craft (Dark Craft)",
      "type": "Активное умение",
      "formula": "Formula: (Вампиризм % = 75 + (Skill Level × 0.576924 + 11.53848)) .",
      "name_en": "Dark Craft",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ishmael/dark-craft.webp",
      "priority": "Средний Высокий – A good skill to invest in, but only after Awakening and Phantom are well-leveled. It helps Ishmael survive longer battles."
    },
    {
      "desc": "Every third hit Ishmael lands stuns his opponent for one second. This can be useful to disrupt враги, but since the stun chance decreases against higher-level враги, it is more reliable in late game.",
      "name": "Storm Blades (Storm Blades)",
      "type": "Пассивное умение",
      "formula": "Formula: (Stun chance depends on Ishmael’s level vs. target level) .",
      "name_en": "Storm Blades",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ishmael/storm-blades.webp",
      "priority": "Низкий – While the stun can help, it is not as important as his other skills. Upgrade this last, after all other abilities are strong."
    }
  ],
  "helios": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "lyria": [
    {
      "desc": "Skill Animation Info",
      "name": "4th – Shackles of Doom (4th – Shackles of Doom)",
      "type": "Ультимативное умение",
      "formula": "In-game description: Passive skill. The hero exudes an aura that decreases the Уклонение stat of all враги within the area of effect. All affected враги receive additional physical урон from physical attacks. The size of the aura scales with the number of undead units in allied team. | Skill Explanation: This passive aura works automatically every battle — no button needed. “Уклонение” means the chance an enemy has to avoid your attacks entirely. By reducing their Уклонение, your physical heroes land more hits consistently. On top of that, every hit that connects deals extra Physical урон . The more undead союзники you have, the wider this aura spreads, covering more враги at once. Upgrading it increases how much Уклонение is reduced and how much extra урон враги take. It’s essential against Уклонение-heavy teams like Dante or Yasmine. | Formula – Уклонение Reduction: 29,848 (30% Физическая Атака + 50 × level) | Formula – Extra Physical урон за удар: 7,783 (10% Физическая Атака) | Приоритет прокачки: Высокий – Even though it’s passive, this aura provides constant value in every single battle. Reducing enemy Уклонение is game-changing against teams built around Dante, Heidi, or Yasmine. The extra physical урон also stacks up across a long fight. Upgrade this alongside Bonds of Alliance as your second priority group.",
      "name_en": "4th – Shackles of Doom",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/lyria/lyria-4th-skill-icon.webp",
      "priority": ""
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
  "somna": [
    {
      "desc": "Умение персонажа Сомна.",
      "name": "4th Skill - Domain of Tranquility (4th Skill - Domain of Tranquility)",
      "type": "Ультимативное умение",
      "formula": "In-game description: Passive skill. When an opponent deals урон to Somna or adjacent союзники, 1 Sleepiness effect is applied to the enemy who dealt the урон. If the урон was dealt by an ultimate ability, 2 Sleepiness effects are applied. This effect can trigger no more often than once every 1s. Sleepiness chance is lowered if the target's level is above 130. | Skill Explanation: враги help Somna build her Контролёр simply by attacking her area. Ultimate урон is punished harder with two stacks, creating a fast path toward Counting Sheep's transformation. | Приоритет прокачки: Высокий – It accelerates Somna's whole Sleepiness engine, especially against area and ultimate урон, but it still needs her active Контролёр skills to cash in those stacks.",
      "name_en": "4th Skill - Domain of Tranquility",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/somna/domain-of-tranquility-icon.webp",
      "priority": ""
    }
  ],
  "corvus": [
    {
      "desc": "Corvus smashes enemy frontline, reducing all their defenses. Each Undead ally makes this 10% stronger.",
      "name": "1. Strike of the Damned (1. Strike of the Damned)",
      "type": "Ультимативное умение",
      "formula": "урон Formula: (100% Физическая Атака + Level × 100) | Defense Reduction Formula: (10% Физическая Атака + Level × 25) | Приоритет прокачки: Высокий – This is Corvus' main offensive skill. The defense reduction helps your entire team deal more урон, especially against tanks. Upgrade this early as it scales well with both Физическая Атака and Hero Level.",
      "name_en": "1. Strike of the Damned",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/corvus/strike-of-the-damned.webp",
      "priority": ""
    },
    {
      "desc": "Corvus boosts attack power for all Undead союзники (like Morrigan, Lyria, Phobos) for 10 seconds.",
      "name": "2. Unity of the Damned (2. Unity of the Damned)",
      "type": "Активное умение",
      "formula": "Attack Bonus Formula: (25% Физическая Атака + Level × 15)",
      "name_en": "2. Unity of the Damned",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/corvus/unity-of-the-damned.webp",
      "priority": "Средний Высокий – Only valuable if you have other Undead heroes. The bonus scales with Физическая Атака, so upgrade this if running an Undead team, otherwise prioritize other skills."
    },
    {
      "desc": "Summons an altar that damages враги whenever they attack your team. The altar's Сила depends on Corvus' Здоровье.",
      "name": "3. Altar of Souls (3. Altar of Souls)",
      "type": "Активное умение",
      "formula": "урон Formula: (1.2% Здоровье + Level × 10 + 10) | Здоровье Formula: (90% Здоровье + Level × 200 + 4000) | Приоритет прокачки: Очень Высокий – Corvus' most powerful skill. The altar scales with his massive Здоровье pool, dealing урон while protecting your team. Always max this first as it makes Corvus both tankier and more dangerous.",
      "name_en": "3. Altar of Souls",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/corvus/altar-of-souls.webp",
      "priority": ""
    },
    {
      "desc": "When an ally falls below 20% Здоровье, Corvus pulls them to safety (8 second cooldown). No урон formula - this is a positioning effect that doesn't scale with stats.",
      "name": "4. Royal Defense (4. Royal Defense)",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "4. Royal Defense",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/corvus/royal-defense.webp",
      "priority": "Средний – While potentially life-saving, this only triggers when союзники are nearly dead and has a long cooldown. Upgrade last as it doesn't improve with levels or stats."
    }
  ],
  "ninjaturtles": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "thea": [
    {
      "desc": "Solar Sanctuary is Thea’s ultimate healing skill, restoring Здоровье to the entire team. Its power scales with Магическая Атака, making it stronger as she develops.",
      "name": "Solar Sanctuary (Solar Sanctuary)",
      "type": "Ультимативное умение",
      "formula": "Ascension skill: With ascension, this ability becomes Blessed Solar Sanctuary : any excess healing turns into a щит that absorbs incoming урон a strong advantage in extended battles.",
      "name_en": "Solar Sanctuary",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/thea/solar-sanctuary.webp",
      "priority": "Высокий"
    },
    {
      "desc": "Healing Beam targets the ally with the lowest Здоровье, delivering a focused исцеление that scales with Магическая Атака. It's essential for saving key teammates in critical moments.",
      "name": "Healing Beam (Healing Beam)",
      "type": "Активное умение",
      "formula": "Ascension skill: With ascension, it becomes Radiant Healing Beam : the healed ally takes 50% less урон for 5 seconds, adding strong protection after the исцеление lands.",
      "name_en": "Healing Beam",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/thea/healing-beam.webp",
      "priority": "Очень Высокий"
    },
    {
      "desc": "A useful crowd Контролёр skill that silences враги, stopping them from casting skills for 3 seconds. Effective against magic-heavy teams.",
      "name": "Vow of Silence (Vow of Silence)",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Vow of Silence",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/thea/vow-of-silence.webp",
      "priority": "Средний"
    },
    {
      "desc": "A passive boost to speed for союзники below 30% Здоровье. Nice bonus in the background, especially for speeding up clutch plays or healers and урон dealers recovering from the brink.",
      "name": "Second Wind (Second Wind)",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Second Wind",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/thea/second-wind.webp",
      "priority": "Низкий"
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
  "polaris": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "astaroth": [
    {
      "desc": "Casts a щит that blocks physical урон on the entire team. The щит's capacity is shared between all team members.",
      "name": "Flame Veil (Flame Veil)",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Flame Veil",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/astaroth/astaroth-1st-skill.webp",
      "priority": "1 (Highest)"
    },
    {
      "desc": "Astaroth spews a flare of hellfire, burning up some of the energy accumulated by the furthest enemy.",
      "name": "Devastation (Devastation)",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Devastation",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/astaroth/astaroth-2nd-skill.webp",
      "priority": "4 (Lowest)"
    },
    {
      "desc": "Passive skill. Astaroth maintains a connection with the ally who has the least Здоровье left and takes on a part of the physical урон inflicted against that ally.",
      "name": "Demon's Allegiance (Demon's Allegiance)",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Demon's Allegiance",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/astaroth/astaroth-3rd-skill.webp",
      "priority": "3"
    },
    {
      "desc": "Once per battle, Astaroth resurrects a fallen ally (or himself).",
      "name": "Last Word (Last Word)",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Last Word",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/astaroth/astaroth-4th-skill.webp",
      "priority": "2"
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
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "jorgen": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "martha": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "morrigan": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "jet": [
    {
      "desc": "Jet channels a life-giving elixir toward the ally with the highest Физическая Атака . While the effect is active, that ally gains increased Физическая Атака , 30% faster attack speed, and regenerates Здоровье every second until Jet’s energy runs out or he’s interrupted.",
      "name": "Elixir of Vigor (Elixir of Vigor)",
      "type": "Ультимативное умение",
      "formula": "Formula: ( 20% Магическая Атака + Ivl * 50) Физическая Атака boost. Здоровье regen per second: ( 25% Магическая Атака + Ivl * 50) . | Приоритет прокачки: Очень Высокий – This is Jet’s signature skill and his main source of team Поддержка. It can dramatically increase your main урон dealer’s performance, especially in physical teams like Dante, Yasmine, or K’arkh compositions.",
      "name_en": "Elixir of Vigor",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/jet/elixir-of-vigor.webp",
      "priority": ""
    },
    {
      "desc": "Jet fires acid at the enemy with the highest Броня, reducing their Броня for 8 seconds. This helps your урон dealers hit harder, especially against tough tanks.",
      "name": "Acid Shot (Acid Shot)",
      "type": "Активное умение",
      "formula": "Formula: ( 10% Магическая Атака + Ivl * 25) Броня Reduction. | Приоритет прокачки: Средний-Высокий – The effect is strong in physical teams, but less impactful if your main heroes deal magic or pure урон. Upgrade after his main and passive abilities.",
      "name_en": "Acid Shot",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/jet/acid-shot.webp",
      "priority": ""
    },
    {
      "desc": "Jet throws a poisoned flask that prevents nearby враги from regenerating Здоровье for 8 seconds. While useful, this effect has limited value in endgame fights where most opponents rely on щит or burst mechanics instead of healing.",
      "name": "Potion of Fatigue (Potion of Fatigue)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Средний – The healing block can help against specific heroes like Maya or Celeste, but it’s situational. Upgrade last, since the impact is smaller in Высокий-level fights where healing is less dominant.",
      "name_en": "Potion of Fatigue",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/jet/potion-of-fatigue.webp",
      "priority": ""
    },
    {
      "desc": "While Jet is alive, all союзники gain an increased chance to land critical hits. This passive effect makes the entire team more dangerous, especially heroes who rely on critical урон. When the Inordinate Fury arrow appears above your союзники’ heads during battle, it means they are receiving a critical hit chance bonus . However, this bonus only works for Физическая Атака heroes. Magic-based heroes do not benefit from this effect unless they have physical basic attacks . In that case, they can land critical hits with their basic attacks, but not with their skills.",
      "name": "Inordinate Fury (Inordinate Fury)",
      "type": "Пассивное умение",
      "formula": "Formula: ( 2.5% Магическая Атака + Ivl * 15 + 100) Critical Hit Chance bonus. | Приоритет прокачки: Высокий – This passive runs constantly, boosting all союзники without requiring activation. It’s particularly effective in teams with critical-based урон dealers, multiplying Jet’s usefulness throughout the battle.",
      "name_en": "Inordinate Fury",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/jet/inordinate-fury.webp",
      "priority": ""
    }
  ],
  "ziri": [
    {
      "desc": "This skill makes Ziri shout and taunt all враги, forcing them to attack her instead of her союзники for 8 seconds. While taunting, she gets a big bonus to both Броня and Защита от Магии, reducing the урон she takes.",
      "name": "Focus of Hatred (Focus of Hatred)",
      "type": "Ультимативное умение",
      "formula": "Приоритет прокачки: Очень Высокий – This is Ziri’s core tanking tool. The stronger the skill, the better she absorbs урон and protects the team. It should be your top priority.",
      "name_en": "Focus of Hatred",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ziri/focus-of-hatred.webp",
      "priority": ""
    },
    {
      "desc": "This skill reflects all physical урон Ziri takes back at the attacker for 8 seconds. It's like a magical mirror great against physical heroes like Ishmael or Keira.",
      "name": "Reflection of Pain (Reflection of Pain)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Высокий – Very effective in physical matchups. Upgrading this skill boosts Ziri’s threat level and punishes урон dealers who try to burst her down.",
      "name_en": "Reflection of Pain",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ziri/reflection-of-pain.webp",
      "priority": ""
    },
    {
      "desc": "When Ziri’s Здоровье drops below 30%, she burrows underground, avoiding all attacks and healing herself for 7 seconds. It happens automatically once every 15 seconds.",
      "name": "Shelter of Sands (Shelter of Sands)",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Shelter of Sands",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ziri/shelter-of-sands.webp",
      "priority": "Средний-Высокий – This is great for survival, especially in longer fights. Boost it to make Ziri last longer when focused by враги."
    },
    {
      "desc": "When Ziri comes out of hiding, she stuns and knocks back nearby враги and instantly activates her reflection skill. Great for disrupting front lines.",
      "name": "Fury of Akhreb Ummi (Fury of Akhreb Ummi)",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Fury of Akhreb Ummi",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/ziri/fury-of-akhreb-ummi.webp",
      "priority": "Средний – While useful, this passive relies on her going underground first. Upgrade it later once your other skills are stronger."
    }
  ],
  "galahad": [
    {
      "desc": "Galahad calls down swords of justice from above, striking all враги on the battlefield. This is his ultimate ability , triggered when his energy bar fills completely. The swords rain down dealing physical урон to multiple враги simultaneously, making it excellent for damaging entire enemy teams. 💉 Вампиризм Synergy: Since this skill hits multiple враги , it triggers massive healing through Galahad's 45% Вампиризм. The more враги you hit, the more Здоровье you recover—making this ultimate both an offensive and defensive tool. After unlocking Ascension V, Iron Skies gains a powerful additional effect. Now, when the swords strike враги who have less than 30% Здоровье remaining, those враги receive the Retaliation debuff (maximum 5 враги per cast). This enhancement transforms your ultimate from pure урон into a finisher that can trigger multiple counter-attacks against weakened foes. Ascension Note: This upgrade makes Iron Skies even more valuable, but remember that Ascension takes considerable time to unlock. Even without it, the base skill deserves top priority.",
      "name": "1. Iron Skies (Ultimate) (1. Iron Skies (Ultimate))",
      "type": "Ультимативное умение",
      "formula": "урон Formula: 28,628 (30% Физическая Атака + 60 × level) | Приоритет прокачки: Очень Высокий – This is Galahad's ultimate ability and your primary source of area урон. Every upgrade increases the урон significantly, affecting all враги hit. Since it's your ultimate, it charges throughout battle and can turn fights around. Prioritize this skill first as it provides the best return on investment for both урон output and team fight impact. | Effect: Applies Retaliation to враги below 30% Здоровье (max 5 targets)",
      "name_en": "1. Iron Skies (Ultimate)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/galahad/iron-skies-icon.webp",
      "priority": ""
    },
    {
      "desc": "Galahad charges forward fearlessly, breaking through any Контролёр effects (stuns, freezes, silences) that are affecting him. As he dashes, he deals physical урон to all nearby враги in his path. This skill has a 15-second cooldown , meaning Galahad can use it multiple times during a battle. It's essential for both mobility and survivability, allowing him to escape dangerous situations or dive into enemy formations. Cooldown: 15 seconds 💉 Вампиризм Synergy: Each enemy hit during the charge provides healing through 45% Вампиризм. With frequent activations (every 15s), this skill constantly sustains Galahad during prolonged fights. Upon reaching Ascension II, Unstoppable Charge gains an automatic trigger: whenever the closest enemy activates their ultimate ability, Galahad immediately charges at them, bypassing his normal ability queue. This can only occur once every 7 seconds. Additionally, the first enemy hit by this reactive charge loses 30% of their energy , potentially delaying or preventing their next ultimate. Ascension Note: This enhancement adds significant strategic value by interrupting enemy ultimates and controlling energy. However, since Ascension II comes much earlier than V, you might have this sooner, making the skill even more worthy of investment.",
      "name": "2. Unstoppable Charge (2. Unstoppable Charge)",
      "type": "Активное умение",
      "formula": "урон Formula: 41,214 (50% Физическая Атака + 50 × level) | Приоритет прокачки: Высокий – This skill keeps Galahad alive and fighting by removing crowd Контролёр effects that would otherwise neutralize him. The урон is respectable and it activates frequently due to the short cooldown. Upgrade this second to improve both survivability and sustained урон. The Контролёр-break mechanic is invaluable against teams with heavy crowd Контролёр. | Effect: Auto-triggers when nearest enemy uses ultimate (once per 7s) + Target loses 30% energy",
      "name_en": "2. Unstoppable Charge",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/galahad/unstoppable-charge-icon.webp",
      "priority": ""
    },
    {
      "desc": "Galahad performs a special counter-attack, automatically striking the enemy with the lowest current Здоровье . This is a periodic skill that activates automatically every 20.5 seconds throughout the battle. It's Galahad's way of finishing off weakened враги, dealing substantial physical урон . The skill smartly targets whoever is closest to death, making it excellent for securing eliminations. Cooldown: 20.5 seconds",
      "name": "3. Retaliation (Periodic) (3. Retaliation (Periodic))",
      "type": "Активное умение",
      "formula": "урон Formula: 61,042 (80% Физическая Атака + 50 × level) | 💉 Вампиризм Synergy: With the highest урон multiplier (80% Физическая Атака), this skill provides Galahad's largest single-target исцеление through Вампиризм. Each Retaliation strike can recover substantial Здоровье, making it crucial for sustained survivability. | Приоритет прокачки: Высокий – This skill has the highest base урон of all Galahad's abilities and automatically targets the most vulnerable enemy. It's extremely efficient for finishing off opponents that your team has weakened. Upgrade this alongside Unstoppable Charge, as the Высокий урон multiplier means each level provides significant урон increases. This skill has no Ascension upgrade, so what you invest goes directly into proven, reliable урон.",
      "name_en": "3. Retaliation (Periodic)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/galahad/retaliation-icon.webp",
      "priority": ""
    },
    {
      "desc": "Cooldown: 18 seconds",
      "name": "4. Pride of Harun (Periodic) (4. Pride of Harun (Periodic))",
      "type": "Пассивное умение",
      "formula": "This skill has both passive and active components. Passive: Galahad's Iron Skies ultimate now deals an additional 17,135 pure урон with every cast. Active: Every 18 seconds, Galahad enters a heroic state for 10 seconds, during which ALL his skills and basic attacks deal extra pure урон . Pure урон ignores both Броня and Защита от Магии, making it extremely valuable. | 💉 Вампиризм Synergy: Since Вампиризм works with all урон dealt by abilities (physical, magic, AND pure), this extra pure урон also heals Galahad through his 45% Вампиризм! This makes Pride of Harun significantly more valuable for sustained survivability—you're healing from both physical AND pure урон portions simultaneously. | Passive Bonus Formula: 17,135 pure урон added to Iron Skies (20% Физическая Атака + 25 × level) | Active Buff: All skills/attacks +17,135 pure урон for 10 seconds | Приоритет прокачки: Средний-Высокий – While pure урон is excellent and this skill enhances your ultimate permanently, it should be upgraded after the first three skills. The passive bonus only affects Iron Skies (which you're already upgrading), and the active buff, while strong, has less immediate impact than your other abilities. However, it's still worth upgrading steadily—just prioritize your ultimate, charge, and retaliation first. This skill scales well but benefits most when your other skills are already strong.",
      "name_en": "4. Pride of Harun (Periodic)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/galahad/pride-of-harun-icon.webp",
      "priority": ""
    }
  ],
  "faceless": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "lars": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "arachne": [
    {
      "desc": "Arachne makes a Hyper Jump towards the lowest-Здоровье enemy , dealing 74,135 magic урон, and leaps back. The jump triggers an explosion wave on hitting the target, stunning nearby враги for 5 seconds . This is her primary engagement tool that initiates combat and provides crucial crowd Контролёр.",
      "name": "Skill 1: Hyper Jump (Skill 1: Hyper Jump)",
      "type": "Ультимативное умение",
      "formula": "урон Formula: 74,135 ( 95% Магическая Атака + Level × 60 ) | Приоритет прокачки: Высокий – This is Arachne's main урон ability with the highest base magic урон ( 74,135 ). Upgrading it increases both урон output and the reliability of her engagement. The 5-second stun duration makes this skill invaluable for team fights, allowing your team to focus down враги while they're incapacitated. Combined with her 80% Вампиризм , this skill also helps Arachne sustain herself during combat by healing for significant amounts with each hit.",
      "name_en": "Skill 1: Hyper Jump",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/arachne/hyper-jump-icon.webp",
      "priority": ""
    },
    {
      "desc": "Arachne summons a monster that charges at the first enemy it sees, exploding and dealing 26,148 magic урон while stunning враги for 2 seconds . This skill adds additional crowd Контролёр to Arachne's arsenal and provides consistent урон during extended fights.",
      "name": "Skill 2: Demolition Robot (Skill 2: Demolition Robot)",
      "type": "Активное умение",
      "formula": "Explosion урон Formula: 26,148 ( 30% Магическая Атака + Level × 40 ) | Приоритет прокачки: Средний – While this skill provides useful crowd Контролёр with a 2-second stun, its урон output ( 26,148 ) is significantly lower than Hyper Jump. The stun duration is also shorter. Upgrade this skill after prioritizing her more impactful abilities. However, the additional Контролёр can be valuable in Контролёр-focused team compositions, especially when paired with heroes like Lian or Polaris.",
      "name_en": "Skill 2: Demolition Robot",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/arachne/demolition-robot-icon.webp",
      "priority": ""
    },
    {
      "desc": "Arachne triggers a minefield under nearby враги, dealing 21,357 pure урон. Pure урон is special because it completely ignores both Броня and Защита от Магии, making it extremely effective against tanky враги that would normally resist magical attacks.",
      "name": "Skill 3: Minefield (Skill 3: Minefield)",
      "type": "Активное умение",
      "formula": "Pure урон Formula: 21,357 ( 25% Магическая Атака + Level × 30 + 600 ) | Приоритет прокачки: Средний-Высокий – The pure урон nature of this skill makes it incredibly valuable despite the lower урон number ( 21,357 ). Since pure урон ignores all defenses, every point of урон translates directly to enemy Здоровье loss. This is particularly effective against heroes with Высокий Броня or Защита от Магии like Galahad, Aurora, or Corvus. Upgrade this skill before Demolition Robot but after Hyper Jump and Plasma Explosion to maximize your anti-Танк potential.",
      "name_en": "Skill 3: Minefield",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/arachne/minefield-icon.webp",
      "priority": ""
    },
    {
      "desc": "If the target's Здоровье drops below 20% during Hyper Jump, Arachne triggers a devastating Plasma Explosion dealing a massive 165,652 pure урон. This is Arachne's execution ability that finishes off weakened враги. The pure урон ensures even the tankiest heroes cannot escape death when they reach the threshold.",
      "name": "Skill 4: Plasma Explosion (Ultimate) (Skill 4: Plasma Explosion (Ultimate))",
      "type": "Пассивное умение",
      "formula": "Pure урон Formula: 165,652 ( 200% Магическая Атака + Level × 200 + 8,000 ) | Приоритет прокачки: Очень Высокий – This is Arachne's most crucial skill with an absolutely devastating 165,652 pure урон output nearly 8 times stronger than Minefield! As an execution ability, it guarantees kills on враги below 20% Здоровье regardless of their defensive stats. This makes Arachne a nightmare for enemy supports and урон dealers who drop Низкий in fights. Prioritize maxing this skill first to ensure your executions are successful and to maximize your impact in team fights. The scaling with Магическая Атака ( 200% ) also means this benefits greatly from equipment upgrades.",
      "name_en": "Skill 4: Plasma Explosion (Ultimate)",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/arachne/plasma-explosion-icon.webp",
      "priority": ""
    }
  ],
  "keira": [
    {
      "desc": "Keira throws spinning blades that travel to the farthest enemy and come back, hitting all враги in their path. When the blades return, they silence враги for 4 seconds, which stops them from using their skills temporarily. This is her strongest skill, dealing урон to multiple враги and helping Контролёр the battle. Ascension skill: Raging Blade Whirlwind – After the blades return, Keira gains the Enraged Soul buff for 2 seconds, greatly boosting her speed.",
      "name": "Blade Whirlwind (Blade Whirlwind)",
      "type": "Ультимативное умение",
      "formula": "Приоритет прокачки: Высокий – This is Keira’s main урон and Контролёр skill. It affects multiple враги and gains a powerful buff after ascension.",
      "name_en": "Blade Whirlwind",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/keira/skill-1.webp",
      "priority": ""
    },
    {
      "desc": "This skill increases Keira’s attack and skill speed for 5 seconds, up to 300%. This makes her deal more урон very quickly, especially after she uses Blade Whirlwind. It’s great for fast-paced attacks during a fight. Ascension skill: Undying Enraged Soul – Keira revives once per battle with some Здоровье and becomes Undead, continuing to fight until the battle ends. This gives her a second chance if she is defeated.",
      "name": "Enraged Soul (Enraged Soul)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Средний – The speed boost improves her overall урон. After ascension, it also adds survivability with resurrection.",
      "name_en": "Enraged Soul",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/keira/skill-2.webp",
      "priority": ""
    },
    {
      "desc": "This passive skill lets Keira’s normal attacks bounce between враги. Each bounce deals 25% of the original урон. This helps her hit more враги at once, but the урон is smaller compared to her main skills.",
      "name": "Dancing Blades (Dancing Blades)",
      "type": "Активное умение",
      "formula": "Приоритет прокачки: Низкий – It adds some extra урон, but it’s not as impactful as her active skills, especially early in the game.",
      "name_en": "Dancing Blades",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/keira/skill-3.webp",
      "priority": ""
    },
    {
      "desc": "This passive skill gives Keira extra урон when the enemy's Броня is lower than her Броня penetration. It helps her hit harder against weaker targets, but it depends on the enemy’s defense and doesn't work well against all heroes.",
      "name": "Piercing Pain (Piercing Pain)",
      "type": "Пассивное умение",
      "formula": "Приоритет прокачки: Lowest – The extra урон only works in certain cases and doesn’t affect all враги. It’s not reliable early on.",
      "name_en": "Piercing Pain",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/keira/skill-4.webp",
      "priority": ""
    }
  ],
  "astrid": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "fafnir": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "kayla": [
    {
      "desc": "After Kayla stops burning, she enters the Overheated state, gaining additional Броня and Защита от Магии . This helps her survive a bit longer after her fiery assault ends.",
      "name": "4th – Overheat (4th – Overheat)",
      "type": "Ультимативное умение",
      "formula": "Броня Bonus Formula: (27240 + 35% Физическая Атака + Ivl * 20 + 800) . Защита от Магии Bonus Formula: (27240 + 35% Физическая Атака + Ivl * 20 + 800) . | Приоритет прокачки: Средний – While it helps her defense, it doesn’t increase her offensive potential. Upgrade this last, since her main value comes from урон rather than defense boosts.",
      "name_en": "4th – Overheat",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/kayla/overheat.webp",
      "priority": ""
    }
  ],
  "chaba": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "augustus": [
    {
      "desc": "How it works in plain terms: if the target has Очень Высокий HP, Lightning Rod will deal 40% of that HP but if that would exceed Augustus’s cap, the game uses the capped value shown above.",
      "name": "1 - Lightning Rod (1 - Lightning Rod)",
      "type": "Ультимативное умение",
      "formula": "Lightning Rod hits the enemy with the highest Здоровье and deals heavy magic урон . Simple explanation for beginners: it takes a percentage of the target’s Здоровье (very strong vs tanks) but is capped by Augustus’s magic-scaling maximum. | Formula Target Здоровье: 40% Здоровье | Formula Max Magic урон: 428,286 (max: 300% Магическая Атака + (Level 130) × 150)",
      "name_en": "1 - Lightning Rod",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/augustus/lightning-rod.webp",
      "priority": "Очень Высокий – Augustus’s main burst nuke; upgrade first to maximize his ability to remove or cripple Высокий-HP frontliners immediately."
    },
    {
      "desc": "Умение персонажа Август.",
      "name": "2 - Path of Least Resistance (2 - Path of Least Resistance)",
      "type": "Активное умение",
      "formula": "This passive converts Augustus’s basic attacks into steady 83,081 magic урон and forces him to hit the enemy with the lowest Защита от Магии . For a new player: Augustus will always try to burn the enemy that is easiest for magic to hurt, so he finishes supports and fragile mages quickly. | Formula Magic урон: 83,081 (50% Магическая Атака + (Level 130) × 115) | Why this matters: it keeps Augustus dealing урон consistently between his big hits. Because Silence doesn't stop it, this skill is very reliable.",
      "name_en": "2 - Path of Least Resistance",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/augustus/path-of-least-resistance.webp",
      "priority": "Высокий – Boost this early after Lightning Rod to increase Augustus’s sustained DPS and kill priority targets faster."
    },
    {
      "desc": "Simple example: if Augustus hits someone for 100,000, Grounded can transfer up to 53,500 to nearby враги (scaled by distance). It’s powerful when враги are grouped.",
      "name": "3 - Grounded (3 - Grounded)",
      "type": "Активное умение",
      "formula": "Whenever Augustus deals урон with Lightning Rod or his basic attack, all nearby враги take a portion of 53.5% that hit. Think of it as a \"splash\" effect: the main target takes full урон and nearby враги suffer part of it as well. Total урон: 53.5% of the triggering урон | Formula урон Transfer: 53.5% ((Level 110) × 0.35 + 15%)",
      "name_en": "3 - Grounded",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/augustus/grounded.webp",
      "priority": "Средний-Высокий – Excellent for AoE and teamfights, but less urgent than his direct single-target nuke and core attack boost."
    },
    {
      "desc": "Superconductivity applies a stacking debuff that reduces an enemy’s Защита от Магии for 6s each time Augustus hits. When Защита от Магии is fully penetrated, extra magic урон converts into pure урон which ignores resistances.",
      "name": "4 - Superconductivity (4 - Superconductivity)",
      "type": "Пассивное умение",
      "formula": "Formula Защита от Магии Reduction: -3993.93 (1.5% Магическая Атака + (Level 90) × 15 + 600) | Plainly: every hit weakens the enemy against magic. Over time this makes Augustus and all magic союзники hit much harder. It’s an indirect but team-amplifying effect. | Приоритет прокачки: Средний – Great in long fights and magic comps, but relies on other skills landing first, so upgrade after direct-урон abilities. | Note: This skill has exceptional synergy with Orion . Orion is the fastest ultimate attacker in Hero Wars and one of the few heroes who rapidly gains Energy, allowing him to trigger his ultimate repeatedly. Every time Orion casts his ultimate, he also activates his Оружие artifact , granting Пробивание Защиты от Магии to all союзники. This penetration significantly amplifies the effectiveness of Augustus’s ability, letting Augustus convert even more урон into pure урон against враги.",
      "name_en": "4 - Superconductivity",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/augustus/superconductivity.webp",
      "priority": ""
    }
  ],
  "darkstar": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "mushy": [
    {
      "desc": "Perfect Copy creates an inactive Shroom with missing Здоровье. Once fully healed, it activates and becomes a full clone able to attack and use all learned skills. Up to 3 active Shrooms can exist, greatly increasing team pressure and battlefield Контролёр. Ascension Skill: Unlocked at Ascension V . This new ascension effect keeps Shroom's copies active even after Mushy & Shroom die, which greatly improves their value in longer fights and prevents all generated pressure from disappearing when the main hero falls.",
      "name": "Perfect Copy (Perfect Copy)",
      "type": "Ультимативное умение",
      "formula": "Formula (Здоровье Scaling): 545,230 (50% Здоровье + Lvl * 100) | Effect: Shroom's copies stay active after Mushy and Shroom's death",
      "name_en": "Perfect Copy",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/mushy-and-shroom/perfect-copy.webp",
      "priority": "Очень Высокий – This is Mushy & Shroom’s strongest ability because all their gameplay revolves around healing the clones to activate them. More levels = healthier clones = faster activation = more battlefield presence."
    },
    {
      "desc": "Wild Growth is a passive skill that heals inactive Shrooms and Spore Mushrooms automatically. This healing gets stronger with each active clone, making the entire kit ramp up extremely quickly. More healing = faster clone activation = more silence and explosions later. Ascension Skill: Unlocked at Ascension II . When a Spore Mushroom or a Shroom copy fully restores its Здоровье for the first time, Mushy & Shroom are healed. This adds an extra sustain loop on top of the hero's normal healing engine.",
      "name": "Wild Growth (Wild Growth)",
      "type": "Активное умение",
      "formula": "Formula (Healing per second): 2.75% + 7,610 (8% Магическая Атака + Lvl * 20) | Приоритет прокачки: Высокий – This passive accelerates everything Mushy & Shroom do. More healing means faster clone activations, more explosions, and stronger урон scaling later. | Formula (Healing): From Shroom: 130,250 (200% Магическая Атака + 5,000) From Spore Mushroom: 13,025 (20% Магическая Атака + 500)",
      "name_en": "Wild Growth",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/mushy-and-shroom/wild-growth.webp",
      "priority": ""
    },
    {
      "desc": "Branching Mycelium spawns 3 Spore Mushrooms that become active after being fully healed. Once activated, they run toward the enemy and explode, dealing magic урон and applying silence for 4 seconds. Cooldown: 11s",
      "name": "Branching Mycelium (Branching Mycelium)",
      "type": "Активное умение",
      "formula": "Formula (Explosion урон): 52,938 (70% Магическая Атака + Lvl * 70) | Formula (Spore Starting Здоровье): 170,314 (16% Здоровье) | Приоритет прокачки: Средний-Высокий – The silence and AoE magic урон are extremely strong, but the value depends on how fast the spores are healed. Still very important for Контролёр and burst.",
      "name_en": "Branching Mycelium",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/mushy-and-shroom/branching-mycelium.webp",
      "priority": ""
    },
    {
      "desc": "Cooldown: 18s",
      "name": "Will-o'-the-Wisp (Will-o'-the-Wisp)",
      "type": "Пассивное умение",
      "formula": "Will-o’-the-Wisp deals magic урон to the nearest enemy. The урон increases based on healing received since the last cast: 50% of Mushy’s healing and 150% of allied healing is turned into additional урон. | Formula (Base Magic урон): 63,100 (80% Магическая Атака + Lvl * 100) | Formula (Max Extra урон): 208,235 (12% Здоровье + Lvl * 600 + 2,500) | Приоритет прокачки: Средний – The scaling урон is strong but inconsistent, because it depends on external healing. Good skill, but not as essential as clones, passives, and silence.",
      "name_en": "Will-o'-the-Wisp",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/mushy-and-shroom/will-o-the-wisp.webp",
      "priority": ""
    }
  ],
  "luther": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "daredevil": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "andvari": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
    }
  ],
  "elmir": [
    {
      "desc": "This passive skill gives a chance to summon more clones when Elmir uses his second skill. It works automatically and helps create chaos on the battlefield.",
      "name": "4th – Many Truths (4th – Many Truths)",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "4th – Many Truths",
      "icon_url": "https://alexandregames.com/hero-wars-dominion-era/images/hero/elmir/many-truths.webp",
      "priority": "Низкий – Helpful in some situations, but it depends on other skills being used first. Upgrade this last."
    }
  ],
  "alvanor": [
    {
      "desc": "Главное умение.",
      "name": "Умение 1",
      "type": "Ультимативное умение",
      "formula": "",
      "name_en": "Skill 1",
      "priority": "1 (Наивысший)"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 2",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 2",
      "priority": "2"
    },
    {
      "desc": "Активное умение.",
      "name": "Умение 3",
      "type": "Активное умение",
      "formula": "",
      "name_en": "Skill 3",
      "priority": "3"
    },
    {
      "desc": "Пассивное умение.",
      "name": "Умение 4",
      "type": "Пассивное умение",
      "formula": "",
      "name_en": "Skill 4",
      "priority": "4 (Наименьший)"
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
