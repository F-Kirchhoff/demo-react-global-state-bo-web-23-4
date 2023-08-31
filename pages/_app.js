import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialCounters = [
  {
    id: "0",
    name: "Cats",
    value: 0,
  },
  {
    id: "1",
    name: "Dogs",
    value: 1337,
  },
  {
    id: "2",
    name: "Sheep",
    value: 23,
  },
  {
    id: "3",
    name: "Dragons",
    value: 42,
  },
];

export default function App({ Component, ...pageProps }) {
  // const {Component:Page,...pageProps} = props;

  const [counters, setCounters] = useState(initialCounters);

  // derived states
  const countSum = counters
    .map((counter) => counter.value)
    .reduce((acc, currentValue) => acc + currentValue, 0);
  const countAverage = countSum / counters.length;
  const dragonCounter = counters.find((counter) => counter.name === "Dragons");
  const dragonCount = dragonCounter.value;

  function handleAdd(counterId) {
    const updatedCounters = counters.map((counter) => {
      if (counter.id !== counterId) {
        return counter;
      } else {
        const updatedCounter = {
          ...counter,
          value: counter.value + 1,
        };

        return updatedCounter;
      }
    });

    setCounters(updatedCounters);
  }

  function handleSub(counterId) {
    const updatedCounters = counters.map((counter) => {
      if (counter.id !== counterId) {
        return counter;
      } else {
        const updatedCounter = {
          ...counter,
          value: counter.value <= 0 ? 0 : counter.value - 1,
        };

        return updatedCounter;
      }
    });

    setCounters(updatedCounters);
  }

  // const globalProps = {
  //   counters: counters,
  //   handleAdd: handleAdd,
  //   handleSub: handleSub,
  //   countAverage: countAverage,
  //   countSum: countSum,
  //   dragonCount: dragonCount,
  // };

  return (
    <>
      <GlobalStyle />
      <Layout countSum={countSum} dragonCount={dragonCount}>
        <Component
          {...pageProps}
          // {...globalProps}
          counters={counters}
          handleAdd={handleAdd}
          handleSub={handleSub}
          countAverage={countAverage}
          countSum={countSum}
          dragonCount={dragonCount}
        />
      </Layout>
    </>
  );
}
