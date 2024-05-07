import { MenuItemType } from '../../types/MenuItemTypes';

/**
 * Component for a menu item.
 *
 * @param {MenuItemType} props - The properties of the menu item.
 * @param {string} props.label - The label of the menu item.
 * @param {string} props.link - The link of the menu item.
 * @returns {JSX.Element} The menu item element.
 */
const MenuItems = ({ label, link }: MenuItemType) => {

  return (
    <a href={link} className={'nav-link'}>
      {label}
    </a>
  );
};
export default MenuItems;
