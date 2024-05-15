import MenuList from './componentsHeader/MenuList';
import SearchAndCart from './componentsHeader/SearchAndCart';
import './css/style.css';

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
              <SearchAndCart />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;