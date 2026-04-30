import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const Products = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const newQueryParams=new URLSearchParams(searchParams);
    const page=searchParams.get("page") || 1;
    const limit=searchParams.get("limit")|| 8;
    const skip=(parseInt(page)-1)*limit;
    const [listProduct,setListProduct]=useState([]);
    const [totalPagination,setTotalPagination]=useState(0);
    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=${limit}&&skip=${skip}`)
        .then(res=>res.json())
        .then(data=>{
            setListProduct(data.products);
            console.log("Limit",limit)
            setTotalPagination(Math.ceil(data.total/limit));
        })
    },[skip,limit])
    const handlePagination=(pageNumber)=>{
        newQueryParams.set("page",pageNumber)
        setSearchParams(newQueryParams);
    }
    const handelChangeLimit=(event)=>{
        // console.log(event.target.value);
        const limitItems=parseInt(event.target.value);
       newQueryParams.set("limit",limitItems);
       setSearchParams(newQueryParams);

    }
    return (
        <>
            <h1>Danh sách sản phẩm</h1>
            {listProduct&&(
                <div className="products">
                    {listProduct.map((item,index)=>{
                       return(
                            <div className="product_item" key={index}>
                                <Link to={`/products/${item.id}`}>
                                    <img src={item.thumbnail} alt={item.title}></img>
                                    <h3>{item.title}</h3>
                                </Link>
                                
                            </div>
                       )
                    })}

                </div>
            )}
            <div className="pagination">
                {Array(totalPagination).fill().map((item,index)=>{
                    return(
                        <button key={index} className={index+1===parseInt(page)?"active":""} onClick={()=>handlePagination(index+1)}>{index+1}</button>
                    )
                })}
            </div>
            <select className="limit-items" onChange={handelChangeLimit} defaultValue={limit}>
                <option value={8}>
                    8
                </option>
                <option value={16}>
                    16
                </option>
                <option value={24}>
                    24
                </option>
            </select>
        </>
    )
}