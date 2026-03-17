import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  { q: "Preciso ter experiência com Ayurveda?", a: "Não precisa saber nada. O protocolo foi criado para mulheres que nunca ouviram falar em Ayurveda. Você aprende do zero, com linguagem simples e aplicação imediata." },
  { q: "É uma dieta restritiva? Vou passar fome?", a: "Não. O RESET não é uma dieta — é um protocolo. Você aprende o que inflama o seu tipo de corpo e como substituir com alimentos que já tem em casa. Sem fome, sem privação." },
  { q: "Em quanto tempo vou sentir resultados?", a: "A maioria das alunas relata melhora no inchaço e no intestino nos primeiros 3 a 7 dias. Os resultados mais profundos — sono, hormônios, disposição, libido — aparecem ao longo dos 10 dias." },
  { q: "Posso fazer mesmo tomando medicamentos?", a: "Para a maioria das pessoas, sim. O protocolo é baseado em alimentação e práticas naturais. Sempre recomendamos consultar seu médico antes de iniciar qualquer mudança de rotina." },
  { q: "Como vou acessar o conteúdo?", a: "Acesso 100% digital e imediato. Após a confirmação do pagamento você recebe e-mail com login e senha. Disponível no celular, tablet ou computador — acesso anual com renovação disponível." },
  { q: "E se eu não gostar? Como funciona a garantia?", a: "7 dias de garantia total. Basta enviar um e-mail e você recebe 100% do valor de volta, sem precisar dar nenhuma explicação. Sem burocracia, sem \"por quê\"." },
  { q: "Vou ter suporte durante o protocolo?", a: "Sim. Suas dúvidas são tiradas diretamente na plataforma, na área de membros, diariamente, sem exceção. Além disso, você tem acesso a um perfil privado no Instagram como comunidade para trocas e relacionamento." },
];

const FAQSection = () => {
  const ref = useReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-card py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">Dúvidas frequentes</span>
        <h2 className="font-display text-[30px] font-bold leading-[1.15] text-foreground mb-4 text-center sm:text-[40px] md:text-[50px]">
          Respostas para o que você<br /><em className="italic text-terra">ainda está pensando</em>
        </h2>

        <div className="mx-auto mt-9 flex max-w-[740px] flex-col gap-[9px]">
          {faqs.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-[11px] border border-creme-3 bg-creme">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-[18px] py-4 text-left text-sm font-semibold text-foreground sm:px-[22px] sm:py-[18px] sm:text-[15px]"
              >
                {f.q}
                <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage text-base font-light text-primary-foreground transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                  +
                </div>
              </button>
              <div
                className="overflow-hidden transition-all duration-350"
                style={{ maxHeight: open === i ? "320px" : "0", padding: open === i ? "0 18px 16px" : "0 18px 0" }}
              >
                <p className="text-[13.5px] leading-[1.75] text-foreground-secondary sm:text-sm">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
