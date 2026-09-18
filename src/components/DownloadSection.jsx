import React from "react";
import catalogPdf from "../assets/Catalog Rebirth Collection.pdf";
import logisticaTavoletteRinascita from "../assets/logistics/logisticaTavoletteRinascita.pdf";
import logisticRebirthCollection from "../assets/logistics/logisticRebirthCollection.pdf";
import schedatecnicaitaliano from "../assets/technical data/Schede_Tecniche_Italiano_valori .pdf";
import schedatecnicainglese from "../assets/technical data/Schede tecniche inglese con valori .pdf";
import { useContextLanguage } from "../contextLanguages";

function DownloadSection() {
  const { language } = useContextLanguage();
  return (
    <div className="mt-10 mb-10 flex flex-wrap justify-center gap-6 md:gap-12">
      <a
        href={catalogPdf}
        download="Catalog Rebirth Collection.pdf"
        className="inline-flex items-center justify-center rounded-full border border-[#d8c3a0] bg-[linear-gradient(135deg,#f9f1e6,#efe0c6)] px-7 py-3 text-xs font-medium uppercase tracking-[0.28em] text-secondary shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-base-300"
      >
        {language === "italian"
          ? "Scarica Catalogo Completo"
          : "Download Full Catalog"}
      </a>

      <a
        href={
          language === "italian" ? schedatecnicaitaliano : schedatecnicainglese
        }
        download="Technical Data Chocolate Bars.pdf"
        className="inline-flex items-center justify-center rounded-full border border-[#d8c3a0] bg-[linear-gradient(135deg,#f9f1e6,#efe0c6)] px-7 py-3 text-xs font-medium uppercase tracking-[0.28em] text-secondary shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-base-300"
      >
        {language === "italian"
          ? "Scarica Scheda Tecnica"
          : "Download Technical Datasheet"}
      </a>
      <a
        href={
          language === "italian"
            ? logisticaTavoletteRinascita
            : logisticRebirthCollection
        }
        download={
          language === "italian"
            ? "Logistica Tavolette Rinascita.pdf"
            : "Logistic Rebirth Collection.pdf"
        }
        className="inline-flex items-center justify-center rounded-full border border-[#d8c3a0] bg-[linear-gradient(135deg,#f9f1e6,#efe0c6)] px-7 py-3 text-xs font-medium uppercase tracking-[0.28em] text-secondary shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-base-300"
      >
        {language === "italian"
          ? "Scarica dati Logistici"
          : "Download Logistics Specs"}
      </a>
    </div>
  );
}

export default DownloadSection;
