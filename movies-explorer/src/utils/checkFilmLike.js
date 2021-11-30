import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
function checkFilmLike(foundMovies, savedMovies) {

  return foundMovies.map((item) => {
        const currentUser=React.useContext(CurrentUserContext);
    let isSaved;
    let isOwn
    isSaved = savedMovies.some((i) => i.nameRU === item.nameRU)
    isOwn = savedMovies.some((i) => i.owner === currentUser._id)
    item.isSaved = isSaved;
    item.isOwn = isOwn
    return item
  }
  )
}

export default checkFilmLike;
