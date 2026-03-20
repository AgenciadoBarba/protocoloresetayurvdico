import { useState, useEffect } from "react";

const TopBar = () => {
  const [time, setTime] = useState("23:47:12");

  useEffect(() => {
    const KEY = "reset_deadline";
    let deadline = localStorage.getItem(KEY);
    if (!deadline) {
      deadline = String(Date.now() + (23 * 3600 + 47 * 60 + 12) * 1000);
      localStorage.setItem(KEY, deadline);
    }
    const dl = parseInt(deadline);

    const tick = () => {
      const diff = dl - Date.now();
      if (diff <= 0) {
        setTime("00:00:00");
        return;
      }
      const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="sticky top-0 z-[100] bg-sage-dark px-5 py-2.5 text-center text-[13px] font-medium text-primary-foreground leading-relaxed">
      🌿 <span className="text-gold-light font-semibold">TURMA ABERTA</span> — Encerra em{" "}
      <span className="font-bold text-gold-light tabular-nums">{time}</span>
    </div>
  );
};

export default TopBar;
