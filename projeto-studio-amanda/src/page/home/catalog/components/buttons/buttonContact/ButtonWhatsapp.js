import React from 'react';
import '../../../variables/Colors.css';
import './ButtonWhatsapp.css';

const ButtonWhatsapp = ({ width, height, text, whatsappNumber, alt }) => {
    //Link API do Whatsapp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
    
    return (
        <a href={whatsappLink} className="button-whatsapp" style={{ width, height }} alt={alt} target="_blank" rel="noopener noreferrer">
            {text}
        </a>
    );
};

export default ButtonWhatsapp;
