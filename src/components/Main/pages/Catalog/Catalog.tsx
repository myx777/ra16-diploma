import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import Preloader from "../../Preloader/Preloader";
import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import CategoryList from "./CategoryList";
import { useAppSelector } from "../../../../store/hooks";

/**
 * Component for displaying navigation categories and product cards.
 * @returns {JSX.Element} Rendered categories.
 */
const Catalog = () => {
  /**
   * State to store the link to the current category.
   */
  const [link, setLink] = useState<string>(import.meta.env.VITE_APP_ITEMS_URL);

  /**
   * Custom hook for fetching data.
   */
  const { data, isLoading, error, fetchNow } = useFetch();

  /**
   * State to store the search query.
   */
  const { finalSearch } = useAppSelector((state) => state.search);

  const searchLink = finalSearch ? `q=${finalSearch}` : "";

  useEffect(() => {
    // Fetch categories data when component mounts.
    fetchNow(import.meta.env.VITE_APP_CATEGORIES_URL, { method: "GET" });
  }, []);

  console.info(finalSearch);

  useEffect(() => {
    // Update the link when the search query changes.
    if (finalSearch.length > 0) {
      setLink(`${import.meta.env.VITE_APP_ITEMS_URL}?${searchLink}`);
    }
  }, [finalSearch]);

  /**
   * Handler for category click.
   * @param {string | number} id - The id of the clicked category.
   * @param {React.MouseEvent<HTMLLIElement>} event - The click event.
   */
  const handleClick = (
    id: string | number,
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    event.preventDefault();

    if (id === "all") {
      finalSearch.length > 0
        ? setLink(`${import.meta.env.VITE_APP_ITEMS_URL}?${searchLink}`)
        : setLink(`${import.meta.env.VITE_APP_ITEMS_URL}`);
    } else {
      finalSearch.length > 0
        ? setLink(
            `${
              import.meta.env.VITE_APP_ITEMS_URL
            }?categoryId=${id}&${searchLink}`
          )
        : setLink(`${import.meta.env.VITE_APP_ITEMS_URL}?categoryId=${id}`);
    }
  };

  if (isLoading) {
    return <Preloader />;
  }
  if (error !== null) {
    return <Preloader />;
  }

  return (
    <>
      <nav>
        <ul className="catalog-categories nav justify-content-center">
          {/* Render "All" category */}
          <li
            key={"all"}
            className={"nav-item"}
            onClick={(event) => handleClick("all", event)}
          >
           <NavLink to={location.pathname.includes(`catalog`) ? `./category/all` : `/`} className={"nav-link"}>
              Все
            </NavLink>
          </li>
          {/* Render other categories */}
          {data && <CategoryList data={data} handleClick={handleClick} />}
        </ul>
      </nav>
      {/* Render product cards */}
      <Cards link={link} />
    </>
  );
};

export default Catalog;
