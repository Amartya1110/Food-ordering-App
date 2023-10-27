// This MenuSubCategory - component is going to be a Collapsable Accordion

import { useState } from "react"
import MenuItemCard from "./MenuItemCard"


// CSS
import "./MenuSubCategory.css"


const MenuSubCategory = ({title, itemCards}) => {

    // console.log(itemCards)
    const [isOpen, setIsOpen] = useState(true)


    return (
        <div className="menu-sub-category">
            <div className="menu-sub-category-header" onClick={() => setIsOpen(prevValue => !prevValue)}>
                <h1 className="menu-sub-category-heading">{title}</h1>
                <div className="arrow-container">
                {
                    (isOpen) ?
                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>) :
                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>)
                }
                </div>
            </div>
            {
                (isOpen) ?
                itemCards.map(itemCard => <MenuItemCard key={itemCard?.card?.info?.id} {...(itemCard?.card)} />) :
                null
            }
            
        </div>
    )
}

export default MenuSubCategory