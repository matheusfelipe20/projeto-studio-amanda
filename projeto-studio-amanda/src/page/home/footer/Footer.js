import React from 'react';
import './Footer.css';
import logoFooter from '../../../assets/img/logo.png';
import awardsFooter from '../../../assets/img/footer-awards.png';

const Footer = () => (
    <div className="footer-container">
        <img src={logoFooter} alt="Logo de footer" />
        <img src={awardsFooter} alt="Insignia premio melhores do ano" />
        <div className="intro-text-bottom">
            <p>Studio Amanda Paiva</p>
        </div>
        <p className="footer-copy">&copy; Studio Amanda Paiva.</p>
    </div>
);

export default Footer;
