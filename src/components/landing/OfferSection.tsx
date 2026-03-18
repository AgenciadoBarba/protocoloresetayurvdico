import { useReveal } from "@/hooks/useReveal";
import { getCheckoutUrl } from "@/lib/checkout";


const offerItems = [
  "Aulas em vídeo com acesso anual à plataforma",
  "Guia passo a passo completo (PDF)",
  "Guia de chás para digestão e ciclo menstrual",
  "Fórmulas prontas para manipulação (bônus)",
  "Protocolo de desparasitação com tintura",
  "Comunidade no Instagram privado (acesso anual)",
  "Garantia de 7 dias sem questionamentos",
];

const seals = [
  { s: "🔒", t: "Compra segura" },
  { s: "⚡", t: "Acesso imediato" },
  { s: "🛡️", t: "7 dias garantia" },
  { s: "♾️", t: "Acesso anual" },
];

const OfferSection = () => {
  const ref = useReveal();

  return (
    <section id="oferta" className="offer-gradient py-[60px] text-center sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-gold-light/80">Quando foi que você fez uma limpeza no seu organismo?</span>
        <h2 className="font-display text-[30px] font-bold leading-[1.15] text-primary-foreground mb-4 sm:text-[40px] md:text-[50px]">
          Tudo que você precisa<br />para <em className="italic text-gold-light">desinflamar de verdade</em>
        </h2>
        <p className="mb-9 text-[15px] leading-[1.78] text-primary-foreground/60 sm:text-[17px]">
          Por menos que uma consulta, você tem acesso a um protocolo completo que vai reprogramar como o seu corpo funciona.
        </p>

        {/* Offer card */}
        <div className="mx-auto max-w-[460px] overflow-hidden rounded-[18px] bg-card shadow-[0_20px_64px_rgba(0,0,0,.32)]">
          {/* Top banner */}
          <div className="bg-gradient-to-br from-gold-light to-gold px-3.5 py-3.5 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-accent-foreground">🔥 OFERTA ESPECIAL — ACESSO IMEDIATO</p>
          </div>

          {/* Body */}
          <div className="px-[22px] py-7 sm:px-8 sm:py-9">
            <p className="mb-0.5 text-sm text-foreground-muted line-through">De R$397</p>
            <p className="mb-0 text-sm text-foreground-secondary">12x de</p>
            <div className="mb-1 flex items-baseline justify-center gap-0.5">
              <span className="text-lg font-bold text-sage">R$</span>
              <span className="font-display text-[76px] font-bold leading-[.92] text-sage">20</span>
              <span className="mt-2.5 self-start text-lg font-bold text-sage">,37</span>
            </div>
            <p className="mb-6 text-[13px] text-foreground-secondary">
              no cartão · ou <strong className="text-foreground">R$197,00 à vista</strong>
            </p>

            <ul className="mb-6 flex flex-col gap-[9px] text-left">
              {offerItems.map((item, i) => (
                <li key={i} className="flex items-start gap-[9px] text-[13.5px] leading-snug text-foreground">
                  <span className="mt-0.5 flex-shrink-0 text-sm font-bold text-sage">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href={CHECKOUT_URL} className="btn-cta-gradient mb-3 block w-full rounded-full px-5 py-[17px] text-center text-[15.5px] font-bold tracking-wide text-accent-foreground sm:text-[16.5px] sm:py-[18px]">
              🌿 QUERO MEU CORPO DESINFLAMADO EM 10 DIAS
            </a>
            <p className="mb-4 text-center text-[11.5px] text-foreground-muted">Pagamento 100% seguro · Acesso imediato · Cancele em 7 dias</p>

            <div className="flex flex-wrap justify-center gap-2">
              {seals.map((s, i) => (
                <div key={i} className="flex items-center gap-1 text-[10.5px] text-foreground-muted">
                  <span className="text-[13px]">{s.s}</span> {s.t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
