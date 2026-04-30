import {Metadata} from "next";
export const metadata: Metadata = {
  title: "Trang giới thiệu",
  description: "Đây là mô tả trang giới thiệu",
};
export default function AboutPage(){
    return(
        <>
            <h1 className="text-[32px] font-bold">About Page</h1>
        </>
    )
}