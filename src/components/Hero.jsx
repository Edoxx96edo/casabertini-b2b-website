import React, { useRef } from "react";
import { cards } from "../data";
import imgHero from "../assets/historyFiles/foto presentazione linea.webp";
import { useContextLanguage } from "../contextLanguages";

function Hero() {
  const { language } = useContextLanguage();
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -250 : 250;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="grid gap-10 bg-base-200 px-4 py-8 transition-colors duration-300 lg:grid-cols-2 lg:px-8 lg:py-14">
      <article className="relative min-h-[260px] overflow-hidden rounded-3xl border border-base-300 bg-cover bg-center bg-no-repeat shadow-xl transition-all duration-300">
        {/* GRADIENTE 1: Dall'alto (Sfuma il colore di sfondo del tema per dare profondità) */}
        <div className="absolute inset-0 bg-linear-to-b from-base-300/80 via-base-200/40 to-transparent" />

        {/* GRADIENTE 2: Dal basso a sinistra (Aggiunge un riflesso del colore Primary del tema DaisyUI) */}
        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-transparent opacity-80" />

        <div className="relative z-10 flex flex-col px-6 py-8 lg:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-primary">
            {language === "italian"
              ? "Naturalmente Tradizionale"
              : "Naturally Traditional"}
          </p>

          <h1 className="mt-6 mb-2 text-4xl font-light uppercase tracking-[0.12em] text-base-content md:text-5xl lg:text-6xl">
            Casa Bertini
          </h1>
        </div>

        <p className="relative z-10 max-w-xl px-6 pb-8 text-base font-light leading-relaxed tracking-[0.06em] text-base-content/90 md:text-lg lg:px-8">
          {language === "italian" ? (
            <>
              Dal 1951 portiamo le specialità calabresi sulle tavole degli
              Italiani e nel mondo
            </>
          ) : (
            <>
              Since 1951 we bring Calabrian specialties to Italian tables and to
              the world
            </>
          )}
        </p>
      </article>

      <div className="relative w-full">
        <div
          ref={carouselRef}
          className="carousel carousel-center   space-x-3 rounded-[28px] border border-base-300 bg-base-100/80 p-3 shadow-[0_14px_35px_rgba(24,18,12,0.05)] backdrop-blur-sm"
        >
          {cards.map((card) => (
            <div key={card.id} className="carousel-item">
              <img
                src={card.image}
                className="h-full w-32 rounded-[18px] border border-base-300 object-cover shadow-[0_10px_25px_rgba(24,18,12,0.08)] sm:w-40"
                alt={card.title}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("left")}
          className="btn btn-circle btn-sm absolute left-3 top-1/2 -translate-y-1/2 border border-[#d9c5a3] bg-base-100/90 text-[#9d6b2d] shadow-[0_10px_25px_rgba(24,18,12,0.12)] backdrop-blur-md hover:bg-[#d4b06a] hover:text-white hover:border-[#d4b06a]"
        >
          ❮
        </button>

        <button
          onClick={() => scroll("right")}
          className="btn btn-circle btn-sm absolute right-3 top-1/2 -translate-y-1/2 border border-[#d9c5a3] bg-base-100/90 text-[#9d6b2d] shadow-[0_10px_25px_rgba(24,18,12,0.12)] backdrop-blur-md hover:bg-[#d4b06a] hover:text-white hover:border-[#d4b06a]"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Hero;
