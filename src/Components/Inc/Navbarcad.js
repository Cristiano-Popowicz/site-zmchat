import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Images/logo.png';
import './Navbarcad.css';

class Navbarcad extends Component {
    render() {
        return (
            <div className="navbar-dark sticky-top shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">

                                    <Link to="/" className="navbar-brand"><img src={Logo} alt="logo" width="50" /> ZM Chat</Link>

                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <li className="nav-item my-lg-2 mx-3">
                                                <Link to="/" className="nav-link active">Home</Link>
                                            </li>
                                            <li className="nav-item my-lg-2 mx-3">
                                                <Link to="/" className="nav-link active">Apresentação</Link>
                                            </li>
                                            <li className="nav-item my-lg-2 mx-3">
                                                <Link to="/" className="nav-link active">Contato</Link>
                                            </li>                                       
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbarcad;
