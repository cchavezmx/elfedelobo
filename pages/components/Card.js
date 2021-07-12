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
          objectPosition="center"
          quality={50}
          
        />  
        : <span>Loading...</span>
      }
      <p>{ payload?.title }</p>
      <span>{ payload && payload.platino && <p className="platino-card">Juego Platinado</p> }</span>      
  </div>
  )
}

export default Card