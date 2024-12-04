import React from "react";

import ItemsCard from "../Components/Items-card";
import { useSelector } from "react-redux";


function Home(){
    // apply map method over the product list and pass all props to items-card.
    const ProductList = useSelector((state) => state.Products)
    console.log(ProductList);
    return(
        <>
         <div className="items-container-div">
           {
             ProductList.map(({id,title,rating,price,image}) =>(
                <ItemsCard 
                key={id}
                productId={id}
                title={title}
                rating={rating}
                price={price}
                image={image}
                />
            ))
           }
        </div>
        </>
    )
}

export default Home;