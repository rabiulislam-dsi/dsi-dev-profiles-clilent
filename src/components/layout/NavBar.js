import React from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import {AiOutlineMenu} from "react-icons/ai"
import logo from "../../images/dsi_logo.png"

function NavBar(props) {
    return (
        <Navbar bg="light" variant="light" className="shadow" fixed="top">
            <div onClick={props.toggleSideBar} className="text-primary d-block d-lg-none">
                <AiOutlineMenu size="1.5em"/>
            </div>
            <Navbar.Brand href="#" id="logo">
                <img
                    alt=""
                    src={logo}
                    width="70"
                    height="auto"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBar;