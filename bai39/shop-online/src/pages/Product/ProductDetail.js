import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import { cartAdd } from "../../actions/cart";

export const ProductDetailPage=()=>{
    const {productId}=useParams();
    const [productDetail,setProductDetail]=useState();
    const [quantity,setQuantity]=useState(1);
    const dispatchCart=useDispatch();
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(res=>res.json())
        .then(data=>{
            data.priceNew=(1-data.discountPercentage/100)*data.price;
            data.priceNew=+data.priceNew.toFixed(2);
            setProductDetail(data);
        })
    },[]);
    const handleQuantityUp=()=>{
        setQuantity(quantity+1);
    }
    const handleQuantityDown=()=>{
        if(quantity>1)
            setQuantity(quantity-1);
    }
    const handleAddtoCart=()=>{
       dispatchCart(cartAdd(quantity,productDetail));
    }
    return(
        <>
            {productDetail && (
                   <div className="product__detail">
                        <h1 className="">{productDetail.title}</h1>
                        <img src={productDetail.thumbnail} alt={productDetail.title} />
                        <h3>Giá cũ: <del>${productDetail.price}</del></h3>
                        <h3>Giảm{productDetail.discountPercentage}%</h3>
                        <h3>Giá mới{productDetail.priceNew}$</h3>
                        <div>
                            <button onClick={()=>handleQuantityDown()}>-</button>
                            <span style={{margin:"0 10px"}}>{quantity}</span>
                            <button onClick={()=>handleQuantityUp()}>+</button>
                        </div>
                        <button onClick={()=>handleAddtoCart()}>Thêm vào giỏ hàng</button>     
                   </div>
                   
                   
            )}
        </>
    )
}