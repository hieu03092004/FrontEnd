import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { authFirebase } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AlertBox } from '../../components/Alert/AlertBox';
export const LoginPage = () => {
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();
    const [alert,setAlert]=useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (email && password) {
            signInWithEmailAndPassword(authFirebase, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if(user){
                        navigate("/");
                    }
                })
                .catch((error) => {
                    setAlert({
                        type:"error",
                        content:"Tài khoản hoặc mật khẩu không chính xác",
                        time:3000
                    })
                });
        }
    }
    return (
        <>
            <div className="form-login">
                <AlertBox alert={alert} setAlert={setAlert}/>
                <form onSubmit={handleSubmit} style={{ width: "500px" }}>
                    <h1>Login</h1>
                    <TextField id="email" label="Email" variant="outlined" color="info" type="email" placeholder="ví dụ:levana@gmail.com" fullWidth name="email" margin="normal" error={emailError}
                        onChange={(event) => event.target.value === "" ? setEmailError(true) : setEmailError(false)}
                    />
                    <TextField id="password" label="Password" variant="outlined" color="info" type="password" fullWidth name="password" margin="normal" error={passwordError}
                        onChange={(event) => event.target.value === "" ? setPasswordError(true) : setPasswordError(false)} />
                    <div>
                        <Button variant="contained" color="info" size="medium" fullWidth type="submit">Đăng nhập</Button>
                    </div>

                </form>
            </div>

        </>
    )
}