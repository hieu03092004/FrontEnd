import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuLogin from "./HeaderMenuLogin";
export default function Header(){
    
    return (
        <>
        <header className="bg-orange-400 flex justify-between items-center px-[40px] py-[15px]">
          <div className="">
            <Link href="/" className="text-white text-[32px] font-bold">
              Logo
            </Link>
          </div>
          <div className="">
            <HeaderMenu/>
          </div>
          <div className="">
            <HeaderMenuLogin/>
          </div>
        </header>
        </>
    )
}