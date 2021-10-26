import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll"

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>desenvolvimento web</h1>
                <Typed 
                    className="typed-text"
                    strings= { ["React", "Angular", "VueJs", "CSS"] }
                    typeSpeed= {40}
                    backSpeed= {60}
                    loop 
                />
                <Link smooth={true} to="contacts" offset={0} href="" className="btn-main-offer">contacte-me</Link>
            </div>
        </div>
    )
}

export default Header
