import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useState, useEffect } from "react";
import ThemeToggleIcon from "./ThemeToggleIcon";
import {
  italianLanguage,
  englishLanguage,
  EnglandFlag
} from "../assets/flags/flags.jsx";
import { useContextLanguage } from "../contextLanguages.jsx";

const ItalyFlag = italianLanguage.flag;

function Navbar() {
  const { toggleLanguage, language } = useContextLanguage();

  //////// THEME SETTINGS
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "luxury";
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    console.log(
      "Tema attuale nel DOM:",
      document.documentElement.getAttribute("data-theme")
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "bumblebee" ? "luxury" : "bumblebee"));
  };

  //// CLICKS SETTING

  const handleNavClick = (e, sectionId) => {
    if (!sectionId) return;

    if (location.pathname === "/") {
      e.preventDefault();
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
  };

  /////////NAVIGATION ITEMS

  const navItems = [
    {
      name: language === "italian" ? "Home" : "Home",
      path: "/",
      sectionId: "home"
    },
    {
      name:
        language === "italian" ? "Collezione Rinascita" : "Rebirth Collection",
      path: "/",
      sectionId: "rebirth"
    },
    {
      name:
        language === "italian" ? "Collezione Classica" : "Heritage Collection",
      path: "/",
      sectionId: "history-collection"
    },
    ,
    {
      name: language === "italian" ? "Chi siamo" : "About",
      path: "/about"
    },
    {
      name: language === "italian" ? "Info Tecniche" : "Technical Info",
      path: "/technical-info"
    },
    {
      name: language === "italian" ? "Contatti" : "Contacts",
      path: "/contacts"
    }
  ];

  return (
    <header className="sticky top-0 z-50  h-21 border-b border-base-200  bg-base-100/80 backdrop-blur-xl transition-colors duration-300">
      <nav className="align-element flex items-center justify-between gap-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-3  "
          aria-label="Casa Bertini home"
        >
          <img
            src={Logo}
            alt="casa bertini"
            className="rounded-2xl h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm rounded-full border border-base-300 bg-base-100/60 px-4 text-[11px] font-medium uppercase tracking-[0.22em] text-base-content shadow-sm"
          >
            {language === "italian" ? "Menu" : "Menu"}
          </div>

          <ul
            tabIndex="-1"
            className="dropdown-content menu z-1 mt-3 w-56 rounded-2xl border border-base-200 bg-base-100 p-2 shadow-xl"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className="rounded-xl px-3 py-2 text-sm tracking-[0.12em] text-base-content uppercase hover:bg-base-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 rounded-full border border-base-200 bg-base-100/70 p-2 shadow-sm backdrop-blur-md">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className="rounded-full px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-base-content hover:bg-base-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ThemeToggleIcon toggleTheme={toggleTheme} theme={theme} />

        <div
          className="sm:relative sm:mb-auto lg:absolute top-3 right-5 flex flex-col items-center cursor-pointer"
          onClick={() => toggleLanguage()}
        >
          {language === "italian" ? <ItalyFlag /> : <EnglandFlag />}

          <p className="hidden lg:block">eng-it</p>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
