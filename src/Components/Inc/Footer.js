import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './Footer.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';
import {HashLink as Link} from 'react-router-hash-link';

class Footer extends Component {
    render() {
        return (
            <div>
                <section className="section footer text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h6>ZM Chat</h6>
                                <hr/>
                                <p>
                                    Em uma só ferramenta tenha um ChatBot, Multiatendimentos
                                    e Campanhas para vendas, enviando várias mensagens
                                    ao mesmo tempo, solução para o dia a dia da sua empresa.
                                </p>
                            </div>
                            <div className="col-md-2">
                                <h6>Clique nos Links</h6>
                                <hr/>
                                <div className="mb-2"><Link smooth to="#home">Home</Link></div>
                                <div className="mb-2"><Link smooth to="#video">Apresentação</Link></div>
                                <div className="mb-2"><Link smooth to="#contato">Contato</Link></div>
                            </div>
                            <div className="col-md-4">
                                <h6>Contato</h6>
                                <hr/>
                                <div className="mb-2"><p className="text-white mb-1">Rua Clóvis da Fonseca, 240 | 1° Andar - Sala 204</p></div>
                                <div className="mb-2"><p className="text-white mb-1">43. 98447-7739</p></div>
                                <div className="mb-2"><p className="text-white mb-1">contato@zmchat.com.br</p></div>
                            </div>
                            <div className="col-md-2">
                                <h6>Redes Sociais</h6>
                                <hr/>
                                <div className="mb-2">
                                    <FaFacebookSquare size={23} />
                                    <Link to="/" class="face">Facebook</Link>
                                </div>
                                <div className="mb-2">
                                    <FaInstagramSquare size={23} />
                                    <Link to="/" class="insta">Instagram</Link>
                                </div>
                                <div className="mb-2">
                                    <FaYoutubeSquare size={23} />
                                    <Link to="/" class="youtube">Youtube</Link>
                                </div>
                            </div>
                        </div>
                        <div className="copy text-center">© Todos os direitos reservados - 2021 | ZM Chat</div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;