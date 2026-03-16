import { useReveal } from "@/hooks/useReveal";
import depoimentoAnteDepois from "@/assets/depoimento-antes-depois.jpeg";
import depoimentoWhatsapp from "@/assets/depoimento-whatsapp.jpeg";
import depoimentoInstagram from "@/assets/depoimento-instagram.jpg";
import depoimentoResultado from "@/assets/depoimento-resultado.jpg";
import depoimentoKathi from "@/assets/depoimento-kathi.jpg";

const imageTestimonials = [
  { img: depoimentoAnteDepois, caption: "Resultado real — antes e depois do protocolo RESET" },
  { img: depoimentoWhatsapp, caption: "Depoimento real de aluna via WhatsApp" },
  { img: depoimentoInstagram, caption: "Comentário espontâneo no Instagram" },
  { img: depoimentoResultado, caption: "Resultado após 3 meses do RESET" },
  { img: depoimentoKathi, caption: "Depoimento real de aluna via WhatsApp" },
];

const featuredTestimonial = {
  name: "Daiane G.",
  role: "Aluna RESET",
  text: "\"...saiba que o que você faz é incrível, <strong>não é apenas um curso, é UMA SALVAÇÃO, UM RETORNO DE ESPERANÇA, RESGATE DE AUTOESTIMA E MUITO MAIS.</strong> Parabéns pelo seu trabalho e continue...\"",
};

const TestimonialsSection = () => {
  const ref = useReveal();

  return (
    <section className="bg-card py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">Resultados reais</span>
        <h2 className="font-display text-[30px] font-bold leading-[1.15] text-foreground mb-4 sm:text-[40px] md:text-[50px]">
          Quando as engrenagens<br /><em className="italic text-terra">começam a funcionar...</em>
        </h2>
        <p className="mb-9 text-[15px] leading-[1.78] text-foreground-secondary sm:text-[17px]">
          88+ mulheres que viviam com os mesmos sintomas que você — e que hoje têm um corpo desinflamado, leve e cheio de energia.
        </p>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
          {imageTestimonials.map((t, i) => (
            <div key={i} className="overflow-hidden rounded-[14px] border border-creme-3 bg-creme">
              <img src={t.img} alt={t.caption} className="w-full object-cover" loading="lazy" />
              <div className="px-4 py-3">
                <div className="mb-1.5 text-[13px] tracking-[2px] text-gold">★★★★★</div>
                <p className="text-[13px] leading-snug text-foreground-secondary">{t.caption}</p>
              </div>
            </div>
          ))}

          {/* Featured text testimonial */}
          <div className="relative rounded-[14px] border border-creme-3 bg-creme px-[18px] py-[22px] sm:px-[22px] sm:py-[26px]">
            <div className="mb-2.5 text-[13px] tracking-[2px] text-gold">★★★★★</div>
            <blockquote
              className="mb-4 text-[13.5px] italic leading-[1.75] text-foreground"
              dangerouslySetInnerHTML={{ __html: featuredTestimonial.text }}
            />
            <div className="flex items-center gap-2.5 border-t border-creme-3 pt-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-sage-ultra text-[11px] font-bold text-sage">DA</div>
              <div>
                <span className="block text-[12.5px] font-bold text-foreground">{featuredTestimonial.name}</span>
                <span className="text-[11px] text-foreground-muted">{featuredTestimonial.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Numbers banner */}
        <div className="mt-9 flex flex-col items-center gap-5 rounded-[14px] bg-sage-dark px-[22px] py-[26px] text-center sm:flex-row sm:gap-5 sm:px-8 sm:py-7 sm:text-left">
          <span className="flex-shrink-0 font-display text-[52px] font-bold leading-none text-gold-light">88+</span>
          <p className="text-sm leading-[1.65] text-primary-foreground">
            Mulheres que seguiram o RESET e <strong className="text-primary-foreground">transformaram a saúde intestinal, o sono, a disposição e a relação com o corpo.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
