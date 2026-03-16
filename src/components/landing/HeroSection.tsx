const CHECKOUT_URL = "https://pay.kiwify.com.br/kQKOitt";

const HeroSection = () => (
  <section className="hero-gradient relative overflow-hidden px-5 py-[52px] text-center sm:px-7 sm:py-[68px]">
    {/* Decorative radials */}
    <div className="pointer-events-none absolute -right-[60px] -top-[80px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,_hsla(16,56%,50%,.2)_0%,transparent_70%)] md:-right-[100px] md:-top-[150px] md:h-[500px] md:w-[500px]" />
    <div className="pointer-events-none absolute -bottom-[60px] -left-[40px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,_hsla(43,85%,58%,.12)_0%,transparent_70%)] md:-bottom-[100px] md:-left-[60px] md:h-[380px] md:w-[380px]" />

    <div className="relative z-10 mx-auto max-w-[1060px]">
      {/* Logo */}
      <div className="mb-7 inline-flex flex-col items-center">
        <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full border-2 border-sage-light/50 bg-gradient-to-br from-[hsl(138,15%,38%)] to-sage-dark shadow-[0_0_0_5px_hsla(138,15%,42%,.15),0_10px_32px_rgba(0,0,0,.3)] sm:h-[108px] sm:w-[108px] relative overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,.12),transparent_60%)]" />
          <span className="relative z-10 text-[32px] leading-none drop-shadow-[0_0_6px_hsla(138,22%,61%,.7)] sm:text-[40px]">⏻</span>
        </div>
        <span className="mt-2.5 font-display text-[11px] font-bold uppercase tracking-[4px] text-primary-foreground/70">RESET</span>
        <span className="mt-0.5 text-[9px] uppercase tracking-[2px] text-primary-foreground/30">Detox Ayurvédico</span>
      </div>

      {/* Tag */}
      <div className="mb-5 inline-block rounded-full border border-terra/45 bg-terra/20 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[2px] text-terra-light">
        ✦ Protocolo de Desinflamação Ayurvédico
      </div>

      {/* Headline */}
      <h1 className="font-display text-[34px] font-bold leading-[1.1] text-primary-foreground mx-auto mb-5 sm:text-[50px] md:max-w-[800px] md:text-[64px] text-balance">
        O seu corpo desinflamado<br />
        e magro em <em className="italic text-terra-light">21 dias.</em>
      </h1>

      <p className="mx-auto mb-5 max-w-[580px] text-[15px] leading-[1.72] text-primary-foreground/72 sm:text-lg sm:mb-7">
        <span className="text-primary-foreground font-normal">Sem dieta restritiva, sem sofrimento,</span> <strong className="text-primary-foreground">mesmo que você acredite que já tenha tentado de tudo.</strong>
      </p>

      <p className="mx-auto mb-9 max-w-[520px] text-sm leading-[1.7] text-primary-foreground/55 sm:text-base">
        O plano completo para você parar de brigar com o seu corpo — e finalmente se tornar sua maior aliada. Você só precisa de um <strong className="text-primary-foreground/75">RESET.</strong>
      </p>

      {/* CTA */}
      <a href={CHECKOUT_URL} className="btn-cta-gradient mx-auto mb-3 block w-full rounded-full px-5 py-[18px] text-center text-base font-bold tracking-wide text-accent-foreground sm:inline-block sm:w-auto sm:px-14 sm:py-5 sm:text-[17px]">
        🌿 ESTOU PRONTA — Quero meu acesso
      </a>

      {/* Stats */}
      <div className="mt-11 flex flex-col overflow-hidden rounded-[14px] border border-primary-foreground/10 sm:mx-auto sm:max-w-[560px] sm:flex-row">
        {[
          { num: "88+", label: "mulheres já desinflamadas" },
          { num: "21", label: "dias para reprogramar seu corpo" },
          { num: "7", label: "dias de garantia — sem risco nenhum" },
        ].map((s, i) => (
          <div key={i} className="border-b border-primary-foreground/[.07] px-4 py-[18px] text-center last:border-b-0 sm:flex-1 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <strong className="mb-1 block font-display text-[34px] font-bold leading-none text-gold-light sm:text-[38px]">{s.num}</strong>
            <span className="block text-xs text-primary-foreground/48 leading-snug">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
