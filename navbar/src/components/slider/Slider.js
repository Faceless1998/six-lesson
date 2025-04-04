import React, {useState} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "./slider.css"

const Slider = () => {
    const totalProducts = 20;
    const productPerView = 6;
    
    const maxIndex = totalProducts - productPerView + 1;

    const [currentProduct, setCurrentProduct] = useState(0);

    const nextProduct =() => {
        if(currentProduct < maxIndex){
            setCurrentProduct( (prevIndex) => prevIndex+1 )
        }
    }

    const prevProduct =() => {
        if(currentProduct > 0){
            setCurrentProduct( (prevIndex) => prevIndex-1 )
        }
    }

    const colors = [
        "#F00" ,
        "#0f0" ,
        "#00f" ,
        "#ff0" ,
        "#f0f" ,
        "#0ff"
    ]
    const products = Array.from( {length: totalProducts}, (_, index) => (
        <div className="product-card" style={{backgroundColor: colors[ index % colors.length ]}}>
            product {index + 1}
        </div>
    ) )

    return(
        <>
            <div className="slider-container">

                <div className="slider-title"> SLIDER </div>

                <div className="slider-wrapper">

                    <button onClick={prevProduct} disabled={currentProduct === 0}>
                    <FaArrowLeft />
                    </button>


                    <div className="slider-track">
                        <div className="slider-view" style={{ transform: `translateX( -${currentProduct * 170}px )`}}>
                            {products}
                        </div>
                    </div>

                    <button onClick={nextProduct} disabled={currentProduct >= maxIndex}>
                        <FaArrowRight />
                    </button>

                </div>
            </div>


        </>
    )
}

export default Slider;