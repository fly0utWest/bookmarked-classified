import React from 'react'

type PosterProps = {
    src: string;
    alt: string;
}

const Poster = (props: PosterProps) => {
  return (
    <img src={props.src} alt={props.alt}></img>
  )
}

export default Poster