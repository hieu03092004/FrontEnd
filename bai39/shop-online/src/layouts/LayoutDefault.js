import { Link, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";

export const LayoutDefault=()=>{
    const cart=useSelector(state=>state.cartReducer.cart);
    return(
        <>
            <header>
                <ul>
                    <li>
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/Cart">Giỏ hàng ({cart.length})</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet/>
            </main>

        </>
    )
}