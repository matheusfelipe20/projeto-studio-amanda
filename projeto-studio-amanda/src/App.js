import './App.css';
import './variables/Colors.css';

import Header from './page/home/header/Header';
import Introduction from './page/home/introduction/Introduction';
import CatalogMenu from './page/home/catalog/CatalogMenu';
import Gallery from './page/home/gallery/Gallery';
import Contact from './page/home/contact/Contact';
import ButtonScroll from './components/buttons/buttonScroll/ButtonScroll';
import Footer from './page/home/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="main-content">
          <ButtonScroll/>
          <Introduction/>
          <CatalogMenu/>
          <Gallery/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
