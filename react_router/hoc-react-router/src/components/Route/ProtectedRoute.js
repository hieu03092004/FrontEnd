import { Navigate } from "react-router-dom";
import Error404Page from "../../pages/Error/Error404";
export const ProtectedRoute=(props)=>{
    const {children}=props;
    const isLogin=true;
    return isLogin ? children:<Navigate to="/login"/>
}