import { useReveal } from "@/hooks/useReveal";
import { getCheckoutUrl, trackInitiateCheckout } from "@/lib/checkout";

const offerItems = [
  { text: "Protocolo RESET completo em vídeo (10 dias)", price: null },
  { text: "Guia de Chás para Digestão e Ciclo", price: "R$67" },
  { text: "Fórmulas Prontas para Manipulação", price: "R$97" },
  { text: "Protocolo de Desparasitação", price: "R$77" },
  { text: "Aula Bônus sobre Suplementação Feminina", price: null },
  { text: "Comunidade anual + encontros ao vivo", price: "R$120" },
  { text: "Suporte diário na área de membros", price: null },
  { text: "🛡️ Garantia de 7 dias — 100% do seu dinheiro de volta", bold: true },
];

const seals = [
  { s: "🔒", t: "SSL Seguro" },
  { s: "💳", t: "Parcelado" },
  { s: "📱", t: "Acesso no celular" },
  { s: "🛡️", t: "7 dias de garantia" },
];

const OfferSection = () => {
  const ref = useReveal();

  return (
    <section id="oferta" className="offer-gradient py-[60px] text-center sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[560px] px-5 sm:px-7 md:px-8">
        <div className="mb-7 inline-block rounded-full bg-gradient-to-br from-gold-light to-gold px-[18px] py-1.5 text-[10px] font-bold uppercase tracking-[3px] text-primary-foreground">
          🔥 Oferta especial — acesso imediato
        </div>

        {/* Offer card */}
        <div className="overflow-hidden rounded-[18px] bg-card shadow-[0_24px_60px_rgba(0,0,0,.25)]">
          {/* Top banner */}
          <div className="bg-gradient-to-br from-gold-light to-gold px-3.5 py-3.5 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-primary-foreground">🔥 OFERTA ESPECIAL — ACESSO IMEDIATO</p>
          </div>

          {/* Body */}
          <div className="px-[22px] py-7 sm:px-8 sm:py-9">
            <p className="mb-1 text-sm text-foreground-muted">De <span className="line-through">R$658,00</span> por</p>
            <div className="mb-1 flex items-baseline justify-center gap-0.5">
              <span className="text-lg font-bold text-sage">R$</span>
              <span className="font-display text-[80px] font-bold leading-[.9] text-sage">97</span>
              <span className="mt-2.5 self-start text-lg font-bold text-sage">,00</span>
            </div>
            <p className="mb-5 text-[13px] text-foreground-secondary">
              à vista · ou <strong className="text-foreground">12x de R$10,03</strong> no cartão
            </p>

            <ul className="mb-5 flex flex-col gap-[8px] text-left">
              {offerItems.map((item, i) => (
                <li key={i} className="flex items-start gap-[8px] text-[13.5px] leading-snug text-foreground">
                  <span className="mt-0.5 flex-shrink-0 text-sm font-bold text-sage">✓</span>
                  <span>
                    {(item as any).bold ? (
                      <strong>{item.text}</strong>
                    ) : (
                      <>
                        {item.text}
                        {item.price && <span className="ml-1 text-foreground-muted line-through">({item.price})</span>}
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <a href={getCheckoutUrl()} onClick={trackInitiateCheckout} className="btn-cta-gradient mb-3 block w-full rounded-full px-5 py-[18px] text-center text-[15.5px] font-bold tracking-wide text-accent-foreground sm:text-[16.5px]">
              🌿 QUERO MEU CORPO DESINFLAMADO EM 10 DIAS
            </a>
            <p className="mb-4 text-center text-[11.5px] text-foreground-muted">Pagamento 100% seguro · Acesso imediato · Cancele em 7 dias sem perguntas</p>

            <div className="flex flex-wrap justify-center gap-3">
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
