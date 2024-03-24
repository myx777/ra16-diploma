
import { useState } from "react";
import FormSearch from "./FormSearch";

/**
 * Component displaying the search and cart icons
 * @returns {JSX.Element} search, cart and form
 */
const SearchAndCart = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleSearchForm = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <div className="header-controls-pics">
        <div
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
          onClick={toggleSearchForm}
        ></div>
        <div className="header-controls-pic header-controls-cart">
          <div className="header-controls-cart-full">1</div>
          <div className="header-controls-cart-menu"></div>
        </div>
      </div>
      <FormSearch isVisible={isVisible}/>
    </div>
  );
};
export default SearchAndCart;
