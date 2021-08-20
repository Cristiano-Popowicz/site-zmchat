import React, { Component } from 'react';
import Navbar from '../../Components/Inc/Navbar';
import Slider from '../Inc/Slider';
import Servicos from './Inc/Servicos';
import Video from './Inc/Video';
import Info from './Inc/Info';
import Pricing from './Inc/Pricing';
import Contato from './Inc/Contato';
import Footer from '../../Components/Inc/Footer';
import { useEffect } from "react";
import './Home.css';

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ScrollToTopOnMount />
                <Slider />
                <Servicos />
                <Video />
                <Info />
                <Pricing />
                <Contato />
                <Footer />
            </div>
        );
    }
}

export default Home;