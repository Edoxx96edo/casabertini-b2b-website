import Hero from "../components/Hero";
import History from "../components/History";
import HistoryCollection from "../components/HistoryCollection";
import Location from "../components/Location";
import RebirthCollection from "../components/RebirthCollection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.sectionId;

    if (!sectionId) return;

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="rebirth">
        <RebirthCollection />
      </section>
      <History />
      <section id="history-collection">
        <HistoryCollection />
      </section>
      <Location />
    </>
  );
}

export default Home;
