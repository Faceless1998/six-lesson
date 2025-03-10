import React, {useState} from "react";
// state - მდგომარეობას -  საიტის ზოგად მდგომარეობას (ცვლადთან მიმართებაში)
import "./about.css"

//Hook

 export const About = () => {

    const [isTrue, setIsTrue] = useState("") //get and set
    console.log(isTrue)


     return(
         <>
             <div className="vashli" onClick={() => {setIsTrue(!isTrue) }}   ></div>
         </>
     )
 }