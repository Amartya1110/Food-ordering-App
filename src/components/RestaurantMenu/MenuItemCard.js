import { useState } from "react"
import { useDispatch } from "react-redux"

// CSS
import "./MenuItemCard.css"

// Importing Redux store actions
import { addItem, removeItem } from "../../utils/features/cart/cartSlice"



const MenuItemCard = ({info}) => {
    // console.log(info)
    const [itemCount, setItemCount] = useState(0)
    // console.log(itemCount)

    const dispatch = useDispatch()

    function addItemHandler() {
        setItemCount(prevItemCount => prevItemCount+1)
        dispatch(addItem(info))
    }

    function removeItemHandler() {
        setItemCount(prevItemCount => prevItemCount-1)
        dispatch(removeItem(info))
    }


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