import React, {useState} from "react";
import { ProductData } from "../../data/ProductData";
import SearchCard from "./SearchCard";

export default function SearchFilter() {


    
    const [searchTerm, setSearchTerm] = useState("");
    const [orderBy, setOrderBy] = useState("")
    
    const filteredProduct = 
        ProductData.filter((product) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort( (a,b) => {
        if( orderBy === "lowToHigh") return a.price - b.price;
        if(orderBy === "highToLow") return b.price - a.price;
        return 0;
    })
    return(
        <>
        <div>
            <input 
                type="text"
                value={searchTerm}
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
                <option value=""> All </option>
                <option value="lowToHigh">Low To High</option>
                <option value="highToLow">High To Low</option>
            </select>



            
        </div>
            {
                filteredProduct.map( (product) => (
                    <SearchCard product={product} key={product.id} />
                ))
            }
        </>
    )
}