import { useReveal } from "@/hooks/useReveal";

const ThyroidStressSection = () => {
  const ref = useReveal();

  return (
    <section className="bg-creme py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Tireoide */}
          <div className="rounded-[18px] border border-creme-3 bg-card px-[22px] py-7 sm:px-7 sm:py-8">
            <span className="mb-4 block text-[40px]">🦋</span>
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[3px] text-foreground-muted">Por que ninguém fala sobre isso</span>
            <h3 className="font-display text-[22px] font-bold leading-[1.22] text-foreground mb-3 sm:text-[26px]">
              A tireoide inflamada <em className="italic text-terra">sabota tudo</em>
            </h3>
            <p className="text-[13.5px] leading-[1.78] text-foreground-secondary">
              A inflamação intestinal cria um ciclo que afeta diretamente a produção hormonal — incluindo os hormônios tireoidianos. É por isso que tantas mulheres travam no peso, perdem cabelo e sentem frio mesmo com exames "normais". O RESET aborda esse <strong className="text-foreground">eixo intestino-tireoide</strong> de forma específica.
            </p>
          </div>

          {/* Estresse */}
          <div className="rounded-[18px] border border-creme-3 bg-card px-[22px] py-7 sm:px-7 sm:py-8">
            <span className="mb-4 block text-[40px]">🧠</span>
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[3px] text-foreground-muted">O gatilho invisível</span>
            <h3 className="font-display text-[22px] font-bold leading-[1.22] text-foreground mb-3 sm:text-[26px]">
              Estresse é inflamação — <em className="italic text-terra">literalmente</em>
            </h3>
            <p className="text-[13.5px] leading-[1.78] text-foreground-secondary">
              O cortisol elevado aumenta a permeabilidade intestinal e cria inflamação sistêmica. O RESET inclui práticas ayurvédicas de regulação do sistema nervoso que <strong className="text-foreground">diminuem o cortisol</strong> sem exigir horas de meditação — adaptadas para a rotina real da mulher moderna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThyroidStressSection;
