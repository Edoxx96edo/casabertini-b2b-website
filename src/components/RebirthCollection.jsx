import React from "react";
import Card from "./Card";
import { cards } from "../data";
import catalogPdf from "../assets/Catalog Rebirth Collection.pdf";
import { useContextLanguage } from "../contextLanguages";

function RebirthCollection() {
  const { language } = useContextLanguage();

  return (
    <section className="relative bg-base-200 py-16 md:py-20 transition-colors duration-300">
      <div className="mb-10 text-center">
        <h2
          className="text-3xl font-light uppercase tracking-[0.12em] sm:text-4xl lg:text-5xl"
          style={{ color: "#d4b06a" }}
        >
          <span className="font-serif italic" style={{ color: "#d4b06a" }}>
            Rebirth
          </span>{" "}
          <span className="tracking-[0.18em]" style={{ color: "#d4b06a" }}>
            Collection
          </span>
        </h2>
      </div>

      <div className="align-element mb-12">
        <div className="relative overflow-hidden rounded-[32px] border border-base-300 bg-base-100 px-5 py-6 shadow-md transition-colors duration-300 sm:px-7 md:px-8 md:py-8">
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

          <div className="mb-5 flex items-center justify-between gap-4 border-b border-base-300 pb-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-base-content/70">
              Casa Bertini
            </p>
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-base-content/70">
              Rebirth Collection
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr] lg:items-start">
            <p className="text-base leading-relaxed tracking-[0.04em] text-base-content/80 md:text-lg">
              {language === "italian"
                ? "A coronamento di oltre settant’anni di eccellenza nasce RINASCITA, la linea esclusiva di "
                : "To crown over seventy years of excellence, RINASCITA was born, the exclusive line of "}
              <span className="font-serif italic text-base-content">
                {language === "italian"
                  ? "tavolette di cioccolato artigianali premium"
                  : "premium artisanal chocolate bars"}
              </span>{" "}
              {language === "italian"
                ? "firmata Casa Bertini. Un’interpretazione contemporanea e sofisticata della grande tradizione italiana, in cui cacao di elevata purezza incontra pregiata frutta mediterranea e liquori finemente selezionati. Combinazioni sensoriali raffinate che celebrano l'alta gastronomia, affermandosi come autentico simbolo di lusso mediterraneo."
                : "by Casa Bertini. A contemporary and sophisticated interpretation of the great Italian tradition, where high-purity cocoa meets fine Mediterranean fruit and carefully selected liqueurs. Refined sensory combinations that celebrate haute gastronomy, establishing themselves as an authentic symbol of Mediterranean luxury."}
            </p>

            <div className="space-y-3 rounded-[24px] border border-base-300 bg-base-200 p-4">
              <div className="flex items-start gap-3 rounded-2xl border border-base-300/50 bg-base-100 p-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-[10px] font-semibold uppercase tracking-[0.18em] text-base-content">
                  01
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-base-content/70">
                    Extra Fondente
                  </p>
                  <p className="mt-1 text-sm text-base-content/80">
                    {language === "italian"
                      ? "Intenso, elegante e persistente."
                      : "Intense, elegant and persistent."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-base-300/50 bg-base-100 p-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-[10px] font-semibold uppercase tracking-[0.18em] text-base-content">
                  02
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-base-content/70">
                    Latte Finissimo
                  </p>
                  <p className="mt-1 text-sm text-base-content/80">
                    {language === "italian"
                      ? "Equilibrato, armonioso e vellutato."
                      : "Balanced, harmonious and velvety."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-base-300/50 bg-base-100 p-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-[10px] font-semibold uppercase tracking-[0.18em] text-base-content">
                  03
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-base-content/70">
                    Cioccolato Bianco
                  </p>
                  <p className="mt-1 text-sm text-base-content/80">
                    {language === "italian"
                      ? "Delicato, cremoso e avvolgente."
                      : "Delicate, creamy and enveloping."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="align-element">
        <div className="mt-10 mb-10 flex flex-wrap justify-center gap-6 md:gap-12">
          <a
            href={catalogPdf}
            download="Catalog Rebirth Collection.pdf"
            className="inline-flex items-center justify-center rounded-full border border-[#d8c3a0] bg-[linear-gradient(135deg,#f9f1e6,#efe0c6)] px-7 py-3 text-xs font-medium uppercase tracking-[0.28em] text-base-content shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-base-300"
          >
            {language === "italian"
              ? "Scarica Catalogo Completo"
              : "Download Full Catalog"}
          </a>

          <a
            href={catalogPdf}
            download="Catalog Rebirth Collection.pdf"
            className="inline-flex items-center justify-center rounded-full border border-[#d8c3a0] bg-[linear-gradient(135deg,#f9f1e6,#efe0c6)] px-7 py-3 text-xs font-medium uppercase tracking-[0.28em] text-base-content shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-base-300"
          >
            {language === "italian"
              ? "Scarica Scheda Tecnica"
              : "Download Technical Datasheet"}
          </a>
        </div>

        <div className="border border-base-300 bg-base-100 p-1 shadow-md transition-colors duration-300">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 border border-base-300/50 bg-base-200 p-4">
            {cards.map((card) => {
              const { id, image, title, titolo } = card;
              return (
                <Card key={id} image={image} title={title} titolo={titolo} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RebirthCollection;
