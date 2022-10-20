import React from 'react'
// PROJECTS IMGS
import githubSearch from '../images/git-search.JPG'
import vueList from '../images/vue-todolist.jpg'
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

    // ToDo List
    const openPopupboxToDo = () => {
        const content = (
            <>
            <a href="https://vue-todolist-iota.vercel.app/" target="_blank" rel="noreferrer">            
                <img className="popup-image" src={vueList} alt="To do list"/> 
            </a>
            <p>ToDo List desenvoldida em Vue.js, estilizada com Bootstrap e utilizando LocalStorage.</p>
            <p>Clique na imagem e acesse o projeto!</p>
            <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/pablo-cunha/vue-todolist") } 
            href="" target="_blank" rel="noreferrer">
            https://github.com/pablo-cunha/vue-todolist</a>
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


    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                {/* Buscador CEP */}
                    <div className="portfolio-image-box" onClick={openPopupboxBuscador}>
                    <img className="portfolio-image" src={buscadorCep} alt="Buscador de CEP"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* Bikcraft Box */}
                    <div className="portfolio-image-box" onClick={openPopupboxBikcraft}>
                    <img className="portfolio-image" src={bikcraft} alt="Projeto site de bicicletas elétricas"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* Github Search */}
                    <div className="portfolio-image-box" onClick={openPopupboxGitSearch}>
                    <img className="portfolio-image" src={githubSearch} alt="Buscador de perfis Github"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* Vue ToDo List */}
                <div className="portfolio-image-box" onClick={openPopupboxToDo}>
                    <img className="portfolio-image" src={vueList} alt="Lista de tarefas desenvolvida em Vue.JS"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                </div> 
            </div>
            <PopupboxContainer {...popupboxConfigBuscador}/>
            <PopupboxContainer {...popupboxConfigBikcraft}/>
            <PopupboxContainer {...popupboxConfigGitSearch}/>
            <PopupboxContainer {...popupboxConfigToDo}/>
    </div>
    )
}

export default Portfolio
