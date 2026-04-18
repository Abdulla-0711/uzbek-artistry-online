import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-emerald px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hunar Atelier — Traditional Uzbek Art Workshop" },
      {
        name: "description",
        content:
          "Hand-painted Uzbek miniatures, naqqoshlik, fine art and ornamental patterns crafted by master artisans in Samarkand.",
      },
      { name: "author", content: "Hunar Atelier" },
      { property: "og:title", content: "Hunar Atelier — Traditional Uzbek Art Workshop" },
      {
        property: "og:description",
        content: "Premium handcrafted Uzbek art — miniatures, naqqoshlik, paintings and patterns.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hunar Atelier — Traditional Uzbek Art Workshop" },
      { name: "description", content: "Uzbek Artistry Online showcases traditional Uzbek art, including miniature painting, fine art, and ornamental designs." },
      { property: "og:description", content: "Uzbek Artistry Online showcases traditional Uzbek art, including miniature painting, fine art, and ornamental designs." },
      { name: "twitter:description", content: "Uzbek Artistry Online showcases traditional Uzbek art, including miniature painting, fine art, and ornamental designs." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/63795044-b6eb-427f-a0cc-cc45bead7b66/id-preview-7bea767f--24b808c1-b353-4540-bed5-634867809558.lovable.app-1776489643916.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/63795044-b6eb-427f-a0cc-cc45bead7b66/id-preview-7bea767f--24b808c1-b353-4540-bed5-634867809558.lovable.app-1776489643916.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
