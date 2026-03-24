import { useReveal } from "@/hooks/useReveal";

const steps = [
  { ico: "🔍", title: "Diagnóstico", desc: "Identifique seu tipo de corpo e o que te inflama" },
  { ico: "🌿", title: "Alimentação", desc: "Alimentos e ervas que desinflamam o seu dosha" },
  { ico: "🦠", title: "Intestino", desc: "Restaure a microbiota e elimine a inflamação intestinal" },
  { ico: "⚖️", title: "Hormônios", desc: "Tireoide, cortisol e ciclo menstrual se regulam" },
  { ico: "✨", title: "Corpo Livre", desc: "Energia, leveza e um corpo que finalmente te responde" },
];

const TimelineSection = () => {
  const ref = useReveal();

  return (
    <section className="bg-card py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <div className="mb-9 text-center">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">Como o RESET funciona na prática</span>
          <h2 className="font-display text-[26px] font-bold leading-[1.15] text-foreground sm:text-[34px] md:text-[42px]">
            Da inflamação silenciosa ao corpo que responde — <em className="italic text-terra">em 10 dias</em>
          </h2>
        </div>

        <div className="mx-auto flex max-w-[700px] flex-col gap-0">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Vertical line + dot */}
              <div className="flex flex-col items-center">
                <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full border-2 border-sage bg-sage-ultra text-[24px]">
                  {s.ico}
                </div>
                {i < steps.length - 1 && (
                  <div className="h-[40px] w-[2px] bg-sage/30" />
                )}
              </div>
              <div className="pb-5 pt-2.5">
                <h4 className="font-display text-[16px] font-bold text-foreground mb-0.5">{s.title}</h4>
                <p className="text-[13.5px] leading-relaxed text-foreground-secondary">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
