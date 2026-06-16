import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import p0 from "@/assets/gallery/download.jpg";
import p1 from "@/assets/gallery/download_1.jpg";
import p2 from "@/assets/gallery/download_2.jpg";
import p3 from "@/assets/gallery/download_3.jpg";
import p4 from "@/assets/gallery/download_4.jpg";
import p5 from "@/assets/gallery/download_5.jpg";
import p6 from "@/assets/gallery/download_6.jpg";
import p7 from "@/assets/gallery/download_7.jpg";
import p8 from "@/assets/gallery/download_8.jpg";
import sign from "@/assets/gallery/2026-05-07.jpg";
import s11 from "@/assets/gallery/shop_11.jpg";
import s12 from "@/assets/gallery/shop_12.jpg";
import s13 from "@/assets/gallery/shop_13.jpg";
import s14 from "@/assets/gallery/shop_14.jpg";
import s15 from "@/assets/gallery/shop_15.jpg";
import s16 from "@/assets/gallery/shop_16.jpg";
import s17 from "@/assets/gallery/shop_17.jpg";
import s18 from "@/assets/gallery/shop_18.jpg";
import s19 from "@/assets/gallery/shop_19.jpg";
import s20 from "@/assets/gallery/shop_20.jpg";
import s23 from "@/assets/gallery/shop_23.jpg";
import s24 from "@/assets/gallery/shop_24.jpg";
import sa from "@/assets/gallery/shop_a.jpg";
import sb from "@/assets/gallery/shop_b.jpg";
import sc from "@/assets/gallery/shop_c.jpg";
import sd from "@/assets/gallery/shop_d.jpg";

const photos = [
  s11, s12, s20, s19, s18, s17, s16, s15, s14, s13,
  s23, s24, sa, sb, sc, sd,
  sign, p0, p1, p2, p3, p4, p5, p6, p7, p8,
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (api && openIndex !== null) api.scrollTo(openIndex, true);
  }, [api, openIndex]);

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
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="relative block overflow-hidden bg-secondary group rounded-md text-left"
            >
              <img
                src={src}
                alt={`Sigarenmagazijn 2 — foto ${i + 1}`}
                loading="lazy"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-5xl w-[95vw] bg-background/95 border-none p-6 sm:p-10">
          <Carousel setApi={setApi} opts={{ loop: true, startIndex: openIndex ?? 0 }} className="w-full">
            <CarouselContent>
              {photos.map((src, i) => (
                <CarouselItem key={src} className="flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Sigarenmagazijn 2 — foto ${i + 1}`}
                    className="max-h-[75vh] w-auto mx-auto object-contain rounded-md"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:-left-12" />
            <CarouselNext className="right-2 sm:-right-12" />
          </Carousel>
          <div className="text-center text-sm text-foreground/60 mt-2">
            {current + 1} / {photos.length}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
