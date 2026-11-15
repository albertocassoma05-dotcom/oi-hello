import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, BadgeCheck, ChevronDown, Heart, Instagram, Menu, Search,
  ShieldCheck, ShoppingBag, Sparkles, Truck, X, Facebook, MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Universo das Barbies | Moda, beleza e acessórios" },
      { name: "description", content: "Descobre moda feminina, beleza, cuidados pessoais e acessórios no Universo das Barbies." },
      { property: "og:title", content: "Universo das Barbies" },
      { property: "og:description", content: "Tudo para realçar a tua beleza e expressar o teu estilo." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const WHATSAPP = "244939292721";
const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const categories = [
  { name: "Moda feminina", note: "Peças para o teu estilo", image: "photo-1483985988355-763728e1935b" },
  { name: "Beleza e cosméticos", note: "Realça a tua beleza", image: "photo-1596462502278-27bfdc403348" },
  { name: "Bolsas e acessórios", note: "Os detalhes fazem a diferença", image: "photo-1584917865442-de89df76afd3" },
  { name: "Cuidados pessoais", note: "Cuida de ti todos os dias", image: "photo-1608248543803-ba4f8c70ae0b" },
  { name: "Ferramentas femininas", note: "Praticidade e estilo", image: "photo-1522335789203-aabd1fc54bc9" },
  { name: "Novidades", note: "Descobre o que chegou", image: "photo-1539109136881-3be0616acf4b" },
];

const benefits = [
  { icon: ShoppingBag, title: "Escolha com carinho", text: "Uma seleção pensada para acompanhar o teu estilo e o teu dia a dia." },
  { icon: MessageCircle, title: "Atendimento próximo", text: "Fala diretamente connosco pelo WhatsApp para esclarecer as tuas dúvidas." },
  { icon: ShieldCheck, title: "Compra com confiança", text: "A tua encomenda só fica confirmada depois da nossa validação." },
  { icon: Truck, title: "Opções de entrega", text: "Escolhe entre entrega ao domicílio ou levantamento, mediante confirmação." },
];

function imageUrl(id: string, width = 900) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className={`brand ${light ? "brand-light" : ""}`} aria-label="Universo das Barbies - início">
      <span className="brand-mark"><Sparkles size={17} strokeWidth={1.8} /></span>
      <span className="brand-wordmark"><strong>Universo</strong><em>das Barbies</em></span>
    </a>
  );
}

