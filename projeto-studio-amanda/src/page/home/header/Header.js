import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoHeader from '../../../assets/img/logo.png';

const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            <img className="header-img" src={logoHeader} alt="logo site" />

            {isMobile ? (
                <>
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <Link to="/books" onClick={() => setMenuOpen(false)}>
                                <li><button className="nav-option separate-option">Galeria</button></li>
                            </Link>
                            <li>
                                <button className="nav-option" onClick={() => { scrollToContact(); setMenuOpen(false); }}>
                                    Contato
                                </button>
                            </li>
                        </ul>
                    </nav>
                </>
            ) : (
                <nav>
                    <ul className="header-nav">
                        <Link to="/books">
                            <li><button className="nav-option">Galeria</button></li>
                        </Link>
                        <li><button className="nav-option" onClick={scrollToContact}>Contato</button></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
