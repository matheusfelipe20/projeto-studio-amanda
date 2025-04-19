import { useState } from "react";
import './App.css';
import './variables/Colors.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from "./contexts/LanguageContext";

import Header from './page/home/header/Header';
import Introduction from './page/home/introduction/Introduction';
import CatalogMenu from './page/home/catalog/CatalogMenu';
import Gallery from './page/home/gallery/Gallery';
import Contact from './page/home/contact/Contact';
import ButtonScroll from './components/buttons/buttonScroll/ButtonScroll';
import Footer from './page/home/footer/Footer';
import LoadingHome from './components/loading/LoadingHome';

import Books from './page/books/Books';
import CampaignSpecial from './page/campaign-special/CampaignSpecial';
import BooksSection from "./page/books/BooksSection";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LanguageProvider>
      <Router basename="/">
        {loading ? (
          <LoadingHome onFinish={() => setLoading(false)} />
        ) : (
          <MainContent />
        )}
      </Router>
    </LanguageProvider>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/" && <Header />}
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
        <Route path="/books/:books" element={<BooksSection />} />
        <Route path="/books/dia+das+maes" element={<CampaignSpecial />} />
      </Routes>
    </div>
  );
}

export default App;
