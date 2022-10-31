import React from "react"
import Item from "../components/item"
function Menu(){
return <div className="menuPg" id="Menu">
    <h1 className="menuHead">MONDAY MENU</h1>
    <div className="parentMenu">
        <Item />
        <Item />
        <Item />
        <Item />
    </div>
    <button className="btn menuButton">FULL MENU</button>
</div>
}

export default Menu