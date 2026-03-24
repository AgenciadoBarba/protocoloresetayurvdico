import { useReveal } from "@/hooks/useReveal";
import elizaPhoto from "@/assets/eliza.jpeg";

const credentials = [
  { ico: "🎓", text: "Biomédica" },
  { ico: "⏱️", text: "+10 anos em Estética Corporal" },
  { ico: "🔬", text: "Especialista em Suplementação e Metabolismo" },
];

const ElizaSectionB = () => {
  const ref = useReveal();

  return (
    <section className="bg-card py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">Quem vai te guiar nesse processo</span>

        <div className="mt-7 flex flex-col gap-8 md:grid md:grid-cols-[300px_1fr] md:items-start md:gap-[52px]">
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,.12)]">
              <img src={elizaPhoto} alt="Eliza de Lara — Biomédica e criadora do RESET" className="w-full object-cover" />
            </div>
            <div className="flex flex-col gap-2.5">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-[10px] border border-[#C0DCC8] bg-sage-ultra px-3.5 py-2.5">
                  <span className="flex-shrink-0 text-lg">{c.ico}</span>
                  <p className="text-[13px] font-semibold text-sage-dark leading-snug">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-[28px] font-bold leading-[1.15] text-foreground mb-3.5">
              Sou <em className="italic text-terra">Eliza de Lara</em>
            </h2>
            <p className="mb-3.5 text-[15px] leading-[1.78] text-foreground-secondary">
              Biomédica com mais de <strong className="text-foreground">10 anos de experiência em estética corporal</strong> e metabolismo feminino. No meu trabalho clínico, eu via repetidamente a mesma cena: mulheres com exames normais, mas corpos inflamados, hormônios desregulados e intestino comprometido — sem respostas da medicina convencional.
            </p>
            <p className="mb-3.5 text-[15px] leading-[1.78] text-foreground-secondary">
              Foi quando mergulhei no <strong className="text-foreground">Ayurveda</strong> que as peças se encaixaram. A sabedoria milenar confirmava exatamente o que eu via nos exames: o intestino é o centro de tudo. A diferença é que o Ayurveda já sabia disso há 5.000 anos — e tinha soluções naturais, práticas e individualizadas para isso.
            </p>
            <p className="mb-3.5 text-[15px] leading-[1.78] text-foreground-secondary">
              O RESET é a fusão desses dois mundos: o <strong className="text-foreground">rigor clínico da biomedicina</strong> com a precisão ayurvédica do corpo feminino. Não é um programa espiritual — é um protocolo fundamentado, com base em ciência, que respeita a complexidade da mulher moderna.
            </p>
            <p className="mb-3.5 text-[15px] leading-[1.78] text-foreground-secondary">
              Sou esposa, cristã, mentora, e vivo com o propósito de guiar mulheres para reencontrarem sua energia através de um estilo de vida <strong className="text-foreground">leve, natural e desinflamado</strong> — integrando corpo, mente, rotina e longevidade.
            </p>
            <div className="mt-5 rounded-r-xl border-l-[3px] border-terra bg-terra-ultra px-[18px] py-4">
              <p className="font-display text-[17px] italic leading-relaxed text-terra-dark">
                "A paz com o seu corpo começa quando você ENTENDE ele. E o RESET te dá exatamente isso — a linguagem do seu corpo."
              </p>
              <span className="mt-2 block text-xs font-bold text-terra">— Eliza de Lara, biomédica e criadora do RESET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElizaSectionB;
