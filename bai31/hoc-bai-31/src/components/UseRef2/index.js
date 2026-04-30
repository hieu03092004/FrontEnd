import {useState,useRef } from 'react';
function UseRef2() {
  const [inputValue,setInputValue]=useState("");
  const counterRef=useRef(0)
  const handleChange=(e)=>{
    setInputValue(e.target.value);
    counterRef.current=counterRef.current+1;
    // console.log(e.target.value);
  }
  console.log(counterRef.current);
  return (
  <>
    <input value={inputValue} onChange={handleChange}></input>
  </>
);
}
export default UseRef2;
