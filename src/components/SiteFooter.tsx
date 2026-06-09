import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { tr } = useI18n();
  return (
    <footer className="bg-[var(--charcoal)] text-white/50 px-6 lg:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap">
      <div className="font-display italic text-base text-white/80">Het Bommetje · Sigarenmagazijn 2</div>
      <ul className="list-none flex gap-7 m-0 p-0 flex-wrap justify-center">
        <li><Link to="/" className="text-white/40 hover:text-[var(--sage-light)] no-underline text-[11px] tracking-[0.08em] uppercase transition-colors">{tr("nav_home")}</Link></li>
        <li><Link to="/gallery" className="text-white/40 hover:text-[var(--sage-light)] no-underline text-[11px] tracking-[0.08em] uppercase transition-colors">{tr("nav_gallery")}</Link></li>
        <li><Link to="/reviews" className="text-white/40 hover:text-[var(--sage-light)] no-underline text-[11px] tracking-[0.08em] uppercase transition-colors">{tr("nav_reviews")}</Link></li>
        <li><Link to="/blog" className="text-white/40 hover:text-[var(--sage-light)] no-underline text-[11px] tracking-[0.08em] uppercase transition-colors">{tr("nav_blog")}</Link></li>
        <li><Link to="/contact" className="text-white/40 hover:text-[var(--sage-light)] no-underline text-[11px] tracking-[0.08em] uppercase transition-colors">{tr("nav_contact")}</Link></li>
      </ul>
      <div className="text-[11px]">© {new Date().getFullYear()} Sigarenmagazijn 2 · Reguliersdwarsstraat · Amsterdam</div>
    </footer>
  );
}
