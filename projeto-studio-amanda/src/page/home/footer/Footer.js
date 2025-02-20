import React from 'react';
import './Footer.css';
import logoFooter from '../../../assets/img/logo.png';
import awardsFooter1 from '../../../assets/img/footer-awards-2021.webp';
import awardsFooter2 from '../../../assets/img/footer-awards-2022.webp';
import awardsFooter3 from '../../../assets/img/footer-awards-2023.webp';
import awardsFooter4 from '../../../assets/img/footer-awards-2024.webp';

const Footer = () => (
    <div className="footer-container">
        <img src={logoFooter} alt="Logo de footer" />
        <div className="footer-awards">
            <img src={awardsFooter1} alt="Insignia premio melhores do ano 2021" />
            <img src={awardsFooter2} alt="Insignia premio melhores do ano 2022" />
            <img src={awardsFooter3} alt="Insignia premio melhores do ano 2023" />
            <img src={awardsFooter4} alt="Insignia premio melhores do ano 2024" />
        </div>
        <p className="footer-copy">&copy; Studio Amanda Paiva</p>
    </div>
);

export default Footer;
