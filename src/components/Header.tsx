import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LangSwitcher } from "./LangSwitcher";

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary" aria-hidden>
            <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
            <path
              d="M16 4l3 9 9 1-7 6 2 9-7-5-7 5 2-9-7-6 9-1 3-9z"
              fill="var(--gold)"
              opacity="0.9"
            />
          </svg>
          <span className="font-display text-xl tracking-wide text-foreground">Hunar</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LangSwitcher />
          <Link
            to="/contact"
            className="rounded-full bg-gradient-emerald px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            {t("nav.order")}
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/80"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between">
              <LangSwitcher />
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-emerald px-5 py-2 text-sm font-medium text-primary-foreground"
              >
                {t("nav.order")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
