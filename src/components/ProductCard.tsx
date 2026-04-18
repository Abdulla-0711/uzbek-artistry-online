import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import type { Product } from "@/lib/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { lang, t } = useI18n();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    >
      <Link
        to="/gallery/$id"
        params={{ id: product.id }}
        className="group block overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
          <img
            src={product.image}
            alt={product.title[lang]}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute right-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-widest text-primary backdrop-blur">
            {t(`gallery.filter.${product.category}`)}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 p-5">
          <div>
            <h3 className="font-display text-xl leading-tight text-foreground">
              {product.title[lang]}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              {t(`gallery.filter.${product.category}`)}
            </p>
          </div>
          <div className="text-right">
            <div className="font-display text-lg text-primary">${product.price}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
