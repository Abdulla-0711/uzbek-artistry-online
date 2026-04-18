import { motion } from "framer-motion";
import { Hand, Sparkles, Landmark, PenLine } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Ornament } from "@/components/Ornament";

export function Features() {
  const { t } = useI18n();

  const items = [
    { icon: Hand, title: t("features.handmade.title"), body: t("features.handmade.body") },
    { icon: Sparkles, title: t("features.materials.title"), body: t("features.materials.body") },
    { icon: Landmark, title: t("features.heritage.title"), body: t("features.heritage.body") },
    { icon: PenLine, title: t("features.custom.title"), body: t("features.custom.body") },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Ornament />
          <h2 className="mt-6 font-display text-4xl md:text-5xl">{t("features.title")}</h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border/60 bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-emerald text-primary-foreground shadow-soft transition-transform group-hover:scale-110">
                <item.icon size={20} />
              </div>
              <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
