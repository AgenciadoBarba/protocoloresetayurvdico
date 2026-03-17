import { useReveal } from "@/hooks/useReveal";

const items = [
  { ico: "🎥", title: "Aulas em Vídeo Práticas", desc: "Curtas, diretas e fáceis de aplicar. Ferramentas reais para reduzir a inflamação no seu cotidiano.", tag: "Acesso anual", highlight: true },
  { ico: "📋", title: "Guia Passo a Passo Completo", desc: "O que fazer em cada dia: práticas, ervas e rotinas direcionadas para o seu tipo de corpo.", tag: "PDF completo", highlight: false },
  { ico: "🍵", title: "Guia de Chás para Digestão e Ciclo", desc: "Combinações específicas para desinflamar o intestino, equilibrar o ciclo e reduzir a TPM.", tag: "Incluso", highlight: false },
  { ico: "⚗️", title: "Fórmulas Prontas para Manipulação", desc: "As fórmulas exatas para manipular as ervas ayurvédicas — sem erro, sem perda de tempo.", tag: "Bônus", highlight: false },
  { ico: "🌱", title: "Desparasitação com Tintura", desc: "Protocolo com ervas específicas para eliminação de parasitas — parte fundamental da desinflamação.", tag: "Incluso", highlight: false },
  { ico: "👥", title: "Comunidade no Instagram Privado", desc: "Perfil exclusivo para alunas com trocas, desafios e relacionamento. Dúvidas são tiradas na área de membros da plataforma, diariamente.", tag: "Acesso anual", highlight: true },
];

const steps = [
  "Você entra e <strong>assiste as aulas</strong> — curtas e diretas",
  "Baixa o <strong>passo a passo</strong> completo (ervas, práticas, alimentos)",
  "Aplica com <strong>suporte por WhatsApp</strong> para dúvidas",
  "Entra na <strong>comunidade</strong> para se manter incentivada",
];

const IncludedSection = () => {
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

        <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className={`flex flex-col gap-[7px] rounded-[13px] px-[18px] py-[22px] ${item.highlight ? "border-2 border-sage-light bg-sage-ultra" : "border border-creme-3 bg-card"}`}>
              <span className="text-[26px]">{item.ico}</span>
              <h4 className={`font-display text-base font-bold leading-[1.28] ${item.highlight ? "text-sage-dark" : "text-foreground"}`}>{item.title}</h4>
              <p className="flex-1 text-[12.5px] leading-relaxed text-foreground-secondary">{item.desc}</p>
              <span className={`w-fit rounded-full px-[9px] py-[3px] text-[10px] font-bold ${item.highlight ? "bg-sage/15 text-sage" : "bg-sage-ultra text-sage"}`}>{item.tag}</span>
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

export default IncludedSection;
