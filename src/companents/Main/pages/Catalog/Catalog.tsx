import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import Preloader from "../../Preloader";
import NotFound from "../404";
import { CategoriesType } from "../../../../types/CategoriesType";
import MenuItems from "../../../MenuItems/MenuItems";
import Cards from "./Cards";
import { NavLink, useLocation } from "react-router-dom";

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
   * React router hook for accessing the current location.
   */
  const location = useLocation();

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
  console.info(location);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {isLoading && <Preloader />}
      {error !== null && <NotFound />}
      <ul className="catalog-categories nav justify-content-center">
        {/* Render "All" category */}
        <li
          key={1}
          className={location.pathname === "/" ? "nav-item active" : "nav-item"}
          onClick={(event) => handleClick("all", event)}
        >
          <NavLink to="/:1" className={"nav-link"}  >
            Все
          </NavLink>
        </li>
        {/* Render other categories */}
        {data &&
          data.map((item: CategoriesType) => (
            <li
              key={item.id}
              className={
                location.pathname === "/" ? "nav-item active" : "nav-item"
              }
              onClick={(event) => handleClick(item.id, event)} 
            >
              <MenuItems
                label={item.title}
                link={`/:${item.id.toString()}`}
   
              />
            </li>
          ))}
      </ul>
      {/* Render product cards */}
      <Cards link={link} />
    </section>
  );
};

export default Catalog;
