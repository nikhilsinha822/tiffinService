// import React from "react"


// const resCarosel = () => {
//     let width = box.clientWidth;
//     if(width > 907){
//         document.querySelector('.childMenu').classList.add("childMenuCaroselRes")
//         document.querySelector('.childMenu').classList.add("grandchildCarsoselRes")
//     }
//     else{
//         document.querySelector('.childMenu').classList.remove("childMenuCaroselRes")
//         document.querySelector('.childMenu').classList.remove("grandchildCarsoselRes")
//     }

// }

function Item(props){
return props.value.map((prop) => {
    return <div className="childMenu childMenuCaroselRes">
    <div className="grandChildMenu">
        <img className="menuImage" src={prop.image} />
    </div>
    <div className="grandChildMenu">    
        <h3 className="itemName">{prop.name}</h3>
        <p className="itemDetail grandchildCarsoselRes">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl lectus, laoreet at sem sed.</p>
    </div>
    </div>
});
}


export default Item;