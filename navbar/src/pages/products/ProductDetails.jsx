import Products from "../../data/Products";
import { useParams, Link } from "react-router-dom";


function ProductDetails() {
    const {id} = useParams();
    const product = Products.find( p => p.id === id)

    return(
        <>
            <div>
                <Link to="/product">Back</Link>
                <img src={product.image} alt={product.name}/>
                <h3>{product.name}</h3>
                <p> ${product.price} </p>
            </div>
        </>
    )
}

 export default ProductDetails;