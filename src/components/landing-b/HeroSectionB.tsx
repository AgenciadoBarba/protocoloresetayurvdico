import { getCheckoutUrl } from "@/lib/checkout";

const HeroSectionB = () => (
  <section className="hero-gradient relative overflow-hidden px-5 py-[60px] text-center sm:px-7 sm:py-[72px]">
    <div className="pointer-events-none absolute -right-[60px] -top-[80px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(ellipse_at_70%_20%,_hsla(16,56%,50%,.18)_0%,transparent_55%)] md:-right-[100px] md:-top-[150px] md:h-[500px] md:w-[500px]" />
    <div className="pointer-events-none absolute -bottom-[60px] -left-[40px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(ellipse_at_20%_80%,_hsla(43,85%,58%,.12)_0%,transparent_50%)] md:-bottom-[100px] md:-left-[60px] md:h-[380px] md:w-[380px]" />

    <div className="relative z-10 mx-auto max-w-[760px]">
      <div className="mb-6 inline-block rounded-full border border-terra/45 bg-terra/20 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-terra-light">
        Já tentou de tudo e seu corpo ainda não responde?
      </div>

      <h1 className="font-display text-[36px] font-bold leading-[1.08] text-primary-foreground mx-auto mb-5 sm:text-[50px] md:text-[68px] text-balance">
        Seu corpo desinflamado,<br />
        desinchado e destravado<br />
        em <em className="italic text-terra-light">10 dias.</em>
      </h1>

      <p className="mx-auto mb-8 max-w-[560px] text-[15px] leading-[1.7] text-primary-foreground sm:text-lg">
        <strong className="text-primary-foreground">Sem dieta restritiva, sem sofrimento</strong> — mesmo que você acredite que já tentou de tudo. O plano completo para parar de brigar com o seu corpo.
      </p>

      <div className="flex flex-col overflow-hidden rounded-[14px] border border-primary-foreground/10 sm:mx-auto sm:max-w-[560px] sm:flex-row">
        {[
          { num: "Centenas", label: "de mulheres já desinflamadas" },
          { num: "10", label: "dias para reprogramar seu corpo" },
          { num: "100%", label: "digital — acesso imediato" },
        ].map((s, i) => (
          <div key={i} className="border-b border-primary-foreground/[.07] px-4 py-[18px] text-center last:border-b-0 sm:flex-1 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <strong className="mb-1 block font-display text-[34px] font-bold leading-none text-gold-light sm:text-[38px]">{s.num}</strong>
            <span className="block text-[11px] text-primary-foreground/60 leading-snug">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSectionB;
