import {useState,useRef,useEffect} from 'react';
function UseRef4(){
    const [inputValue,setInputValue]=useState('');
    const inputRef=useRef();
    useEffect(()=>{
        inputRef.current.focus();

    },[])
    const handleChange=(e)=>{
        setInputValue(e.target.value);
    }
    return(
        <>
            <input  ref={inputRef}value={inputValue} onChange={handleChange}></input>
        </>
    )
}
export default UseRef4;