import MenuSubCategory from "./MenuSubCategory"

// CSS
import "./MenuCategory.css"

const MenuCategory = ({title, categories}) => {
    return (
        <div className="menu-category">
            <h1 className="menu-category-heading">{title}</h1>
            {
                categories.map(category => <MenuSubCategory key={category?.title} {...category} />)
            }
        </div>
    )
}

export default MenuCategory