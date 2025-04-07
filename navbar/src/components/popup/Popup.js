import React,{useState} from "react";
import "./popup.css"
import { MdClose } from "react-icons/md";

const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleShowPopup = () => {
        setIsVisible(true);
    }

    const handleHidePopup = () => {
        setIsVisible(false);
    }

    return(
        <>
            
            <div className="popup-shower" onClick={handleShowPopup}>
                Show Popup
            </div>

            {
                isVisible && (
                    <div className="popup-overlay">
                        <div className="popup-container">
                            <div className="popup-title">
                                სათაური
                            </div>
                            <div className="popup-image">
                                <img src="https://placehold.co/300" alt="title" />
                            </div>
                            <div onClick={handleHidePopup} className="close-btn">
                                <MdClose />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Popup;