import styled from "styled-components";
import Counter from "./Counter";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;

export default function CounterList({ counters, handleAdd, handleSub }) {
  return (
    <>
      <h2>Counters</h2>
      <List>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            animalName={counter.name}
            value={counter.value}
            onAdd={() => {
              handleAdd(counter.id);
            }}
            onSub={() => {
              handleSub(counter.id);
            }}
          />
        ))}
      </List>
    </>
  );
}
