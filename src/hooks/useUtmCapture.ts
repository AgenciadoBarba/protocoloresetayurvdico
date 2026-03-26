import { useEffect } from "react";
import { captureUtmParams } from "@/lib/checkout";

/** Captura e persiste UTMs no localStorage ao montar a página */
export function useUtmCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);
}
