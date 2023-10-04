import { useEffect, useRef, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import CardShimmer from "./Shimmer/CardShimmer";

const RestaurantList = () => {
    const [allResList, setAllResList] = useState([])

    const [loading,setLoading] = useState(false)

    let collection = useRef(83645)

    const getNoOfShimmerCards = () => {
        return Math.ceil(allResList.length / 12)*12 - allResList.length
    }

    async function fetchResData() {
        if(collection.current < 84646) {
            // const response = await fetch("https://www.zomato.com/webroutes/getPage")
            const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.588336&lng=88.428065&collection=${collection?.current}&tags=&sortBy=&filters=&type=rcv2&offset=9&page_type=null`)
            collection.current = collection.current + 1
            console.log(collection.current)
            const jsonData = await response.json()
            // console.log(jsonData?.data?.cards.slice(2,))
            const resData = jsonData?.data?.cards.slice(2,)
            console.log(resData)
            if(resData) {
                setAllResList([...allResList, ...resData])
            }
        }

        // Testing another public Swiggy API
        // const res2 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.588336&lng=88.428065&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        // const res3 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.588336&lng=88.428065&collection=83649&tags=&sortBy=&filters=&type=rcv2&offset=9&page_type=null")
        // const jsonData2 = await res2.json()
        // const jsonData3 = await res3.json()
        // console.log(jsonData2)
        // console.log(jsonData3)
    }

    // The below intersection observer will observe the "#intersection-div"
    const observer = new IntersectionObserver((entries) => {
        // console.log(entries)
        // Here entries[0] - is for the "intersection-div"
        if(entries[0].isIntersecting) {
            setLoading(true)
        }

    }, {
        threshold: 0.75,
        rootMargin: "0px"
    })

    useEffect(() => {
        fetchResData()
        observer.observe(document.getElementById("intersection-div"))
    },[])

    useEffect( () => {
        fetchResData()
        setLoading(false)
    }, [loading] )

    

    // observer.observe(document.getElementById("intersection-div"))
    // The above line will throw error as - "Unhandled Rejection (TypeError): Failed to execute 'observe' on 'IntersectionObserver': parameter 1 is not of type 'Element'."
    // We are getting this error bcz - the first time this component will load, this line will be executed, but by that time the "intersection-div" has not been rendered onto the UI
    // To make sure that we are executing the above line of code when the "intersection-div" exists in our webpage, we should call this inside the useEffect() - hook bcz we know that
    // useEffect(callback, []) is called after the initial render of our component.

    return (
        <div id="res-list">
            {
                (allResList?.length === 0) ? Array.from({ length: 12 }).map(item => <CardShimmer />) : allResList?.map(restaurant => <RestaurantCard resData = {...restaurant?.card?.card} /> )
            }
            {/* { (!loading) && <div id="intersection-div"></div> } */}
            <div id="intersection-div"><CardShimmer /></div>
            { Array.from({ length: getNoOfShimmerCards()-1 }).map((item, index) => <CardShimmer key={index} />)}
        </div>
    )
}

export default RestaurantList;