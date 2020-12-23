import React from "react";
import NavWrapper from "./NavWrapper";
import Container from "react-bootstrap/cjs/Container";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function ContainerWithNav(props){
    console.log(props);
    const renderNav=!props.location.pathname.split('/').includes('auth');
    return (
        <React.Fragment>
            <NavWrapper renderNav={true}/>
            <Container fluid id="page-content-wrapper" className={renderNav?"page-content-wrapper":""}>
                <Switch>
                    {props.children}
                </Switch>
            </Container>
        </React.Fragment>
    )
}

export default ContainerWithNav;