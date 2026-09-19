import React from "react";
import catalogPdf from "../assets/Catalog Rebirth Collection.pdf";
import logisticaTavoletteRinascita from "../assets/logistics/logisticaTavoletteRinascita.pdf";
import logisticRebirthCollection from "../assets/logistics/logisticRebirthCollection.pdf";
import schedatecnicaitaliano from "../assets/technical data/Schede_Tecniche_Italiano_valori .pdf";
import schedatecnicainglese from "../assets/technical data/Schede tecniche inglese con valori .pdf";
import { useContextLanguage } from "../contextLanguages";

function DownloadSection() {
  const { language } = useContextLanguage();
  const resources = [
    { label: language === "italian" ? "Catalogo completo" : "Full catalogue", detail: language === "italian" ? "Collezione e referenze" : "Collection and references", href: catalogPdf, download: "Catalog Rebirth Collection.pdf" },
    { label: language === "italian" ? "Scheda tecnica" : "Technical datasheet", detail: language === "italian" ? "Specifiche prodotto" : "Product specifications", href: language === "italian" ? schedatecnicaitaliano : schedatecnicainglese, download: "Technical Data Chocolate Bars.pdf" },
    { label: language === "italian" ? "Dati logistici" : "Logistics specifications", detail: language === "italian" ? "Informazioni distributive" : "Distribution information", href: language === "italian" ? logisticaTavoletteRinascita : logisticRebirthCollection, download: language === "italian" ? "Logistica Tavolette Rinascita.pdf" : "Logistic Rebirth Collection.pdf" }
  ];

  return (
    <section className="lux-section my-10">
      <div className="lux-card grid overflow-hidden rounded-[26px] border border-base-content/10 bg-base-100/70 sm:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-base-content/10 p-6 sm:border-b-0 sm:border-r sm:p-7">
          <p className="lux-kicker">{language === "italian" ? "Area professionale" : "Professional area"}</p>
          <h3 className="lux-heading mt-3 text-3xl">{language === "italian" ? "Materiali per il trade" : "Trade materials"}</h3>
          <p className="mt-4 text-sm leading-relaxed text-base-content/65">{language === "italian" ? "Catalogo, dati tecnici e specifiche logistiche pronti per il tuo team." : "Catalogue, technical data and logistics specifications ready for your team."}</p>
        </div>
        <div className="divide-y divide-base-content/10">
          {resources.map((resource, index) => (
            <a key={resource.label} href={resource.href} download={resource.download} className="group flex items-center justify-between gap-4 p-5 hover:bg-base-200/70 sm:px-7">
              <div className="flex items-center gap-4">
                <span className="font-serif text-xl text-primary/80">0{index + 1}</span>
                <span><span className="block text-sm font-semibold text-base-content">{resource.label}</span><span className="mt-1 block text-xs text-base-content/55">{resource.detail}</span></span>
              </div>
              <span aria-hidden="true" className="text-lg text-primary transition-transform duration-200 group-hover:translate-x-1">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
