import React from "react";
import { useContextLanguage } from "../contextLanguages";

function Card({ image, title, titolo }) {
  const { language } = useContextLanguage();
  const displayTitle = language === "italian" ? titolo : title;

  return (
    <article className="group mx-auto">
      <div className="relative mx-auto h-90 overflow-hidden rounded-[24px] border border-base-300/60 bg-base-100 shadow-[0_14px_35px_rgba(24,18,12,0.08)] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(24,18,12,0.14)]">
        {/* Immagine */}
        <figure className="m-0 h-full w-full overflow-hidden bg-base-200">
          <img
            src={image}
            alt={displayTitle}
            className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
          />
        </figure>

        {/* Overlay sfumato per leggibilità e profondità */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

        {/* Linea dorata sottile che appare all'hover */}
        <div className="absolute inset-x-6 bottom-[52px] h-px scale-x-0 bg-primary/70 transition-transform duration-500 ease-out group-hover:scale-x-100" />

        {/* Titolo */}
        <div className="absolute inset-x-0 bottom-0 px-4 py-4 text-center">
          <h3 className="font-serif text-[11px] font-medium uppercase tracking-[0.28em] text-white">
            {displayTitle}
          </h3>
        </div>
      </div>
    </article>
  );
}

export default Card;
