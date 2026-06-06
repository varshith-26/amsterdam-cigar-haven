import drinksImg from "@/assets/drinks-snacks.jpg";
import vapesImg from "@/assets/shop-exterior.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import souvenirsImg from "@/assets/souvenirs.jpg";

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
    slug: "alles-onder-een-dak",
    img: vapesImg,
    date: "5 juni 2026",
    cat: { nl: "De winkel", en: "The shop" },
    title: {
      nl: "Honderden vapes, een hele wand aanstekers en alles ertussenin.",
      en: "Hundreds of vapes, a whole wall of lighters, and everything in between.",
    },
    excerpt: {
      nl: "Van disposable vapes in elke smaak tot Bic, Clipper en Zippo aanstekers in alle kleuren — een rondleiding door de meest gevulde planken van Reguliersdwarsstraat 14.",
      en: "From disposable vapes in every flavour to Bic, Clipper and Zippo lighters in every colour — a tour of the most stocked shelves on Reguliersdwarsstraat 14.",
    },
    body: {
      nl: [
        "Loop onze winkel binnen en u ziet meteen waar wij om bekend staan: een kleurrijke wand vol disposable vapes, een schap met honderden aanstekers en een gevulde koeling die altijd ijskoud is.",
        "We voeren disposable vapes in tientallen smaken — van klassiek munt en tabak tot fruitige mixen, ijskoele menthol en de nieuwste releases. IQOS Iluma apparaten en Terea sticks in alle varianten liggen ook altijd op voorraad.",
        "Bij de aanstekerwand vindt u Bic in alle standaardkleuren én limited editions, Clipper met navulbaar systeem, en de iconische Zippo voor wie iets voor het leven zoekt. Vraag gerust naar speciale designs — we hebben er meer dan op het schap past.",
        "Pinnen kan altijd, ook voor één blikje of één aansteker. We zijn dagelijks open van 11:00 tot 22:00 — handig als u 's avonds nog snel iets nodig heeft.",
      ],
      en: [
        "Step into our shop and you see immediately what we're known for: a colourful wall full of disposable vapes, a shelf with hundreds of lighters, and a fully stocked fridge that's always ice-cold.",
        "We carry disposable vapes in dozens of flavours — from classic mint and tobacco to fruity mixes, ice-cold menthol and the latest releases. IQOS Iluma devices and Terea sticks in every variant are always in stock too.",
        "At the lighter wall you'll find Bic in every standard colour and limited editions, refillable Clipper, and the iconic Zippo for anyone looking for something to last a lifetime. Just ask for special designs — we have more than fits on the shelf.",
        "Card payments are welcome, even for a single can or a single lighter. We're open daily from 11:00 to 22:00 — handy when you need something late in the evening.",
      ],
    },
  },
  {
    slug: "ijskoud-uit-de-koeling",
    img: drinksImg,
    date: "28 mei 2026",
    cat: { nl: "Frisdrank & Energy", en: "Drinks & Energy" },
    title: {
      nl: "IJskoud uit de koeling: Coca-Cola, Red Bull, Monster en meer.",
      en: "Ice-cold from the fridge: Coca-Cola, Red Bull, Monster and more.",
    },
    excerpt: {
      nl: "Even snel een blikje pakken voor onderweg? Onze koeling staat vol met klassiekers en energy drinks — pinnen kan altijd, ook voor één blikje.",
      en: "Grabbing a cold can for the road? Our fridge is packed with classics and energy drinks — card payments welcome, even for a single can.",
    },
    body: {
      nl: [
        "Onze koeling is een van de eerste dingen die u ziet als u binnenkomt — en die staat altijd vol. Coca-Cola, Coca-Cola Zero, Fanta, Sprite, Lipton Ice Tea, Fuze Tea, sapjes, water met en zonder bubbels.",
        "Voor wie een extra boost nodig heeft: Red Bull in alle smaken, Monster Energy, Rockstar en wat kleinere energy-merken die u niet snel ergens anders vindt.",
        "Het mooiste? U mag altijd pinnen — ook voor één blikje van een euro of twee. Geen 'minimumbedrag bij PIN'-bordje hier.",
      ],
      en: [
        "Our fridge is one of the first things you see when you walk in — and it's always full. Coca-Cola, Coca-Cola Zero, Fanta, Sprite, Lipton Ice Tea, Fuze Tea, juices, sparkling and still water.",
        "For when you need a boost: Red Bull in every flavour, Monster Energy, Rockstar and some smaller energy brands you won't find easily elsewhere.",
        "The best part? Card payments are always welcome — even for a single can of a euro or two. No 'minimum amount for card' sign here.",
      ],
    },
  },
  {
    slug: "souvenirs-amsterdam",
    img: souvenirsImg,
    date: "20 mei 2026",
    cat: { nl: "Souvenirs", en: "Souvenirs" },
    title: {
      nl: "Amsterdamse souvenirs zonder de toeristenprijs.",
      en: "Amsterdam souvenirs without the tourist mark-up.",
    },
    excerpt: {
      nl: "Delftsblauwe borden, klompen, miniatuur grachtenpandjes, magneten en ansichtkaarten — een eerlijke prijs op een steenworp van Rembrandtplein.",
      en: "Delft blue plates, clogs, miniature canal houses, magnets and postcards — fair prices a stone's throw from Rembrandtplein.",
    },
    body: {
      nl: [
        "U hoeft niet naar de Dam of het Damrak voor een echt Amsterdams souvenir — én u betaalt bij ons gewoon een eerlijke prijs.",
        "We hebben klassieke Delftsblauwe borden en miniaturen, houten klompen in elke maat, magneten met grachtenpandjes, sleutelhangers, ansichtkaarten en wenskaarten voor elke gelegenheid.",
        "Op zoek naar iets specifieks? Loop binnen en vraag het — we helpen u graag verder.",
      ],
      en: [
        "You don't need to go to Dam Square or Damrak for a real Amsterdam souvenir — and with us you simply pay a fair price.",
        "We have classic Delft blue plates and miniatures, wooden clogs in every size, magnets with canal houses, keychains, postcards and greeting cards for every occasion.",
        "Looking for something specific? Drop by and ask — we're happy to help.",
      ],
    },
  },
  {
    slug: "rookwaren-en-accessoires",
    img: accessoriesImg,
    date: "12 mei 2026",
    cat: { nl: "Rookwaren", en: "Smoking essentials" },
    title: {
      nl: "RAW, OCB, Clipper, Zippo — alles voor de roker.",
      en: "RAW, OCB, Clipper, Zippo — everything for the smoker.",
    },
    excerpt: {
      nl: "Vloei, filters, grinders, asbakken en aanstekers in elke maat en kleur. Tot 22:00 's avonds, ook als u even iets vergeten bent.",
      en: "Papers, filters, grinders, ashtrays and lighters in every size and colour. Open until 22:00 — handy when you've forgotten something.",
    },
    body: {
      nl: [
        "Voor de echte liefhebber: RAW en OCB vloei in alle formaten, kingsize, slim en classic. Filters en tips, metalen en acryl grinders, asbakken voor thuis en onderweg.",
        "Aanstekers in elke soort: Bic, Clipper navulbaar, BBQ-aanstekers en natuurlijk Zippo. Voor pijproken hebben we shag van alle bekende merken en een vaste selectie pijptabak.",
        "Iets vergeten op weg naar huis? We zijn elke dag tot 22:00 open.",
      ],
      en: [
        "For the real enthusiast: RAW and OCB papers in every size — kingsize, slim and classic. Filters and tips, metal and acrylic grinders, ashtrays for at home and on the go.",
        "Lighters in every kind: Bic, refillable Clipper, BBQ lighters and of course Zippo. For pipe smokers we have rolling tobacco from all known brands and a steady selection of pipe tobacco.",
        "Forgot something on your way home? We're open daily until 22:00.",
      ],
    },
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
