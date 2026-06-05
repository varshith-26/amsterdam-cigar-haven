import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import heroShop from "@/assets/hero-shop.jpg";
import storeInterior from "@/assets/store-interior.jpg";
import drinks from "@/assets/drinks-snacks.jpg";
import souvenirs from "@/assets/souvenirs.jpg";
import accessories from "@/assets/accessories.jpg";
import vapesWall from "@/assets/shop-exterior.jpg";

const photos = [
  storeInterior,
  vapesWall,
  drinks,
  accessories,
  souvenirs,
  heroShop,
  "https://lh3.googleusercontent.com/QB9WUxUWsRmjVGOxekiAP1wXjNkQr7h_VVbA8VC3Ys0nnf-JC3DAWJDz4BLe3AeLv9dOdF6z4TMKhcFm_Q=s1200",
  "https://lh3.googleusercontent.com/IW-ru8sRi9hxNTCVvLzeOeFPL6xcSdJ5joGy7OsiRghhxSLpWPHXPRw5AV_9ivFF3jdzEpnuNeaQEQXszA=s1200",
  "https://lh3.googleusercontent.com/fbEDcyCxCChc41rTTMTsOxN58RJP5dwv3IwK_L-PBSNYHBTl7vFrrVM5Em8wQo4ppvO1NNpqg6NNwTAycw=s1200",
  "https://lh3.googleusercontent.com/2hMPvt6HbmE0qftbk9jVT1SABSidcWJSSZZAo3PzQeuNDmJRj3nELkzd4op2PQE3LH9W5GJSohvQpnPECQ=s1200",
  "https://lh3.googleusercontent.com/oAbtWqZXGMBnX5GfHmNE2PwPHo1jjj437EDxLTXzHaf6RQxXD-RHO57ccKYIzY91elfWoUFxhNqG-uG-=s1200",
  "https://lh3.googleusercontent.com/wTQxMv38aeRrs3MRAwm65D1k0VQQggLRbI3keMvBki6haiz_3hqGcPNG9KbVcUTQgLoTZzUFuLUh3SMG=s1200",
];

const aspects = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[4/5]", "aspect-square", "aspect-[3/4]"];

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
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {photos.map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              className={`relative block overflow-hidden ${aspects[i % aspects.length]} break-inside-avoid bg-secondary group`}
            >
              <img
                src={src}
                alt={`Sigarenmagazijn 2 — foto ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
