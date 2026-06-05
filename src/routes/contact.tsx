import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sigarenmagazijn 2 Amsterdam" },
      { name: "description", content: "Bezoek Sigarenmagazijn 2 aan de Reguliersdwarsstraat 14 in Amsterdam. Open dagelijks 11:00–22:00. Bel +31 6 87303081." },
      { property: "og:title", content: "Contact — Sigarenmagazijn 2" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { tr, lang } = useI18n();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3"><span className="gold-rule" /><span className="eyebrow">{tr("contact_eyebrow")}</span></div>
        <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">{tr("contact_title")}</h1>
        <p className="mt-6 max-w-xl text-foreground/70">{tr("contact_sub")}</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20 grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Info */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <div className="eyebrow">{tr("address_title")}</div>
            <p className="mt-3 font-display text-2xl leading-snug">Reguliersdwarsstraat 14<br />1017 BM Amsterdam<br />Nederland</p>
            <a
              href="https://maps.google.com/?q=Reguliersdwarsstraat+14+Amsterdam"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm uppercase tracking-[0.2em] link-underline"
            >
              {tr("cta_directions")} →
            </a>
          </div>
          <div>
            <div className="eyebrow">{tr("phone_title")}</div>
            <a href="tel:+31687303081" className="mt-3 block font-display text-2xl link-underline">+31 6 87303081</a>
          </div>
          <div>
            <div className="eyebrow">{tr("hours_title")}</div>
            <div className="mt-3 font-display text-2xl">{tr("hours_daily")}</div>
            <div className="text-muted-foreground">{tr("hours_value")}</div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="border border-border p-8 md:p-12 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="block">
                <span className="eyebrow">{tr("name")}</span>
                <input required type="text" className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base" />
              </label>
              <label className="block">
                <span className="eyebrow">{tr("email")}</span>
                <input required type="email" className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base" />
              </label>
            </div>
            <label className="block">
              <span className="eyebrow">{tr("message")}</span>
              <textarea required rows={5} className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base resize-none" />
            </label>
            <div className="flex items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="inline-flex items-center px-7 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-gold)] hover:text-black transition-colors"
              >
                {tr("send")}
              </button>
              {sent && <span className="text-sm text-muted-foreground">{tr("sent")}</span>}
            </div>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border">
        <div className="aspect-[16/7] w-full bg-secondary">
          <iframe
            title={lang === "nl" ? "Kaart" : "Map"}
            src="https://www.google.com/maps?q=Reguliersdwarsstraat+14+Amsterdam&output=embed"
            className="w-full h-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
