const BASE_CHECKOUT_URL = "https://pay.kiwify.com.br/kQKOitt";

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "src", "sck"];

export function getCheckoutUrl(): string {
  if (typeof window === "undefined") return BASE_CHECKOUT_URL;

  const currentParams = new URLSearchParams(window.location.search);
  const checkoutParams = new URLSearchParams();

  UTM_PARAMS.forEach((param) => {
    const value = currentParams.get(param);
    if (value) checkoutParams.set(param, value);
  });

  const qs = checkoutParams.toString();
  return qs ? `${BASE_CHECKOUT_URL}?${qs}` : BASE_CHECKOUT_URL;
}
