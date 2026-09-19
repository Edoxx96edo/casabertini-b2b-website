import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import ThemeToggleIcon from "./ThemeToggleIcon";
import { italianLanguage, EnglandFlag } from "../assets/flags/flags.jsx";
import { useContextLanguage } from "../contextLanguages.jsx";

const ItalyFlag = italianLanguage.flag;

function Navbar() {
  const { toggleLanguage, language } = useContextLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "luxury");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((previous) => (previous === "bumblebee" ? "luxury" : "bumblebee"));

  const handleNavClick = (event, sectionId, path) => {
    event.preventDefault();
    if (!sectionId) {
      navigate(path);
      return;
    }

    if (location.pathname === "/" && path === "/") {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate(path, { state: { sectionId } });
  };

  const navItems = [
    { name: "Home", path: "/", sectionId: "home" },
    { name: language === "italian" ? "Collezione Rinascita" : "Rebirth Collection", path: "/", sectionId: "rebirth" },
    { name: language === "italian" ? "Collezione Classica" : "Heritage Collection", path: "/", sectionId: "history-collection" },
    { name: language === "italian" ? "Chi siamo" : "About", path: "/about" },
    { name: language === "italian" ? "Info tecniche" : "Technical info", path: "/technical-info" },
    { name: language === "italian" ? "Contatti" : "Contacts", path: "/contacts" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/80 backdrop-blur-xl">
      <nav className="align-element flex min-h-[74px] items-center justify-between gap-3 py-2.5">
        <Link to="/" className="shrink-0" aria-label="Casa Bertini home">
          <img src={Logo} alt="Casa Bertini" className="h-12 w-auto object-contain sm:h-14" />
        </Link>

        <div className="hidden xl:flex xl:flex-1 xl:justify-center">
          <ul className="menu menu-horizontal gap-0.5 rounded-full border border-base-content/10 bg-base-100/70 p-1.5 shadow-[0_10px_30px_rgba(20,15,10,0.06)]">
            {navItems.map((item) => (
              <li key={item.name}>
                <button onClick={(event) => handleNavClick(event, item.sectionId, item.path)} className="rounded-full px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-base-content/70 hover:bg-primary hover:text-primary-content">
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end xl:hidden">
            <button type="button" tabIndex={0} className="btn btn-ghost btn-sm rounded-full border border-base-content/10 bg-base-100/70 px-4 text-[10px] font-bold uppercase tracking-[0.16em] shadow-sm">
              {language === "italian" ? "Menu" : "Menu"}
            </button>
            <ul tabIndex={0} className="dropdown-content menu z-50 mt-3 w-64 rounded-[20px] border border-base-content/10 bg-base-100 p-2 shadow-2xl backdrop-blur-xl">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button onClick={(event) => handleNavClick(event, item.sectionId, item.path)} className="rounded-xl px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-base-200 hover:text-primary">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <ThemeToggleIcon toggleTheme={toggleTheme} theme={theme} />
          <button type="button" onClick={toggleLanguage} className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-base-content/10 bg-base-100/70 px-2 shadow-sm hover:border-primary hover:bg-primary/10" aria-label={language === "italian" ? "Switch to English" : "Passa all’italiano"}>
            {language === "italian" ? <ItalyFlag /> : <EnglandFlag />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
