import React from "react";
import { Link } from "react-router-dom";
import arancetoCalabrese from "../assets/aranceto calabrese.jpg";
import calabria from "../assets/calabria.png";
import { useContextLanguage } from "../contextLanguages";

function Location() {
  const { language } = useContextLanguage();
  const isItalian = language === "italian";

  return (
    <section className="bg-base-200 py-6 transition-colors duration-300 md:py-20">
      <div className="align-element">
        <div className="mb-8 text-center">
          <p className="text-md font-medium uppercase tracking-[0.42em] text-base-content">
            {isItalian ? "La Nostra Regione" : "Our Region"}
          </p>

          <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.12em] text-base-content sm:text-3xl md:text-4xl">
            {isItalian
              ? "Calabria, cuore del Sud Italia"
              : "Calabria, heart of Southern Italy"}
          </h3>
        </div>

        <div className="grid gap-9 lg:grid-cols-[2fr_1fr] lg:items-stretch">
          <div className="grid gap-6">
            <article className="rounded-[22px] border border-base-300 bg-base-100 p-6 shadow-md transition-colors duration-300">
              <p className="text-[10px] uppercase tracking-[0.42em] text-base-content">
                {isItalian ? "Clima e territorio" : "Climate & terrain"}
              </p>

              <h4 className="mt-4 text-xl font-light uppercase tracking-[0.14em] text-base-content">
                {isItalian
                  ? "Un territorio che dà carattere ai sapori"
                  : "A land that gives character to flavors"}
              </h4>

              <p className="mt-4 text-sm leading-relaxed tracking-[0.04em] text-base-content">
                {isItalian
                  ? "A Cosenza, nel cuore della Calabria, il clima mediterraneo – inverni miti, estati soleggiate e una marcata escursione termica tra giorno e notte – incontra un terreno calcareo e ben drenato. È in questo equilibrio tra sole, mare e collina che nascono da oltre settant’anni i fichi, gli agrumi e la frutta mediterranea alla base di ogni creazione Casa Bertini."
                  : "In Cosenza, in the heart of Calabria, the Mediterranean climate—mild winters, sunny summers, and a marked temperature range between day and night—meets well-drained, calcareous soil. It is in this balance of sun, sea, and hills that figs, citrus, and Mediterranean fruit have been grown for over seventy years, forming the foundation of every Casa Bertini creation."}
              </p>
            </article>

            <article className="rounded-[22px] border border-base-300 bg-base-100 p-6 shadow-md transition-colors duration-300">
              <p className="text-[10px] uppercase tracking-[0.42em] text-base-content">
                {isItalian ? "Coltivazioni" : "Cultivations"}
              </p>

              <h4 className="mt-4 text-xl font-light uppercase tracking-[0.14em] text-base-content">
                {isItalian
                  ? "Le eccellenze della nostra terra"
                  : "The excellence of our land"}
              </h4>

              <ul className="mt-4 space-y-3 text-sm leading-relaxed tracking-[0.04em] text-base-content">
                <li>
                  {isItalian
                    ? "• Fichi delle colline cosentine, tra i più pregiati del Sud Italia"
                    : "• Figs from the Cosenza hills, among the finest in Southern Italy"}
                </li>
                <li>
                  {isItalian
                    ? "• Agrumi mediterranei dalla buccia profumata e succosi"
                    : "• Fragrant-skinned, juicy Mediterranean citrus fruits"}
                </li>
                <li>
                  {isItalian
                    ? "• Mandorle, ciliegie e marroni del territorio calabrese"
                    : "• Almonds, cherries, and chestnuts from the Calabrian territory"}
                </li>
                <li>
                  {isItalian
                    ? "• Materie prime selezionate secondo tradizione, dal 1951"
                    : "• Raw materials selected according to tradition, since 1951"}
                </li>
              </ul>
            </article>
          </div>

          <article className="h-70 w-55 overflow-hidden rounded-[28px] border border-base-300 bg-base-100 shadow-md transition-colors duration-300">
            <img
              src={calabria}
              alt={
                isItalian
                  ? "Paesaggio della Calabria, terra d'origine di Casa Bertini"
                  : "Calabria landscape, land of origin of Casa Bertini"
              }
              className="h-70 object-cover"
            />
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/technical-info"
            className="inline-flex items-center justify-center rounded-full border border-[#d8c3a0] bg-[linear-gradient(135deg,#f9f1e6,#efe0c6)] px-7 py-3 text-xs font-medium uppercase tracking-[0.28em] text-base-content shadow-[0_14px_30px_rgba(52,38,24,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#f4e8d6,#e4ceb0)] hover:shadow-[0_18px_35px_rgba(52,38,24,0.12)]"
          >
            {isItalian ? "Vedi info tecniche" : "View technical info"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Location;
