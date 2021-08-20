import React, { Component } from 'react';
import './Pricing.css';
import {Link} from 'react-router-dom';
import { HiArrowCircleRight } from 'react-icons/hi';
import { HiCheckCircle } from 'react-icons/hi';

class Pricing extends Component {
    render() {
        return (
            <div>
                <section className="section bg-c-light border-top" id="pricing">
                    <div className="container py-5">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Plano para utilização do ZM Chat</h3>
                            <div className="underline mx-auto"></div>
                            <p className="text1">
                                Clique em comece já e faça o cadastro para ter acesso ao painel administrativo
                            </p>
                        </div>
                        <div className="row align-items" id="plano">
                            <div className="col-lg-4">
                                <div className="mb-5 mb-lg-0">
                                    <div className="bg-white p-5 rounded-lg shadow">
                                        <h5><HiCheckCircle /> Mensagens Ilimitadas</h5>
                                        <p>Mande mensagens para vários contatos de uma só vez</p>
                                        <h5><HiCheckCircle /> Chatbot</h5>
                                        <p>Tenha respostas automáticas criadas por você 24 horas por dia</p>
                                        <h5><HiCheckCircle /> Multiatendimentos</h5>
                                        <p>Vários colaboradores podem atender com um numero de WhatsApp ao mesmo tempo em computadores separados na mesma rede</p>
                                        <h5><HiCheckCircle /> Departamentos</h5>
                                        <p>Organize seus atendimentos por departamentos sendo cadastrados no usuário do painel do ZM Chat</p>
                                        <h5><HiCheckCircle /> Campanhas</h5>
                                        <p>Crie campanhas com imagens e textos personalizados enviando para quantos contatos quiser</p>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-5 mb-lg-0">
                                    <div className="bg-white p-5 rounded-lg shadow">
                                        <h5><HiArrowCircleRight /> 1º Clique em COMECE JÁ</h5>
                                        <p>No computador clique em COMECE JÁ, faça seu cadastro, efetue o pagamento da mensalidade e faça download do programa ZM Chat</p>
                                        <h5><HiArrowCircleRight /> 2º Instale o ZM Chat</h5>
                                        <p>Clique no executável que baixou, aí é só aceitar os termos e clicar em próximo até terminar a instalação</p>
                                        <h5><HiArrowCircleRight /> 3º Vídeo de Treinamento</h5>
                                        <p>Será habilitado o link do vídeo de treinamento, assista o vídeo e após assistir já estará habilitado para utilizar o programa ZM Chat</p>
                                        <h5><HiArrowCircleRight /> 4º Decole nas Vendas</h5>
                                        <p>Crie sua primeira Campanha, e veja como é fácil usar o ZM Chat, tanto para mensagens automáticas, multiatendimentos quanto para fazer suas campanhas de vendas</p>
                                    </div>
                                </div> 
                            </div>                       
                            <div className="col-lg-4 text-center">
                                <div className="bg-white p-5 rounded-lg shadow">
                                    <h1 className="h5 text-uppercase font-weight-bold mb-4">Plano</h1>
                                    <h2 className="h1 font-weight-bold">R$ 290,00 <span className="text-small font-weight-normal ml-2">/ Mês</span></h2>
                                    <div className="custom-separator my-4 mx-auto bg-primary" id="separador" />
                                        <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary" /> ChatBot - Personalizado</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary" /> Multiatendimentos - Com um só numero</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary" /> Campanhas - Mensagens Ilimitadas</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary" /> Departamentos - Visualize as mensagens</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary" /> Usuários - Utilização personalizada</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary" /> Suporte - Em horário comercial</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary" /> Ajuda - Vídeos de utilização no Youtube </li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary" /> Marketing Digital - Vídeos de Ajuda</li>
                                        </ul>
                                    <div className="d-grid gap-2">
                                        <Link to="/Cadastro" className="btn btn-dark shadow w-100">Comece Já <HiArrowCircleRight /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </section> 
            </div>

        );
    }
}

export default Pricing;


