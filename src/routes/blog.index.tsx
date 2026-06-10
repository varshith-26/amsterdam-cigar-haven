import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { posts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Sigarenmagazijn 2 Amsterdam" },
      { name: "description", content: "Stories, guides and tips from our shop in the heart of Amsterdam — cigars, tobacco, IQOS and the best of the city." },
      { property: "og:title", content: "Blog — Sigarenmagazijn 2" },
      { property: "og:description", content: "Stories, guides and tips from our shop in the heart of Amsterdam." },
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
      {/* HERO */}
      <section className="relative pt-32 md:pt-44 pb-16 bg-[var(--forest)] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 70%, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px, 60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">{tr("blog_eyebrow") || "Journal"}</span>
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">
            {lang === "nl" ? "Verhalen uit hartje Amsterdam." : "Stories from the heart of Amsterdam."}
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-lg">
            {lang === "nl"
              ? "Gidsen, tips en kleine momenten uit onze winkel aan de Reguliersdwarsstraat."
              : "Guides, tips and little moments from our shop on Reguliersdwarsstraat."}
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          preload="intent"
          className="grid md:grid-cols-12 gap-8 lg:gap-14 items-center group"
        >
          <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
            <img
              src={featured.img}
              alt={featured.title[lang]}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <span className="absolute top-5 left-5 inline-flex items-center bg-white/95 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] rounded-full">
              {lang === "nl" ? "Uitgelicht" : "Featured"}
            </span>
          </div>
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--sage)] font-medium">
              {featured.cat[lang]} · {featured.date}
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-[1.08] group-hover:text-[var(--sage)] transition-colors duration-500">
              {featured.title[lang]}
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">{featured.excerpt[lang]}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[var(--forest)] font-medium">
              {lang === "nl" ? "Lees verder" : "Read more"}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </Link>
      </section>

      {/* GRID */}
      <section className="bg-[var(--warm)] border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--gold)]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--sage)]">{lang === "nl" ? "Meer lezen" : "More to read"}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                {lang === "nl" ? "Recente artikelen" : "Recent articles"}
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((p) => (
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                preload="intent"
                key={p.slug}
                className="group block bg-white rounded-lg overflow-hidden border border-border/60 hover:border-[var(--sage)] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title[lang]}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--sage)] font-medium">
                    {p.cat[lang]} · {p.date}
                  </div>
                  <h3 className="mt-3 font-display text-xl md:text-2xl leading-snug group-hover:text-[var(--sage)] transition-colors">
                    {p.title[lang]}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/70 line-clamp-3">{p.excerpt[lang]}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--forest)] font-medium">
                    {lang === "nl" ? "Lees verder" : "Read more"}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}