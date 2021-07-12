import {Button, Card} from "react-bootstrap";
import login_img from '../../images/login_image.svg';
import React from "react";
import '../../styles/Checkmark.scss';

function RegistrationSuccess({message}) {
    return (
        <div className="container">
            <div className="page-center">
                <div className="d-flex justify-content-center align-items-center">
                    <Card className="shadow border-0" style={{maxWidth: '30rem'}}>
                        <Card.Img src={login_img} alt="Card image" style={{maxHeight: '25rem'}}/>
                        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center"
                                         style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                            <h2 className="m-3 text-secondary">Thank You</h2>
                            <h4 className="m-3 text-secondary">{message}</h4>
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                            <Button variant="outline-theme" href="/">Go To Home</Button>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default RegistrationSuccess;