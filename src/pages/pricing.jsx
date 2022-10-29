import React from "react";
import Pricindcard from "../components/pricingcard"

function price(){
return <div className="pricingPart">
    <h1 className="priceHead">PRICING</h1>
    <Pricindcard />
    <Pricindcard />
    <Pricindcard />
</div>
}

export default price;