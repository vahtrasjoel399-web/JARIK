/**
 * All site texts in one place: Estonian (default), Russian, English.
 * Two-part headings are written as ["dark part", "grey part"].
 * Anything in [BRACKETS] is a placeholder: replace it with the real information.
 */
import { site, type Locale } from "./site";

const { name, city, address, hours } = site;

const et = {
  meta: {
    title: `${name} | Auto detailing ${city}: autopesu, poleerimine, keraamiline kaitse`,
    description: `Auto detailing ${city}s: käsipesu, salongi puhastus, poleerimine ja keraamiline kaitse. Broneeri aeg WhatsAppis.`,
    ogAlt: `${name}, auto detailingu stuudio`,
  },
  nav: {
    services: "Teenused",
    beforeAfter: "Enne/pärast",
    prices: "Hinnad",
    about: "Meist",
    contact: "Kontakt",
    book: "Broneeri",
    menu: "Menüü",
    close: "Sulge",
    language: "Keel",
    home: "Avaleht",
  },
  booking: {
    general: `Tere! Soovin broneerida aega stuudiosse ${name}.`,
    service: "Tere! Soovin broneerida teenust:",
  },
  hero: {
    title: "Detailing, mis paneb auto särama.",
    sub: `Käsipesu, poleerimine ja keraamiline kaitse. Kõik tehakse käsitsi, stuudios aadressil ${address}.`,
    cta: "Broneeri aeg",
    more: "Loe lähemalt",
    open: `Avatud: ${hours}`,
    brands: "Kasutame",
  },
  type: {
    word1: "DETAILING",
    word2: "STUUDIO",
    left: "Kaitse autot igapäevase kulumise eest",
    right: "Käsitsi viimistletud",
    basic: { title: "PESU", from: "alates", price: "€XX", items: "pesu · tolmuimemine · aknad" },
    full: { title: "TÄISDETAILING", from: "alates", price: "€XX", items: "poleerimine · salong · kaitse" },
  },
  services: {
    label: "Meie teenused",
    items: [
      { key: "exterior", title: "Välispesu" },
      { key: "interior", title: "Salongi puhastus" },
      { key: "polishing", title: "Värvi poleerimine" },
      { key: "ceramic", title: "Keraamiline kaitse" },
      { key: "headlights", title: "Esitulede taastamine" },
      { key: "leather", title: "Naha hooldus" },
      { key: "other", title: "Muud teenused" },
    ],
    open: "Küsi selle teenuse kohta",
    helpTitle: "Ei tea, mida valida?",
    helpText: "Saada pilt oma autost ja soovitame sobiva teenuse.",
    helpCta: "Kirjuta WhatsAppi",
  },
  stats: ["puhastatud autot", "aastat kogemust", "kliente tuleb tagasi", "keskmine töö kestus"],
  shine: {
    title: ["PARIM", "LÄIGE"],
    text: "Poleerime värvi, kuni peegeldus on jälle terav. Iga paneeli kontrollime stuudiovalguses.",
    cta: "Broneeri",
    aside: "Töötame korraga ühe autoga. Nii jõuame iga detailini: uksevahed, velgede siseküljed, õhuavad.",
  },
  revive: {
    kicker: "Taastamine",
    title: ["TAASTA", "OMA AUTO"],
    text: "Tuhm värv, keerised ja kollaseks tõmbunud esituled on enamasti parandatavad. Poleerime, taastame ja kaitseme, et värv näeks jälle sügav ja ühtlane välja.",
  },
  deep: {
    kicker: "Salong",
    title: ["SÜVA", "PUHASTUS"],
    text: "Salong puhastatakse otsast lõpuni: istmed, vaibad, laematerjal, õhuavad ja pagasiruum.",
    list: ["Värvile ohutud vahendid", "Salongi aurupuhastus", "Kõik tehakse käsitsi"],
  },
  ba: {
    title: "Enne ja pärast.",
    text: "Lohista liugurit ja vaata erinevust. Sama auto, sama valgus.",
    before: "Enne",
    after: "Pärast",
    hint: "Lohista, et võrrelda",
    examples: [
      { label: "Poleerimine", before: "Tuhm värv ja pesujäljed", after: "Poleeritud ja kaitstud" },
      { label: "Pesu", before: "Tee- ja talvemustus", after: "Puhas, kuivatatud käsitsi" },
      { label: "Kaitse", before: "Vesi jääb pinnale", after: "Keraamiline kiht, vesi veereb maha" },
    ],
  },
  packages: {
    label: "Paketid",
    title: ["VALI", "PAKETT"],
    popular: "Populaarseim",
    from: "alates",
    cta: "Broneeri",
    note: "Lõplik hind sõltub auto suurusest ja seisukorrast. Täpse hinna ütleme pärast auto ülevaatust.",
    items: [
      {
        name: "Basic",
        price: "€XX",
        features: ["Käsipesu", "Velgede puhastus", "Salongi tolmuimemine", "Aknad seest ja väljast"],
      },
      {
        name: "Premium",
        price: "€XX",
        features: ["Kõik Basic paketist", "Plastide puhastus ja hooldus", "Istmete puhastus", "Kiirkaitse värvile"],
      },
      {
        name: "Full Detail",
        price: "€XX",
        features: ["Kõik Premium paketist", "Värvi poleerimine", "Keraamiline kaitse", "Naha hooldus"],
      },
    ],
  },
  bento: {
    title: ["STUUDIO,", "KUS AUTO SAAB AEGA"],
    sub: "Üks auto korraga, selge hind ja tulemus, mida näed stuudiovalguses.",
    tallTitle: "Meie teenused",
    tallText: "Pesust keraamilise kaitseni.",
    tallCta: "Vaata teenuseid",
    photo: "Värv pärast poleerimist",
    statsTitle: "Kliendid ja tööd",
    stats: [
      { v: "[X]", l: "autot kuus" },
      { v: "[X]", l: "Google'i hinne" },
      { v: "[X]", l: "aastat" },
    ],
  },
  reviews: {
    label: "Mida kliendid ütlevad",
    prev: "Eelmine arvustus",
    next: "Järgmine arvustus",
    // Replace with REAL reviews (e.g. copied from Google with permission). Do not invent them.
    items: [
      {
        quote: "[PÄRIS ARVUSTUS: kliendi tekst siia, näiteks Google'i arvustusest]",
        name: "[Kliendi nimi]",
        caption: "[Auto mudel · teenus · kuu ja aasta]",
      },
      {
        quote: "[PÄRIS ARVUSTUS 2]",
        name: "[Kliendi nimi]",
        caption: "[Auto mudel · teenus · kuu ja aasta]",
      },
    ],
  },
  cta: {
    title: "Paneme su auto särama?",
    book: "Broneeri aeg",
    contact: "Kontakt",
  },
  contact: {
    label: "Kontakt",
    title: ["BRONEERI", "AEG"],
    text: "Täida vorm ja päring avaneb WhatsAppis koos kõigi andmetega. Võid ka lihtsalt helistada.",
    form: {
      name: "Nimi",
      phone: "Telefon",
      car: "Auto mark ja mudel",
      service: "Teenus",
      choose: "Vali teenus",
      date: "Soovitud kuupäev",
      submit: "Saada WhatsAppi",
      intro: "Tere! Soovin broneerida aega.",
      sent: "WhatsApp avanes uues aknas. Kui see ei avanenud, helista meile.",
    },
    phone: "Telefon",
    whatsapp: "WhatsApp",
    email: "E-post",
    instagram: "Instagram",
    hours: "Lahtiolekuajad",
    address: "Aadress",
    mapButton: "Näita kaarti",
    mapNote: "Kaart laaditakse Google Mapsist alles pärast klõpsu.",
  },
  footer: {
    aboutTitle: "Meist",
    aboutText: `${name} on auto detailingu stuudio linnas ${city}. [LÜHIKE TUTVUSTUS: kes te olete ja kuidas alustasite]`,
    aboutLink: "Loe lähemalt",
    links: "Kiirlingid",
    works: "Meie tööd",
    privacy: "Privaatsuspoliitika",
    terms: "Kasutustingimused",
    top: "Tagasi üles",
    company: "[ETTEVÕTTE AMETLIK NIMI] · registrikood [REGISTRIKOOD]",
  },
  alt: {
    heroCar: "Auto külgvaade hallil stuudiotaustal",
    heroBlur: "Udune stuudiofoto autost",
    typeCar: "Auto stuudios",
    shine: "Läikiv auto stuudiovalguses",
    revive: "Taastatud värviga auto",
    deep: "Auto käsitsi pesemine",
    bentoTall: "Auto pimedas stuudios",
    review: "[FOTO: kliendi auto]",
    cta: "Auto siluett valgusjoonega",
    work: "Stuudio töö",
    avatar: "Kliendi auto",
  },
  legal: {
    back: "Tagasi avalehele",
    updated: "Viimati uuendatud: [KUUPÄEV]",
    privacy: {
      title: "Privaatsuspoliitika",
      sections: [
        {
          h: "Kes vastutab andmete eest",
          p: `[ETTEVÕTTE AMETLIK NIMI], registrikood [REGISTRIKOOD], ${address}, ${city}. E-post ${site.email}, telefon ${site.phone}.`,
        },
        {
          h: "Milliseid andmeid kogume",
          p: "Broneerimisvorm ei salvesta andmeid sellel veebilehel. Vormi saatmisel avaneb WhatsApp ja sõnum (nimi, telefon, auto mudel, teenus, kuupäev) liigub otse meile. Kasutame neid andmeid ainult broneeringu korraldamiseks.",
        },
        {
          h: "Kolmandad osapooled",
          p: "WhatsApp (Meta Platforms Ireland Ltd) sõnumite edastamiseks. Google Maps kaardi kuvamiseks, ainult pärast seda, kui klõpsad nupul „Näita kaarti“. Veebimajutus: Vercel Inc. (serveri logid).",
        },
        {
          h: "Säilitamine",
          p: "Broneeringuga seotud sõnumeid hoiame [X] kuud, seejärel kustutame. [TÄPSUSTA]",
        },
        {
          h: "Sinu õigused",
          p: "Sul on õigus oma andmetega tutvuda, neid parandada või kustutada ning esitada vastuväiteid. Kirjuta meile ülaltoodud aadressil. Kaebuse saad esitada Andmekaitse Inspektsioonile (www.aki.ee).",
        },
        {
          h: "Küpsised",
          p: "See leht ei kasuta jälgimisküpsiseid. Google Maps võib küpsiseid seada alles pärast kaardi avamist.",
        },
      ],
    },
    terms: {
      title: "Kasutustingimused",
      sections: [
        {
          h: "Teenused ja hinnad",
          p: "Lehel toodud hinnad on alghinnad. Lõplik hind sõltub auto suurusest ja seisukorrast ning lepitakse kokku enne töö algust.",
        },
        {
          h: "Broneerimine ja tühistamine",
          p: "Broneering kehtib pärast meie kinnitust. Palume aja tühistada või muuta vähemalt [X] tundi ette. [TÄPSUSTA]",
        },
        {
          h: "Vastutus",
          p: "Kontrollime auto seisukorda enne tööd ja märgime olemasolevad kahjustused. [TÄPSUSTA VASTUTUSE TINGIMUSED]",
        },
        {
          h: "Kontakt",
          p: `[ETTEVÕTTE AMETLIK NIMI], registrikood [REGISTRIKOOD], ${address}, ${city}. ${site.email}, ${site.phone}.`,
        },
      ],
    },
  },
};

