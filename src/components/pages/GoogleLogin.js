import {googleOauthSignIn} from '../../utils/authUtils';
import {Button} from "react-bootstrap";

function GoogleLogin() {
    return ( 
        <div class="container">
            <div className="page-center">
                <div className="col-10 d-flex justify-content-center align-items-center">
                    <div>
                        <Button variant="primary" onClick={()=>{googleOauthSignIn()}}>Login with google</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoogleLogin;