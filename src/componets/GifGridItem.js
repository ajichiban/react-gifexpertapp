import React from 'react'

export const GifGridItem = ({ id, title, url }) => {

  return (
    <div className="card animate__animated animate__bounce">
      <div className="card__image-container">
        <img className="card__image" src={url} alt={title} />
      </div>
      <p className="card__title">{title} </p>
    </div>
  )
}
