import React from 'react';
import burger from '../../assets/icons/burger.svg';
import { BurgerButtonProps } from '../../types';

const BurgerButton: React.FC<BurgerButtonProps> = (props) => {
  return (
    <button onClick={props.eventHandler} className='burger-button'>
      <img className='burger-button__icon' src={burger} alt='Меню' />
    </button>
  );
};

export default BurgerButton;
