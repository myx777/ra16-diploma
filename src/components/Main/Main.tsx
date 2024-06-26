import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Generally from './pages/Generally/Generally';
import Banner from './Banner/Banner';
import NotFound from './pages/404';
import './css/style.css';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product';
import Cart from './pages/Cart/Cart.tsx';

/**
 *
 * This is the main entry point of the application. It is responsible for rendering the routes. It also contains the logic for routing. It is also responsible for handling the navigation bar. It is also responsible for handling the banner.
 *
 * @returns {JSX.Element} renders all pages
 *
 */
const Main = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <Routes>

            <Route path="/" element={<Generally />}>
              <Route path="/category/:id" element={<Catalog />} />
            </Route>

            <Route path="/catalog/" element={<CatalogPage />}>
              <Route path="/catalog/:search" element={<Catalog />} />
              <Route path="/catalog/category/:id" element={<Catalog />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Main;
