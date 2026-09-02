import React from "react";
import { useContextLanguage } from "../contextLanguages";

function Contacts() {
  const { language } = useContextLanguage();

  return (
    <section className="min-h-screen bg-base-200 py-20">
      <div className="align-element flex min-h-[70vh] items-center justify-center">
        <div className="w-full max-w-2xl rounded-[32px] border border-base-300 bg-base-100 p-8 text-center shadow-xl md:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-primary">
            {language === "italian" ? "Contatti" : "Contact"}
          </p>

          <h1 className="mt-5 text-3xl font-light uppercase tracking-[0.12em] text-base-content md:text-5xl">
            {language === "italian" ? "Mettiti in contatto" : "Get in touch"}
          </h1>

          <div className="mx-auto mt-6 h-px w-16 bg-primary" />

          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-base-content/70 md:text-lg">
            {language === "italian"
              ? "Per informazioni, collaborazioni e richieste commerciali, puoi contattare Casa Bertini attraverso i seguenti canali."
              : "For information, collaborations, and business enquiries, you can contact Casa Bertini through the following channels."}
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:info@sweetsinternationalsrls.com"
              className="block wrap-break-word rounded-2xl border border-base-300 bg-base-200 px-6 py-5 transition hover:border-primary hover:bg-base-300"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-base-content/50">
                Email
              </p>

              <p className="mt-2 text-lg font-medium tracking-wide text-primary md:text-xl">
                info@casabertinidolci.com
              </p>
            </a>

            <a
              href="tel:+39098428803"
              className="block rounded-2xl border border-base-300 bg-base-200 px-6 py-5 transition hover:border-primary hover:bg-base-300"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-base-content/50">
                {language === "italian" ? "Telefono" : "Telephone"}
              </p>

              <p className="mt-2 text-lg font-medium tracking-wide text-base-content md:text-xl">
                +39 0984 28 803
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
