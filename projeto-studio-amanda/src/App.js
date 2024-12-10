import './App.css';
import './variables/Colors.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './page/home/header/Header';
import Introduction from './page/home/introduction/Introduction';
import CatalogMenu from './page/home/catalog/CatalogMenu';
import Gallery from './page/home/gallery/Gallery';
import Contact from './page/home/contact/Contact';
import ButtonScroll from './components/buttons/buttonScroll/ButtonScroll';
import Footer from './page/home/footer/Footer';

import Books from './page/books/Books';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="main-content">
                                <ButtonScroll />
                                <Introduction />
                                <CatalogMenu />
                                <Gallery />
                                <Contact />
                                <Footer />
                            </div>
                        }
                    />
                    <Route path="/books" element={<Books />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
