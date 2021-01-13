import {googleOauthSignIn} from '../../utils/authUtils';
import {Button, Card} from "react-bootstrap";
import login_img from '../../images/login_image.svg';
import React from "react";
import {FaGoogle} from "react-icons/fa";

function GoogleLogin() {
    return (
        <div className="container">
            <div className="page-center">
                <div className="d-flex justify-content-center align-items-center">
                    <Card className="shadow border-0" style={{maxWidth: '30rem'}}>
                        <Card.Img src={login_img} alt="Card image" style={{maxHeight: '25rem'}}/>
                        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center"
                                         style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                            <h2 className="m-3 text-secondary">Google Sign-up</h2>
                            <Button variant="outline-theme" onClick={() => {
                                googleOauthSignIn()
                            }}><FaGoogle className="mr-1" size="1.5em"/> Signup With Google</Button>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default GoogleLogin;