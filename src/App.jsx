import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useContextLanguage } from "./contextLanguages";

export default function App() {
  const { language } = useContextLanguage();

  return (
    <div className="luxury-site flex min-h-dvh flex-col bg-base-200 text-base-content">
      <Navbar />

      <main className="align-element flex min-w-0 flex-1 flex-col">
        <Outlet />
      </main>

      <footer className="relative mt-auto overflow-hidden border-t border-base-content/10 bg-base-100/80 py-9 backdrop-blur-md">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <div className="align-element flex flex-col gap-7 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="lux-kicker">Casa Bertini · Cosenza</p>
            <p className="mt-3 font-serif text-xl tracking-tight text-base-content">Artisanal confectionery since 1951</p>
            <div className="mt-4 flex flex-col gap-1 text-xs tracking-wide text-base-content/65 sm:flex-row sm:gap-4">
              <a className="hover:text-primary" href="mailto:info@casabertinidolci.com">info@casabertinidolci.com</a>
              <a className="hover:text-primary" href="tel:+39098428803">+39 0984 28 803</a>
              <span>Via F. Principe 21, 87100 Cosenza, Italy</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-base-content/60 md:items-end">
            <Link to="/privacy-policy" className="text-base-content underline decoration-primary/60 underline-offset-4 hover:text-primary">
              Privacy & Cookie Policy
            </Link>
            <p>© 2026 · {language === "italian" ? "Tutti i diritti riservati" : "All rights reserved"}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
