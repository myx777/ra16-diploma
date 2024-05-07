import React from 'react';

/**
 * Renders a search input component for the header.
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.isVisible - Flag indicating whether the search form is visible.
 * @returns {React.Element} The search form component.
 */
const FormSearch = ({ isVisible, toggleVisibility, state }: {
  isVisible: boolean,
  toggleVisibility:
    () =>
      void,
  state: (value: string) => void,
}) => {

  /**
   * Handles the change event of the search input.
   * Dispatches the changeSearchField action with the new search value.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event object.
   * @returns {void}
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    state(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    toggleVisibility();
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-id="search-form"
      className={`header-controls-search-form form-inline ${
        isVisible ? '' : 'invisible'
      }`}
    >
      <input
        className="form-control"
        placeholder="Поиск"
        type="text"
        onChange={handleChange}
      />
    </form>
  );
};

export default FormSearch;
