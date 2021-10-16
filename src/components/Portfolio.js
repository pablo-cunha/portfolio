import React from 'react'
import crud from '../projeto1.JPG'
import galeria from '../galeria.JPG'
// REACT POP UP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"
// FONTAWESOME IMPORTS
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {

    // Projeto CRUD
    const openPopupboxCRUD = () => {
        const content = (
        <>
        <a href="">            
        <img className="popup-image" src={crud} alt="Sistema CRUD"/> 
        </a>
        <p>Sistema CRUD em React, TailwindCSS e FireBase.</p>
        <p>Clique na imagem e acesse o projeto!</p>
        <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/pablo-cunha/sistemaCrudComReact") }>
            https://github.com/pablo-cunha/sistemaCrudComReact</a>
        </>
        )
        PopupboxManager.open({content})
    } 

    const popupboxConfigCRUD = {
        titleBar: {
            enable: true,
            text: "Sistema CRUD"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

        // Projeto Galeria
        const openPopupboxGaleria = () => {
            const content = (
            <>
            <a href="">            
            <img className="popup-image" src={galeria} alt="Galeria de Fotos"/> 
            </a>
            <p>Galeria de fotos com filtro, feito com Webpack e Bootstrap.</p>
            <p>Clique na imagem e acesse o projeto!</p>
            <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/pablo-cunha/projetoGaleriaDeFotos") }>
                https://github.com/pablo-cunha/projetoGaleriaDeFotos</a>
            </>
            )
            PopupboxManager.open({content})
        } 
    
        const popupboxConfigGaleria = {
            titleBar: {
                enable: true,
                text: "Galeria de Fotos"
            },
            fadeIn: true,
            fadeInSpeed: 500
        }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxCRUD}>
                    <img className="portfolio-image" src={crud} alt="Sistema CRUD em React e 
                    TailwindCSS"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxGaleria}>
                    <img className="portfolio-image" src={galeria} alt="Galeria de Fotos com filtro
                    com Webpack e Bootstrap"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigCRUD}/>
            <PopupboxContainer {...popupboxConfigGaleria}/>
    </div>
    )
}

export default Portfolio
