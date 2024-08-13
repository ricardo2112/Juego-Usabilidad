import React from 'react'
import { Link } from 'react-router-dom';
import FondoInicio from '../assets/FondoInicio.png';

const CategoriaComponente = () => {
  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100'
      style={{
        backgroundImage: `url(${FondoInicio})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    > 
      <h1 className='text-uppercase text-danger fw-bold display-1'>Menú Principal</h1>
      <p className='text-white fw-bold mb-4 text-center py-4'>Selecciona la categoría que quieres jugar:</p>
      <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
        <Link 
        to="/principal/probabilidad" 
          className='btn btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold text-white' 
          style={{ minWidth: '200px', minHeight: '80px' }}
        >
          Probabilidad
        </Link>
        <Link 
          to="/principal/calculo" 
          className='btn btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold text-white' 
          style={{ minWidth: '200px', minHeight: '80px' }}
        >
          Cálculo
        </Link>
      </div>
    </div>
  );
}

export default CategoriaComponente