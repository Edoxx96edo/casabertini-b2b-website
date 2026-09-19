import React from "react";
import { useContextLanguage } from "../contextLanguages";

function Contacts() {
  const { language } = useContextLanguage();

  return (
    <section className="lux-section flex min-h-[calc(100dvh-180px)] items-center py-12 md:py-20">
      <div className="w-full">
        <div className="lux-card mx-auto grid max-w-5xl overflow-hidden rounded-[32px] border border-base-content/10 bg-base-100/75 md:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-base-300/50 p-7 md:p-10">
            <p className="lux-kicker">{language === "italian" ? "Contatti commerciali" : "Business enquiries"}</p>
            <h1 className="lux-heading mt-5 text-5xl sm:text-6xl">{language === "italian" ? "Parliamo di qualità." : "Let’s talk quality."}</h1>
            <p className="mt-6 max-w-sm leading-relaxed text-base-content/70">{language === "italian" ? "Per informazioni, collaborazioni e richieste commerciali, il nostro team è a disposizione." : "For information, partnerships and business enquiries, our team is at your disposal."}</p>
          </div>
          <div className="p-5 sm:p-7 md:p-10">
            <div className="space-y-3">
              <a href="mailto:info@casabertinidolci.com" className="group block rounded-2xl border border-base-content/10 p-5 hover:border-primary hover:bg-base-200/60">
                <p className="lux-kicker">Email</p><p className="mt-3 break-all font-serif text-xl text-base-content sm:text-2xl">info@casabertinidolci.com <span className="ml-1 text-primary group-hover:ml-2">↗</span></p>
              </a>
              <a href="tel:+39098428803" className="group block rounded-2xl border border-base-content/10 p-5 hover:border-primary hover:bg-base-200/60">
                <p className="lux-kicker">{language === "italian" ? "Telefono" : "Telephone"}</p><p className="mt-3 font-serif text-2xl text-base-content">+39 0984 28 803 <span className="ml-1 text-primary group-hover:ml-2">↗</span></p>
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-base-content/55">{language === "italian" ? "Casa Bertini · Via F. Principe 21, 87100 Cosenza, Italia" : "Casa Bertini · Via F. Principe 21, 87100 Cosenza, Italy"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
