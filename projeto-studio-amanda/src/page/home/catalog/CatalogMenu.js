import './CatalogMenu.css';

import { Link } from 'react-router-dom';
import useTexts from '../../../hooks/useTexts';

import photoCatalogIntro from '../../../assets/img/catalog/catalog-intro.webp';
import photoCatalog1 from '../../../assets/img/catalog/catalog-p1.webp';
import photoCatalog2 from '../../../assets/img/catalog/catalog-p2.webp';
import photoCatalog3 from '../../../assets/img/catalog/catalog-p3.webp';
import photoCatalog4 from '../../../assets/img/catalog/catalog-p4.webp';
import photoMenu1 from '../../../assets/img/catalog/catalog-menu-1.webp';
import photoMenu2 from '../../../assets/img/catalog/catalog-menu-2.webp';
import photoMenu3 from '../../../assets/img/catalog/catalog-menu-3.webp';

const CatalogMenu = () => {
    const texts = useTexts();

    return (
        <div className="catalog-container">
            <div className="catalog-title">
                <h1>{texts.TitlePage_CatalogMenu}</h1>
                <p>{texts.SubTitlePage_CatalogMenu}</p>
            </div>
            <div className="catalog-photos">
                <div className='catalog-special'>
                    <img src={photoCatalogIntro} alt="Imagem principal do catálogo" className="catalog-image"/>
                    <div className="catalog-overlay always-visible">
                        <div className="catalog-topSide">
                            <h1 className="catalogSpecial-title">{texts.TitleCatalogSpecial_CatalogMenu}</h1>
                        </div>
                        <div className="catalog-botSide">
                            <p className="catalog-description">
                                {texts.DescriptionCatalogSpecial_CatalogMenu}
                            </p>
                            <Link to="/books/dia+das+maes">
                                <button className="catalog-button">{texts.ButtonViewGallery_CatalogMenu}</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="catalog-group">
                    <div>
                        <img src={photoCatalog1} alt="Imagem secundaria do catalogo" />
                        <img src={photoCatalog2} alt="Imagem secundaria do catalogo" />
                    </div>
                    <div>
                        <img src={photoCatalog3} alt="Imagem secundaria do catalogo" />
                        <img src={photoCatalog4} alt="Imagem secundaria do catalogo" />
                    </div>
                </div>
            </div>
            <div className="catalog-menu">
                <p>{texts.TextBooks_CatalogMenu}</p>
                <div className="menu-container">
                    <div className="menu-options">
                        <img src={photoMenu1} alt="Imagem de apresentação de menu" />
                        <div className="menu-title">
                            <p>{texts.Section_Books_CatalogMenu}</p>
                        </div>
                    </div>
                    <div className="menu-options">
                        <img src={photoMenu2} alt="Imagem de apresentação de menu" />
                        <div className="menu-title">
                            <p>{texts.Section_Events_CatalogMenu}</p>
                        </div>
                    </div>
                    <div className="menu-options">
                        <img src={photoMenu3} alt="Imagem de apresentação de menu" />
                        <div className="menu-title">
                            <p>{texts.Section_Outside_CatalogMenu}</p>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default CatalogMenu;
