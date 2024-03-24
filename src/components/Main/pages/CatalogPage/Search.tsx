import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  changeSearchField,
  fullSearchField,
} from "../../../../reducers/searchSlice";
import { useEffect, useState } from "react";
/**
 * Component for entering search query.
 * @returns {JSX.Element} Search component
 */
const Search = () => {
    /**
     * Local state for search input value.
     */
  const [valueSafe, setValueSafe] = useState("");

    /**
     * If the store has a value for search, show it.
     */
  const { search } = useAppSelector((state) => state.search);

  
  useEffect(() => {
    setValueSafe(search);
  }, []);

  const dispatch = useAppDispatch();

  /**
   * Handler for input change event.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(changeSearchField(value));
    setValueSafe(value);
  };

  /**
   * Handler for form submit event.
   * @param {React.FormEvent<HTMLFormElement>} event - The form submit event.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(fullSearchField(search));
    dispatch(changeSearchField(""));
  };

  return (
    <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
      <input
        className="form-control"
        placeholder="Поиск"
        value={valueSafe}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
