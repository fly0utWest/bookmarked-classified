import React from 'react'

    type buttonProps = {
        dest: string,
        src: string,
        alt: string
    }

const BottomNavButton = (props: buttonProps) => {

  return (
    <a href={props.dest} className='bottom-nav__button'>
        <img src={props.src} alt={props.alt} />
    </a>
  )
}

export default BottomNavButton;