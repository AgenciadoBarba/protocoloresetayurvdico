import { useState, useEffect } from "react";
import { getCheckoutUrl } from "@/lib/checkout";


const StickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-gradient-to-r from-gold-light to-gold px-5 py-[13px] shadow-[0_-3px_14px_rgba(0,0,0,.18)] md:hidden">
      <a href={getCheckoutUrl()} className="block text-center text-[14.5px] font-bold text-accent-foreground no-underline">
        🌿 QUERO MEU CORPO DESINFLAMADO EM 10 DIAS
      </a>
    </div>
  );
};

export default StickyBar;
