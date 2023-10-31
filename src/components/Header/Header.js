import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

// CSS
import "./Header.css"

// Importing Images
import appLogo from "../../../public/assets/appLogo.png"


const Header = () => {
    const cart = useSelector(store => store?.cart)

    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <img className="logo-image" src={appLogo} alt="App Logo" />
                <h1 id="app-name">Urban Cuisines</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <NavLink className="nav-item" to="/"><li>Home</li></NavLink>
                    <NavLink className="nav-item" to="/about"><li>About</li></NavLink>
                    <NavLink className="nav-item" to="/contact"><li>Contact Us</li></NavLink>
                </ul>
            </nav>
            <div className="cart-link-wrapper">
                <Link to="/cart" className="cart-link" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="cart-logo">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </Link>
                <div className="cart-count">{cart?.count}</div>
                {/* {(cart !== undefined) ? console.log(cart?.cartItems) : null} */}
            </div>
        </div>
    )
}

export default Header