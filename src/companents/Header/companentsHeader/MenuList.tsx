import { useLocation } from "react-router-dom";
import MenuItems from "../../MenuItems/MenuItems";
/**
 * Generates a list of menu items based on the current location at the header.
 *
 * @return {JSX.Element} The JSX element representing the menu list.
 */
const MenuList = () => {
  const location = useLocation();

  const items = [
    {
      label: `Главная`,
      link: `/`,
    },
    {
      label: `Каталог`,
      link: `/catalog.html`,
    },
    {
      label: `О магазине`,
      link: `/about.html`,
    },
    {
      label: `Контакты`,
      link: `/contacts.html`,
    },
  ];

  return (
    <ul className="navbar-nav mr-auto">
      {items.map(({ label, link }) => (
        <li
          key={label}
          className={
            link === location.pathname ? "nav-item active" : "nav-item"
          }
        >
          <MenuItems label={label} link={link} />
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
