import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useI18n, type Lang } from "@/lib/i18n";

export function SiteHeader() {
  const { lang, setLang, tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  const links = [
    { to: "/", label: tr("nav_home") },
    { to: "/gallery", label: tr("nav_gallery") },
    { to: "/reviews", label: tr("nav_reviews") },
    { to: "/blog", label: tr("nav_blog") },
    { to: "/contact", label: tr("nav_contact") },
  ] as const;

  const toggle = (l: Lang) => setLang(l);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white border-b border-border ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-xl md:text-2xl tracking-tight">Sigarenmagazijn 2</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Het Bommetje</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm link-underline"
              activeProps={{ className: "text-sm link-underline font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center text-xs tracking-widest uppercase">
            <button
              onClick={() => toggle("nl")}
              className={`px-2 py-1 transition-colors ${lang === "nl" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Nederlands"
            >
              NL
            </button>
            <span className="text-border">/</span>
            <button
              onClick={() => toggle("en")}
              className={`px-2 py-1 transition-colors ${lang === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="English"
            >
              EN
            </button>
          </div>
          <button
            className="md:hidden inline-flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-lg" activeProps={{ className: "text-lg font-medium" }} activeOptions={{ exact: l.to === "/" }}>
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex gap-3 text-xs uppercase tracking-widest">
              <button onClick={() => toggle("nl")} className={lang === "nl" ? "" : "text-muted-foreground"}>NL</button>
              <span className="text-border">/</span>
              <button onClick={() => toggle("en")} className={lang === "en" ? "" : "text-muted-foreground"}>EN</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
