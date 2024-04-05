import React from 'react';
import ListElement from './ListElement/ListElement';
import config from '../../../../utils/config';
import { convertParams } from '../../../../utils/convertParams';

const PopularListsThisMonthGrid: React.FC = () => {
  const baseUrl: string = `${config.BACK_API}/moviesFilter?${convertParams(
    'studio',
    ['Netflix'],
  )}`;
  const baseUrl2: string = `${config.BACK_API}/moviesFilter?${convertParams(
    'studio',
    ['Парамоунт'],
  )}`;

  return (
    <div className='popular-month-lists-grid'>
      <ListElement heading='Топ-6 сериалов Нетфликса' baseUrl={baseUrl} />
      <ListElement heading='Топ-6 фильмов Paramount' baseUrl={baseUrl2} />
    </div>
  );
};

export default PopularListsThisMonthGrid;
