import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/**
 * Component for entering search query.
 * @returns {JSX.Element} Search component
 */
const Search = () => {
  const [state, setState] = useState('');

  const { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (search ) {
      setState(search);
    }
  }, [search]);

  /**
   * Handler for input change event.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setState(value);
  };

  /**
   * Handler for form submit event.
   * @param {React.FormEvent<HTMLFormElement>} event - The form submit event.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/catalog/${state}`);
    setState('');
  };

  return (
    <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
      <input
        className="form-control"
        placeholder="Поиск"
        value={state}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
