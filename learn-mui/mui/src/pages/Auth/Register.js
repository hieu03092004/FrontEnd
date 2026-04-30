import {Button,TextField} from '@mui/material';
import { useState } from 'react';
import {authFirebase, dbFirebase} from "../../firebaseConfig";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { ref,set } from 'firebase/database';
import { AlertBox } from '../../components/Alert/AlertBox';
export const RegisterPage=()=>{
    const [emailError,setEmailError]=useState(false);
    const [passwordError,setPasswordError]=useState(false);
    const [fullNameError,setfullNameError]=useState(false);
    const [alert,setAlert]=useState(null);
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const fullName=event.target.fullName.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        if(email&& password){
            createUserWithEmailAndPassword(authFirebase, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if(user){
                        const userRef=ref(dbFirebase,"users/"+user.uid);
                        set(userRef,{
                            fullName:fullName
                        }).then(()=>{
                            navigate("/");
                        })
                        
                    }
                    else{
                        alert("Đăng ký tài khoản không thành công");
                    }
                    
                })
                .catch((error) => {
                    setAlert({
                        type:"error",
                        content:"Email đã tồn tại",
                        time:3000
                    })
                    
                });
        }
    }
    return(
        <>
            <div className="form-register">
                <AlertBox alert={alert} setAlert={setAlert}/>
                
                <form onSubmit={handleSubmit} style={{width:"500px"}}>
                    <h1>Registration</h1>
                    <TextField id="fullName" label="Họ tên" variant="outlined" color="info" type="text" placeholder="ví dụ:levana" fullWidth name="fullName" margin="normal" error={fullNameError}
                    onChange={(event)=>event.target.value===""?setfullNameError(true):setfullNameError(false)}
                    />
                    <TextField id="email" label="Email" variant="outlined" color="info" type="email" placeholder="ví dụ:levana@gmail.com" fullWidth name="email" margin="normal" error={emailError}
                    onChange={(event)=>event.target.value===""?setEmailError(true):setEmailError(false)}
                    />
                    <TextField id="password" label="Password" variant="outlined" color="info" type="password"  fullWidth name="password" margin="normal" error={passwordError} 
                    onChange={(event)=>event.target.value ===""?setPasswordError(true):setPasswordError(false)}/>
                    <div>
                        <Button variant="contained" color="info" size="medium" fullWidth type="submit">Đăng ký</Button>
                    </div>
                        
                </form>
            </div>
            
           
        </>
    )
}