import Link from "next/link";
export default function NotFoundPage(){
    return(
        <>  
            <div className="text-center my-[100px]">
                <h2 className="text-[40px] font-[700]">404 Not Found</h2>
                <p className="mt-[10px] mb-[30px]">Could not find requested resource</p>
                 
                <Link href="/" className="inline-flex bg-orange-400 py-[15px] px-[40px] rounded-[5px]">Return Home</Link>
            </div>
           
        </>
    )
}