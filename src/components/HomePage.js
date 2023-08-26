import Header from "./Header";
import { Outlet } from "react-router-dom";




const HomePage = ()=> {

    return (

       <div>
            <Header />
            <div className="mt-36"> 
            <Outlet />
            </div>
               
       </div>
    )
}

export default HomePage ;