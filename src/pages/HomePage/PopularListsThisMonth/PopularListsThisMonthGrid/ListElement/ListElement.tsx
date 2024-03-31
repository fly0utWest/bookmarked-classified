import React from 'react';
import { ListElementProps } from '../../../../../types';
import SlicedList from '../../../../../components/SlicedList/SlicedList';
import Loading from '../../../../../components/Loading/Loading';
import { useFetch } from '../../../../../hooks/useFetch';
import { FilmData } from '../../../../../types';
import ErrorMessage from '../../../../../components/ui/ErrorMessage/ErrorMessage';

const ListElelement: React.FC<ListElementProps> = (props) => {
  const {
    data: filmList,
    isLoading,
    error,
  } = useFetch<FilmData[]>(props.baseUrl);

  if (error) {
    return <ErrorMessage message="Произощла ошибка." classModifier='error-message_warning'/>  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='popular-month-lists-grid__element'>
      <div className='container'>
        {filmList && (
          <SlicedList
            films={filmList}
            limit={6}
            linkClassModifier='container__film-link'
          />
        )}
      </div>
      <h3>{props.heading}</h3>
    </div>
  );
};

export default ListElelement;
