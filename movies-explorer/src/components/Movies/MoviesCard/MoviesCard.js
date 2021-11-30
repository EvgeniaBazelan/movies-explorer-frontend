import "./MoviesCard.css";
import "./_active/movies-card_active.css"
import iconSave from "../../../images/save-like.svg";
import iconDeleteCard from "../../../images/icon-delete.svg";
import iconUnsave from "../../../images/unsave-like.svg";
import { useLocation } from "react-router";
import declinationTime from "../../../utils/declinationTime";

const MoviesCard = ({ movie,
  handleSaveMovie,
  handleDeleteMovie }) => {
  const
    {
      nameRU,
      duration,
      image,
      trailerLink,
      isSaved,
        isOwn
    } = movie;

  const { pathname } = useLocation();

  const declinationMinute = declinationTime(duration, ['минута', 'минуты', 'минут']);

  const handleClickSaveButton = () => {

    if (pathname === "/movies" && isSaved === true) {
      handleDeleteMovie({ nameRU })
    } else if (pathname === "/movies" && isSaved === false) {
      handleSaveMovie({ movie })
    } else {
      handleDeleteMovie({ nameRU })
    }
  }

  return (

    <li className="movies-card">
        <a
            className="movies-card__link-image"
            href={trailerLink}
            target="_blank"
            rel="noreferrer">
            <img
                className="movies-card__image"
                src={pathname === "/saved-movies"
                    ? image
                    : `https://api.nomoreparties.co${image.url}`}
                alt="Картинка фильма" />
        </a>
      <div className="movies-card__title-wrap">
        <h2 className="movies-card__title">{nameRU}</h2>
        <p className="movies-card__duration">{`${duration} ${declinationMinute}`}</p>
      <button
        className={pathname === "/saved-movies"
          ? "movies-card__button"
          : `movies-card__button ${isSaved && isOwn
            ? "movies-card_active"
            : ""}`}
        onClick={handleClickSaveButton}>

        {pathname === "/saved-movies"
          ? (<img className="movies-card__button-icon"
            src={iconDeleteCard}
            alt="Кнопка удаления карточки" />
          )
          : isSaved&& isOwn
            ? (<img className="movies-card__button-icon"
              src={iconSave}
              alt="Кнопка сохранения карточки" />
            )
            : <img className="movies-card__button-icon"
                   src={iconUnsave} alt="Кнопка сохранения карточки"/>}
      </button>
    </div>
    </li>
  );
};

export default MoviesCard;
