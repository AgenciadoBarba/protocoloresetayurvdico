import { useReveal } from "@/hooks/useReveal";

const painCards = [
  { ico: "🔥", text: "Falta de libido, TPM forte, ciclo desregulado" },
  { ico: "🫃", text: "Inchaço abdominal e distensão — com ou sem comer errado" },
  { ico: "💧", text: "Retenção de líquidos, acorda com rosto e corpo inchados" },
  { ico: "😴", text: "Cansaço constante, mesmo dormindo bem a noite toda" },
  { ico: "⚖️", text: "Dificuldade em perder peso — metabolismo travado" },
  { ico: "💇", text: "O cabelo cai loucamente, pele apagada e acneica" },
  { ico: "💨", text: "Gases, estufamento, refluxo, intestino que não funciona" },
  { ico: "🧠", text: "Névoa mental, ansiedade, irritabilidade sem motivo" },
  { ico: "🍬", text: "Come sem fome, belisca o tempo todo, vontade louca de doce" },
];

const PainSectionB = () => {
  const ref = useReveal();

  return (
    <section className="bg-creme py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">
          Isso não é normal — é inflamação
        </span>
        <h2 className="font-display text-[30px] font-bold leading-[1.15] text-foreground mb-4 sm:text-[40px] md:text-[50px]">
          Te fizeram acreditar<br />
          que era normal.<br />
          <em className="italic text-terra">Que todo mundo se sente assim:</em>
        </h2>
        <p className="mb-9 text-[15px] leading-[1.78] text-foreground-secondary sm:text-[17px]">
          Mas não é verdade. Esses sintomas têm causa — e têm solução. Os exames voltam normais porque <strong className="text-foreground">a inflamação silenciosa não aparece nos exames convencionais.</strong>
        </p>

        <div className="grid grid-cols-1 gap-[9px] sm:grid-cols-2 lg:grid-cols-3">
          {painCards.map((c, i) => (
            <div key={i} className="flex items-center gap-3 rounded-r-[10px] border-l-[3px] border-terra bg-pain-bg px-4 py-[13px]">
              <span className="flex-shrink-0 text-[19px]">{c.ico}</span>
              <p className="text-[13.5px] font-medium leading-relaxed text-pain-text">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="sage-gradient relative mt-9 overflow-hidden rounded-2xl px-[22px] py-[34px] text-center sm:px-10 sm:py-11">
          <span className="pointer-events-none absolute -top-5 left-2.5 font-display text-[160px] leading-none text-primary-foreground/[.04]">"</span>
          <h3 className="relative font-display text-[22px] font-bold leading-[1.28] text-primary-foreground mb-3 sm:text-[30px]">
            Se nada mudar, como você acha<br />que estará daqui 1 ano?
          </h3>
          <p className="relative text-sm leading-[1.72] text-primary-foreground">
            Essa foi uma das perguntas da nossa pesquisa com centenas de mulheres. A resposta mais comum: <strong className="text-[#C8F0D4]">"No limite, preciso mudar já."</strong> Você chegou até aqui por um motivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSectionB;
