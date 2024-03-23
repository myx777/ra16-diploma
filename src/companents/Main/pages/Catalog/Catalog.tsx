import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import Preloader from "../../Preloader/Preloader";
import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import CategoryList from "./CategoryList";

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

  useEffect(() => {
    // Fetch categories data when component mounts.
    fetchNow(import.meta.env.VITE_APP_CATEGORIES_URL, { method: "GET" });
  }, []);

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
      setLink(import.meta.env.VITE_APP_ITEMS_URL);
    } else {
      setLink(`${import.meta.env.VITE_APP_ITEMS_URL}?categoryId=${id}`);
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
            <NavLink to="./all" className={"nav-link"}>
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
