import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { Ornament } from "@/components/Ornament";

type Testimonial = {
  name: string;
  role: Record<Lang, string>;
  text: Record<Lang, string>;
};

const testimonials: Testimonial[] = [
  {
    name: "Aziza Karimova",
    role: { uz: "Kollektsioner, Toshkent", ru: "Коллекционер, Ташкент", en: "Collector, Tashkent" },
    text: {
      uz: "Asarning har bir tafsiloti shu qadar nozik ishlangan-ki, ko'z uzib bo'lmaydi. Haqiqiy san'at!",
      ru: "Каждая деталь произведения проработана так тонко, что глаз не оторвать. Настоящее искусство!",
      en: "Every detail is rendered with such delicacy you simply cannot look away. True artistry.",
    },
  },
  {
    name: "Henrik Müller",
    role: { uz: "Galereya, Berlin", ru: "Галерея, Берлин", en: "Gallery owner, Berlin" },
    text: {
      uz: "Buyurtma qilingan asar belgilangan vaqtda yetib keldi va kutilganidan ham ajoyib chiqdi.",
      ru: "Заказ доставлен вовремя и превзошёл все ожидания. Качество исключительное.",
      en: "The commissioned piece arrived on time and exceeded every expectation. Exceptional quality.",
    },
  },
  {
    name: "Sabina Rakhimova",
    role: { uz: "Dizayner, Dubay", ru: "Дизайнер, Дубай", en: "Designer, Dubai" },
    text: {
      uz: "Mijozlarim uchun interyerga qo'ygan naqqoshlik panellari uy joyiga jon bag'ishladi.",
      ru: "Панели наккоши, которые я разместила в интерьере клиентов, оживили пространство.",
      en: "The naqqoshlik panels I placed in client interiors transformed the entire room.",
    },
  },
];

export function Testimonials() {
  const { t, lang } = useI18n();

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Ornament />
          <h2 className="mt-6 font-display text-4xl md:text-5xl">{t("testimonials.title")}</h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((tst, i) => (
            <motion.figure
              key={tst.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border/60 bg-card p-8 shadow-soft"
            >
              <Quote className="absolute right-6 top-6 text-gold/40" size={32} />
              <blockquote className="font-display text-lg leading-relaxed text-foreground">
                "{tst.text[lang]}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <div className="font-medium text-foreground">{tst.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {tst.role[lang]}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
