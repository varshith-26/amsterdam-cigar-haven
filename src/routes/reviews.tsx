import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

const reviews = [
  { name: "chills t", rating: 5, nl: "Goed werk, uitstekende vooruitgang.", en: "Good job, excellent progress." },
  { name: "Zubair J", rating: 5, nl: "Hele fijne winkel — mensen zijn vriendelijk en behulpzaam.", en: "Very nice shop, people are very kind and helpful." },
  { name: "Max", rating: 5, nl: "Top gozer. Altijd alles op voorraad wat ik nodig heb.", en: "Top guy. Always has what I need in stock." },
  { name: "Anna V.", rating: 5, nl: "Mijn vaste adres in het centrum voor een koud blikje en mijn favoriete vape.", en: "My go-to in the centre for a cold can and my favourite vape." },
  { name: "Daniel R.", rating: 4, nl: "Goede selectie disposable vapes en IQOS Terea, altijd op voorraad.", en: "Great selection of disposable vapes and IQOS Terea, always in stock." },
  { name: "Sophie K.", rating: 5, nl: "Snel, vriendelijk en open tot 22:00. Aanrader voor toeristen die nog een souvenir zoeken.", en: "Fast, friendly and open until 22:00. Recommended for visitors looking for a last-minute souvenir." },
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Sigarenmagazijn 2 Amsterdam" },
      { name: "description", content: "Wat onze klanten zeggen over Sigarenmagazijn 2 in Amsterdam — vriendelijke service, eerlijke prijzen, altijd op voorraad." },
      { property: "og:title", content: "Reviews — Sigarenmagazijn 2" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "text-[var(--color-gold)]" : "text-border"}>★</span>
      ))}
    </div>
  );
}

function ReviewsPage() {
  const { tr, lang } = useI18n();
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3"><span className="gold-rule" /><span className="eyebrow">{tr("reviews_eyebrow")}</span></div>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02]">{tr("reviews_title")}</h1>
          <p className="mt-6 text-foreground/70 max-w-xl">{tr("reviews_sub")}</p>
        </div>
        <div className="md:col-span-5 md:text-right">
          <div className="font-display text-7xl md:text-8xl leading-none">4.0</div>
          <div className="mt-2 flex md:justify-end"><Stars n={4} /></div>
          <div className="mt-2 text-sm text-muted-foreground">22+ Google reviews</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {reviews.map((r, i) => (
            <article key={i} className="bg-background p-8 md:p-10 flex flex-col gap-6 min-h-[280px]">
              <Stars n={r.rating} />
              <p className="font-display text-2xl leading-snug flex-1">"{lang === "nl" ? r.nl : r.en}"</p>
              <div>
                <div className="text-sm font-medium">{r.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Google review</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
