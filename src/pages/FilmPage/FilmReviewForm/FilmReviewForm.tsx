import React from 'react'

export const FilmReviewForm = () => {
  return (
    <div className="film-review-form">
      <p className="film-review-form__heading">Расскажите свое мнение об этом фильме!</p>
      <input className="film-review-form__input" type="text" />
      <button className="film-review-form__submit">Отправить обзор</button>
    </div>
  );
}
