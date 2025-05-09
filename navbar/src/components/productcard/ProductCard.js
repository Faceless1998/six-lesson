import React from "react"
import { Link } from "react-router-dom"
function ProductCard({product}) {
    return(
        <>
            <div>
                <img src={product.image} alt={product.name}/>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <Link to={ `/product/${product.id}` }> See More </Link>
            </div>
        </>
    )
}

export default ProductCard;