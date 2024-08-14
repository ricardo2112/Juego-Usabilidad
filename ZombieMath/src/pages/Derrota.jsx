import { Link } from 'react-router-dom';
import FondoMuerte from '../assets/FondoMuerte.png';

const Derrota = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundImage: `url(${FondoMuerte})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white'
    }}>
      <h1 style={{ textAlign: 'center', fontSize: '64px' }}>Game Over</h1>
      <p style={{ textAlign: 'center', fontSize: '32px' }}>Moriste mmv</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
        <Link type='button' className='btn btn-dark'style={{fontSize: '32px', width: '300px'}} to={'/'}>Salir</Link>
        <Link type='button' className='btn btn-dark' style={{fontSize: '32px', width: '300px'}} to={'/'}>Intentar de nuevo</Link>
      </div>
    </div>
  )
}

export default Derrota