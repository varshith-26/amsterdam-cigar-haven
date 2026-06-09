import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import heroShop from "@/assets/store-interior.jpg";
import souvenirsImg from "@/assets/souvenirs.jpg";
import amsterdamImg from "@/assets/amsterdam.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import drinksImg from "@/assets/drinks-snacks.jpg";
import shopExterior from "@/assets/shop-exterior.jpg";
import cigarImg from "@/assets/cigar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Het Bommetje — Sigarenmagazijn 2 Amsterdam" },
      { name: "description", content: "Premium cigars, IQOS, vapes, lighters, Amsterdam souvenirs, cold drinks and snacks on Reguliersdwarsstraat 14. Open daily 11:00–22:00." },
      { property: "og:title", content: "Het Bommetje — Sigarenmagazijn 2 Amsterdam" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const tickerItems = [
  "Premium Cigars", "IQOS & Terea Sticks", "Disposable Vapes", "Amsterdam Souvenirs",
  "Cold Drinks & Energy", "Bic · Clipper · Zippo", "RAW & OCB Papers",
  "Delftware & Gifts", "Snacks & Sweets", "Greeting Cards",
];

function Home() {
  const { lang } = useI18n();
  const t = (nl: string, en: string) => (lang === "nl" ? nl : en);

  const products = [
    { img: drinksImg, cat: t("Drank", "Drinks"), icon: "🥤", title: t("Koude Dranken & Energy", "Cold Drinks & Energy"), desc: t("IJskoude Coca-Cola, Fanta, Red Bull, Monster, water, ijsthee en sappen — altijd uit de koeling.", "Ice-cold Coca-Cola, Fanta, Red Bull, Monster, water, iced tea and juices — always chilled from the cooler.") },
    { img: shopExterior, cat: "Vapes & IQOS", icon: "💨", title: "Vapes & IQOS", desc: t("Honderden disposable vapes in alle smaken. IQOS Iluma en alle Terea sticks altijd op voorraad.", "Hundreds of disposable vapes in every flavour. IQOS Iluma devices and all Terea stick variants always in stock.") },
    { img: accessoriesImg, cat: t("Accessoires", "Accessories"), icon: "🔥", title: t("Aanstekers & Accessoires", "Lighters & Accessories"), desc: t("Een hele wand Bic, Clipper en Zippo aanstekers. RAW & OCB vloei, filters, grinders en asbakken.", "A full wall of Bic, Clipper and Zippo lighters. RAW & OCB papers, filters, grinders and ashtrays.") },
    { img: souvenirsImg, cat: t("Souvenirs", "Souvenirs"), icon: "🏺", title: t("Amsterdam Souvenirs", "Amsterdam Souvenirs"), desc: t("Delfts blauw, klompen, magneten, miniatuur grachtenpandjes, sleutelhangers, ansichtkaarten en stroopwafels.", "Delftware, clogs, magnets, miniature canal houses, keyrings, postcards and stroopwafels — a piece of Amsterdam to take home.") },
    { img: cigarImg, cat: t("Tabak & Sigaren", "Tobacco & Cigars"), icon: "🍂", title: t("Tabak & Sigaren", "Tobacco & Cigars"), desc: t("Sigaretten, shag, pijptabak en een handgeselecteerde collectie premium sigaren.", "Cigarettes, rolling tobacco, pipe tobacco and a hand-selected range of premium cigars from renowned houses.") },
    { img: heroShop, cat: t("Snacks", "Snacks"), icon: "🍫", title: t("Snacks & Snoep", "Snacks & Sweets"), desc: t("Chips, chocolade, Haribo, stroopwafels en kauwgom — de perfecte brandstof voor uw Amsterdam-avontuur.", "Crisps, chocolate, Haribo, stroopwafels and chewing gum — the perfect fuel for your Amsterdam adventures.") },
  ];

  const reviews = [
    { stars: 5, text: t("\"Perfecte kleine winkel — had alles wat ik nodig had. Vriendelijk personeel, goede vape-selectie en de koude drankjes waren precies wat ik nodig had.\"", "\"Perfect little shop — had everything I needed for the evening. Friendly staff, great vape selection and the cold drinks were exactly what I needed.\""), author: "Sophie V.", loc: "Amsterdam, Netherlands" },
    { stars: 5, text: t("\"Binnengelopen voor een souvenir en vertrokken met Delftsblauw en de beste stroopwafels ooit. Personeel was ontzettend behulpzaam. Een echte parel naast Rembrandtplein.\"", "\"Stumbled in looking for a souvenir and left with Delft pottery and the best stroopwafels I've ever had. Staff were incredibly helpful. A true gem right next to Rembrandtplein.\""), author: "James T.", loc: "London, United Kingdom" },
    { stars: 4, text: t("\"Hadden de Terea sticks die ik nodig had toen ik ze nergens in de buurt kon vinden. Ook 's avonds laat open — dat redde mijn avond. Ik kom zeker terug.\"", "\"Had the Terea sticks I needed for my IQOS when I couldn't find them anywhere nearby. Open late too, which really saved the evening. Will absolutely be back.\""), author: "Marco B.", loc: "Milan, Italy" },
  ];

  const faqs = [
    { q: t("Wat zijn de openingstijden?", "What are your opening hours?"), a: t("We zijn dagelijks open van 11:00 tot 22:00 — inclusief weekenden en de meeste feestdagen. Geen afspraak nodig, gewoon binnenlopen.", "We are open daily from 11:00 to 22:00 — including weekends and most public holidays. No appointment needed, just walk in.") },
    { q: t("Verkopen jullie IQOS Terea sticks?", "Do you stock IQOS Terea sticks?"), a: t("Ja — alle populaire Terea smaken voor IQOS Iluma zijn op voorraad. We bestellen regelmatig bij, zodat uw favoriet altijd beschikbaar is.", "Yes — all popular Terea flavours for IQOS Iluma are kept in stock. We restock regularly so your favourite variant is always available.") },
    { q: t("Kan ik met pin of creditcard betalen?", "Can I pay by card or credit card?"), a: t("Pinnen kan altijd. Veel internationale creditcards worden ook geaccepteerd — ideaal voor onze internationale gasten.", "Debit card (pin) is always accepted. Most international credit cards are also welcome — ideal for our many international guests.") },
    { q: t("Verkopen jullie Amsterdam souvenirs?", "Do you sell Amsterdam souvenirs?"), a: t("Zeker. We voeren een ruim assortiment Delftsblauw, klompen, magneten, miniatuur grachtenpandjes, sleutelhangers, ansichtkaarten en wenskaarten.", "Absolutely. We carry a wide range of Delftware, wooden clogs, magnets, miniature canal houses, keyrings, postcards and greeting cards for every occasion.") },
    { q: t("Waar zit de winkel precies?", "Exactly where is the shop?"), a: t("Reguliersdwarsstraat 14, 1017 BM Amsterdam — één minuut lopen van Rembrandtplein. Tramlijn 4 en 14 stoppen bij Rembrandtplein.", "Reguliersdwarsstraat 14, 1017 BM Amsterdam — one minute on foot from Rembrandtplein. Tram lines 4 and 14 stop right at Rembrandtplein.") },
    { q: t("Verkopen jullie magic truffles?", "Do you sell magic truffles?"), a: t("Ja, we hebben een geselecteerde collectie magic truffles — een populaire curiositeit voor veel van onze internationale bezoekers.", "Yes, we stock a curated selection of magic truffles — a popular curiosity for many of our international visitors.") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen pt-[70px] grid lg:grid-cols-[52%_48%]">
        <div className="flex flex-col justify-center bg-[var(--warm)] px-6 py-12 md:px-12 lg:px-20 lg:py-20">
          <div className="pill fade-up">
            <span className="pill-dot"></span> Rembrandtplein · Amsterdam
          </div>
          <h1 className="hero-h1 mt-8 fade-up-d1">
            {t("Uw Amsterdamse", "Your Amsterdam")}<br />
            <span className="accent">{t("buurt", "neighbourhood")}</span><br />
            {t("winkel.", "shop.")}
          </h1>
          <p className="hero-sub mt-6 max-w-md text-[#555] text-[15px] leading-[1.85] font-light fade-up-d2">
            {t("Premium sigaren, IQOS, vapes, aanstekers, Amsterdam souvenirs, koude drankjes en snacks — alles onder één dak op Reguliersdwarsstraat 14. Dagelijks open 11:00–22:00.",
               "Premium cigars, IQOS, vapes, lighters, Amsterdam souvenirs, cold drinks and snacks — all under one roof on Reguliersdwarsstraat 14. Open daily 11:00–22:00.")}
          </p>
          <div className="mt-10 flex flex-wrap gap-5 items-center fade-up-d3">
            <Link to="/contact" className="btn-green">{t("Vind ons op de kaart", "Find Us on the Map")}</Link>
            <a href="tel:+31687303081" className="btn-outline-forest">📞 +31 6 87303081</a>
          </div>
          <div className="mt-14 pt-10 border-t border-border flex gap-10 flex-wrap">
            <div>
              <div className="font-display text-[2.2rem] font-bold leading-none text-[var(--forest)]">39</div>
              <div className="text-[11px] uppercase tracking-[0.08em] text-[#888] mt-1">{t("Jaar in Amsterdam", "Years in Amsterdam")}</div>
            </div>
            <div>
              <div className="font-display text-[2.2rem] font-bold leading-none text-[var(--forest)]">4.0★</div>
              <div className="text-[11px] uppercase tracking-[0.08em] text-[#888] mt-1">{t("Google Beoordeling", "Google Rating")}</div>
            </div>
            <div>
              <div className="font-display text-[2.2rem] font-bold leading-none text-[var(--forest)]">11–22</div>
              <div className="text-[11px] uppercase tracking-[0.08em] text-[#888] mt-1">{t("Dagelijks open", "Open Daily")}</div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden min-h-[400px] lg:min-h-0 group">
          <img src={heroShop} alt="Sigarenmagazijn 2 interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
          <div className="absolute bottom-10 left-8 bg-white rounded-[12px] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.15)] max-w-[220px]">
            <div className="text-[10px] tracking-[0.12em] uppercase text-[var(--sage)] font-medium mb-1">📍 {t("Centraal Amsterdam", "Central Amsterdam")}</div>
            <div className="font-display text-base text-charcoal leading-tight">Reguliersdwarsstraat 14<br />{t("1 min van Rembrandtplein", "1 min from Rembrandtplein")}</div>
          </div>
          <div className="absolute top-8 right-8 bg-[var(--forest)] text-white rounded-full w-[88px] h-[88px] flex flex-col items-center justify-center text-center">
            <div className="font-display text-[1.3rem] font-bold leading-none">{t("Sinds", "Since")}<br />1987</div>
            <div className="text-[8px] tracking-[0.12em] uppercase opacity-70 mt-1">Est.</div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="tick-item">{item} <span className="tick-sep">·</span></span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="grid lg:grid-cols-2 min-h-[640px]">
        <div className="relative overflow-hidden min-h-[380px]">
          <img src={shopExterior} alt="Shop interior" className="w-full h-full object-cover" />
          <img src={amsterdamImg} alt="Amsterdam street" className="absolute bottom-10 right-0 w-[48%] aspect-[4/3] object-cover border-[5px] border-white shadow-[0_8px_40px_rgba(0,0,0,0.18)]" />
        </div>
        <div className="px-6 py-16 md:px-12 lg:px-20 lg:py-24 flex flex-col justify-center">
          <div className="eyebrow">{t("Ons Verhaal", "Our Story")}</div>
          <h2 className="section-h mt-5">{t("Volle planken,", "Packed shelves,")}<br />{t("eerlijke prijzen,", "fair prices,")}<br /><em>{t("vriendelijke service.", "friendly faces.")}</em></h2>
          <p className="body-txt mt-6">
            {t("Een kleurrijke, goedgevulde winkel in hartje Amsterdam — de plek waar buurtbewoners, kantoormensen en bezoekers binnenstappen voor een koud blikje, een aansteker, een disposable vape, een doosje Terea, een ansichtkaart of een leuk souvenir.",
               "A colourful, well-stocked shop at the very heart of Amsterdam — the place where neighbourhood regulars, office workers and visitors step in for a cold can, a lighter, a disposable vape, a box of Terea, a postcard or a memorable souvenir.")}
          </p>
          <p className="body-txt mt-4">
            {t("Wat u niet op de schappen ziet, vragen we voor u na. Dat is de spirit van Het Bommetje: persoonlijke service, al 39 jaar.",
               "Whatever you can't find on the shelves, just ask — we'll look into it for you. That's the spirit of Het Bommetje: personal service, 39 years running.")}
          </p>
          <ul className="check-list">
            <li>{t("Honderden vapes & IQOS Iluma accessoires op voorraad", "Hundreds of vapes & IQOS Iluma accessories in stock")}</li>
            <li>{t("Geselecteerde collectie premium sigaren & tabak", "Curated selection of premium cigars & tobacco")}</li>
            <li>{t("Authentieke Amsterdam souvenirs & Delfts blauw", "Authentic Amsterdam souvenirs & Delft pottery")}</li>
            <li>{t("Altijd ijskoude dranken klaar voor onderweg", "Always ice-cold drinks ready to go")}</li>
            <li>{t("Pin en de meeste internationale creditcards geaccepteerd", "Pin and most international credit cards accepted")}</li>
          </ul>
          <Link to="/contact" className="btn-green w-fit">{t("Bekijk ons assortiment →", "Explore Our Products →")}</Link>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-[var(--warm)] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12 max-w-7xl mx-auto">
          <div>
            <div className="eyebrow">{t("Wat we bieden", "What We Offer")}</div>
            <h2 className="section-h mt-5">{t("Veel meer dan", "Much more than")}<br /><em>{t("u zou verwachten.", "you'd expect.")}</em></h2>
          </div>
          <p className="body-txt">
            {t("Van premium sigaren tot ijskoude verfrissingen — Het Bommetje heeft alles wat u nodig heeft voor een perfecte Amsterdamse dag of avond.",
               "From premium cigars to ice-cold refreshments — Het Bommetje stocks everything you need for a perfect Amsterdam day or evening.")}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((p, i) => (
            <article key={i} className="pcard">
              <div className="pcard-img">
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className="pcard-cat">{p.cat}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-2xl mb-2">{p.icon}</div>
                <h3 className="font-display text-[1.2rem] font-bold text-charcoal mb-2">{p.title}</h3>
                <p className="text-[13px] text-[#555] leading-[1.65] flex-1">{p.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--forest)] mt-4 hover:gap-2.5 transition-all">
                  {t("Bezoek winkel", "Visit store")} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PHOTO STRIP */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {[
          { img: amsterdamImg, label: "Amsterdam Canals" },
          { img: cigarImg, label: "Premium Cigars" },
          { img: shopExterior, label: "City of Amsterdam" },
          { img: heroShop, label: "Our Shop" },
        ].map((s, i) => (
          <div key={i} className="relative h-[200px] lg:h-[280px] overflow-hidden group cursor-pointer">
            <img src={s.img} alt={s.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(30,58,47,0.85)] to-transparent text-white px-4 pt-6 pb-3 text-[11px] tracking-[0.1em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* WHY */}
      <section className="px-6 py-20 md:px-12 lg:px-16 lg:py-24 border-t border-border">
        <div className="text-center max-w-3xl mx-auto">
          <div className="eyebrow eyebrow-center justify-center">{t("Waarom Het Bommetje", "Why Choose Us")}</div>
          <h2 className="section-h mt-5">{t("Amsterdams meest", "Amsterdam's most")}<br /><em>{t("handige stop.", "convenient stop.")}</em></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 max-w-7xl mx-auto">
          {[
            { icon: "📍", title: t("Toplocatie", "Prime Location"), txt: t("Eén minuut van Rembrandtplein. Loopafstand van Leidseplein, Rokin en de historische grachten.", "One minute from Rembrandtplein. Easily walkable from Leidseplein, Rokin and the historic canals.") },
            { icon: "🕙", title: t("Elke dag open", "Open Every Day"), txt: t("11:00 tot 22:00, zeven dagen per week — inclusief weekenden en de meeste feestdagen.", "11:00 to 22:00, seven days a week — including weekends and most public holidays.") },
            { icon: "💳", title: t("Alle betaalmethoden", "All Payments"), txt: t("Pin, debit en de meeste internationale creditcards geaccepteerd. Handig voor elke bezoeker.", "Pin, debit and most international credit cards accepted. Convenient for every visitor to Amsterdam.") },
            { icon: "🤝", title: t("Persoonlijke service", "Personal Service"), txt: t("39 jaar lokale ervaring. Niet op het schap te vinden? Vraag het — we vinden het voor u.", "39 years of local expertise. Can't find it on the shelf? Just ask — we'll find it for you.") },
          ].map((w, i) => (
            <div key={i} className="why-card">
              <div className="text-[2.2rem] mb-4">{w.icon}</div>
              <div className="font-display text-[1.1rem] font-bold text-charcoal mb-2">{w.title}</div>
              <p className="text-[13px] text-[#555] leading-[1.7]">{w.txt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AMSTERDAM */}
      <section id="amsterdam" className="grid lg:grid-cols-2">
        <div className="relative min-h-[280px] lg:min-h-[580px] overflow-hidden">
          <img src={amsterdamImg} alt="Amsterdam canal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,58,47,0.15)] to-transparent" />
        </div>
        <div className="bg-[var(--mint)] px-6 py-16 md:px-12 lg:px-16 lg:py-24 flex flex-col justify-center">
          <div className="eyebrow">{t("Onze Buurt", "Our Neighbourhood")}</div>
          <h2 className="section-h mt-5">{t("Stappen vanaf het", "Steps from the")}<br /><em>{t("hart van Amsterdam.", "heart of Amsterdam.")}</em></h2>
          <p className="body-txt mt-6">
            {t("Reguliersdwarsstraat 14 zit in een van de levendigste straten van Amsterdam — een korte wandeling van de grote pleinen, de grachten en de beste restaurants en bars.",
               "Reguliersdwarsstraat 14 sits in one of Amsterdam's most vibrant corridors — a short walk from the major squares, the historic canal belt and the city's best restaurants and bars.")}
          </p>
          <div className="flex flex-wrap gap-2 my-6">
            {["Rembrandtplein — 1 min","Leidseplein — 8 min","Rokin — 10 min","Nieuwmarkt — 12 min","Waterlooplein — 12 min","Centraal Station — 15 min"].map(c => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
          <div className="bg-white rounded-[12px] p-6 border-l-4 border-[var(--forest)] mt-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--sage)] font-medium mb-1">{t("Openingstijden", "Opening Hours")}</div>
            <div className="font-display text-[2rem] font-bold text-[var(--forest)]">11:00 – 22:00</div>
            <div className="text-[12px] text-[#888] mt-1">{t("Elke dag · Weekenden & feestdagen", "Every day · Weekends & most holidays included")}</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="px-6 py-20 md:px-12 lg:px-16 lg:py-28 bg-white">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12 max-w-7xl mx-auto">
          <div>
            <div className="eyebrow">{t("Wat mensen zeggen", "What People Say")}</div>
            <h2 className="section-h mt-5">{t("Geliefd bij locals", "Loved by locals")}<br /><em>{t("& bezoekers.", "& visitors alike.")}</em></h2>
          </div>
          <p className="body-txt">
            {t("Meer dan drie decennia tevreden klanten — van Amsterdamse vaste klanten tot internationale toeristen die ons voor het eerst ontdekken.",
               "Over three decades of happy customers — from Amsterdam regulars to international tourists discovering us for the first time.")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="rcard">
              <div className="rcard-stars">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
              <div className="rcard-quote">
                <p className="rcard-text">{r.text}</p>
              </div>
              <div className="mt-5 text-[12px] font-medium text-[var(--forest)] uppercase tracking-[0.06em]">{r.author}</div>
              <div className="text-[11px] text-[#888] mt-1">{r.loc}</div>
              <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-border">
                <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 29.9 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.2 16.5 19.3 14 24 14c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.4 6.3 14.7z"/><path fill="#FBBC05" d="M24 46c5.5 0 10.5-1.9 14.3-5l-6.6-5.6C29.9 37 27.1 38 24 38c-5.8 0-10.7-3.9-12.4-9.3l-7 5.4C7.8 41.8 15.4 46 24 46z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.6 2.8-2.2 5.1-4.4 6.7l6.6 5.6C42.1 37.3 45 31.1 45 24c0-1.3-.2-2.7-.5-4z"/></svg>
                <span className="text-[10px] text-[#888] tracking-wide">Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[var(--warm)] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-24 max-w-7xl mx-auto items-start">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="section-h mt-5">{t("Goed om", "Good to")}<br /><em>{t("te weten.", "know.")}</em></h2>
            <p className="body-txt mt-6">
              {t("Snelle antwoorden op de vragen die we het meest horen. Nog iets onduidelijk? Bel ons — we helpen graag.",
                 "Quick answers to the questions we hear most. Still wondering something? Give us a call — we're always happy to help.")}
            </p>
            <a href="tel:+31687303081" className="btn-green mt-8 w-fit">📞 {t("Bel ons nu", "Call Us Now")}</a>
          </div>
          <div>
            {faqs.map((f, i) => (
              <details key={i} className="border-b border-border group py-2">
                <summary className="flex justify-between items-center gap-4 cursor-pointer py-4 text-[15px] text-charcoal hover:text-[var(--forest)] list-none">
                  <span>{f.q}</span>
                  <span className="w-6 h-6 bg-[var(--mint)] group-open:bg-[var(--forest)] group-open:text-white rounded-full flex items-center justify-center text-sm text-[var(--forest)] transition-all group-open:rotate-45 shrink-0">+</span>
                </summary>
                <p className="text-[14px] text-[#555] leading-[1.8] pb-4 pr-10">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="grid lg:grid-cols-2">
        <div className="bg-[var(--forest)] text-white px-6 py-16 md:px-12 lg:px-16 lg:py-24">
          <div className="eyebrow" style={{ color: "var(--sage-light)" }}>{t("Bezoek ons", "Visit Us")}</div>
          <h2 className="section-h mt-5 text-white">{t("Kom Het", "Come find")}<br /><em style={{ color: "var(--mint-deep)" }}>{t("Bommetje vinden.", "Het Bommetje.")}</em></h2>
          <div className="mt-10 flex flex-col gap-6">
            {[
              { icon: "📍", label: t("Adres", "Address"), val: "Reguliersdwarsstraat 14\n1017 BM Amsterdam, Nederland" },
              { icon: "📞", label: t("Telefoon", "Phone"), val: "+31 6 87303081", link: "tel:+31687303081" },
              { icon: "🕙", label: t("Openingstijden", "Opening Hours"), val: t("Dagelijks 11:00 – 22:00\nInclusief weekenden & feestdagen", "Daily 11:00 – 22:00\nIncluding weekends & holidays") },
              { icon: "🚌", label: t("Openbaar vervoer", "Public Transport"), val: t("Tram 4 & 14 · halte Rembrandtplein\nMetro: Rokin (5 min lopen)", "Tram 4 & 14 · Rembrandtplein stop\nMetro: Rokin (5 min walk)") },
            ].map((d, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 min-w-10 bg-white/10 border border-white/15 rounded-lg flex items-center justify-center text-base">{d.icon}</div>
                <div>
                  <div className="text-[10px] tracking-[0.12em] uppercase text-white/45 mb-1">{d.label}</div>
                  <div className="text-[14px] text-white/85 leading-[1.6] whitespace-pre-line">
                    {d.link ? <a href={d.link} className="text-white/85 hover:text-[var(--mint-deep)] no-underline">{d.val}</a> : d.val}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a href="https://maps.google.com/?q=Reguliersdwarsstraat+14+Amsterdam" target="_blank" rel="noreferrer" className="btn-white mt-8 w-fit">
            {t("Routebeschrijving op Google Maps →", "Get Directions on Google Maps →")}
          </a>
        </div>
        <div className="relative min-h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.34606!2d4.89356!3d52.36607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609b6dd2d2a39%3A0x6f7c3b2aabb02e8!2sReguliersbreedstraat%2C%20Amsterdam!5e0!3m2!1sen!2snl!4v1680000000000!5m2!1sen!2snl"
            className="w-full h-full min-h-[420px] border-0 block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Het Bommetje location"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
