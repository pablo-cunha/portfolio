import React from "react";
import Picture from "../gthub-profile.jfif"

const About = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">                        
                    <img className="profile-img" src={Picture} alt="Me"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">sobre mim</h1>
                    <p className="about-text">
                    Olá, me chamo Pablo e atualmente sou estudante de análise e desenvolvimento de sistemas na instituição FAETERJ. 
                    Como um bom entusiasta, por fora da faculdade estou sempre atrás de conhecimento prático sobre programação. 
                    Tenho conhecimento em desenvolvimento web, utilizando tecnologias como: ReactJS, Angular, Express e outras mais.
                    No momento estou estudando Vue.js e Design UI/UX.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
