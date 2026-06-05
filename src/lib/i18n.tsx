import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "nl" | "en";

type Dict = Record<string, { nl: string; en: string }>;

export const t: Dict = {
  nav_home: { nl: "Home", en: "Home" },
  nav_gallery: { nl: "Galerij", en: "Gallery" },
  nav_reviews: { nl: "Reviews", en: "Reviews" },
  nav_blog: { nl: "Blog", en: "Blog" },
  nav_contact: { nl: "Contact", en: "Contact" },
  cta_visit: { nl: "Bezoek de winkel", en: "Visit the shop" },
  cta_call: { nl: "Bel ons", en: "Call us" },
  cta_directions: { nl: "Routebeschrijving", en: "Get directions" },

  hero_eyebrow: { nl: "Sinds jaar en dag in hartje Amsterdam", en: "A neighbourhood institution in central Amsterdam" },
  hero_title: { nl: "Sigaren, tabak en kleine luxes — verzorgd met aandacht.", en: "Cigars, tobacco and small luxuries — curated with care." },
  hero_sub: { nl: "Sigarenmagazijn 2 'Het Bommetje' aan de Reguliersdwarsstraat is dé tabakswinkel bij Rembrandtplein. Premium sigaren, IQOS, vapes, aanstekers, cadeaus en souvenirs — onder één dak.", en: "Sigarenmagazijn 2 'Het Bommetje' on Reguliersdwarsstraat is the trusted tobacconist near Rembrandtplein. Premium cigars, IQOS, vapes, lighters, gifts and souvenirs — all under one roof." },

  intro_eyebrow: { nl: "De winkel", en: "The shop" },
  intro_title: { nl: "Een klein huis met een grote selectie.", en: "A small house with a serious selection." },
  intro_body: { nl: "Op een steenworp van Rembrandtplein, Leidseplein en de grachten vind je een zorgvuldig samengesteld assortiment: premium sigaren uit Cuba en de Dominicaanse Republiek, fijne tabak, IQOS Iluma sticks, vapes, aanstekers, dranken en authentieke Amsterdamse cadeaus. Snel, vriendelijk en eerlijk — voor buurtbewoners én bezoekers.", en: "A stone's throw from Rembrandtplein, Leidseplein and the canals, you'll find a thoughtfully edited range: premium cigars from Cuba and the Dominican Republic, fine tobacco, IQOS Iluma sticks, vapes, lighters, drinks and genuine Amsterdam gifts. Fast, friendly and honest — for locals and visitors alike." },

  cats_eyebrow: { nl: "Onze categorieën", en: "Our categories" },
  cats_title: { nl: "Wat u bij ons vindt.", en: "What you'll find with us." },

  cat_cigars: { nl: "Premium Sigaren", en: "Premium Cigars" },
  cat_cigars_d: { nl: "Cuba, Dominicaanse Republiek en huisfavorieten.", en: "Cuban, Dominican and house favourites." },
  cat_tobacco: { nl: "Tabak & Sigaretten", en: "Tobacco & Cigarettes" },
  cat_tobacco_d: { nl: "Shag, pijp- en sigarettentabak van alle merken.", en: "Rolling, pipe and cigarette tobacco from all major brands." },
  cat_iqos: { nl: "IQOS Iluma", en: "IQOS Iluma" },
  cat_iqos_d: { nl: "Alle Terea-smaken, op voorraad en direct mee.", en: "All Terea flavours, in stock and ready to go." },
  cat_vape: { nl: "Vapes", en: "Vapes" },
  cat_vape_d: { nl: "Disposables en navullingen — bekende merken.", en: "Disposables and refills — established brands only." },
  cat_lighters: { nl: "Aanstekers", en: "Lighters" },
  cat_lighters_d: { nl: "Van Bic tot Zippo, klassiek en collectible.", en: "From Bic to Zippo, everyday and collectable." },
  cat_gifts: { nl: "Cadeaus & Souvenirs", en: "Gifts & Souvenirs" },
  cat_gifts_d: { nl: "Authentieke Amsterdamse mementos voor thuis of onderweg.", en: "Authentic Amsterdam mementos to take home." },

  hours_title: { nl: "Openingstijden", en: "Opening hours" },
  hours_daily: { nl: "Dagelijks", en: "Daily" },
  hours_value: { nl: "11:00 – 22:00", en: "11:00 – 22:00" },
  address_title: { nl: "Adres", en: "Address" },
  phone_title: { nl: "Telefoon", en: "Phone" },

  reviews_eyebrow: { nl: "Wat klanten zeggen", en: "What customers say" },
  reviews_title: { nl: "Vriendelijk, snel, eerlijk.", en: "Friendly, fast, honest." },
  reviews_sub: { nl: "Beoordelingen verzameld via Google.", en: "Reviews sourced from Google." },

  blog_eyebrow: { nl: "Verhalen & gidsen", en: "Stories & guides" },
  blog_title: { nl: "Vanuit de winkel.", en: "From the shop floor." },

  contact_eyebrow: { nl: "Bezoek ons", en: "Visit us" },
  contact_title: { nl: "Reguliersdwarsstraat 14, Amsterdam.", en: "Reguliersdwarsstraat 14, Amsterdam." },
  contact_sub: { nl: "Stap binnen, bel of stuur ons een bericht. We helpen u graag.", en: "Drop in, call, or send us a message. We're happy to help." },
  name: { nl: "Naam", en: "Name" },
  email: { nl: "E-mail", en: "Email" },
  message: { nl: "Bericht", en: "Message" },
  send: { nl: "Versturen", en: "Send message" },
  sent: { nl: "Bedankt! We nemen spoedig contact op.", en: "Thanks! We'll be in touch shortly." },

  footer_tag: { nl: "Sigarenmagazijn 2 — Het Bommetje. Sinds 1986 in hartje Amsterdam.", en: "Sigarenmagazijn 2 — Het Bommetje. Serving central Amsterdam since 1986." },
  footer_rights: { nl: "Alle rechten voorbehouden.", en: "All rights reserved." },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; tr: (k: keyof typeof t) => string };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("nl");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang | null)) || null;
    if (saved === "nl" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };
  const tr = (k: keyof typeof t) => t[k][lang];
  return <I18nCtx.Provider value={{ lang, setLang, tr }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const c = useContext(I18nCtx);
  if (!c) throw new Error("useI18n must be used inside I18nProvider");
  return c;
}
