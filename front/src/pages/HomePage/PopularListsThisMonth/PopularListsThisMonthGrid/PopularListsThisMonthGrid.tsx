import React from 'react';
import ListElement from './ListElement/ListElement';
import config from '../../../../config/config';
import { convertParams } from '../../../../utils/convertParams';

const PopularListsThisMonthGrid: React.FC = () => {
  const baseUrl: string = `${config.BACK_API}/moviesFilter?${convertParams(
    'studio',
    ['Netflix'],
  )}`;
  const baseUrl2: string = `${config.BACK_API}/moviesFilter?${convertParams(
    'studio',
    ['Paramount'],
  )}`;

  return (
    <div className='popular-month-lists-grid'>
      <ListElement heading='Топ сериалов Нетфликса' baseUrl={baseUrl} />
      <ListElement heading='Топ фильмов Paramount' baseUrl={baseUrl2} />
    </div>
  );
};

export default PopularListsThisMonthGrid;
