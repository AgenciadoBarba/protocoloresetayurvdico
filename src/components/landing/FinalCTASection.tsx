import { getCheckoutUrl, trackInitiateCheckout } from "@/lib/checkout";

const FinalCTASection = () => (
  <section className="cta-final-gradient relative overflow-hidden py-[68px] text-center sm:py-[88px]">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_hsla(16,56%,50%,.1)_0%,transparent_60%)]" />
    <div className="relative z-10 mx-auto w-full max-w-[1060px] px-5 sm:px-7 md:px-8">
      <h2 className="mx-auto mb-4 font-display text-[30px] font-bold leading-[1.15] text-primary-foreground sm:text-[40px] md:text-[50px]">
        Vai ser uma honra<br /><em className="italic text-terra-light">te guiar.</em>
      </h2>
      <p className="mb-9 text-[15px] leading-[1.78] text-primary-foreground sm:text-[17px]">
        Dê um passo em direção ao cuidado com o seu corpo. Você merece acordar disposta, com um intestino que funciona, um sono que restaura e um corpo que responde. <strong className="text-primary-foreground">Isso começa agora.</strong>
      </p>
      <a href={getCheckoutUrl()} onClick={trackInitiateCheckout} className="btn-cta-gradient mx-auto block w-full rounded-full px-5 py-[18px] text-center text-base font-bold tracking-wide text-accent-foreground sm:inline-block sm:w-auto sm:px-14 sm:py-5 sm:text-[17px]">
        🌿 QUERO MEU CORPO DESINFLAMADO EM 10 DIAS
      </a>
      <span className="mt-3.5 block text-[11.5px] text-primary-foreground">
        Garantia de 7 dias · Acesso imediato · Suporte na plataforma
      </span>
    </div>
  </section>
);

export default FinalCTASection;
