import {useState,useEffect,useReducer} from 'react';
const init={
  products:[],
  loading:true,
}
const reducer=(state,action)=>{
  if(action.type=="Success"){
    return {
      products:action.products,
      loading:false,
    }
  }
  else{
    return state;
  }
}
function ProductReducer(){
  const [data,dispatch]=useReducer(reducer,init)
  useEffect(()=>{
    const fetchApi=async()=>{
      await fetch("https://dummyjson.com/products")
      .then((res)=>res.json())
      .then((data)=>{
        dispatch({
          type:"Success",
          products:data.products,
        })
        // setProducts(data.products);
        // setLoading(false);
      })
    }
    setTimeout(()=>{
      fetchApi();
    },3000)
  },[]);
  console.log(data);
  return (
    <>
      {
        data.loading?(
          <>
            <h1>Dang tai du lieu...</h1>
          </>
        ):
          (<ul>
            {data.products.map(item=>{
              return(
                <li key={item.id}>
                  {item.title}
                </li>
              )
            })}
          </ul>
        )
        
      }
    </>
  );
}
export default ProductReducer;