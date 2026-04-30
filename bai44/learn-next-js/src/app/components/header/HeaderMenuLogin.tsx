'use client'
import Link from "next/link"
import { MenuLink } from "@/app/interfaces/MenuLink"
import {usePathname} from "next/navigation"
export default function HeaderMenuLogin(){
    const pathname=usePathname();
    const menuLogin:MenuLink[]=[
        {
            title:"Đăng nhập",
            link:"/login"
        },
        {
            title:"Đăng ký",
            link:"/register"
        }
    ]
    return(
        <>
            <ul className="flex items-center">
                {menuLogin.map((item,index)=>{
                    return(
                    <li key={index}>
                        <Link href={item.link} className={
                            "font-[500] text-white mx-[20px] "+(pathname===item.link?"text-black":"text-white")
                        }>{item.title}</Link>
                    </li>
                    )
                })}
            </ul>
        </>
    )
}