import { useLocation } from 'react-router-dom';
import MenuItems from '../../MenuItems/MenuItems';

/**
 * Генерирует список элементов меню на основе текущего местоположения в заголовке.
 *
 * @return {JSX.Element} JSX элемент, представляющий список меню.
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
      link: `/catalog`,
    },
    {
      label: `О магазине`,
      link: `/about`,
    },
    {
      label: `Контакты`,
      link: `/contacts`,
    },
  ];

  return (
    <ul className="navbar-nav mr-auto">
      {items.map(({ label, link }) => {
        const isActive =
          link === '/' ? location.pathname === link : location.pathname.startsWith(link);


        return (
          <li
            key={label}
            className={`nav-item ${isActive ? 'active' : ''}`}
          >
            <MenuItems label={label} link={link} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;

