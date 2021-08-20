import React, { Component } from 'react';
import Topo from '../Images/topo.png';

class Slider extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" id="home">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Topo} class="d-block w-100" alt="Topo" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;


