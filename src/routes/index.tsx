import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Fan,
  Headphones,
  Leaf,
  MapPin,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Snowflake,
  Star,
  Sun,
  ThermometerSun,
  Truck,
  Wrench,
} from "lucide-react";

import buildingImage from "@/assets/company-building.jpg";
import coldRoomsImage from "@/assets/cold-rooms.jpg";
import heroImage from "@/assets/cryofresh-hero.jpg";
import productsImage from "@/assets/hvac-products.jpg";
import { Button, Card, Footer, Header, IconFeature, RoundArrow, Section, SectionHeading, Brand } from "@/components/cryofresh";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRYOFRESH – Climatisation & Solutions Thermiques" },
      { name: "description", content: "Landing page CRYOFRESH pour climatisation, chauffage, réfrigération et services thermiques." },
      { property: "og:title", content: "CRYOFRESH – Solutions thermiques premium" },
      { property: "og:description", content: "Découvrez les produits, services et offres CRYOFRESH pour votre confort thermique." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: ShieldCheck, title: "Produits de qualité", text: "Marques de confiance" },
  { icon: Wrench, title: "Installation professionnelle", text: "Par des experts" },
  { icon: Truck, title: "Livraison rapide", text: "Partout en France" },
  { icon: Headphones, title: "Service client", text: "À votre écoute" },
  { icon: Leaf, title: "Économie d'énergie", text: "Solutions durables" },
];

const products = [
  { title: "Climatisation", text: "Confort en toute saison", image: productsImage },
  { title: "Chauffage", text: "Chaleur et bien-être", image: productsImage },
  { title: "Réfrigération", text: "Conservation optimale", image: coldRoomsImage },
  { title: "Accessoires", text: "Performance et fiabilité", image: productsImage },
];

const offerBullets = [
  ["Froid & Chaud", "Confort en été comme en hiver grâce à la technologie réversible."],
  ["Haute efficacité", "Technologie inverter pour des économies d'énergie et des performances optimales."],
  ["WiFi intégré", "Contrôle à distance via l'application Daikin Onecta."],
  ["Ultra silencieux", "Fonctionnement discret pour un confort absolu."],
  ["Design élégant", "Unité intérieure Stylish : élégante, compacte et moderne."],
];

const services = [
  { icon: Wrench, title: "Installation", text: "Mise en place professionnelle" },
  { icon: BadgeCheck, title: "Maintenance", text: "Longévité et performance" },
  { icon: ThermometerSun, title: "Réparation", text: "Intervention rapide et efficace" },
];

const testimonials = [
  ["Service rapide, équipe professionnelle et produits de très bonne qualité. Je recommande vivement Cryofresh !", "Daniel K.", "Abidjan, Côte d'Ivoire"],
  ["J'ai installé un climatiseur Daikin avec Cryofresh et je suis très satisfait. Le confort est au rendez-vous !", "Aminata D.", "Dakar, Sénégal"],
  ["Excellente prise en charge et conseils personnalisés. Une entreprise sérieuse et fiable !", "Sophie L.", "Paris, France"],
];

