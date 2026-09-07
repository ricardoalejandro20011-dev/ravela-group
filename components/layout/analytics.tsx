"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track, type ConversionEvent } from "@/lib/analytics";
export function Analytics() {
  const path = usePathname();
  useEffect(() => {
    if (path.startsWith("/soluciones/")) track("service_view", { path });
    if (path === "/casos-de-exito" || path.startsWith("/casos/"))
      track("case_use_view", { path });
  }, [path]);
  useEffect(() => {
    function click(e: MouseEvent) {
      const el = (e.target as Element).closest("a");
      if (!el) return;
      const event = el.getAttribute("data-event");
      if (event) track(event as ConversionEvent);
      else if (el.href.includes("wa.me")) track("whatsapp_click");
    }
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  return null;
}
