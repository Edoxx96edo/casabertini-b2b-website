import React from "react";
import { useContextLanguage } from "../contextLanguages";

function Card({ image, title, titolo }) {
  const { language } = useContextLanguage();

  return (
    <article className="group mx-auto">
      <div className="mx-auto h-90 w-40 overflow-hidden rounded-[24px] border border-[#d9c5a3] bg-[#f9f5f1] shadow-[0_14px_35px_rgba(24,18,12,0.08)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(24,18,12,0.12)]">
        <figure className="m-0 overflow-hidden bg-[#f0e9e2]">
          <img
            src={image}
            alt={language === "italian" ? titolo : title}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </figure>

        <div className="border-t border-[#e8dcc6] bg-[#f7f1ea] px-4 py-3 text-center">
          <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-base-content">
            {language === "italian" ? titolo : title}
          </h3>
        </div>
      </div>
    </article>
  );
}

export default Card;
