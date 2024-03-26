import React, {useState} from 'react';
import DropdownMenu from '../../../components/ui/DropdownMenu/DropdownMenu';
import { DropdownOption } from '../../../types';

export const FilmReviewForm: React.FC = () => {
  const options: DropdownOption[] = [
    { value: 'good', label: 'Положительный' },
    { value: 'bad', label: 'Отрицательная' },
    { value: 'neutral', label: 'Нейтральная' },
  ];
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null,
  );
  const [placeholder, setPlaceholder] = useState<string>('Тип рецензии');

    const handleOptionChange = (option: DropdownOption) => {
      setSelectedOption(option);
      setPlaceholder(option.label);
    };

  return (
    <div className='film-review-form'>
      <p className='film-review-form__heading'>
        Расскажите свое мнение об этом фильме!
      </p>
      <DropdownMenu options={options} placeholder={placeholder} onOptionSelect={handleOptionChange}/>
      <input
        className='film-review-form__title'
        placeholder='Заголовок'
        type='text'
      />
      <textarea
        className='film-review-form__input'
        placeholder='Текст'
      ></textarea>
      <button className='film-review-form__submit'>Отправить обзор</button>
    </div>
  );
};
