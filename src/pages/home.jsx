import React from "react";

setTimeout(animation, 100);

function animation(){
    document.querySelector(".introTxt").classList.add("resintroTxt")
}

function Home(){
    return <div className="Home" id="Home">
         <h1 className="introTxt">Get the best meal at your footsteps!</h1>
         <button className="btn">B O O K - N O W</button>
    </div>
}

export default Home; 