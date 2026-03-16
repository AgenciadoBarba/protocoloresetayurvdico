import { useReveal } from "@/hooks/useReveal";

const items = [
  { ico: "🎥", title: "Aulas em Vídeo com Acesso Anual", desc: "Conteúdo gravado, direto ao ponto, para você assistir no seu ritmo e revisitar quando quiser.", tag: "Acesso anual", highlight: true },
  { ico: "📋", title: "Guia Passo a Passo (PDF)", desc: "O que fazer em cada dia do protocolo: práticas, ervas e rotinas direcionadas para o seu tipo de corpo.", tag: "PDF completo", highlight: false },
  { ico: "🍵", title: "Guia de Chás para Digestão e Ciclo", desc: "Combinações específicas para desinflamar o intestino, equilibrar o ciclo e reduzir a TPM.", tag: "Incluso", highlight: false },
  { ico: "⚗️", title: "Fórmulas Prontas para Manipulação", desc: "As fórmulas exatas para manipular as ervas ayurvédicas — sem erro, sem perda de tempo.", tag: "Bônus", highlight: false },
  { ico: "🌱", title: "Desparasitação com Tintura", desc: "Protocolo com ervas específicas para eliminação de parasitas — parte fundamental da desinflamação intestinal.", tag: "Incluso", highlight: false },
  { ico: "👥", title: "Comunidade + Suporte WhatsApp", desc: "Encontros, desafios e trocas para manter você incentivada. Tire dúvidas diretamente durante o processo.", tag: "Acesso anual", highlight: true },
];

const steps = [
  "Você entra e **assiste as aulas** — curtas e diretas ao ponto",
  "Baixa o material do **passo a passo** para desinflamar (ervas, práticas, alimentos)",
  "Aplica com **suporte por WhatsApp** caso tenha dúvidas",
  "Entra na **comunidade** para se manter incentivada com desafios e trocas",
];

const IncludedSection = () => {
  const ref = useReveal();

  return (
    <section className="bg-creme py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">O que está incluído</span>
        <h2 className="font-display text-[30px] font-bold leading-[1.15] text-foreground mb-4 sm:text-[40px] md:text-[50px]">
          Tudo que você recebe<br /><em className="italic text-terra">ao entrar no RESET</em>
        </h2>

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
            <p className="text-[13.5px] leading-relaxed text-primary-foreground/60">Cabe na sua rotina. Sem horas por dia, sem ingredientes caros, sem complicar.</p>
          </div>
          <div className="flex flex-col gap-[13px]">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex-shrink-0 text-sm font-bold text-gold-light">&gt;&gt;</span>
                <p className="text-[13.5px] leading-relaxed text-primary-foreground/80" dangerouslySetInnerHTML={{ __html: s.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
