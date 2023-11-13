import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// CSS
import "./MenuItemCard.css"

// Importing Redux store actions
import { addCurrentmenuItemsCount, addItem, removeItem } from "../../utils/features/cart/cartSlice"



const MenuItemCard = ({info, isCartRestaurant}) => {
    // console.log(info)
    const menuItemCount = useSelector(store => store.cart.cartResData?.menuItemsCount[info?.id])

    // const [itemCount, setItemCount] = useState((info?.itemCount!==undefined) ? info?.itemCount : 0)
    // Here, "itemCount" - is the count of each menuItem ( When MenuItemCard is rendered inside cart.js)
    const [itemCount, setItemCount] = useState((isCartRestaurant) ? (menuItemCount ? menuItemCount : 0) : info?.itemCount)
    // console.log(itemCount)
    if(isCartRestaurant && menuItemCount) {
        // setItemCount(menuItemsCount[info?.id])
    }

    const dispatch = useDispatch()

    function addItemHandler() {
        setItemCount(prevItemCount => prevItemCount+1)
        dispatch(addItem(info))
    }

    function removeItemHandler() {
        setItemCount(prevItemCount => prevItemCount-1)
        dispatch(removeItem(info))
    }

    useEffect(() => {
        dispatch(addCurrentmenuItemsCount({[info?.id]: 0}))
    },[])


    return (
        <div className="menu-item-card">
            <div className="item-card-left-container">
                <h1 className="item-name">{info?.name}</h1>
                <h3 className="item-price">{(info?.price) ? "₹" + info?.price / 100 : "₹" + info?.defaultPrice/100}</h3>
                <h5 className="item-description">{info?.description}</h5>
            </div>
            <div className="item-card-right-container">
                <img className="item-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + info?.imageId} alt="Menu-item-Image " />
                <div className="item-button-container">
                {(itemCount === 0) ? <button className="item-button" onClick={addItemHandler} >ADD +</button> : (
                    <div className="item-buttons">
                        <button className="item-button" onClick={removeItemHandler}>-</button>
                        <h3 className="item-count">{itemCount}</h3>
                        <button className="item-button" onClick={addItemHandler}>+</button>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default MenuItemCard