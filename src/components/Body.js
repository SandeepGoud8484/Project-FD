import RestCard from "./RestCard" ;
import { CARD_URL } from "../../utils/const" ;
import { CARD_URL2 } from "../../utils/const";
import { useEffect, useState } from "react";
import "../CSS/RestCard.css" ;
import "../CSS/Buttons.css" ;
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    let[ cardData , setCardData ] = useState([]) ;
    let[ cardDataCopy , setCardDataCopy ] = useState([]) ;
    let[ btnName , setBtnName ] = useState("Top Rated") ;
    let[ searchRes , setSearchRes ] = useState() ;
    let[ searchBtn , setSearchBtn ] = useState("Search") ;
   


    useEffect( ( )=> {

        getApiInfo();

    },[])

    const getApiInfo = async () => {
        
        fetch( CARD_URL ).then((res)=>{
            return res.json();
        }).then((resData)=>{

            setCardData(resData.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
            setCardDataCopy(resData.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
              console.log(resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           
        }).catch(()=>{

            // setCardData("NO Data") ;

         })
    }

    

    return  cardData.length == 0 ? (<Shimmer />) :(
        <div>
            <div>
                <div className="ButtonsInBody">
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

                    }} className="Button1">{btnName}</button>

                   </div>

                   <div>
                     <input className="searchInput" placeholder="!....S....E....A....R....C....H" value={searchRes} onChange={(event)=>{

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
                            
                     }} className="searchBtn">{searchBtn}</button>


                   </div>
                </div>              

                <div className="MainDivForCards">
                    { cardDataCopy.map( (infoCard ) => {
                    return (
                       <div>
                       
                         <Link to={'/restaurants/' + infoCard.info.id}> <RestCard RestaurantData = {infoCard}/> </Link>
                        
                       </div>
                        
                    )
                        })                           
                        }
                </div>
                
            </div>
        </div>
    )
}

export default Body ;

