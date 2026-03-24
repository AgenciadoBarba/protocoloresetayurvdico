import { useReveal } from "@/hooks/useReveal";

const AyurvedaSection = () => {
  const ref = useReveal();

  return (
    <section className="bg-card py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <div className="mx-auto max-w-[740px]">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#C0DCC8] bg-sage-ultra px-3 py-1.5 text-[11px] font-bold text-sage">
            🌿 O que é Ayurveda?
          </div>

          <h2 className="font-display text-[26px] font-bold leading-[1.18] text-foreground mb-5 sm:text-[34px] md:text-[42px]">
            Uma ciência de <em className="italic text-terra">5.000 anos</em> que a medicina ocidental está só agora começando a confirmar
          </h2>

          <p className="mb-4 text-[15px] leading-[1.78] text-foreground-secondary">
            Ayurveda é um sistema milenar de saúde originado na Índia que entende o corpo de forma individualizada: o que inflama o seu corpo pode não inflamar o da sua vizinha.
          </p>

          <p className="mb-4 text-[15px] leading-[1.78] text-foreground-secondary">
            Na prática, isso significa que ao invés de uma dieta genérica "para todo mundo", o Ayurveda identifica quais alimentos, rotinas e ervas trabalham <strong className="text-foreground">a favor do SEU tipo de corpo</strong> — não contra ele.
          </p>

          <div className="mt-7 rounded-r-xl border-l-[3px] border-sage bg-sage-ultra px-[18px] py-4">
            <p className="text-[14px] leading-[1.78] text-foreground-secondary">
              <strong className="text-sage-dark">Por que uma biomédica usa Ayurveda?</strong> Porque as pesquisas modernas sobre microbioma, inflamação sistêmica e eixo intestino-cérebro confirmam o que o Ayurveda já ensinava: <strong className="text-foreground">o intestino é o centro de tudo.</strong> A Eliza une o olhar clínico da biomedicina à sabedoria ayurvédica para criar um protocolo que funciona de verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyurvedaSection;
