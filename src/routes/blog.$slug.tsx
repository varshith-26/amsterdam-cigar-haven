import { createFileRoute, Link, notFound } from "@tanstack/react-router";
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
      <h1 className="font-display text-4xl">Artikel niet gevonden</h1>
      <Link to="/blog" className="mt-6 inline-block link-underline text-sm uppercase tracking-widest">← Terug naar blog</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-40 pb-24 mx-auto max-w-3xl px-6 text-center">
      <h1 className="font-display text-3xl">Er ging iets mis</h1>
      <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const { lang } = useI18n();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <section className="pt-32 md:pt-40 pb-10 mx-auto max-w-3xl px-6">
          <Link to="/blog" className="text-xs uppercase tracking-[0.25em] text-muted-foreground link-underline">
            ← {lang === "nl" ? "Blog" : "Blog"}
          </Link>
          <div className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {post.cat[lang]} · {post.date}
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05]">{post.title[lang]}</h1>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">{post.excerpt[lang]}</p>
        </section>

        <section className="mx-auto max-w-5xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
            <img src={post.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
            {post.body[lang].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      </article>

      {others.length > 0 && (
        <section className="bg-secondary border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
            <div className="flex items-center gap-3 mb-10">
              <span className="gold-rule" />
              <span className="eyebrow">{lang === "nl" ? "Meer artikelen" : "More articles"}</span>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {others.map((p) => (
                <Link to="/blog/$slug" params={{ slug: p.slug }} key={p.slug} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-background">
                    <img src={p.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.cat[lang]}</div>
                  <h3 className="mt-2 font-display text-xl leading-snug">{p.title[lang]}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
