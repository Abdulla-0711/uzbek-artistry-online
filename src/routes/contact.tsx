import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hunar Atelier" },
      {
        name: "description",
        content: "Reach Hunar Atelier in Samarkand for commissions, orders and consultations.",
      },
      { property: "og:title", content: "Contact — Hunar Atelier" },
      {
        property: "og:description",
        content: "Get in touch for commissions and orders. Telegram, Instagram, phone.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background">
      <Contact />
    </div>
  );
}
