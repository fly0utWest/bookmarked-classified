import React from 'react';
import DropdownMenu from '../../../components/ui/DropdownMenu/DropdownMenu';

export const FilmReviewForm: React.FC = () => {
  return (
    <div className='film-review-form'>
      <p className='film-review-form__heading'>
        Расскажите свое мнение об этом фильме!
      </p>
      <DropdownMenu placeholder='Тип рецензии' />
      <input
        className='film-review-form__title'
        placeholder='Заголовок'
        type='text'
      />
      <textarea className='film-review-form__input' placeholder='Текст'></textarea>
      <button className='film-review-form__submit'>Отправить обзор</button>
    </div>
  );
};
