import React from 'react';
import './Contact.css';
import contactPhoto from '../../../assets/img/photo-contact.png';
import instagramIcon from '../../../assets/icon/instagram.svg';
import whatsappIcon from '../../../assets/icon/whatsapp.svg';
import facebookIcon from '../../../assets/icon/facebook.svg';

import SocialButton from '../../../components/buttons/buttonSocial/SocialButton';
import ButtonContato from '../../../components/buttons/buttonContact/ButtonWhatsapp';

const Contact = () => (
    <section id="contact">
        <div className="contact-container">
            <img className="contact-photo" src={contactPhoto} alt="foto de Perfil" />
            <div className="contact-panel">
                <h1>CONTATO</h1>
                <div className="contact-text">
                    <p>Studio Amanda Paiva</p>
                    <p>(83) 98821-7042</p>
                    <p>R. Prefeito João Pimentel filho, 193 - Centro</p>
                    <p>Guarabira / PB</p>
                    <div className="contact-social">
                        <SocialButton height={"28px"} width={"28px"} icon={instagramIcon} alt="Perfil Instagram" href="https://www.instagram.com/amandabande?igsh=enZ3eGE5cWdyazll" />
                        <SocialButton height={"28px"} width={"28px"} icon={whatsappIcon} alt="Perfil Whatsapp" href="https://api.whatsapp.com/send?phone=558388217042" />
                        <SocialButton height={"28px"} width={"28px"} icon={facebookIcon} alt="Perfil Facebook" href="https://www.facebook.com/www.amandapaiva.com.br?mibextid=ZbWKwL" />
                    </div>
                    <ButtonContato width="280px" height="45px" text="Solicitar Orçamento" whatsappNumber="558388217042" alt="Botão para entrar em contato via WhatsApp"/>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
