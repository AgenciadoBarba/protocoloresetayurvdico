import { useReveal } from "@/hooks/useReveal";

const PeaceStrip = () => {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal-section border-y border-terra-light/40 bg-terra-ultra px-5 py-11 text-center sm:px-7 sm:py-14">
      <p className="mx-auto max-w-[600px] font-display text-2xl font-bold leading-[1.38] text-terra-dark sm:text-[34px]">
        "A paz com o seu corpo começa<br />quando você <em className="italic text-terra">ENTENDE</em> ele."
      </p>
    </section>
  );
};

export default PeaceStrip;
