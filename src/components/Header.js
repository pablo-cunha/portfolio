import React from "react";
import Typed from "react-typed";

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
                <a href="#" className="btn-main-offer">contacte-me</a>
            </div>
        </div>
    )
}

export default Header
