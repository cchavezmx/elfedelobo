/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import logo from '../../public/logo_lobo.jpg'
import platino from '../../public/platinops5.png'
import imageHook from '../../utils/imageHook'

const Cards = ({ payload, platinos }) => {

  return(
    <div className="container-cards">

      <div className="section--card">
          <div className="process">
            <h2>Últimos</h2>
            <a><small>Ver lista completa</small></a>
            <Image src={logo} alt="logo legendario" objectFit="cover" />
          </div>
        <section className="container--cards">
        {            
          Array.isArray(payload) && Object.values(payload).map((name, index) => {
              const { load, apiImage } = imageHook({ name: name.title })
              return(
                <div key={index} className="tarjeta--juego">
                { load 
                  ? <Image 
                    src={apiImage}
                    alt="iamgen de metal gear" 
                    width={600}
                    height={600}
                    objectFit="cover"
                    objectPosition="right"
                  />  
                    : <span>Loading...</span>
                }
                <p>{ name.title }</p>
              </div>
              )
            })
          }   
        </section>
      </div>

      <div className="section--card">
          <div className="platino">
            <h2>Platinados</h2>
            <Image src={platino} alt="logo legendario" objectFit="cover" />
          </div>
        <section className="container--cards">
          {
            Array.isArray(platinos) && Object.values(platinos).map((name, index) => {
              const { load, apiImage } = imageHook({ name: name.title })
              return(
                <div key={index} className="tarjeta--juego">
                { load 
                  ? <Image 
                    src={apiImage}
                    alt="iamgen de metal gear" 
                    width={600}
                    height={600}
                    objectFit="cover"
                    objectPosition="right"
                  />  
                    : <span>Loading...</span>
                }
                <p>{ name.title }</p>
              </div>
              )
            })
          }
        </section>
      </div>

    </div>
  )
}

export default Cards