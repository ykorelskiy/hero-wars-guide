import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

const heroes_to_delete = ['oya', 'xesha', 'solaris', 'octavia', 'rigel'];

// Full official list of heroes from Alexandre Games Dominion Era Tier List
const official_heroes = [
  { id: 'electra', name: 'Электра', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', tier: 'S++' },
  { id: 'byrna', name: 'Бырна', role: 'Маг/лечение', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'S++' },
  { id: 'fluffy', name: 'Флаффи', role: 'Саппорт', main_stat: 'Ловкость', position: 'Задняя линия', tier: 'S++' },
  { id: 'cascade', name: 'Каскад', role: 'Маг/усилитель', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S++' },
  
  { id: 'aidan', name: 'Айдан', role: 'Хилер/Саппорт', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S+' },
  { id: 'adam', name: 'Адам', role: 'Танк', main_stat: 'Сила', position: 'Передняя линия', tier: 'S+' },
  { id: 'amira', name: 'Амира', role: 'Маг/контроль', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S+' },
  { id: 'augustus', name: 'Август', role: 'Маг/керри', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'S+' },
  { id: 'aurora', name: 'Аврора', role: 'Танк/уворот', main_stat: 'Сила', position: 'Передняя линия', tier: 'S+' },
  { id: 'dante', name: 'Данте', role: 'Стрелок/уворот', main_stat: 'Ловкость', position: 'Задняя линия', tier: 'S+' },
  { id: 'guus', name: 'Гус', role: 'Контроль/саппорт', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S+' },
  { id: 'heidi', name: 'Хайди', role: 'Маг/чистый урон', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'S+' },
  { id: 'isaac', name: 'Исаак', role: 'Поддержка/антимаг', main_stat: 'Ловкость', position: 'Центральная линия', tier: 'S+' },
  { id: 'iris', name: 'Ирис', role: 'Маг/дебаффер', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'S+' },
  { id: 'ishmael', name: 'Ишмаэль', role: 'Боец/крит', main_stat: 'Ловкость', position: 'Передняя линия', tier: 'S+' },
  { id: 'julius', name: 'Джулиус', role: 'Танк/щиты', main_stat: 'Сила', position: 'Передняя линия', tier: 'S+' },
  { id: 'krista', name: 'Криста', role: 'Маг/контроль', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'S+' },
  { id: 'laracroft', name: 'Лара Крофт', role: 'Стрелок', main_stat: 'Ловкость', position: 'Задняя линия', tier: 'S+' },
  { id: 'lyria', name: 'Лирия', role: 'Стрелок/контроль', main_stat: 'Ловкость', position: 'Задняя линия', tier: 'S+' },
  { id: 'nebula', name: 'Небула', role: 'Поддержка', main_stat: 'Ловкость', position: 'Центральная линия', tier: 'S+' },
  { id: 'orion', name: 'Орион', role: 'Маг/керри', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S+' },
  { id: 'qingmao', name: 'Цин Мао', role: 'Боец/пробивание', main_stat: 'Ловкость', position: 'Передняя линия', tier: 'S+' },
  { id: 'rufus', name: 'Руфус', role: 'Танк/антимаг', main_stat: 'Сила', position: 'Передняя линия', tier: 'S+' },
  { id: 'sebastian', name: 'Себастьян', role: 'Поддержка/крит', main_stat: 'Ловкость', position: 'Центральная линия', tier: 'S+' },
  { id: 'somna', name: 'Сомна', role: 'Маг/контроль', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'S+' },
  { id: 'thea', name: 'Тея', role: 'Хилер', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S+' },
  { id: 'yasmine', name: 'Ясмин', role: 'Убийца/крит', main_stat: 'Ловкость', position: 'Передняя линия', tier: 'S+' },

  { id: 'arachne', name: 'Арахна', role: 'Маг/контроль', main_stat: 'Ловкость', position: 'Передняя линия', tier: 'S' },
  { id: 'astaroth', name: 'Астарот', role: 'Танк/воскрешение', main_stat: 'Сила', position: 'Передняя линия', tier: 'S' },
  { id: 'celeste', name: 'Селеста', role: 'Хилер/Маг', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'S' },
  { id: 'corvus', name: 'Корвус', role: 'Танк/алтарь', main_stat: 'Сила', position: 'Передняя линия', tier: 'S' },
  { id: 'dorian', name: 'Дориан', role: 'Поддержка/вампиризм', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S' },
  { id: 'folio', name: 'Фолио', role: 'Маг/AoE', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S' },
  { id: 'galahad', name: 'Галахад', role: 'Танк/урон', main_stat: 'Сила', position: 'Передняя линия', tier: 'S' },
  { id: 'helios', name: 'Хелиос', role: 'Маг/анти-крит', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S' },
  { id: 'jorgen', name: 'Йорген', role: 'Поддержка/контроль', main_stat: 'Сила', position: 'Центральная линия', tier: 'S' },
  { id: 'kayla', name: 'Кайла', role: 'Воин/чистый урон', main_stat: 'Сила', position: 'Передняя линия', tier: 'S' },
  { id: 'keira', name: 'Кира', role: 'Стрелок/рикошет', main_stat: 'Ловкость', position: 'Центральная линия', tier: 'S' },
  { id: 'martha', name: 'Марта', role: 'Хилер/баффер', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S' },
  { id: 'mojo', name: 'Моджо', role: 'Маг/порча', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S' },
  { id: 'morrigan', name: 'Морриган', role: 'Поддержка/нежить', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'S' },
  { id: 'mushy', name: 'Маши и Грибочек', role: 'Маг/танк', main_stat: 'Интеллект', position: 'Передняя линия', tier: 'S' },
  { id: 'polaris', name: 'Полярис', role: 'Маг/контроль', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'S' },
  { id: 'ninjaturtles', name: 'Черепашки-Ниндзя', role: 'Боец', main_stat: 'Ловкость', position: 'Передняя линия', tier: 'S' },

  { id: 'andvari', name: 'Андвари', role: 'Танк/анти-подброс', main_stat: 'Сила', position: 'Передняя линия', tier: 'A+' },
  { id: 'cleaver', name: 'Кливер', role: 'Танк/хук', main_stat: 'Сила', position: 'Передняя линия', tier: 'A+' },
  { id: 'faceless', name: 'Безликий', role: 'Маг/контроль', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'A+' },
  { id: 'fafnir', name: 'Фафнир', role: 'Поддержка/щиты', main_stat: 'Сила', position: 'Задняя линия', tier: 'A+' },
  { id: 'jhu', name: 'Джу', role: 'Стрелок/бессмертие', main_stat: 'Сила', position: 'Центральная линия', tier: 'A+' },
  { id: 'judge', name: 'Судья', role: 'Маг/щиты', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'A+' },
  { id: 'lars', name: 'Ларс', role: 'Маг/шторм', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'A+' },
  { id: 'lian', name: 'Лиан', role: 'Маг/очарование', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'A+' },
  { id: 'phobos', name: 'Фобос', role: 'Маг/контроль', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'A+' },
  { id: 'satori', name: 'Сатори', role: 'Маг/метки', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'A+' },

  { id: 'alvanor', name: 'Альванор', role: 'Маг/хилер', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'A' },
  { id: 'artemis', name: 'Артемис', role: 'Стрелок', main_stat: 'Ловкость', position: 'Задняя линия', tier: 'A' },
  { id: 'astrid', name: 'Астрид и Лукас', role: 'Стрелок', main_stat: 'Ловкость', position: 'Задняя линия', tier: 'A' },
  { id: 'cornelius', name: 'Корнелиус', role: 'Маг/анти-маг', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'A' },
  { id: 'daredevil', name: 'Сорвиголова', role: 'Стрелок', main_stat: 'Ловкость', position: 'Центральная линия', tier: 'A' },
  { id: 'ginger', name: 'Джинджер', role: 'Стрелок', main_stat: 'Ловкость', position: 'Задняя линия', tier: 'A' },
  { id: 'jet', name: 'Джет', role: 'Поддержка/крит', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'A' },
  { id: 'karkh', name: 'Карх', role: 'Боец/подброс', main_stat: 'Ловкость', position: 'Центральная линия', tier: 'A' },
  { id: 'maya', name: 'Майя', role: 'Маг/хилер', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'A' },
  { id: 'tristan', name: 'Тристан', role: 'Боец/энергия', main_stat: 'Сила', position: 'Передняя линия', tier: 'A' },

  { id: 'chaba', name: 'Чаба', role: 'Танк/заглатывание', main_stat: 'Сила', position: 'Передняя линия', tier: 'B' },
  { id: 'darkstar', name: 'Тёмная Звезда', role: 'Стрелок/контроль', main_stat: 'Ловкость', position: 'Задняя линия', tier: 'B' },
  { id: 'elmir', name: 'Эльмир', role: 'Боец/клоны', main_stat: 'Ловкость', position: 'Передняя линия', tier: 'B' },
  { id: 'fox', name: 'Фокс', role: 'Стрелок/контроль', main_stat: 'Ловкость', position: 'Задняя линия', tier: 'B' },
  { id: 'kai', name: 'Кай', role: 'Маг/подброс', main_stat: 'Интеллект', position: 'Центральная линия', tier: 'B' },
  { id: 'lilith', name: 'Лилит', role: 'Маг/HP', main_stat: 'Сила', position: 'Центральная линия', tier: 'B' },
  { id: 'luther', name: 'Лютер', role: 'Танк/врывание', main_stat: 'Сила', position: 'Передняя линия', tier: 'B' },
  { id: 'markus', name: 'Маркус', role: 'Хилер/неуязвимость', main_stat: 'Интеллект', position: 'Передняя линия', tier: 'B' },
  { id: 'peppy', name: 'Пеппи', role: 'Маг/щиты', main_stat: 'Интеллект', position: 'Задняя линия', tier: 'B' },
  { id: 'ziri', name: 'Зири', role: 'Танк/зарывание', main_stat: 'Сила', position: 'Передняя линия', tier: 'B' }
];

async function sync() {
  console.log("1. Удаляем лишних героев из Supabase...");
  for (const hid of heroes_to_delete) {
    await supabase.from('hw_heroes').delete().eq('id', hid);
  }
  console.log("✓ Лишние герои удалены!");

  console.log("2. Upsert всех 74 официальных героев в Supabase...");
  for (const h of official_heroes) {
    const data = {
      id: h.id,
      name: h.name,
      role: h.role,
      main_stat: h.main_stat,
      position: h.position,
      archetypes: ['hero']
    };
    const { error } = await supabase.from('hw_heroes').upsert(data);
    if (error) console.error(`Error upserting ${h.id}:`, error);
  }
  console.log("✓ Все герои занесены в Supabase!");
}

sync();
