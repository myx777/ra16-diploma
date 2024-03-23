/**
 * Renders a search input component for the header.
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.isVisible - Flag indicating whether the search form is visible.
 * @return {JSX.Element} The search form component.
 */
const FormSearch = ({ isVisible }: { isVisible: boolean; }): JSX.Element => {
  
  return (
    <form
      data-id="search-form"
      className={`header-controls-search-form form-inline ${isVisible ? '' : 'invisible'}`}
    //   action={search}
    >
      <input className="form-control" placeholder="Поиск" />
    </form>
  );
};
export default FormSearch;
