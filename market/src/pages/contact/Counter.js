import React, {useState} from "react";

const Counter = ( { initialCount } ) => {

    const [count, setCount] = useState( initialCount );

    const increment = () => {
        setCount(count+1);
    }
    // const, let 
    const decrement = () => {
        setCount(count-1);
    }

    return(
        <>
            <div>
                <p>Count: {count} </p>
                <button onClick={ increment }>Inc</button>
                <button onClick={ decrement } >Dec</button>
            </div>
        </>
    )
}

export default Counter;