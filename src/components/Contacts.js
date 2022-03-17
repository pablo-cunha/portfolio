import React from 'react';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contacts = () => {
    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
            <h1>minhas redes</h1>
            <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="box">
                                <div>
                                    <a href="https://github.com/pablo-cunha" 
                                    className="link-icon" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                                        <h3>GitHub</h3>
                                    </a>
                                </div>                                
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-4 col-sm-12">
                            <div className="box">
                            <div>
                                <a href="https://www.linkedin.com/in/pablo-cunha/" 
                                className="link-icon" target="_blank" rel="noreferrer">  
                                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                                <h3>Linkedin</h3>
                                </a>
                            </div>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-4 col-sm-12">
                            <div className="box">
                            <div>
                                <a href="mailto:lcunha.pablo@gmail.com" className="link-icon">
                                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                                <h3>E-mail</h3>
                                </a>
                            </div>
                            </div>
                        </div>
                        {/* - */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
