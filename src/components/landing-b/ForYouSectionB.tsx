import { useReveal } from "@/hooks/useReveal";
import { getCheckoutUrl, trackInitiateCheckout } from "@/lib/checkout";

const simItems = [
  "Você sente que seu corpo não responde, mesmo tentando de tudo",
  "Fez exames e ouviu \"tá tudo normal\" — mas sabe que não está",
  "Quer entender o que está causando seus sintomas de vez",
  "Está disposta a seguir um protocolo por 10 dias com consistência",
  "Quer resultados sem dieta restritiva e sem sofrimento",
  "Está cansada de recomeçar e quer algo que dure de verdade",
];

const naoItems = [
  "Você busca uma pílula mágica sem nenhum esforço",
  "Não está disposta a mudar nenhum hábito alimentar",
  "Espera perder 10kg em uma semana sem desinflamar primeiro",
  "Quer resultado sem precisar aplicar o protocolo na prática",
  "Está grávida ou amamentando — neste caso, consulte seu médico antes",
  "Prefere continuar convivendo com os sintomas a dar 10 dias ao seu corpo",
];

const ForYouSectionB = () => {
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
          <div className="flex flex-col gap-3 rounded-2xl border border-[#C0DCC8] bg-sage-ultra p-5 sm:p-6">
            <div className="flex items-center gap-2 font-display text-[17px] font-bold text-sage-dark">✅ É pra você se...</div>
            {simItems.map((t, i) => (
              <div key={i} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-sage-dark">
                <span className="mt-0.5 flex-shrink-0 text-sm">🟢</span>
                <span>{t}</span>
              </div>
            ))}
          </div>

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

        <p className="mt-6 text-center text-[15px] leading-relaxed text-foreground-secondary">
          Se você se viu na coluna verde, <strong className="text-foreground">o seu corpo está esperando por isso.</strong>
        </p>

        <div className="mt-7 text-center">
          <a href={getCheckoutUrl()} onClick={trackInitiateCheckout} className="btn-cta-gradient mx-auto block w-full rounded-full px-5 py-[18px] text-center text-base font-bold tracking-wide text-accent-foreground sm:inline-block sm:w-auto sm:px-14 sm:py-5 sm:text-[17px]">
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

export default ForYouSectionB;
