import React, {useState} from "react";
// state - მდგომარეობას -  საიტის ზოგად მდგომარეობას (ცვლადთან მიმართებაში)
import "./about.css"
import Switcher from "./Switcher"

//Hook

 export const About = () => {

    const [isTrue, setIsTrue] = useState("") //get and set
    console.log(isTrue)


     return(
         <>
         
             <div className="vashli" onClick={() => {setIsTrue(!isTrue) }}   ></div>


             <Switcher />
         </>
     )
 }