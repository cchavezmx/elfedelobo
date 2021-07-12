import Image from 'next/image'
import logo from '../../public/logo_lobo.jpg'
import Redes from '../components/Redes'

const Hero = ({ count }) => {
  return(
    <div className="hero--container">
      <div className="saludo">
            <span className="title"><p>¡Bienvenido!</p><span style={{ fontSize: "2rem"}}>sito no oficial</span></span>
            <p>!Este sitio contiene todos los juegos terminados del Señor Fedelobo!<br />
            <hr />
            <p style={{ fontWeight: "bold", fontSize: "large"}}>Acerca de Fedelobo:</p>
            Hago videos para Youtube, streams en Facebook Gaming, tengo problemas con los videojuegos y me encanta hacerte reír.</p>
            <Redes count={count} />

      </div>
      <div className="logo--lobo" >
          <Image src={logo} width={300} height={300} alt="logo legendario" objectFit="cover" />
      </div>
    </div>
  )
}


export default Hero