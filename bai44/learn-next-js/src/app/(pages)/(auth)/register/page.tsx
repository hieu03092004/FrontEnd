import {Metadata} from "next";
export const metadata:Metadata={
    title:"Trang đăng ký",
    description:"Đây là mô tả trang đăng ký"
}
export default function RegisterPage(){
    return (
        <>
            <h1 className="text-[32px] font-bold">Trang đăng ký</h1>
        </>
    )
}