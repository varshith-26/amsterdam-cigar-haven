import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { getPost, posts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Blog — Sigarenmagazijn 2" }] };
    return {
      meta: [
        { title: `${post.title.nl} — Sigarenmagazijn 2` },
        { name: "description", content: post.excerpt.nl },
        { property: "og:title", content: post.title.nl },
        { property: "og:description", content: post.excerpt.nl },
        { property: "og:image", content: post.img },
        { property: "og:url", content: `/blog/${post.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 pb-24 mx-auto max-w-3xl px-6 text-center">
      <h1 className="font-display text-4xl">Article not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-sm uppercase tracking-widest text-[var(--sage)] underline">
        ← Back to blog
      </Link>
    </div>
  ),
  errorComponent: BlogPostError,
  component: BlogPostPage,
});

function BlogPostError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="pt-40 pb-24 mx-auto max-w-3xl px-6 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-6 px-5 py-2 bg-[var(--forest)] text-white text-xs uppercase tracking-widest"
      >
        Retry
      </button>
    </div>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const { lang } = useI18n();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-white">
      {/* HERO IMAGE */}
      <section className="relative h-[55vh] md:h-[70vh] min-h-[420px] overflow-hidden bg-[var(--forest)]">
        <img src={post.img} alt={post.title[lang]} className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative h-full mx-auto max-w-5xl px-6 lg:px-10 flex flex-col justify-end pb-12 md:pb-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/80 hover:text-[var(--gold)] transition-colors w-fit mb-6"
          >
            ← {lang === "nl" ? "Alle artikelen" : "All articles"}
          </Link>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] mb-4">
            <span className="h-px w-8 bg-[var(--gold)]" />
            {post.cat[lang]} · {post.date}
          </div>
          <h1 className="font-display text-3xl md:text-6xl text-white leading-[1.05] max-w-4xl">
            {post.title[lang]}
          </h1>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="font-display text-xl md:text-2xl text-foreground/85 leading-relaxed border-l-2 border-[var(--gold)] pl-6 italic">
          {post.excerpt[lang]}
        </p>

        <div className="mt-12 space-y-6 text-foreground/85 leading-[1.85] text-[17px]">
          {post.body[lang].map((p: string, i: number) => (
            <p key={i} className={p.startsWith("📍") ? "font-medium text-[var(--forest)]" : ""}>
              {p}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-10 bg-[var(--mint)] rounded-lg text-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--sage)]">
            {lang === "nl" ? "Bezoek ons" : "Visit us"}
          </div>
          <h3 className="mt-3 font-display text-2xl md:text-3xl text-[var(--forest)]">
            Sigarenmagazijn 2 — Het Bommetje
          </h3>
          <p className="mt-2 text-sm text-foreground/70">Reguliersdwarsstraat 14, Amsterdam Centrum</p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-[var(--forest)] text-white px-7 py-3 text-xs uppercase tracking-[0.25em] hover:bg-[var(--sage)] transition-colors"
          >
            {lang === "nl" ? "Plan je bezoek" : "Plan your visit"}
          </Link>
        </div>
      </section>

      {/* MORE ARTICLES */}
      {others.length > 0 && (
        <section className="bg-[var(--warm)] border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--sage)]">
              {lang === "nl" ? "Meer artikelen" : "Related Articles"}
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {others.map((p) => (
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  preload="intent"
                  key={p.slug}
                  className="group block bg-white rounded-lg overflow-hidden border border-border/60 hover:border-[var(--sage)] hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title[lang]}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--sage)]">
                      {p.cat[lang]} · {p.date}
                    </div>
                    <h3 className="mt-2 font-display text-lg leading-snug group-hover:text-[var(--sage)] transition-colors">
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
      )}
    </article>
  );
}
