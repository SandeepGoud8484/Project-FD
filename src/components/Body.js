import RestCard , {RestCardWithOffers} from "./RestCard" ;
import { CARD_URL } from "../../utils/const" ;
import { CARD_URL2 } from "../../utils/const";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import OfferCard from "./OffCards";


const Body = () => {

    let[ cardData , setCardData ] = useState([]) ;
    let[ cardDataCopy , setCardDataCopy ] = useState([]) ;
    let[ btnName , setBtnName ] = useState("Top Rated") ;
    let[ searchRes , setSearchRes ] = useState("") ;
    let[ searchBtn , setSearchBtn ] = useState("Search") ;
   

    const FoodCardWithOffer = RestCardWithOffers(RestCard) ;
   


    useEffect( ( )=> {

        getApiInfo();

    },[])

    const getApiInfo = async () => {
        
        fetch( CARD_URL ).then((res)=>{
            return res.json();
        }).then((resData)=>{
             console.log(resData);
            //   resData?.data?.cards?.map((gridWidgets)=>{
                
            //      return gridWidgets.map((impData)=>{
            //          return impData.card?.card?.gridElements?.infoWithStyle['@type'] = "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle" ?
            //                    setCardData(impData.card?.card?.gridElements?.infoWithStyle?.restaurants)  
            //                     && setCardDataCopy(impData.card?.card?.gridElements?.infoWithStyle?.restaurants) 
            //                 :  setCardData("No Data")
            //                      && setCardDataCopy("No Data") 
            
            //        })
            //     })
            //     gridWidgets?.card?.card?.gridElements?.infoWithStyle?['@type'] = "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle" ? 
            //      cardRest(gridWidgets)  :  
            //      setCardData("No Data") , setCardDataCopy("No Data") ;


            //................Here at cards[5] we will get 9 restaurants Data, and sometimes it changes to card[3]...............................
            
            setCardData(resData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
            setCardDataCopy(resData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
            //  console.log(resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setOffers(resData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info) ;
            
           
        }).catch(()=>{

            // setCardData("NO Data") ;

         })
    }

    // const cardRest = (gridWidgets)=> {
    
    //         console.log("yes") ;
    //         setCardData(gridWidgets?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
    //         setCardDataCopy(gridWidgets?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
           
        
    // }

    

    return  cardData?.length == 0 ? (<Shimmer />) : (
        <div>
            <div>
                <div className="flex  justify-around ">
                   <div>
                     
                    <button onClick={ () => {

                        if ( cardData == cardDataCopy) {
                            filteredData = cardDataCopy.filter((res) => {
       
                                return res.info.avgRatingString > 4.0 ;

                            })
                            setCardDataCopy(filteredData) ;
                            setBtnName("All Restaurants") ;
                        }else{
                            setCardDataCopy(cardData) ;
                            setBtnName("Top Rated") ;
                        }

                    }} className="bg-gray-300 text-gray-900 text-lg p-1.5 rounded-lg hover:-translate-y-1 transform
                    transition">{btnName}</button>

                   </div>

                   <div>
                     <input className="border  hover:border-2 hover:border-gray-600 hover:rounded-l-lg p-1.5 " value={searchRes} onChange={(event)=>{

                        setSearchRes(event.target.value) ;

                     }}></input>
                     <button onClick={ ()=>{

                        switch(searchBtn) {

                            case "Search" :

                            if( searchRes.length > 0) {

                                let SearchData = cardDataCopy.filter( (fil)=> {
     
                                    return fil.info.name.toLowerCase().includes(searchRes.toLowerCase()) ;
                             
                                }) ;
                                
                                setSearchBtn("Clear") ;
                                setCardDataCopy(SearchData) ;
                              
                            }else{
                                setCardDataCopy(cardData) ;
                                setSearchBtn("Search") ;

                            }
                                break ;

                            case "Clear" :

                                setCardDataCopy(cardData) ;
                                setSearchRes("") ;
                                setSearchBtn("Search") ;
                                break ;
                        }

                 
                        // if( searchRes == " ") {

                        //     setCardData(cardData) ;
                        // }
                            
                     }} className="bg-indigo-500 text-gray-200 text-lg p-1.5 rounded-r-lg hover:bg-indigo-400 ">{searchBtn}</button>


                   </div>
                </div>              

                <div className=" grid gap-14 mx-40 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    { cardDataCopy?.map( (infoCard) => {
                        // console.log(infoCard);
                        return <Link to={'/restaurants/' + infoCard.info.id}>
                                {
                                    infoCard.info.aggregatedDiscountInfoV3?.header  ? 
                                    <FoodCardWithOffer RestaurantData={infoCard}/>   : 
                                    <RestCard RestaurantData={infoCard}  />
                                }
                            </Link>

                        })                           
                        }
                </div>
                
            </div>
        </div>
    )
}

export default Body ;

