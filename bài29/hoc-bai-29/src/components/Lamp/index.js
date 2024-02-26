import { useState } from "react";
function Lamp() {
  const [status, setState] = useState(false);
  const handleClick = () => {
    setState(!status);
  };
  console.log(status);
  return (
    <>
      <button onClick={handleClick}>Bật/Tắt</button>
      <div>{status ? "Đèn đang bật" : "Đèn đang tắt"}</div>
    </>
  );
}
export default Lamp;
