import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import p0 from "@/assets/gallery/download.jpg.asset.json";
import p1 from "@/assets/gallery/download_1.jpg.asset.json";
import p2 from "@/assets/gallery/download_2.jpg.asset.json";
import p3 from "@/assets/gallery/download_3.jpg.asset.json";
import p4 from "@/assets/gallery/download_4.jpg.asset.json";
import p5 from "@/assets/gallery/download_5.jpg.asset.json";
import p6 from "@/assets/gallery/download_6.jpg.asset.json";
import p7 from "@/assets/gallery/download_7.jpg.asset.json";
import p8 from "@/assets/gallery/download_8.jpg.asset.json";
import sign from "@/assets/gallery/2026-05-07.jpg.asset.json";
import s11 from "@/assets/gallery/shop_11.jpg.asset.json";
import s12 from "@/assets/gallery/shop_12.jpg.asset.json";
import s13 from "@/assets/gallery/shop_13.jpg.asset.json";
import s14 from "@/assets/gallery/shop_14.jpg.asset.json";
import s15 from "@/assets/gallery/shop_15.jpg.asset.json";
import s16 from "@/assets/gallery/shop_16.jpg.asset.json";
import s17 from "@/assets/gallery/shop_17.jpg.asset.json";
import s18 from "@/assets/gallery/shop_18.jpg.asset.json";
import s19 from "@/assets/gallery/shop_19.jpg.asset.json";
import s20 from "@/assets/gallery/shop_20.jpg.asset.json";

import s23 from "@/assets/gallery/shop_23.jpg.asset.json";
import s24 from "@/assets/gallery/shop_24.jpg.asset.json";
import sa from "@/assets/gallery/shop_a.jpg.asset.json";
import sb from "@/assets/gallery/shop_b.jpg.asset.json";
import sc from "@/assets/gallery/shop_c.jpg.asset.json";
import sd from "@/assets/gallery/shop_d.jpg.asset.json";

const photos = [
  s11.url, s12.url, s20.url, s19.url, s18.url, s17.url, s16.url, s15.url, s14.url, s13.url,
  s23.url, s24.url, sa.url, sb.url, sc.url, sd.url,
  sign.url, p0.url, p1.url, p2.url, p3.url, p4.url, p5.url, p6.url, p7.url, p8.url,
];



export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galerij — Sigarenmagazijn 2 Amsterdam" },
      { name: "description", content: "Een blik in onze winkel aan de Reguliersdwarsstraat — kleurrijke vape-wand, gevulde koeling, aanstekers, souvenirs en de sfeer van hartje Amsterdam." },
      { property: "og:title", content: "Galerij — Sigarenmagazijn 2" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { tr, lang } = useI18n();
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3"><span className="gold-rule" /><span className="eyebrow">{tr("nav_gallery")}</span></div>
        <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">
          {lang === "nl" ? "Een blik binnen — en buiten — onze winkel." : "A look inside — and outside — the shop."}
        </h1>
        <p className="mt-6 max-w-xl text-foreground/70">
          {lang === "nl"
            ? "Sfeerbeelden van Sigarenmagazijn 2: kleurrijke vape-wanden, een gevulde koeling, honderden aanstekers, Amsterdamse souvenirs en het straatbeeld van de Reguliersdwarsstraat."
            : "A look at Sigarenmagazijn 2: colourful vape walls, a fully stocked fridge, hundreds of lighters, Amsterdam souvenirs and the Reguliersdwarsstraat outside our door."}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="relative block overflow-hidden bg-secondary group rounded-md"
            >
              <img
                src={src}
                alt={`Sigarenmagazijn 2 — foto ${i + 1}`}
                loading="lazy"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
