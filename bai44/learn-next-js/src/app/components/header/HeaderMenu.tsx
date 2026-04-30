'use client'
import Link from "next/link"
import { MenuLink } from "@/app/interfaces/MenuLink"
import {usePathname} from "next/navigation"
export default function HeaderMenu(){
    const pathname=usePathname();
    console.log(pathname);
    const menu:MenuLink[]=[
        {
            title:"Trang chủ",
            link:"/"
        },
        {
            title:"Giới thiệu",
            link:"/about",
            children:[
                {
                    title:"Tổng quan",
                    link:"/general"
                },
                {
                    title:"Lịch sử hình thành",
                    link:"/history"
                },
                {
                    title:"Giá trị cốt lõi",
                    link:"/core-values"
                }
                
            ]
        },
        {
            title:"Sản phẩm",
            link:"/products"
        },
        {
            title:"Bài viết",
            link:"/blogs"
        },
        {
            title:"Liên hệ",
            link:"/contact"
        },
        
        ]
       
    return(
        <>
            <ul className="flex items-center">
                {menu.map((item,index)=>{
                return (
                    <li key={index} className="relative group">
                    <Link href={item.link} className={
                        "font-[500]  mx-[15px] "
                        +(pathname===item.link?"text-black":"text-white")
                    }>
                        {item.title}
                    </Link>
                    {item.children &&(
                        <ul className="absolute bg-orange-500 w-[200px] top-[100%] left-0 p-[10px] hidden group-hover:block">
                           {item.children.map((itemChild,indexChild)=>(
                            <li key={indexChild}>
                                <Link href={`${item.link}${itemChild.link}`} className={
                                    "font-[500]  mx-[15px] "+(pathname===`${item.link}${itemChild.link}`?"text-black":"text-white")
                                }>
                                    {itemChild.title}
                                </Link>
                            </li>
                           ))}
                        </ul>
                    )}
                    </li>
                )
                })}
            </ul>
        </>
    )
}