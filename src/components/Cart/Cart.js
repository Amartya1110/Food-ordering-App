import { useSelector } from "react-redux"

// CSS
import "./Cart.css"
import EmptyCart from "./EmptyCart"
import MenuItemCard from "../RestaurantMenu/MenuItemCard"


const Cart = () => {
    // Subscribe to the cart slice : to access the cart related data fromthe cart slice
    const cartInfo = useSelector(store => store?.cart)
    console.log(cartInfo)

    return (
        <div>
            {
                (cartInfo?.count === 0) ? <EmptyCart /> : (
                    <div className="cart-container">
                    {
                        cartInfo?.cartItems.map(item => <MenuItemCard info={...item} />)
                    }
                    </div>
                )
            }
        </div>
    )
}

export default Cart