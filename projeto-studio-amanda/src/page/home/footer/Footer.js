import './Footer.css';

import useTexts from '../../../hooks/useTexts';

import logoFooter from '../../../assets/img/logo.png';
import Divider from '../../../components/divider/Divider';
import SocialButton from '../../../components/buttons/buttonSocial/SocialButton';

import instagramIcon from '../../../assets/icon/instagram-footer.svg';
import whatsappIcon from '../../../assets/icon/whatsapp-footer.svg';
import facebookIcon from '../../../assets/icon/facebook-footer.svg';

const Footer = () => {
    const texts = useTexts();

    return (
        <section id="footer">
            <div className="footer-panel">
                <div className="footer-header">
                    <div>
                        <div className="footer-logo">
                            <img className="footer-img" src={logoFooter} alt="Logo de footer" />
                            <p className="footer-copy">&copy; {texts.YearsCopy}</p>
                        </div>
                        <p className="footer-subtext">{texts.Subtext_Footer}</p>
                    </div>
                    <div>
                        <p className="footer-text">{texts.SocialPage_Footer}</p>
                        <div className="social-contact">
                            <SocialButton height={"24px"} width={"24px"} icon={instagramIcon} alt="Perfil Instagram" href="https://www.instagram.com/amandabande?igsh=enZ3eGE5cWdyazll" />
                            <SocialButton height={"24px"} width={"24px"} icon={whatsappIcon} alt="Perfil Whatsapp" href="https://api.whatsapp.com/send?phone=558388217042" />
                            <SocialButton height={"24px"} width={"24px"} icon={facebookIcon} alt="Perfil Facebook" href="https://www.facebook.com/www.amandapaiva.com.br?mibextid=ZbWKwL" />
                        </div>
                    </div>
                </div>
                <Divider margin={'10px 0px'} width={'90%'} thickness={'1px'} color={'#A4A4A4'}/>
                <p className="footer-created">{texts.Created_Footer} <a className="footer-link" href="https://matheusfelipe20.github.io/portfolio/">MatheusFelipe20</a></p>
            </div>
        </section>
    );
};

export default Footer;
