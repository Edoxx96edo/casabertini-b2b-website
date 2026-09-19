import React from "react";
import { Link } from "react-router-dom";
import arancetoCalabrese from "../assets/aranceto calabrese.jpg";
import calabria from "../assets/calabria.png";
import { useContextLanguage } from "../contextLanguages";

function Location() {
  const { language } = useContextLanguage();
  const qualities = language === "italian"
    ? ["Fichi delle colline calabresi", "Agrumi mediterranei", "Mandorle, ciliegie e marroni", "Selezione fedele alla tradizione"]
    : ["Figs from the Calabrian hills", "Mediterranean citrus fruit", "Almonds, cherries and chestnuts", "Selection faithful to tradition"];

  return (
    <section className="lux-section py-16 md:py-24">
      <div className="align-element">
        <header className="mb-9 grid gap-4 border-b border-base-content/10 pb-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div><p className="lux-kicker">{language === "italian" ? "Origine" : "Provenance"}</p><h2 className="lux-heading mt-4 text-4xl sm:text-5xl">{language === "italian" ? "Calabria, il carattere dell’origine." : "Calabria, character at origin."}</h2></div>
          <p className="max-w-lg text-sm leading-relaxed text-base-content/65 sm:text-base">{language === "italian" ? "Un paesaggio mediterraneo che definisce l’identità delle nostre specialità, dal profumo della materia prima alla precisione della lavorazione." : "A Mediterranean landscape that shapes the identity of our specialities, from the fragrance of raw ingredients to the precision of craftsmanship."}</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="lux-card relative overflow-hidden rounded-[30px] p-6 sm:p-8">
            <img src={arancetoCalabrese} alt="Calabrian citrus orchard" className="absolute inset-0 h-full w-full object-cover opacity-20" />
            <div className="relative">
              <p className="lux-kicker">{language === "italian" ? "Clima e territorio" : "Climate and terrain"}</p>
              <h3 className="lux-heading mt-4 max-w-xl text-3xl sm:text-4xl">{language === "italian" ? "Un territorio che dà carattere ai sapori." : "A land that gives character to flavour."}</h3>
              <p className="mt-6 max-w-2xl leading-relaxed text-base-content/75">{language === "italian" ? "Nel cuore di Cosenza, il calore del sole e la freschezza protettiva dei rilievi creano un equilibrio che arricchisce i profumi della terra. È qui che nascono fichi, agrumi e frutta mediterranea scelti per le creazioni Casa Bertini." : "In the heart of Cosenza, the warmth of the sun and the protective coolness of the hills create a balance that enriches the land’s aromas. This is where the figs, citrus fruit and Mediterranean produce chosen for Casa Bertini are born."}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">{qualities.map((quality, index) => <li key={quality} className="flex items-center gap-3 border-t border-base-content/10 pt-3 text-sm text-base-content/80"><span className="font-serif text-primary">0{index + 1}</span>{quality}</li>)}</ul>
            </div>
          </article>

          <article className="lux-card relative min-h-[410px] overflow-hidden rounded-[30px]">
            <img src={calabria} alt={language === "italian" ? "Paesaggio della Calabria" : "Calabria landscape"} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white sm:inset-x-8 sm:bottom-8"><div><p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Casa Bertini</p><p className="mt-2 font-serif text-2xl">Cosenza, Calabria</p></div><span className="rounded-full border border-white/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em]">Italy</span></div>
          </article>
        </div>

        <div className="mt-8 flex justify-center"><Link to="/technical-info" className="lux-action">{language === "italian" ? "Esplora la struttura" : "Explore our facility"}</Link></div>
      </div>
    </section>
  );
}

export default Location;
