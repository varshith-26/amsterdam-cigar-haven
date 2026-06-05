import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import amsterdamImg from "@/assets/amsterdam.jpg";
import cigarImg from "@/assets/cigar.jpg";
import accessoriesImg from "@/assets/accessories.jpg";

const posts = [
  {
    slug: "amsterdam-te-voet",
    img: amsterdamImg,
    date: "11 mei 2026",
    cat: { nl: "Stadsgids", en: "City guide" },
    title: { nl: "Amsterdam te voet — en altijd voorbereid op pad.", en: "Exploring Amsterdam on foot — always ready to go." },
    excerpt: {
      nl: "De stad lopend ontdekken is de mooiste manier om Amsterdam te beleven. Wij vertellen welke essentials u onderweg niet wilt missen — van een goede aansteker tot uw favoriete smaak.",
      en: "Exploring on foot is the best way to soak up Amsterdam. Here's what to keep in your pocket on the way — from a reliable lighter to your favourite flavour.",
    },
  },
  {
    slug: "perfecte-metgezel",
    img: cigarImg,
    date: "11 mei 2026",
    cat: { nl: "Sigaren", en: "Cigars" },
    title: { nl: "De perfecte metgezel voor een wandeling door het centrum.", en: "The perfect companion for a stroll through central Amsterdam." },
    excerpt: {
      nl: "Of u nu langs de grachten loopt of een terras opzoekt op het Rembrandtplein — een goede sigaar maakt het moment compleet. Onze selectie en aanbevelingen.",
      en: "Whether you're walking the canals or settling onto a terrace at Rembrandtplein, the right cigar completes the moment. Our picks and recommendations.",
    },
  },
  {
    slug: "iqos-iluma-amsterdam",
    img: accessoriesImg,
    date: "11 mei 2026",
    cat: { nl: "IQOS", en: "IQOS" },
    title: { nl: "IQOS Iluma sticks in hartje Amsterdam — altijd op voorraad.", en: "IQOS Iluma sticks in central Amsterdam — always in stock." },
    excerpt: {
      nl: "Bijna door uw favoriete tabak of Iluma sticks heen? Wij hebben u gedekt — middenin Amsterdam Centrum, zeven dagen per week tot 22:00.",
      en: "Running low on your favourite tobacco or Iluma sticks? We've got you — right in central Amsterdam, seven days a week until 22:00.",
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
