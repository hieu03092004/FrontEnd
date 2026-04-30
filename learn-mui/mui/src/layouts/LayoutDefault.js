import {Outlet} from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Container } from "@mui/material";
export const LayoutDefault=()=>{
    return(
        <>
            <Header/>
            <Container>
                <Outlet/>
            </Container>
            
        </>
    )
}