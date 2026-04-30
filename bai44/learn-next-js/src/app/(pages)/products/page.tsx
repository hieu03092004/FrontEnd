import {Metadata} from "next";
export const metadata:Metadata={
    title:"Trang danh sách sản phẩm",
    description:"Đây là mô tả trang danh sách sản phẩm"
}
export default function ProductPage(){
    return (
        <>
            <h1 className="text-[32px] font-bold">Trang danh sách sản phẩm</h1>
        </>
    )
}