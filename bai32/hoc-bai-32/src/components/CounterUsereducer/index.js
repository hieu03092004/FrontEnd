import { useState, useReducer } from "react";
function CounterReducer() {
  //   const [counter, setCounter] = useState(0);
  const reducer = (state, action) => {
    console.log(state, action);
    //action up,down,reset
    switch (action) {
      case "UP":
        return state + 1;
      case "DOWN":
        return state - 1;
      case "RESET":
        return 0;
      default:
        return state;
    }
  };
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>Kết quả:{counter}</div>
      <button onClick={() => dispatch("UP")}>Up</button>
      <button onClick={() => dispatch("DOWN")}>Down</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </>
  );
}
export default CounterReducer;
