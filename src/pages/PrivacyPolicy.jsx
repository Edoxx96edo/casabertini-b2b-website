import React from "react";
import { Link } from "react-router-dom";
import { useContextLanguage } from "../contextLanguages";

function PrivacyPolicy() {
  const { language } = useContextLanguage();

  return (
    <section className="bg-base-200 py-6 transition-colors duration-300 md:py-20">
      <div className="align-element">
        <div className="mb-8 text-center">
          <p className="text-md font-medium uppercase tracking-[0.42em] text-base-content">
            {language === "italian"
              ? "Informazioni Legali"
              : "Legal Information"}
          </p>

          <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.12em] text-base-content sm:text-3xl md:text-4xl">
            Privacy & Cookie Policy
          </h3>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6">
          <article className="rounded-[22px] border border-base-300 bg-base-100 p-6 shadow-md transition-colors duration-300">
            <p className="text-[10px] uppercase tracking-[0.42em] text-base-content">
              {language === "italian"
                ? "Titolare del trattamento"
                : "Data Controller"}
            </p>

            <h4 className="mt-4 text-xl font-light uppercase tracking-[0.14em] text-base-content">
              Casa Bertini
            </h4>

            <p className="mt-4 text-sm leading-relaxed tracking-[0.04em] text-base-content">
              {language === "italian"
                ? "Il Titolare del trattamento dei dati è Casa Bertini, con sede a Cosenza (Calabria, Italia). Per qualsiasi chiarimento o per esercitare i propri diritti relativi al trattamento dei dati personali, è possibile contattarci all'indirizzo email aziendale presente nella sezione contatti."
                : "The Data Controller is Casa Bertini, based in Cosenza (Calabria, Italy). For any clarification or to exercise your rights regarding personal data processing, you can contact us via our official email in the contact section."}
            </p>
          </article>

          <article className="rounded-[22px] border border-base-300 bg-base-100 p-6 shadow-md transition-colors duration-300">
            <p className="text-[10px] uppercase tracking-[0.42em] text-base-content">
              {language === "italian" ? "Uso dei Cookie" : "Cookie Usage"}
            </p>

            <h4 className="mt-4 text-xl font-light uppercase tracking-[0.14em] text-base-content">
              {language === "italian"
                ? "Nessun tracciamento"
                : "No Tracking Cookies"}
            </h4>

            <p className="mt-4 text-sm leading-relaxed tracking-[0.04em] text-base-content">
              {language === "italian"
                ? "Questo sito è un sito vetrina informativo e NON utilizza cookie di profilazione, cookie di terze parti o strumenti di tracciamento avanzato (come Google Analytics o Meta Pixel). Non vengono memorizzati dati personali durante la semplice consultazione del sito."
                : "This website is an informational showcase and DOES NOT use profiling cookies, third-party cookies, or advanced tracking tools (such as Google Analytics or Meta Pixel). No personal data is stored during normal browsing."}
            </p>
          </article>

          <article className="rounded-[22px] border border-base-300 bg-base-100 p-6 shadow-md transition-colors duration-300">
            <p className="text-[10px] uppercase tracking-[0.42em] text-base-content">
              {language === "italian" ? "Dati raccolti" : "Collected Data"}
            </p>

            <h4 className="mt-4 text-xl font-light uppercase tracking-[0.14em] text-base-content">
              {language === "italian"
                ? "Tipologia e Finalità"
                : "Types & Purpose"}
            </h4>

            <ul className="mt-4 space-y-3 text-sm leading-relaxed tracking-[0.04em] text-base-content">
              <li>
                •{" "}
                {language === "italian"
                  ? "Dati forniti volontariamente: L'invio facoltativo e volontario di posta elettronica agli indirizzi indicati su questo sito comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste."
                  : "Voluntarily provided data: Sending emails to the contact addresses provided on this site entails the acquisition of the sender's address, necessary to respond to inquiries."}
              </li>
              <li>
                •{" "}
                {language === "italian"
                  ? "Dati di navigazione: I sistemi informatici preposti al funzionamento del sito acquisiscono solo dati tecnici anonimi strettamente necessari alla trasmissione dei protocolli di comunicazione internet."
                  : "Navigation data: Technical systems process only strictly necessary anonymous data required for standard internet communication protocols."}
              </li>
            </ul>
          </article>

          <article className="rounded-[22px] border border-base-300 bg-base-100 p-6 shadow-md transition-colors duration-300">
            <p className="text-[10px] uppercase tracking-[0.42em] text-base-content">
              {language === "italian"
                ? "Diritti dell'utente"
                : "User Rights (GDPR)"}
            </p>

            <h4 className="mt-4 text-xl font-light uppercase tracking-[0.14em] text-base-content">
              {language === "italian"
                ? "Controllo sui propri dati"
                : "Data Control"}
            </h4>

            <p className="mt-4 text-sm leading-relaxed tracking-[0.04em] text-base-content">
              {language === "italian"
                ? "Ai sensi del Regolamento Europeo 2016/679 (GDPR), gli utenti hanno il diritto in qualunque momento di ottenere la conferma dell'esistenza o meno dei propri dati, di conoscerne il contenuto e l'origine, di verificarne l'esattezza o chiederne l'integrazione, l'aggiornamento o la cancellazione."
                : "Under European Regulation 2016/679 (GDPR), users have the right at any time to request confirmation of the existence of their data, verify its accuracy, or ask for its integration, updating, or erasure."}
            </p>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-[#d8c3a0] bg-[linear-gradient(135deg,#f9f1e6,#efe0c6)] px-7 py-3 text-xs font-medium uppercase tracking-[0.28em] text-base-content shadow-[0_14px_30px_rgba(52,38,24,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#f4e8d6,#e4ceb0)] hover:shadow-[0_18px_35px_rgba(52,38,24,0.12)]"
          >
            {language === "italian" ? "Torna alla Home" : "Back to Home"}
          </Link>
        </div>
      </div>
    </section>
  );
}
export default PrivacyPolicy;
