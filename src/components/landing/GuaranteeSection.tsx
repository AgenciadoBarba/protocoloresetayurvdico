import { useReveal } from "@/hooks/useReveal";

const GuaranteeSection = () => {
  const ref = useReveal();

  return (
    <section className="bg-creme py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <div className="mx-auto max-w-[620px] rounded-[18px] border-2 border-[#C0DCC8] bg-card px-[22px] py-8 text-center sm:px-10 sm:py-11">
          <span className="mb-4 block text-[52px] sm:text-[64px]">🛡️</span>
          <h3 className="font-display text-[26px] font-bold leading-[1.22] text-foreground mb-3 sm:text-[32px]">
            Garantia de <em className="italic text-sage">7 dias</em><br />sem letras miúdas
          </h3>
          <p className="text-[14.5px] leading-[1.78] text-foreground-secondary">
            Se em 7 dias você não sentir nenhuma diferença — ou simplesmente mudar de ideia — devolvo <strong className="text-foreground">100% do seu dinheiro</strong>, sem questionamentos, sem burocracia, sem precisar dar nenhuma explicação. Você não tem nada a perder. Só a inflamação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
