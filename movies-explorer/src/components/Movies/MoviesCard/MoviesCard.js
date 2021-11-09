import "./MoviesCard.css";
import moviesPic from "../../../images/card-pic.png"
import { useEffect, useState } from "react";
import iconDeleteCard from "../../../images/icon-delete.svg";
import { useLocation } from "react-router";
import iconUnsave from "../../../images/unsave-like.svg";
import iconSave from "../../../images/save-like.svg";
const MoviesCard = () => {

  const { pathname } = useLocation();

  const [clickSaveButton, setClickSaveButton] = useState('');
  const [saveButtonColor, setSaveButtonColor] = useState(false);

  useEffect(() => {
    if (pathname === "/saved-movies") {
      setClickSaveButton((<img className="movies-card__button-icon" src={iconDeleteCard} alt="Кнопка сохранения карточки"></img>));
    } else {
      setClickSaveButton((<img className="movies-card__button-icon" src={iconUnsave} alt="Кнопка сохранения карточки"></img>))
    }
  }, [pathname]);

  const handlerClickSaveButton = () => {
    if (pathname === "/saved-movies") {
      setClickSaveButton((<img className="movies-card__button-icon" src={iconDeleteCard} alt="Кнопка сохранения карточки"></img>));
    } else {
        saveButtonColor
            ? setSaveButtonColor(false)
            : setSaveButtonColor(true)

        saveButtonColor === false
        ? setClickSaveButton((<img className="movies-card__button-icon" src={iconSave} alt="Кнопка сохранения карточки"></img>))
        : setClickSaveButton((<img className="movies-card__button-icon" src={iconUnsave} alt="Кнопка сохранения карточки"></img>));
    }

  }

  return (
    <section className="movies-card">
      <img className="movies-card__image" src={moviesPic} alt="Картика карточки"></img>
        <div className="movies-card__title-wrap">
        <h2 className="movies-card__title">33 слова о дизайне</h2>
        <p className="movies-card__duration">1ч 47 минут</p>
            <button className="movies-card__button" onClick={handlerClickSaveButton}>
        {clickSaveButton}
      </button>
        </div>
    </section>
  );
};

export default MoviesCard;
