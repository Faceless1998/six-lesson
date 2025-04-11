import react from "react";

export default function SearchCard({product}){
    return(
        <>
            <div className="product-container">
                <h2 className="product-name"> {product.name} </h2>
                <p className="product-price"> {product.price} </p>
            </div>
        </>
    )
}