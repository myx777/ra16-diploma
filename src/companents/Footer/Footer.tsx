import ContactsFooter from "./ContactsFooter";
import Copyright from "./Coptright";
import "./css/style.css";
import NavigationFooter from "./NavigationFooter";
import PayMethods from "./PayMethods";

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
