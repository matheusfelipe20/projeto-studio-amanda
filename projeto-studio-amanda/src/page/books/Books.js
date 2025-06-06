import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import './Books.css';
import HeaderSubDominio from '../../components/header/HeaderSubDominio';
import Divider from '../../components/divider/Divider';
import Footer from '../home/footer/Footer';
import ButtonScroll from '../../components/buttons/buttonScroll/ButtonScroll';

const Books = () => {
  const CLOUD_NAME = 'dtcmkkphs';
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tag, setTag] = useState('books-main');

  const cenarios = [
    { nome: 'Destaques', tag: 'books-main', titulo: 'Em Destaque' },
    { nome: 'Dia das Mães', tag: 'books-maes', titulo: 'Dia das Mães' },
    { nome: 'Natal', tag: 'books-natal', titulo: 'Natal' },
    { nome: 'Pascoa', tag: 'books-pascoa', titulo: 'Pascoa' },
    { nome: 'Verão', tag: 'books-verão', titulo: 'Verão' },
    { nome: 'Acompanhamentos', tag: 'books-acompanhamento', titulo: 'Acompanhamentos' },
    // { nome: 'São João', tag: 'books-saojoao', titulo: 'São João' },
    // { nome: 'Dia dos Pais', tag: 'books-pais', titulo: 'Dia dos Pais' },
    // { nome: 'Dia das Crianças', tag: 'books-diacriancas', titulo: 'Dia das Crianças' },
  ];

  const tituloAtual = cenarios.find(c => c.tag === tag)?.titulo || 'Em Destaque';

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const fetchImages = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${tag}.json`
      );
      const imageUrls = response.data.resources.map(img =>
        `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${img.public_id}.${img.format}`
      );
      setImages(shuffleArray(imageUrls));
    } catch (error) {
      console.error('Erro ao buscar imagens do Cloudinary:', error);
      setImages([]); // Evita mostrar imagens antigas se der erro
    }
  }, [tag]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchImages();
  }, [fetchImages]);

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
          <p>{tituloAtual}</p>
        </div>
        <Divider width={"30%"} color={"var(--color-primary)"} thickness={"2px"} margin={"20px 0px 10px 0px"}/>
        <div className="cenarios-buttons">
          {cenarios.map((c, idx) => (
            <button
              key={idx}
              className={`cenario-button ${tag === c.tag ? 'active' : ''}`}
              onClick={() => setTag(c.tag)}
            >
              {c.nome}
            </button>
          ))}
        </div>
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
            <p className="text-loading-image">Carregando imagens...</p>
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