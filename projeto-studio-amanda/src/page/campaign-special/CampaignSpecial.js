import React, { useEffect } from 'react';
import './CampaignSpecial.css';
import HeaderSubDominio from '../../components/header/HeaderSubDominio';
import Divider from '../../components/divider/Divider';
import Footer from '../home/footer/Footer';
import ButtonScroll from '../../components/buttons/buttonScroll/ButtonScroll';
import campaignPhoto1 from '../../assets/img/campaignSpecial/photo-campaign-h1.png';
import campaignPhoto2 from '../../assets/img/campaignSpecial/photo-campaign-h2.png';
import campaignPhoto3 from '../../assets/img/campaignSpecial/photo-campaign-h3.png';
import campaignPhoto4 from '../../assets/img/campaignSpecial/photo-campaign-h4.png';
import campaignPhoto5 from '../../assets/img/campaignSpecial/photo-campaign-h5.png';
import campaignPhoto6 from '../../assets/img/campaignSpecial/photo-campaign-h6.png';
import campaignPhoto7 from '../../assets/img/campaignSpecial/photo-campaign-h7.png';
import campaignPhoto8 from '../../assets/img/campaignSpecial/photo-campaign-h8.png';
import campaignPhoto9 from '../../assets/img/campaignSpecial/photo-campaign-h9.png';
import campaignPhoto10 from '../../assets/img/campaignSpecial/photo-campaign-h10.png';
import campaignPhoto11 from '../../assets/img/campaignSpecial/photo-campaign-h11.png';
import campaignPhoto12 from '../../assets/img/campaignSpecial/photo-campaign-h12.png';
import campaignPhoto13 from '../../assets/img/campaignSpecial/photo-campaign-h13.png';
import campaignPhoto14 from '../../assets/img/campaignSpecial/photo-campaign-h14.png';
import campaignPhoto15 from '../../assets/img/campaignSpecial/photo-campaign-h15.png';
import campaignPhoto16 from '../../assets/img/campaignSpecial/photo-campaign-h16.png';
import campaignPhoto17 from '../../assets/img/campaignSpecial/photo-campaign-h17.png';
import campaignPhoto18 from '../../assets/img/campaignSpecial/photo-campaign-h18.png';
import campaignPhoto19 from '../../assets/img/campaignSpecial/photo-campaign-h19.png';
import campaignPhoto20 from '../../assets/img/campaignSpecial/photo-campaign-h20.png';

const CampaignSpecial = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HeaderSubDominio/>
            <ButtonScroll />
            <div className="section-campaigns">
                <div className="campaigns-title">
                    <h1>Campanha</h1>
                    <p>Férias de Verão</p>
                </div>
                <Divider width={"30%"} color={"var(--color-primary)"} thickness={"2px"}/>
                <div className="campaign-panel">
                    <div>
                        <img className="campaign-photo-horizontal" src={campaignPhoto1} alt="foto criança dormindo" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto2} alt="foto criança sorrindo no cenário de São João" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto3} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto4} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="campaign-photo-horizontal" src={campaignPhoto5} alt="foto criança dormindo" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto6} alt="foto criança sorrindo no cenário de São João" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto7} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto8} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="campaign-photo-horizontal" src={campaignPhoto9} alt="foto criança dormindo" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto10} alt="foto criança sorrindo no cenário de São João" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto11} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto12} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="campaign-photo-horizontal" src={campaignPhoto13} alt="foto criança dormindo" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto14} alt="foto criança sorrindo no cenário de São João" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto15} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto16} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="campaign-photo-horizontal" src={campaignPhoto17} alt="foto criança dormindo" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto18} alt="foto criança sorrindo no cenário de São João" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto19} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto20} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="campaign-photo-horizontal" src={campaignPhoto9} alt="foto criança dormindo" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto1} alt="foto criança sorrindo no cenário de São João" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto5} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="campaign-photo-horizontal" src={campaignPhoto3} alt="foto bebê dormindo" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default CampaignSpecial;