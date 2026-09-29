import type { ComponentType, ReactNode } from "react";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Search,
  ShoppingCart,
  Snowflake,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#inicio" className="brand" aria-label="CRYOFRESH, início">
      <span className={inverse ? "brand-mark brand-mark-inverse" : "brand-mark"}>
        <Snowflake aria-hidden="true" />
      </span>
      <span className={inverse ? "brand-copy brand-copy-inverse" : "brand-copy"}>
        <strong>CRYO<span>FRESH</span></strong>
        <small>SOLUÇÕES DE CLIMATIZAÇÃO</small>
      </span>
    </a>
  );
}

export function Button({ children, href, variant = "primary" }: { children: ReactNode; href: string; variant?: "primary" | "outline" | "light" }) {
  return <a className={`button button-${variant}`} href={href}>{children}</a>;
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`page-section ${className}`}>{children}</section>;
}

export function Card({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <article id={id} className={`content-card ${className}`}>{children}</article>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Início", "#inicio"], ["Produtos", "#produtos"], ["Serviços", "#servicos"], ["Sobre nós", "#sobre"], ["Contato", "#contato"],
  ];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className={open ? "main-nav main-nav-open" : "main-nav"} aria-label="Navegação principal">
          {links.map(([label, href], index) => (
            <a key={label} className={index === 0 ? "nav-link nav-link-active" : "nav-link"} href={href} onClick={() => setOpen(false)}>
              {label}{index === 1 || index === 2 ? <ChevronDown size={13} aria-hidden="true" /> : null}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="icon-action desktop-action" href="#produtos" aria-label="Pesquisar"><Search size={19} /></a>
          <a className="cart-action desktop-action" href="#produtos" aria-label="Carrinho, nenhum item"><ShoppingCart size={20} /><span>0</span></a>
          <Button href="#produtos">Comprar agora</Button>
          <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
  );
}

export function SectionHeading({ eyebrow, title, text, action }: { eyebrow?: string; title: string; text?: string; action?: ReactNode }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function IconFeature({ icon: Icon, title, text }: { icon: ComponentType<{ size?: number; strokeWidth?: number }>; title: string; text: string }) {
  return <div className="icon-feature"><span><Icon size={25} strokeWidth={1.8} /></span><div><strong>{title}</strong><small>{text}</small></div></div>;
}

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-grid">
        <div><Brand inverse /><p>Seu conforto térmico, nossa especialidade.</p></div>
        <div><h3>Links rápidos</h3><a href="#inicio">Início</a><a href="#produtos">Produtos</a><a href="#servicos">Serviços</a><a href="#sobre">Sobre nós</a><a href="#contato">Contato</a></div>
        <div><h3>Nossos produtos</h3><a href="#produtos">Climatização</a><a href="#produtos">Aquecimento</a><a href="#produtos">Refrigeração</a><a href="#produtos">Acessórios</a></div>
        <div><h3>Contato</h3><p>+33 1 23 45 67 89</p><p>contact@cryofresh.fr</p><p>12 Rue des Thermes<br />75000 Paris, França</p></div>
        <div><h3>Siga-nos</h3><div className="socials"><a href="#contato" aria-label="Facebook"><Facebook /></a><a href="#contato" aria-label="Instagram"><Instagram /></a><a href="#contato" aria-label="LinkedIn"><Linkedin /></a><a href="#contato" aria-label="YouTube"><Youtube /></a></div></div>
      </div>
      <div className="footer-bottom"><span>© 2025 CRYOFRESH. Todos os direitos reservados.</span><span>Avisos legais&nbsp;&nbsp; | &nbsp;&nbsp;Política de privacidade</span></div>
      <a className="back-top" href="#inicio" aria-label="Voltar ao topo">↑</a>
    </footer>
  );
}

export function RoundArrow() { return <span className="round-arrow"><ArrowRight size={16} /></span>; }
