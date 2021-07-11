import Image from 'next/image'
import imageHook from '../../utils/imageHook'

const Card = ({ payload }) => {

  const { title } = payload
  const { load, apiImage } = imageHook({ name: title })
  
  return(
      <div className="tarjeta--juego">
      { load 
        ? <Image 
          src={apiImage}
          alt={title}
          width={600}
          height={600}
          objectFit="cover"
          objectPosition="right"
          quality={50}
        />  
        : <span>Loading...</span>
      }
      <p>{ title }</p>        
  </div>
  )
}

export default Card