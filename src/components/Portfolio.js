import React from 'react'
// PROJECTS IMGS
import buscadorCep from '../images/buscador-cep.JPG'
import toDoList from '../images/vue-task-manager.JPG'
import wordleClone from '../images/clone-wordle.JPG'
import netflix from '../images/netflix-clone.JPG'
import bikcraft from '../images/bikcraft.JPG'
// REACT POP UP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"
// FONTAWESOME IMPORTS
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {

    // Projeto Netflix
    const openPopupboxNetflix = () => {
        const content = (
        <>
        <a href="https://react-netflix-khaki.vercel.app/" target="_blank" rel="noreferrer">            
        <img className="popup-image" src={netflix} alt="Clone Netflix"/> 
        </a>
        <p>Clone Frontend Netflix desenvolvido em React.</p>
        <p>Clique na imagem e acesse o projeto!</p>
        <b>Github: </b> <a className="hyper-link" 
        onClick={() => window.open("https://github.com/pablo-cunha/reactNetflix") } 
        href="" target="_blank" rel="noreferrer">
        https://github.com/pablo-cunha/reactNetflix</a>
        </>
        )
        PopupboxManager.open({content})
    } 

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

        // Projeto Vue
        const openPopupboxToDo = () => {
            const content = (
            <>
            <a href="https://vue-todo-list-rho.vercel.app/" target="_blank" rel="noreferrer">            
            <img className="popup-image" src={toDoList} alt="Task Manager"/> 
            </a>
            <p>To Do List em VueJS e estilizado com Bootstrap.</p>
            <p>Clique na imagem e acesse o projeto!</p>
            <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/pablo-cunha/vueToDoList") } 
            href="" target="_blank" rel="noreferrer">
            https://github.com/pablo-cunha/vueToDoList</a>
            </>
            )
            PopupboxManager.open({content})
        } 
    
        const popupboxConfigToDo = {
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

        // Buscador CEP
        const openPopupboxBuscador = () => {
            const content = (
                <>
                <a href="https://buscador-cep-phi.vercel.app/" target="_blank" rel="noreferrer">            
                <img className="popup-image" src={buscadorCep} alt="Buscador CEP"/> 
                </a>
                <p>Buscador de CEP feito em React e requisições feitas via Ajax.</p>
                <p>Clique na imagem e acesse o projeto!</p>
                <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/pablo-cunha/buscador-cep") } 
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

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                {/* Netflix Box */}
                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                    <img className="portfolio-image" src={netflix} alt="Clone Netflix desenvolvido em React."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* To-Do List Box */}
                    <div className="portfolio-image-box" onClick={openPopupboxToDo}>
                    <img className="portfolio-image" src={toDoList} alt="Task Manager feito em VueJS e Bootstrap."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* Wordle Clone Box */}
                    <div className="portfolio-image-box" onClick={openPopupboxWordle}>
                    <img className="portfolio-image" src={wordleClone} alt="Clone do jogo Wordle, feito com HTML, CSS e JavaScript."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* Buscador de CEP */}
                    <div className="portfolio-image-box" onClick={openPopupboxBuscador}>
                    <img className="portfolio-image" src={buscadorCep} alt="Buscador de CEP feito em React e requisições feitas via Ajax."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* Bikcraft Box */}
                    <div className="portfolio-image-box" onClick={openPopupboxBikcraft}>
                    <img className="portfolio-image" src={bikcraft} alt="Projeto site de bicicletas elétricas, feito apenas com HTML, CSS e JavaScript."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                </div> 
            </div>
            <PopupboxContainer {...popupboxConfigToDo}/>
            <PopupboxContainer {...popupboxConfigNetflix}/>
            <PopupboxContainer {...popupboxConfigWordle}/>
            <PopupboxContainer {...popupboxConfigBuscador}/>
            <PopupboxContainer {...popupboxConfigBikcraft}/>
    </div>
    )
}

export default Portfolio
