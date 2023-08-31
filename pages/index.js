import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage({
  counters,
  countAverage,
  countSum,
  dragonCount,
}) {
  return (
    <>
      <h1>{counters[0].name}</h1>
      <CounterStats
        counters={counters}
        countAverage={countAverage}
        countSum={countSum}
        dragonCount={dragonCount}
      />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
