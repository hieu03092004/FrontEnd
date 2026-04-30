import { useSelector ,useDispatch} from "react-redux";
import { cartUpdateQuantity,cartDelete } from "../../actions/cart";
export const CartPage = () => {
    const cart = useSelector(state => state.cartReducer.cart);
    const dispatchCart=useDispatch();
    console.log(cart);
    let totalPrice=0;
    cart.forEach((item)=>{
        item.totalPrice=+(item.quantity*item.productDetail.priceNew).toFixed(2);
        totalPrice+=item.totalPrice;
    })
    totalPrice=+totalPrice.toFixed(2);
    const handleUpdateQuantity=(event,productId)=>{
        const quantity=+event.target.value;
        dispatchCart(cartUpdateQuantity(quantity,productId))

    }
    const handleDelete=(productId)=>{
        dispatchCart(cartDelete(productId));

    }
    return (
        <>
            <h1>Trang giỏ hàng</h1>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Hình ảnh</th>
                        <th>Tiêu đề</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tạm tính</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length >0?(
                        <>
                            {cart.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    <img src={item.productDetail.thumbnail} alt={item.productDetail.title}></img>
                                </td>
                                <td>
                                   {item.productDetail.title}
                                </td>
                                <td>
                                    <p>Giá cũ:<del>{item.productDetail.price}$</del></p>
                                    <p>Giảm:{item.productDetail.discountPercentage}%</p>
                                    <p>Giá mới:<strong>{item.productDetail.priceNew}$</strong></p>
                                </td>
                                <td>
                                    <input type="number" defaultValue={item.quantity} min="1"onChange={(event)=>handleUpdateQuantity(event,item.productDetail.id)}></input>
                                </td>
                                <td>
                                    <strong>{item.totalPrice}$</strong>
                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(item.productDetail.id)}>Xoá</button>
                                </td>
                            </tr>
                        )
                    })}
                        </>
                    ):(<>
                        <tr>
                            <td colSpan={7} style={{textAlign:"center"}} >Giỏ hàng rỗng!</td>
                        </tr>
                    </>)}
                    
                    <tr>
                        <td><strong>Tổng tiền:{totalPrice}$</strong></td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}