function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const visibleCategories = useMemo(
    () => categories.filter((category) => category.name.toLocaleLowerCase("pt").includes(search.toLocaleLowerCase("pt"))),
    [search],
  );

  const closeMenu = () => setMobileOpen(false);

  function handleNewsletter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newsletterEmail.trim()) return;
    const message = `Olá! Gostaria de receber novidades do Universo das Barbies. O meu e-mail é: ${newsletterEmail.trim()}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setNewsletterMessage("O WhatsApp foi aberto para enviares o teu pedido.");
  }

  return (
    <main id="inicio">
      <div className="announcement">
        <span>O teu estilo, a tua beleza, o teu universo.</span>
        <a href={whatsappLink("Olá! Gostaria de saber mais sobre os produtos do Universo das Barbies.")} target="_blank" rel="noreferrer">
          Atendimento pelo WhatsApp <ArrowRight size={13} />
        </a>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <button className="mobile-menu-button icon-button" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
          <Brand />
          <nav className={`main-nav ${mobileOpen ? "nav-open" : ""}`} aria-label="Navegação principal">
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#categorias" onClick={closeMenu}>Categorias</a>
            <a href="#produtos" onClick={closeMenu}>Produtos</a>
            <a href="#sobre" onClick={closeMenu}>Sobre nós</a>
            <a href="#contactos" onClick={closeMenu}>Contactos</a>
          </nav>
          <div className="header-actions">
            <button className="icon-button search-toggle" aria-label="Pesquisar categorias" onClick={() => setSearchOpen(!searchOpen)}>
              <Search size={19} />
            </button>
            <a className="header-whatsapp" href={whatsappLink("Olá! Vim pelo site Universo das Barbies e gostaria de atendimento.")} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> <span>Falar connosco</span>
            </a>
          </div>
        </div>
        {searchOpen && (
          <div className="search-panel">
            <Search size={18} />
            <input autoFocus value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Pesquisar categorias..." aria-label="Pesquisar categorias" />
            <button className="icon-button" onClick={() => { setSearch(""); setSearchOpen(false); }} aria-label="Fechar pesquisa"><X size={18} /></button>
          </div>
        )}
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span /> O TEU UNIVERSO FEMININO</span>
          <h1>Bem-vinda ao<br /><span>Universo das</span><br />Barbies<span className="pink-dot">.</span></h1>
          <p>Tudo o que precisas para realçar a tua beleza, expressar o teu estilo e tornar cada momento especial.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#categorias">Explorar produtos <ArrowRight size={17} /></a>
            <a className="button button-outline" href={whatsappLink("Olá! Gostaria de falar com o Universo das Barbies.")} target="_blank" rel="noreferrer">Falar connosco</a>
          </div>
          <div className="hero-note"><BadgeCheck size={17} /> Atendimento personalizado pelo WhatsApp</div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src={imageUrl("photo-1529139574466-a303027c1d8b", 1100)} alt="Inspiração de moda feminina" />
          </div>
          <div className="hero-sticker"><span>O teu</span><strong>momento<br />Barbie</strong><Sparkles size={19} /></div>
          <div className="hero-caption">BELEZA · ESTILO · PERSONALIDADE</div>
        </div>
        <div className="hero-background-word" aria-hidden="true">BARBIE</div>
      </section>

      <section className="trust-strip" aria-label="Vantagens">
        <div><Sparkles size={17} /><span>Estilo para todos os dias</span></div>
        <div><Heart size={17} /><span>Detalhes escolhidos com carinho</span></div>
        <div><MessageCircle size={17} /><span>Atendimento próximo</span></div>
      </section>

      <section className="section categories-section" id="categorias">
        <div className="section-heading">
          <div><span className="eyebrow">DESCOBRE O TEU ESTILO</span><h2>Explora as nossas <span>categorias</span></h2></div>
          <p>Encontra inspiração para cada versão de ti.</p>
        </div>
        {search && <p className="search-result-label">{visibleCategories.length} categoria(s) encontrada(s) para “{search}”.</p>}
        <div className="category-grid">
          {visibleCategories.map((category, index) => (
            <a className={`category-card category-card-${index + 1}`} href="#produtos" key={category.name} onClick={() => setActiveCategory(category.name)}>
              <img src={imageUrl(category.image, 700)} alt={category.name} loading="lazy" />
              <span className="category-shade" />
              <span className="category-info"><small>{category.note}</small><strong>{category.name}</strong><span className="category-link">Explorar <ArrowRight size={15} /></span></span>
            </a>
          ))}
          {visibleCategories.length === 0 && <div className="empty-search">Não encontrámos categorias com esse nome. Tenta outra pesquisa.</div>}
        </div>
      </section>

      <section className="featured-section" id="produtos">
        <div className="section featured-inner">
          <div className="section-heading">
            <div><span className="eyebrow">A TUA PRÓXIMA DESCOBERTA</span><h2>Produtos em <span>destaque</span></h2></div>
            <span className="catalog-tag"><span /> Catálogo em atualização</span>
          </div>
          <div className="catalog-empty">
            <div className="empty-icon"><ShoppingBag size={27} /></div>
            <span className="eyebrow">EM BREVE</span>
            <h3>Estamos a preparar novidades para ti.</h3>
            <p>Os produtos e respetivos preços serão publicados aqui assim que o catálogo oficial estiver disponível.</p>
            <a className="button button-primary" href={whatsappLink("Olá! Gostaria de conhecer os produtos disponíveis no Universo das Barbies.")} target="_blank" rel="noreferrer">Consultar produtos pelo WhatsApp <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="section-heading centered-heading">
          <span className="eyebrow">A EXPERIÊNCIA BARBIE</span>
          <h2>Mais do que produtos,<br /><span>uma experiência para ti.</span></h2>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article className="benefit-card" key={title}>
              <div className="benefit-icon"><Icon size={22} strokeWidth={1.7} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="about-image"><img src={imageUrl("photo-1524504388940-b1c1722653e1", 900)} alt="Retrato feminino em ambiente delicado" loading="lazy" /><span className="about-image-label">FEITO A PENSAR EM TI</span></div>
        <div className="about-copy">
          <span className="eyebrow">CONHEÇA A NOSSA MARCA</span>
          <h2>O teu estilo merece<br /><span>um universo inteiro.</span></h2>
          <p>O Universo das Barbies é um espaço dedicado à mulher moderna, onde encontrarás produtos de moda, beleza, acessórios e utilidades que acompanham o teu estilo e o teu dia a dia.</p>
          <p>A nossa missão é proporcionar uma experiência de compra agradável, com produtos selecionados para valorizar a beleza, a confiança e a personalidade de cada mulher.</p>
          <a className="text-link" href={whatsappLink("Olá! Gostaria de conhecer melhor o Universo das Barbies.")} target="_blank" rel="noreferrer">Descobre o nosso universo <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-decoration"><Sparkles size={36} /></div>
        <div><span className="eyebrow">FICA POR DENTRO</span><h2>Novidades bonitas<br />estão a caminho.</h2><p>Fala connosco e acompanha os próximos lançamentos.</p></div>
        <form className="newsletter-form" onSubmit={handleNewsletter}>
          <label htmlFor="newsletter-email">O teu e-mail</label>
          <div className="newsletter-input"><input id="newsletter-email" type="email" required placeholder="exemplo@email.com" value={newsletterEmail} onChange={(event) => setNewsletterEmail(event.target.value)} /><button type="submit" aria-label="Enviar contacto"><ArrowRight size={19} /></button></div>
          <small>{newsletterMessage || "Ao enviar, abrirás uma conversa no WhatsApp para pedir novidades."}</small>
        </form>
      </section>

      <footer className="site-footer" id="contactos">
        <div className="footer-main">
          <div className="footer-brand"><Brand light /><p>Moda, beleza e pequenos detalhes para acompanhares o teu estilo.</p><div className="social-links"><a href="https://www.instagram.com/universo_dasbarbies" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href="https://www.facebook.com/share/1FX7oY4Eco/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a><a href="https://www.tiktok.com/@universo.das.barb" target="_blank" rel="noreferrer" aria-label="TikTok" className="tiktok-link">♪</a></div></div>
          <div className="footer-column"><h4>Explorar</h4><a href="#inicio">Início</a><a href="#categorias">Categorias</a><a href="#produtos">Produtos</a><a href="#sobre">Sobre nós</a></div>
          <div className="footer-column"><h4>Atendimento</h4><a href={whatsappLink("Olá! Preciso de atendimento.")} target="_blank" rel="noreferrer">WhatsApp: 939 292 721</a><a href="tel:+244939292721">Ligar agora</a><a href="mailto:universodasberbies27@gmail.com">E-mail comercial</a></div>
          <div className="footer-column"><h4>Estamos aqui</h4><p>Segunda a sábado<br />Atendimento e disponibilidade a confirmar pelo WhatsApp.</p><a className="footer-cta" href={whatsappLink("Olá! Gostaria de atendimento.")} target="_blank" rel="noreferrer">Enviar mensagem <ArrowRight size={15} /></a></div>
        </div>
        <div className="footer-bottom"><span>© Universo das Barbies. Todos os direitos reservados.</span><span>Feito com <Heart size={13} fill="currentColor" /> para ti.</span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink("Olá! Vim pelo site Universo das Barbies e gostaria de atendimento.")} target="_blank" rel="noreferrer" aria-label="Contactar pelo WhatsApp"><MessageCircle size={24} /><span>Fala connosco</span></a>
    </main>
  );
}
