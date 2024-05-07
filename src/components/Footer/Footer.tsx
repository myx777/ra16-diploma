import ContactsFooter from './companentsFooter/ContactsFooter';
import Copyright from './companentsFooter/Coptright';
import './css/style.css';
import NavigationFooter from './companentsFooter/NavigationFooter';
import PayMethods from './companentsFooter/PayMethods';

/**
 * Renders the footer component with navigation, payment methods, copyright, and contact information.
 *
 * @return {JSX.Element} The footer component
 */
const Footer = () => {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <NavigationFooter />
        </div>
        <div className="col">
          <PayMethods />
          <Copyright />
        </div>
        <div className="col text-right">
          <ContactsFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
