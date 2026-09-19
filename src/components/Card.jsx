import React from "react";
import { useContextLanguage } from "../contextLanguages";

function Card({ image, title, titolo, index }) {
  const { language } = useContextLanguage();
  const displayTitle = language === "italian" ? titolo : title;
  const productLabel =
    language === "italian" ? "Referenza" : "Product reference";

  return (
    <article className="lux-card group relative h-full overflow-hidden rounded-[22px] border border-base-content/10 bg-base-100 shadow-[0_12px_30px_rgba(31,24,18,0.06)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_22px_50px_rgba(31,24,18,0.14)] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-4 focus-within:ring-offset-base-300">
      <figure className="relative m-0 aspect-[4/5] overflow-hidden bg-base-200">
        <img
          src={image}
          alt={displayTitle}
          loading="lazy"
          decoding="async"
          className="h-full py-2 w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </figure>

      <div className="relative flex min-h-[142px] flex-col p-5">
        <div className="mb-4 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-base-content/50">
          <span>{productLabel}</span>
          <span>0{index + 1}</span>
        </div>

        <h3 className="font-serif text-base leading-snug text-base-content sm:text-lg">
          {displayTitle}
        </h3>

        <div className="mt-auto flex items-center gap-3 pt-5">
          <span className="h-px flex-1 bg-base-content/10 transition-colors duration-300 group-hover:bg-primary/70" />
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-base-content/55">
            160 g
          </span>
        </div>
      </div>
    </article>
  );
}

export default Card;
