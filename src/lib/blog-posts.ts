import drinksImg from "@/assets/drinks-snacks.jpg";
import vapesImg from "@/assets/shop-exterior.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import amsterdamImg from "@/assets/amsterdam.jpg";

export type BlogPost = {
  slug: string;
  img: string;
  date: string;
  cat: { nl: string; en: string };
  title: { nl: string; en: string };
  excerpt: { nl: string; en: string };
  body: { nl: string[]; en: string[] };
};

export const posts: BlogPost[] = [
  {
    slug: "exploring-amsterdam-on-foot",
    img: vapesImg,
    date: "11 mei 2026",
    cat: { nl: "De winkel", en: "The shop" },
    title: {
      nl: "Amsterdam te voet verkennen kan je het beste doen met je essentials op zak.",
      en: "Exploring Amsterdam on foot is the best way to soak in the city — bring your essentials.",
    },
    excerpt: {
      nl: "Loop je door de historische straten bij het Rembrandtplein of richting de grachten? Kom langs bij Sigarenmagazijn 2 Het Bommetje voor de nieuwste disposable vapes zoals Crystal en Elfbar.",
      en: "Wandering the historic streets near Rembrandtplein or heading toward the canals? Stop by Sigarenmagazijn 2 Het Bommetje for the latest disposable vapes like Crystal and Elfbar.",
    },
    body: {
      nl: [
        "Wanneer je door de historische straten bij het Rembrandtplein loopt of richting de grachten gaat, kom dan langs bij Sigarenmagazijn 2 Het Bommetje om je voor te bereiden.",
        "We hebben de nieuwste disposable vapes op voorraad, waaronder populaire opties zoals Crystal en Elfbar, zodat je wandeling door de stad soepel en plezierig blijft. ⭐️",
        "Voordelen van onze vapes:",
        "• Compact en makkelijk mee te nemen tijdens het sightseeing",
        "• Veel verschillende smaken die bij elke stemming passen",
        "• Geen onderhoud nodig — gewoon pakken en gaan",
        "Of je nu een local bent die een nieuwe smaak komt halen of een reiziger die onze buurt verkent, wij helpen je graag. Naast onze vape-collectie bieden we een volledig assortiment koude dranken en gemaksartikelen om je dag in Amsterdam nog beter te maken. ❤️",
        "📍 Locatie: Reguliersdwarsstraat 14, Amsterdam",
        "Kom vandaag langs en kies je nieuwe favoriet voor je volgende stadsavontuur. Tot snel! 🙏",
      ],
      en: [
        "When you are wandering the historic streets near Rembrandtplein or heading toward the canals, stop by Sigarenmagazijn 2 Het Bommetje to gear up.",
        "We have stocked up on the latest disposable vapes, including popular options like Crystal and Elfbar, to keep your walk through the city seamless and enjoyable. ⭐️",
        "Benefits of our vapes:",
        "• Compact and easy to carry while sightseeing",
        "• Great flavour variety to match your mood",
        "• No maintenance required — just grab and go",
        "Whether you are a local picking up a new flavour or a traveller exploring our neighbourhood, we are here to help. Alongside our vape collection, we offer a full range of cold drinks and convenience items to make your Amsterdam outing even better. ❤️",
        "📍 Location: Reguliersdwarsstraat 14, Amsterdam",
        "Drop by our shop today to pick out a new favourite before your next city adventure. We look forward to seeing you soon! 🙏",
      ],
    },
  },
  {
    slug: "perfect-companion-for-a-stroll",
    img: accessoriesImg,
    date: "11 mei 2026",
    cat: { nl: "Sigaren & Tabak", en: "Cigars & Tobacco" },
    title: {
      nl: "Op zoek naar de perfecte metgezel voor een wandeling door het hart van Amsterdam?",
      en: "Looking for the perfect companion for a stroll through the heart of Amsterdam?",
    },
    excerpt: {
      nl: "Sigarenmagazijn 2 heeft alles om de ervaring naar een hoger niveau te tillen — premium sigaren en een breed assortiment tabaksmelanges.",
      en: "Sigarenmagazijn 2 has everything to elevate the experience — premium cigars and a wide variety of tobacco blends.",
    },
    body: {
      nl: [
        "Sigarenmagazijn 2 heeft alles wat nodig is om de ervaring naar een hoger niveau te tillen. We zijn gespecialiseerd in premium sigaren en een breed assortiment tabaksmelanges die altijd raak zijn. ⭐️",
        "Of je nu rondwandelt bij het Rembrandtplein of ontspant bij de grachten — ons assortiment is samengesteld voor wie kwaliteit waardeert. We houden het transparant en direct: alleen de beste merken en melanges komen in onze schappen.",
        "Ons gespecialiseerde assortiment omvat:",
        "➡️ Premium handgerolde sigaren",
        "➡️ Diverse tabaksmelanges",
        "➡️ Hoogwaardige rookaccessoires",
        "➡️ Verfrissende dranken om bij je sigaar te combineren ❤️",
        "We zijn een vertrouwd adres voor zowel locals als reizigers die authentieke producten willen zonder gedoe. Kom langs in onze winkel aan de Reguliersdwarsstraat voor snelle service en deskundig advies over de beste melanges voor jouw smaak. 🙏",
        "📍 Locatie: Reguliersdwarsstraat 14, Amsterdam Centrum",
        "Kom vandaag langs en ontdek de collectie!",
      ],
      en: [
        "Sigarenmagazijn 2 has everything needed to elevate the experience. We specialise in premium cigars and a wide variety of tobacco blends that hit the spot every time. ⭐️",
        "Whether wandering near Rembrandtplein or relaxing by the canals, our selection is curated for those who appreciate quality. We keep it transparent and direct: only the best brands and blends make it onto our shelves.",
        "Our specialised range includes:",
        "➡️ Premium hand-rolled cigars",
        "➡️ Diverse tobacco blends",
        "➡️ High-quality smoking accessories",
        "➡️ Refreshing drinks to pair with your smoke ❤️",
        "We are a trusted spot for both locals and travellers who want authentic products without the fuss. Stop by our shop on Reguliersdwarsstraat for fast service and expert advice on the best blends for your taste. 🙏",
        "📍 Location: Reguliersdwarsstraat 14, Amsterdam Centrum",
        "Visit us today to explore the collection!",
      ],
    },
  },
  {
    slug: "running-low-on-tobacco",
    img: drinksImg,
    date: "11 mei 2026",
    cat: { nl: "IQOS & Tabak", en: "IQOS & Tobacco" },
    title: {
      nl: "Bijna door je favoriete tabak of IQOS Iluma sticks heen?",
      en: "Running low on your favourite tobacco or IQOS Iluma sticks?",
    },
    excerpt: {
      nl: "Wij hebben je gedekt in hartje Amsterdam Centrum. Of je nu een local bent of bij het Rembrandtplein op bezoek bent — wij zorgen dat je nooit zonder zit.",
      en: "We've got you covered right in the heart of Amsterdam Centrum. Whether you're a local or visiting Rembrandtplein, we make sure you never run out.",
    },
    body: {
      nl: [
        "Wij hebben je gedekt in hartje Amsterdam Centrum. Of je nu een local bent die de buurt kent of net rond het Rembrandtplein op bezoek bent — bij ons raak je nooit zonder je essentials.",
        "Onze selectie is overzichtelijk en gevuld met de merken die je écht wilt. We houden het transparant en snel zodat je weer verder kunt met je dag.",
        "Wat we bieden:",
        "• Breed assortiment kwaliteitssigaretten en tabak",
        "• De nieuwste IQOS Iluma sticks en vapes",
        "• Crystal producten en accessoires",
        "• Koude dranken en snacks voor onderweg ⭐️",
        "📍 Locatie: Reguliersdwarsstraat 14, vlakbij Rembrandtplein",
        "We zijn er trots op dat we een betrouwbaar adres zijn voor de buurt én voor reizigers. Kom langs voor een snelle bijvulling en een vriendelijk praatje 🙏. We staan altijd klaar om je te helpen vinden wat je nodig hebt ❤️.",
        "Kom vandaag langs om bij te tanken!",
      ],
      en: [
        "We have got you covered right in the heart of Amsterdam Centrum. Whether you are a local who knows the neighbourhood or just visiting the area around Rembrandtplein, we make sure you never run out of your essentials.",
        "Our selection is straightforward and stocked with the brands you actually want. We keep things transparent and fast so you can get back to your day.",
        "What we offer:",
        "• Wide range of quality cigarettes and tobacco",
        "• Latest IQOS Iluma sticks and vapes",
        "• Crystal products and accessories",
        "• Cold drinks and snacks for the road ⭐️",
        "📍 Location: Reguliersdwarsstraat 14, near Rembrandtplein",
        "We pride ourselves on being a reliable spot for the community and travellers alike. Stop by for a quick refill and a friendly chat 🙏. We are always ready to help you find exactly what you need ❤️.",
        "Visit us today to stock up!",
      ],
    },
  },
  {
    slug: "summer-nights-in-amsterdam",
    img: amsterdamImg,
    date: "11 mei 2026",
    cat: { nl: "Amsterdam", en: "Amsterdam" },
    title: {
      nl: "Zomeravonden in Amsterdam zijn er eindelijk — en wij hebben alles voor jouw avond uit.",
      en: "Summer nights in Amsterdam are finally here — and we have everything for your night out.",
    },
    excerpt: {
      nl: "Niets is leuker dan een wandeling langs de grachten of chillen bij het Rembrandtplein. Wij hebben alles om de vibe goed te houden.",
      en: "There's nothing better than strolling along the canals or hanging out near Rembrandtplein. We have everything to keep the vibes going.",
    },
    body: {
      nl: [
        "Of je nu een local bent of onze prachtige stad bezoekt — een goede voorbereiding is de sleutel tot een geweldige avond.",
        "We hebben alles wat je nodig hebt om de vibe goed te houden, hier in onze winkel.",
        "Essentials voor je avondje uit:",
        "✅ IJskoude dranken en bier om verfrist te blijven",
        "✅ Snelle snacks en gemaksartikelen",
        "✅ Kwaliteitstabak, vapes en rookaccessoires",
        "✅ Unieke souvenirs als je op reis bent",
        "📍 Locatie: Reguliersdwarsstraat 14, Amsterdam Centrum",
        "We houden het simpel en transparant zodat je snel kunt pakken wat je nodig hebt en weer kunt genieten. Kom langs en laat ons je helpen om je voor te bereiden op de perfecte zomeravond ⭐️. We waarderen alle support van onze buurt en reizigers 🙏.",
        "Loop binnen en sla in voordat je de stad in gaat ❤️.",
      ],
      en: [
        "Whether you are a local or just visiting our beautiful city, prepping for the evening is key to a good time.",
        "We have everything you need to keep the vibes going right here at our shop.",
        "Essentials for your night out:",
        "✅ Ice cold drinks and beer to stay refreshed",
        "✅ Quick snacks and convenience items",
        "✅ Quality tobacco, vapes and smoking accessories",
        "✅ Unique souvenirs if you are travelling",
        "📍 Location: Reguliersdwarsstraat 14, Amsterdam Centrum",
        "We keep things simple and transparent so you can grab what you need and get back to the fun. Stop by and let us help you gear up for a perfect summer evening ⭐️. We appreciate all the support from our community and travellers alike 🙏.",
        "Swing by and stock up before you head out ❤️.",
      ],
    },
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
