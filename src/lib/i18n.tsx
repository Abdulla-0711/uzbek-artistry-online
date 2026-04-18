import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "uz" | "ru" | "en";

type Dict = Record<string, string>;
type Translations = Record<Lang, Dict>;

const translations: Translations = {
  uz: {
    "nav.home": "Bosh sahifa",
    "nav.gallery": "Galereya",
    "nav.about": "Biz haqimizda",
    "nav.contact": "Aloqa",
    "nav.order": "Buyurtma berish",

    "hero.eyebrow": "An'anaviy O'zbek san'ati",
    "hero.title": "Qo'l mehnati bilan tug'ilgan go'zallik",
    "hero.subtitle":
      "Asrlar davomida saqlanib kelayotgan miniatyura, naqqoshlik va rangtasvir san'atining noyob asarlari.",
    "hero.cta.products": "Asarlarni ko'rish",
    "hero.cta.order": "Buyurtma berish",

    "about.eyebrow": "Bizning ustaxona",
    "about.title": "Avloddan avlodga o'tib kelayotgan mahorat",
    "about.body":
      "Bizning ustaxonamiz Samarqand va Buxoro maktablarining boy an'analarini davom ettiradi. Har bir asar — usta qo'lining sabri, tabiiy bo'yoqlar va asrlar davomida sayqallangan uslublar bilan yaratiladi.",
    "about.stat1": "Yillik tajriba",
    "about.stat2": "Noyob asarlar",
    "about.stat3": "Mamlakatlar",

    "features.title": "Nega bizni tanlashadi",
    "features.handmade.title": "To'liq qo'lda yasalgan",
    "features.handmade.body": "Har bir chiziq — usta qo'lining mehri.",
    "features.materials.title": "Tabiiy materiallar",
    "features.materials.body": "Tabiiy bo'yoqlar va sifatli asoslar.",
    "features.heritage.title": "Madaniy meros",
    "features.heritage.body": "Asrlar davomidagi an'analar davomi.",
    "features.custom.title": "Buyurtma asarlar",
    "features.custom.body": "Sizning g'oyangiz bo'yicha noyob asar.",

    "gallery.title": "Asarlar galereyasi",
    "gallery.subtitle": "Har bir asar — bir hikoya",
    "gallery.viewAll": "Barchasini ko'rish",
    "gallery.filter.all": "Hammasi",
    "gallery.filter.miniature": "Miniatyura",
    "gallery.filter.naqqoshlik": "Naqqoshlik",
    "gallery.filter.rangtasvir": "Rangtasvir",
    "gallery.filter.patterns": "Bo'yoqli naqshlar",

    "testimonials.title": "Mijozlar fikri",

    "contact.title": "Biz bilan bog'laning",
    "contact.subtitle":
      "Buyurtma yoki maslahat uchun biz bilan istalgan qulay usulda bog'laning.",
    "contact.phone": "Telefon",
    "contact.location": "Manzil",
    "contact.locationValue": "Samarqand, O'zbekiston",

    "product.price": "Narx",
    "product.order": "Buyurtma berish",
    "product.back": "Galereyaga qaytish",
    "product.description": "Tavsif",
    "product.details": "Asar haqida",

    "footer.tagline": "An'anaviy O'zbek san'ati ustaxonasi",
    "footer.rights": "Barcha huquqlar himoyalangan",
  },
  ru: {
    "nav.home": "Главная",
    "nav.gallery": "Галерея",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "nav.order": "Заказать",

    "hero.eyebrow": "Традиционное узбекское искусство",
    "hero.title": "Красота, рождённая руками мастера",
    "hero.subtitle":
      "Уникальные произведения миниатюры, наккоши и живописи, сохранившие традиции веков.",
    "hero.cta.products": "Смотреть работы",
    "hero.cta.order": "Сделать заказ",

    "about.eyebrow": "Наша мастерская",
    "about.title": "Мастерство, передаваемое из поколения в поколение",
    "about.body":
      "Наша мастерская продолжает богатые традиции Самаркандской и Бухарской школ. Каждое произведение создаётся вручную с использованием натуральных пигментов и техник, отшлифованных веками.",
    "about.stat1": "Лет опыта",
    "about.stat2": "Уникальных работ",
    "about.stat3": "Стран",

    "features.title": "Почему выбирают нас",
    "features.handmade.title": "Полностью ручная работа",
    "features.handmade.body": "Каждая линия — внимание мастера.",
    "features.materials.title": "Натуральные материалы",
    "features.materials.body": "Природные пигменты и качественная основа.",
    "features.heritage.title": "Культурное наследие",
    "features.heritage.body": "Продолжение многовековых традиций.",
    "features.custom.title": "Работы на заказ",
    "features.custom.body": "Уникальное произведение по вашей идее.",

    "gallery.title": "Галерея работ",
    "gallery.subtitle": "Каждая работа — отдельная история",
    "gallery.viewAll": "Смотреть все",
    "gallery.filter.all": "Все",
    "gallery.filter.miniature": "Миниатюра",
    "gallery.filter.naqqoshlik": "Наккоши",
    "gallery.filter.rangtasvir": "Живопись",
    "gallery.filter.patterns": "Узоры",

    "testimonials.title": "Отзывы клиентов",

    "contact.title": "Свяжитесь с нами",
    "contact.subtitle": "Для заказа или консультации — выберите удобный способ связи.",
    "contact.phone": "Телефон",
    "contact.location": "Адрес",
    "contact.locationValue": "Самарканд, Узбекистан",

    "product.price": "Цена",
    "product.order": "Заказать",
    "product.back": "Вернуться в галерею",
    "product.description": "Описание",
    "product.details": "О произведении",

    "footer.tagline": "Мастерская традиционного узбекского искусства",
    "footer.rights": "Все права защищены",
  },
  en: {
    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.order": "Order",

    "hero.eyebrow": "Traditional Uzbek Art",
    "hero.title": "Beauty Born from the Hand of a Master",
    "hero.subtitle":
      "One-of-a-kind miniatures, ornamental works and paintings carrying the traditions of centuries.",
    "hero.cta.products": "View Artworks",
    "hero.cta.order": "Order Now",

    "about.eyebrow": "Our Workshop",
    "about.title": "Craftsmanship passed down through generations",
    "about.body":
      "Our atelier continues the rich heritage of the Samarkand and Bukhara schools. Each piece is made by hand using natural pigments and techniques refined across centuries.",
    "about.stat1": "Years of practice",
    "about.stat2": "Unique works",
    "about.stat3": "Countries shipped",

    "features.title": "Why collectors choose us",
    "features.handmade.title": "Entirely handmade",
    "features.handmade.body": "Every line is the master's care.",
    "features.materials.title": "Natural materials",
    "features.materials.body": "Mineral pigments on premium surfaces.",
    "features.heritage.title": "Cultural heritage",
    "features.heritage.body": "Centuries of tradition, alive today.",
    "features.custom.title": "Custom commissions",
    "features.custom.body": "A unique piece born from your idea.",

    "gallery.title": "Gallery of Works",
    "gallery.subtitle": "Every piece tells a story",
    "gallery.viewAll": "View all",
    "gallery.filter.all": "All",
    "gallery.filter.miniature": "Miniature",
    "gallery.filter.naqqoshlik": "Naqqoshlik",
    "gallery.filter.rangtasvir": "Painting",
    "gallery.filter.patterns": "Patterns",

    "testimonials.title": "What Collectors Say",

    "contact.title": "Get in touch",
    "contact.subtitle": "For commissions or questions, reach us through your preferred channel.",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Samarkand, Uzbekistan",

    "product.price": "Price",
    "product.order": "Order this piece",
    "product.back": "Back to gallery",
    "product.description": "Description",
    "product.details": "About this piece",

    "footer.tagline": "Traditional Uzbek Art Workshop",
    "footer.rights": "All rights reserved",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (stored === "uz" || stored === "ru" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  const t = (key: string) => translations[lang][key] ?? translations.en[key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
