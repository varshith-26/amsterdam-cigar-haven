import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { posts } from "@/lib/blog-posts";

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
        <Link to="/blog/$slug" params={{ slug: featured.slug }} className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center group">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={featured.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{featured.cat[lang]} · {featured.date}</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">{featured.title[lang]}</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">{featured.excerpt[lang]}</p>
            <span className="mt-8 inline-flex items-center text-sm uppercase tracking-[0.2em] link-underline">
              {lang === "nl" ? "Lees verder" : "Read more"} →
            </span>
          </div>
        </Link>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32 border-t border-border pt-16">
        <div className="grid md:grid-cols-2 gap-12">
          {rest.map((p) => (
            <Link to="/blog/$slug" params={{ slug: p.slug }} key={p.slug} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img src={p.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-6">{p.cat[lang]} · {p.date}</div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl leading-snug">{p.title[lang]}</h3>
              <p className="mt-3 text-foreground/70">{p.excerpt[lang]}</p>
              <span className="mt-5 inline-flex items-center text-sm uppercase tracking-[0.2em] link-underline">
                {lang === "nl" ? "Lees verder" : "Read more"} →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
