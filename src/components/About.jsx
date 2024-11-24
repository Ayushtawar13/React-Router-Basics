import React from "react";
import { useLinkClickHandler, useNavigate } from "react-router-dom";

function About()
{
    let navigate = useNavigate();

    function ClickHandler(){
        navigate("/Support");
    }
    return(
         <div>
            <p>This About Page</p>
        <button onClick={ClickHandler}>Go to Support</button>
         </div>
    );
}

export default About;