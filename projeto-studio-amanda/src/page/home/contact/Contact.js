import './Contact.css';
import useTexts from '../../../hooks/useTexts';

import contactPhoto from '../../../assets/img/photo-contact.webp';
import instagramIcon from '../../../assets/icon/instagram.svg';
import whatsappIcon from '../../../assets/icon/whatsapp.svg';
import facebookIcon from '../../../assets/icon/facebook.svg';

import SocialButton from '../../../components/buttons/buttonSocial/SocialButton';
import ButtonContato from '../../../components/buttons/buttonContact/ButtonWhatsapp';

const Contact = () => {
    const texts = useTexts();

    return (
        <section id="contact">
            <div className="contact-container">
                <img className="contact-photo" src={contactPhoto} alt="foto de Perfil" />
                <div className="contact-panel">
                    <h1>{texts.TitlePage_Contact}</h1>
                    <div className="contact-text">
                        <p>{texts.Name_Contact}</p>
                        <p>{texts.Cellphone_Contact}</p>
                        <p>{texts.Adress_Contact}</p>
                        <p>{texts.States_Contact}</p>
                        <div className="contact-social">
                            <SocialButton height={"28px"} width={"28px"} icon={instagramIcon} alt="Perfil Instagram" href="https://www.instagram.com/amandabande?igsh=enZ3eGE5cWdyazll" />
                            <SocialButton height={"28px"} width={"28px"} icon={whatsappIcon} alt="Perfil Whatsapp" href="https://api.whatsapp.com/send?phone=558388217042" />
                            <SocialButton height={"28px"} width={"28px"} icon={facebookIcon} alt="Perfil Facebook" href="https://www.facebook.com/www.amandapaiva.com.br?mibextid=ZbWKwL" />
                        </div>
                        <ButtonContato height="55px" text="Solicitar Orçamento" whatsappNumber="558388217042" alt="Botão para entrar em contato via WhatsApp"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
