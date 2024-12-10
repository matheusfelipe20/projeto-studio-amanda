import React from 'react';
import './Header.css';
import logoHeader from '../../../assets/img/logo.png';

const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
    }
};

const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
};


const Header = () => (
    <header className="header">
        <img className="header-img" src={logoHeader} alt="logo site" />
        <nav>
        <ul className="header-nav">
            <li><button className="nav-option" onClick={scrollToGallery}>Galeria</button></li>
            <li><button className="nav-option" onClick={scrollToContact}>Contato</button></li>
        </ul>
        </nav>
    </header>
);

export default Header;
