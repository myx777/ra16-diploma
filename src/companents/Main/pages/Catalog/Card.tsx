import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import { CardType } from "../../../../types/CardType";
import Preloader from "../../Preloader";
import NotFound from "../404";

const Card = ({ link }: { link: string }) => {

  const { data, isLoading, error, fetchNow } = useFetch({ url: link });
  useEffect(() => {
    fetchNow();
    console.info("fetch");
    
  }, [link]);

//   useEffect(() => {
//     if (data) {
//       setCards(data);
//     }
//   }, [data]);



  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <div className="row">
        {data &&
          data.map((item: CardType) => (
            <div className="col-4" key={item.id}>
              <div className="card catalog-item-card">
                <img
                  className="card-img-top img-fluid"
                  src={item.images[0]}
                  alt={item.title}
                />
                <div className="card-body">
                  <p className="card-text">{item.title}</p>
                  <p className="card-text">{item.price}</p>
                  <a
                    href="/products/1.html"
                    className="btn btn-outline-primary"
                  >
                    Заказать
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline-primary" onClick={() => handlyCLick()}>
          Загрузить ещё
        </button>
      </div>
    </>
  );
};

export default Card;
/**
 * <div className="col-4">
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
 */
