import {useSearchParams ,useParams} from "react-router-dom";
import { useEffect, useState } from "react";

export const ProductDetail=()=>{
    const {productId}=useParams();
  
    const [productDetail,setProductDetail]=useState();
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(res=>res.json())
        .then(data=>{
           setProductDetail(data);
        })
    },[]);
    return(
        <>
            {productDetail&&(
                <div className="produt-detail">
                    <h1 className="product-detail__title">{productDetail.title}</h1>
                    <img src={productDetail.thumbnail} alt={productDetail.title} className="product-detail__image">
                    </img>
                </div>
            )}
        </>
    )
}