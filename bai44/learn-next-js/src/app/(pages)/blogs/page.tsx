import {Metadata} from "next";
import BlogList from "@/app/components/blogs/BlogList"
export const metadata: Metadata = {
    title: "Trang danh sách bài viết",
    description: "Đây là mô tả trang danh sách bài viết",
};

export default async function BlogPage(){
    return (
        <>
            <h1 className="text-[32px] font-bold">Trang danh sách bài viết</h1>
            <BlogList/>
        </>
    )
}