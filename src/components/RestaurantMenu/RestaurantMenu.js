// API: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=22.588336&lng=88.428065&restaurantId=441752

import { useEffect, useRef, useState } from "react"

// Components

import MenuCategory from "./MenuCategory"
import MenuSubCategory from "./MenuSubCategory"

// CSS
import "./RestaurantMenu.css"

// Images
import deliveryIcon from "../../../public/assets/motorbike.png"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addCurrentrestaurantDetails, syncCartResWithCurrentRes } from "../../utils/features/cart/cartSlice"


const RestaurantMenu = () => {
    const [resMenuData, setResMenuData] = useState([])
    const isCartRestaurant = useRef(undefined)

    // Getting the restaurant ID from the URL
    // const dynamicParams = useParams()
    // const {resID} = dynamicParams
    const {resID} = useParams()

    const dispatch = useDispatch()
    const cartResID = useSelector(store => store.cartResData?.restaurantDetails?.id)

    async function fetchResMenuData() {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=22.588336&lng=88.428065&restaurantId=" + resID)
        const jsonData = await response.json()
        // console.log(jsonData?.data?.cards)
        // localStorage.setItem("currentResMenuData", JSON.stringify(jsonData?.data?.cards))
        setResMenuData(jsonData?.data?.cards)
        dispatch(addCurrentrestaurantDetails(jsonData?.data?.cards[0]?.card?.card?.info))
        if(cartResID && cartResID === resID) {
            isCartRestaurant = true
        }
    }

    useEffect(() => {
        fetchResMenuData()


        // The below return statement will work just like componentWillUnmount in class-based components
        return () => {
            
        }
    },[])

    return (
        <div className="restaurant-menu">
            {/* Restaurant details */}
            <div className="restaurant-header-container">
                <div className="restaurant-header-wrapper">
                    <div className="restaurant-name-address-wrapper">
                        <h1 className="restaurant-name">{resMenuData[0]?.card?.card?.info?.name}</h1>
                        <h1 className="restaurant-cuisines">{resMenuData[0]?.card?.card?.info?.cuisines.join(", ")}</h1>
                        <h1 className="restaurant-address">{resMenuData[0]?.card?.card?.info?.areaName + " | " + resMenuData[0]?.card?.card?.info?.sla?.lastMileTravelString}</h1>
                    </div>
                    <div className="restaurant-rating-wrapper">
                        <div className="star-rating">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                            <h1>{resMenuData[0]?.card?.card?.info?.avgRating}</h1>
                        </div>
                        <h1 className="totalRatingsString">{resMenuData[0]?.card?.card?.info?.totalRatingsString}</h1>
                    </div>
                </div>
                <div className="restaurant-delivery-message-wrapper">
                    <img src={deliveryIcon} alt="delivery-icon" />
                    <h1 className="restaurant-delivery-fee-details">{ resMenuData[0]?.card?.card?.info?.feeDetails?.message }</h1>
                </div>
            </div>
            

            {/* Offers - Carousel*/}

            {/* Restaurant Menu -Accordions */}
            <div className="res-category-container">
                {console.log(resMenuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1,))}
                {/* {(resMenuData.length === 0)? null : <MenuSubCategory  {...(resMenuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1,)[0]?.card?.card?.categories[0])} />} */}
                {/* {(resMenuData.length === 0)? null : (
                    (resMenuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1,)[2]?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") ? (
                        <MenuCategory {...resMenuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1,)[2]?.card?.card?.categories} />
                    ):(
                        <MenuSubCategory {...(resMenuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1,)[2]?.card?.card)} />
                    )
                )} */}
                {(resMenuData.length === 0)? null : (
                    resMenuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1,).map(menucategoryData => {
                        if(menucategoryData?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
                            return (
                                <div key={menucategoryData?.card?.card?.title}>
                                    <MenuCategory isCartRestaurant={isCartRestaurant} title={menucategoryData?.card?.card?.title} categories={menucategoryData?.card?.card?.categories} />
                                    <div className="menu-category-border"></div>
                                </div>
                            )
                        }
                        else if(menucategoryData?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
                            return (
                                <div key={menucategoryData?.card?.card?.title}>
                                    <MenuSubCategory isCartRestaurant={isCartRestaurant} {...(menucategoryData?.card?.card)} />
                                    <div className="menu-category-border"></div>
                                </div>
                            )
                        }
                        else {
                            return null
                        }
                    })
                )}
            </div>
        </div>
    )
}

export default RestaurantMenu