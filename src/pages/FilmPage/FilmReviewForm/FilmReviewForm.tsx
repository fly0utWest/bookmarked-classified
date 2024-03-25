import React from 'react';
import DropdownMenu from '../../../components/ui/DropdownMenu/DropdownMenu';

export const FilmReviewForm: React.FC = () => {
  return (
    <div className='film-review-form'>
      <p className='film-review-form__heading'>
        Расскажите свое мнение об этом фильме!
      </p>
      <select name='' id=''></select>
      <DropdownMenu placeholder='Тип рецензии' />
      <input className='film-review-form__input' type='text-field' />
      <button className='film-review-form__submit'>Отправить обзор</button>
    </div>
  );
};
