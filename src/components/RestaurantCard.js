const RestaurantCard = ({resData}) => {
    console.log(resData)
    const {info, cta} = resData

    const cuisine = info?.cuisines?.join(", ")

    return(
        <div className="res-card" id={info?.id}>
            <div className="res-img">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info?.cloudinaryImageId} alt="res-logo"/>
            </div>
            <div className="res-data">
                <h1 className="res-name">{(info?.name?.length > 18) ? info?.name.slice(0, 18) + "..." : info?.name}</h1>
                <div className="rating" style={{backgroundColor:"#313131"}}>
                    <h1>{info?.avgRatingString}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="star">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </div>
            </div>
            <div className="cuisine">
                {(cuisine?.length>22) ? cuisine?.slice(0, 21) + "..." : cuisine}
            </div>
            <div className="res-details">
                <h1>{info?.costForTwo}</h1>
                <h1>{info?.sla?.deliveryTime + " mins"}</h1>
            </div>
        </div>
    )
}

export default RestaurantCard