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

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return (
    <>
      <section id="home" className="lux-section">
        <Hero />
      </section>
      <section id="rebirth" className="lux-section">
        <RebirthCollection />
      </section>
      <History />
      <section id="history-collection" className="lux-section">
        <HistoryCollection />
      </section>
      <Location />
    </>
  );
}

export default Home;
