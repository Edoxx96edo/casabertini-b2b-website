import React from "react";
import { Link } from "react-router-dom";
import arancetoCalabrese from "../assets/aranceto calabrese.jpg";
import calabria from "../assets/calabria.png";
import { useContextLanguage } from "../contextLanguages";

function Location() {
  const { language } = useContextLanguage();

  return (
    <section className="bg-base-200 py-6 transition-colors duration-300 md:py-20">
      <div className="align-element">
        <div className="mb-8 text-center">
          <p className="text-md font-medium uppercase tracking-[0.42em] text-base-content">
            {language === "italian" ? "La Nostra Regione" : "Our Region"}
          </p>

          <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.12em] text-base-content sm:text-3xl md:text-4xl">
            {language === "italian"
              ? "Calabria, il cuore del Sud Italia"
              : "Calabria, the heart of Southern Italy"}
          </h3>
        </div>

        <div className="grid gap-9 lg:grid-cols-[2fr_1fr] lg:items-stretch">
          <div className="grid gap-6">
            <article className="rounded-[22px] border border-base-300 bg-base-100 p-6 shadow-md transition-colors duration-300">
              <p className="text-[10px] uppercase tracking-[0.42em] text-base-content">
                {language === "italian"
                  ? "Clima e territorio"
                  : "Climate & terrain"}
              </p>

              <h4 className="mt-4 text-xl font-light uppercase tracking-[0.14em] text-base-content">
                {language === "italian"
                  ? "Un territorio che dà carattere ai sapori"
                  : "A land that gives character to flavors"}
              </h4>

              <p className="mt-4 text-sm leading-relaxed tracking-[0.04em] text-base-content">
                {language === "italian"
                  ? "Ogni grande sapore racchiude l'anima del proprio luogo d'origine. Nel cuore di Cosenza e delle sue colline, l'autentico clima mediterraneo incontra la ricchezza di un terreno generoso, creando un'alchimia irripetibile. In questo perfetto equilibrio tra il calore del sole e la freschezza protettiva dei rilievi circostanti, le dolci escursioni termiche arricchiscono i profumi della terra. È qui che, da oltre settant'anni, nascono i fichi, gli agrumi e la pregiata frutta mediterranea che firmano le creazioni Casa Bertini. L'essenza di un territorio unico, capace di donare a ogni nostro ingrediente un'intensità inconfondibile."
                  : "Every great flavor holds the soul of its place of origin. In the heart of Cosenza and its hills, the authentic Mediterranean climate meets the richness of a generous soil, creating an unrepeatable alchemy. In this perfect balance between the warmth of the sun and the protective coolness of the surrounding hills, gentle thermal shifts enrich the scents of the land. It is here that, for over seventy years, the figs, citrus, and prized Mediterranean fruit that sign every Casa Bertini creation have been born. The essence of a unique territory, able to give each of our ingredients an unmistakable intensity."}
              </p>
            </article>

            <article className="rounded-[22px] border border-base-300 bg-base-100 p-6 shadow-md transition-colors duration-300">
              <p className="text-[10px] uppercase tracking-[0.42em] text-base-content">
                {language === "italian" ? "Coltivazioni" : "Cultivations"}
              </p>

              <h4 className="mt-4 text-xl font-light uppercase tracking-[0.14em] text-base-content">
                {language === "italian"
                  ? "Le eccellenze della nostra terra"
                  : "The excellence of our land"}
              </h4>

              <ul className="mt-4 space-y-3 text-sm leading-relaxed tracking-[0.04em] text-base-content">
                <li>
                  {language === "italian"
                    ? "• Fichi delle colline Calabresi, tra i più pregiati del Mondo"
                    : "• Figs from the Calabrian hills, among the finest in the World"}
                </li>
                <li>
                  {language === "italian"
                    ? "• Agrumi mediterranei dalla buccia profumata e succosi"
                    : "• Fragrant-skinned, juicy Mediterranean citrus fruits"}
                </li>
                <li>
                  {language === "italian"
                    ? "• Mandorle, ciliegie e marroni del territorio calabrese"
                    : "• Almonds, cherries, and chestnuts from the Calabrian territory"}
                </li>
                <li>
                  {language === "italian"
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
                language === "italian"
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
            {language === "italian"
              ? "Vedi info tecniche"
              : "View technical info"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Location;
