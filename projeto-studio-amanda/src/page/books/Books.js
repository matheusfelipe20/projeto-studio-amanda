import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import './Books.css';
import HeaderSubDominio from '../../components/header/HeaderSubDominio';
import Divider from '../../components/divider/Divider';
import Footer from '../home/footer/Footer';
import ButtonScroll from '../../components/buttons/buttonScroll/ButtonScroll';

const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_API_NAME;
const API_KEY = process.env.REACT_APP_CLOUDINARY_API_KEY;
const API_SECRET = process.env.REACT_APP_CLOUDINARY_API_SECRET;
const TAG_NAME = 'books-all';

const Books = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${TAG_NAME}.json`,
          {
            headers: {
              Authorization: `Basic ${btoa(`${API_KEY}:${API_SECRET}`)}`
            }
          }
        );
        const imageUrls = response.data.resources.map(img =>
          `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${img.public_id}.${img.format}`
        );
        setImages(imageUrls);
      } catch (error) {
        console.error('Erro ao buscar imagens do Cloudinary:', error);
      }
    };

    fetchImages();
  }, []);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  }, [currentIndex, images]);

  const prevImage = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  }, [currentIndex, images]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, nextImage, prevImage]);

  return (
    <div>
      <HeaderSubDominio />
      <ButtonScroll />
      <div className="section-books">
        <div className="books-title">
          <h1>BOOKS</h1>
          <p>Em Destaque</p>
        </div>
        <Divider width={"30%"} color={"var(--color-primary)"} thickness={"2px"} />
        <div className="book-panel">
          {images.length > 0 ? (
            images.map((src, index) => (
              <div key={index} className="book-photo-all" onClick={() => openImage(index)}>
                <img 
                  className="book-photo-horizontal"
                  src={src} 
                  alt={`Imagem ${index}`} 
                />
              </div>
            ))
          ) : (
            <p>Carregando imagens...</p>
          )}
        </div>
      </div>
      <Footer />

      {selectedImage && (
        <div className="image-popup">
          <button className="close-btn-image" onClick={closeImage}>X</button>
          <button className="nav-btn-image left" onClick={prevImage}>❮</button>
          <img src={selectedImage} alt="Imagem ampliada" className="popup-image" />
          <button className="nav-btn-image right" onClick={nextImage}>❯</button>
        </div>
      )}
    </div>
  );
};

export default Books;
