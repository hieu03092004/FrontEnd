import Link from "next/link";
const getDataBlogList=async()=>{
    const res=await fetch("https://dummyjson.com/posts");
    const data=await res.json();
    return data;
}
export default async function BlogList(){
    const data=await getDataBlogList();
    // console.log(data);
    return(
        <>
           <ul>
                {data.posts.map((item:any)=>{
                    return(
                        <li key={item.id} className="mb-[10px]">
                            <Link href={`/blogs/${item.id}`} className="font-[600]">
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
           </ul>
        </>
    )
}