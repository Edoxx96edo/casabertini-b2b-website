import React from "react";
import primoPianoFichi from "../assets/historyFiles/primo piano fichi.jpg";
import { useContextLanguage } from "../contextLanguages";

function History() {
  const { language } = useContextLanguage();

  return (
    <section className="relative bg-base-200 py-16 transition-colors duration-300 md:py-20">
      <div className="align-element grid items-start gap-10 lg:grid-cols-[0.9fr_1.3fr]">
        <div className="w-full max-w-xl">
          <article className="relative w-full overflow-hidden rounded-[32px] border border-base-300 bg-base-100 p-6 shadow-md transition-colors duration-300">
            <div className="absolute inset-x-6 top-0 h-px bg-primary" />

            <img
              src={primoPianoFichi}
              alt={
                language === "italian" ? "Fichi calabresi" : "Calabrian figs"
              }
              className="w-full rounded-2xl border border-base-300 object-cover"
            />

            <h5 className="mt-4 text-sm font-medium leading-relaxed text-base-content">
              {language === "italian"
                ? "I fichi delle colline cosentine, tra i più pregiati del Sud Italia, lavorati secondo l'antica tecnica artigianale tramandata dalla tradizione locale."
                : "The figs from the hills around Cosenza, among the finest in Southern Italy, are crafted according to an ancient artisanal technique handed down through local tradition."}
            </h5>

            <p className="mt-2 text-xs italic text-base-content/70">
              "Goccia Classica di Casa Bertini"
            </p>
          </article>
        </div>

        <article className="rounded-[30px] border border-base-300 bg-base-100 p-6 shadow-md transition-colors duration-300 md:p-8">
          <header className="mb-6 border-b border-base-300 pb-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.42em] text-base-content">
              {language === "italian" ? "Dal 1951" : "Since 1951"}
            </span>

            <h2 className="mt-4 text-2xl font-light uppercase tracking-[0.12em] text-primary sm:text-3xl md:text-4xl">
              {language === "italian"
                ? "Le origini di Casa Bertini"
                : "The origins of Casa Bertini"}
            </h2>
          </header>

          <div className="space-y-5 text-base leading-relaxed tracking-[0.04em] text-base-content md:text-lg">
            <p>
              {language === "italian"
                ? "La storia dell'azienda inizia nel 1951 a Cosenza, grazie all'intuizione del fondatore Luigi Bertini, che avvia un'attività dedicata alla trasformazione delle eccellenze agricole calabresi. Tra le prime produzioni figurano proprio i fichi delle colline cosentine, lavorati secondo tecniche artigianali tramandate dalla tradizione locale."
                : "The company's story began in 1951 in Cosenza, thanks to the vision of founder Luigi Bertini, who started a business dedicated to transforming the finest agricultural products of Calabria. Among the first products were the figs from the hills around Cosenza, crafted according to artisanal techniques handed down through local tradition."}
            </p>

            <p>
              {language === "italian"
                ? "Da quella prima intuizione è nata un'identità che accompagna Casa Bertini da oltre settant'anni: selezione rigorosa delle materie prime, lavorazione manuale e rispetto delle ricette storiche del territorio. Un'eredità che continua a essere custodita e reinterpretata dalle generazioni successive della famiglia."
                : "That first intuition gave rise to an identity that has accompanied Casa Bertini for more than seventy years: rigorous selection of raw materials, handmade processing, and respect for the region's historic recipes. A heritage that continues to be preserved and reinterpreted by the family's successive generations."}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default History;
