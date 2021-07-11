import { useEffect, useMemo, useState } from 'react'
import { useMachine } from '@xstate/react'
import { loboMachine } from '../xstate/loboMachine'
import Card from './components/Card'

const AllGames = () => {

  const [ state, send ] = useMachine(loboMachine)
  const [ keyword, setKeyword ] = useState([])
  
  useEffect(() => {
    send("GET_ALL_GAMES")
  },[send])

  const { listGames } = state.context
  const allgamesMemo = useMemo(() => state.matches("success") && listGames,[listGames, state])


  return (
    
    <div className="container">
      <div className="buscador--content">
        <input 
          className="buscador--juegil" 
          placeholder="buscas algún juego" 
          value={keyword} 
          onChange={(e) => setKeyword(e.target.value)} ></input>

        </div>
    
    <span>{}</span>
    <section className="wrap--allgames">
    {            
      state.matches("success") && Object.values(allgamesMemo).slice(0, 20).map((name, index) => {
          return <Card key={index} payload={name} />
      })
    }
    </section>
    <div>
      <span>
        Cargar más...
      </span>
    </div>
  </div>   
  )
}

export default AllGames