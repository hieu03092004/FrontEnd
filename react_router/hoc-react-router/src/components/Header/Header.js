import { NavLink } from "react-router-dom"

export const Header=()=>{
    return(
        <>
            <div className="header">
                <ul className="inner-menu">
                    <li>
                        <NavLink to="/">
                            Trang chủ
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/about">
                            Liên hệ
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/products">
                            Danh sách sản phẩm
                        </NavLink> 
                    </li>
                </ul>
            </div>
        </>
    )
}