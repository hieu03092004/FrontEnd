import {Metadata} from "next";
const getDataBlogDetail=async(id:String)=>{
    const res=await fetch(`https://dummyjson.com/posts/${id}`);
    const data=await res.json();
    return data;

}
export async function generateMetadata({params}:{params:{id:String}}){
    const data=await getDataBlogDetail(params.id);
    return {
        title:data.title,
        description:data.body,
    }
}

export default async function BlogDetailPage(
    {params}:{params:{id:String}}
){
    const data=await getDataBlogDetail(params.id);
    // console.log(data);
    return (
        <>
            <h1 className="text-[32px] font-bold">
                {data.title}
            </h1>
            <ul>
                <li>Views:{data.views}</li>
                <li>Likes:{data.reactions.likes}</li>
                <li>Likes:{data.reactions.dislikes}</li>
            </ul>
            <p>
                {data.body}
            </p>
        </>
    )
}