import React from "react";
import NavWrapper from "./NavWrapper";
import Container from "react-bootstrap/cjs/Container";

function ContainerWithNav(props){
    console.log(props.location);
    const renderNav=!props.location.pathname.split('/').includes('auth');
    return (
        <React.Fragment>
            <NavWrapper renderNav={renderNav}/>
            <Container fluid id="page-content-wrapper" className={renderNav?"page-content-wrapper":""}>
                {props.children}
            </Container>
        </React.Fragment>
    )
}

export default ContainerWithNav;