import React, { Component } from 'react';
import Multiatendimentos from '../../Images/Multiatendimentos.png';
import Departamento from '../../Images/Departamento.png';
import Gerenciamento from '../../Images/Gerenciamento.png';
import './Servicos.css';

class Servicos extends Component {
    render() {
        return (
            <div>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="main-heading">Solução na Área de Comunicação</h3>
                                <div className="underline mx-auto"></div>
                                <p className="text1">
                                    Com o ZM Chat você tem o que há de mais atual
                                    em atendimento automatizado no WhatsApp
                                </p>
                            </div>
                            <div className="col-md-4 text-center">
                                <h6 className="text2">Multiatendimentos</h6>
                                <p>
                                    Tenha em um só numero de WhatsApp vários atendimentos conectados
                                </p>
                                <img src={Multiatendimentos} alt="Multiatendimentos" id="Multiatendimentos" width="50%" />
                            </div>
                            <div className="col-md-4 text-center">
                                <h6 className="text2">Departamentos</h6>
                                <p>
                                    Suas mensagens sendo distribuídas em cada atendimento por departamentos.
                                </p>
                                <img src={Departamento} alt="Departamento" id="Departamento" width="40%" />
                            </div>
                            <div className="col-md-4 text-center">
                                <h6 className="text2">Gerencimento</h6>
                                <p>
                                    Consiga gerenciar as conversas da sua equipe em tempo real no painel.
                                </p>
                                <img src={Gerenciamento} alt="Gerenciamento" id="Gerenciamento" width="40%" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Servicos;