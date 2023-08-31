import InfoBox from "../components/InfoBox";
import Navigation from "../components/Navigation";
import CounterList from "../components/CounterList";
import Link from "../components/Link";

export default function CountersPage({ counters, handleAdd, handleSub }) {
  return (
    <>
      <Link href="/">← Back</Link>

      <CounterList
        counters={counters}
        handleAdd={handleAdd}
        handleSub={handleSub}
      />

      <InfoBox />

      <Navigation />
    </>
  );
}
