import React, { useEffect } from 'react';
import './Books.css';

import HeaderSubDominio from '../../components/header/HeaderSubDominio';
import Divider from '../../components/divider/Divider';
import Footer from '../home/footer/Footer';
import ButtonScroll from '../../components/buttons/buttonScroll/ButtonScroll';
import bookPhoto1 from '../../assets/img/books/photo-book-h1.png';
import bookPhoto2 from '../../assets/img/books/photo-book-h2.png';
import bookPhoto3 from '../../assets/img/books/photo-book-h3.png';
import bookPhoto4 from '../../assets/img/books/photo-book-h4.png';
import bookPhoto5 from '../../assets/img/books/photo-book-h5.png';
import bookPhoto6 from '../../assets/img/books/photo-book-h6.png';
import bookPhoto7 from '../../assets/img/books/photo-book-h7.png';
import bookPhoto8 from '../../assets/img/books/photo-book-h8.png';
import bookPhoto9 from '../../assets/img/books/photo-book-h9.png';
import bookPhoto10 from '../../assets/img/books/photo-book-h10.png';
import bookPhoto11 from '../../assets/img/books/photo-book-h11.png';
import bookPhoto12 from '../../assets/img/books/photo-book-h12.png';
import bookPhoto13 from '../../assets/img/books/photo-book-h13.png';
import bookPhoto14 from '../../assets/img/books/photo-book-h14.png';
import bookPhoto15 from '../../assets/img/books/photo-book-h15.png';
import bookPhoto16 from '../../assets/img/books/photo-book-h16.png';
import bookPhoto17 from '../../assets/img/books/photo-book-h17.png';
import bookPhoto18 from '../../assets/img/books/photo-book-h18.png';
import bookPhoto19 from '../../assets/img/books/photo-book-h19.png';
import bookPhoto20 from '../../assets/img/books/photo-book-h20.png';
import bookPhoto21 from '../../assets/img/books/photo-book-h21.png';
import bookPhoto22 from '../../assets/img/books/photo-book-h22.png';
import bookPhoto23 from '../../assets/img/books/photo-book-h23.png';
import bookPhoto24 from '../../assets/img/books/photo-book-h24.png';
import bookPhoto25 from '../../assets/img/books/photo-book-h25.png';
import bookPhoto26 from '../../assets/img/books/photo-book-h26.png';
import bookPhoto27 from '../../assets/img/books/photo-book-h27.png';
import bookPhoto28 from '../../assets/img/books/photo-book-h28.png';
import bookPhoto29 from '../../assets/img/books/photo-book-h29.png';
import bookPhoto30 from '../../assets/img/books/photo-book-h30.png';
import bookPhoto31 from '../../assets/img/books/photo-book-h31.png';
import bookPhoto32 from '../../assets/img/books/photo-book-h32.png';
import bookPhoto33 from '../../assets/img/books/photo-book-h33.png';
import bookPhoto34 from '../../assets/img/books/photo-book-h34.png';
import bookPhoto35 from '../../assets/img/books/photo-book-h35.png';
import bookPhoto36 from '../../assets/img/books/photo-book-h36.png';
import bookPhoto37 from '../../assets/img/books/photo-book-h37.png';
import bookPhoto38 from '../../assets/img/books/photo-book-h38.png';
import bookPhoto39 from '../../assets/img/books/photo-book-h39.png';
import bookPhoto40 from '../../assets/img/books/photo-book-h40.png';
import bookPhoto41 from '../../assets/img/books/photo-book-h41.png';
import bookPhoto42 from '../../assets/img/books/photo-book-h42.png';
import bookPhoto43 from '../../assets/img/books/photo-book-h43.png';
import bookPhoto44 from '../../assets/img/books/photo-book-h44.png';
import bookPhoto45 from '../../assets/img/books/photo-book-h45.png';
import bookPhoto46 from '../../assets/img/books/photo-book-h46.png';
import bookPhoto47 from '../../assets/img/books/photo-book-h47.png';
import bookPhoto48 from '../../assets/img/books/photo-book-h48.png';


const Books = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <img className="book-photo-horizontal" src={bookPhoto1} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto2} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto3} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto4} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={bookPhoto5} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto6} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto7} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto8} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={bookPhoto9} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto10} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto11} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto12} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={bookPhoto13} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto14} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto15} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto16} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={bookPhoto17} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto18} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto19} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto20} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={bookPhoto21} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto22} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto23} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto24} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={bookPhoto25} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto26} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto27} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto28} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={bookPhoto29} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto30} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto31} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto32} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={bookPhoto33} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto34} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto35} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto36} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={bookPhoto37} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto38} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto39} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto40} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={bookPhoto41} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto42} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto43} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto44} alt="foto bebê dormindo" />
                    </div>
                    <div>
                        <img className="book-photo-horizontal" src={bookPhoto45} alt="foto criança dormindo" />
                        <img className="book-photo-horizontal" src={bookPhoto46} alt="foto criança sorrindo no cenário de São João" />
                        <img className="book-photo-horizontal" src={bookPhoto47} alt="foto criança sorrindo no dcenário do Super Mario" />
                        <img className="book-photo-horizontal" src={bookPhoto48} alt="foto bebê dormindo" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Books;