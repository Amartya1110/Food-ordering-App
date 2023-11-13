import MenuSubCategory from "./MenuSubCategory"

// CSS
import "./MenuCategory.css"

const MenuCategory = ({title, categories, isCartRestaurant}) => {
    return (
        <div className="menu-category">
            <h1 className="menu-category-heading">{title}</h1>
            {
                categories.map(category => <MenuSubCategory isCartRestaurant={isCartRestaurant} key={category?.title} {...category} />)
            }
        </div>
    )
}

export default MenuCategory