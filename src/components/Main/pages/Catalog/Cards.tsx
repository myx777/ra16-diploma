import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import { CardType } from "../../../../types/CardType";
import Preloader from "../../Preloader/Preloader";
import NotFound from "../404";
import Card from "./Card";

/**
 * Component to display product cards fetched from a specified category.
 * @param {Object} props - Component props.
 * @param {string} props.link - The link to the category from which to fetch product cards.
 * @returns {JSX.Element} - Rendered product cards.
 */
const Cards = ({ link }: { link: string }) => {
  /**
   * State to track the current link.
   */
  const [currentLink, setCurrentLink] = useState(link);
  /**
   * Custom hook for fetching data.
   */
  const { data, isLoading, error, fetchNow } = useFetch();

  /**
   * State to store all fetched cards.
   */
  const [allCards, setAllCards] = useState<CardType[]>([]);

  /**
   * State to track the current page number.
   */
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch data when the link changes.
    fetchNow(link, { method: "GET" });
    // setAllCards((prevCards) => [...prevCards, ...data]);
  }, [link]);

  useEffect(() => {
    if (data) {
      const newCards = data.filter((card: CardType) => {
        // Return true only for cards that are not already in allCards
        return !allCards.some((c) => c.id === card.id);
      });

      setAllCards((prevCards) => [...prevCards, ...newCards]);
    }
  }, [data]);

  /**
   * Handler for loading more product cards.
   */
  const handleLoadMore = () => {
    const numberProductsToDownload = 6;

    const nextPageLink = link.includes("categoryId")
      ? `${link}&offset=${currentPage * numberProductsToDownload}`
      : `${link}?offset=${currentPage * numberProductsToDownload}`;

    // Fetch more data with the next page link.
    fetchNow(nextPageLink, { method: "GET" });

    // Update current page number.
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (link !== currentLink) {
    // Update current link and reset current page number when switching to a new category.
    setCurrentLink(link);
    setCurrentPage(1);
    setAllCards([]);
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
        <Card data={allCards} />
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

export default Cards;
