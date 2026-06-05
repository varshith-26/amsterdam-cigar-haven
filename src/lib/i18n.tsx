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

  hero_eyebrow: { nl: "Uw buurtwinkel in hartje Amsterdam", en: "Your neighbourhood shop in central Amsterdam" },
  hero_title: { nl: "Tabak, gemak en kleine cadeaus — alles onder één dak.", en: "Tobacco, convenience and gifts — all under one roof." },
  hero_sub: { nl: "Sigarenmagazijn 2 'Het Bommetje' aan de Reguliersdwarsstraat is dé buurtwinkel naast Rembrandtplein. Sigaren, sigaretten, IQOS, vapes, frisdrank, snacks, souvenirs en wenskaarten — dagelijks geopend van 11:00 tot 22:00.", en: "Sigarenmagazijn 2 'Het Bommetje' on Reguliersdwarsstraat is the trusted corner shop next to Rembrandtplein. Cigars, cigarettes, IQOS, vapes, cold drinks, snacks, souvenirs and greeting cards — open daily from 11:00 to 22:00." },

  intro_eyebrow: { nl: "De winkel", en: "The shop" },
  intro_title: { nl: "Een buurtwinkel met een verrassend brede selectie.", en: "A neighbourhood shop with a surprisingly broad selection." },
  intro_body: { nl: "Op een steenworp van Rembrandtplein, Leidseplein en de grachten vindt u alles voor onderweg én voor thuis. Van premium sigaren en IQOS Terea tot koude blikjes, snacks, reisbenodigdheden, Amsterdamse souvenirs, wenskaarten en cadeauartikelen. Snel, vriendelijk en eerlijk — voor buurtbewoners, kantoormedewerkers én bezoekers van de stad.", en: "A stone's throw from Rembrandtplein, Leidseplein and the canals, you'll find everything for on the go and at home. From premium cigars and IQOS Terea to cold drinks, snacks, travel essentials, Amsterdam souvenirs, greeting cards and gifts. Fast, friendly and honest — for locals, office workers and visitors alike." },

  cats_eyebrow: { nl: "Ons assortiment", en: "Our range" },
  cats_title: { nl: "Veel meer dan alleen tabak.", en: "Much more than just tobacco." },

  cat_cigars: { nl: "Tabak & Sigaren", en: "Tobacco & Cigars" },
  cat_cigars_d: { nl: "Premium sigaren, sigaretten, shag en pijptabak.", en: "Premium cigars, cigarettes, rolling and pipe tobacco." },
  cat_iqos: { nl: "IQOS & Vape Producten", en: "IQOS & Vape Products" },
  cat_iqos_d: { nl: "IQOS Iluma, Terea sticks, disposables en navullingen.", en: "IQOS Iluma, Terea sticks, disposables and refills." },
  cat_access: { nl: "Rookaccessoires", en: "Smoking Accessories" },
  cat_access_d: { nl: "Aanstekers van Bic tot Zippo, asbakken, vloei en filters.", en: "Lighters from Bic to Zippo, ashtrays, papers and filters." },
  cat_drinks: { nl: "Frisdranken & Snacks", en: "Drinks & Snacks" },
  cat_drinks_d: { nl: "Koude blikjes, water, koffie to-go, chips en chocolade.", en: "Cold cans, water, coffee to go, chips and chocolate." },
  cat_gifts: { nl: "Cadeauartikelen", en: "Gifts" },
  cat_gifts_d: { nl: "Kleine attenties en cadeaus voor elke gelegenheid.", en: "Small gestures and gifts for every occasion." },
  cat_cards: { nl: "Wenskaarten", en: "Greeting Cards" },
  cat_cards_d: { nl: "Verjaardag, felicitatie, beterschap en blanco kaarten.", en: "Birthday, congratulations, get well and blank cards." },
  cat_souvenirs: { nl: "Souvenirs Amsterdam", en: "Amsterdam Souvenirs" },
  cat_souvenirs_d: { nl: "Magneten, sleutelhangers, ansichtkaarten en typisch Hollands.", en: "Magnets, keychains, postcards and classic Dutch keepsakes." },
  cat_convenience: { nl: "Gemaksproducten", en: "Convenience Items" },
  cat_convenience_d: { nl: "Batterijen, opladers, paraplu's, pleisters en meer.", en: "Batteries, chargers, umbrellas, plasters and more." },
  cat_travel: { nl: "Toeristische Benodigdheden", en: "Tourist Essentials" },
  cat_travel_d: { nl: "OV-kaarten, reisadapters, kaarten van de stad en gidsjes.", en: "Transit cards, travel adapters, city maps and guides." },

  tourist_eyebrow: { nl: "Voor bezoekers", en: "For visitors" },
  tourist_title: { nl: "Alles wat u nodig heeft tijdens uw verblijf.", en: "Everything you need during your stay." },
  tourist_body: { nl: "Vlakbij de grote pleinen, hotels en grachten. Loop binnen voor een koud drankje, een reisadapter, een Amsterdam-souvenir of gewoon een vriendelijke wegwijzer.", en: "Steps from the main squares, hotels and canals. Drop in for a cold drink, a travel adapter, an Amsterdam souvenir — or just friendly directions." },

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

  faq_eyebrow: { nl: "Veelgestelde vragen", en: "Frequently asked" },
  faq_title: { nl: "Goed om te weten.", en: "Good to know." },
  faq_q1: { nl: "Wat zijn de openingstijden?", en: "What are your opening hours?" },
  faq_a1: { nl: "Wij zijn dagelijks geopend van 11:00 tot 22:00, ook in het weekend en op de meeste feestdagen.", en: "We are open daily from 11:00 to 22:00, including weekends and most public holidays." },
  faq_q2: { nl: "Verkopen jullie IQOS Terea sticks?", en: "Do you sell IQOS Terea sticks?" },
  faq_a2: { nl: "Ja, alle populaire Terea-smaken voor IQOS Iluma zijn op voorraad.", en: "Yes, all popular Terea flavours for IQOS Iluma are in stock." },
  faq_q3: { nl: "Kan ik met pin en creditcard betalen?", en: "Can I pay by card and credit card?" },
  faq_a3: { nl: "Pinnen kan altijd. Veel internationale creditcards worden geaccepteerd.", en: "Debit card is always accepted. Most international credit cards are accepted too." },
  faq_q4: { nl: "Verkopen jullie souvenirs en wenskaarten?", en: "Do you sell souvenirs and greeting cards?" },
  faq_a4: { nl: "Zeker. We voeren een ruim assortiment Amsterdamse souvenirs, ansichtkaarten en wenskaarten voor elke gelegenheid.", en: "Absolutely. We carry a wide range of Amsterdam souvenirs, postcards and greeting cards for every occasion." },

  footer_tag: { nl: "Sigarenmagazijn 2 — Het Bommetje. Uw buurtwinkel in hartje Amsterdam.", en: "Sigarenmagazijn 2 — Het Bommetje. Your neighbourhood shop in central Amsterdam." },
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
