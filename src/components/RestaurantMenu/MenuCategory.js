import MenuSubCategory from "./MenuSubCategory"

const MenuCategory = (props) => {
    console.log(props)
    return (
        <div className="menu-category">
            <MenuSubCategory  {...(props[0])} />
        </div>
    )
}

export default MenuCategory