import {Metadata} from "next";
export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Đây là mô tả trang chủ",
};
export default function Home() {
  
  
  return (
    <>
      <h1 className="text-[32px] font-bold">Trang chủ</h1>
    </>
  );
}
