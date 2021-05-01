import React, { useState } from 'react'
import { AddAnime } from './componets/AddAnime'
import { GifGrid } from './componets/GifGrid'

const GifExpertApp = props => {

  const [animes, setAnimes] = useState(['naruto'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddAnime setAnimes={setAnimes} />
      <hr />

      <ol className="card-grid">
        { animes.map((anime) => 
          ( <GifGrid key={anime} category={anime} />  )
         ) }
      </ol>
    </>

    
  )
}

/* GifExpertApp.propTypes = {

} */

export default GifExpertApp
