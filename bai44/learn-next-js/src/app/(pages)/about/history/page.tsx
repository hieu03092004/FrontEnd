import {Metadata} from "next";
export const metadata: Metadata = {
  title: "Trang lịch sử hình thành",
  description: "Đây là mô tả trang lịch sử hình thành",
};
export default function AboutGeneralPage(){
    return(
        <>
            <h1 className="text-[32px] font-bold">Trang lịch sử hình thành</h1>
        </>
    )
}