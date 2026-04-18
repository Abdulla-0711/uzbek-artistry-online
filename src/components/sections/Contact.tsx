import { motion } from "framer-motion";
import { Phone, Send, Instagram, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Ornament } from "@/components/Ornament";

export function Contact() {
  const { t } = useI18n();

  const channels = [
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+998 90 123 45 67",
      href: "tel:+998901234567",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@hunar_atelier",
      href: "https://t.me/hunar_atelier",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@hunar.atelier",
      href: "https://instagram.com/hunar.atelier",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: t("contact.locationValue"),
      href: "https://maps.google.com/?q=Samarkand,Uzbekistan",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-emerald py-24 text-primary-foreground">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, white 2px, transparent 2px), radial-gradient(circle at 75px 75px, white 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Ornament />
          <h2 className="mt-6 font-display text-4xl md:text-5xl">{t("contact.title")}</h2>
          <p className="mt-3 text-primary-foreground/80">{t("contact.subtitle")}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur transition-all hover:border-gold/60 hover:bg-primary-foreground/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-gold-foreground shadow-gold transition-transform group-hover:scale-110">
                <c.icon size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">
                  {c.label}
                </div>
                <div className="font-display text-xl">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
