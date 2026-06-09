import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">404</div>
        <h1 className="mt-4 font-display text-5xl">Pagina niet gevonden</h1>
        <p className="mt-3 text-sm text-muted-foreground">Deze pagina bestaat niet of is verplaatst.</p>
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide uppercase hover:bg-foreground/85 transition-colors">
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Er ging iets mis</h1>
        <p className="mt-2 text-sm text-muted-foreground">Probeer het opnieuw of ga terug naar de homepage.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm uppercase tracking-wide"
          >
            Probeer opnieuw
          </button>
          <a href="/" className="px-5 py-2.5 border border-border text-sm uppercase tracking-wide">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sigarenmagazijn 2 — Tabakswinkel & Sigarenspecialist Amsterdam" },
      { name: "description", content: "Premium sigaren, tabak, IQOS, vapes, aanstekers, cadeaus en souvenirs in hartje Amsterdam — Reguliersdwarsstraat 14, naast Rembrandtplein." },
      { name: "author", content: "Sigarenmagazijn 2" },
      { property: "og:title", content: "Sigarenmagazijn 2 — Tabakswinkel & Sigarenspecialist Amsterdam" },
      { property: "og:description", content: "Premium sigaren, tabak, IQOS, vapes, aanstekers, cadeaus en souvenirs in hartje Amsterdam — Reguliersdwarsstraat 14, naast Rembrandtplein." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sigarenmagazijn 2" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sigarenmagazijn 2 — Tabakswinkel & Sigarenspecialist Amsterdam" },
      { name: "twitter:description", content: "Premium sigaren, tabak, IQOS, vapes, aanstekers, cadeaus en souvenirs in hartje Amsterdam — Reguliersdwarsstraat 14, naast Rembrandtplein." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eeca9049-b838-4a99-87f1-2e0c7f678d4e/id-preview-162224eb--49a194d6-a647-49d9-ad0b-b43687e9275d.lovable.app-1780653086438.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eeca9049-b838-4a99-87f1-2e0c7f678d4e/id-preview-162224eb--49a194d6-a647-49d9-ad0b-b43687e9275d.lovable.app-1780653086438.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TobaccoShop",
        name: "Sigarenmagazijn 2 Het Bommetje",
        image: "https://lh3.googleusercontent.com/QB9WUxUWsRmjVGOxekiAP1wXjNkQr7h_VVbA8VC3Ys0nnf-JC3DAWJDz4BLe3AeLv9dOdF6z4TMKhcFm_Q=s0",
        telephone: "+31687303081",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Reguliersdwarsstraat 14",
          addressLocality: "Amsterdam",
          postalCode: "1017 BM",
          addressCountry: "NL",
        },
        openingHours: "Mo-Su 11:00-22:00",
        priceRange: "€€",
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
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
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    let observer: IntersectionObserver | null = null;
    const attach = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
      const targets = document.querySelectorAll(
        "main section, main .reveal, main article > *, main .grid > *"
      );
      targets.forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          el.classList.add("reveal");
          observer!.observe(el);
        }
      });
    };
    attach();
    const unsub = router.subscribe("onResolved", () => {
      setTimeout(attach, 50);
    });
    return () => { observer?.disconnect(); unsub(); };
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <SiteHeader />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <SiteFooter />
      </I18nProvider>
    </QueryClientProvider>
  );
}

