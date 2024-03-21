import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import { CardType } from "../../../../types/CardType";
import Preloader from "../../Preloader";
import NotFound from "../404";

/**
 * Component to display product cards fetched from a specified category.
 * @param {Object} props - Component props.
 * @param {string} props.link - The link to the category from which to fetch product cards.
 * @returns {JSX.Element} - Rendered product cards.
 */
const Card = ({ link }: { link: string }) => {
  /**
   * Custom hook for fetching data.
   */
  const { data, isLoading, error, fetchNow } = useFetch();

  /**
   * State to track the current page number.
   */
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * State to track the current link.
   */
  const [currentLink, setCurrentLink] = useState(link);

  useEffect(() => {
    // Fetch data when the link changes.
    fetchNow(link, { method: "GET" });
  }, [link]);

  /**
   * Handler for loading more product cards.
   */
  const handleLoadMore = () => {
    const nextPageLink = link.includes("categoryId")
      ? `${link}&offset=${currentPage * 6}`
      : `${link}?offset=${currentPage * 6}`;

    // Fetch more data with the next page link.
    fetchNow(nextPageLink, { method: "GET" });

    // Update current page number.
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (link !== currentLink) {
    // Update current link and reset current page number when switching to a new category.
    setCurrentLink(link);
    setCurrentPage(1);
  }

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
        {data && data.length >= 6 && (
          <button className="btn btn-outline-primary" onClick={handleLoadMore}>
            Загрузить ещё
          </button>
        )}
      </div>
    </>
  );
};

export default Card;

