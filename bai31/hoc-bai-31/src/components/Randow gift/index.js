import { useRef, useState } from "react";

function RandomGift() {
  const gifts = ["Điện Thoại", "Máy Tính", "Xe máy", "Ô tô", "Đồng hồ"];
  const [result, setResult] = useState("");
  const counterRef = useRef(0);
  const handleRandom = () => {
    if (counterRef.current < 3) {
      const random = Math.floor(Math.random() * gifts.length);
      console.log(random);
      setResult(gifts[random]);
      counterRef.current = counterRef.current + 1;
    } else {
      alert("Bạn đã hết lượt");
    }
  };
  return (
    <>
      <button onClick={handleRandom}>Random</button>

      <div>Bạn đã trúng thưởng:{result}</div>
    </>
  );
}
export default RandomGift;
