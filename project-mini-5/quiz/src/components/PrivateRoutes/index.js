import { Navigate, Outlet } from "react-router-dom";
export const PrivateRoute=(props)=>{
    const isLogin=true; // Thay đổi thành false để test redirect
    return isLogin ? <Outlet/> : <Navigate to="/login"/>
}