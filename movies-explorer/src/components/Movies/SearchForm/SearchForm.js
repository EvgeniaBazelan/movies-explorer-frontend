import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useState } from "react";

const SearchForm = ({
  handleSearchInput,
  handleCheckboxShortFilm }) => {

  const [movieInputSearch, setMovieInputSearch] = useState(" ");
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movieInputSearch === " ") {
      setErrorMessage("Нужно ввести ключевое слово")
    } else {
      handleSearchInput(movieInputSearch)
      setErrorMessage("")
    }
  };

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form-input"
        noValidate
        onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Введите название фильма (без пробелов в начале и в конце ввода)"
          name="movieSearchInput"
          // onFocus={`${movieInputSearch}`}
          // value={movieInputSearch}
          onChange={(e) => setMovieInputSearch(e.target.value)}
          required />
          <button
              className="search-form__button"
              type="submit"
          >Найти</button>
        </form>
        <span className="search-form__caption">{errorMessage}</span>
        <div className="search-form__checkbox-wrap">
          <FilterCheckbox
            onClick={handleCheckboxShortFilm} />
          <p className="search-form__name-checkbox">Короткометражки</p>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
