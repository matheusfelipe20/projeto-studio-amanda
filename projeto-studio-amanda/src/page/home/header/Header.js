import React from 'react';
import './Header.css';
import logoHeader from '../../../assets/img/logo.png';

const Header = () => (
    <header className="header">
        <img className="header-img" src={logoHeader} alt="logo site" />
        <nav>
        <ul className="header-nav">
            <li><a className="nav-option" href="#gallery">Galeria</a></li>
            <li><a className="nav-option" href="#contact">Contato</a></li>
        </ul>
        </nav>
    </header>
);

export default Header;
