import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";

function LogOut(){
    const navigate=useNavigate();
    const disPatch=useDispatch();

    
    useEffect(()=>{
        deleteAllCookies();
        disPatch(checkLogin(false));
        navigate("/login");
    },[])
    
    return(
        <>

        </>
    )
}
export default LogOut;