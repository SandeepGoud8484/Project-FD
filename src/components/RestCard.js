import "../CSS/RestCard.css"



const RestCard = ( props ) => {


   

    return (

        <div>
           
                <div className="CardRestaurant">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
                    props?.RestaurantData.info?.cloudinaryImageId}
                     width="250px" className="ImgInCard"></img>
                    <h3>{props?.RestaurantData.info?.name}</h3>
                    <p>{props?.RestaurantData.info?.avgRatingString}</p>
                    <p>{props?.RestaurantData.info?.areaName}</p>
                </div>
            
        </div>
    )
}

export default RestCard ;