import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useI18n, type Lang } from "@/lib/i18n";

export function SiteHeader() {
  const { lang, setLang, tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
  ] as const;

  const toggle = (l: Lang) => setLang(l);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 h-[70px] flex items-center justify-between px-6 lg:px-16 bg-white/95 backdrop-blur border-b border-border transition-shadow"
      style={{ boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,.08)" : "none" }}
    >
      <Link to="/" className="flex flex-col gap-[1px] no-underline">
        <span className="font-display text-[17px] font-bold leading-none text-[var(--forest)]">Het Bommetje</span>
        <span className="text-[10px] tracking-[0.18em] uppercase text-[var(--sage)]">Sigarenmagazijn 2 · Amsterdam</span>
      </Link>

      <nav className="hidden lg:flex items-center gap-10">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-[13px] tracking-[0.04em] text-[#555] hover:text-[var(--forest)] transition-colors"
            activeProps={{ className: "text-[13px] tracking-[0.04em] text-[var(--forest)] font-medium" }}
            activeOptions={{ exact: l.to === "/" }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="bg-[var(--forest)] hover:bg-[var(--sage)] text-white px-5 py-[9px] rounded text-[12px] tracking-[0.06em] uppercase transition-colors"
        >
          {tr("nav_contact")}
        </Link>
        <div className="flex items-center text-[11px] tracking-widest uppercase ml-2">
          <button onClick={() => toggle("nl")} className={`px-1.5 ${lang === "nl" ? "text-[var(--forest)] font-medium" : "text-[#888]"}`}>NL</button>
          <span className="text-border">/</span>
          <button onClick={() => toggle("en")} className={`px-1.5 ${lang === "en" ? "text-[var(--forest)] font-medium" : "text-[#888]"}`}>EN</button>
        </div>
      </nav>

      <button
        className="lg:hidden flex flex-col gap-[5px] p-1.5"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        <span className={`block h-[1.5px] w-[22px] bg-charcoal transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
        <span className={`block h-[1.5px] w-[22px] bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block h-[1.5px] w-[22px] bg-charcoal transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
      </button>

      {open && (
        <div className="lg:hidden absolute top-[70px] left-0 right-0 bg-white border-b border-border px-6 py-6 flex flex-col gap-3">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-base py-2 border-b border-border" activeProps={{ className: "text-base py-2 border-b border-border font-medium text-[var(--forest)]" }} activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-green mt-2">{tr("nav_contact")}</Link>
          <div className="pt-3 flex gap-3 text-xs uppercase tracking-widest">
            <button onClick={() => toggle("nl")} className={lang === "nl" ? "font-medium" : "text-[#888]"}>NL</button>
            <span>/</span>
            <button onClick={() => toggle("en")} className={lang === "en" ? "font-medium" : "text-[#888]"}>EN</button>
          </div>
        </div>
      )}
    </header>
  );
}
