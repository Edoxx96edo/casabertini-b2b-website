import React from "react";
import sedeCasaBertini from "../assets/SedeCasaBertini.jpg";
import { useContextLanguage } from "../contextLanguages";

function TechnicalInfo() {
  const { language } = useContextLanguage();

  return (
    <section className="py-16 md:py-20  bg-base-200">
      <div className="align-element bg-base-200">
        <div className="mb-12 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#d4b06a]">
            {language === "italian"
              ? "Informazioni tecniche"
              : "Technical information"}
          </p>

          <h1 className="mt-4 text-3xl font-light uppercase tracking-[0.12em] text-base-content sm:text-4xl md:text-5xl">
            {language === "italian" ? "Struttura" : "Production"}{" "}
            <span className="font-serif italic text-[#d4b06a]">
              {language === "italian" ? "produttiva" : "structure"}
            </span>
          </h1>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[32px] border border-[#d9c5a3] bg-base-100 p-6 shadow-[0_18px_40px_rgba(50,35,25,0.04)] md:p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#d4b06a]">
              Casa Bertini
            </p>

            <h2 className="mt-4 text-2xl font-light uppercase tracking-[0.12em] text-base-content md:text-3xl">
              {language === "italian"
                ? "Eccellenza artigianale nel cuore della Calabria"
                : "Artisanal excellence in the heart of Calabria"}
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed tracking-[0.04em] text-base-content md:text-lg">
              <p>
                {language === "italian"
                  ? "Ogni creazione Casa Bertini nasce nel nostro laboratorio artigianale di Cosenza, in Calabria, dove oltre settant'anni di tradizione incontrano un ambiente moderno e attentamente controllato."
                  : "Every Casa Bertini creation is made in our artisanal workshop in Cosenza, Calabria, where more than seventy years of tradition meet a modern, carefully controlled environment."}
              </p>

              <p>
                {language === "italian"
                  ? "La struttura si estende per circa 1.800 metri quadrati ed è dotata di sistemi progettati per garantire igiene, sicurezza e qualità costante in ogni fase della produzione."
                  : "The facility spans approximately 1,800 square meters and is equipped with systems designed to guarantee hygiene, safety, and consistent quality at every stage of production."}
              </p>
            </div>
          </article>

          <div className="space-y-4">
            <div className="rounded-[28px] border border-[#d9c5a3] bg-base-100 p-5 shadow-[0_18px_35px_rgba(50,35,25,0.04)]">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#d4b06a]">
                {language === "italian" ? "Laboratorio" : "Workshop"}
              </p>

              <p className="mt-3 text-3xl font-light tracking-[0.08em] text-base-content">
                1800 m²
              </p>
            </div>

            <div className="rounded-[28px] border border-[#d9c5a3] bg-base-100 p-5 shadow-[0_18px_35px_rgba(50,35,25,0.04)]">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#d4b06a]">
                {language === "italian" ? "Capacità" : "Capacity"}
              </p>

              <p className="mt-3 text-3xl font-light tracking-[0.08em] text-base-content">
                1000–3000
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d4b06a]">
                {language === "italian" ? "unità/giorno" : "units/day"}
              </p>
            </div>

            <div className="rounded-[28px] border border-[#d9c5a3] bg-base-100 p-5 shadow-[0_18px_35px_rgba(50,35,25,0.04)]">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#d4b06a]">
                {language === "italian" ? "Qualità" : "Quality"}
              </p>

              <p className="mt-3 text-3xl font-light tracking-[0.08em] text-base-content">
                100%
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d4b06a]">
                {language === "italian"
                  ? "controllo delle fasi"
                  : "phase control"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-[28px] border border-[#d9c5a3] bg-base-100 p-6">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#d4b06a]">
              01
            </p>

            <h3 className="mt-4 text-lg font-medium uppercase tracking-[0.18em] text-base-content">
              {language === "italian"
                ? "Produzione flessibile"
                : "Flexible production"}
            </h3>

            <p className="mt-4 text-sm leading-relaxed tracking-[0.04em] text-base-content">
              {language === "italian"
                ? "La produzione si adatta a ogni tipologia di prodotto e alla domanda del mercato, da 1.000 a 3.000 unità al giorno, senza mai compromettere artigianalità e costanza."
                : "Output adapts to each product type and to market demand, from 1,000 to 3,000 units per day, without ever compromising craftsmanship or consistency."}
            </p>
          </article>

          <article className="rounded-[28px] border border-[#d9c5a3] bg-base-100 p-6">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#d4b06a]">
              02
            </p>

            <h3 className="mt-4 text-lg font-medium uppercase tracking-[0.18em] text-base-content">
              {language === "italian"
                ? "Regali aziendali e hospitality"
                : "Corporate & hospitality gifting"}
            </h3>

            <p className="mt-4 text-sm leading-relaxed tracking-[0.04em] text-base-content">
              {language === "italian"
                ? "Soluzioni di packaging personalizzate sviluppate per partner B2B, dalle confezioni regalo premium per aziende alle collezioni dedicate al settore hospitality e agli hotel di lusso."
                : "Bespoke packaging solutions developed for B2B partners, from premium gift boxes for corporate gifting to tailored collections for the hospitality and luxury hotel sector."}
            </p>
          </article>

          <article className="rounded-[28px] border border-[#d9c5a3] bg-base-100 p-6">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#d4b06a]">
              03
            </p>

            <h3 className="mt-4 text-lg font-medium uppercase tracking-[0.18em] text-base-content">
              {language === "italian"
                ? "Identità autentica"
                : "Authentic identity"}
            </h3>

            <p className="mt-4 text-sm leading-relaxed tracking-[0.04em] text-base-content">
              {language === "italian"
                ? "Una genuina vocazione artigianale viene preservata in ogni fase, supportata da sistemi moderni che garantiscono efficienza e affidabilità nel lungo periodo."
                : "A genuine artisanal vocation is preserved at every stage, supported by modern systems that ensure efficiency and long-term reliability."}
            </p>
          </article>
        </div>

        <div className="mt-12 overflow-hidden rounded-[32px] border border-[#d9c5a3] bg-base-100 shadow-[0_18px_40px_rgba(50,35,25,0.04)]">
          <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
            <div className="h-[360px] overflow-hidden">
              <img
                src={sedeCasaBertini}
                alt="Sede Casa Bertini"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.42em] text-[#d4b06a]">
                {language === "italian" ? "Sede" : "Headquarters"}
              </p>

              <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.12em] text-base-content">
                {language === "italian"
                  ? "Sede Casa Bertini"
                  : "Casa Bertini Headquarters"}
              </h3>

              <p className="mt-5 text-base leading-relaxed tracking-[0.04em] text-base-content">
                {language === "italian"
                  ? "La nostra sede produttiva di Cosenza riflette i valori che definiscono il brand: precisione, continuità e un profondo rispetto per la tradizione artigianale tramandata dal 1951."
                  : "Our production base in Cosenza reflects the values that define the brand: precision, continuity, and a deep respect for artisanal tradition passed down since 1951."}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[32px] border border-[#d9c5a3] bg-base-300 p-6 shadow-[0_18px_40px_rgba(50,35,25,0.04)] md:p-8">
          <div className="mb-6 border-b border-[#e7dcc7] pb-4">
            <p className="text-[10px] uppercase tracking-[0.42em] text-[#d4b06a]">
              {language === "italian" ? "Processo" : "Process"}
            </p>

            <h3 className="mt-3 text-2xl font-light uppercase tracking-[0.12em] text-base-content">
              {language === "italian"
                ? "Dalla materia prima alla creazione finale"
                : "From raw material to final creation"}
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              [
                "01",
                language === "italian" ? "Selezione" : "Selection",
                language === "italian"
                  ? "Scelta accurata degli ingredienti e delle materie prime italiane."
                  : "Careful choice of Italian ingredients and raw materials."
              ],
              [
                "02",
                language === "italian" ? "Preparazione" : "Preparation",
                language === "italian"
                  ? "Lavorazione precisa studiata per preservare aroma e consistenza."
                  : "Precise handling designed to preserve aroma and consistency."
              ],
              [
                "03",
                language === "italian" ? "Produzione" : "Production",
                language === "italian"
                  ? "Processi controllati che rispettano gli autentici metodi artigianali."
                  : "Controlled processes that respect authentic artisanal methods."
              ],
              [
                "04",
                language === "italian" ? "Controllo finale" : "Final check",
                language === "italian"
                  ? "Attenta verifica prima della consegna, per garantire l'eccellenza."
                  : "Careful inspection before delivery, to guarantee excellence."
              ]
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-[24px] border-3 border-amber-200 bg-base-300 p-4"
              >
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#d4b06a]">
                  {number}
                </p>

                <h4 className="mt-3 font-medium uppercase tracking-[0.12em] text-base-content">
                  {title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed tracking-[0.04em] text-base-content">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4 text-sm font-light leading-relaxed tracking-[0.04em] text-base-content">
            <p>
              {language === "italian"
                ? "Casa Bertini predilige ingredienti italiani accuratamente selezionati e processi produttivi studiati per preservarne aroma, consistenza e proprietà organolettiche."
                : "Casa Bertini favors carefully selected Italian ingredients and production processes designed to preserve their aroma, texture, and organoleptic properties."}
            </p>

            <p>
              {language === "italian"
                ? "Le lavorazioni più delicate sono ancora affidate all'abilità manuale di personale specializzato, che segue procedure tramandate nel tempo e integrate con rigorosi standard qualitativi."
                : "The most delicate processes are still entrusted to the manual skill of specialized staff, who follow procedures handed down over time and integrated with rigorous quality standards."}
            </p>

            <p>
              {language === "italian"
                ? "Per Casa Bertini, l'artigianalità non è solo un metodo di lavoro, ma una filosofia che guida ogni scelta e ogni fase della produzione."
                : "For Casa Bertini, craftsmanship is not just a method of work, but a philosophy that guides every choice and every stage of production."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalInfo;
