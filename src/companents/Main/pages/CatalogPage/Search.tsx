import { useSelector } from "react-redux";

const Search = () => {

    const items = useSelector(state => state.search);
    // console.info(items);
    
  return (
    <form className="catalog-search-form form-inline">
      <input className="form-control" placeholder="Поиск" 
      value={items.search}
      />
    </form>
  );
};

export default Search;
