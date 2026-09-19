import React, { useRef } from "react";
import { cards } from "../data";
import imgHero from "../assets/historyFiles/foto presentazione linea.webp";
import { useContextLanguage } from "../contextLanguages";

function Hero() {
  const { language } = useContextLanguage();
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    carouselRef.current?.scrollBy({ left: direction === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <div className="lux-grid-line relative grid gap-5 py-6 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7">
      <article className="lux-card relative min-h-[470px] overflow-hidden rounded-[30px] p-6 sm:p-8 lg:min-h-[570px] lg:p-10">
        <img src={imgHero} alt="Casa Bertini artisan confectionery" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-base-100/95 via-base-100/70 to-base-100/10" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-primary via-primary/30 to-transparent" />

        <div className="relative flex h-full max-w-xl flex-col justify-between">
          <div>
            <p className="lux-kicker">{language === "italian" ? "Dolciaria artigianale · Dal 1951" : "Artisanal confectionery · Since 1951"}</p>
            <h1 className="lux-heading mt-7 text-5xl text-base-content sm:text-6xl lg:text-7xl">Casa<br />Bertini</h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-base-content/75 sm:text-lg">
              {language === "italian"
                ? "Specialità calabresi e cioccolato d’autore, create per partner che scelgono qualità, origine e continuità."
                : "Calabrian specialities and signature chocolate, created for partners who choose quality, provenance and consistency."}
            </p>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-2 border-t border-base-content/15 pt-5 text-base-content">
            <div>
              <p className="lux-kicker">Heritage</p>
              <p className="mt-2 font-serif text-2xl">1951</p>
            </div>
            <div className="border-l border-base-content/15 pl-5">
              <p className="lux-kicker">Origin</p>
              <p className="mt-2 font-serif text-2xl">Cosenza</p>
            </div>
          </div>
        </div>
      </article>

      <aside className="lux-card relative overflow-hidden rounded-[30px] p-5 sm:p-6 lg:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="lux-kicker">{language === "italian" ? "In primo piano" : "In focus"}</p>
            <h2 className="lux-heading mt-3 text-3xl sm:text-4xl">Rinascita</h2>
          </div>
          <span className="rounded-full border border-primary/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-primary">160 g</span>
        </div>

        <div ref={carouselRef} className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cards.map((card, index) => (
            <figure key={card.id} className="group relative w-[72%] shrink-0 snap-center overflow-hidden rounded-[22px] border border-base-content/10 bg-base-200 sm:w-[58%]">
              <img src={card.image} alt={language === "italian" ? card.titolo : card.title} className="aspect-[4/5] w-full object-contain p-3 transition-transform duration-700 group-hover:scale-[1.04]" />
              <figcaption className="border-t border-base-content/10 bg-base-100/90 px-4 py-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-1 line-clamp-2 font-serif text-sm leading-snug text-base-content">{language === "italian" ? card.titolo : card.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-base-content/10 pt-4">
          <p className="text-xs text-base-content/60">{language === "italian" ? "Scopri la collezione" : "Discover the collection"}</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => scroll("left")} className="btn btn-circle btn-sm border-base-content/10 bg-base-100 hover:border-primary hover:bg-primary hover:text-primary-content" aria-label="Previous product">←</button>
            <button type="button" onClick={() => scroll("right")} className="btn btn-circle btn-sm border-base-content/10 bg-base-100 hover:border-primary hover:bg-primary hover:text-primary-content" aria-label="Next product">→</button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Hero;
