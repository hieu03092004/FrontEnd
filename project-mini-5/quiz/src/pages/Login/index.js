import { useNavigate } from "react-router-dom";
import { login } from "../../services/userServices";
import { setCookie } from "../../helpers/cookie";
import {useDispatch} from "react-redux"; 
import { checkLogin } from "../../actions/login";
export const Login=()=>{
    const disPatch=useDispatch();
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const email=e.target[0].value;
        const password=e.target[1].value;
        const response=await login(email,password);
        if(response.length>0){
            navigate("/");
            setCookie("id",response[0].id,1);
            setCookie("fullName",response[0].fullName,1);
            setCookie("email",response[0].email,1);
            setCookie("token",response[0].token,1);
            disPatch(checkLogin(true));
        }
        else{
            alert("Tài khoản hoặc mật khẩu không chính xác");
        }


    }
    return(
        <>
           <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <input type="email" placeholder="Nhập email"></input>
                </div>
                <div>
                    <input type="password" placeholder="Nhập mật khẩu"></input>
                </div>
                <button type="submit">
                    Login
                </button>
           </form>
        </>
    )
}