
import { useEffect, useState } from 'react'
import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Hero from './components/Hero'
import Cards from './components/Cards'

import { loboMachine } from '../xstate/loboMachine'
import { useMachine } from '@xstate/react'


export default function Home() {

  const [ state, send ] = useMachine(loboMachine)
  const [ dataBoard, setDataBoard ] = useState([])
  useEffect(() => {
    send("GET_DATA_BOARD")
  },[send])
  
  const { dashboard } = state.context
  useEffect(() => {
    state.matches("success") && setDataBoard(dashboard)
  },[state, dashboard, setDataBoard ])

  return (
    <div className="container">
      <Head>
        <title>Fedelobo - Videojuegos</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className="main">
        <div>
          <Hero count={dataBoard?.total} />
        </div>
      </main>
      <section className="col-12-pd-3">
          { state.matches("success") && <Cards payload={dataBoard?.games} platinos={dataBoard?.platinos} /> }
      </section>
    </div>
  )
}
