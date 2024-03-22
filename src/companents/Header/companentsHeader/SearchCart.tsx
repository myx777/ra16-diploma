import CartIcon from "./CartIcon";
import FormSearch from "./FormSearch";
import SearchIcon from "./SearchIcon";

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
