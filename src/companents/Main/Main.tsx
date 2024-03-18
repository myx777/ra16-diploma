import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Generally from "./pages/Generally";
import Banner from "./Banner";
import NotFound from "./pages/404";
import "./css/style.css";

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
            <Route path="/" element={<Generally />} />
            <Route path="/catalog.html" element={<Catalog />} />
            <Route path="/about.html" element={<About />} />
            <Route path="/contacts.html" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Main;
/**
 *     <main className="container">
      <div className="row">
        <div className="col">
          <div className="banner">
            <img src="./img/banner.jpg" className="img-fluid" alt="К весне готовы!">
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
              <div className="col-4">
                <div className="card">
                  <img src="./img/products/sandals_myer.jpg"
                    className="card-img-top img-fluid" alt="Босоножки 'MYER'">
                  <div className="card-body">
                    <p className="card-text">Босоножки 'MYER'</p>
                    <p className="card-text">34 000 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img src="./img/products/sandals_keira.jpg"
                    className="card-img-top img-fluid" alt="Босоножки 'Keira'">
                  <div className="card-body">
                    <p className="card-text">Босоножки 'Keira'</p>
                    <p className="card-text">7 600 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <img src="./img/products/superhero_sneakers.jpg"
                    className="card-img-top img-fluid" alt="Супергеройские кеды">
                  <div className="card-body">
                    <p className="card-text">Супергеройские кеды</p>
                    <p className="card-text">1 400 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <ul className="catalog-categories nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">Все</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Женская обувь</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Мужская обувь</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Обувь унисекс</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Детская обувь</a>
              </li>
            </ul>
            <div className="row">
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src="./img/products/sandals_myer.jpg"
                    className="card-img-top img-fluid" alt="Босоножки 'MYER'">
                  <div className="card-body">
                    <p className="card-text">Босоножки 'MYER'</p>
                    <p className="card-text">34 000 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src="./img/products/sandals_keira.jpg"
                    className="card-img-top img-fluid" alt="Босоножки 'Keira'">
                  <div className="card-body">
                    <p className="card-text">Босоножки 'Keira'</p>
                    <p className="card-text">7 600 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src="./img/products/superhero_sneakers.jpg"
                    className="card-img-top img-fluid" alt="Супергеройские кеды">
                  <div className="card-body">
                    <p className="card-text">Супергеройские кеды</p>
                    <p className="card-text">1 400 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src="./img/products/sandals_myer.jpg"
                    className="card-img-top img-fluid" alt="Босоножки 'MYER'">
                  <div className="card-body">
                    <p className="card-text">Босоножки 'MYER'</p>
                    <p className="card-text">34 000 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src="./img/products/sandals_keira.jpg"
                    className="card-img-top img-fluid" alt="Босоножки 'Keira'">
                  <div className="card-body">
                    <p className="card-text">Босоножки 'Keira'</p>
                    <p className="card-text">7 600 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card catalog-item-card">
                  <img src="./img/products/superhero_sneakers.jpg"
                    className="card-img-top img-fluid" alt="Супергеройские кеды">
                  <div className="card-body">
                    <p className="card-text">Супергеройские кеды</p>
                    <p className="card-text">1 400 руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-outline-primary">Загрузить ещё</button>
            </div>
          </section>
        </div>
      </div>
    </main>
 */
