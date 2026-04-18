import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Ornament } from "@/components/Ornament";
import { getProduct } from "@/lib/products";

export const Route = createFileRoute("/gallery/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) return { meta: [{ title: "Artwork — Hunar Atelier" }] };
    return {
      meta: [
        { title: `${product.title.en} — Hunar Atelier` },
        { name: "description", content: product.description.en },
        { property: "og:title", content: `${product.title.en} — Hunar Atelier` },
        { property: "og:description", content: product.description.en },
        { property: "og:image", content: product.image },
        { name: "twitter:image", content: product.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Artwork not found</h1>
      <Link to="/gallery" className="mt-6 inline-block text-primary underline">
        Back to gallery
      </Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { t, lang } = useI18n();

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-12">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} /> {t("product.back")}
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-parchment shadow-elegant">
            <img
              src={product.image}
              alt={product.title[lang]}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">
              {t(`gallery.filter.${product.category}`)}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              {product.title[lang]}
            </h1>
            <div className="my-6 flex justify-start">
              <Ornament className="!justify-start" />
            </div>

            <div className="space-y-5">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
                  {t("product.details")}
                </h2>
                <p className="mt-2 text-lg leading-relaxed text-foreground/90">
                  {product.description[lang]}
                </p>
              </div>

              {/* All three languages always visible underneath */}
              <details className="rounded-xl border border-border/60 bg-card p-4">
                <summary className="cursor-pointer text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  UZ · RU · EN
                </summary>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold">O'zbek</div>
                    <p className="mt-1">{product.description.uz}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold">Русский</div>
                    <p className="mt-1">{product.description.ru}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold">English</div>
                    <p className="mt-1">{product.description.en}</p>
                  </div>
                </div>
              </details>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border/60 pt-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {t("product.price")}
                </div>
                <div className="font-display text-4xl text-primary">${product.price}</div>
              </div>
              <a
                href={`https://t.me/hunar_atelier?text=Order:%20${encodeURIComponent(product.title.en)}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium tracking-wide text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5"
              >
                <Send size={16} />
                {t("product.order")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
