import { useEffect, useMemo, useState } from 'react'
import { useMachine } from '@xstate/react'
import { loboMachine } from '../xstate/loboMachine'
import Card from './components/Card'

const AllGames = () => {

  const [ state, send ] = useMachine(loboMachine)
  const [ keyword, setKeyword ] = useState("")
  
  useEffect(() => {
    send("GET_ALL_GAMES")
  },[send])

  const { listGames } = state.context
  const allgamesMemo = useMemo(() => state.matches("success") && listGames,[listGames, state])
  
  const handleSearch = useMemo(() => {
    const searchValues = Array.isArray(allgamesMemo) && keyword.length > 0 &&
    allgamesMemo.filter(({ title }) => title.toLowerCase().startsWith(keyword))
    return searchValues
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[keyword])

  let randomNumber = Math.floor(Math.random() * 280) + 1

  return (
    
    <div className="container">
      <div className="buscador--content">
        <input 
          type="search"
          list={handleSearch}
          placeholder="Escribe una letra o busca el título del juego"
          onChange={(e) => setKeyword(e.target.value)} ></input>
        </div>

    <section className="wrap--allgames">
    { state.matches("getAllGames") && <div className="loading--lobo"></div> }
    {            
      handleSearch && handleSearch.map((game, index) => <Card key={index} payload={game}/> )      
    }
    {
      state.matches("success") && !handleSearch && 
      Object.values(allgamesMemo).slice(randomNumber, randomNumber + 15).map((name, index) => {
        return <Card key={index} payload={name} /> 
      })
    }
    </section>
    <div>
    </div>
  </div>   
  )
}

export default AllGames