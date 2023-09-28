import star from "../../assets/star.png" ;



const RestCard = ( props ) => {


//    console.log(props);

    return (

        <div>
           
                <div className=" hover:shadow-lg  border-gray-900 hover:rounded-3xl hover:bg-gray-50 " title={props?.RestaurantData?.info?.cuisines}>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
                    props?.RestaurantData?.info?.cloudinaryImageId}
                    className="w-full h-52 object-cover object-center rounded-3xl pb-2"></img>
                    <h3 className="ml-3 pb-2 font-medium text-lg text-gray-900">{props?.RestaurantData?.info?.name}</h3>
                    <div className="flex items-baseline">
                    <p className="ml-3 pb-2 pr-1 text-lg">{props?.RestaurantData?.info?.avgRatingString}</p>
                    <span><img className="bg-green-600 w-4 rounded" src={star}></img></span>
                    <p className="ml-2 pb-2  text-xs"><small>{props?.RestaurantData?.info?.totalRatingsString}</small></p>
                    </div>
                   
                    <p className="ml-3 pb-2">{props?.RestaurantData?.info?.areaName}</p>
                </div>
            
        </div>
    )
}

export const RestCardWithOffers = (RestCard)=> {

    return (props)=> {

        // console.log(props.RestaurantData);

        return(
            <div className="relative">
                <h1 className="absolute pos text-center font-semibold text-lg text-white  w-full rounded-b-2xl">
                { props.RestaurantData.info?.aggregatedDiscountInfoV3?.header +' '+ props.RestaurantData.info?.aggregatedDiscountInfoV3?.subHeader}</h1>
                <RestCard  RestaurantData={props.RestaurantData}/>
            </div>
        )
    }
}

export default RestCard ;

// "https://www.swiggy.com/restaurants/varalakshmi-tiffins-kothapet-and-dilsukhnagar-hyderabad-157695"

// export const FoodCardWithOffer=(FC)=>{
//     return (props)=>{
//         return(
//             <div className="relative">
//                 <h1 className="my_class">{props.resData.info.aggregatedDiscountInfoV3.header +' '+  props.resData.info.aggregatedDiscountInfoV3.subHeader}</h1>
//                 <FC resData={props.resData}/>
//             </div>
//         )
//     }
// }

// export default FoodCard;