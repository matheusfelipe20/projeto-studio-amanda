import React from 'react';
import './Books.css';
import HeaderSubDominio from '../../components/header/HeaderSubDominio';
import Divider from '../../components/divider/Divider';
import ButtonScroll from '../../components/buttons/buttonScroll/ButtonScroll';
import galleryPhotoHorizontal1 from '../../assets/img/gallery/photo-gallery-h1.png';
import galleryPhotoHorizontal2 from '../../assets/img/gallery/photo-gallery-h2.png';
import galleryPhotoHorizontal3 from '../../assets/img/gallery/photo-gallery-h3.png';
import galleryPhotoHorizontal4 from '../../assets/img/gallery/photo-gallery-h4.png';
import Footer from '../home/footer/Footer';

const Books = () => {
    return (
        <div>
            <HeaderSubDominio/>
            <ButtonScroll />
            <div className="section-books">
                <div className="books-title">
                    <h1>BOOKS</h1>
                    <p>Em Destaque</p>
                </div>
                <Divider width={"30%"} color={"var(--color-primary)"} thickness={"2px"}/>
                <div className="book-panel">
                    <div>
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal1} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal2} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal3} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal4} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal1} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal2} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal3} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal4} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal1} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal2} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal3} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal4} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal1} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal2} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal3} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={galleryPhotoHorizontal4} alt="foto bebê dormindo" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Books;