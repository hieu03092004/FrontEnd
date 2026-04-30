import {memo} from "react";
function Box(props){
    const {onCounter}=props;
    const handleClick=()=>{
        onCounter();
    }
    console.log("render Box");
    return (
        <>
            <button onClick={handleClick}>Click</button>
        </>
    )
}
export default memo(Box);