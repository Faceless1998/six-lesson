import ProductCard from "../../components/productcard/ProductCard";
import Products from "./../../data/Products"

function ProductList(){
    return(
        <>
            <div>
                {
                    Products.map( product => (
                        <ProductCard product={product} key={product.id} />
                    ))
                }
            </div>
        </>
    )
}

export default ProductList;