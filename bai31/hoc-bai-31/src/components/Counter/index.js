import {useState,useCallback} from "react";
import Box from "../Box";
function Counter(){
    const [counter,setCounter]=useState(0);
    const handleClick=useCallback(()=>{
        setCounter(prevCounter => prevCounter+1);
    },[]);
    return (
        <> 
            
            <div> Kết quả:{counter}</div>
            <Box onCounter={handleClick}/>
           
        </>
    )
}
export default Counter;