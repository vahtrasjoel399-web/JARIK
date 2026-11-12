/**
 * All site texts in one place: Estonian (default), Russian, English.
 * Two-part headings are written as ["dark part", "grey part"].
 * Anything in [BRACKETS] is a placeholder: replace it with the real information.
 * Prices live in content/site.ts (services).
 */
import { site, type Locale, type ServiceKey } from "./site";

const { name, address, hours, phone } = site;

const metaTitle = `${name} – Detailing Studio | ${address}`;

const et = {
  meta: {
    title: metaTitle,
    description: `Auto salongi puhastus Ahtmes ja Kohtla-Järvel: keemiline puhastus, süvapuhastus, nahahooldus ja plekkide eemaldamine. Broneeri WhatsAppis ${phone}.`,
    ogAlt: `${name}, auto salongi hoolduse stuudio Ahtmes`,
  },
  nav: {
    services: "Teenused",
    beforeAfter: "Enne/pärast",
    prices: "Hinnakiri",
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
    service: "Tere! Soovin broneerida:",
  },
  hero: {
    label: address as string,
    title: "Salong nagu uus.",
    sub: "Salongi puhastus, keemiline puhastus ja nahahooldus. Kõik tehakse käsitsi, Ahtmes, Ida-Virumaal.",
    cta: "Broneeri aeg",
    more: "Loe lähemalt",
    open: `Avatud: ${hours}`,
    brands: "Kasutame",
  },
  type: {
    word1: "DETAILING",
    word2: "STUUDIO",
    left: "Salongi hooldus sinu autole",
    right: "Käsitsi tehtud",
    basic: { title: "PÕHIPUHASTUS", from: "alates", price: "30 €", items: "tolmuimemine · matid · plastikud" },
    full: { title: "KEEMILINE PUHASTUS", from: "alates", price: "130 €", items: "istmed · vaibad · põrand · polster" },
  },
  services: {
    label: "Meie teenused",
    items: [
      { key: "basic", title: "Salongi põhipuhastus", desc: "Tolmuimemine, matid, plastpindade pühkimine" },
      { key: "deep", title: "Salongi süvapuhastus", desc: "Kõigi pindade põhjalik puhastus" },
      { key: "full", title: "Salongi täielik keemiline puhastus", desc: "Istmete, vaipade, põranda ja polstri süvapuhastus" },
      { key: "leather", title: "Nahahooldus", desc: "Nahkpindade puhastus ja toitmine" },
      { key: "plastic", title: "Plasti- ja vinüülpindade puhastus", desc: "Sisepindade puhastus ja kaitse" },
      { key: "stains", title: "Plekkide eemaldamine", desc: "Raskete plekkide kohtpuhastus" },
    ] as { key: ServiceKey; title: string; desc: string }[],
    open: "Broneeri see teenus WhatsAppis",
    helpTitle: "Ei tea, mida valida?",
    helpText: "Saada pilt oma auto salongist ja soovitame sobiva teenuse.",
    helpCta: "Kirjuta WhatsAppi",
  },
  priceList: {
    label: "Hinnakiri",
    title: "Hinnakiri",
    sub: "Salongi hooldus sinu autole",
    from: "alates",
    info: "Hind sõltub auto suurusest ja määrdumise astmest. Lõplik hind lepitakse kokku enne töö algust.",
  },
  stats: ["puhastatud autot", "aastat kogemust", "kliente tuleb tagasi", "keskmine töö kestus"],
  shine: {
    title: ["PUHAS", "SEEST"],
    text: "Istmed, vaibad, plastikud ja nahk: puhastame iga pinna, mida puudutad, ja kontrollime tulemust ereda valguse all.",
    cta: "Broneeri",
    aside: "Töötame korraga ühe autoga. Nii jõuame ka kohtadesse, mis tavaliselt vahele jäävad: istmesiinid, uksetaskud, õhuavad.",
  },
  revive: {
    kicker: "Värskendus",
    title: ["VÄRSKENDA", "OMA SALONGI"],
    text: "Plekid, lõhnad, tolmused õhuavad ja tuhmid plastikud on enamasti parandatavad. Puhastame, hooldame ja kaitseme, et salong näeks välja ja lõhnaks jälle värske.",
  },
  deep: {
    kicker: "Salong",
    title: ["SÜVA", "PUHASTUS"],
    text: "Salong puhastatakse otsast lõpuni: istmed, vaibad, laematerjal, õhuavad ja pagasiruum.",
    list: ["Ohutud vahendid igale materjalile", "Salongi aurupuhastus", "Kõik tehakse käsitsi"],
  },
  ba: {
    title: "Enne ja pärast.",
    text: "Lohista liugurit ja vaata erinevust. Sama salong, sama valgus.",
    before: "Enne",
    after: "Pärast",
    hint: "Lohista, et võrrelda",
    examples: [
      { label: "Istmed", before: "Plekid ja tolm kangas", after: "Süvapuhastatud ja kuivatatud" },
      { label: "Vaibad", before: "Liiv, sool ja mustus", after: "Šampooniga pestud ja tolmuimetud" },
      { label: "Nahk", before: "Tuhm ja kuiv nahk", after: "Puhastatud ja toidetud" },
    ],
  },
  bento: {
    title: ["STUUDIO,", "KUS AUTO SAAB AEGA"],
    sub: "Üks auto korraga, selge hind ja salong, mida saad ereda valguse all üle vaadata.",
    tallTitle: "Meie teenused",
    tallText: "Kiirest tolmuimemisest täieliku keemilise puhastuseni.",
    tallCta: "Vaata teenuseid",
    photo: "Salong pärast puhastust",
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
    title: "Teeme salongi jälle puhtaks?",
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
    address: "Asukoht",
    mapButton: "Näita kaarti",
    mapNote: "Kaart laaditakse Google Mapsist alles pärast klõpsu.",
  },
  footer: {
    aboutTitle: "Meist",
    aboutText: `${name} on auto salongi hoolduse stuudio Ahtmes, Ida-Virumaal. [LÜHIKE TUTVUSTUS: kes te olete ja kuidas alustasite]`,
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
    heroBlur: "Udune foto auto salongist",
    typeCar: "Auto stuudios",
    shine: "Auto istmed ereda valguse all",
    revive: "Auto armatuurlaud ja salong",
    deep: "Armatuurlaua puhastamine pintsliga",
    bentoTall: "Hele nahksalong",
    review: "[FOTO: kliendi auto salong]",
    cta: "Auto siluett valgusjoonega",
    work: "Salongi puhastustöö",
    avatar: "Kliendi auto salong",
  },
  legal: {
    back: "Tagasi avalehele",
    updated: "Viimati uuendatud: [KUUPÄEV]",
    privacy: {
      title: "Privaatsuspoliitika",
      sections: [
        {
          h: "Kes vastutab andmete eest",
          p: `[ETTEVÕTTE AMETLIK NIMI], registrikood [REGISTRIKOOD], ${address}. E-post ${site.email}, telefon ${phone}.`,
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
          p: "Lehel toodud hinnad on alghinnad. Lõplik hind sõltub auto suurusest ja määrdumise astmest ning lepitakse kokku enne töö algust.",
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
          p: `[ETTEVÕTTE AMETLIK NIMI], registrikood [REGISTRIKOOD], ${address}. ${site.email}, ${phone}.`,
        },
      ],
    },
  },
};

