import { NavLink } from "react-router-dom";
import { MenuItemType } from "../../types/MenuItemTypes";

/**
 * A function that generates the class name based on the isActive parameter.
 *
 * @param {boolean} isActive - a boolean indicating if the item is active
 * @return {string} the class name based on the isActive parameter
 */

const MenuItems = ({ label, link }: MenuItemType) => {

  return (
    <NavLink to={link} className={"nav-link"}>
      {label}
    </NavLink>
  );
};
export default MenuItems;
