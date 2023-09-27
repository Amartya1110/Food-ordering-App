import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import CardShimmer from "./Shimmer/CardShimmer";

const RestaurantList = () => {
    const [allResList, setAllResList] = useState([])

    async function fetchResData() {
        // const response = await fetch("https://www.zomato.com/webroutes/getPage")
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.588336&lng=88.428065&collection=83649&tags=&sortBy=&filters=&type=rcv2&offset=9&page_type=null")
        const jsonData = await response.json()
        // console.log(jsonData?.data?.cards.slice(2,))
        const resData = jsonData?.data?.cards.slice(2,)
        setAllResList([...allResList, ...resData])

        // Testing another public Swiggy API
        // const res2 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.588336&lng=88.428065&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        // const res3 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.588336&lng=88.428065&collection=83649&tags=&sortBy=&filters=&type=rcv2&offset=9&page_type=null")
        // const jsonData2 = await res2.json()
        // const jsonData3 = await res3.json()
        // console.log(jsonData2)
        // console.log(jsonData3)
    }

    useEffect(() => {
        fetchResData()
    },[])


    return (
        <div id="res-list">
            {
                (allResList?.length === 0) ? Array.from({ length: 13 }).map(item => <CardShimmer />) : allResList?.map(restaurant => <RestaurantCard resData = {...restaurant?.card?.card} /> )
            }
            {
                Array.from({ length: 15 }).map(item => <CardShimmer />)
            }
        </div>
    )
}

export default RestaurantList;