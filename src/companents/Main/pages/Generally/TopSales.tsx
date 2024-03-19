import { useEffect } from "react";
import useFetch from "../../../../hooks/useFetch";
import Preloader from "../../Preloader";
import NotFound from "../404";
import { TopSalesType } from "../../../../types/TopSalesType";

/**
 * Component representing the top sales section.
 * @returns {JSX.Element} The JSX element representing the top sales section.
 */

const TopSales = () => {
  /**
   * Custom hook for fetching data.
   * @type {Object}
   * @property {Array<TopSalesType>} data - The fetched data.
   * @property {boolean} isLoading - Indicates whether the data is loading.
   * @property {Error | null} error - Any error that occurred during the fetch.
   * @property {Function} fetchNow - Function to execute the fetch.
   */

  const { data, isLoading, error, fetchNow } = useFetch({
    url: import.meta.env.VITE_APP_TOP_SALES_URL,
  });

  useEffect(() => {
    fetchNow();
  }, []);

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {isLoading && <Preloader />}
      {error !== null && <NotFound />}
      <div className="row">
        {data &&
          data.map((item: TopSalesType) => (
            <div className="col-4" key={item.id}>
              <div className="card">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="card-img-top img-fluid"
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
    </section>
  );
};

export default TopSales;