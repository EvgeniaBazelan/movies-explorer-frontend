import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <input className="search-form__input" placeholder="Фильм"></input>
        <div className="search-form__checkbox-wrap">
            <p className="search-form__name-checkbox">Короткометражки</p>
          <FilterCheckbox />
        </div>
      </div>
    </section>
  );
};

export default SearchForm;