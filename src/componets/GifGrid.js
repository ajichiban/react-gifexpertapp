import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem'


export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category)

  return (
    <div>
      <h2>{category} </h2>
      {
        loading
          ? "Loading..."

          :
          <div className="card-grid">
            {
              images.map((image) => (
                <GifGridItem
                  {...image}
                  key={image.id} />
              ))
            }
          </div>

      }


    </div>
  )
}
