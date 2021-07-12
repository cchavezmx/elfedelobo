import Link from 'next/link'

const Navigation = () => {

  return(
    <div className="navigation">
        <Link href="/" passHref><h1 style={{ cursor: 'pointer' }}>El Fedelobo</h1></Link>
        <nav>
          <span>about</span>
          <span>Contacto</span>
        </nav>
    </div>
  )
}


export default Navigation