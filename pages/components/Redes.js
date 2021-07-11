import { UilTwitter, UilFacebook, UilInstagramAlt, UilDiscord , UilYoutube } from '@iconscout/react-unicons'



const Redes = ({ count }) => {
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
          { Array.isArray(count) && <h1>{`Juegos Terminados: ${Object.values(count).map(item => item.countTotalGames)}`}</h1> }
        </span>
      </div>
    </div>
  )
}


export default Redes