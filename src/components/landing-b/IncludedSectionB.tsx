import { useReveal } from "@/hooks/useReveal";

const items = [
  { ico: "🎥", title: "Aulas em Vídeo Práticas", desc: "Protocolo completo de 10 dias pra sair do ciclo de inflamação. Aulas curtas, diretas, para assistir no celular.", tag: "Acesso permanente", price: "R$297", highlight: true },
  { ico: "🍵", title: "Guia de Chás", desc: "De acordo com cada fase do ciclo, para digestão, para desinflamação.", tag: "Bônus", price: "R$67", highlight: false },
  { ico: "⚗️", title: "Guia de Fórmulas para Manipulação", desc: "Mande manipular quando quiser — pra celulite, imunidade, disposição.", tag: "Bônus", price: "R$97", highlight: false },
  { ico: "💊", title: "Aula Bônus sobre Suplementação", desc: "Aprenda os principais suplementos para saúde feminina.", tag: "Bônus", price: "R$77", highlight: false },
  { ico: "👥", title: "Comunidade no Instagram Privado", desc: "Acesso ao perfil privado com encontros, desafios, aulas e receitinhas.", tag: "Bônus", price: "R$120", highlight: true },
  { ico: "📹", title: "Protocolo de Desparasitação", desc: "Ervas para eliminação de parasitas — o passo que a maioria ignora e que faz toda a diferença.", tag: "Bônus", price: "R$77 — grátis", highlight: false },
];

const steps = [
  "Você entra e <strong>assiste as aulas</strong> — curtas e diretas",
  "Baixa o <strong>passo a passo</strong> completo (ervas, práticas, alimentos)",
  "Tira dúvidas na <strong>área de membros</strong> da plataforma, diariamente",
  "Entra na <strong>comunidade</strong> para se manter incentivada",
];

const IncludedSectionB = () => {
  const ref = useReveal();

  return (
    <section className="bg-creme py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">O que você recebe</span>
        <h2 className="font-display text-[30px] font-bold leading-[1.15] text-foreground mb-4 sm:text-[40px] md:text-[50px]">
          E como é o RESET<br /><em className="italic text-terra">no detalhe?</em>
        </h2>
        <p className="mb-9 text-[15px] leading-[1.78] text-foreground-secondary sm:text-[17px]">
          Tudo que você precisa para desinflamar de verdade — em um único lugar, com suporte real.
        </p>

        {/* Value comparison */}
        <div className="mb-9 flex flex-col items-center gap-3 rounded-[14px] border border-creme-3 bg-card px-6 py-7 text-center sm:flex-row sm:justify-center sm:gap-8 sm:px-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-foreground-muted">Valor total do que você recebe</p>
            <p className="font-display text-[36px] font-bold text-foreground line-through sm:text-[42px]">R$ 658,00</p>
          </div>
          <span className="hidden text-[32px] text-foreground-muted sm:block">→</span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-sage">Você paga apenas</p>
            <p className="font-display text-[36px] font-bold text-sage sm:text-[42px]">R$ 97,00</p>
            <p className="text-[12px] text-foreground-muted">ou 12x de R$10,03 no cartão</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className={`flex flex-col gap-[7px] rounded-[13px] px-[18px] py-[22px] ${item.highlight ? "border-2 border-sage-light bg-sage-ultra" : "border border-creme-3 bg-card"}`}>
              <span className="text-[26px]">{item.ico}</span>
              <h4 className={`font-display text-base font-bold leading-[1.28] ${item.highlight ? "text-sage-dark" : "text-foreground"}`}>{item.title}</h4>
              <p className="flex-1 text-[12.5px] leading-relaxed text-foreground-secondary">{item.desc}</p>
              <div className="flex items-center gap-2">
                <span className={`w-fit rounded-full px-[9px] py-[3px] text-[10px] font-bold ${item.highlight ? "bg-sage/15 text-sage" : "bg-sage-ultra text-sage"}`}>{item.tag}</span>
                <span className="text-[11px] font-bold text-foreground-muted line-through">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Path */}
        <div className="sage-gradient mt-9 flex flex-col gap-6 rounded-2xl px-[22px] py-[30px] sm:px-8 sm:py-9 md:grid md:grid-cols-2 md:items-center md:gap-11">
          <div>
            <h4 className="font-display text-[22px] font-bold leading-[1.2] text-primary-foreground mb-1.5">Com um caminho descomplicado:</h4>
            <p className="text-[13.5px] leading-relaxed text-primary-foreground/60">Cabe na sua rotina. Sem horas por dia, sem ingredientes caros.</p>
          </div>
          <div className="flex flex-col gap-[13px]">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex-shrink-0 text-sm font-bold text-gold-light">&gt;&gt;</span>
                <p className="text-[13.5px] leading-relaxed text-primary-foreground/80" dangerouslySetInnerHTML={{ __html: s }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedSectionB;
