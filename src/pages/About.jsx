import React from "react";
import antonioBertini from "../assets/historyFiles/antonio-bertini.png";
import eleonoraBertini from "../assets/historyFiles/eleonora-bertini.png";
import sergioBertini from "../assets/historyFiles/sergio-bertini.png";
import umbertoBertini from "../assets/historyFiles/umberto-bertini.png";
import { useContextLanguage } from "../contextLanguages";

const familyPortraits = [
  { name: "Antonio Bertini", image: antonioBertini },
  { name: "Eleonora Bertini", image: eleonoraBertini },
  { name: "Sergio Bertini", image: sergioBertini },
  { name: "Umberto Bertini", image: umbertoBertini },
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
                La storia di Casa Bertini è, prima di tutto, una storia di
                <span className="font-semibold text-primary"> famiglia</span>,
                <span className="font-semibold text-primary"> resilienza</span>{" "}
                e<span className="font-semibold text-primary"> rinascita</span>.
                Fondata nel 1951 a Cosenza, in Calabria, l'azienda non nasce da
                una ricchezza ereditata, ma da un'eredità di integrità e
                dedizione al lavoro.
              </>
            ) : (
              <>
                The story of Casa Bertini is, first and foremost, a story of
                <span className="font-semibold text-primary"> family</span>,
                <span className="font-semibold text-primary"> resilience</span>,
                and
                <span className="font-semibold text-primary"> renewal</span>.
                Founded in 1951 in Cosenza, Calabria, the company was born not
                from inherited wealth, but from a legacy of integrity and
                dedication to work.
              </>
            )}

            <br />

            <span className="my-3 block h-px w-full bg-base-300" />

            <span className="font-semibold uppercase tracking-[0.18em] text-primary">
              {language === "italian"
                ? "Il Coraggio di Sognare"
                : "The Courage to Dream"}
            </span>

            <span className="mx-3 inline-block h-px w-12 align-middle bg-base-content" />

            {language === "italian" ? (
              <>
                Nel dopoguerra, il fondatore Luigi Bertini comprese che il
                futuro della sua famiglia dipendeva dalla sua capacità di
                costruire qualcosa di proprio. Con risorse limitate ma una
                determinazione incrollabile, trasformò la sua passione in una
                visione imprenditoriale fondata su
                <span className="font-semibold text-primary"> qualità</span>,
                <span className="font-semibold text-primary"> eccellenza</span>{" "}
                e un autentico impegno per l'artigianalità.
              </>
            ) : (
              <>
                In the post-war period, founder Luigi Bertini recognized that
                his family's future depended on his ability to build something
                of his own. With limited resources but unwavering determination,
                he transformed his passion into an entrepreneurial vision — one
                founded on
                <span className="font-semibold text-primary"> quality</span>,
                <span className="font-semibold text-primary"> excellence</span>,
                and an authentic commitment to craftsmanship.
              </>
            )}

            <br />

            <span className="my-3 block h-px w-full bg-base-300" />

            <span className="font-semibold uppercase tracking-[0.18em] text-primary">
              {language === "italian"
                ? "La Nascita di Casa Bertini"
                : "The Birth of Casa Bertini"}
            </span>

            <span className="mx-3 inline-block h-px w-12 align-middle bg-primary/40" />

            {language === "italian" ? (
              <>
                Nel 1951 nasce Casa Bertini, frutto di una visione costruita su
                <span className="font-semibold text-primary"> coraggio</span>,
                <span className="font-semibold text-primary"> disciplina</span>{" "}
                e
                <span className="font-semibold text-primary">
                  {" "}
                  perseveranza
                </span>
                .
              </>
            ) : (
              <>
                In 1951, Casa Bertini was established — the result of a vision
                built on
                <span className="font-semibold text-primary"> courage</span>,
                <span className="font-semibold text-primary"> discipline</span>,
                and
                <span className="font-semibold text-primary">
                  {" "}
                  perseverance
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

            <span className="mx-3 inline-block h-px w-12 align-middle text-base-content bg-primary/40" />

            {language === "italian" ? (
              <>
                Oggi, dopo più di settant'anni, Casa Bertini continua a essere
                guidata dagli stessi principi fondanti. L'azienda è portata
                avanti da tre dei sei figli di Luigi — Umberto, Eleonora e
                Sergio — insieme a Edoardo, figlio di Eleonora, che rappresenta
                la nuova generazione della famiglia. Insieme custodiscono un
                patrimonio di
                <span className="font-semibold text-primary"> esperienza</span>,
                <span className="font-semibold text-primary"> conoscenza</span>{" "}
                e metodi artigianali affinati nel tempo. Molte fasi della
                produzione continuano ad affidarsi alla manualità di personale
                specializzato, preservando l'autenticità che da sempre
                contraddistingue Casa Bertini.
              </>
            ) : (
              <>
                Today, after more than seventy years, Casa Bertini remains
                guided by the same founding principles. The company is carried
                forward by three of Luigi's six children — Umberto, Eleonora,
                and Sergio — alongside Edoardo, Eleonora's son, representing the
                family's new generation. Together, they preserve a heritage of
                <span className="font-semibold text-primary"> expertise</span>,
                <span className="font-semibold text-primary"> know-how</span>,
                and artisanal methods refined over time. Many production phases
                continue to rely on skilled manual craftsmanship, safeguarding
                the authenticity that has always defined Casa Bertini.
              </>
            )}
          </p>
        </div>

        <p className="mb-4 text-center text-[10px] font-medium uppercase tracking-[0.38em] text-primary">
          {language === "italian"
            ? "I figli del fondatore Luigi Bertini"
            : "The children of founder Luigi Bertini"}
        </p>

        <div className="w-2/3 mx-auto overflow-hidden rounded-[32px] border border-base-300 bg-base-100 p-3 shadow-[0_20px_50px_rgba(52,38,24,0.04)] md:p-5">
          <div className="items-center flex-col lg:flex-row flex justify-center gap-x-12 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {familyPortraits.map((person) => (
              <div key={person.name} className="flex flex-col items-center">
                <figure className="overflow-hidden w-28 h-28 rounded-full flex items-center justify-center">
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

      <div className="mt-10 space-y-6 max-w-4xl mx-auto">
        <p className="text-base leading-relaxed">
          {language === "italian"
            ? "Nel corso della sua storia, Casa Bertini ha ricevuto riconoscimenti istituzionali di rilievo, tra cui la Medaglia d'Oro conferita presso il Campidoglio di Roma per il contributo offerto alla valorizzazione dell'eccellenza italiana nel mondo."
            : "Throughout its history, Casa Bertini has received important institutional recognitions, including the Gold Medal awarded at the Campidoglio in Rome for its contribution to promoting Italian excellence around the world."}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-none">
          <li className="rounded-lg border border-base-300 bg-base-100 p-4">
            <p className="font-semibold text-sm text-base-content">
              {language === "italian" ? "75 anni" : "75 years"}
            </p>
            <p className="text-sm text-base-content/80">
              {language === "italian"
                ? "di tradizione dolciaria italiana"
                : "of Italian confectionery tradition"}
            </p>
          </li>

          <li className="rounded-lg border border-base-300 bg-base-100 p-4">
            <p className="font-semibold text-sm text-base-content">
              {language === "italian" ? "Artigianalità" : "Craftsmanship"}
            </p>
            <p className="text-sm text-base-content/80">
              {language === "italian"
                ? "produzione autenticamente artigianale"
                : "genuinely artisanal production"}
            </p>
          </li>

          <li className="rounded-lg border border-base-300 bg-base-100 p-4">
            <p className="font-semibold text-sm text-base-content">
              {language === "italian" ? "Materie prime" : "Raw materials"}
            </p>
            <p className="text-sm text-base-content/80">
              {language === "italian"
                ? "accuratamente selezionate"
                : "carefully selected"}
            </p>
          </li>

          <li className="rounded-lg border border-base-300 bg-base-100 p-4">
            <p className="font-semibold text-sm text-base-content">
              {language === "italian" ? "Specialità" : "Specialities"}
            </p>
            <p className="text-sm text-base-content/80">
              {language === "italian"
                ? "frutta mediterranea e cioccolato"
                : "Mediterranean fruit and chocolate"}
            </p>
          </li>

          <li className="rounded-lg border border-base-300 bg-base-100 p-4">
            <p className="font-semibold text-sm text-base-content">
              Made in Italy
            </p>
            <p className="text-sm text-base-content/80">
              {language === "italian"
                ? "produzione interamente realizzata in Italia"
                : "production entirely carried out in Italy"}
            </p>
          </li>

          <li className="rounded-lg border border-base-300 bg-base-100 p-4">
            <p className="font-semibold text-sm text-base-content">
              {language === "italian" ? "Identità" : "Identity"}
            </p>
            <p className="text-sm text-base-content/80">
              {language === "italian"
                ? "forte carattere territoriale e tradizione familiare"
                : "strong territorial character and family tradition"}
            </p>
          </li>
        </ul>

        <div className="text-center">
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
