import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function incHandler() {
    setCounter(counter + 1);
  }
  function decHandler() {
    setCounter(counter - 1);
  }
  function resetHandler() {
    setCounter(0);
  }
  return (
    <>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={incHandler}>Increment</button>
      <button onClick={decHandler}>Decrement</button>
      <div>Count {counter}</div>
    </>
  );
}

export default Counter;
