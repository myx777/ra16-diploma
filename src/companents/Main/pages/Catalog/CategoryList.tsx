import { NavLink } from "react-router-dom";
import {
  CategoriesType,
  CategoryListProps,
} from "../../../../types/CategoriesType";
import { FC, useCallback } from "react";
import Preloader from "../../Preloader";

/**
 * Companents for displaying the Category List
 * 
 * @param  {CategoryListProps} - props
 * @returns {JSX.Element} - Rendered Category List
 */
const CategoryList: FC<CategoryListProps> = ({ data, handleClick }) => {
  /**
   * Function for rendering the Category List and caching the data
   */
  const renderCategories = useCallback(() => {

    return data.map((item: CategoriesType) => (
      <li
        key={item.id}
        className={"nav-item"}
        onClick={(event) => handleClick(item.id, event)}
      >
        <NavLink to={`/category/${item.id}`} className={"nav-link"}>
          {item.title}
        </NavLink>
      </li>
    ));
  }, [data, handleClick]);

  if (!data) {
    return <Preloader />;
  }
  return <>{renderCategories()}</>;
};

export default CategoryList;
