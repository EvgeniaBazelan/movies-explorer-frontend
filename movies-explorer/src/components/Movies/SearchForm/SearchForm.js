import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form-input">
        <input className="search-form__input" placeholder="Фильм" type="text" required minLength="2" maxLength="30"></input>
          <button
              className="search-form__button"
              type="submit"
          >Найти</button>
      </form>
          <div className="search-form__checkbox-wrap">
            <p className="search-form__name-checkbox">Короткометражки</p>
          <FilterCheckbox />
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
