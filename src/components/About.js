import React from "react";
import Picture from "../images/gthub-profile.jfif";

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={Picture} alt="Me" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">sobre mim</h1>
          <p className="about-text">
            Sempre fui interessado na área de tecnologia da informação e durante a adolescência descobri uma vocação para programação,
            motivo que me fez cursar Análise e Desenvolvimento de Sistemas atualmente. <br/>
            Por fora da faculdade estou sempre atrás de conhecimento prático sobre desenvolvimento web atráves de cursos. 
            No momento estou estudando Java e Design UI/UX.
            <br/>
            Lido muito bem com trabalhos em grupo e prazos. 
            Estou interessado em aplicar o conhecimento adquirido durante a graduação e contribuir com projetos da empresa,
            além de aperfeiçoar meu conhecimento em áreas de desenvolvimento de software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
