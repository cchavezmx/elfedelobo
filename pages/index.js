import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Cards from './components/Cards'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fedelobo - Videojuegos</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className="main">
        <div>
          <Navigation />
        </div>
        <div>
          <Hero />
        </div>
      </main>
      <section>
          <Cards />
      </section>

      <footer className="footer">
        <a href="mailto:cchavez@outlook.com">Sito creado por un fan</a>
      </footer>
    </div>
  )
}
