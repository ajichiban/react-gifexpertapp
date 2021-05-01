



const getGifs = async (category) =>  {

  const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=VmOSDo6A825Gt7StxJbB6xtPnaqndIOn `

  const res = await fetch(url)
  const {data} = await res.json()

  const gifs = data.map(({id, title, images}) => {
    return {
      id,
      title,
      url : images.downsized_medium.url
    }
  })

  return gifs

}

export  {
  getGifs
}