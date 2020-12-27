import React from "react";
import "../styles/Error.scss"
import {Link} from "react-router-dom";

function Error() {
    return(
        <div id="error">
            <div className="error">
                <div className="error-code">
                    <h1>404</h1>
                </div>
                <h2>We are sorry, Page not found!</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily
                    unavailable.</p>
                <Link to="/home">Back To Homepage</Link>
            </div>
        </div>
    )
}

export default Error;