export type Dict = typeof et;

const ru: Dict = {
  meta: {
    title: metaTitle,
    description: `Химчистка салона в Ахтме (Кохтла-Ярве, Ида-Вирумаа): уборка салона, полная химчистка, уход за кожей, удаление пятен. Запись в WhatsApp ${phone}.`,
    ogAlt: `${name}, студия ухода за салоном в Ахтме`,
  },
  nav: {
    services: "Услуги",
    beforeAfter: "До/после",
    prices: "Прайс-лист",
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
    service: "Здравствуйте! Хочу записаться:",
  },
  hero: {
    label: "Ахтме, Ида-Вирумаа",
    title: "Салон как новый.",
    sub: "Уборка салона, химчистка и уход за кожей. Всё делаем вручную, в Ахтме, Ида-Вирумаа.",
    cta: "Записаться",
    more: "Подробнее",
    open: `Открыто: ${hours}`,
    brands: "Работаем на",
  },
  type: {
    word1: "ДЕТЕЙЛИНГ",
    word2: "СТУДИЯ",
    left: "Уход за салоном вашего автомобиля",
    right: "Ручная работа",
    basic: { title: "БАЗОВАЯ УБОРКА", from: "от", price: "30 €", items: "пылесос · коврики · пластик" },
    full: { title: "ПОЛНАЯ ХИМЧИСТКА", from: "от", price: "130 €", items: "сиденья · ковры · пол · обивка" },
  },
  services: {
    label: "Наши услуги",
    items: [
      { key: "basic", title: "Базовая уборка салона", desc: "Пылесос, коврики, протирка пластика" },
      { key: "deep", title: "Глубокая уборка салона", desc: "Тщательная очистка всех поверхностей" },
      { key: "full", title: "Полная химчистка салона", desc: "Глубокая чистка сидений, ковров, пола и обивки" },
      { key: "leather", title: "Уход за кожей", desc: "Очистка и питание кожаных поверхностей" },
      { key: "plastic", title: "Чистка пластика и винила", desc: "Очистка и защита внутренних поверхностей" },
      { key: "stains", title: "Удаление пятен", desc: "Локальная обработка сложных загрязнений" },
    ],
    open: "Записаться на услугу в WhatsApp",
    helpTitle: "Не знаете, что выбрать?",
    helpText: "Пришлите фото салона, и мы подскажем подходящую услугу.",
    helpCta: "Написать в WhatsApp",
  },
  priceList: {
    label: "Прайс-лист",
    title: "Прайс-лист",
    sub: "Уход за салоном вашего автомобиля",
    from: "от",
    info: "Стоимость зависит от размера автомобиля и степени загрязнения. Окончательная цена согласовывается до начала работы.",
  },
  stats: ["машин почищено", "лет опыта", "клиентов возвращаются", "в среднем на работу"],
  shine: {
    title: ["ЧИСТО", "ВНУТРИ"],
    text: "Сиденья, ковры, пластик и кожа: чистим каждую поверхность, к которой вы прикасаетесь, и проверяем результат при ярком свете.",
    cta: "Записаться",
    aside: "Работаем с одной машиной за раз. Так доходим и до мест, которые обычно пропускают: салазки сидений, карманы дверей, дефлекторы.",
  },
  revive: {
    kicker: "Обновление",
    title: ["ОБНОВИТЕ", "САЛОН"],
    text: "Пятна, запахи, пыльные дефлекторы и тусклый пластик почти всегда исправимы. Чистим, обрабатываем и защищаем, чтобы салон снова выглядел и пах свежо.",
  },
  deep: {
    kicker: "Салон",
    title: ["ГЛУБОКАЯ", "ЧИСТКА"],
    text: "Салон чистим полностью: сиденья, ковры, потолок, дефлекторы и багажник.",
    list: ["Безопасные средства для всех материалов", "Паровая чистка салона", "Только ручная работа"],
  },
  ba: {
    title: "До и после.",
    text: "Потяните ползунок и сравните. Тот же салон, тот же свет.",
    before: "До",
    after: "После",
    hint: "Потяните, чтобы сравнить",
    examples: [
      { label: "Сиденья", before: "Пятна и пыль в ткани", after: "Глубокая чистка и сушка" },
      { label: "Ковры", before: "Песок, соль и грязь", after: "Вымыты шампунем и пропылесосены" },
      { label: "Кожа", before: "Тусклая, сухая кожа", after: "Очищена и напитана" },
    ],
  },
  bento: {
    title: ["ДЕТЕЙЛИНГ", "БЕЗ СПЕШКИ"],
    sub: "Одна машина за раз, понятная цена и салон, который можно проверить при ярком свете.",
    tallTitle: "Наши услуги",
    tallText: "От быстрой уборки до полной химчистки.",
    tallCta: "Смотреть услуги",
    photo: "Салон после чистки",
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
    title: "Вернём салону чистоту?",
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
    address: "Где мы",
    mapButton: "Показать карту",
    mapNote: "Карта Google загружается только после нажатия.",
  },
  footer: {
    aboutTitle: "О нас",
    aboutText: `Студия ухода за салоном ${name} в Ахтме, Ида-Вирумаа. [КОРОТКО О СЕБЕ: кто вы и с чего начинали]`,
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
    heroBlur: "Размытое фото салона автомобиля",
    typeCar: "Автомобиль в студии",
    shine: "Сиденья автомобиля при ярком свете",
    revive: "Приборная панель и салон автомобиля",
    deep: "Чистка приборной панели кистью",
    bentoTall: "Светлый кожаный салон",
    review: "[ФОТО: салон машины клиента]",
    cta: "Силуэт автомобиля с полосой света",
    work: "Чистка салона",
    avatar: "Салон машины клиента",
  },
  legal: {
    back: "На главную",
    updated: "Обновлено: [ДАТА]",
    privacy: {
      title: "Политика конфиденциальности",
      sections: [
        {
          h: "Кто отвечает за данные",
          p: `[ЮРИДИЧЕСКОЕ НАЗВАНИЕ], рег. код [РЕГ. КОД], ${address}. E-mail ${site.email}, телефон ${phone}.`,
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
          p: "Цены на сайте указаны «от». Итоговая цена зависит от размера машины и степени загрязнения и согласуется до начала работы.",
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
          p: `[ЮРИДИЧЕСКОЕ НАЗВАНИЕ], рег. код [РЕГ. КОД], ${address}. ${site.email}, ${phone}.`,
        },
      ],
    },
  },
};

