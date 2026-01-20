export const technicalMaps = {
  // VEGETABLES
  Pomidor: {
    nameUz: "Pomidor",
    nameEn: "Tomato",
    nameRu: "Помидор",
    totalDuration: "120-150 kun",
    stages: [
      {
        stage: 1,
        nameUz: "Urug'larni tayyorlash",
        nameEn: "Seed Preparation",
        nameRu: "Подготовка семян",
        duration: "3-5 kun",
        activities: [
          { uz: "Urug'larni saralash va tanlash", en: "Sort and select seeds", ru: "Сортировка и отбор семян" },
          { uz: "Dezinfeksiya qilish (marganets eritmasida)", en: "Disinfect (in potassium permanganate)", ru: "Дезинфекция (в марганцовке)" },
          { uz: "Namlash va qotish", en: "Soak and harden", ru: "Замачивание и закаливание" }
        ],
        materials: [
          { uz: "Sifatli urug'lar", en: "Quality seeds", ru: "Качественные семена" },
          { uz: "Marganets kaliy", en: "Potassium permanganate", ru: "Марганцовка" },
          { uz: "Idishlar", en: "Containers", ru: "Емкости" }
        ],
        tips: [
          { uz: "Urug'larni 20-25°C haroratda saqlang", en: "Store seeds at 20-25°C", ru: "Храните семена при 20-25°C" }
        ]
      },
      {
        stage: 2,
        nameUz: "Ko'chatlarni yetishtirish",
        nameEn: "Seedling Growth",
        nameRu: "Выращивание рассады",
        duration: "45-60 kun",
        activities: [
          { uz: "Urug'larni 1-1.5 sm chuqurlikda ekish", en: "Plant seeds 1-1.5 cm deep", ru: "Посев семян на глубину 1-1.5 см" },
          { uz: "Kunlik sug'orish", en: "Daily watering", ru: "Ежедневный полив" },
          { uz: "2-3 haqiqiy barg chiqqanda pikировka", en: "Transplant at 2-3 true leaves", ru: "Пикировка при 2-3 настоящих листьях" },
          { uz: "Mineral o'g'itlar bilan oziqlantiris", en: "Feed with mineral fertilizers", ru: "Подкормка минеральными удобрениями" }
        ],
        materials: [
          { uz: "Ko'chat qutilari", en: "Seedling trays", ru: "Рассадные ящики" },
          { uz: "O'simlik tuproq aralashmasi", en: "Potting soil mix", ru: "Почвенная смесь" },
          { uz: "Mineral o'g'itlar (NPK)", en: "Mineral fertilizers (NPK)", ru: "Минеральные удобрения (NPK)" }
        ],
        tips: [
          { uz: "Yorug'likni 12-14 soat ta'minlang", en: "Provide 12-14 hours of light", ru: "Обеспечьте 12-14 часов света" },
          { uz: "Harorat: kunduz 20-22°C, tunda 16-18°C", en: "Temperature: day 20-22°C, night 16-18°C", ru: "Температура: днем 20-22°C, ночью 16-18°C" }
        ]
      },
      {
        stage: 3,
        nameUz: "Yerga ko'chirish",
        nameEn: "Transplanting",
        nameRu: "Высадка в грунт",
        duration: "1 kun",
        activities: [
          { uz: "Tuproqni tayyorlash va o'g'itlash", en: "Prepare and fertilize soil", ru: "Подготовка и удобрение почвы" },
          { uz: "40x60 sm oraliqda ekish", en: "Plant at 40x60 cm spacing", ru: "Высадка с интервалом 40x60 см" },
          { uz: "Ko'chatlarni ehtiyotkorlik bilan ko'chirish", en: "Transplant seedlings carefully", ru: "Аккуратная пересадка рассады" },
          { uz: "Darhol sug'orish", en: "Water immediately", ru: "Немедленный полив" }
        ],
        materials: [
          { uz: "Chiritilgan go'ng (10 kg/m²)", en: "Rotted manure (10 kg/m²)", ru: "Перепревший навоз (10 кг/м²)" },
          { uz: "Kompleks o'g'itlar", en: "Complex fertilizers", ru: "Комплексные удобрения" }
        ],
        tips: [
          { uz: "Sovuq xavfi o'tgandan keyin ko'chiring", en: "Transplant after frost danger", ru: "Высаживайте после угрозы заморозков" }
        ]
      },
      {
        stage: 4,
        nameUz: "O'sish va parvarish",
        nameEn: "Growth and Care",
        nameRu: "Рост и уход",
        duration: "60-70 kun",
        activities: [
          { uz: "Haftada 2-3 marta sug'orish", en: "Water 2-3 times per week", ru: "Полив 2-3 раза в неделю" },
          { uz: "14 kunda bir marta oziqlantiris", en: "Feed every 14 days", ru: "Подкормка каждые 14 дней" },
          { uz: "Yovvoyi o'tlarni tozalash", en: "Remove weeds", ru: "Прополка сорняков" },
          { uz: "Pashinlarini olish", en: "Remove suckers", ru: "Удаление пасынков" },
          { uz: "Tayoqchalarga bog'lash", en: "Stake plants", ru: "Подвязка к кольям" }
        ],
        materials: [
          { uz: "Tayoqchalar (1.5-2 m)", en: "Stakes (1.5-2 m)", ru: "Колья (1.5-2 м)" },
          { uz: "Bog'ich iplari", en: "Ties", ru: "Подвязочный материал" },
          { uz: "O'g'itlar (azot, fosfor, kaliy)", en: "Fertilizers (N, P, K)", ru: "Удобрения (азот, фосфор, калий)" }
        ],
        tips: [
          { uz: "Gullash davrida kaliy o'g'itlarini ko'paytiring", en: "Increase potassium during flowering", ru: "Увеличьте калий во время цветения" }
        ]
      },
      {
        stage: 5,
        nameUz: "Hosilni yig'ish",
        nameEn: "Harvesting",
        nameRu: "Уборка урожая",
        duration: "20-30 kun",
        activities: [
          { uz: "Pishgan mevalarni terish", en: "Pick ripe fruits", ru: "Сбор спелых плодов" },
          { uz: "Har 2-3 kunda terish", en: "Harvest every 2-3 days", ru: "Сбор каждые 2-3 дня" },
          { uz: "Saralash va saqlash", en: "Sort and store", ru: "Сортировка и хранение" }
        ],
        materials: [
          { uz: "Terim qutilari", en: "Harvest baskets", ru: "Корзины для сбора" },
          { uz: "Saqlash qutilari", en: "Storage boxes", ru: "Ящики для хранения" }
        ],
        tips: [
          { uz: "Ertalab yoki kechqurun tering", en: "Harvest morning or evening", ru: "Собирайте утром или вечером" }
        ]
      }
    ]
  },

  Tarvuz: {
    nameUz: "Tarvuz",
    nameEn: "Watermelon",
    nameRu: "Арбуз",
    totalDuration: "80-100 kun",
    stages: [
      {
        stage: 1,
        nameUz: "Urug'larni tayyorlash",
        nameEn: "Seed Preparation",
        nameRu: "Подготовка семян",
        duration: "2-3 kun",
        activities: [
          { uz: "Yirik va sog'lom urug'larni tanlash", en: "Select large healthy seeds", ru: "Отбор крупных здоровых семян" },
          { uz: "Iliq suvda 12 soat namlash", en: "Soak 12 hours in warm water", ru: "Замачивание 12 часов в теплой воде" },
          { uz: "Qotish (3-5 kun muzxonada)", en: "Harden (3-5 days in refrigerator)", ru: "Закаливание (3-5 дней в холодильнике)" }
        ],
        materials: [
          { uz: "Tarvuz urug'lari", en: "Watermelon seeds", ru: "Семена арбуза" },
          { uz: "Iliq suv (25-30°C)", en: "Warm water (25-30°C)", ru: "Теплая вода (25-30°C)" }
        ],
        tips: [
          { uz: "Urug'larni 2-3 yillik saqlashdan keyin eng yaxshi natija beradi", en: "Seeds give best results after 2-3 years storage", ru: "Семена лучше всего после 2-3 лет хранения" }
        ]
      },
      {
        stage: 2,
        nameUz: "Ekish",
        nameEn: "Planting",
        nameRu: "Посев",
        duration: "1 kun",
        activities: [
          { uz: "Tuproq harorati 15°C dan yuqori bo'lganda ekish", en: "Plant when soil is above 15°C", ru: "Посев при температуре почвы выше 15°C" },
          { uz: "2-3 sm chuqurlikda ekish", en: "Plant 2-3 cm deep", ru: "Посев на глубину 2-3 см" },
          { uz: "1-1.5 m oraliqda ekish", en: "Space 1-1.5 m apart", ru: "Расстояние 1-1.5 м" },
          { uz: "Sug'orish", en: "Watering", ru: "Полив" }
        ],
        materials: [
          { uz: "Organik o'g'itlar", en: "Organic fertilizers", ru: "Органические удобрения" },
          { uz: "Suv", en: "Water", ru: "Вода" }
        ],
        tips: [
          { uz: "Har chuqurchaga 2-3 ta urug' soling", en: "Put 2-3 seeds per hole", ru: "Кладите 2-3 семени в лунку" }
        ]
      },
      {
        stage: 3,
        nameUz: "O'sish bosqichi",
        nameEn: "Growing Phase",
        nameRu: "Фаза роста",
        duration: "30-40 kun",
        activities: [
          { uz: "Kuchli ko'chat qoldirish, zaiflarini olib tashlash", en: "Keep strong seedling, remove weak ones", ru: "Оставить сильный росток, удалить слабые" },
          { uz: "Haftada 1-2 marta sug'orish", en: "Water 1-2 times per week", ru: "Полив 1-2 раза в неделю" },
          { uz: "Tuproqni yumshatish", en: "Loosen soil", ru: "Рыхление почвы" },
          { uz: "Azotli o'g'itlar berish", en: "Apply nitrogen fertilizers", ru: "Внесение азотных удобрений" }
        ],
        materials: [
          { uz: "Azotli o'g'itlar (karbamid)", en: "Nitrogen fertilizers (urea)", ru: "Азотные удобрения (карбамид)" },
          { uz: "Mulcha (somon, o'tlar)", en: "Mulch (straw, grass)", ru: "Мульча (солома, трава)" }
        ],
        tips: [
          { uz: "Mulcha tuproq namligini saqlaydi", en: "Mulch helps retain soil moisture", ru: "Мульча сохраняет влагу почвы" }
        ]
      },
      {
        stage: 4,
        nameUz: "Gullab-meva tutish",
        nameEn: "Flowering & Fruiting",
        nameRu: "Цветение и плодоношение",
        duration: "30-40 kun",
        activities: [
          { uz: "Sug'orishni kamaytirish", en: "Reduce watering", ru: "Сократить полив" },
          { uz: "Kaliy va fosforli o'g'itlar berish", en: "Apply potassium and phosphorus", ru: "Внесение калийных и фосфорных удобрений" },
          { uz: "Har bitta o'simlikda 3-5 ta meva qoldirish", en: "Leave 3-5 fruits per plant", ru: "Оставить 3-5 плодов на растение" },
          { uz: "Mevalar ostiga taxta yoki somon qo'yish", en: "Place board or straw under fruits", ru: "Подложить доску или солому под плоды" }
        ],
        materials: [
          { uz: "Kaliy sulfat", en: "Potassium sulfate", ru: "Сульфат калия" },
          { uz: "Superfosfat", en: "Superphosphate", ru: "Суперфосфат" },
          { uz: "Taxtalar yoki somon", en: "Boards or straw", ru: "Доски или солома" }
        ],
        tips: [
          { uz: "Mevalar o'sayotganda sug'orishni to'xtating", en: "Stop watering when fruits are ripening", ru: "Прекратите полив при созревании плодов" }
        ]
      },
      {
        stage: 5,
        nameUz: "Yetilish va yig'ish-terish",
        nameEn: "Ripening & Harvest",
        nameRu: "Созревание и уборка",
        duration: "10-15 kun",
        activities: [
          { uz: "Yetilganlik belgilarini kuzatish", en: "Monitor ripeness signs", ru: "Наблюдать признаки спелости" },
          { uz: "To'g'ri vaqtda terish", en: "Harvest at right time", ru: "Сбор в правильное время" },
          { uz: "Ehtiyotkorlik bilan tashish", en: "Transport carefully", ru: "Транспортировка аккуратно" }
        ],
        materials: [
          { uz: "Arava yoki transport", en: "Cart or transport", ru: "Тележка или транспорт" }
        ],
        tips: [
          { uz: "Pishgan tarvuz: sap sariq, ovoz to'q", en: "Ripe watermelon: yellow spot, dull sound", ru: "Спелый арбуз: желтое пятно, глухой звук" }
        ]
      }
    ]
  },

  "Bug'doy": {
    nameUz: "Bug'doy",
    nameEn: "Wheat",
    nameRu: "Пшеница",
    totalDuration: "180-240 kun",
    stages: [
      {
        stage: 1,
        nameUz: "Yerga ishlov berish",
        nameEn: "Soil Preparation",
        nameRu: "Обработка почвы",
        duration: "7-10 kun",
        activities: [
          { uz: "Chuqur haydash (25-30 sm)", en: "Deep plowing (25-30 cm)", ru: "Глубокая вспашка (25-30 см)" },
          { uz: "Diska bilan ishlov berish", en: "Disk harrowing", ru: "Дискование" },
          { uz: "Tuproqni tekislash", en: "Level the soil", ru: "Выравнивание почвы" },
          { uz: "Organik o'g'itlar berish", en: "Apply organic fertilizers", ru: "Внесение органических удобрений" }
        ],
        materials: [
          { uz: "Traktor va sho'r", en: "Tractor and plow", ru: "Трактор и плуг" },
          { uz: "Diskalar", en: "Disks", ru: "Диски" },
          { uz: "Go'ng (20-30 t/ga)", en: "Manure (20-30 t/ha)", ru: "Навоз (20-30 т/га)" }
        ],
        tips: [
          { uz: "Kuzgi ekish uchun avgust oxirida tayyorlang", en: "Prepare end of August for fall planting", ru: "Готовьте в конце августа для осеннего посева" }
        ]
      },
      {
        stage: 2,
        nameUz: "Ekish",
        nameEn: "Sowing",
        nameRu: "Посев",
        duration: "3-5 kun",
        activities: [
          { uz: "Urug'larni navbatlashtirib ekish", en: "Sow seeds in rows", ru: "Посев семян рядами" },
          { uz: "4-5 sm chuqurlikda ekish", en: "Plant 4-5 cm deep", ru: "Посев на глубину 4-5 см" },
          { uz: "Seyalka bilan bir tekis ekish", en: "Even sowing with seeder", ru: "Равномерный посев сеялкой" },
          { uz: "G'ildirak bilan bosish", en: "Roll after sowing", ru: "Прикатывание после посева" }
        ],
        materials: [
          { uz: "Urug'lar (180-220 kg/ga)", en: "Seeds (180-220 kg/ha)", ru: "Семена (180-220 кг/га)" },
          { uz: "Seyalka mashinasi", en: "Seeding machine", ru: "Сеялка" },
          { uz: "Mineral o'g'itlar", en: "Mineral fertilizers", ru: "Минеральные удобрения" }
        ],
        tips: [
          { uz: "Optimal muddat: sentyabr 25 - oktyabr 10", en: "Optimal time: Sept 25 - Oct 10", ru: "Оптимальный срок: 25 сентября - 10 октября" }
        ]
      },
      {
        stage: 3,
        nameUz: "Kuzgi vegetatsiya",
        nameEn: "Fall Vegetation",
        nameRu: "Осенняя вегетация",
        duration: "40-50 kun",
        activities: [
          { uz: "Kalitning chiqishi", en: "Emergence", ru: "Всходы" },
          { uz: "Bushlanish", en: "Tillering", ru: "Кущение" },
          { uz: "Agar kerak bo'lsa sug'orish", en: "Water if needed", ru: "Полив при необходимости" },
          { uz: "Yovvoyi o'tlarga qarshi kurash", en: "Weed control", ru: "Борьба с сорняками" }
        ],
        materials: [
          { uz: "Gerbitsidlar (agar kerak bo'lsa)", en: "Herbicides (if needed)", ru: "Гербициды (при необходимости)" },
          { uz: "Azotli o'g'itlar", en: "Nitrogen fertilizers", ru: "Азотные удобрения" }
        ],
        tips: [
          { uz: "Yaxshi bushlangan o'simliklar qishni yaxshi o'tkazadi", en: "Well-tillered plants winter better", ru: "Хорошо раскустившиеся растения лучше зимуют" }
        ]
      },
      {
        stage: 4,
        nameUz: "Bahorgi vegetatsiya",
        nameEn: "Spring Vegetation",
        nameRu: "Весенняя вегетация",
        duration: "80-100 kun",
        activities: [
          { uz: "Qo'shimcha azotli o'g'itlar berish", en: "Apply additional nitrogen", ru: "Дополнительное азотное удобрение" },
          { uz: "Sug'orish (3-4 marta)", en: "Irrigation (3-4 times)", ru: "Орошение (3-4 раза)" },
          { uz: "Zararkunandalarga qarshi ishlov berish", en: "Pest control treatment", ru: "Обработка против вредителей" },
          { uz: "Kasalliklarga qarshi profilaktika", en: "Disease prevention", ru: "Профилактика болезней" }
        ],
        materials: [
          { uz: "Karbamid (100-150 kg/ga)", en: "Urea (100-150 kg/ha)", ru: "Карбамид (100-150 кг/га)" },
          { uz: "Insektitsidlar", en: "Insecticides", ru: "Инсектициды" },
          { uz: "Fungitsidlar", en: "Fungicides", ru: "Фунгициды" }
        ],
        tips: [
          { uz: "Naychaga chiqish bosqichida sug'orish muhim", en: "Irrigation during stem elongation is crucial", ru: "Полив в фазу выхода в трубку критичен" }
        ]
      },
      {
        stage: 5,
        nameUz: "Yetilish va o'rim-yig'im",
        nameEn: "Ripening & Harvest",
        nameRu: "Созревание и уборка",
        duration: "15-20 kun",
        activities: [
          { uz: "Yetilish jarayonini kuzatish", en: "Monitor ripening process", ru: "Наблюдение за созреванием" },
          { uz: "To'liq pishgandan keyin o'rish", en: "Harvest when fully ripe", ru: "Уборка при полной спелости" },
          { uz: "Kombayn bilan o'rish", en: "Combine harvesting", ru: "Комбайновая уборка" },
          { uz: "Donni quritish va saqlash", en: "Dry and store grain", ru: "Сушка и хранение зерна" }
        ],
        materials: [
          { uz: "Kombayn", en: "Combine harvester", ru: "Комбайн" },
          { uz: "Quritish inshootlari", en: "Drying facilities", ru: "Сушильные сооружения" },
          { uz: "Saqlash ombori", en: "Storage warehouse", ru: "Складское помещение" }
        ],
        tips: [
          { uz: "Namlik 14-16% bo'lganda o'ring", en: "Harvest at 14-16% moisture", ru: "Убирайте при влажности 14-16%" }
        ]
      }
    ]
},

'Qovun': {
    nameUz: "Qovun",
    nameEn: "Melon",
    nameRu: "Дыня",
    totalDuration: "90-120 kun",
    stages: [
      {
        stage: 1,
        nameUz: "Tayyorgarlik",
        nameEn: "Preparation",
        nameRu: "Подготовка",
        duration: "5-7 kun",
        activities: [
          { uz: "Tuproqni tayyorlash", en: "Soil preparation", ru: "Подготовка почвы" },
          { uz: "Urug'larni saralash", en: "Seed selection", ru: "Отбор семян" },
          { uz: "Namlash va dezinfeksiya", en: "Soaking and disinfection", ru: "Замачивание и дезинфекция" }
        ],
        materials: [
          { uz: "Urug'lar", en: "Seeds", ru: "Семена" },
          { uz: "O'g'itlar", en: "Fertilizers", ru: "Удобрения" },
          { uz: "Dezinfeksiya vositalari", en: "Disinfectants", ru: "Дезинфицирующие средства" }
        ],
        tips: [
          { uz: "Issiq joyda saqlang", en: "Store in warm place", ru: "Храните в теплом месте" }
        ]
      },
      {
        stage: 2,
        nameUz: "Ekish",
        nameEn: "Planting",
        nameRu: "Посев",
        duration: "1-2 kun",
        activities: [
          { uz: "Chuqurcha qazish (2-3 sm)", en: "Dig holes (2-3 cm)", ru: "Выкопать лунки (2-3 см)" },
          { uz: "1 metr oraliqda ekish", en: "Plant 1 meter apart", ru: "Посев на расстоянии 1 метр" },
          { uz: "Sug'orish", en: "Watering", ru: "Полив" }
        ],
        materials: [
          { uz: "Ko'chat", en: "Seedlings", ru: "Рассада" },
          { uz: "Suv", en: "Water", ru: "Вода" }
        ],
        tips: [
          { uz: "Quyosh ko'p tushadigan joyga eking", en: "Plant in sunny location", ru: "Сажайте на солнечном месте" }
        ]
      },
      {
        stage: 3,
        nameUz: "O'sish",
        nameEn: "Growth",
        nameRu: "Рост",
        duration: "40-50 kun",
        activities: [
          { uz: "Kundalik sug'orish", en: "Daily watering", ru: "Ежедневный полив" },
          { uz: "Yovvoyi o'tlarni olib tashlash", en: "Remove weeds", ru: "Удаление сорняков" },
          { uz: "O'g'it berish", en: "Fertilizing", ru: "Внесение удобрений" }
        ],
        materials: [
          { uz: "Mineral o'g'itlar", en: "Mineral fertilizers", ru: "Минеральные удобрения" },
          { uz: "Mulcha", en: "Mulch", ru: "Мульча" }
        ],
        tips: [
          { uz: "Haftada 2 marta o'g'it bering", en: "Fertilize twice a week", ru: "Удобряйте дважды в неделю" }
        ]
      },
      {
        stage: 4,
        nameUz: "Meva tutish",
        nameEn: "Fruiting",
        nameRu: "Плодоношение",
        duration: "30-40 kun",
        activities: [
          { uz: "Sug'orishni kamaytirish", en: "Reduce watering", ru: "Сократить полив" },
          { uz: "Har o'simlikda 3-4 meva qoldirish", en: "Leave 3-4 fruits per plant", ru: "Оставить 3-4 плода на растение" },
          { uz: "Mevalar ostiga taxta qo'yish", en: "Place boards under fruits", ru: "Подложить доски под плоды" }
        ],
        materials: [
          { uz: "Taxtalar", en: "Boards", ru: "Доски" },
          { uz: "Qo'llab-quvvatlash tayoqchalari", en: "Support stakes", ru: "Опорные колья" }
        ],
        tips: [
          { uz: "Pishayotganda sug'orishni to'xtating", en: "Stop watering when ripening", ru: "Прекратите полив при созревании" }
        ]
      },
      {
        stage: 5,
        nameUz: "Yig'ish-terish",
        nameEn: "Harvesting",
        nameRu: "Уборка",
        duration: "15-20 kun",
        activities: [
          { uz: "Pishgan mevalarni terish", en: "Pick ripe fruits", ru: "Сбор спелых плодов" },
          { uz: "Ehtiyotkorlik bilan saqlash", en: "Store carefully", ru: "Аккуратное хранение" }
        ],
        materials: [
          { uz: "Savat", en: "Baskets", ru: "Корзины" },
          { uz: "Saqlash qutilari", en: "Storage boxes", ru: "Ящики для хранения" }
        ],
        tips: [
          { uz: "Pishgan qovun xushbo'y hidga ega", en: "Ripe melon has sweet aroma", ru: "Спелая дыня имеет сладкий аромат" }
        ]
      }
    ]
  },

  Bodring: {
    nameUz: "Bodring",
    nameEn: "Cucumber",
    nameRu: "Огурец",
    totalDuration: "60-70 kun",
    stages: [
      {
        stage: 1,
        nameUz: "Urug'larni tayyorlash",
        nameEn: "Seed Preparation",
        nameRu: "Подготовка семян",
        duration: "2-3 kun",
        activities: [
          { uz: "Urug'larni tanlash", en: "Select seeds", ru: "Отбор семян" },
          { uz: "Iliq suvda namlash", en: "Soak in warm water", ru: "Замачивание в теплой воде" }
        ],
        materials: [
          { uz: "Bodring urug'lari", en: "Cucumber seeds", ru: "Семена огурца" },
          { uz: "Suv", en: "Water", ru: "Вода" }
        ],
        tips: [
          { uz: "20-25°C haroratda saqlang", en: "Store at 20-25°C", ru: "Храните при 20-25°C" }
        ]
      },
      {
        stage: 2,
        nameUz: "Ekish",
        nameEn: "Planting",
        nameRu: "Посев",
        duration: "1 kun",
        activities: [
          { uz: "40x60 sm oraliqda ekish", en: "Plant 40x60 cm apart", ru: "Посев 40x60 см" },
          { uz: "2 sm chuqurlikda", en: "2 cm deep", ru: "Глубина 2 см" }
        ],
        materials: [
          { uz: "Organik o'g'it", en: "Organic fertilizer", ru: "Органическое удобрение" }
        ],
        tips: [
          { uz: "Issiq tuproqga eking", en: "Plant in warm soil", ru: "Сажайте в теплую почву" }
        ]
      },
      {
        stage: 3,
        nameUz: "O'sish va parvarish",
        nameEn: "Growth and Care",
        nameRu: "Рост и уход",
        duration: "40-50 kun",
        activities: [
          { uz: "Kundalik sug'orish", en: "Daily watering", ru: "Ежедневный полив" },
          { uz: "Tayoqchalarga bog'lash", en: "Tie to stakes", ru: "Подвязка к кольям" },
          { uz: "Haftada bir marta oziqlantiris", en: "Feed weekly", ru: "Подкормка еженедельно" }
        ],
        materials: [
          { uz: "Tayoqchalar", en: "Stakes", ru: "Колья" },
          { uz: "Bog'ich", en: "Ties", ru: "Подвязки" },
          { uz: "Mineral o'g'itlar", en: "Mineral fertilizers", ru: "Минеральные удобрения" }
        ],
        tips: [
          { uz: "Ertalab sug'oring", en: "Water in morning", ru: "Поливайте утром" }
        ]
      },
      {
        stage: 4,
        nameUz: "Hosilni yig'ish",
        nameEn: "Harvesting",
        nameRu: "Уборка урожая",
        duration: "20-30 kun",
        activities: [
          { uz: "Har kuni terish", en: "Harvest daily", ru: "Сбор ежедневно" },
          { uz: "Kichik bodringlarni terish", en: "Pick small cucumbers", ru: "Собирать небольшие огурцы" }
        ],
        materials: [
          { uz: "Savat", en: "Basket", ru: "Корзина" }
        ],
        tips: [
          { uz: "Tez-tez tering, ko'proq hosil olasiz", en: "Harvest often for more yield", ru: "Чаще собирайте для большего урожая" }
        ]
      }
    ]
  },

  Qalampir: {
    nameUz: "Qalampir",
    nameEn: "Pepper",
    nameRu: "Перец",
    totalDuration: "110-130 kun",
    stages: [
      {
        stage: 1,
        nameUz: "Ko'chatlarni yetishtirish",
        nameEn: "Seedling Growth",
        nameRu: "Выращивание рассады",
        duration: "50-60 kun",
        activities: [
          { uz: "Urug'larni ekish", en: "Sow seeds", ru: "Посев семян" },
          { uz: "Issiq joyda saqlash (25-28°C)", en: "Keep warm (25-28°C)", ru: "Держать в тепле (25-28°C)" },
          { uz: "Yoritish ta'minlash", en: "Provide lighting", ru: "Обеспечить освещение" }
        ],
        materials: [
          { uz: "Ko'chat qutilari", en: "Seedling trays", ru: "Рассадные ящики" },
          { uz: "Tuproq aralashmasi", en: "Soil mix", ru: "Почвенная смесь" }
        ],
        tips: [
          { uz: "Namlikni nazorat qiling", en: "Control humidity", ru: "Контролируйте влажность" }
        ]
      },
      {
        stage: 2,
        nameUz: "Yerga ko'chirish",
        nameEn: "Transplanting",
        nameRu: "Высадка в грунт",
        duration: "1 kun",
        activities: [
          { uz: "30x40 sm oraliqda ko'chirish", en: "Transplant 30x40 cm apart", ru: "Высадка 30x40 см" },
          { uz: "Chuqur suv sepish", en: "Water deeply", ru: "Глубокий полив" }
        ],
        materials: [
          { uz: "Kompost", en: "Compost", ru: "Компост" }
        ],
        tips: [
          { uz: "Sovuq o'tgandan keyin ko'chiring", en: "Transplant after frost", ru: "Высаживайте после заморозков" }
        ]
      },
      {
        stage: 3,
        nameUz: "O'sish",
        nameEn: "Growth",
        nameRu: "Рост",
        duration: "40-50 kun",
        activities: [
          { uz: "Muntazam sug'orish", en: "Regular watering", ru: "Регулярный полив" },
          { uz: "14 kunda bir marta oziqlantiris", en: "Feed every 14 days", ru: "Подкормка каждые 14 дней" }
        ],
        materials: [
          { uz: "NPK o'g'itlari", en: "NPK fertilizers", ru: "NPK удобрения" }
        ],
        tips: [
          { uz: "Tuproq quruq bo'lmasligi kerak", en: "Soil should not dry out", ru: "Почва не должна пересыхать" }
        ]
      },
      {
        stage: 4,
        nameUz: "Yig'ish-terish",
        nameEn: "Harvesting",
        nameRu: "Уборка",
        duration: "20-30 kun",
        activities: [
          { uz: "Yashil yoki qizil holatda terish", en: "Harvest green or red", ru: "Сбор зеленым или красным" },
          { uz: "Pichoq bilan kesish", en: "Cut with knife", ru: "Срезать ножом" }
        ],
        materials: [
          { uz: "Pichoq", en: "Knife", ru: "Нож" },
          { uz: "Savat", en: "Basket", ru: "Корзина" }
        ],
        tips: [
          { uz: "Qizil qalampir shirinroq", en: "Red peppers are sweeter", ru: "Красные перцы слаще" }
        ]
      }
    ]
  },

  Piyoz: {
    nameUz: "Piyoz",
    nameEn: "Onion",
    nameRu: "Лук",
    totalDuration: "100-120 kun",
    stages: [
      {
        stage: 1,
        nameUz: "Tayyorgarlik",
        nameEn: "Preparation",
        nameRu: "Подготовка",
        duration: "3-5 kun",
        activities: [
          { uz: "Piyoz ko'chatlarini tanlash", en: "Select onion sets", ru: "Отбор севка" },
          { uz: "Tuproqni tayyorlash", en: "Prepare soil", ru: "Подготовка почвы" }
        ],
        materials: [
          { uz: "Piyoz ko'chati", en: "Onion sets", ru: "Лук-севок" },
          { uz: "Kompost", en: "Compost", ru: "Компост" }
        ],
        tips: [
          { uz: "Kichik ko'chatlar tanlang", en: "Choose small sets", ru: "Выбирайте мелкий севок" }
        ]
      },
      {
        stage: 2,
        nameUz: "Ekish",
        nameEn: "Planting",
        nameRu: "Посадка",
        duration: "1-2 kun",
        activities: [
          { uz: "10-15 sm oraliqda ekish", en: "Plant 10-15 cm apart", ru: "Посадка 10-15 см" },
          { uz: "2-3 sm chuqurlikda", en: "2-3 cm deep", ru: "На глубину 2-3 см" }
        ],
        materials: [
          { uz: "O'g'itlar", en: "Fertilizers", ru: "Удобрения" }
        ],
        tips: [
          { uz: "Bahor boshida eking", en: "Plant in early spring", ru: "Сажайте ранней весной" }
        ]
      },
      {
        stage: 3,
        nameUz: "O'sish",
        nameEn: "Growth",
        nameRu: "Рост",
        duration: "80-100 kun",
        activities: [
          { uz: "Yovvoyi o'tlarni tozalash", en: "Remove weeds", ru: "Прополка" },
          { uz: "Haftada 1 marta sug'orish", en: "Water once a week", ru: "Полив раз в неделю" },
          { uz: "Azotli o'g'it berish", en: "Apply nitrogen", ru: "Внесение азота" }
        ],
        materials: [
          { uz: "Azotli o'g'itlar", en: "Nitrogen fertilizers", ru: "Азотные удобрения" }
        ],
        tips: [
          { uz: "Tuproqni yumshoq saqlang", en: "Keep soil loose", ru: "Держите почву рыхлой" }
        ]
      },
      {
        stage: 4,
        nameUz: "Yig'ish",
        nameEn: "Harvesting",
        nameRu: "Уборка",
        duration: "5-10 kun",
        activities: [
          { uz: "Barglar quriganda terish", en: "Harvest when tops dry", ru: "Уборка при высыхании ботвы" },
          { uz: "Quyoshda quritish", en: "Dry in sun", ru: "Сушка на солнце" }
        ],
        materials: [
          { uz: "Savat", en: "Baskets", ru: "Корзины" }
        ],
        tips: [
          { uz: "Quruq joyda saqlang", en: "Store in dry place", ru: "Храните в сухом месте" }
        ]
      }
    ]
  },

  Sabzi: {
    nameUz: "Sabzi",
    nameEn: "Carrot",
    nameRu: "Морковь",
    totalDuration: "80-100 kun",
    stages: [
      {
        stage: 1,
        nameUz: "Ekish",
        nameEn: "Sowing",
        nameRu: "Посев",
        duration: "1-2 kun",
        activities: [
          { uz: "Qatorlarda ekish (20 sm oraliq)", en: "Sow in rows (20 cm apart)", ru: "Посев рядами (20 см)" },
          { uz: "1-2 sm chuqurlikda", en: "1-2 cm deep", ru: "1-2 см глубиной" }
        ],
        materials: [
          { uz: "Sabzi urug'lari", en: "Carrot seeds", ru: "Семена моркови" },
          { uz: "Yumshoq tuproq", en: "Loose soil", ru: "Рыхлая почва" }
        ],
        tips: [
          { uz: "Qum bilan aralashtiring", en: "Mix with sand", ru: "Смешайте с песком" }
        ]
      },
      {
        stage: 2,
        nameUz: "Chiqishi va siyraklash",
        nameEn: "Emergence and Thinning",
        nameRu: "Всходы и прореживание",
        duration: "15-20 kun",
        activities: [
          { uz: "Ko'chat chiqishi", en: "Emergence", ru: "Всходы" },
          { uz: "Zich joylarni siyraklashtirish", en: "Thin crowded areas", ru: "Прореживание густых мест" },
          { uz: "5 sm oraliq qoldirish", en: "Leave 5 cm spacing", ru: "Оставить 5 см между растениями" }
        ],
        materials: [
          { uz: "Suv", en: "Water", ru: "Вода" }
        ],
        tips: [
          { uz: "Namlikni doimiy saqlang", en: "Maintain constant moisture", ru: "Поддерживайте постоянную влажность" }
        ]
      },
      {
        stage: 3,
        nameUz: "O'sish",
        nameEn: "Growth",
        nameRu: "Рост",
        duration: "50-70 kun",
        activities: [
          { uz: "Muntazam sug'orish", en: "Regular watering", ru: "Регулярный полив" },
          { uz: "Yovvoyi o'tlarni olib tashlash", en: "Remove weeds", ru: "Удаление сорняков" },
          { uz: "Kaliy o'g'itlari berish", en: "Apply potassium", ru: "Внесение калия" }
        ],
        materials: [
          { uz: "Kaliy o'g'itlari", en: "Potassium fertilizers", ru: "Калийные удобрения" }
        ],
        tips: [
          { uz: "Ko'p azot bermaslik", en: "Don't over-fertilize nitrogen", ru: "Не перекармливайте азотом" }
        ]
      },
      {
        stage: 4,
        nameUz: "Yetilish va yig'ish",
        nameEn: "Ripening and Harvest",
        nameRu: "Созревание и уборка",
        duration: "10-15 kun",
        activities: [
          { uz: "Ildiz qalinligini tekshirish", en: "Check root thickness", ru: "Проверка толщины корнеплода" },
          { uz: "Ehtiyotkorlik bilan qazish", en: "Dig carefully", ru: "Аккуратная выкопка" }
        ],
        materials: [
          { uz: "Bel", en: "Shovel", ru: "Лопата" }
        ],
        tips: [
          { uz: "Quruq tuproqda qazish osonroq", en: "Easier to dig in dry soil", ru: "Легче копать в сухой почве" }
        ]
      }
    ]
  },

  Kartoshka: {
    nameUz: "Kartoshka",
    nameEn: "Potato",
    nameRu: "Картофель",
    totalDuration: "90-120 kun",
    stages: [
      {
        stage: 1,
        nameUz: "Urug' tumshuqlarini tayyorlash",
        nameEn: "Seed Potato Preparation",
        nameRu: "Подготовка семенного картофеля",
        duration: "15-20 kun",
        activities: [
          { uz: "Tumshuqlarni yoritishda saqlash", en: "Store in light for sprouting", ru: "Проращивание на свету" },
          { uz: "Kichik tuberlarni tanlash", en: "Select small tubers", ru: "Отбор мелких клубней" }
        ],
        materials: [
          { uz: "Urug' kartoshkalari", en: "Seed potatoes", ru: "Семенной картофель" }
        ],
        tips: [
          { uz: "Kurtaklarni 1-2 sm uzunlikda o'stirish", en: "Grow sprouts to 1-2 cm", ru: "Выращивать ростки до 1-2 см" }
        ]
      },
      {
        stage: 2,
        nameUz: "Ekish",
        nameEn: "Planting",
        nameRu: "Посадка",
        duration: "2-3 kun",
        activities: [
          { uz: "30x70 sm oraliqda ekish", en: "Plant 30x70 cm apart", ru: "Посадка 30x70 см" },
          { uz: "8-10 sm chuqurlikda", en: "8-10 cm deep", ru: "Глубина 8-10 см" },
          { uz: "Kompost qo'shish", en: "Add compost", ru: "Добавить компост" }
        ],
        materials: [
          { uz: "Kompost", en: "Compost", ru: "Компост" },
          { uz: "O'g'itlar", en: "Fertilizers", ru: "Удобрения" }
        ],
        tips: [
          { uz: "Bahor oxirida eking", en: "Plant in late spring", ru: "Сажайте поздней весной" }
        ]
      },
      {
        stage: 3,
        nameUz: "Dong'lash va parvarish",
        nameEn: "Hilling and Care",
        nameRu: "Окучивание и уход",
        duration: "60-80 kun",
        activities: [
          { uz: "15 sm balandlikda dong'lash", en: "Hill to 15 cm height", ru: "Окучивание на 15 см" },
          { uz: "2-3 marta dong'lash", en: "Hill 2-3 times", ru: "Окучивать 2-3 раза" },
          { uz: "Sug'orish va o'g'itlash", en: "Water and fertilize", ru: "Полив и подкормка" }
        ],
        materials: [
          { uz: "Ketmon", en: "Hoe", ru: "Мотыга" },
          { uz: "O'g'itlar", en: "Fertilizers", ru: "Удобрения" }
        ],
        tips: [
          { uz: "Dong'lash hosildorlikni oshiradi", en: "Hilling increases yield", ru: "Окучивание повышает урожайность" }
        ]
      },
      {
        stage: 4,
        nameUz: "Yig'ish",
        nameEn: "Harvesting",
        nameRu: "Уборка",
        duration: "5-10 kun",
        activities: [
          { uz: "Barglar quriganda yig'ish", en: "Harvest when tops dry", ru: "Уборка при засыхании ботвы" },
          { uz: "Quritish va saralash", en: "Dry and sort", ru: "Сушка и сортировка" }
        ],
        materials: [
          { uz: "Bel", en: "Shovel", ru: "Лопата" },
          { uz: "Qop", en: "Sacks", ru: "Мешки" }
        ],
        tips: [
          { uz: "Qorong'i joyda saqlang", en: "Store in dark place", ru: "Храните в темном месте" }
        ]
      }
    ]
  }

  // Add more crops here...
};

export const getDefaultTechnicalMap = (cropName, language) => {
  return {
    nameUz: cropName,
    nameEn: cropName,
    nameRu: cropName,
    totalDuration: "90-120 kun",
    stages: [
      {
        stage: 1,
        nameUz: "Tayyorgarlik",
        nameEn: "Preparation",
        nameRu: "Подготовка",
        duration: "5-7 kun",
        activities: [
          { uz: "Tuproqni tayyorlash", en: "Soil preparation", ru: "Подготовка почвы" },
          { uz: "Urug'larni saralash", en: "Seed selection", ru: "Отбор семян" }
        ],
        materials: [
          { uz: "Urug'lar", en: "Seeds", ru: "Семена" },
          { uz: "O'g'itlar", en: "Fertilizers", ru: "Удобрения" }
        ],
        tips: [
          { uz: "Sifatli materiallar ishlating", en: "Use quality materials", ru: "Используйте качественные материалы" }
        ]
      }
    ]
  };
};