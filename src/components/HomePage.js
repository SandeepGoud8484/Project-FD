import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../reduxStore";




const HomePage = ()=> {

    return (

       <div>
            <Provider store={appStore}>
                <Header />
                <div className="mt-36"> 
                    <Outlet />
                </div>
            </Provider>
               
       </div>
    )
}

export default HomePage ;