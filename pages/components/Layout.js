
import Head from 'next/head'
import Navigation from './Navigation'

const Layout = ({ children }) => {
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
          { children }
        </div>
      </main>
      <footer className="footer">
        <a href="mailto:cchavez@outlook.com">Sito creado por un fan</a>
      </footer>
    </div>
  )
}
export default Layout