import { React, Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import About from "./components/About";
import Ideals from "./components/Ideals";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <Particles
          className="particles-canvas"
          params={{
            particles: {
              number: { value: 30, density: { enable: true, value_area: 900 } },
              shape: { type: "circle", stroke: { width: 6, color: "f9ab00" } },
            },
          }}
        />
        <Navbar />
        <Header />
        <About />
        <Ideals />
        <Portfolio />
        <Contacts />
        <Footer />
      </>
    );
  }
}
