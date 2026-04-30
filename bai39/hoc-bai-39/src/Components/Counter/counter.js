import { useDispatch, useSelector } from "react-redux";
import { counterUp,counterDown,counterReset } from "../../actions/counter";
export const Counter=()=>{
    const count=useSelector(state=>state.counterReducer.count);
    const dispatchCount=useDispatch();
    console.log(count);
    const handelUp=()=>{    
        dispatchCount(counterUp());
    }
     const handleDown=()=>{    
        dispatchCount(counterDown());
    }
    const handleReset=()=>{
        dispatchCount(counterReset());
    }
    return(
        <>
            <h1>Count:{count}</h1>
            <button onClick={()=>handelUp()}>UP</button>
            <button onClick={()=>handleDown()}>DOWN</button>
            <button onClick={()=>handleReset()}>RESET</button>
        </>
    )
}