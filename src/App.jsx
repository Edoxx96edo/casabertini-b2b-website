import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useContextLanguage } from "./contextLanguages";
import { Link } from "react-router-dom";

export default function App() {
  const { language } = useContextLanguage();
  return (
    <div className="flex min-h-dvh flex-col bg-base-200 text-base-content">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(212,170,102,0.2),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(120,90,60,0.12),_transparent_35%)]" />

      <Navbar />

      <main className=" align-element  min-w-sm flex w-full h-full flex-1 flex-col ">
        <Outlet />
      </main>

      <footer className="mt-auto w-full border-t border-base-300 bg-base-100 py-8 transition-colors duration-300">
        <div className="align-element flex flex-col items-center justify-between gap-6 text-center text-[11px] font-medium uppercase tracking-[0.24em] text-base-content/70 md:flex-row md:text-left">
          <div className="space-y-1">
            <p className="font-semibold text-base-content">Casa Bertini</p>
            <p className="lowercase tracking-normal">
              email: info@sweetsinternationalsrls.com
            </p>
            <p className="normal-case tracking-normal">
              tel: +(39) 0984 28 803 • Via F. Principe 21, 87100 Cosenza, Italy
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <Link
              to="/privacy-policy"
              className="transition-colors duration-200 hover:text-base-content underline decoration-base-content/30 underline-offset-4"
            >
              Privacy & Cookie Policy
            </Link>
            <p>
              © 2026
              {language === "italian"
                ? "Tutti i diritti riservati"
                : "All rights reserved"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
