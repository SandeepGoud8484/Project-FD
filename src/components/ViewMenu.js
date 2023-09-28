import { useState } from "react";
import { IMG_IN_MENU } from "../../utils/const.js";
import "../CSS/ViewMenu.css" ;
import Cart from "./Cart.js";
import Offers from "./Offers.js";
import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice.js";
import { deleteItems } from "../cartSlice.js";


const ViewMenu = (props)=> {

    let [ fMenu , setFmenu ] = useState([props?.Fdata]) ;
    let [ so , setSO ] = useState() ;
    
    // let [ refVariable , setRefVar ] = useState("");

    // setRefVar( ()=> {

    //     return refVariable.includes("rice");
    // })
    // setFmenu(props?.ForwardData) ;

    const doAction = useDispatch() ;
    const someAction = (okt,price)=>{
        doAction(addItem({foodItem:okt,itemCost:price})) ;
        console.log(okt,price);

    }

    const deleteAction = (jkl,id)=> {
        doAction(deleteItems(jkl)) ;
    }
    
   
   
    

    return(
         <div className="flex  justify-center flex-col w-2/4 bg-gray-300 mx-96">
            {fMenu?.map((ntt,ind)=>{
                return ntt?.itemCards  ?  ntt?.itemCards?.map((hn)=>{
                    return ( <div className="flex justify-between p-5 border">
                                <div className="w-4/5">
                                    <p className="text-xl font-medium">{ hn?.card.info.name}</p>
                                    <p className="font-medium"><span>{`\u20B9`}</span>{ hn?.card?.info?.price ? `${hn?.card?.info?.price/100}` : `${hn?.card?.info?.defaultPrice/100}` }</p>
                                </div>
                                <div className="w-1/5 text-center">
                                {hn?.card?.info?.imageId ? 
                                <div >
                                    <img className=" rounded-lg object-cover w-32 pb-2.5" src={ `${IMG_IN_MENU}${hn?.card?.info?.imageId }` }></img> 
                                    
                                </div>  :  <span></span>}
                                <button onClick={()=>someAction(hn?.card.info.name, hn?.card?.info?.price ? `${hn?.card?.info?.price/100}` : `${hn?.card?.info?.defaultPrice/100}`)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                                   ADD
                                </button>
                                <button onClick={()=>deleteAction(hn?.card.info.name,hn?.card.info.id)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                                   DEL
                                </button>
                                </div>
                            </div>);
                }) :    ntt?.categories?.map((hn)=>{
                             return hn?.itemCards.map((kj)=>{
                                return (
                                    <div className="flex justify-between p-5 border">
                                        <div className="w-4/5">
                                            <p className="text-xl font-medium">{kj?.card?.info?.name}</p>
                                            <p className="font-medium"><span>{`\u20B9`}</span>{ kj?.card?.info?.price ? `${kj?.card?.info?.price/100}` : `${kj?.card?.info?.defaultPrice/100}` }</p>
                                        </div>
                                        <div className="w-1/5 text-center">
                                        {
                                            kj?.card?.info?.imageId ? 
                                            <div>
                                                <img className=" rounded-lg object-cover w-32 pb-2.5" src={ `${IMG_IN_MENU}${kj?.card?.info?.imageId }`}></img> 
                                            </div>  :  <span></span>
                                        }
                                        <button onClick={()=>someAction(kj?.card?.info?.name, kj?.card?.info?.price ? `${kj?.card?.info?.price/100}` : `${kj?.card?.info?.defaultPrice/100}`)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                                            ADD
                                        </button>
                                        <button onClick={()=>deleteAction(kj?.card?.info?.name)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                                            DEL
                                        </button>
                                        </div>
                                    </div>
                                ) ;
                             })
                        })
            })} 
        </div> 
    )


    // return (
    //     <div>  
    //         {fMenu?.map((kkk)=>{
    //             <div className="DivForMenu">    
    //             <div className="namePriceDesc">
    //                 <div className="MenuList">
    //                     <p>{ kkk?.card?.info?.name}</p> 
    //                     <p><span>{`\u20B9 `}</span>{ kkk?.card?.info?.price ? `${kkk?.card?.info?.price/100}` : `${kkk?.card?.info?.defaultPrice/100}` }</p>
    //                 </div>    
    //                 <p className="description">{kkk?.card?.info?.description}</p>
    //             </div>
    //                 <div className="ImgInMenu">
    //                     <img src={ `${IMG_IN_MENU}${kkk?.card?.info?.imageId }` } width="100px" height="80px"></img>
                       
    //                 </div>
            
    //         </div>
    //         })}
    //     </div>
    // )


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