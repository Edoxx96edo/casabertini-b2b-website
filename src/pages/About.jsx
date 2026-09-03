import React from "react";
import eleonoraBertini from "../assets/historyFiles/eleonora-bertini.png";
import sergioBertini from "../assets/historyFiles/sergio-bertini.png";
import umbertoBertini from "../assets/historyFiles/umberto-bertini.png";
import { useContextLanguage } from "../contextLanguages";

const familyPortraits = [
  { name: "Umberto Bertini", image: umbertoBertini },
  { name: "Eleonora Bertini", image: eleonoraBertini },
  { name: "Sergio Bertini", image: sergioBertini }
];

function About() {
  const { language } = useContextLanguage();

  return (
    <section className="bg-base-200 px-4 py-10 text-base-content md:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.42em] text-base-content/70">
            Casa Bertini
          </p>

          <h4 className="text-2xl font-light uppercase tracking-[0.14em] text-base-content md:text-4xl">
            {language === "italian"
              ? "Una storia fatta di "
              : "A story made of "}
            <span className="font-serif italic text-primary">
              {language === "italian" ? "tradizione" : "tradition"}
            </span>
            {language === "italian"
              ? ", qualità e passione"
              : ", quality and passion"}
          </h4>

          <p className="mx-auto mt-5 max-w-3xl leading-8 md:text-lg descrizione text-base-content">
            <span className="font-semibold uppercase tracking-[0.18em] text-primary">
              {language === "italian" ? "Le Radici" : "The Roots"}
            </span>

            <span className="mx-3 inline-block h-px w-12 align-middle bg-base-content" />

            {language === "italian" ? (
              <>
                La storia di Casa Bertini è, prima di tutto, una storia di{" "}
                <span className="font-semibold text-primary">famiglia</span>,{" "}
                <span className="font-semibold text-primary">dedizione</span> e{" "}
                <span className="font-semibold text-primary">continuità</span>.
                Fondata nel 1951 a Cosenza, l'azienda nasce dalla visione del
                fondatore Luigi Bertini che, nel dopoguerra, ha saputo
                trasformare risorse limitate e una determinazione incrollabile
                in una solida realtà imprenditoriale, fondata sulla{" "}
                <span className="font-semibold text-primary">qualità</span> e
                sull'autentico{" "}
                <span className="font-semibold text-primary">
                  impegno artigianale
                </span>
                .
              </>
            ) : (
              <>
                The story of Casa Bertini is, first and foremost, a story of{" "}
                <span className="font-semibold text-primary">family</span>,{" "}
                <span className="font-semibold text-primary">dedication</span>,
                and{" "}
                <span className="font-semibold text-primary">continuity</span>.
                Founded in 1951 in Cosenza, the company was born from the vision
                of founder Luigi Bertini who, in the post-war period,
                transformed limited resources and unwavering determination into
                a solid business, built on{" "}
                <span className="font-semibold text-primary">quality</span> and
                authentic{" "}
                <span className="font-semibold text-primary">
                  craftsmanship
                </span>
                .
              </>
            )}

            <br />

            <span className="my-3 block h-px w-full bg-base-300" />

            <span className="font-semibold uppercase tracking-[0.18em] text-primary">
              {language === "italian"
                ? "Un'Eredità Tramandata Attraverso le Generazioni"
                : "A Legacy Passed Down Through Generations"}
            </span>

            <span className="mx-3 inline-block h-px w-12 align-middle bg-primary/40" />

            {language === "italian" ? (
              <>
                Oggi, a settantacinque anni da quel primo passo, Casa Bertini
                continua a essere guidata dagli stessi valori fondanti.
                L'azienda è portata avanti dai figli del fondatore — Antonio,
                Eleonora, Sergio e Umberto — insieme a Edoardo, figlio di
                Eleonora, che rappresenta la nuova generazione della famiglia.
                Insieme custodiscono un patrimonio di{" "}
                <span className="font-semibold text-primary">esperienza</span>,{" "}
                <span className="font-semibold text-primary">conoscenza</span> e{" "}
                <span className="font-semibold text-primary">
                  metodi artigianali
                </span>{" "}
                affinati nel tempo. Molte fasi della lavorazione si affidano
                ancora oggi alla manualità di personale specializzato,
                preservando l'autenticità che da sempre contraddistingue Casa
                Bertini.
              </>
            ) : (
              <>
                Today, seventy-five years after that first step, Casa Bertini
                continues to be guided by the same founding values. The company
                is carried forward by the founder's children — Antonio,
                Eleonora, Sergio, and Umberto — alongside Edoardo, Eleonora's
                son, representing the family's new generation. Together, they
                preserve a heritage of{" "}
                <span className="font-semibold text-primary">expertise</span>,{" "}
                <span className="font-semibold text-primary">knowledge</span>,
                and{" "}
                <span className="font-semibold text-primary">
                  artisanal methods
                </span>{" "}
                refined over time. Many production stages still rely on skilled
                manual craftsmanship today, safeguarding the authenticity that
                has always defined Casa Bertini.
              </>
            )}
          </p>
        </div>

        <p className="mb-4 text-center text-[10px] font-medium uppercase tracking-[0.38em] text-primary">
          {language === "italian"
            ? "I figli del fondatore Luigi Bertini"
            : "The children of founder Luigi Bertini"}
        </p>

        <div className="mx-auto w-2/3 overflow-hidden rounded-[32px] border border-base-300 bg-base-100 p-3 shadow-[0_20px_50px_rgba(52,38,24,0.04)] md:p-5">
          <div className="flex flex-col items-center justify-center gap-x-12 overflow-x-auto pb-2 lg:flex-row [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {familyPortraits.map((person) => (
              <div key={person.name} className="flex flex-col items-center">
                <figure className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-28 w-28 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </figure>

                <p className="mt-3 text-center text-[10px] font-medium uppercase tracking-[0.42em] text-base-content/70">
                  {person.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl space-y-8">
        <div>
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {language === "italian"
              ? "Riconoscimenti Istituzionali"
              : "Institutional Recognitions"}
          </p>
          <p className="text-center text-base leading-relaxed">
            {language === "italian"
              ? "Nel corso della sua storia, Casa Bertini ha ricevuto attestazioni di rilievo, tra cui la Medaglia d'Oro conferita presso il Campidoglio di Roma per il contributo offerto alla valorizzazione dell'eccellenza italiana nel mondo."
              : "Throughout its history, Casa Bertini has received prominent institutional recognitions, including the Gold Medal awarded at the Campidoglio in Rome for its contribution to promoting Italian excellence around the world."}
          </p>
        </div>

        <div className="pt-2">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {language === "italian"
              ? "I Pilastri di Casa Bertini"
              : "The Pillars of Casa Bertini"}
          </p>

          <ul className="grid grid-cols-1 gap-4 list-none sm:grid-cols-2 md:grid-cols-3">
            <li className="rounded-lg border border-base-300 bg-base-100 p-4">
              <p className="text-sm font-semibold text-base-content">
                {language === "italian" ? "75 anni" : "75 years"}
              </p>
              <p className="text-sm text-base-content/80">
                {language === "italian"
                  ? "di tradizione dolciaria italiana"
                  : "of Italian confectionery tradition"}
              </p>
            </li>

            <li className="rounded-lg border border-base-300 bg-base-100 p-4">
              <p className="text-sm font-semibold text-base-content">
                {language === "italian" ? "Artigianalità" : "Craftsmanship"}
              </p>
              <p className="text-sm text-base-content/80">
                {language === "italian"
                  ? "produzione autenticamente artigianale"
                  : "genuinely artisanal production"}
              </p>
            </li>

            <li className="rounded-lg border border-base-300 bg-base-100 p-4">
              <p className="text-sm font-semibold text-base-content">
                {language === "italian" ? "Materie prime" : "Raw materials"}
              </p>
              <p className="text-sm text-base-content/80">
                {language === "italian"
                  ? "accuratamente selezionate"
                  : "carefully selected"}
              </p>
            </li>

            <li className="rounded-lg border border-base-300 bg-base-100 p-4">
              <p className="text-sm font-semibold text-base-content">
                {language === "italian" ? "Specialità" : "Specialities"}
              </p>
              <p className="text-sm text-base-content/80">
                {language === "italian"
                  ? "frutta mediterranea e cioccolato"
                  : "Mediterranean fruit and chocolate"}
              </p>
            </li>

            <li className="rounded-lg border border-base-300 bg-base-100 p-4">
              <p className="text-sm font-semibold text-base-content">
                Made in Italy
              </p>
              <p className="text-sm text-base-content/80">
                {language === "italian"
                  ? "produzione interamente realizzata in Italia"
                  : "production entirely carried out in Italy"}
              </p>
            </li>

            <li className="rounded-lg border border-base-300 bg-base-100 p-4">
              <p className="text-sm font-semibold text-base-content">
                {language === "italian" ? "Identità" : "Identity"}
              </p>
              <p className="text-sm text-base-content/80">
                {language === "italian"
                  ? "forte carattere territoriale e tradizione familiare"
                  : "strong territorial character and family tradition"}
              </p>
            </li>
          </ul>
        </div>

        <div className="pt-2 text-center">
          <p className="text-sm font-medium text-primary">
            Casa Bertini dal 1951
          </p>

          <p className="mt-2 text-xs text-base-content/80">
            {language === "italian"
              ? "Settantacinque anni di eccellenza nell'artigianato dolciario italiano."
              : "Seventy-five years of excellence in Italian confectionery craftsmanship."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
