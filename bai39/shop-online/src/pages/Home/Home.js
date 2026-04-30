import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const HomePage=()=>{
    const [productList,setProductList]=useState();
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProductList(data.products);
        })
    },[])
    return(
        <>
            <h1>Trang chủ</h1>
           {
            productList&&(
                <div className="product__list">
                    {productList.map((item)=>{
                        return(
                            <div className="product__item" key={item.id}>
                                <Link to={`/products/${item.id}`}>
                                    <img src={item.thumbnail} alt={item.title}></img>
                                    <h3>{item.title}</h3>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            )
           }
        </>
    )
}