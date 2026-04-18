import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Ornament } from "@/components/Ornament";
import { ProductCard } from "@/components/ProductCard";
import { products, type Category } from "@/lib/products";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hunar Atelier" },
      {
        name: "description",
        content: "Browse our collection of handcrafted Uzbek miniatures, naqqoshlik panels, paintings and ornamental ceramics.",
      },
      { property: "og:title", content: "Gallery — Hunar Atelier" },
      {
        property: "og:description",
        content: "Handcrafted Uzbek artworks — miniatures, naqqoshlik, paintings and patterns.",
      },
    ],
  }),
  component: GalleryPage,
});

const filters: { id: "all" | Category; key: string }[] = [
  { id: "all", key: "gallery.filter.all" },
  { id: "miniature", key: "gallery.filter.miniature" },
  { id: "naqqoshlik", key: "gallery.filter.naqqoshlik" },
  { id: "rangtasvir", key: "gallery.filter.rangtasvir" },
  { id: "patterns", key: "gallery.filter.patterns" },
];

function GalleryPage() {
  const { t } = useI18n();
  const [active, setActive] = useState<"all" | Category>("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="bg-background">
      <section className="pattern-bg pt-20 pb-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Ornament />
          <h1 className="mt-6 font-display text-5xl md:text-6xl">{t("gallery.title")}</h1>
          <p className="mt-3 text-muted-foreground">{t("gallery.subtitle")}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`rounded-full px-5 py-2 text-sm tracking-wide transition-all ${
                  active === f.id
                    ? "bg-gradient-emerald text-primary-foreground shadow-soft"
                    : "border border-border/70 bg-background text-foreground/80 hover:border-gold/60 hover:text-primary"
                }`}
              >
                {t(f.key)}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
