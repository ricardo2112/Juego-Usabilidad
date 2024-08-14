import React from 'react'
import { Link } from 'react-router-dom';
import FondoVictoria from '../assets/FondoVictoria.png';


const Victoria = () => {
  const highlightFirstLetters = (text) => {
    return text.split(/(\s+)/).map((word, index) => {
        if (word.trim().length > 0) {
            const color = index === 0 ? 'red' : 'red';
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
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundImage: `url(${FondoVictoria})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white'
    }}>
    <h1 className='highlight-text' style={{ textAlign: 'center'}}>{highlightFirstLetters('Victoria')}</h1>
      <p style={{ textAlign: 'center', fontSize: '32px' }}>¡Felicidades, científico! Has demostrado tu habilidad matemática y tu valentía en la lucha contra los zombies. Gracias a tu ingenio y determinación, has encontrado la cura y salvado a la humanidad de la amenaza zombi. 
      ¡Eres un verdadero héroe de las matemáticas!</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
        <Link type='button' className='btn btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold text-white fs-4 px-5 py-4' to={'/'}>{highlightFirstLetters('Jugar')}</Link>
        <Link type='button' className='btn btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold text-white fs-4 px-5 py-4' to={'/'}>{highlightFirstLetters('Salir')}</Link>
      </div>
    </div>

  )
}

export default Victoria