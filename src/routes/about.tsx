import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Ornament } from "@/components/Ornament";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hunar Atelier" },
      {
        name: "description",
        content: "Discover the heritage and craftsmanship behind our Uzbek art workshop in Samarkand.",
      },
      { property: "og:title", content: "About — Hunar Atelier" },
      {
        property: "og:description",
        content: "Heritage, craftsmanship and the masters behind Hunar Atelier.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="bg-background">
      <section className="pattern-bg pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Ornament />
          <h1 className="mt-6 font-display text-5xl md:text-6xl">{t("about.title")}</h1>
        </div>
      </section>
      <About />
      <Features />
    </div>
  );
}
