import { useReveal } from "@/hooks/useReveal";

const simItems = [
  "Você sente que seu corpo não responde, mesmo tentando de tudo",
  "Fez exames e ouviu \"tá tudo normal\" — mas sabe que não está",
  "Quer entender o que está causando seus sintomas de vez",
  "Está disposta a seguir um protocolo por 21 dias com consistência",
  "Quer resultados sem dieta restritiva e sem sofrimento",
  "Está cansada de recomeçar e quer algo que dure de verdade",
];

const naoItems = [
  "Você busca uma pílula mágica sem nenhum esforço",
  "Não está disposta a mudar nenhum hábito alimentar",
  "Espera perder 10kg em uma semana sem desinflamar primeiro",
  "Quer um resultado sem precisar aplicar o protocolo na prática",
];

const ForYouSection = () => {
  const ref = useReveal();

  return (
    <section className="bg-card py-[60px] sm:py-20">
      <div ref={ref} className="reveal-section mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[3px] text-sage">Seja honesta com você</span>
        <h2 className="font-display text-[30px] font-bold leading-[1.15] text-foreground mb-4 text-center sm:text-[40px] md:text-[50px]">
          Este protocolo <em className="italic text-terra">é pra você</em><br />
          <span className="italic text-sage">— e quando não é</span>
        </h2>

        <div className="mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
          {/* SIM */}
          <div className="flex flex-col gap-3 rounded-2xl border border-[#C0DCC8] bg-sage-ultra p-5 sm:p-6">
            <div className="flex items-center gap-2 font-display text-[17px] font-bold text-sage-dark">✅ É pra você se...</div>
            {simItems.map((t, i) => (
              <div key={i} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-sage-dark">
                <span className="mt-0.5 flex-shrink-0 text-sm">🟢</span>
                <span>{t}</span>
              </div>
            ))}
          </div>

          {/* NÃO */}
          <div className="flex flex-col gap-3 rounded-2xl border border-[#F5C0C0] bg-[#FFF5F5] p-5 sm:p-6">
            <div className="flex items-center gap-2 font-display text-[17px] font-bold text-destructive">❌ Não é pra você se...</div>
            {naoItems.map((t, i) => (
              <div key={i} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#7A2020]">
                <span className="mt-0.5 flex-shrink-0 text-sm">🔴</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
