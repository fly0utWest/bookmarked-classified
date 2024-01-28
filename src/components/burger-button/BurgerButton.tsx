import React from 'react'
import burger from "./burger.svg";

const BurgerButton = ( {clickFunc}: any) => {
  return (
    <button onClick={clickFunc} className='burger-button'><img src={burger} alt="Меню"/></button>
  )
}

export default BurgerButton