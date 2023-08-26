



const RestCard = ( props ) => {


   

    return (

        <div>
           
                <div className=" hover:shadow-lg pb-2 border-gray-900 hover:rounded-3xl hover:bg-gray-50">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
                    props?.RestaurantData.info?.cloudinaryImageId}
                    className="w-64 h-52 object-cover object-center rounded-3xl"></img>
                    <h3 className="ml-3">{props?.RestaurantData.info?.name}</h3>
                    <p className="ml-3">{props?.RestaurantData.info?.avgRatingString}</p>
                    <p className="ml-3">{props?.RestaurantData.info?.areaName}</p>
                </div>
            
        </div>
    )
}

export default RestCard ;