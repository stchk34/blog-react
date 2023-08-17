import React from "react";

import Logo from "../blocks/Logo";
import Menu from "../blocks/MenuLinks";
import SocialLinks from "../blocks/SocialLinks";


function Header() {
    return (
        <header className="App-header">
            <Logo />
            <Menu />
            <SocialLinks />
        </header>
    );
}

export default Header;
