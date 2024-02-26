import { useState, useMemo } from "react";
import { pow } from "../../helpers/pow";
function Counter() {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter((counter) => counter + 1);
  };
  const resultPow = useMemo(() => {
    pow();
  }, []);
  return (
    <>
      <div>Kết quả là:{counter}</div>
      <button onClick={handleCounter}>Counter</button>
      <div>{resultPow}</div>
    </>
  );
}
export default Counter;
