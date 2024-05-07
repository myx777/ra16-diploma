import { useState } from 'react';
import FormSearch from './FormSearch';
import { useNavigate } from 'react-router-dom';

/**
 * Component displaying the search and cart icons
 * @returns {JSX.Element} search, cart and form
 */
const SearchAndCart = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const navigate = useNavigate();

  const count = localStorage.length;

  const toggleSearchForm = () => {
    setIsVisible(!isVisible);
    if (searchValue) {
      navigate(`/catalog/${searchValue}`, { state: searchValue });
    }
  };

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div>
      <div className="header-controls-pics">
        <div
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
          onClick={toggleSearchForm}
        ></div>
        <div className="header-controls-pic header-controls-cart" onClick={() => handleClick()}>
          {count > 0 ? (
            <>
              <div className="header-controls-cart-full">{count}</div>
              <div className="header-controls-cart-menu"></div>
            </>
          ) : null}
        </div>
      </div>
      <FormSearch isVisible={isVisible} toggleVisibility={toggleSearchForm} state={setSearchValue} />
    </div>
  );
};
export default SearchAndCart;
