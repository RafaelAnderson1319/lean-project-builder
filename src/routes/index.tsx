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
import productsImage from "@/assets/hvac-products.jpg";
import { Button, Card, Footer, Header, IconFeature, RoundArrow, Section, SectionHeading, Brand } from "@/components/cryofresh";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRYOFRESH – Climatização & Soluções Térmicas" },
      { name: "description", content: "Landing page CRYOFRESH para climatização, aquecimento, refrigeração e serviços térmicos." },
      { property: "og:title", content: "CRYOFRESH – Soluções térmicas premium" },
      { property: "og:description", content: "Conheça os produtos, serviços e ofertas CRYOFRESH para o seu conforto térmico." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: ShieldCheck, title: "Produtos de qualidade", text: "Marcas de confiança" },
  { icon: Wrench, title: "Instalação profissional", text: "Feita por especialistas" },
  { icon: Truck, title: "Entrega rápida", text: "Em toda a França" },
  { icon: Headphones, title: "Atendimento ao cliente", text: "Sempre à sua disposição" },
  { icon: Leaf, title: "Economia de energia", text: "Soluções sustentáveis" },
];

const products = [
  { title: "Climatização", text: "Conforto em todas as estações", image: productsImage },
  { title: "Aquecimento", text: "Calor e bem-estar", image: productsImage },
  { title: "Refrigeração", text: "Conservação ideal", image: coldRoomsImage },
  { title: "Acessórios", text: "Desempenho e confiabilidade", image: productsImage },
];

const offerBullets = [
  ["Frio e Calor", "Conforto no verão e no inverno graças à tecnologia reversível."],
  ["Alta eficiência", "Tecnologia inverter para economia de energia e desempenho ideal."],
  ["Wi-Fi integrado", "Controle à distância pelo aplicativo Daikin Onecta."],
  ["Ultrassilencioso", "Funcionamento discreto para máximo conforto."],
  ["Design elegante", "Unidade interna Stylish: elegante, compacta e moderna."],
] as const;

const services = [
  { icon: Wrench, title: "Instalação", text: "Instalação profissional" },
  { icon: BadgeCheck, title: "Manutenção", text: "Durabilidade e desempenho" },
  { icon: ThermometerSun, title: "Reparo", text: "Atendimento rápido e eficiente" },
];

const testimonials = [
  ["Serviço rápido, equipe profissional e produtos de ótima qualidade. Recomendo muito a Cryofresh!", "Daniel K.", "Abidjan, Costa do Marfim"],
  ["Instalei um ar-condicionado Daikin com a Cryofresh e fiquei muito satisfeito. O conforto é excelente!", "Aminata D.", "Dacar, Senegal"],
  ["Excelente atendimento e orientação personalizada. Uma empresa séria e confiável!", "Sophie L.", "Paris, França"],
] as const;

function Index() {
  return (
    <main>
      <Header />
      <section id="inicio" className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <div className="hero-cooling-flow">
            <span className="air-stream air-stream-1" />
            <span className="air-stream air-stream-2" />
            <span className="air-stream air-stream-3" />
            <span className="air-stream air-stream-4" />
          </div>
          <div className="hero-snow" />
          <div className="hero-light-sweep" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-pills hero-enter hero-enter-1" aria-label="Áreas de atuação da CRYOFRESH">
          <span><Snowflake size={18} />Climatização</span>
          <span><Sun size={18} />Aquecimento</span>
          <span><Leaf size={18} />Energia sustentável</span>
        </div>
        <div className="hero-content hero-enter hero-enter-2">
          <Brand />
          <p className="hero-subtitle">CLIMATIZAÇÃO & SOLUÇÕES TÉRMICAS</p>
          <h1>Seu <span>conforto</span>, nossa <span>prioridade</span></h1>
          <p>Soluções de climatização, aquecimento e refrigeração para um ambiente mais saudável, confortável e sustentável.</p>
          <div className="hero-actions"><Button href="#produtos">Conheça nossos produtos <ArrowRight size={17} /></Button><Button href="#servicos" variant="outline">Nossos serviços</Button></div>
        </div>
      </section>

      <div className="benefit-band">{benefits.map((item) => <IconFeature key={item.title} {...item} />)}</div>

      <Section id="produtos">
        <SectionHeading eyebrow="▸ NOSSOS PRODUTOS" title="Soluções para todas as suas necessidades" text="Conheça nossa linha completa de climatizadores, sistemas de aquecimento, refrigeração e acessórios." action={<a className="text-link" href="#produtos">Ver todos os produtos <ArrowRight size={15} /></a>} />
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
          <div className="price-badge"><span>OFERTA ESPECIAL</span><strong>2.050€</strong><small>DE <s>3.550€</s></small></div>
          <img src={productsImage} alt="Sistema Daikin Stylish" loading="lazy" width={1200} height={800} />
        </div>
        <div className="offer-details">
          <p className="daikin">DAIKIN</p>
          <h2>STYLISH</h2>
          <strong className="offer-label">SISTEMA INVERTER TRI-SPLIT</strong>
          <p className="offer-tech">TECNOLOGIA REVERSÍVEL</p>
          <div className="offer-list">
            {offerBullets.map(([title, text]) => <IconFeature key={title} icon={CheckCircle2} title={title} text={text} />)}
          </div>
        </div>
        <aside className="offer-panel">
          <p>Um sistema eficiente e elegante composto por uma unidade externa e três unidades internas para máximo conforto durante todo o ano.</p>
          <Button href="#contato" variant="light">Saiba mais <ArrowRight size={16} /></Button>
          <div className="composition"><strong>COMPOSIÇÃO DO SISTEMA</strong><div><PackageCheck /><span><b>1 UNIDADE EXTERNA</b>Alimenta 3 unidades internas</span></div><div><Fan /><span><b>3 UNIDADES INTERNAS</b>2 x 9 000 BTU (Branco), 1 x 12 000 BTU (Preto)</span></div></div>
        </aside>
      </Section>

      <Section id="sobre" className="about-section">
        <div className="about-copy">
          <img src={buildingImage} alt="Edifício CRYOFRESH" loading="lazy" width={1200} height={800} />
          <div><p className="eyebrow">▸ SOBRE A CRYOFRESH</p><h2>Sua parceira em soluções térmicas</h2><p>A CRYOFRESH é especializada na venda, instalação e manutenção de sistemas de climatização, aquecimento e refrigeração. Oferecemos produtos de alta qualidade das principais marcas, com um atendimento ao cliente de excelência.</p><Button href="#contato">Saiba mais <ArrowRight size={16} /></Button></div>
        </div>
        <Card className="services-card" id="servicos">
          <h2>Nossos serviços</h2><p>Uma equipe de especialistas à sua disposição</p>
          {services.map((service) => <a className="service-row" key={service.title} href="#contato"><service.icon size={24} /><span><strong>{service.title}</strong><small>{service.text}</small></span><ArrowRight size={18} /></a>)}
        </Card>
      </Section>

      <Section>
        <SectionHeading title="Depoimentos" text="Nossos clientes confiam em nós" action={<a className="text-link" href="#contato">Ver mais avaliações <ArrowRight size={15} /></a>} />
        <div className="testimonial-grid">
          {testimonials.map(([quote, name, city]) => <Card key={name} className="testimonial-card"><p>“{quote}”</p><div><span className="avatar">{name.charAt(0)}</span><span><strong>{name}</strong><small>{city}</small></span></div><span className="stars" aria-label="5 estrelas"><Star /><Star /><Star /><Star /><Star /></span></Card>)}
        </div>
      </Section>
      <Footer />
    </main>
  );
}