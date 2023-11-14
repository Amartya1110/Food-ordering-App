import { Link } from "react-router-dom"

// Images
import emptyCartImg from "../../../public/assets/emptyCartImg.jpg"

// CSS
import "./EmptyCart.css"

const EmptyCart = () => {
    return (
        <div className="empty-cart-wrapper">
            <div className="empty-cart-img-wrapper">
                <img src={emptyCartImg} alt="empty-cart-image" className="empty-cart-img"/>
            </div>
            <h1 className="empty-cart-heading">Your Cart is empty</h1>
            <div className="empty-cart-para">
                <p>Looks like you haven't added any items to your cart</p>
                <p>You can go to Home page to view more Restaurants</p>
            </div>
            <Link to="/" className="empty-cart-btn" >HomePage</Link>
        </div>
    )
}

export default EmptyCart

