import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
    render() {
        return (
            <div>
                <section className="section bg-c-light border-top" id="video">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="main-heading">Apresentação sobre o ZM Chat</h3>
                                <div className="underline mx-auto"></div>
                                <p className="text1">
                                    Clique para ver o vídeo, e saber mais sobre os benefícios do ZM Chat
                                </p>
                            </div>
                            <div className="conteudo">
                                <iframe className="iframe" src="https://www.youtube.com/embed/X1YJVjVczCM"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            </div>
                        </div>                
                    </div>
                </section>
            </div>
        );
    }
}

export default Video;


