import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import Preloader from "../../Preloader";
import NotFound from "../404";
import { CategoriesType } from "../../../../types/CategoriesType";
import { useLocation } from "react-router-dom";
import MenuItems from "../../../MenuItems/MenuItems";
import Card from "./Card";

const Catalog = () => {
  const [link, setLink] = useState<string>(import.meta.env.VITE_APP_ITEMS_URL);
  const { data, isLoading, error, fetchNow } = useFetch({
    url: import.meta.env.VITE_APP_CATEGORIES_URL,
  });

  const location = useLocation();

  useEffect(() => {
    fetchNow();
  }, []);

  const hadleClick = (
    id: string | number,
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    event.preventDefault();

    if (id === "all") {
      setLink(import.meta.env.VITE_APP_ITEMS_URL);
    } else {
      setLink(`${import.meta.env.VITE_APP_ITEMS_URL}?categoryId=${id}`);
    }
  };

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {isLoading && <Preloader />}
      {error !== null && <NotFound />}
      <ul className="catalog-categories nav justify-content-center">
        <li
          key={1}
          className={location.pathname === "/" ? "nav-item active" : "nav-item"}
          onClick={(event) => hadleClick("all", event)}
        >
          <a href="#" className={"nav-link"}>
            Все
          </a>
        </li>
        {data &&
          data.map((item: CategoriesType) => (
            <li
              key={item.id}
              className={
                location.pathname === `/${item.id}`
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={(event) => hadleClick(item.id, event)}
            >
              <MenuItems label={item.title} link={"#"} />
            </li>
          ))}
      </ul>
        <Card link={link} />
        
    </section>
  );
};

export default Catalog;

/**
 * <section className="catalog">
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
 */
