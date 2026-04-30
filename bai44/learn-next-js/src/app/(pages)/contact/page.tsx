import {Metadata} from "next";
export const metadata: Metadata = {
    title: "Trang liên hệ",
    description: "Đây là mô tả trang liên hệ",
};
export default function ContactPage(){
    return (
        <>
            <h1 className="text-[32px] font-bold">Trang liên hệ</h1>
        </>
    )
}