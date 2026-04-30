import { useEffect } from "react";

function UseEffect1() {
  useEffect(()=>{
    let listItem =document.querySelectorAll("ul li");
    console.log(listItem);
  })

  return (
    <>
      <ul>
        <li>Muc1</li>
        <li>Mục2</li>
        <li>Mục3</li>
      </ul>
    </>
  );
}
export default UseEffect1;
