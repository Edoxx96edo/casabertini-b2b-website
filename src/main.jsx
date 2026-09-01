import React, { StrictMode } from "react";
import { ContextLanguage } from "./contextLanguages.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Contacts from "./pages/Contacts.jsx";
import TechnicalInfo from "./pages/TechnicalInfo.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />, // Gestione errori/pagine non trovate
    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: "about",
        element: <About />
      },
      {
        path: "contacts",
        element: <Contacts />
      },

      {
        path: "technical-info",
        element: <TechnicalInfo />
      },
      { path: "pivacy-policy", element: <PrivacyPolicy /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextLanguage>
      <RouterProvider router={router} />
    </ContextLanguage>
  </StrictMode>
);