export type Dict = typeof et;

const ru: Dict = {
  meta: {
    title: `${name} | Детейлинг ${city}: мойка, полировка, керамика`,
    description: `Детейлинг в ${city}: ручная мойка, химчистка салона, полировка и керамическое покрытие. Запись через WhatsApp.`,
    ogAlt: `${name}, детейлинг-студия`,
  },
  nav: {
    services: "Услуги",
    beforeAfter: "До/после",
    prices: "Цены",
    about: "О нас",
    contact: "Контакты",
    book: "Записаться",
    menu: "Меню",
    close: "Закрыть",
    language: "Язык",
    home: "Главная",
  },
  booking: {
    general: `Здравствуйте! Хочу записаться в студию ${name}.`,
    service: "Здравствуйте! Хочу записаться на услугу:",
  },
  hero: {
    title: "Автомобиль как из шоурума.",
    sub: `Ручная мойка, полировка и керамика. Всё делаем руками, в студии по адресу ${address}.`,
    cta: "Записаться",
    more: "Подробнее",
    open: `Открыто: ${hours}`,
    brands: "Работаем на",
  },
  type: {
    word1: "ДЕТЕЙЛИНГ",
    word2: "СТУДИЯ",
    left: "Защита от ежедневного износа",
    right: "Ручная работа",
    basic: { title: "МОЙКА", from: "от", price: "€XX", items: "мойка · пылесос · стёкла" },
    full: { title: "ПОЛНЫЙ ДЕТЕЙЛИНГ", from: "от", price: "€XX", items: "полировка · салон · защита" },
  },
  services: {
    label: "Наши услуги",
    items: [
      { key: "exterior", title: "Мойка кузова" },
      { key: "interior", title: "Химчистка салона" },
      { key: "polishing", title: "Полировка кузова" },
      { key: "ceramic", title: "Керамическое покрытие" },
      { key: "headlights", title: "Восстановление фар" },
      { key: "leather", title: "Уход за кожей" },
      { key: "other", title: "Другие услуги" },
    ],
    open: "Спросить об услуге",
    helpTitle: "Не знаете, что выбрать?",
    helpText: "Пришлите фото машины, и мы подскажем подходящую услугу.",
    helpCta: "Написать в WhatsApp",
  },
  stats: ["машин обработано", "лет опыта", "клиентов возвращаются", "в среднем на работу"],
  shine: {
    title: ["ЧИСТЫЙ", "БЛЕСК"],
    text: "Полируем кузов, пока отражение снова не станет чётким. Каждую деталь проверяем под студийным светом.",
    cta: "Записаться",
    aside: "Работаем с одной машиной за раз. Так успеваем всё: дверные проёмы, внутреннюю сторону дисков, дефлекторы.",
  },
  revive: {
    kicker: "Восстановление",
    title: ["ВЕРНИТЕ", "БЛЕСК МАШИНЕ"],
    text: "Тусклый лак, паутинка и пожелтевшие фары почти всегда исправимы. Полируем, восстанавливаем и защищаем, чтобы цвет снова был глубоким и ровным.",
  },
  deep: {
    kicker: "Салон",
    title: ["ГЛУБОКАЯ", "ЧИСТКА"],
    text: "Салон чистим полностью: сиденья, ковры, потолок, дефлекторы и багажник.",
    list: ["Безопасные для лака средства", "Паровая чистка салона", "Только ручная работа"],
  },
  ba: {
    title: "До и после.",
    text: "Потяните ползунок и сравните. Та же машина, тот же свет.",
    before: "До",
    after: "После",
    hint: "Потяните, чтобы сравнить",
    examples: [
      { label: "Полировка", before: "Тусклый лак, следы мойки", after: "Отполировано и защищено" },
      { label: "Мойка", before: "Дорожная и зимняя грязь", after: "Чисто, высушено вручную" },
      { label: "Защита", before: "Вода держится на кузове", after: "Керамика, вода скатывается" },
    ],
  },
  packages: {
    label: "Пакеты",
    title: ["ВЫБЕРИТЕ", "ПАКЕТ"],
    popular: "Чаще всего выбирают",
    from: "от",
    cta: "Записаться",
    note: "Итоговая цена зависит от размера и состояния машины. Точную цену назовём после осмотра.",
    items: [
      {
        name: "Basic",
        price: "€XX",
        features: ["Ручная мойка", "Чистка дисков", "Пылесос салона", "Стёкла внутри и снаружи"],
      },
      {
        name: "Premium",
        price: "€XX",
        features: ["Всё из пакета Basic", "Чистка и уход за пластиком", "Чистка сидений", "Быстрая защита кузова"],
      },
      {
        name: "Full Detail",
        price: "€XX",
        features: ["Всё из пакета Premium", "Полировка кузова", "Керамическое покрытие", "Уход за кожей"],
      },
    ],
  },
  bento: {
    title: ["ДЕТЕЙЛИНГ", "БЕЗ СПЕШКИ"],
    sub: "Одна машина за раз, понятная цена и результат, который видно под студийным светом.",
    tallTitle: "Наши услуги",
    tallText: "От мойки до керамики.",
    tallCta: "Смотреть услуги",
    photo: "Лак после полировки",
    statsTitle: "Клиенты и работы",
    stats: [
      { v: "[X]", l: "машин в месяц" },
      { v: "[X]", l: "оценка в Google" },
      { v: "[X]", l: "лет" },
    ],
  },
  reviews: {
    label: "Что говорят клиенты",
    prev: "Предыдущий отзыв",
    next: "Следующий отзыв",
    items: [
      {
        quote: "[НАСТОЯЩИЙ ОТЗЫВ: текст клиента, например из Google]",
        name: "[Имя клиента]",
        caption: "[Модель машины · услуга · месяц и год]",
      },
      {
        quote: "[НАСТОЯЩИЙ ОТЗЫВ 2]",
        name: "[Имя клиента]",
        caption: "[Модель машины · услуга · месяц и год]",
      },
    ],
  },
  cta: {
    title: "Вернём вашей машине блеск?",
    book: "Записаться",
    contact: "Контакты",
  },
  contact: {
    label: "Контакты",
    title: ["ЗАПИСЬ", "НА ВРЕМЯ"],
    text: "Заполните форму, и заявка откроется в WhatsApp со всеми данными. Или просто позвоните.",
    form: {
      name: "Имя",
      phone: "Телефон",
      car: "Марка и модель",
      service: "Услуга",
      choose: "Выберите услугу",
      date: "Желаемая дата",
      submit: "Отправить в WhatsApp",
      intro: "Здравствуйте! Хочу записаться.",
      sent: "WhatsApp открылся в новом окне. Если нет, просто позвоните нам.",
    },
    phone: "Телефон",
    whatsapp: "WhatsApp",
    email: "E-mail",
    instagram: "Instagram",
    hours: "Часы работы",
    address: "Адрес",
    mapButton: "Показать карту",
    mapNote: "Карта Google загружается только после нажатия.",
  },
  footer: {
    aboutTitle: "О нас",
    aboutText: `Детейлинг-студия ${name} в ${city}. [КОРОТКО О СЕБЕ: кто вы и с чего начинали]`,
    aboutLink: "Подробнее",
    links: "Разделы",
    works: "Наши работы",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    top: "Наверх",
    company: "[ЮРИДИЧЕСКОЕ НАЗВАНИЕ] · рег. код [РЕГ. КОД]",
  },
  alt: {
    heroCar: "Автомобиль сбоку на сером студийном фоне",
    heroBlur: "Размытое студийное фото автомобиля",
    typeCar: "Автомобиль в студии",
    shine: "Блестящий автомобиль под студийным светом",
    revive: "Автомобиль с восстановленным лаком",
    deep: "Ручная мойка автомобиля",
    bentoTall: "Автомобиль в тёмной студии",
    review: "[ФОТО: машина клиента]",
    cta: "Силуэт автомобиля с полосой света",
    work: "Работа студии",
    avatar: "Машина клиента",
  },
  legal: {
    back: "На главную",
    updated: "Обновлено: [ДАТА]",
    privacy: {
      title: "Политика конфиденциальности",
      sections: [
        {
          h: "Кто отвечает за данные",
          p: `[ЮРИДИЧЕСКОЕ НАЗВАНИЕ], рег. код [РЕГ. КОД], ${address}, ${city}. E-mail ${site.email}, телефон ${site.phone}.`,
        },
        {
          h: "Какие данные мы получаем",
          p: "Форма записи не сохраняет данные на сайте. При отправке открывается WhatsApp, и сообщение (имя, телефон, модель машины, услуга, дата) приходит напрямую нам. Эти данные используются только для записи.",
        },
        {
          h: "Третьи стороны",
          p: "WhatsApp (Meta Platforms Ireland Ltd) для сообщений. Google Maps для карты, только после нажатия «Показать карту». Хостинг: Vercel Inc. (серверные логи).",
        },
        {
          h: "Срок хранения",
          p: "Сообщения о записи храним [X] месяцев, затем удаляем. [УТОЧНИТЬ]",
        },
        {
          h: "Ваши права",
          p: "Вы можете запросить доступ к своим данным, их исправление или удаление, а также возразить против обработки. Напишите нам по адресу выше. Жалобу можно подать в Инспекцию по защите данных Эстонии (www.aki.ee).",
        },
        {
          h: "Cookies",
          p: "Сайт не использует отслеживающие cookies. Google Maps может установить cookies только после открытия карты.",
        },
      ],
    },
    terms: {
      title: "Условия использования",
      sections: [
        {
          h: "Услуги и цены",
          p: "Цены на сайте указаны «от». Итоговая цена зависит от размера и состояния машины и согласуется до начала работы.",
        },
        {
          h: "Запись и отмена",
          p: "Запись действительна после нашего подтверждения. Просим отменять или переносить визит минимум за [X] часов. [УТОЧНИТЬ]",
        },
        {
          h: "Ответственность",
          p: "Перед работой осматриваем машину и фиксируем имеющиеся повреждения. [УТОЧНИТЬ УСЛОВИЯ ОТВЕТСТВЕННОСТИ]",
        },
        {
          h: "Контакты",
          p: `[ЮРИДИЧЕСКОЕ НАЗВАНИЕ], рег. код [РЕГ. КОД], ${address}, ${city}. ${site.email}, ${site.phone}.`,
        },
      ],
    },
  },
};

