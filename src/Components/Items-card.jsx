import React from "react";
import { useDispatch } from "react-redux";
import { cartAddItems } from "../Store/Cartreducer";

function ItemsCard({productId,title,rating,price,image}){
    const dispatch = useDispatch();
    return(
        <>
        <div className="item-card-div">
            <div className="image-div">
            <img src={image} alt={title} height="180" width="190"></img>
            </div>
            <div className="descr-div">
                <p>Description: {title}</p>
                <div className="span-div">
                <span>Rating: {rating.rate} ★ ★ ★ ★</span>
                <span>Price: ${price}</span>
                </div>
                <div className="span-div">
                    <span><button onClick={() =>
                         dispatch(cartAddItems({productId,title,rating,price,image}))}>Add To Cart</button></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemsCard;