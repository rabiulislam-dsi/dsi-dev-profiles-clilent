import React, {useState} from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

import "./Layout.scss";

function NavWrapper() {
    const [sidebar, setSidebar] = useState(false);
    const toggleSideBar = () => setSidebar(!sidebar);
    return(
        <div id="NavWrapper" className={sidebar ? 'toggled' : ''}>
            <NavBar toggleSideBar={toggleSideBar}/>
            <SideBar toggleSideBar={toggleSideBar}/>
        </div>
    )
}

export default NavWrapper;