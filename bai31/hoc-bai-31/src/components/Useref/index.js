import { useRef, useState } from "react";
function Useref() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);
  const handleClick = () => {
    counterRef.current = counterRef.current + 1;
    // setCounter(counter + 1);
  };
  console.log(counter);
  console.log(counterRef);
  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
export default Useref;
