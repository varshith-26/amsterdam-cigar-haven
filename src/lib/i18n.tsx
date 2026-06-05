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

  hero_eyebrow: { nl: "Uw buurtwinkel naast Rembrandtplein", en: "Your corner shop next to Rembrandtplein" },
  hero_title: { nl: "Alles wat u zoekt — onder één dak.", en: "Everything you need — under one roof." },
  hero_sub: { nl: "Sigarenmagazijn 2 'Het Bommetje' aan de Reguliersdwarsstraat is dé buurtwinkel van Amsterdam: koude frisdrank en energy drinks, snacks, honderden vapes en aanstekers, rookwaren, magic truffles, Amsterdamse souvenirs, wenskaarten en cadeautjes. Dagelijks open van 11:00 tot 22:00.", en: "Sigarenmagazijn 2 'Het Bommetje' on Reguliersdwarsstraat is Amsterdam's go-to corner shop: cold soft drinks and energy drinks, snacks, hundreds of vapes and lighters, smoking essentials, magic truffles, Amsterdam souvenirs, greeting cards and gifts. Open daily 11:00 to 22:00." },

  intro_eyebrow: { nl: "De winkel", en: "The shop" },
  intro_title: { nl: "Volgepakte planken, eerlijke prijzen, vriendelijke service.", en: "Packed shelves, fair prices, friendly service." },
  intro_body: { nl: "Een kleurrijke, volgestouwde winkel in hartje Amsterdam — de plek waar buurtbewoners, kantoormedewerkers en bezoekers binnenlopen voor een koud blikje, een aansteker, een disposable vape, een doos Terea, een ansichtkaart of een leuk souvenir. Wat u niet ziet staan vragen we voor u na.", en: "A vibrant, fully-stocked shop in central Amsterdam — where locals, office workers and visitors drop in for a cold can, a lighter, a disposable vape, a pack of Terea, a postcard or a fun souvenir. If you don't see it, just ask — chances are we have it." },

  feature_eyebrow: { nl: "Souvenirs & cadeaus", en: "Souvenirs & gifts" },
  feature_title: { nl: "Een stukje Amsterdam om mee naar huis te nemen.", en: "A piece of Amsterdam to take home." },
  feature_body: { nl: "Klassieke Delftsblauwe borden, klompen, magneten, miniatuur grachtenpandjes, sleutelhangers, stroopwafels, ansichtkaarten en wenskaarten voor elke gelegenheid. Loop binnen en laat u verrassen.", en: "Classic Delft blue plates, wooden clogs, magnets, miniature canal houses, keychains, stroopwafels, postcards and greeting cards for every occasion. Step in and let yourself be surprised." },
  feature_link: { nl: "Bekijk de galerij", en: "View the gallery" },


  cats_eyebrow: { nl: "Ons assortiment", en: "Our range" },
  cats_title: { nl: "Veel meer dan u verwacht.", en: "Much more than you'd expect." },

  cat_cigars: { nl: "Tabak & Sigaren", en: "Tobacco & Cigars" },
  cat_cigars_d: { nl: "Sigaretten, shag, pijptabak en een vaste selectie sigaren.", en: "Cigarettes, rolling tobacco, pipe tobacco and a steady cigar selection." },
  cat_iqos: { nl: "Vapes & IQOS", en: "Vapes & IQOS" },
  cat_iqos_d: { nl: "Honderden disposable vapes in alle smaken, IQOS Iluma en Terea sticks.", en: "Hundreds of disposable vapes in every flavour, IQOS Iluma and Terea sticks." },
  cat_access: { nl: "Aanstekers & Rookaccessoires", en: "Lighters & Smoking Accessories" },
  cat_access_d: { nl: "Een hele wand Bic, Clipper en Zippo aanstekers, RAW & OCB vloei, filters, grinders en asbakken.", en: "A full wall of Bic, Clipper and Zippo lighters, RAW & OCB papers, filters, grinders and ashtrays." },
  cat_drinks: { nl: "Frisdrank & Energy", en: "Soft Drinks & Energy" },
  cat_drinks_d: { nl: "Koude Coca-Cola, Fanta, Red Bull, Monster, water, ijsthee en sappen — altijd ijskoud uit de koeling.", en: "Cold Coca-Cola, Fanta, Red Bull, Monster, water, iced tea and juices — always ice-cold from the fridge." },
  cat_snacks: { nl: "Snacks & Snoep", en: "Snacks & Sweets" },
  cat_snacks_d: { nl: "Chips, chocolade, Haribo, stroopwafels en kauwgom voor onderweg.", en: "Crisps, chocolate, Haribo, stroopwafels and chewing gum for on the go." },
  cat_truffles: { nl: "Magic Truffles & Smartshop", en: "Magic Truffles & Smartshop" },
  cat_truffles_d: { nl: "Legale magic truffles en smartshop-producten — vraag het personeel voor advies.", en: "Legal magic truffles and smartshop products — ask the staff for guidance." },
  cat_gifts: { nl: "Cadeaus & Wenskaarten", en: "Gifts & Greeting Cards" },
  cat_gifts_d: { nl: "Kleine cadeautjes, verjaardags-, felicitatie- en blanco kaarten.", en: "Small gifts and birthday, congratulations and blank greeting cards." },
  cat_cards: { nl: "Wenskaarten", en: "Greeting Cards" },
  cat_cards_d: { nl: "Verjaardag, felicitatie, beterschap en blanco kaarten.", en: "Birthday, congratulations, get well and blank cards." },
  cat_souvenirs: { nl: "Amsterdam Souvenirs", en: "Amsterdam Souvenirs" },
  cat_souvenirs_d: { nl: "Delftsblauw, klompen, magneten, sleutelhangers, ansichtkaarten en miniatuur grachtenpandjes.", en: "Delft blue, clogs, magnets, keychains, postcards and miniature canal houses." },
  cat_convenience: { nl: "Gemaksproducten", en: "Convenience Items" },
  cat_convenience_d: { nl: "Batterijen, opladers, paraplu's, pleisters en meer.", en: "Batteries, chargers, umbrellas, plasters and more." },
  cat_travel: { nl: "Reis & Gemak", en: "Travel & Convenience" },
  cat_travel_d: { nl: "Reisadapters, opladers, batterijen, paraplu's, pleisters en stadsplattegronden.", en: "Travel adapters, chargers, batteries, umbrellas, plasters and city maps." },

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
