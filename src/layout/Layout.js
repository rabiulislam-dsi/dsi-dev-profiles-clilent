import React from "react";
import NavWrapper from "./NavWrapper";
import Container from "react-bootstrap/cjs/Container";
import {Switch, useLocation} from "react-router-dom";

import "../styles/Layout.scss";

function Layout(props){
    const defaultLayoutPath = ['user', 'error', 'auth'];
    let location = useLocation();
    const renderNav=!defaultLayoutPath.some(string => location.pathname.split('/').includes(string));
    return (
        <React.Fragment>
            <NavWrapper renderNav={renderNav}/>
            <Container fluid id="page-content-wrapper" className={renderNav?"page-content-wrapper":""}>
                <Switch>
                    {props.children}
                </Switch>
            </Container>
        </React.Fragment>
    )
}

export default Layout;