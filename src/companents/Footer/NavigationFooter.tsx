import MenuItems from "../MenuItems/MenuItems";

/**
 * Renders a navigation footer with a list of navigation items.
 *
 * @return {JSX.Element} The rendered navigation footer
 */
const NavigationFooter = () => {
  const items = [
    {
      label: `О магазине`,
      link: `/about.html`,
    },
    {
      label: `Каталог`,
      link: `/catalog.html`,
    },

    {
      label: `Контакты`,
      link: `/contacts.html`,
    },
  ];

  return (
    <section>
      <h5>Информация</h5>
      <ul className="nav flex-column">
        {items.map(({ label, link }) => (
          <li key={label} className="nav-item">
            <MenuItems label={label} link={link} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default NavigationFooter;
