import { Button } from "@mui/material"
import { authFirebase } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
export const LogOut=()=>{
    const navigate=useNavigate();
    const handleLogout=()=>{
        signOut(authFirebase).then(() => {
            navigate("/login");
        }).catch((error) => {
        });
    }
    return(
        <>
            <Button  style={{color:"white"}}onClick={()=>handleLogout()} startIcon={<LogoutIcon/>}>
                Đăng xuất
            </Button>   
        </>
    )
}