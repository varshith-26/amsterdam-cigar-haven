import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

const photos = [
  "https://lh3.googleusercontent.com/QB9WUxUWsRmjVGOxekiAP1wXjNkQr7h_VVbA8VC3Ys0nnf-JC3DAWJDz4BLe3AeLv9dOdF6z4TMKhcFm_Q=s1200",
  "https://lh3.googleusercontent.com/IW-ru8sRi9hxNTCVvLzeOeFPL6xcSdJ5joGy7OsiRghhxSLpWPHXPRw5AV_9ivFF3jdzEpnuNeaQEQXszA=s1200",
  "https://lh3.googleusercontent.com/fbEDcyCxCChc41rTTMTsOxN58RJP5dwv3IwK_L-PBSNYHBTl7vFrrVM5Em8wQo4ppvO1NNpqg6NNwTAycw=s1200",
  "https://lh3.googleusercontent.com/2hMPvt6HbmE0qftbk9jVT1SABSidcWJSSZZAo3PzQeuNDmJRj3nELkzd4op2PQE3LH9W5GJSohvQpnPECQ=s1200",
  "https://lh3.googleusercontent.com/SoxJ7PScLP1UFz48rnV-ghUOLGGDL-2EoRmItGF-Pz8XNoFUa89K0OGRSpd9z2hnT7ZRWe3wuXZJRAKx=s1200",
  "https://lh3.googleusercontent.com/oAbtWqZXGMBnX5GfHmNE2PwPHo1jjj437EDxLTXzHaf6RQxXD-RHO57ccKYIzY91elfWoUFxhNqG-uG-=s1200",
  "https://lh3.googleusercontent.com/o3NTrD_bF5QGKxTYX4S-9AlGHlhVE2vjfwF2cHwJesHMAfK8g45K_zzGWBvpi8y1W8NB8S7RxVJn6cNe=s1200",
  "https://lh3.googleusercontent.com/lMxasEl97Rcew_IZ6oHelsOoC5R3CwtgMWx4d0hdcLQ8uJipolJuZ9U3u8ocgqoWLYfSkTlq9qi9ROBJ=s1200",
  "https://lh3.googleusercontent.com/RDfzndy8YfIFPKZ2GPSGEP6h4S5I67NYJj7rsylAmO3SjAFzznaT6sWB3Qo3kSTeGO0Uw8aggvcgtdsb=s1200",
  "https://lh3.googleusercontent.com/wTQxMv38aeRrs3MRAwm65D1k0VQQggLRbI3keMvBki6haiz_3hqGcPNG9KbVcUTQgLoTZzUFuLUh3SMG=s1200",
  "https://lh3.googleusercontent.com/I-Gr2QL246K3SF6JcOrQwqdUkmvWWyexS7axCLw0NhZMjBloUdFTkapugY61rJlLanzXrTSYT6En97-B=s1200",
  "https://lh3.googleusercontent.com/fCiD7DtqaMD_CD_sju8seUj3W3vTN7rjhpLFmNfvMIqA05S4Ck-h41F1Q0kqqZ2gl_1R5ViPBFwkzjE9=s1200",
];

const aspects = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[4/5]", "aspect-square", "aspect-[3/4]"];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galerij — Sigarenmagazijn 2 Amsterdam" },
      { name: "description", content: "Een blik in onze winkel aan de Reguliersdwarsstraat — sigaren, tabak, vapes en de sfeer van hartje Amsterdam." },
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
            ? "Sfeerbeelden van Sigarenmagazijn 2, de Reguliersdwarsstraat en de producten die u bij ons vindt."
            : "Atmosphere from Sigarenmagazijn 2, the Reguliersdwarsstraat and the products we carry."}
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
