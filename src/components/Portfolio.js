import React from 'react'
import toDoList from '../vue-task-manager.JPG'
import netflix from '../netflix-clone.JPG'
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
        <a href="https://react-netflix-khaki.vercel.app/">            
        <img className="popup-image" src={netflix} alt="Clone Netflix"/> 
        </a>
        <p>Clone Frontend Netflix desenvolvido em React.</p>
        <p>Clique na imagem e acesse o projeto!</p>
        <b>Github: </b> <a className="hyper-link" 
        onClick={() => window.open("https://github.com/pablo-cunha/reactNetflix") } 
        href="">
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
            <a href="https://vue-todo-list-rho.vercel.app/">            
            <img className="popup-image" src={toDoList} alt="Task Manager"/> 
            </a>
            <p>To Do List em VueJS e estilizado com Bootstrap.</p>
            <p>Clique na imagem e acesse o projeto!</p>
            <b>Github: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/pablo-cunha/vueToDoList") } href="">
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

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                    <img className="portfolio-image" src={netflix} alt="Clone Netflix desenvolvido em React."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxToDo}>
                    <img className="portfolio-image" src={toDoList} alt="Task Manager feito em VueJS e Bootstrap"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigToDo}/>
            <PopupboxContainer {...popupboxConfigNetflix}/>
    </div>
    )
}

export default Portfolio