function Index() {
  return (
    <main>
      <Header />
      <section id="accueil" className="hero-section">
        <img className="hero-image" src={heroImage} alt="Maison moderne avec piscine et unité de climatisation" width={1600} height={912} />
        <div className="hero-overlay" />
        <div className="hero-pills" aria-label="Domaines CRYOFRESH">
          <span><Snowflake size={18} />Climatisation</span>
          <span><Sun size={18} />Chauffage</span>
          <span><Leaf size={18} />Énergie durable</span>
        </div>
        <div className="hero-content">
          <Brand />
          <p className="hero-subtitle">CLIMATISATION & SOLUTIONS THERMIQUES</p>
          <h1>Votre <span>confort</span>, notre <span>priorité</span></h1>
          <p>Des solutions de climatisation, de chauffage et de réfrigération pour un environnement plus sain, plus confortable et plus durable.</p>
          <div className="hero-actions"><Button href="#produits">Découvrir nos produits <ArrowRight size={17} /></Button><Button href="#services" variant="outline">Nos services</Button></div>
        </div>
      </section>

      <div className="benefit-band">{benefits.map((item) => <IconFeature key={item.title} {...item} />)}</div>

      <Section id="produits">
        <SectionHeading eyebrow="▸ NOS PRODUITS" title="Des solutions pour tous vos besoins" text="Découvrez notre gamme complète de climatiseurs, systèmes de chauffage, réfrigération et accessoires." action={<a className="text-link" href="#produits">Voir tous les produits <ArrowRight size={15} /></a>} />
        <div className="product-grid">
          {products.map((product) => (
            <Card key={product.title} className="product-card">
              <img src={product.image} alt={product.title} loading="lazy" width={1200} height={800} />
              <div><h3>{product.title}</h3><p>{product.text}</p></div>
              <RoundArrow />
            </Card>
          ))}
        </div>
      </Section>

      <Section className="offer-section">
        <div className="offer-product">
          <div className="price-badge"><span>OFFRE EXCEPTIONNELLE</span><strong>2.050€</strong><small>AU LIEU DE <s>3.550€</s></small></div>
          <img src={productsImage} alt="Système Daikin Stylish" loading="lazy" width={1200} height={800} />
        </div>
        <div className="offer-details">
          <p className="daikin">DAIKIN</p>
          <h2>STYLISH</h2>
          <strong className="offer-label">TRI-SPLIT INVERTER-SYSTEM</strong>
          <p className="offer-tech">TECHNOLOGIE RÉVERSIBLE</p>
          <div className="offer-list">
            {offerBullets.map(([title, text]) => <IconFeature key={title} icon={CheckCircle2} title={title} text={text} />)}
          </div>
        </div>
        <aside className="offer-panel">
          <p>Un système performant et élégant composé d'une unité extérieure et de trois unités intérieures pour un confort optimal toute l'année.</p>
          <Button href="#contact" variant="light">En savoir plus <ArrowRight size={16} /></Button>
          <div className="composition"><strong>COMPOSITION DU SYSTÈME</strong><div><PackageCheck /><span><b>1 UNITÉ EXTÉRIEURE</b>Alimente 3 unités intérieures</span></div><div><Fan /><span><b>3 UNITÉS INTÉRIEURES</b>2 x 9 000 BTU (Blanc), 1 x 12 000 BTU (Noir)</span></div></div>
        </aside>
      </Section>

      <Section id="apropos" className="about-section">
        <div className="about-copy">
          <img src={buildingImage} alt="Bâtiment CRYOFRESH" loading="lazy" width={1200} height={800} />
          <div><p className="eyebrow">▸ À propos de CRYOFRESH</p><h2>Votre partenaire en solutions thermiques</h2><p>CRYOFRESH est spécialisée dans la vente, l'installation et la maintenance de systèmes de climatisation, de chauffage et de réfrigération. Nous proposons des produits de haute qualité des grandes marques, avec un service client irréprochable.</p><Button href="#contact">En savoir plus <ArrowRight size={16} /></Button></div>
        </div>
        <Card className="services-card" id="services">
          <h2>Nos services</h2><p>Une équipe d'experts à votre service</p>
          {services.map((service) => <a className="service-row" key={service.title} href="#contact"><service.icon size={24} /><span><strong>{service.title}</strong><small>{service.text}</small></span><ArrowRight size={18} /></a>)}
        </Card>
      </Section>

      <Section>
        <SectionHeading title="Témoignages" text="Nos clients nous font confiance" action={<a className="text-link" href="#contact">Voir plus d'avis <ArrowRight size={15} /></a>} />
        <div className="testimonial-grid">
          {testimonials.map(([quote, name, city]) => <Card key={name} className="testimonial-card"><p>“{quote}”</p><div><span className="avatar">{name.charAt(0)}</span><span><strong>{name}</strong><small>{city}</small></span></div><span className="stars" aria-label="5 étoiles"><Star /><Star /><Star /><Star /><Star /></span></Card>)}
        </div>
      </Section>
      <Footer />
    </main>
  );
}