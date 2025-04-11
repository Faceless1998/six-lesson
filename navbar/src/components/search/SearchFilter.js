import React from "react";
import { ProductData } from "../../data/ProductData";
import SearchCard from "./SearchCard";

export default function SearchFilter() {

    return(
        <>
            {
                ProductData.map( (product) => (
                    <SearchCard product={product} key={product.id} />
                ))
            }
        </>
    )
}