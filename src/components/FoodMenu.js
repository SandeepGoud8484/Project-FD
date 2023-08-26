import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_DETAILS_URL } from "../../utils/const";
import ViewMenu from "./ViewMenu";




const FoodMenu = () => {

    const { resID } = useParams() ;

    const [ menu , setMenu ] = useState([]) ;

    const [ title , setTitle ] = useState([]) ;

    
    
    useEffect( ()=>{

       FoodItemsMenu();
    },[])

    // const FoodItemsMenu = ( ) => {

        // fetch(`${RES_DETAILS_URL}${resID}`).then((resp)=>{

        //     return resp.json() ;
        // }).then((dataReq)=>{

        //      setMenu(dataReq?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        //      console.log(dataReq) ;
        // }).catch(()=> {
        //     console.log("Nothing") ;
        // })

        
   // }

   const FoodItemsMenu = async()=> {

    let dataItems = await fetch(`${RES_DETAILS_URL}${resID}`) ;
    let dataItemsJson = await dataItems.json() ;
    setMenu(dataItemsJson?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) ;
    setTitle(dataItemsJson?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title);
     console.log(dataItemsJson) ;
   }


    return (
        <div>
           
           <div>  
            <div style={{ margin:"20px 400px" , fontSize:"30px"}}>{title}</div>
             { menu?.map((allData)=> { 
                     return (
                     <div>
                        <ViewMenu ForwardData={allData}/>
                      </div>
                     )  
                })
            }
           </div>
           
        </div>
    )
}


export default FoodMenu ;