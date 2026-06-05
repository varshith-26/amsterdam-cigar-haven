import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import drinksImg from "@/assets/drinks-snacks.jpg";
import vapesImg from "@/assets/shop-exterior.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import souvenirsImg from "@/assets/souvenirs.jpg";

const posts = [
  {
    slug: "alles-onder-een-dak",
    img: vapesImg,
    date: "5 juni 2026",
    cat: { nl: "De winkel", en: "The shop" },
    title: { nl: "Honderden vapes, een hele wand aanstekers en alles ertussenin.", en: "Hundreds of vapes, a whole wall of lighters, and everything in between." },
    excerpt: {
      nl: "Van disposable vapes in elke smaak tot Bic, Clipper en Zippo aanstekers in alle kleuren — een rondleiding door de meest gevulde planken van Reguliersdwarsstraat 14.",
      en: "From disposable vapes in every flavour to Bic, Clipper and Zippo lighters in every colour — a tour of the most stocked shelves on Reguliersdwarsstraat 14.",
    },
  },
  {
    slug: "ijskoud-uit-de-koeling",
    img: drinksImg,
    date: "28 mei 2026",
    cat: { nl: "Frisdrank & Energy", en: "Drinks & Energy" },
    title: { nl: "IJskoud uit de koeling: Coca-Cola, Red Bull, Monster en meer.", en: "Ice-cold from the fridge: Coca-Cola, Red Bull, Monster and more." },
    excerpt: {
      nl: "Even snel een blikje pakken voor onderweg? Onze koeling staat vol met klassiekers en energy drinks — pinnen kan altijd, ook voor één blikje.",
      en: "Grabbing a cold can for the road? Our fridge is packed with classics and energy drinks — card payments welcome, even for a single can.",
    },
  },
  {
    slug: "souvenirs-amsterdam",
    img: souvenirsImg,
    date: "20 mei 2026",
    cat: { nl: "Souvenirs", en: "Souvenirs" },
    title: { nl: "Amsterdamse souvenirs zonder de toeristenprijs.", en: "Amsterdam souvenirs without the tourist mark-up." },
    excerpt: {
      nl: "Delftsblauwe borden, klompen, miniatuur grachtenpandjes, magneten en ansichtkaarten — een eerlijke prijs op een steenworp van Rembrandtplein.",
      en: "Delft blue plates, clogs, miniature canal houses, magnets and postcards — fair prices a stone's throw from Rembrandtplein.",
    },
  },
  {
    slug: "rookwaren-en-accessoires",
    img: accessoriesImg,
    date: "12 mei 2026",
    cat: { nl: "Rookwaren", en: "Smoking essentials" },
    title: { nl: "RAW, OCB, Clipper, Zippo — alles voor de roker.", en: "RAW, OCB, Clipper, Zippo — everything for the smoker." },
    excerpt: {
      nl: "Vloei, filters, grinders, asbakken en aanstekers in elke maat en kleur. Tot 22:00 's avonds, ook als u even iets vergeten bent.",
      en: "Papers, filters, grinders, ashtrays and lighters in every size and colour. Open until 22:00 — handy when you've forgotten something.",
    },
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Sigarenmagazijn 2 Amsterdam" },
      { name: "description", content: "Verhalen, gidsen en tips uit onze winkel in hartje Amsterdam — sigaren, tabak, IQOS en het beste van de stad." },
      { property: "og:title", content: "Blog — Sigarenmagazijn 2" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { tr, lang } = useI18n();
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3"><span className="gold-rule" /><span className="eyebrow">{tr("blog_eyebrow")}</span></div>
        <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">{tr("blog_title")}</h1>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16">
        <article className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center group">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={featured.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{featured.cat[lang]} · {featured.date}</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">{featured.title[lang]}</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">{featured.excerpt[lang]}</p>
            <button className="mt-8 inline-flex items-center text-sm uppercase tracking-[0.2em] link-underline">
              {lang === "nl" ? "Lees verder" : "Read more"} →
            </button>
          </div>
        </article>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32 border-t border-border pt-16">
        <div className="grid md:grid-cols-2 gap-12">
          {rest.map((p) => (
            <article key={p.slug} className="group">
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img src={p.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-6">{p.cat[lang]} · {p.date}</div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl leading-snug">{p.title[lang]}</h3>
              <p className="mt-3 text-foreground/70">{p.excerpt[lang]}</p>
              <button className="mt-5 inline-flex items-center text-sm uppercase tracking-[0.2em] link-underline">
                {lang === "nl" ? "Lees verder" : "Read more"} →
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
