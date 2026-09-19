import React from "react";
import crocette1 from "../assets/historyFiles/crocette1.jpg";
import { useContextLanguage } from "../contextLanguages";

function History() {
  const { language } = useContextLanguage();

  return (
    <section className="lux-section lux-grid-line py-16 md:py-24">
      <div className="align-element grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <article className="lux-card group relative min-h-[430px] overflow-hidden rounded-[30px]">
          <img src={crocette1} alt={language === "italian" ? "Fichi calabresi" : "Calabrian figs"} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 text-white sm:inset-x-8 sm:bottom-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">{language === "italian" ? "Materia prima" : "Raw ingredient"}</p>
            <p className="mt-3 max-w-sm font-serif text-2xl leading-tight">{language === "italian" ? "I fichi delle colline calabresi." : "Figs from the Calabrian hills."}</p>
          </div>
        </article>

        <article className="lux-card rounded-[30px] p-7 sm:p-9 lg:p-11">
          <p className="lux-kicker">{language === "italian" ? "Dal 1951" : "Since 1951"}</p>
          <h2 className="lux-heading mt-5 text-4xl sm:text-5xl">{language === "italian" ? "Le origini di Casa Bertini" : "The origins of Casa Bertini"}</h2>
          <div className="mt-7 space-y-5 text-sm leading-relaxed text-base-content/75 sm:text-base">
            <p>{language === "italian" ? "La storia di Casa Bertini nasce a Cosenza nel 1951, quando la visione del fondatore Luigi Bertini trasforma i migliori fichi calabresi in creazioni dolciarie d’eccellenza." : "The story of Casa Bertini begins in Cosenza in 1951, when founder Luigi Bertini’s vision turned the finest Calabrian figs into exceptional sweet creations."}</p>
            <p>{language === "italian" ? "Da oltre settant’anni, maestria artigianale, ricerca della materia prima e legame con il territorio definiscono un patrimonio che la famiglia continua a custodire e rinnovare." : "For more than seventy years, artisanal mastery, ingredient research and a connection with the land have shaped a heritage the family continues to preserve and renew."}</p>
          </div>
          <dl className="mt-9 grid grid-cols-3 border-t border-base-content/10 pt-5">
            <div><dt className="lux-kicker">Founded</dt><dd className="mt-2 font-serif text-2xl">1951</dd></div>
            <div className="border-l border-base-content/10 pl-4"><dt className="lux-kicker">Origin</dt><dd className="mt-2 font-serif text-2xl">Cosenza</dd></div>
            <div className="border-l border-base-content/10 pl-4"><dt className="lux-kicker">Made in</dt><dd className="mt-2 font-serif text-2xl">Italy</dd></div>
          </dl>
        </article>
      </div>
    </section>
  );
}

export default History;
