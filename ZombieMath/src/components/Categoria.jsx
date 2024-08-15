import React from 'react'
import { Link } from 'react-router-dom';
import FondoInicio from '../assets/FondoInicio.png';

const CategoriaComponente = () => {
  const highlightFirstLetters = (text) => {
    return text.split(/(\s+)/).map((word, index) => {
        if (word.trim().length > 0) {
            const color = index === 0 ? 'red' : 'red'; // Cambia el color según el índice o el contenido
            return (
                <React.Fragment key={index}>
                    <span style={{ color: color, fontWeight: 'bold' }}>{word[0]}</span>{word.slice(1)}
                </React.Fragment>
            );
        }
        return word;
    });
  };

  return (
    <div
      tabIndex={0}
      className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100'
      style={{
        backgroundImage: `url(${FondoInicio})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    > 
      <h2 tabIndex={0} className='highlight-text'>
          {highlightFirstLetters('Menú Principal')}
      </h2>
      <p tabIndex={0} className='text-white fw-semibold fs-3 mb-4 text-center py-4'
        style={{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
        }}>Selecciona la categoría que quieres jugar:</p>
      <div tabIndex={0} className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
        <Link 
          tabIndex={0}
          to="/principal/probabilidad" 
          className='btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold text-white fs-3 derrota-button' 
          style={{ minWidth: '200px', minHeight: '80px' }}
        >
          {highlightFirstLetters('Probabilidad')}
        </Link>
        <Link  
          tabIndex={0}
          to="/principal/calculo" 
          className='btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold text-white fs-3 derrota-button' 
          style={{ minWidth: '200px', minHeight: '80px' }}
        >
          {highlightFirstLetters('Cálculo')}
        </Link>
      </div>
    </div>
  );
}

export default CategoriaComponente