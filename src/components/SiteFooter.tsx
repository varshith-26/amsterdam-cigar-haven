import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { tr, lang } = useI18n();
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">Sigarenmagazijn 2</div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">Het Bommetje</div>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">{tr("footer_tag")}</p>
        </div>
        <div>
          <div className="eyebrow mb-4">{tr("address_title")}</div>
          <p className="text-sm leading-relaxed">
            Reguliersdwarsstraat 14<br />1017 BM Amsterdam<br />Nederland
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">{tr("nav_contact")}</div>
          <ul className="text-sm space-y-2">
            <li><a href="tel:+31687303081" className="link-underline">+31 6 87303081</a></li>
            <li><Link to="/contact" className="link-underline">{tr("nav_contact")}</Link></li>
            <li><Link to="/gallery" className="link-underline">{tr("nav_gallery")}</Link></li>
            <li><Link to="/blog" className="link-underline">{tr("nav_blog")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Sigarenmagazijn 2. {tr("footer_rights")}</div>
          <div>{lang === "nl" ? "Amsterdam · Reguliersdwarsstraat" : "Amsterdam · Reguliersdwarsstraat"}</div>
        </div>
      </div>
    </footer>
  );
}
