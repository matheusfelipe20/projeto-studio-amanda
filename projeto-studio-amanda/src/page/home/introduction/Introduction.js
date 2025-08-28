import './Introduction.css';

import useTexts from '../../../hooks/useTexts';
import introPhoto from '../../../assets/img/photo-intro.webp';

const Introduction = () => {
    const texts = useTexts();

    return (

        <div className="intro-container">
            <img src={introPhoto} alt="Imagem de apresentação" />
        <div className="overlay"></div>
        <div className="intro-text">
            <h1>{texts.TextIntro_Introduction}</h1>
            <p>{texts.SubTextIntro_Introduction}</p>
        </div>
        <div className="intro-text-bottom">
            <p>{texts.NameStudio}</p>
        </div>
    </div>
    );
};

export default Introduction;