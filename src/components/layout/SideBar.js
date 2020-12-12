import React, {useState} from "react";
import ListGroup from "react-bootstrap/cjs/ListGroup";
import {NavLink} from "react-router-dom";
import {SideBarData} from "./SideBarData";

function SideBar(props) {
    return (
        <div className="shadow bg-light" id="sidebar-wrapper">
            <ListGroup variant="flush" className="bg-light pt-3">
                {SideBarData.map((item, index) => {
                    return (
                        <NavLink key={index} index={index} to={item.path} className={item.cName} onClick={props.toggleSideBar}>
                            {item.icon}
                            <span className="ml-2">
                                {item.title}
                            </span>
                        </NavLink>
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default SideBar;