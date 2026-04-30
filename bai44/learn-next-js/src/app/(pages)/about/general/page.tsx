import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Trang giới thiệu chung",
  description: "Đây là mô tả trang giới thiệu chung",
};
export default function AboutGeneralPage(){
    return(
        <>
            <h1 className="text-[32px] font-bold">Trang tổng quan</h1>
            <Image src="/image (19).png" alt="Ảnh test" width={400} height={255} />
            <div className="text-[40px] font-[700] font-quicksand">
                Noi dung the h2
            </div>
            <div className="text-[40px] font-[700] font-dancing">
                Noi dung the h2
            </div>
            <div style={{ fontFamily: "var(--font-quicksand)" }}>Test Quicksand</div>
            <div style={{ fontFamily: "var(--font-dancing)" }}>Test Dancing</div>

        </>
    )
}