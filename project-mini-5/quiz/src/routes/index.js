import LayoutDefault from "../layout/LayoutDefault";
import {HomePage} from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PrivateRoute } from "../components/PrivateRoutes";
import { Answer } from "../pages/Answers";
import { Quiz } from "../pages/Quiz";
import { Result } from "../pages/Result";
import { Topic } from "../pages/Topic";
import LogOut from "../pages/Logout";

export const routes=[
    {
        path:'/',
        element:<LayoutDefault/>,
        children:[
          {
            path:"/",
            element:<HomePage/>
          },
          {
            path:"login",
            element:<Login/>
          },
          {
            path:"register",
            element:<Register/>
          },
          {
            path:"logout",
            element:<LogOut/>
          },
          {
           
            element:<PrivateRoute/>,
            children:[
                {
                    path:"answer",
                    element:<Answer/>
                },
                {
                    path:"quiz/:id",
                    element:<Quiz/>
                },
                {
                    path:"result/:id",
                    element:<Result/>
                },
                {
                    path:"topic",
                    element:<Topic/>
                }
               
            ]
          }

        ]
    }
]