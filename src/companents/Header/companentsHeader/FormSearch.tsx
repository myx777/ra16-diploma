/**
 * Renders a search input component for the header.
 *
 * @return {JSX.Element} The search form component.
 */
const FormSearch = () => {
  return (
    <form
      data-id="search-form"
      className="header-controls-search-form form-inline invisible"
    //   action={search}
    >
      <input className="form-control" placeholder="Поиск" />
    </form>
  );
};
export default FormSearch;