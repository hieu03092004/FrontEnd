import {Metadata} from "next";
import FormLogin from "@/app/components/auth/FormLogin";
export const metadata: Metadata ={
    title:"Trang đăng nhập",
    description:"Đây là mô tả trang đăng nhập"
}
export default function LoginPage(){
    return (
        <>
            <h1 className="text-[32px] font-bold">Trang đăng nhập</h1>
            <FormLogin/>
        </>
    )
}