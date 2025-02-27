import React from 'react';
import './Footer.css';
import logoFooter from '../../../assets/img/logo.png';
import awardsFooter1 from '../../../assets/img/footer-awards-2021.webp';
import awardsFooter2 from '../../../assets/img/footer-awards-2022.webp';
import awardsFooter3 from '../../../assets/img/footer-awards-2023.webp';
import awardsFooter4 from '../../../assets/img/footer-awards-2024.webp';
import Divider from '../../../components/divider/Divider';
import SocialButton from '../../../components/buttons/buttonSocial/SocialButton';

import instagramIcon from '../../../assets/icon/instagram-footer.svg';
import whatsappIcon from '../../../assets/icon/whatsapp-footer.svg';
import facebookIcon from '../../../assets/icon/facebook-footer.svg';
import LanguageSelector from '../../../components/languageSelector/LanguageSelector';

const Footer = ({ language, setLanguage }) => (
    <div className="footer-container">
        <div className="footer-panel">
            <div className="footer-left">
                <div className="footer-group">
                    <p className="footer-title">Nossas Redes Sociais</p>
                    <div className="footer-redeSocial">
                        <SocialButton height={"24px"} width={"24px"} icon={instagramIcon} alt="Perfil Instagram" href="https://www.instagram.com/amandabande?igsh=enZ3eGE5cWdyazll" />
                        <SocialButton height={"24px"} width={"24px"} icon={whatsappIcon} alt="Perfil Whatsapp" href="https://api.whatsapp.com/send?phone=558388217042" />
                        <SocialButton height={"24px"} width={"24px"} icon={facebookIcon} alt="Perfil Facebook" href="https://www.facebook.com/www.amandapaiva.com.br?mibextid=ZbWKwL" />
                    </div>
                </div>
                <div className="footer-group">
                    <p className="footer-title">Premiações</p>
                    <div className="footer-awards">
                        <img src={awardsFooter1} alt="Insignia premio melhores do ano 2021" />
                        <img src={awardsFooter2} alt="Insignia premio melhores do ano 2022" />
                        <img src={awardsFooter3} alt="Insignia premio melhores do ano 2023" />
                        <img src={awardsFooter4} alt="Insignia premio melhores do ano 2024" />
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="select-languageFooter">
                    <LanguageSelector language={language} setLanguage={setLanguage}/>
                </div>
            </div>
        </div>
        <div className="footer-divider">
            <Divider width={"95%"} color={"var(--background-footer-hover)"} thickness={"1px"}/>
        </div>
        <div className="footer-final">
            <img className="footer-logo" src={logoFooter} alt="Logo de footer" />
            <p className="footer-copy">&copy; 2025</p>
        </div>
    </div>
);

export default Footer;
