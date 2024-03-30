import React from "react";
import { Link } from "react-router-dom";
import { ErrorPageProps } from "../../types";

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  return (
    <div className='error'>
      <div className='error__image'>
        <img src='/assets/error.gif' alt='' />
      </div>
      <h1 className='error__heading'>{`Ошибка: ${props.description} :(`}</h1>
      <Link to='/home'>На главную</Link>
    </div>
  );
};

export default ErrorPage;
