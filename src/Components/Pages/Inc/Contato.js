import React, { Component } from 'react';
import emailjs from "emailjs-com";
import './Contato.css';

function Contato(){
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_9oqlg9q', 'template_dhamwa9', e.target, 'user_75spaHHwSq9GOsNVMy9Dt')
        .then((result) => {
            alert('Mensagem enviada com sucesso, assim que possível entraremos em contato!');
        }, (error) => {
            alert('Mensagem não enviada!');
        });
        e.target.reset();
    }

        return (
            <div>
                <section className="section border-top" id="contato">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="main-heading">Entre em contato conosco</h3>
                                <div className="underline mx-auto"></div>
                                <p className="text1">
                                    Nos envie uma mensagem de sua dúvida, ou se quiser que entremos em contato com você
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="card shadow">
                            <div className="card-body bg-c-light">
                                <div className="row">
                                    <div className="col-md-6">
                                        <form onSubmit={sendEmail}>
                                            <div className="form-grup mb-3">
                                                <h6>Mensagem</h6>
                                                <hr />
                                                <label for="">Nome</label>
                                                <input type="text" name="name" className="form-control" placeholder="Nome" />
                                            </div>
                                            <div className="form-grup mb-3">
                                                <label for="">Celular</label>
                                                <input type="text" name="celular" className="form-control" placeholder="Celular" />
                                            </div>
                                            <div className="form-grup mb-3">
                                                <label for="">E-mail</label>
                                                <input type="text" name="email" className="form-control" placeholder="E-mail" />
                                            </div>
                                            <div className="form-grup">
                                                <label for="">Mensagem</label>
                                                <textarea rows="3" name="mensagem" className="form-control" placeholder="Mensagem..."></textarea>
                                            </div>
                                            <div className="form-grup py-3">
                                                <input type="submit" className="btn btn-dark shadow w-100" value="Enviar mensagem" />
                                            </div>
                                        </form>
                                    </div>
                                    
                                    <div className="col-md-6 border-start" id="endereco">
                                        <h5 className="main-heading1">Endereço</h5>
                                        <div className="underline"></div>
                                        <p>
                                            Rua Clóvis da Fonseca, 240 - 1°Andar - Sala 204
                                        </p>
                                        <p>
                                            Contato: 43. 98447-7739 | Também é WhatsApp
                                        </p>
                                        <p>
                                            E-mail: contato@zmpay.com.br
                                        </p>
                                    </div>
                                </div>
                            </div>                        
                        </div>                
                    </div>
                </section>
            </div>
        );
    }


export default Contato;