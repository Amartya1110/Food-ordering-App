import { useSelector } from "react-redux"

// CSS
import "./Cart.css"
import EmptyCart from "./EmptyCart"
import MenuItemCard from "../RestaurantMenu/MenuItemCard"


const Cart = () => {
    // Subscribe to the cart slice : to access the cart related data fromthe cart slice
    const count = useSelector(store => store.cart.count)
    const cartItems = useSelector(store => store.cart.cartItems)
    // console.log(cartInfo)

    return (
        <div className="cart-wrapper">
            {
                (count === 0) ? <EmptyCart /> : (
                    <div className="cart-container">
                    {
                        cartItems.map(item => <MenuItemCard info={...item} />)
                    }
                    </div>
                )
            }
        </div>
    )
}

export default Cart