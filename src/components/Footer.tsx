import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border/60 bg-parchment">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 32 32" className="text-primary" aria-hidden>
              <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M16 4l3 9 9 1-7 6 2 9-7-5-7 5 2-9-7-6 9-1 3-9z" fill="var(--gold)" />
            </svg>
            <span className="font-display text-lg">Hunar</span>
          </div>
          <p className="font-display text-sm italic text-muted-foreground">
            {t("footer.tagline")}
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hunar Atelier. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
