import { MenuItemType } from "../../types/menuItemTypes";

/**
 * A function that generates the class name based on the isActive parameter.
 *
 * @param {boolean} isActive - a boolean indicating if the item is active
 * @return {string} the class name based on the isActive parameter
 */

const MenuItems = ({ label, link }: MenuItemType) => {

  return (
    <a href={link} className={"nav-link"}>
      {label}
    </a>
  );
};
export default MenuItems;
