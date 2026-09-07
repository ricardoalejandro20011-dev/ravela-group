export type ConversionEvent =
  | "hero_diagnostico_click"
  | "hero_whatsapp_click"
  | "diagnostico_start"
  | "diagnostico_complete"
  | "roi_calculator_use"
  | "contact_submit"
  | "whatsapp_click"
  | "service_view"
  | "case_use_view";
export function track(
  event: ConversionEvent,
  properties: Record<string, string> = {},
) {
  if (typeof window === "undefined") return;
  const target = window as Window & { dataLayer?: Record<string, unknown>[] };
  target.dataLayer = target.dataLayer || [];
  target.dataLayer.push({ event, ...properties });
  window.dispatchEvent(
    new CustomEvent("ravela:analytics", { detail: { event, ...properties } }),
  );
}
