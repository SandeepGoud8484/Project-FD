import { useState } from "react";
import { IMG_IN_MENU } from "../../utils/const.js";
import "../CSS/ViewMenu.css" ;
import Cart from "./Cart.js";
import Offers from "./Offers.js";


const ViewMenu = (props)=> {

    let [ fMenu , setFmenu ] = useState(props?.ForwardData) ;
    let [ so , setSO ] = useState() ;
   
    // let [ refVariable , setRefVar ] = useState("");

    // setRefVar( ()=> {

    //     return refVariable.includes("rice");
    // })
    // setFmenu(props?.ForwardData) ;

   
    console.log(props?.ForwardData) ;
    return (
        <div>  
            <div className="DivForMenu">    
                <div className="namePriceDesc">
                    <div className="MenuList">
                        <p>{ fMenu?.card?.info?.name}</p> 
                        <p><span>{`\u20B9 `}</span>{ fMenu?.card?.info?.price ? `${fMenu?.card?.info?.price/100}` : `${fMenu?.card?.info?.defaultPrice/100}` }</p>
                    </div>    
                    <p className="description">{fMenu?.card?.info?.description}</p>
                </div>
                    <div className="ImgInMenu">
                        <img src={ `${IMG_IN_MENU}${fMenu?.card?.info?.imageId }` } width="100px" height="80px"></img>
                       
                    </div>
            
            </div>
        </div>
    )


    // return (
    //     <div className="DivForMenu">
    //         <div className="MenuList">
    //             <h2>Chicken Biriyani</h2>
    //             <p>350</p>
    //             <p>ss nhj ckdmdm</p>
    //         </div>

    //         <div className="ImgInMenu">
    //             <img src={"https://www.swiggy.com/restaurants/cafe-niloufer-classic-lakdikapul-redhills-hyderabad-27739" + fMenu?.card?.info?.imageId} width="80px"></img>
    //         </div>
    //     </div>
    // )
}

export default ViewMenu ;