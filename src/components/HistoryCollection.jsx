import React from "react";
import presentationImage from "../assets/historyFiles/foto presentazione linea.webp";
import crocette1 from "../assets/historyFiles/crocette1.jpg";
import mandorlate1 from "../assets/historyFiles/mandorlate1.jpg";
import mandorlate2 from "../assets/historyFiles/mandorlate2.jpg";
import mandorlateSpace from "../assets/historyFiles/mandorlate 2.jpg";
import marroni2 from "../assets/historyFiles/marroni2.jpg";
import primoPianoFichi from "../assets/historyFiles/primo piano fichi.jpg";
import cremottiArance from "../assets/historyFiles/cremotti-arance.jpg";
import cremottiLimone from "../assets/historyFiles/cremotti-limone.jpg";
import delizieCiliegie from "../assets/historyFiles/Delizie-di-ciliegie.jpg";
import delizie from "../assets/historyFiles/delizie.jpg";
import { useContextLanguage } from "../contextLanguages";

function HistoryCollection() {
  const { language } = useContextLanguage();

  const galleryImages = [
    {
      title: "Crocette",
      image: crocette1,
      description:
        language === "italian"
          ? "Un’interpretazione raffinata del gusto antico, con texture croccanti e un equilibrio dolce e intenso."
          : "A refined interpretation of an ancient flavor, with a crisp texture and a sweet, intense balance."
    },
    {
      title: "Gocce Mandorlate",
      image: mandorlate1,
      description:
        language === "italian"
          ? "Fichi essiccati calabresi ricoperti di cioccolato extra fondente e farciti di mandorle, per un contrasto perfetto tra dolcezza, sapidità e nota intensa."
          : "Calabrian dried figs covered in extra dark chocolate and filled with almonds, creating a perfect contrast between sweetness, savoriness, and intensity."
    },
    {
      title: "Mandorlate detail",
      image: mandorlate2,
      description:
        language === "italian"
          ? "Il cuore della mandorla si unisce alla dolcezza del fico secco e al cacao fondente in un gesto di pura eleganza."
          : "The heart of the almond meets the sweetness of the dried fig and dark cocoa in an expression of pure elegance."
    },
    {
      title: "Marroni",
      image: marroni2,
      description:
        language === "italian"
          ? "Una proposta dal profilo più intenso, pensata per chi cerca un’esperienza autentica e piena di carattere."
          : "A more intense expression, created for those seeking an authentic experience full of character."
    },
    {
      title: "Fichi in primo piano",
      image: primoPianoFichi,
      description:
        language === "italian"
          ? "La materia del fico essiccato, intensa e naturale, mette in risalto la qualità delle materie prime e la cura artigianale."
          : "The intense and natural character of the dried fig highlights the quality of the raw materials and the artisanal care."
    },
    {
      title: "Cremotti arance",
      image: cremottiArance,
      description:
        language === "italian"
          ? "Cremotti di arance con un equilibrio dolce e agrumato, perfetti per un ritorno al gusto autentico della tradizione calabrese."
          : "Orange Cremotti with a sweet and citrus balance, perfect for rediscovering the authentic taste of Calabrian tradition."
    },
    {
      title: "Cremotti limone",
      image: cremottiLimone,
      description:
        language === "italian"
          ? "Una nota fresca e brillante, pensata per chi cerca un profilo luminoso e delicato tra la tradizione e il gusto contemporaneo."
          : "A fresh and vibrant note, created for those seeking a bright and delicate profile between tradition and contemporary taste."
    },
    {
      title: "Delizie di ciliegie",
      image: delizieCiliegie,
      description:
        language === "italian"
          ? "Il corpo intenso della ciliegia si combina con il rigore artigianale della ricetta per un’esperienza originale e piena di carattere."
          : "The intense character of the cherry combines with the artisanal precision of the recipe for an original experience full of character."
    },
    {
      title: "Delizie",
      image: delizie,
      description:
        language === "italian"
          ? "Un prodotto dall’anima rustica e raffinata, costruito per celebrare la varietà e la ricchezza del territorio calabrese."
          : "A product with a rustic yet refined soul, created to celebrate the variety and richness of the Calabrian territory."
    },
    {
      title: "Mandorlate detail2",
      image: mandorlateSpace,
      description:
        language === "italian"
          ? "Un dettaglio elegante e materico che mette in risalto la texture e la profondità del gusto."
          : "An elegant, textured detail that highlights the depth and character of the flavor."
    }
  ];

  return (
    <section className="bg-base-100 py-16 transition-colors duration-300 md:py-20">
      <div className="align-element">
        <div className="mb-10">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-base-300 pb-4">
            <p className="text-xl font-medium uppercase tracking-[0.42em] text-base-content">
              {language === "italian"
                ? " Collezione Classica"
                : " Heritage Collection"}
            </p>

            <span className="hidden h-px flex-1 bg-base-300 sm:block" />
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_1.45fr]">
            <div className="relative overflow-hidden rounded-[32px] border border-base-300 bg-base-200 px-5 py-6 shadow-md sm:px-7 md:px-8 md:py-8">
              <div className="absolute inset-y-0 left-0 w-px bg-primary" />

              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.42em] text-base-content">
                Casa Bertini
              </p>

              <ul className="space-y-3 text-base leading-relaxed text-base-content md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <span className="font-semibold uppercase tracking-[0.12em] text-base-content">
                      Gocce di Fichi
                    </span>{" "}
                    –{" "}
                    {language === "italian"
                      ? "specialità ottenute dalla lavorazione tradizionale dei fichi calabresi."
                      : "specialties obtained from the traditional processing of Calabrian figs."}
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <span className="font-semibold uppercase tracking-[0.12em] text-base-content">
                      Fruttini
                    </span>{" "}
                    –{" "}
                    {language === "italian"
                      ? "agrumi mediterranei ricoperti di cioccolato extra fondente."
                      : "Mediterranean citrus fruits covered in extra dark chocolate."}
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <span className="font-semibold uppercase tracking-[0.12em] text-base-content">
                      Cremotti
                    </span>{" "}
                    –{" "}
                    {language === "italian"
                      ? "frutta candita e liquori selezionati avvolti nel cioccolato fondente."
                      : "candied fruit and selected liqueurs wrapped in dark chocolate."}
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <span className="font-semibold uppercase tracking-[0.12em] text-base-content">
                      Delizie
                    </span>{" "}
                    –{" "}
                    {language === "italian"
                      ? "specialità realizzate con castagne, ciliegie e mandorle del Sud Italia."
                      : "specialties made with chestnuts, cherries, and almonds from Southern Italy."}
                  </span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-base-300 bg-base-200 shadow-md">
              <img
                src={presentationImage}
                alt="Foto presentazione linea Casa Bertini"
                className="object-cover object-center md:h-[500px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 mb-10 flex justify-center">
          <button className="inline-flex items-center justify-center rounded-full border border-[#d8c3a0] bg-[linear-gradient(135deg,#f9f1e6,#efe0c6)] px-7 py-3 text-xs font-medium uppercase tracking-[0.28em] text-base-content shadow-[0_14px_30px_rgba(52,38,24,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#f4e8d6,#e4ceb0)] hover:shadow-[0_18px_35px_rgba(52,38,24,0.12)]">
            {language === "italian"
              ? "Scarica il catalogo completo"
              : "Download Full Catalog"}
          </button>
        </div>

        <div className="mb-8">
          <p className="text-md font-medium uppercase tracking-[0.42em] text-base-content">
            {language === "italian" ? "Galleria storica" : "Historic gallery"}
          </p>

          <h2 className="mt-3 text-2xl font-light uppercase tracking-[0.12em] text-base-content sm:text-3xl">
            {language === "italian"
              ? "Ricordi racchiusi nella forma e nel gusto"
              : "Memories captured in form and flavor"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((item) => (
            <figure
              key={item.image}
              className="group overflow-hidden rounded-[28px] border border-base-300 bg-base-100 shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <figcaption className="space-y-3 p-5">
                <p className="text-[10px] uppercase tracking-[0.32em] text-base-content">
                  {item.title}
                </p>

                <p className="text-sm leading-relaxed tracking-[0.04em] text-base-content">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HistoryCollection;
