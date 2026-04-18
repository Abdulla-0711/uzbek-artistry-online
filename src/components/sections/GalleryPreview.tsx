import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Ornament } from "@/components/Ornament";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export function GalleryPreview() {
  const { t } = useI18n();
  const featured = products.slice(0, 4);

  return (
    <section className="bg-parchment py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Ornament />
          <h2 className="mt-6 font-display text-4xl md:text-5xl">{t("gallery.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("gallery.subtitle")}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t("gallery.viewAll")}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
