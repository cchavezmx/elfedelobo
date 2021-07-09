/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import logo from '../../public/logo_lobo.jpg'
import platino from '../../public/platinops5.png'
import imageHook from '../../utils/imageHook'

const array = [1,2,3,4,1,2]
const platinados = [
  "Astro's Playroom PS5",
  "God of War",
  "God of War 2",
  "God of War 3",
  "God of War PS4",
  "Metal Gear Solid 2",
  "Metal Gear Solid 3",
  "Spider-Man PS4",
  "Spider-Man Miles Morales PS5",
  "Crash Bandicoot N Sane Triloy",
  "Crash Bandicoot 2 N Sane Triloy",
  "Crash Bandicoot Warped N Sane Trilogy"
]

const Cards = () => {

  return(
    <div className="container-cards">

      <div className="section--card">
          <div className="process">
            <h2>En Proceso</h2>
            <Image src={logo} alt="logo legendario" objectFit="cover" />
          </div>
        <section className="container--cards">
        {
          array.map(item => (
            <div key={item} className="tarjeta--juego">
                <Image
                  src="/metal.jpg"
                  alt={`imagen del juego ${item}`}
                  quality={100}
                  width={100} height={100} 
                  objectPosition="center"

                />
                <p>Metal Gear Solid</p>
              </div>
            ))
          }
          <a><small>Ver lista completa</small></a>
        </section>
      </div>

      <div className="section--card">
          <div className="platino">
            <h2>Platinados</h2>
            <Image src={platino} alt="logo legendario" objectFit="cover" />
          </div>
        <section className="container--cards">
          {
            platinados.map((name, index) => {
              const { load, apiImage } = imageHook({ name })
              return(
                <div key={index} className="tarjeta--juego">
                { load 
                  ? <Image 
                    src={apiImage}
                    alt="iamgen de metal gear" 
                    width={100}
                    height={100}
                    objectFit="cover"
                    objectPosition="center"
                    
                      />  
                    : <span>Loading...</span>
                }
                <p>{ name }</p>
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