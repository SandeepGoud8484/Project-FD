import React, { Children } from "react";
import ReactDOM from "react-dom/client" ;
import HomePage from "./components/HomePage";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Offers from "./components/Offers";
import ErrorPage from "./components/ErrorPage";
import Body from "./components/Body";
import FoodMenu from "./components/FoodMenu";
import ViewMenu from "./components/ViewMenu";
import Cart from "./components/Cart";



const RouteMap = createBrowserRouter([

    {
        path:"/",
        element:<HomePage /> ,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/Offers",
                element:<Offers />
            },
            {
                path:"/restaurants/:resID",
                element:<FoodMenu />
            },
            {
                path:"/cart",
                element:<Cart/>
            }

        ]
    }
   
])
const root = ReactDOM.createRoot(document.getElementById('root')) ;
root.render(
   <RouterProvider router={RouteMap} />
) ;