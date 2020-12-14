import React from "react";
import "../../css/button.css";

function Button({type, text, action}) {
    const buttonClass = (type === "primary") ? "btn btn-outline-primary ml-1" : "btn btn-outline-success ml-1";

	return (
        <>
            {
                (action) 
                ? <button className={buttonClass} onClick={action}>{text}</button>
                : <button className={buttonClass} type="submit">{text}</button>
            }
        </>
        
    );
}
export default Button;
