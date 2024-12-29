import React from 'react';
import './HeaderSubDominio.css';
import logoHeaderNav from '../../assets/img/logo-brown.png';

import { Link } from 'react-router-dom';

const HeaderSubDominio = () => {
    return (
        <div>
            <div className="header-secundary">
                <Link to="/">
                    <img className="header-secundary-img" src={logoHeaderNav} alt="logo secundaria do site" />
                </Link>
            </div>
        </div>
    );
};

export default HeaderSubDominio;