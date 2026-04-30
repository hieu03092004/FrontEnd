import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import { getCookie } from "../../helpers/cookie";
import {useSelector} from "react-redux";
function LayoutDefault(){
    const token=getCookie("token");
    const isLogin=useSelector(state=>state.loginReducer);
    return(
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">Logo</div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            {token && (
                                <>
                                    <li>
                                        <NavLink to="/topic">
                                            Topic
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/answer">
                                            Answer
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            
                        </ul>
                    </div>
                    <div className="layout-default__account">
                        {token ?(
                            <> <NavLink to="/logout">
                                Đăng xuất
                            </NavLink>
                       </>
                        ):<> <NavLink to="/login">
                            Login
                        </NavLink>
                        <NavLink to="/register">
                            Register
                        </NavLink></>}
                       

                    </div>
                </header>
                <main className="layout-default__main">
                    <Outlet/>
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault;