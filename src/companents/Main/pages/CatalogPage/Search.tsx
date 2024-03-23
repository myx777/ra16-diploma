import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  changeSearchField,
  fullSearchField,
} from "../../../../reducer/searchSlice";
import { useEffect, useState } from "react";

const Search = () => {
  const [valueSafe, setValueSafe] = useState("");

  const { search } = useAppSelector((state) => state.search);

  useEffect(() => {
    setValueSafe(search);
  }, []);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(changeSearchField(value));
    setValueSafe(value);
  };

  const hanleSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    dispatch(fullSearchField(search));
    dispatch(changeSearchField(""));
  };

  return (
    <form className="catalog-search-form form-inline" onSubmit={hanleSubmit}>
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
