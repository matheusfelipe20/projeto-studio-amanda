import React, { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';

import './Books.css';
import HeaderSubDominio from '../../components/header/HeaderSubDominio';
import Divider from '../../components/divider/Divider';
import Footer from '../home/footer/Footer';
import ButtonScroll from '../../components/buttons/buttonScroll/ButtonScroll';

const CENARIOS_BASE = [
    // Não sazonais
    { nome: 'Destaques', tagFinal: 'books-main', titulo: 'Em Destaque', sazonal: false },
    { nome: 'Acompanhamentos', tagFinal: 'books-acompanhamento', titulo: 'Acompanhamentos', sazonal: false },
    
    // Sazonais
    { nome: 'Dia das Mães', tagBase: 'maes', titulo: 'Dia das Mães', sazonal: true, anos: ['2025'] },
    { nome: 'Natal', tagBase: 'natal', titulo: 'Natal', sazonal: true, anos: ['2024', '2025'] },
    { nome: 'Pascoa', tagBase: 'pascoa', titulo: 'Pascoa', sazonal: true, anos: ['2025'] },
    { nome: 'Verão', tagBase: 'verao', titulo: 'Verão', sazonal: true, anos: ['2025'] },
];


const CENARIOS_NAO_SAZONAIS = CENARIOS_BASE.filter(c => !c.sazonal).map(c => ({
    ...c,
    tag: c.tagFinal 
}));

const Books = () => {
const CLOUD_NAME = 'dtcmkkphs';
const [images, setImages] = useState([]);
const [selectedImage, setSelectedImage] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);
const [tag, setTag] = useState('books-main');
const [selectedYear, setSelectedYear] = useState('2025');
const [isLoading, setIsLoading] = useState(false);

const getAnosDisponiveis = () => {
    const anosSazonais = CENARIOS_BASE
    .filter(c => c.sazonal)
    .flatMap(c => c.anos);
    return [...new Set(anosSazonais)].sort();
};

const anosDisponiveis = getAnosDisponiveis();
const cenarios = useMemo(() => {
    const cenariosSazonaisFiltrados = CENARIOS_BASE
        .filter(c => c.sazonal && c.anos.includes(selectedYear))
        .map(c => ({
            ...c,
            tag: `${c.tagBase}${selectedYear}` 
        }));
    return [...CENARIOS_NAO_SAZONAIS, ...cenariosSazonaisFiltrados];
}, [selectedYear]);

const cenarioAtual = cenarios.find(c => c.tag === tag);
let tituloAtual = cenarioAtual?.titulo || 'Em Destaque';

if (cenarioAtual && cenarioAtual.sazonal) {
  tituloAtual = `${tituloAtual} (${selectedYear})`;
}

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
const preloadImages = (urls) => {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

const fetchImages = useCallback(async (targetTag) => {
    setIsLoading(true);
    try {
        const response = await axios.get(
            `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${targetTag}.json`
        );
        const imageUrls = response.data.resources.map(img =>
            `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${img.public_id}.${img.format}`
        );
        if (targetTag === tag) {
            setImages(shuffleArray(imageUrls));
            setIsLoading(false);
        } else {
            preloadImages(imageUrls); 
        }
    return imageUrls;
    } catch (error) {
        console.error('Erro ao buscar imagens do Cloudinary:', error);
        if (targetTag === tag) {
            setImages([]); 
            setIsLoading(false);
        }
    return [];
    }
}, [tag]);

useEffect(() => {
    window.scrollTo(0, 0);
    fetchImages(tag); 
}, [tag, fetchImages]); 

useEffect(() => {
    cenarios.forEach(c => {
        if (c.tag !== tag) {
            fetchImages(c.tag); 
        }
    });
}, [cenarios, tag, fetchImages]);

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

const handleCenarioChange = (newTag) => {
    if (newTag === tag || isLoading) return;
    
    setIsLoading(true);
    setTag(newTag); 
};

const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setTag('books-main'); 
};

return (
    <div>
    <HeaderSubDominio />
    <ButtonScroll />
    <div className="section-books">
        <div className="books-title">
            <h1>BOOKS</h1>
            <p>{tituloAtual}</p>
        </div>
        {anosDisponiveis.length > 0 && (
            <div className="cenarios-select-years">
                <select 
                    className="select-years"
                    id="select-ano" 
                    value={selectedYear} 
                    onChange={handleYearChange}
                >
                    {anosDisponiveis.map(ano => (
                    <option key={ano} value={ano}>{ano}</option>
                    ))}
                </select>
            </div>
        )}
        <Divider width={"30%"} color={"var(--color-primary)"} thickness={"2px"} margin={"8px 0 0 0"}/>
        <div className="cenarios-buttons">
            {cenarios.map((c, idx) => (
                <button
                key={idx}
                className={`cenario-button ${tag === c.tag ? 'active' : ''}`}
                onClick={() => handleCenarioChange(c.tag)}
                disabled={isLoading} 
                >
                {c.nome}
                </button>
            ))}
        </div>
    
        <div className="book-panel">
            {isLoading && images.length === 0 ? (
            <p className="text-loading-image">Carregando cenários...</p>
            ) : images.length > 0 ? (
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
            <p className="text-loading-image">Nenhuma imagem encontrada para o cenário atual.</p>
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