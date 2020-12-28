import React, {useState} from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function NavWrapper(props) {
    const [sidebar, setSidebar] = useState(false);
    const toggleSideBar = () => setSidebar(!sidebar);
    return props.renderNav===true?(
        <div id="NavWrapper" className={sidebar ? 'toggled' : ''}>
            <NavBar toggleSideBar={toggleSideBar}/>
            <SideBar toggleSideBar={toggleSideBar}/>
        </div>
    ):null
}

export default NavWrapper;