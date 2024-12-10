import React from 'react';
import './Introduction.css';
import introPhoto from '../../../assets/img/photo-intro.webp';

const Introduction = () => (
    <div className="intro-container">
        <img src={introPhoto} alt="Imagem de apresentação" />
        <div class="overlay"></div>
        <div className="intro-text">
            <h1>Eternizando seus melhores momentos</h1>
            <p>Onde cada clique conta uma história</p>
        </div>
        <div className="intro-text-bottom">
            <p>Studio Amanda Paiva</p>
        </div>
    </div>

);

export default Introduction;
