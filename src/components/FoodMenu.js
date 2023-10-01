import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_DETAILS_URL } from "../../utils/const";
import ViewMenu from "./ViewMenu";




const FoodMenu = () => {

    const { resID } = useParams() ;

    const [ menu , setMenu ] = useState([]) ;

    const [ title1 , setTitle ] = useState([]) ;

    
    var i = 0 ;

   

    
   




    
    
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
    // setMenu(dataItemsJson?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) ;
    // setTitle(dataItemsJson?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title);
      console.log(dataItemsJson) ;
    // console.log(dataItemsJson.data.cards[3].groupedCard?.cardGroupMap.REGULAR.cards) ;
     setMenu(dataItemsJson.data.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards);
     setTitle(dataItemsJson.data.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards);
   }

   const findLength = ( data,lent )=>{
    var storeArr = [] ;
//        data.map((len)=>{
        
//         storeArr.push( len.itemCards.length ) ;
//         console.log(storeArr,storeArr.length,data.length) ;
//         return len.itemCards.length ;
 
//    })  

        for( i = 0 ; i <= lent-1 ; i++){
            storeArr.push(data[i].itemCards.length) ;
        }
        console.log(storeArr);
        return  storeArr.reduce((total,value)=>{
            return total+value ;
        })
   }


    return (
        <div>
           
           <div>  
           
             { title1?.map((allData,index)=> { 
                let categoryData = allData.card.card.categories ;
                console.log(allData) ;
                allData.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&  console.log(allData.card.card?.title) ;
                allData.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" && console.log(allData.card.card?.title) ;
                return (
                    <div >
                        <div className=" text-2xl w-2/4 mx-96 flex  justify-center bg-gray-200">
                            <div>
                                {allData.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                                &&  <h1 >{allData.card.card?.title} ({allData.card.card.itemCards.length})</h1> 
                                }
                            </div>
                            <div>
                                {allData.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
                                &&  <h2>{allData.card.card?.title}(
                                    { allData.card.card.categories.length == 1 ? allData.card.card.categories.map((len)=>{
                                      
                                        return len.itemCards.length ;
                                       }) : 
                                       (

                                        findLength(categoryData,categoryData.length) 
                                       
                                    )

                                 
                                   

                                    
                                     
                                    
                                })
                                </h2>
                               } 
                            </div>   
                           
                        </div>
                       <div><ViewMenu Fdata={allData.card.card}/></div>  
                    </div>
                )  
                })
            }
           </div>
           
        </div>
    )
}


export default FoodMenu ;