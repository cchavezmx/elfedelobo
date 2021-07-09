import { UilTwitter, UilFacebook, UilInstagramAlt, UilDiscord , UilYoutube } from '@iconscout/react-unicons'



const Redes = () => {

  return(
    <div className="redes--icos">
      <div> 
        <a href="https://www.facebook.com/soyfedelobo" target="_blank" rel="noreferrer">
          <UilFacebook  size="40" color="#F5F5FA" />
        </a>
        <a href="https://discord.gg/EuQdVSb">
          <UilDiscord  size="40" color="#F5F5FA" />
        </a>
        <a href="https://www.instagram.com/soyfedelobo" target="_blank" rel="noreferrer">
          <UilInstagramAlt  size="40" color="#F5F5FA" />
        </a>
        <a href="https://www.youtube.com/user/elfedelobo" target="_blank" rel="noreferrer">
          <UilYoutube   size="40" color="#F5F5FA" />
        </a>
        <a href="https://twitter.com/SoyFedelobo" target="_blank" rel="noreferrer" >
          <UilTwitter size="40" color="#F5F5FA" />
        </a>
      </div>
      <div>
        <span>
          <h1>Juegos Terminados: 1000</h1>
        </span>
      </div>
    </div>
  )
}


export default Redes