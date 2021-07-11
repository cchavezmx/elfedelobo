import Image from 'next/image'
import imageHook from '../../utils/imageHook'

const Card = ({ payload }) => {

  const { load, apiImage } = imageHook({ name: payload?.title })
  
  return(
      <div className="tarjeta--juego">
      { load 
        ? <Image 
          src={apiImage}
          alt={payload?.title}
          width={600}
          height={600}
          objectFit="cover"
          objectPosition="right"
          quality={50}
        />  
        : <span>Loading...</span>
      }
      <p>{ payload?.title }</p>        
  </div>
  )
}

export default Card