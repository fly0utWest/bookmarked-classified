import React from 'react'

type CastCardProps = {
    name: string | undefined
};

const castCard = (props: CastCardProps) => {
  return (
    <p>{props.name}</p>
  )
}

export default castCard