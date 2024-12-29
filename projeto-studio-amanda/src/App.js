import './App.css';
import './variables/Colors.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './page/home/header/Header';
import Introduction from './page/home/introduction/Introduction';
import CatalogMenu from './page/home/catalog/CatalogMenu';
import Gallery from './page/home/gallery/Gallery';
import Contact from './page/home/contact/Contact';
import ButtonScroll from './components/buttons/buttonScroll/ButtonScroll';
import Footer from './page/home/footer/Footer';

import Books from './page/books/Books';
import CampaignSpecial from './page/campaign-special/CampaignSpecial';

function App() {
  return (
    <Router basename="/">
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation(); // Obtem a localização da URL atual

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
        <Route path="/campanha-ferias-de-verao" element={<CampaignSpecial />} />
      </Routes>
    </div>
  );
}

export default App;
