import Hero from "../components/Hero";
import History from "../components/History";
import HistoryCollection from "../components/HistoryCollection";
import Location from "../components/Location";
import RebirthCollection from "../components/RebirthCollection";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <History />
      <section id="rebirth">
        <RebirthCollection />
      </section>
      <section id="history-collection">
        <HistoryCollection />
      </section>
      <Location />
    </>
  );
}

export default Home;
