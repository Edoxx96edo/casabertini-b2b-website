import { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

export function ContextLanguage({ children }) {
  const [language, setLanguage] = useState("english");
  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "english" ? "italian" : "english";
      return newLanguage;
    });
  };

  return (
    <ContextProvider.Provider value={{ toggleLanguage, language }}>
      {children}
    </ContextProvider.Provider>
  );
}

export const useContextLanguage = () => useContext(ContextProvider);
