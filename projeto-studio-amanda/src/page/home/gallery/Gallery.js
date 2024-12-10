import React from 'react';
import './Gallery.css';
import galleryPhoto from '../../../assets/img/gallery/photo-gallery.png';

import galleryPhotoVertical1 from '../../../assets/img/gallery/photo-gallery-v1.png';
import galleryPhotoHorizontal1 from '../../../assets/img/gallery/photo-gallery-h1.png';
import galleryPhotoHorizontal2 from '../../../assets/img/gallery/photo-gallery-h2.png';
import galleryPhotoHorizontal3 from '../../../assets/img/gallery/photo-gallery-h3.png';
import galleryPhotoHorizontal4 from '../../../assets/img/gallery/photo-gallery-h4.png';

import galleryPhotoVertical2 from '../../../assets/img/gallery/photo-gallery-v2.png';
import galleryPhotoHorizontal5 from '../../../assets/img/gallery/photo-gallery-h5.png';
import galleryPhotoHorizontal6 from '../../../assets/img/gallery/photo-gallery-h6.png';
import galleryPhotoHorizontal7 from '../../../assets/img/gallery/photo-gallery-h7.png';
import galleryPhotoHorizontal8 from '../../../assets/img/gallery/photo-gallery-h8.png';

const Gallery = () => (
    <section id="gallery">
        <div className="gallery-container">
            <div className="gallery-title">
                <h1>GALERIA</h1>
                <p>Conheça um pouco do nosso trabalho</p>
            </div>
            <div className="gallery-panel">
                <img className="gallery-photo-vertical" src={galleryPhotoVertical1} alt="foto galeria" />
                <div>
                    <img className="gallery-photo-horizontal" src={galleryPhotoHorizontal1} alt="foto galeria" />
                    <img className="gallery-photo-horizontal" src={galleryPhotoHorizontal2} alt="foto galeria" />
                    <img className="gallery-photo-horizontal" src={galleryPhotoHorizontal3} alt="foto galeria" />
                    <img className="gallery-photo-horizontal" src={galleryPhotoHorizontal4} alt="foto galeria" />
                </div>
            </div>
            <div className="gallery-panel">
                <div>
                    <img className="gallery-photo-horizontal" src={galleryPhotoHorizontal5} alt="foto galeria" />
                    <img className="gallery-photo-horizontal" src={galleryPhotoHorizontal6} alt="foto galeria" />
                    <img className="gallery-photo-horizontal" src={galleryPhotoHorizontal7} alt="foto galeria" />
                    <img className="gallery-photo-horizontal" src={galleryPhotoHorizontal8} alt="foto galeria" />
                </div>
                <img className="gallery-photo-vertical" src={galleryPhotoVertical2} alt="foto galeria" />
            </div>
            <div className="gallery-footer">
                <img src={galleryPhoto} alt="rodapé da galeria"/>
            </div>
        </div>
    </section>
);

export default Gallery;
