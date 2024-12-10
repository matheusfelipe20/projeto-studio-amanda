import './App.css';
import './variables/Colors.css';

import Header from './page/home/header/Header';
import Introduction from './page/home/introduction/Introduction';
import CatalogMenu from './page/home/catalog/CatalogMenu';
import Gallery from './page/home/gallery/Gallery';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="main-content">
          <Introduction/>
          <CatalogMenu/>
          <Gallery />
        </div>
    </div>
  );
}

export default App;
