import { useReveal } from "@/hooks/useReveal";

const refundSteps = [
  "Envie um e-mail para <strong>contato@elizadelara.com.br</strong> com o assunto \"Reembolso RESET\"",
  "Não precisa dar nenhuma explicação — basta informar seu nome e o e-mail de cadastro",
  "O valor é estornado em até 7 dias úteis diretamente no seu cartão ou conta — sem perguntas, sem burocracia",
];

const GuaranteeSectionB = () => {
  const ref = useReveal();

  return (
    <section className="bg-creme py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <div className="mx-auto max-w-[620px] rounded-[18px] border-2 border-[#C0DCC8] bg-card px-[22px] py-8 text-center sm:px-10 sm:py-11">
          <span className="mb-4 block text-[52px] sm:text-[64px]">🛡️</span>
          <h3 className="font-display text-[26px] font-bold leading-[1.22] text-foreground mb-3 sm:text-[32px]">
            Garantia de <em className="italic text-sage">7 dias</em><br />sem letras miúdas
          </h3>
          <p className="mb-6 text-[14.5px] leading-[1.78] text-foreground-secondary">
            Se em 7 dias você não sentir nenhuma diferença — ou simplesmente mudar de ideia — devolvo <strong className="text-foreground">100% do seu dinheiro</strong>, sem questionamentos, sem burocracia, sem precisar dar nenhuma explicação.
          </p>

          {/* Refund steps */}
          <div className="mx-auto max-w-[440px] text-left">
            <p className="mb-3 text-[13px] font-bold text-foreground">Como solicitar o reembolso:</p>
            <div className="flex flex-col gap-3">
              {refundSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage text-[11px] font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  <p className="text-[13px] leading-relaxed text-foreground-secondary" dangerouslySetInnerHTML={{ __html: step }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSectionB;
