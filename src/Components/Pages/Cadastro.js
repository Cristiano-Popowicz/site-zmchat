import React, { Component } from 'react';
import Navbarcad from '../../Components/Inc/Navbarcad';
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import Qrcode from '../Images/Qrcode.png';
import Footercad from '../../Components/Inc/Footercad';
import './Cadastro.css';

function ScrollToTopOnMount() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function Cadastro() {
    return(
        <div>
        <Navbarcad />
        <ScrollToTopOnMount />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Cadastre-se no ZM Chat</h3>
                            <div className="underline mx-auto"></div>
                            <p className="text1">
                                Preencha o Cadastro e clique em cadastrar, agora é só efetuar o pagamento do valor mensal.<br></br>
                                Após efetuar o pagamento já pode baixar o ZM Chat e acessar o Painel Administrativo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-c-light border-top">
                <form className="container col-6">
                    <div className="row" id="form">
                        <div className="form-group col-md-4 mb-3">
                            <label>CPF/CNPJ</label>
                            <input type="text" className="form-control" id="cpf_cnpj" name="cpf_cnpj" onblur="" required />
                        </div>
                        <div className="form-group col-md-8 mb-3">
                            <label>Nome/Razão Social</label>
                            <input type="text" className="form-control" id="nomeRazaoSocial" name="nomeRazaoSocial" />
                        </div>
                        <div className="form-group col-md-8 mb-3">
                            <label>Nome Fantasia</label>
                            <input type="text" className="form-control" id="nomeFantasia" name="nomeFantasia" required />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <label>Contato</label>
                            <input type="text" className="form-control" id="contato" name="contato" required />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <label>Telefone</label>
                            <input type="text" className="form-control" id="telefone" name="telefone" required />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <label>Numero Whatsapp</label>
                            <input type="text" className="form-control" id="numeroWhatsapp" name="numeroWhatsapp" required />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <label>CEP</label>
                            <input type="text" className="form-control" id="cep" name="cep" required />
                        </div>
                        <div className="form-group col-md-10 mb-3">
                            <label>Endereço</label>
                            <input type="text" className="form-control" id="endereco" name="endereco" required />
                        </div>
                        <div className="form-group col-md-2 mb-3">
                            <label>Numero</label>
                            <input type="text" className="form-control" id="numero" name="numero" required />
                        </div>
                        <div className="form-group col-md-5 mb-3">
                            <label>Bairro</label>
                            <input type="text" className="form-control" id="bairro" name="bairro" required />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <label>Cidade</label>
                            <input type="text" className="form-control" id="cidade" name="cidade" required />
                        </div>
                        <div className="form-group col-md-3 mb-3">
                            <label>Estado</label>
                            <select type="text" className="form-control" id="estado" name="estado" required>
                                <option selected>Escolher...</option>
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AM</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label>E-mail para Login</label>
                            <input type="text" className="form-control" id="emailLogin" name="emailLogin" required />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Senha para Login</label>
                            <input type="text" className="form-control" id="senhaLogin" name="senhaLogin" required />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Confirmar Senha</label>
                            <input type="text" className="form-control" id="senhaLogin" name="senhaLogin" required />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <Link to="/Cadastro" id="btnCad" className="btn btn-dark shadow">Cadastrar</Link>
                        </div>
                    </div>
                    <div className="container col-12 mb-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <img src={Qrcode} alt="Qrcode" id="Qrcode" width="40%" />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <label>Chave PIX</label>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <Link to="/Cadastro" className="btn btn-dark shadow">Copiar Chave</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </form>
            </section>
            <Footercad />
        </div>
    );
}

export default Cadastro;


            