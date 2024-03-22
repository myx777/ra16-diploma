import CartIcon from "./CartIcon";
import FormSearch from "./FormSearch";
import SearchIcon from "./SearchIcon";
/**
 * Component displaying the search and cart icons
 * @returns {JSX.Element} search, cart and form
 */
const SearchCart = () => {
  return (
    <div>
      <div className="header-controls-pics">
        <SearchIcon />
        <CartIcon />
      </div>
      <FormSearch />
    </div>
  );
};
export default SearchCart;
