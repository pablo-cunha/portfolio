import React from 'react'
// PROJECTS IMGS
import githubSearch from '../images/git-search.JPG'
import wordleClone from '../images/clone-wordle.JPG'
import buscadorCep from '../images/buscador-cep.JPG'
import bikcraft from '../images/bikcraft.JPG'
// REACT POP UP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"
// FONTAWESOME IMPORTS
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {

    // Buscador CEP
    const openPopupboxBuscador = () => {
        const content = (
        <>
        <a href="https://buscador-cep-tau.vercel.app/" target="_blank" rel="noreferrer">            
        <img className="popup-image" src={buscadorCep} alt="Clone Netflix"/> 
        </a>
        <p>Buscador de CEP desenvolvido em ReactJS.</p>
        <p>Clique na imagem e acesse o projeto!</p>
        <b>Github: </b> <a className="hyper-link" 
        onClick={() => window.open("https://github.com/pablo-cunha/buscador-cep") } 
        href="" target="_blank" rel="noreferrer">
        https://github.com/pablo-cunha/buscador-cep</a>
        </>
        )
        PopupboxManager.open({content})
    } 

    const popupboxConfigBuscador = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Github Search
    const openPopupboxGitSearch = () => {
            const content = (
                <>
                <a href="https://github-search-zeta-opal.vercel.app/" target="_blank" rel="noreferrer">            
                <img className="popup-image" src={githubSearch} alt="Github Search"/> 
                </a>
                <p>Buscador de perfis Github que exibe detalhes sobre o perfil pesquisado. Desenvolvido em Reactjs.</p>
                <p>Clique na imagem e acesse o projeto!</p>
                <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/pablo-cunha/github-search") } 
                href="" target="_blank" rel="noreferrer">
                https://github.com/pablo-cunha/github-search</a>
                </>
                )
                PopupboxManager.open({content})
        }

    const popupboxConfigGitSearch = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Projeto Bikcraft
    const openPopupboxBikcraft = () => {
        const content = (
            <>
            <a href="https://bikcraft-gold.vercel.app/" target="_blank" rel="noreferrer">            
                <img className="popup-image" src={bikcraft} alt="Buscador CEP"/> 
            </a>
            <p>Projeto site de bicicletas elétricas, feito apenas com HTML, CSS e JavaScript.</p>
            <p>Clique na imagem e acesse o projeto!</p>
            <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/pablo-cunha/bikcraft") } 
            href="" target="_blank" rel="noreferrer">
            https://github.com/pablo-cunha/bikcraft</a>
            </>
            )
            PopupboxManager.open({content})
    }

    const popupboxConfigBikcraft = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Wordle Clone
    const openPopupboxWordle = () => {
        const content = (
            <>
            <a href="https://pablo-cunha.github.io/wordle-clone/" target="_blank" rel="noreferrer">            
                <img className="popup-image" src={wordleClone} alt="Wordle Clone"/> 
            </a>
            <p>Clone do jogo Wordle, feito com HTML, CSS e JavaScript.</p>
            <p>Clique na imagem e acesse o projeto!</p>
            <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/pablo-cunha/wordle-clone") } 
            href="" target="_blank" rel="noreferrer">
            https://github.com/pablo-cunha/wordle-clone</a>
            </>
            )
            PopupboxManager.open({content})
        }

    const popupboxConfigWordle = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                {/* Buscador CEP */}
                    <div className="portfolio-image-box" onClick={openPopupboxBuscador}>
                    <img className="portfolio-image" src={buscadorCep} alt="Buscador de CEP desenvolvido em React."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* Bikcraft Box */}
                    <div className="portfolio-image-box" onClick={openPopupboxBikcraft}>
                    <img className="portfolio-image" src={bikcraft} alt="Projeto site de bicicletas elétricas, feito apenas com HTML, CSS e JavaScript."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* Github Search */}
                    <div className="portfolio-image-box" onClick={openPopupboxGitSearch}>
                    <img className="portfolio-image" src={githubSearch} alt="Github Search"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* Wordle Clone Box */}
                <div className="portfolio-image-box" onClick={openPopupboxWordle}>
                    <img className="portfolio-image" src={wordleClone} alt="Clone do jogo Wordle, feito com HTML, CSS e JavaScript."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                </div> 
            </div>
            <PopupboxContainer {...popupboxConfigBuscador}/>
            <PopupboxContainer {...popupboxConfigBikcraft}/>
            <PopupboxContainer {...popupboxConfigGitSearch}/>
            <PopupboxContainer {...popupboxConfigWordle}/>
    </div>
    )
}

export default Portfolio
