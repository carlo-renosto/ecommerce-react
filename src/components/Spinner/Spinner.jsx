import React from "react"
import spinner from "./spinner.gif"

const Spinner = () => {
    return (
        <div>
            {" "}
            <img src={spinner} alt="Loading..." style={{width: "400px", margin: "auto", display: "block"}}/>
        </div>
    )
}

export default Spinner;
