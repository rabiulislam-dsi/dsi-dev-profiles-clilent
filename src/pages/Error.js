import React from "react";
import "../styles/Error.scss"
import {Link, useParams, useLocation} from "react-router-dom";
import {getMessage} from "../utils/errorUtils";


function Error() {
    let { code } = useParams();
    let useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    code = parseInt(code) || 404;
    let title = getMessage(code);
    let subTitle;
    if(code === 404) {
        subTitle = `The page you are looking for might have been removed or had its name changed or is temporarily
                    unavailable.`;
    } else {
        subTitle = query.get("msg") || `Something went wrong. Please contact an administrator`;
    }
    return(
        <div id="error">
            <div className="error">
                <div className="error-code">
                    <h1>{code}</h1>
                </div>
                <h2>{title}</h2>
                <p>{subTitle}</p>
                <Link to="/home">Back To Homepage</Link>
            </div>
        </div>
    )
}

export default Error;