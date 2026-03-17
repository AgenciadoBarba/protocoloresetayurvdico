import { useReveal } from "@/hooks/useReveal";

const checkItems = [
  { title: "Sem dieta restritiva", desc: "Você aprende o que inflama o seu tipo de corpo. Sem privação, sem sofrimento, sem recomeçar." },
  { title: "Respeita seu ciclo feminino", desc: "O Ayurveda entende o corpo da mulher — feito para suas especificidades hormonais." },
  { title: "Resultados que ficam", desc: "Não é detox de 3 dias. É uma reprogramação para o corpo te responder sempre." },
];

const pillars = ["Digestão Eficiente", "Sono e Ciclo Biológico Ajustados", "Intestino Saudável"];

const MethodSection = () => {
  const ref = useReveal();

  return (
    <section className="bg-creme py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <div className="mb-11 text-center">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">O outro caminho existe</span>
          <h2 className="font-display text-[30px] font-bold leading-[1.15] text-foreground mb-4 sm:text-[40px] md:text-[50px]">
            Corpo funciona<br /><em className="italic text-terra">como engrenagens</em>
          </h2>
          <p className="text-[15px] leading-[1.78] text-foreground-secondary sm:text-[17px]">
            As peças precisam estar no lugar certo, receber manutenção e ajustes para funcionarem. Quando todas se encaixam, o resultado é <strong className="text-foreground">INEVITÁVEL.</strong>
          </p>
        </div>

        <div className="flex flex-col gap-9 md:grid md:grid-cols-2 md:items-center md:gap-14">
          {/* Left - Method */}
          <div>
            <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#C0DCC8] bg-sage-ultra px-3 py-1.5 text-[11px] font-bold text-sage">
              🌿 O método RESET
            </div>
            <h3 className="font-display text-[28px] font-bold leading-[1.15] text-foreground mb-3">
              Em <em className="italic text-terra">10 dias</em>, seu corpo trabalha a seu favor
            </h3>
            <p className="mb-3.5 text-sm leading-[1.78] text-foreground-secondary">
              Respeitando seu ciclo biológico e desinflamando seu intestino, seu corpo passa a te responder. Não é magia — é o seu corpo funcionando como deveria.
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {checkItems.map((c, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-sage text-[10px] font-bold text-primary-foreground">✓</div>
                  <div>
                    <strong className="block text-[14.5px] text-foreground mb-0.5">{c.title}</strong>
                    <p className="text-[13px] leading-relaxed text-foreground-secondary">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Pillars box */}
          <div className="relative overflow-hidden rounded-[18px] border border-[#C0DCC8] bg-sage-ultra px-[22px] py-7 text-center sm:px-[30px] sm:py-9">
            <span className="pointer-events-none absolute -right-2 -top-2 text-[90px] opacity-[.06] leading-none">⚙️</span>
            <span className="pointer-events-none absolute -bottom-[18px] -left-1 text-[72px] opacity-[.06] leading-none">⚙️</span>
            <span className="relative z-10 mb-3.5 block text-[44px]">🌿</span>
            <h4 className="relative z-10 font-display text-xl font-bold leading-[1.28] text-sage-dark mb-2.5 sm:text-2xl">
              Para desinflamar de verdade, você precisa desses 3 pilares:
            </h4>
            <div className="relative z-10 flex flex-col gap-[9px]">
              {pillars.map((p, i) => (
                <div key={i} className="flex items-center gap-[11px] rounded-[10px] border border-[#C0DCC8] bg-card px-[15px] py-[11px]">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sage text-xs font-bold text-primary-foreground">{i + 1}</div>
                  <p className="text-[13px] font-semibold text-sage-dark">{p}</p>
                </div>
              ))}
            </div>
            <p className="relative z-10 mt-4 text-[13.5px] leading-[1.7] text-sage">
              O RESET atua diretamente sobre esses 3 pilares — e também sobre <strong className="text-sage-dark">tireoide, estresse e suplementação.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
