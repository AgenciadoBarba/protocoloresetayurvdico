import { useReveal } from "@/hooks/useReveal";

const bonuses = [
  { ico: "⚗️", title: "Fórmulas Prontas para Manipulação", desc: "As fórmulas ayurvédicas exatas para você chegar na farmácia e fazer certinho.", valor: "R$97" },
  { ico: "🍵", title: "Guia de Chás para Digestão e Ciclo", desc: "Combinações para desinflamar, regular o ciclo menstrual e reduzir TPM — com posologia e horários.", valor: "R$67" },
  { ico: "🌱", title: "Protocolo de Desparasitação", desc: "Ervas para eliminação de parasitas intestinais — um passo que a maioria ignora e que faz toda a diferença.", valor: "R$77" },
  { ico: "👥", title: "Comunidade + Encontros ao Vivo", desc: "Acesso à comunidade privada com desafios, trocas e encontros. Para você não ficar sozinha depois dos 10 dias.", valor: "R$120" },
];

const BonusSectionB = () => {
  const ref = useReveal();

  return (
    <section className="bg-card py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">Incluídos no seu acesso</span>
        <h2 className="font-display text-[30px] font-bold leading-[1.15] text-foreground mb-4 sm:text-[40px] md:text-[50px]">
          Bônus que valem mais<br /><em className="italic text-terra">do que o protocolo em si</em>
        </h2>
        <p className="mb-9 text-[15px] leading-[1.78] text-foreground-secondary sm:text-[17px]">
          Ao acessar o RESET, você recebe os materiais abaixo sem nenhum custo adicional.
        </p>

        {/* Total value banner */}
        <div className="mb-6 flex items-center justify-center gap-3 rounded-[14px] border border-gold/30 bg-gold-ultra px-6 py-5 text-center">
          <span className="text-[28px]">🎁</span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-gold">Valor total dos bônus</p>
            <p className="font-display text-[22px] font-bold text-foreground">R$361,00 — <span className="text-sage">incluídos gratuitamente no seu acesso</span></p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-2 sm:gap-3.5">
          {bonuses.map((b, i) => (
            <div key={i} className="relative overflow-hidden rounded-[13px] border-[1.5px] border-dashed border-gold bg-gold-ultra px-5 py-[26px]">
              <div className="absolute -right-[26px] top-3.5 rotate-45 bg-destructive px-[38px] py-1 text-[9px] font-bold uppercase tracking-widest text-primary-foreground">GRÁTIS</div>
              <span className="mb-3 block text-[30px]">{b.ico}</span>
              <h4 className="font-display text-base font-bold leading-[1.28] text-foreground mb-[7px]">{b.title}</h4>
              <p className="mb-2.5 text-[12.5px] leading-relaxed text-foreground-secondary">{b.desc}</p>
              <p className="text-[11.5px] font-bold text-gold">
                Incluso no protocolo <span className="ml-1 font-normal text-foreground-muted line-through">valor {b.valor}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSectionB;
