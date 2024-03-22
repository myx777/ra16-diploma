import MenuList from "./companentsHeader/MenuList";
import SearchCart from "./companentsHeader/SearchCart";
import "./css/style.css";
/**
 * Renders the Header component with the navigation bar, input for serach and logo.
 *
 * @return {JSX.Element} The rendered Header component
 */

const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src="/src/assets/img/header-logo.png" alt="Bosa Noga"></img>
            </a>
            <div className="collapse navbar-collapse" id="navbarMain">
              <MenuList />
              <SearchCart />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

/**
 * 
 * 
 *    <header className="container">
    <div className="row">
      <div className="col">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="/">
          <img src="./img/header-logo.png" alt="Bosa Noga">
          </a>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Главная</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/catalog.html">Каталог</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about.html">О магазине</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacts.html">Контакты</a>
              </li>
            </ul>
            <div>
              <div className="header-controls-pics">
                <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                <!-- Do programmatic navigation on click to /cart.html -->
                <div className="header-controls-pic header-controls-cart">
                  <div className="header-controls-cart-full">1</div>
                  <div className="header-controls-cart-menu"></div>
                </div>
              </div>
              <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                <input className="form-control" placeholder="Поиск">
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
 */
