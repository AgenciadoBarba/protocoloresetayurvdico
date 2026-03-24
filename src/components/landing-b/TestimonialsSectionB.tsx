import { useReveal } from "@/hooks/useReveal";
import { getCheckoutUrl } from "@/lib/checkout";
import depoimentoAnteDepois from "@/assets/depoimento-antes-depois.jpeg";
import depoimentoWhatsapp from "@/assets/depoimento-whatsapp.jpeg";
import depoimentoInstagram from "@/assets/depoimento-instagram.jpg";
import depoimentoResultado from "@/assets/depoimento-resultado.jpg";
import depoimentoKathi from "@/assets/depoimento-kathi.jpg";

const imageTestimonials = [
  { img: depoimentoAnteDepois, alt: "Resultado real — antes e depois do protocolo RESET" },
  { img: depoimentoWhatsapp, alt: "Depoimento real de aluna via WhatsApp" },
  { img: depoimentoInstagram, alt: "Comentário espontâneo no Instagram" },
  { img: depoimentoResultado, alt: "Resultado após 3 meses do RESET" },
  { img: depoimentoKathi, alt: "Depoimento real de aluna via WhatsApp — Kathi" },
];

const TestimonialsSectionB = () => {
  const ref = useReveal();

  return (
    <section className="bg-card py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">Resultados reais</span>
        <h2 className="font-display text-[30px] font-bold leading-[1.15] text-foreground mb-4 sm:text-[40px] md:text-[50px]">
          Quando as engrenagens<br /><em className="italic text-terra">começam a funcionar...</em>
        </h2>
        <p className="mb-9 text-[15px] leading-[1.78] text-foreground-secondary sm:text-[17px]">
          Centenas de mulheres que viviam com os mesmos sintomas que você — e que hoje têm um corpo desinflamado, leve e cheio de energia.
        </p>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
          {imageTestimonials.map((t, i) => (
            <div key={i} className="overflow-hidden rounded-[14px] border border-creme-3">
              <img src={t.img} alt={t.alt} className="w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center gap-5 rounded-[14px] bg-sage-dark px-[22px] py-[26px] text-center sm:flex-row sm:gap-5 sm:px-8 sm:py-7 sm:text-left">
          <span className="flex-shrink-0 font-display text-[52px] font-bold leading-none text-gold-light">Centenas</span>
          <p className="text-sm leading-[1.65] text-primary-foreground">
            Mulheres que seguiram o RESET e <strong className="text-primary-foreground">transformaram a saúde intestinal, o sono, a disposição e a relação com o corpo.</strong>
          </p>
        </div>

        <div className="mt-14 text-center">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">Centenas de mulheres já transformaram seus corpos</span>
          <h3 className="font-display text-[28px] font-bold leading-[1.15] text-foreground mb-3 sm:text-[36px] md:text-[44px]">
            Seu corpo desinflamado<br /><em className="italic text-terra">começa hoje.</em>
          </h3>
          <p className="mx-auto mb-8 max-w-[540px] text-[15px] leading-[1.78] text-foreground-secondary sm:text-[17px]">
            Em 10 dias de protocolo, você pode ser o próximo print de resultado que uma mulher vê e pensa: <em className="italic text-foreground">"quero isso pra mim."</em>
          </p>
          <a href={getCheckoutUrl()} className="btn-cta-gradient mx-auto block w-full rounded-full px-5 py-[18px] text-center text-base font-bold tracking-wide text-accent-foreground sm:inline-block sm:w-auto sm:px-14 sm:py-5 sm:text-[17px]">
            🌿 QUERO MEU CORPO DESINFLAMADO EM 10 DIAS
          </a>
          <span className="mt-3.5 block text-[13px] text-foreground-muted">
            12x de R$10,03 · ou R$97 à vista · Garantia de 7 dias
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionB;
