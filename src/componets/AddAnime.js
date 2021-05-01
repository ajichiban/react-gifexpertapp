import React, { useState } from 'react'

import PropTypes from 'prop-types'

export const AddAnime = ({setAnimes}) => {

  const [inputValue, setInputValue] = useState('')

  const handleText = (e) => setInputValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(inputValue.trim().length < 3) return false

    setAnimes((oldValue) => [inputValue,...oldValue] )
    setInputValue('')
  } 

  return (
    <form onSubmit={handleSubmit}  >
      <input
        onChange={handleText}
        value={inputValue}
        type="text" 
       />
    </form>
  )
}

AddAnime.propTypes ={
  setAnimes : PropTypes.func.isRequired  ,
}
