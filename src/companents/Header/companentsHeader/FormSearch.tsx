import { useNavigate } from "react-router-dom";
import { changeSearchField } from "../../../reducer/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";

/**
 * Renders a search input component for the header.
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.isVisible - Flag indicating whether the search form is visible.
 * @returns {JSX.Element} The search form component.
 */
const FormSearch = ({ isVisible }: { isVisible: boolean }): JSX.Element => {
  const { search } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  /**
   * Handles the change event of the search input.
   * Dispatches the changeSearchField action with the new search value.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event object.
   * @returns {void}
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    dispatch(changeSearchField(value));
  };

  useEffect(() => {
    // If search input is not empty and search form is invisible, navigate to catalog
    if (search !== "" && !isVisible) {
      navigate(`/catalog/`);
    }
  }, [search, isVisible, navigate]);

  return (
    <form
      data-id="search-form"
      className={`header-controls-search-form form-inline ${
        isVisible ? "" : "invisible"
      }`}
    >
      <input
        className="form-control"
        placeholder="Поиск"
        type="search"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
};

export default FormSearch;
