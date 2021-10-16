import React from 'react'
import { faHandsHelping, faTrophy, faCheckCircle, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Ideals = () => {
    return (
        <div className="ideals">
            <h1 className="py-5">valores</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faHandsHelping} size="2x"/></div>                                
                                <h3>Cooperação</h3>
                                <p>Sozinho se chega rápido, mas juntos vamos mais longe.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faTrophy} size="2x"/></div>
                                <h3>Ambição</h3>
                                <p>Busque sempre ser o melhor no que faz.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faCheckCircle} size="2x"/></div>
                                <h3>Produtividade</h3>
                                <p>Resultados precisam ser entregues.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faSmileWink} size="2x"/></div>
                                <h3>Comunicação</h3>
                                <p>Expor sua opinião é uma parte importante em um trabalho colaborativo.</p>
                            </div>
                        </div>
                        {/* - */}
                    </div>
                </div>
            </div>
    )
}

export default Ideals
