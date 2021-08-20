import React, { Component } from 'react';
import './Info.css';
import Celular from '../../Images/celular.png';
import { FaCircle } from 'react-icons/fa';
import { IoMdChatboxes } from 'react-icons/io';
import { FaRobot } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { FaFolderOpen } from 'react-icons/fa';
import { HiSpeakerphone } from 'react-icons/hi';

class Info extends Component {
    render() {
        return (
            <div>
                <section className="section border-top">     
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="main-heading">Uma das Melhores Estratégias de Venda</h3>
                                <div className="underline mx-auto"></div>
                                <p className="text1">
                                    Decole nas Vendas com uma ferramenta que milhares de Empresas estão utilizando
                                </p>
                            </div>
                        </div>                
                    </div>
                    <div className="row align-items" id="Info">
                        <div className="col-lg-6 text-center">
                            <div className="mb-5 mb-lg-0">
                                <img src={Celular} className="Celular" alt="Celular" />
                            </div> 
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-5 mb-lg-0">
                                <h5 className="texth5"> WhatsApp no Brasil</h5>
                                <p className="textp"><FaCircle size={10} /> Mais de 120 milhões de pessoas usam o app;</p>
                                <p className="textp"><FaCircle size={10} /> Está instalado em 99% dos celulares;</p>
                                <p className="textp"><FaCircle size={10} /> 98% dos brasileiros usam o app diariamente.</p>
                            </div>
                            <div className="mb-5 mb-lg-0">
                                <h5 className="texth5b"> Decole nas Vendas</h5>
                                <p className="textp2"><IoMdChatboxes size={40} /> Mensagens Ilimitadas</p>
                                <p className="textp2"><FaRobot size={40} /> Chatbot Resposta Automática</p>
                                <p className="textp2"><IoIosPeople size={40} /> Multiatendimento</p>
                                <p className="textp2"><FaFolderOpen size={40} /> Departamentos</p>
                                <p className="textp2"><HiSpeakerphone size={40} /> Campanhas</p>
                            </div>  
                        </div>                      
                    </div>
                </section> 
            </div>
        );
    }
}

export default Info;


                        