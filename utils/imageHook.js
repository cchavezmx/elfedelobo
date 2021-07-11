import { useEffect, useState } from 'react'

const ImageHook = ({ name } = {}) => {
  
  const [ load, setLoad ] = useState(false)
  const [ apiImage, setImage ] = useState([])

  useEffect(() => {

    const promise = new Promise(( resolve ) => {
      resolve(
        fetch(`/api/games?name=${name}`)
        .then(res => res.json())
        .then(data => data.img)
        .catch(err => console.log(err))
      )
    })    

    Promise.all([ promise ])
    .then(img => setImage(img))
    .finally(() => setLoad(true))

  }, [name])

  return { load, apiImage: apiImage.toString() }
}


export default ImageHook