import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Ornament } from "@/components/Ornament";
import processPigments from "@/assets/process-pigments.jpg";
import processPainting from "@/assets/process-painting.jpg";

export function About() {
  const { t } = useI18n();

  const stats = [
    { value: "40+", label: t("about.stat1") },
    { value: "1200+", label: t("about.stat2") },
    { value: "30+", label: t("about.stat3") },
  ];

  return (
    <section className="pattern-bg py-24" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">
              {t("about.eyebrow")}
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              {t("about.title")}
            </h2>
            <div className="my-6 flex justify-start">
              <Ornament className="!justify-start" />
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("about.body")}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl text-primary md:text-4xl">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={processPigments}
                alt="Mixing natural pigments"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-12 overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={processPainting}
                alt="Hand-painting ornament detail"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-6 py-2 text-xs font-medium uppercase tracking-widest text-gold-foreground shadow-gold">
              Samarkand · Bukhara
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