const en: Dict = {
  meta: {
    title: metaTitle,
    description: `Car interior cleaning in Ahtme, Ida-Virumaa: full interior dry cleaning, deep cleaning, leather care and stain removal. Book on WhatsApp ${phone}.`,
    ogAlt: `${name}, car interior detailing studio in Ahtme`,
  },
  nav: {
    services: "Services",
    beforeAfter: "Before/After",
    prices: "Price list",
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
    label: address,
    title: "Your car's interior, like new.",
    sub: "Interior cleaning, full dry cleaning and leather care. All done by hand in Ahtme, Ida-Virumaa.",
    cta: "Book now",
    more: "Learn more",
    open: `Open: ${hours}`,
    brands: "Products we use",
  },
  type: {
    word1: "DETAILING",
    word2: "STUDIO",
    left: "Interior care for your car",
    right: "Hand finished",
    basic: { title: "BASIC CLEAN", from: "from", price: "30 €", items: "vacuum · mats · plastics" },
    full: { title: "FULL DRY CLEANING", from: "from", price: "130 €", items: "seats · carpets · floor · upholstery" },
  },
  services: {
    label: "Our services",
    items: [
      { key: "basic", title: "Basic interior clean", desc: "Vacuuming, mats, wiping down plastics" },
      { key: "deep", title: "Deep interior clean", desc: "Thorough cleaning of every surface" },
      { key: "full", title: "Full interior dry cleaning", desc: "Deep cleaning of seats, carpets, floor and upholstery" },
      { key: "leather", title: "Leather care", desc: "Cleaning and conditioning leather surfaces" },
      { key: "plastic", title: "Plastic & vinyl cleaning", desc: "Cleaning and protecting interior surfaces" },
      { key: "stains", title: "Stain removal", desc: "Spot treatment of stubborn stains" },
    ],
    open: "Book this service on WhatsApp",
    helpTitle: "Not sure what you need?",
    helpText: "Send us a photo of your interior and we'll suggest the right service.",
    helpCta: "Message on WhatsApp",
  },
  priceList: {
    label: "Price list",
    title: "Price list",
    sub: "Interior care for your car",
    from: "from",
    info: "The price depends on the size of the car and how dirty it is. The final price is agreed before work starts.",
  },
  stats: ["cars cleaned", "years experience", "returning clients", "average job"],
  shine: {
    title: ["CLEAN", "INSIDE"],
    text: "Seats, carpets, plastics and leather: every surface you touch gets cleaned, then checked under bright light.",
    cta: "Book",
    aside: "One car at a time. That leaves time for the spots most skip: seat rails, door pockets, air vents.",
  },
  revive: {
    kicker: "Refresh",
    title: ["REVIVE", "YOUR INTERIOR"],
    text: "Stains, odours, dusty vents and dull plastics can almost always be fixed. We clean, treat and protect so the cabin looks and smells fresh again.",
  },
  deep: {
    kicker: "Interior",
    title: ["DEEP", "CLEAN"],
    text: "The whole interior, end to end: seats, carpets, headliner, air vents and the boot.",
    list: ["Safe products for every material", "Interior steam cleaning", "Done by hand"],
  },
  ba: {
    title: "Before & after.",
    text: "Drag the slider to compare. Same interior, same light.",
    before: "Before",
    after: "After",
    hint: "Drag to compare",
    examples: [
      { label: "Seats", before: "Stains and dust in the fabric", after: "Deep cleaned and dried" },
      { label: "Carpets", before: "Sand, salt and dirt", after: "Shampooed and vacuumed" },
      { label: "Leather", before: "Dull, dry leather", after: "Cleaned and conditioned" },
    ],
  },
  bento: {
    title: ["THE BEST", "DETAILING EXPERIENCE"],
    sub: "One car at a time, a clear price, and an interior you can check under bright light.",
    tallTitle: "Our services",
    tallText: "From a quick vacuum to full dry cleaning.",
    tallCta: "See services",
    photo: "Interior after cleaning",
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
    title: "Ready for a fresh interior?",
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
    address: "Location",
    mapButton: "Show map",
    mapNote: "The Google map only loads after you click.",
  },
  footer: {
    aboutTitle: "About",
    aboutText: `${name} is a car interior detailing studio in Ahtme, Ida-Virumaa. [SHORT INTRO: who you are and how you started]`,
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
    heroBlur: "Blurred photo of a car interior",
    typeCar: "Car in the studio",
    shine: "Car seats under bright light",
    revive: "Car dashboard and interior",
    deep: "Cleaning a dashboard with a detailing brush",
    bentoTall: "Light leather car interior",
    review: "[PHOTO: client's car interior]",
    cta: "Car silhouette with a streak of light",
    work: "Interior cleaning work",
    avatar: "Client's car interior",
  },
  legal: {
    back: "Back to home",
    updated: "Last updated: [DATE]",
    privacy: {
      title: "Privacy policy",
      sections: [
        {
          h: "Who is responsible",
          p: `[LEGAL COMPANY NAME], registry code [REGISTRY CODE], ${address}. Email ${site.email}, phone ${phone}.`,
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
          p: "Prices on this site are starting prices. The final price depends on the size of the car and how dirty it is, and is agreed before work starts.",
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
          p: `[LEGAL COMPANY NAME], registry code [REGISTRY CODE], ${address}. ${site.email}, ${phone}.`,
        },
      ],
    },
  },
};

export const dictionaries: Record<Locale, Dict> = { et, ru, en };

/** Keywords for SEO (shared across languages). */
export const keywords = [
  "auto keemiline puhastus Ahtme",
  "salongi puhastus Kohtla-Järve",
  "химчистка салона Ахтме",
  "car interior cleaning Ida-Virumaa",
  "CleanDrive",
  "salongi keemiline puhastus",
  "химчистка салона Кохтла-Ярве",
  "auto detailing Ida-Virumaa",
];
