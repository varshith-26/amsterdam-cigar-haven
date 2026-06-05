import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import heroShop from "@/assets/store-interior.jpg";
import souvenirsImg from "@/assets/souvenirs.jpg";
import amsterdamImg from "@/assets/amsterdam.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import drinksImg from "@/assets/drinks-snacks.jpg";
import shopExterior from "@/assets/shop-exterior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sigarenmagazijn 2 — Buurtwinkel & souvenirs in Amsterdam" },
      { name: "description", content: "Buurtwinkel aan de Reguliersdwarsstraat 14, naast Rembrandtplein. Frisdrank, snacks, souvenirs, wenskaarten, cadeaus en reisbenodigdheden in hartje Amsterdam." },
      { property: "og:title", content: "Sigarenmagazijn 2 — Het Bommetje Amsterdam" },
      { property: "og:description", content: "Uw dagelijkse winkel in hartje Amsterdam — souvenirs, snacks, cadeaus en gemak." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { tr } = useI18n();

  const cats = [
    { k: "cat_drinks", d: "cat_drinks_d", img: drinksImg },
    { k: "cat_iqos", d: "cat_iqos_d", img: shopExterior },
    { k: "cat_access", d: "cat_access_d", img: accessoriesImg },
    { k: "cat_souvenirs", d: "cat_souvenirs_d", img: souvenirsImg },
    { k: "cat_snacks", d: "cat_snacks_d", img: drinksImg },
    { k: "cat_cigars", d: "cat_cigars_d", img: heroShop },
    { k: "cat_truffles", d: "cat_truffles_d", img: shopExterior },
    { k: "cat_gifts", d: "cat_gifts_d", img: souvenirsImg },
    { k: "cat_travel", d: "cat_travel_d", img: accessoriesImg },
  ] as const;

  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroShop}
          alt="Interieur van Sigarenmagazijn 2 in Amsterdam"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-10 flex flex-col justify-end pb-20 md:pb-28 text-white">
          <div className="max-w-3xl">
            <div className="fade-up flex items-center gap-3">
              <span className="gold-rule" />
              <span className="eyebrow !text-white/80">{tr("hero_eyebrow")}</span>
            </div>
            <h1 className="fade-up-d1 mt-6 font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[1.02] tracking-tight">
              {tr("hero_title")}
            </h1>
            <p className="fade-up-d2 mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
              {tr("hero_sub")}
            </p>
            <div className="fade-up-d3 mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center px-7 py-4 bg-white text-black text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-gold)] transition-colors">
                {tr("cta_visit")}
              </Link>
              <a href="tel:+31687303081" className="inline-flex items-center px-7 py-4 border border-white/40 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors">
                {tr("cta_call")} · +31 6 87303081
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 lg:right-10 hidden md:flex items-center gap-3 text-white/70 text-xs uppercase tracking-[0.25em]">
          <span>Reguliersdwarsstraat 14</span>
          <span className="h-px w-8 bg-white/40" />
          <span>Amsterdam</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="gold-rule" />
            <span className="eyebrow">{tr("intro_eyebrow")}</span>
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">
            {tr("intro_title")}
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-foreground/80">{tr("intro_body")}</p>
          <div className="mt-10 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <div className="font-display text-3xl">39</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Jaar ervaring</div>
            </div>
            <div>
              <div className="font-display text-3xl">11–22</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Open dagelijks</div>
            </div>
            <div>
              <div className="font-display text-3xl">4.0★</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SPLIT */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={souvenirsImg} alt="Amsterdam souvenirs en wenskaarten" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="gold-rule" />
              <span className="eyebrow">{tr("feature_eyebrow")}</span>
            </div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">{tr("feature_title")}</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              {tr("feature_body")}
            </p>
            <div className="mt-8">
              <Link to="/gallery" className="inline-flex items-center text-sm uppercase tracking-[0.2em] link-underline">
                {tr("feature_link")} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3"><span className="gold-rule" /><span className="eyebrow">{tr("cats_eyebrow")}</span></div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] max-w-xl">{tr("cats_title")}</h2>
          </div>
          <Link to="/contact" className="text-sm uppercase tracking-[0.2em] link-underline">{tr("cta_visit")} →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {cats.map((c) => (
            <div key={c.k} className="group relative bg-background p-8 md:p-10 h-72 flex flex-col justify-between overflow-hidden">
              <img
                src={c.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-700"
              />
              <div className="relative">
                <div className="font-display text-2xl md:text-3xl">{tr(c.k as keyof typeof import("@/lib/i18n").t)}</div>
                <p className="mt-3 text-sm text-muted-foreground max-w-xs">{tr(c.d as keyof typeof import("@/lib/i18n").t)}</p>
              </div>
              <div className="relative flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">In winkel</span>
                <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AMSTERDAM */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={amsterdamImg} alt="Amsterdam bij avond" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-10 flex flex-col justify-center text-white">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3"><span className="gold-rule" /><span className="eyebrow !text-white/80">Amsterdam Centrum</span></div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.05]">Op loopafstand van Rembrandtplein, Leidseplein en de grachten.</h2>
            <p className="mt-6 text-white/80 max-w-lg">Reguliersdwarsstraat 14 — een minuut van Rembrandtplein, vlakbij Rokin, Nieuwmarkt en Waterlooplein.</p>
            <div className="mt-8">
              <a
                href="https://maps.google.com/?q=Reguliersdwarsstraat+14+Amsterdam"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-7 py-4 bg-white text-black text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-gold)] transition-colors"
              >
                {tr("cta_directions")} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOURS + CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-3 gap-12">
        <div>
          <div className="eyebrow">{tr("hours_title")}</div>
          <div className="mt-4 font-display text-3xl">{tr("hours_daily")}</div>
          <div className="mt-1 text-2xl text-muted-foreground">{tr("hours_value")}</div>
        </div>
        <div>
          <div className="eyebrow">{tr("address_title")}</div>
          <div className="mt-4 font-display text-3xl leading-tight">Reguliersdwarsstraat 14</div>
          <div className="mt-1 text-muted-foreground">1017 BM Amsterdam</div>
        </div>
        <div>
          <div className="eyebrow">{tr("phone_title")}</div>
          <a href="tel:+31687303081" className="mt-4 block font-display text-3xl link-underline">+31 6 87303081</a>
          <div className="mt-1 text-muted-foreground">{tr("cta_call")}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3"><span className="gold-rule" /><span className="eyebrow">{tr("faq_eyebrow")}</span></div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05]">{tr("faq_title")}</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 divide-y divide-border border-t border-b border-border">
            {[1, 2, 3, 4].map((i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                  <span className="font-display text-xl md:text-2xl">{tr(`faq_q${i}` as keyof typeof import("@/lib/i18n").t)}</span>
                  <span className="text-2xl text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-foreground/75 leading-relaxed max-w-xl">{tr(`faq_a${i}` as keyof typeof import("@/lib/i18n").t)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
