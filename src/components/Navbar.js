import React from "react";
import logo from "../brand.png"
import { Link } from "react-scroll"
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (       
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
    <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo"/></a>
    <h3 className="navbar-name">PABLO CUNHA</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link smooth={true} to="home" offset={0} className="nav-link" aria-current="page" href="#">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="about" offset={-80} className="nav-link" href="">Sobre</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="ideals" offset={-80} className="nav-link" href="">Valores</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="portfolio" offset={-80} className="nav-link" href="">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="contacts" offset={0} className="nav-link" href="">Contato</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
