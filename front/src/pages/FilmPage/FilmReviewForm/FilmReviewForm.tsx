import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import DropdownMenu from '../../../components/ui/DropdownMenu/DropdownMenu';
import { DropdownOption, FilmReviewFormType } from '../../../types';
import config from '../../../config/config';
import { useParams } from 'react-router-dom';

export const FilmReviewForm: React.FC = () => {
  const { id } = useParams<string>();

  const options: DropdownOption[] = [
    { value: 'GOOD', label: 'Положительный' },
    { value: 'BAD', label: 'Отрицательная' },
    { value: 'NEUTRAL', label: 'Нейтральная' },
  ];
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null,
  );
  const [placeholder, setPlaceholder] = useState<string>('Тип рецензии');
  const [reviewFormData, setReviewFormData] = useState<FilmReviewFormType>({
    title: '',
    reviewType: selectedOption?.value,
    text: '',
    movieId: id,
  });
  const [reviewError, setReviewError] = useState<string | null>(null);

  useEffect(() => {
    setReviewFormData((prev) => ({
      ...prev,
      reviewType: selectedOption?.value,
    }));
  }, [selectedOption]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setReviewFormData((prevReviewFormData) => ({
      ...prevReviewFormData,
      [name]: value,
    }));
  };
  const handleOptionChange = (option: DropdownOption) => {
    setSelectedOption(option);
    setPlaceholder(option.label);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      reviewFormData.text !== '' &&
      reviewFormData.title !== '' &&
      reviewFormData.reviewType !== null
    ) {
      try {
        const response = await fetch(`${config.BACK_API}/review`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth': `${localStorage.getItem('jwtToken')}`,
          },
          body: JSON.stringify(reviewFormData),
        });

        if (!response.ok) {
          throw new Error('Sending a review has failed.');
        }
        window.location.reload();
      } catch (error: unknown) {
        console.error('Review: ', error);
        setReviewError((error as Error).message);
      }
    }
  };

  return (
    <form className='film-review-form' onSubmit={handleSubmit}>
      {reviewError ? (
        <div role='alert' className='film-review-form__warning'>
          При отправке рецензии произошла ошибка.
        </div>
      ) : null}
      <p className='film-review-form__heading'>
        Расскажите свое мнение об этом фильме!
      </p>
      <DropdownMenu
        options={options}
        placeholder={placeholder}
        onOptionSelect={handleOptionChange}
      />
      <input
        className='film-review-form__title'
        placeholder='Заголовок'
        type='text'
        name='title'
        onChange={handleChange}
      />
      <textarea
        className='film-review-form__input'
        placeholder='Текст'
        name='text'
        onChange={handleChange}
      ></textarea>
      <button type='submit' className='film-review-form__submit'>
        Отправить обзор
      </button>
    </form>
  );
};
