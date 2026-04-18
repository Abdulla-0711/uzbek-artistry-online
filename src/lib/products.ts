import miniature from "@/assets/art-miniature.jpg";
import naqqoshlik from "@/assets/art-naqqoshlik.jpg";
import rangtasvir from "@/assets/art-rangtasvir.jpg";
import patterns from "@/assets/art-patterns.jpg";

export type Category = "miniature" | "naqqoshlik" | "rangtasvir" | "patterns";

export type Product = {
  id: string;
  category: Category;
  image: string;
  price: number;
  title: { uz: string; ru: string; en: string };
  description: { uz: string; ru: string; en: string };
};

export const products: Product[] = [
  {
    id: "court-of-amir",
    category: "miniature",
    image: miniature,
    price: 1200,
    title: {
      uz: "Amir saroyida qabul",
      ru: "Приём при дворе амира",
      en: "Audience at the Amir's Court",
    },
    description: {
      uz: "Asl o'zbek miniatyura uslubida ishlangan, oltin barg va tabiiy pigmentlar bilan bezatilgan asar.",
      ru: "Работа в классическом стиле узбекской миниатюры, украшенная сусальным золотом и натуральными пигментами.",
      en: "A classical Uzbek miniature finished with gold leaf and mineral pigments on aged parchment.",
    },
  },
  {
    id: "emerald-panel",
    category: "naqqoshlik",
    image: naqqoshlik,
    price: 880,
    title: {
      uz: "Zumrad panel",
      ru: "Изумрудная панель",
      en: "Emerald Panel",
    },
    description: {
      uz: "An'anaviy Buxoro naqqoshlik uslubida o'yib ishlangan va qo'lda bo'yalgan yog'och panel.",
      ru: "Деревянная панель, вырезанная и расписанная вручную в традиционном бухарском стиле наккоши.",
      en: "Hand-carved and hand-painted wooden panel in the traditional Bukhara naqqoshlik style.",
    },
  },
  {
    id: "registan-sunset",
    category: "rangtasvir",
    image: rangtasvir,
    price: 1450,
    title: {
      uz: "Registon shomi",
      ru: "Закат над Регистаном",
      en: "Registan at Sunset",
    },
    description: {
      uz: "Samarqand me'morchiligini tasvirlovchi yog'li bo'yoqlardagi rangtasvir asari.",
      ru: "Живопись маслом, изображающая архитектуру Самарканда в час заката.",
      en: "An oil painting of Samarkand's monuments bathed in the warmth of the setting sun.",
    },
  },
  {
    id: "rishtan-plate",
    category: "patterns",
    image: patterns,
    price: 320,
    title: {
      uz: "Rishton likopchasi",
      ru: "Риштанская тарелка",
      en: "Rishtan Plate",
    },
    description: {
      uz: "Kobalt va zumrad ranglarida qo'lda bo'yalgan an'anaviy Rishton sopol idishi.",
      ru: "Традиционная риштанская керамика, расписанная вручную в кобальтовых и изумрудных тонах.",
      en: "Traditional Rishtan ceramic plate hand-painted in cobalt and emerald glazes.",
    },
  },
  {
    id: "garden-of-poets",
    category: "miniature",
    image: miniature,
    price: 980,
    title: {
      uz: "Shoirlar bog'i",
      ru: "Сад поэтов",
      en: "Garden of the Poets",
    },
    description: {
      uz: "Klassik o'zbek adabiyotidan ilhom olib yaratilgan miniatyura.",
      ru: "Миниатюра, вдохновлённая классической узбекской поэзией.",
      en: "A miniature inspired by the classical poetry of the East.",
    },
  },
  {
    id: "gold-medallion",
    category: "naqqoshlik",
    image: naqqoshlik,
    price: 540,
    title: {
      uz: "Oltin medalyon",
      ru: "Золотой медальон",
      en: "Gold Medallion",
    },
    description: {
      uz: "Yulduzsimon naqsh va oltin yaltirashlar bilan bezatilgan dekorativ panel.",
      ru: "Декоративная панель со звездчатым орнаментом и золочением.",
      en: "Decorative panel with a star-shaped motif highlighted in gold.",
    },
  },
  {
    id: "bukhara-courtyard",
    category: "rangtasvir",
    image: rangtasvir,
    price: 1100,
    title: {
      uz: "Buxoro hovlisi",
      ru: "Бухарский дворик",
      en: "Bukhara Courtyard",
    },
    description: {
      uz: "Eski Buxoro hovlisini tasvirlovchi yog'li bo'yoq asari.",
      ru: "Картина маслом со старинным бухарским двориком.",
      en: "An oil painting capturing the quiet of an old Bukhara courtyard.",
    },
  },
  {
    id: "blue-bowl",
    category: "patterns",
    image: patterns,
    price: 260,
    title: {
      uz: "Ko'k kosa",
      ru: "Синяя пиала",
      en: "Blue Bowl",
    },
    description: {
      uz: "An'anaviy gulli naqshlar bilan bezatilgan qo'lda yasalgan kosa.",
      ru: "Пиала ручной работы с традиционным цветочным орнаментом.",
      en: "Hand-thrown bowl decorated with the traditional floral motif.",
    },
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
