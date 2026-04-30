import {Metadata} from "next";
export const metadata: Metadata = {
  title: "Trang giá trị cốt lõi",
  description: "Đây là mô tả trang giá trị cốt lõi",
};
export default function AboutCoreValuesPage(){
    return(
        <>
            <h1 className="text-[32px] font-bold">Trang giá trị cốt lõi</h1>
        </>
    )
}