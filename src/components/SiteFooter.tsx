import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function SiteFooter() {
  const { tr } = useI18n();
  return (
    <footer className="bg-[var(--charcoal)] text-white/60 px-6 lg:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="font-display italic text-xl text-white">Het Bommetje</div>
          <div className="font-display italic text-sm text-white/70 mt-1">Sigarenmagazijn 2</div>
          <p className="mt-4 text-[13px] leading-relaxed text-white/50">
            A historic Amsterdam cigar shop on the Reguliersdwarsstraat — curated tobacco, spirits and conversation since decades.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-white/80 mb-4">Quick Links</div>
          <ul className="list-none flex flex-col gap-2 m-0 p-0">
            <li><Link to="/" className="text-white/50 hover:text-[var(--sage-light)] no-underline text-[13px] transition-colors">{tr("nav_home")}</Link></li>
            <li><Link to="/gallery" className="text-white/50 hover:text-[var(--sage-light)] no-underline text-[13px] transition-colors">{tr("nav_gallery")}</Link></li>
            <li><Link to="/reviews" className="text-white/50 hover:text-[var(--sage-light)] no-underline text-[13px] transition-colors">{tr("nav_reviews")}</Link></li>
            <li><Link to="/blog" className="text-white/50 hover:text-[var(--sage-light)] no-underline text-[13px] transition-colors">{tr("nav_blog")}</Link></li>
            <li><Link to="/contact" className="text-white/50 hover:text-[var(--sage-light)] no-underline text-[13px] transition-colors">{tr("nav_contact")}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-white/80 mb-4">Contact</div>
          <ul className="list-none flex flex-col gap-3 m-0 p-0 text-[13px]">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--sage-light)]" />
              <a
                href="https://maps.google.com/?q=Reguliersdwarsstraat+14+Amsterdam"
                target="_blank"
                rel="noreferrer"
                className="text-white/50 hover:text-[var(--sage-light)] no-underline transition-colors"
              >
                Reguliersdwarsstraat 14<br />1017 BM Amsterdam, NL
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[var(--sage-light)]" />
              <a href="tel:+31687303081" className="text-white/50 hover:text-[var(--sage-light)] no-underline transition-colors">
                +31 6 87303081
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[var(--sage-light)]" />
              <a href="mailto:info@sigarenmagazijn2.nl" className="text-white/50 hover:text-[var(--sage-light)] no-underline transition-colors">
                info@sigarenmagazijn2.nl
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-white/80 mb-4">Opening Hours</div>
          <ul className="list-none flex flex-col gap-2 m-0 p-0 text-[13px]">
            <li className="flex gap-3">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[var(--sage-light)]" />
              <div className="text-white/50">
                <div>Daily</div>
                <div className="text-white/70">11:00 – 22:00</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-white/40">
        <div>© {new Date().getFullYear()} Sigarenmagazijn 2 · Amsterdam</div>
        <div className="font-display italic text-white/60">Het Bommetje</div>
      </div>
    </footer>
  );
}