const en: Dict = {
  meta: {
    title: `${name} | Car detailing in ${city}: wash, polishing, ceramic coating`,
    description: `Car detailing in ${city}, Estonia: hand wash, interior cleaning, paint polishing and ceramic coating. Book on WhatsApp.`,
    ogAlt: `${name}, car detailing studio`,
  },
  nav: {
    services: "Services",
    beforeAfter: "Before/After",
    prices: "Prices",
    about: "About",
    contact: "Contact",
    book: "Book",
    menu: "Menu",
    close: "Close",
    language: "Language",
    home: "Home",
  },
  booking: {
    general: `Hi! I'd like to book a visit at ${name}.`,
    service: "Hi! I'd like to book:",
  },
  hero: {
    title: "Your car, showroom condition.",
    sub: `Hand wash, paint polishing and ceramic coating. All done by hand, in our studio at ${address}.`,
    cta: "Book now",
    more: "Learn more",
    open: `Open: ${hours}`,
    brands: "Products we use",
  },
  type: {
    word1: "DETAILING",
    word2: "STUDIO",
    left: "Protect your car from daily wear",
    right: "Hand finished",
    basic: { title: "BASIC WASH", from: "from", price: "€XX", items: "wash · vacuum · windows" },
    full: { title: "FULL DETAIL", from: "from", price: "€XX", items: "polish · interior · protection" },
  },
  services: {
    label: "Our services",
    items: [
      { key: "exterior", title: "Exterior wash" },
      { key: "interior", title: "Interior cleaning" },
      { key: "polishing", title: "Paint polishing" },
      { key: "ceramic", title: "Ceramic coating" },
      { key: "headlights", title: "Headlight restoration" },
      { key: "leather", title: "Leather care" },
      { key: "other", title: "Other services" },
    ],
    open: "Ask about this service",
    helpTitle: "Not sure what you need?",
    helpText: "Send us a photo of your car and we'll suggest the right service.",
    helpCta: "Message on WhatsApp",
  },
  stats: ["cars detailed", "years experience", "returning clients", "average job"],
  shine: {
    title: ["BEST", "SHINE"],
    text: "We polish until the reflection is sharp again, and check every panel under studio light.",
    cta: "Book",
    aside: "One car at a time. That leaves time for the parts most skip: door jambs, inner wheel barrels, air vents.",
  },
  revive: {
    kicker: "Restoration",
    title: ["REVIVE", "YOUR CAR"],
    text: "Dull paint, swirl marks and yellowed headlights can almost always be fixed. We polish, restore and protect so the colour looks deep and even again.",
  },
  deep: {
    kicker: "Interior",
    title: ["DEEP", "CLEAN"],
    text: "The whole interior, end to end: seats, carpets, headliner, air vents and the boot.",
    list: ["Safe products for paint", "Interior steam cleaning", "Done by hand"],
  },
  ba: {
    title: "Before & after.",
    text: "Drag the slider to compare. Same car, same light.",
    before: "Before",
    after: "After",
    hint: "Drag to compare",
    examples: [
      { label: "Polishing", before: "Dull paint, wash marks", after: "Polished and protected" },
      { label: "Wash", before: "Road and winter grime", after: "Clean, hand dried" },
      { label: "Protection", before: "Water sits on the paint", after: "Ceramic layer, water beads off" },
    ],
  },
  packages: {
    label: "Packages",
    title: ["CHOOSE YOUR", "PACKAGE"],
    popular: "Most popular",
    from: "from",
    cta: "Book",
    note: "Final price depends on the size and condition of the car. We confirm it after a quick inspection.",
    items: [
      {
        name: "Basic",
        price: "€XX",
        features: ["Hand wash", "Wheel cleaning", "Interior vacuum", "Windows inside and out"],
      },
      {
        name: "Premium",
        price: "€XX",
        features: ["Everything in Basic", "Plastics cleaned and dressed", "Seat cleaning", "Quick paint sealant"],
      },
      {
        name: "Full Detail",
        price: "€XX",
        features: ["Everything in Premium", "Paint polishing", "Ceramic coating", "Leather care"],
      },
    ],
  },
  bento: {
    title: ["THE BEST", "DETAILING EXPERIENCE"],
    sub: "One car at a time, a clear price, and a finish you can check under studio light.",
    tallTitle: "Our services",
    tallText: "From a wash to ceramic coating.",
    tallCta: "See services",
    photo: "Paint after polishing",
    statsTitle: "Clients and work",
    stats: [
      { v: "[X]", l: "cars a month" },
      { v: "[X]", l: "Google rating" },
      { v: "[X]", l: "years" },
    ],
  },
  reviews: {
    label: "What clients say",
    prev: "Previous review",
    next: "Next review",
    items: [
      {
        quote: "[REAL REVIEW: paste the client's own words here, e.g. from Google]",
        name: "[Client name]",
        caption: "[Car model · service · month and year]",
      },
      {
        quote: "[REAL REVIEW 2]",
        name: "[Client name]",
        caption: "[Car model · service · month and year]",
      },
    ],
  },
  cta: {
    title: "Ready to make your car shine?",
    book: "Book a visit",
    contact: "Contact",
  },
  contact: {
    label: "Contact",
    title: ["BOOK A", "VISIT"],
    text: "Fill in the form and your request opens in WhatsApp with everything filled in. Or just call.",
    form: {
      name: "Name",
      phone: "Phone",
      car: "Car make and model",
      service: "Service",
      choose: "Choose a service",
      date: "Preferred date",
      submit: "Send via WhatsApp",
      intro: "Hi! I'd like to book a visit.",
      sent: "WhatsApp opened in a new tab. If it didn't, give us a call.",
    },
    phone: "Phone",
    whatsapp: "WhatsApp",
    email: "Email",
    instagram: "Instagram",
    hours: "Opening hours",
    address: "Address",
    mapButton: "Show map",
    mapNote: "The Google map only loads after you click.",
  },
  footer: {
    aboutTitle: "About",
    aboutText: `${name} is a car detailing studio in ${city}. [SHORT INTRO: who you are and how you started]`,
    aboutLink: "Read more",
    links: "Quick links",
    works: "Our work",
    privacy: "Privacy policy",
    terms: "Terms of use",
    top: "Back to top",
    company: "[LEGAL COMPANY NAME] · registry code [REGISTRY CODE]",
  },
  alt: {
    heroCar: "Car in side profile on a grey studio backdrop",
    heroBlur: "Blurred studio photo of a car",
    typeCar: "Car in the studio",
    shine: "Glossy car under studio light",
    revive: "Car with restored paint",
    deep: "Car being washed by hand",
    bentoTall: "Car in a dark studio",
    review: "[PHOTO: client's car]",
    cta: "Car silhouette with a streak of light",
    work: "Studio work",
    avatar: "Client's car",
  },
  legal: {
    back: "Back to home",
    updated: "Last updated: [DATE]",
    privacy: {
      title: "Privacy policy",
      sections: [
        {
          h: "Who is responsible",
          p: `[LEGAL COMPANY NAME], registry code [REGISTRY CODE], ${address}, ${city}. Email ${site.email}, phone ${site.phone}.`,
        },
        {
          h: "What data we receive",
          p: "The booking form does not store anything on this website. When you send it, WhatsApp opens and the message (name, phone, car model, service, date) goes directly to us. We use it only to arrange your booking.",
        },
        {
          h: "Third parties",
          p: "WhatsApp (Meta Platforms Ireland Ltd) for messages. Google Maps for the map, only after you click “Show map”. Hosting: Vercel Inc. (server logs).",
        },
        {
          h: "Retention",
          p: "We keep booking messages for [X] months, then delete them. [CONFIRM]",
        },
        {
          h: "Your rights",
          p: "You can ask to access, correct or delete your data, or object to its use. Write to us at the address above. You can also complain to the Estonian Data Protection Inspectorate (www.aki.ee).",
        },
        {
          h: "Cookies",
          p: "This site uses no tracking cookies. Google Maps may set cookies only after you open the map.",
        },
      ],
    },
    terms: {
      title: "Terms of use",
      sections: [
        {
          h: "Services and prices",
          p: "Prices on this site are starting prices. The final price depends on the size and condition of the car and is agreed before work starts.",
        },
        {
          h: "Booking and cancellation",
          p: "A booking is valid once we confirm it. Please cancel or reschedule at least [X] hours in advance. [CONFIRM]",
        },
        {
          h: "Liability",
          p: "We inspect the car before work and note any existing damage. [CONFIRM LIABILITY TERMS]",
        },
        {
          h: "Contact",
          p: `[LEGAL COMPANY NAME], registry code [REGISTRY CODE], ${address}, ${city}. ${site.email}, ${site.phone}.`,
        },
      ],
    },
  },
};

export const dictionaries: Record<Locale, Dict> = { et, ru, en };

/** Keywords for SEO (shared across languages). */
export const keywords = [
  `auto detailing ${city}`,
  "auto detailing",
  "autopesu",
  "poleerimine",
  "keraamiline kaitse",
  "salongi puhastus",
  "детейлинг",
  "полировка",
  "керамика",
  "car detailing Estonia",
];
