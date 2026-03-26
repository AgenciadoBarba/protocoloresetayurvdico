const BASE_CHECKOUT_URL = "https://pay.kiwify.com.br/kQKOitt";

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "src", "sck"];
const STORAGE_KEY = "reset_utm_params";

/** Salva UTMs da URL no localStorage na primeira visita */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return;

  const currentParams = new URLSearchParams(window.location.search);
  const hasUtm = UTM_PARAMS.some((p) => currentParams.has(p));

  if (hasUtm) {
    const utms: Record<string, string> = {};
    UTM_PARAMS.forEach((p) => {
      const v = currentParams.get(p);
      if (v) utms[p] = v;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
  }
}

/** Recupera UTMs salvos */
function getSavedUtms(): Record<string, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getCheckoutUrl(): string {
  if (typeof window === "undefined") return BASE_CHECKOUT_URL;

  // Prioriza params da URL atual, depois localStorage
  const currentParams = new URLSearchParams(window.location.search);
  const saved = getSavedUtms();
  const checkoutParams = new URLSearchParams();

  UTM_PARAMS.forEach((param) => {
    const value = currentParams.get(param) || saved[param];
    if (value) checkoutParams.set(param, value);
  });

  const qs = checkoutParams.toString();
  return qs ? `${BASE_CHECKOUT_URL}?${qs}` : BASE_CHECKOUT_URL;
}

/** Dispara evento InitiateCheckout no Meta Pixel */
export function trackInitiateCheckout(): void {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "InitiateCheckout");
  }
}
