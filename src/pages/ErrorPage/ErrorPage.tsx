import React from "react";
import { Link } from "react-router-dom";

type ErrorProps = {
  code: number,
  description: string
}

const ErrorPage: React.FC<ErrorProps> = (props) => {
  return (
    <div className='error'>
      <div className='error__image'>
        <img src='/assets/error.gif' alt='' />
      </div>
      <h1 className='error__heading'>{`Ошибка ${props.code}: ${props.description} :(`}</h1>
      <Link to='/home'>На главную</Link>
    </div>
  );
};

export default ErrorPage;
