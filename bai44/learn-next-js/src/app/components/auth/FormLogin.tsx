"use client";
import { setCookie } from '@/app/helpers/cookie';
import {useRouter} from 'next/navigation';
export default function FormLogin(){
    const router=useRouter();
    const handleLogin=(event:any)=>{
        event.preventDefault();
        const username=event.target.username.value;
        const password=event.target.password.value;
        let isSuccess:boolean=true;     
        if(isSuccess){
            const token:string="UJKLSKLSFSDSDSD";
            // console.log("Login Successfully");
            router.push("/");
            setCookie("token",token,1);
            // router.push('/');
        }
        else{
            alert("Email hoặc mật khẩu không chính xác");
        }

    }
    return (
        <>
            <form className="w-[400px] border p-[15px]" onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="Username"
                className="w-full mb-[15px] border">
                </input>
                <input type="pasword" placeholder="Password"
                className="w-full mb-[15px] border" name="password">
                </input>
                <button className="w-full bg-orange-400">
                    Đăng nhập
                </button>
            </form>
        </>
    )
}