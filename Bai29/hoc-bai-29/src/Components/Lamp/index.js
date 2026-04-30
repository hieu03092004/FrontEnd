import {useState} from "react";
function Lamp(){
    const [status,setStatus]=useState(false);
    const handleClick =()=>{
        setStatus(!status);
    }
    return (
        <>
            <button onClick={handleClick}> 
                {status ? "Tắt đi" :"Bật lên"}
            </button>
            <div>
                {status ?"Đèn đang bật":"Đèn đang tắt"}
            </div>
        </>
    )
}
export default Lamp;