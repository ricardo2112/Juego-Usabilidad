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
    <div tabIndex={0} style={{
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
    <h1 tabIndex={0} className='highlight-text' style={{ textAlign: 'center'}}>{highlightFirstLetters('Victoria')}</h1>
    <p tabIndex={0} style={{ textAlign: 'center', fontSize: '32px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                marginBottom: '15rem', marginLeft: '9rem', marginRight: '9rem'
             }}>¡Felicidades, científico! Has demostrado tu habilidad matemática y tu valentía en la lucha contra los zombies. Gracias a tu ingenio y determinación, has encontrado la cura y salvado a la humanidad de la amenaza zombi. 
¡Eres un verdadero héroe de las matemáticas!</p>
      <div tabIndex={0} className="derrota-buttons">
        <Link tabIndex={0} to="/" className="btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold fs-3 text-white derrota-button">Jugar</Link>
        <Link tabIndex={0} to="/" className="btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold fs-3 text-white derrota-button">Salir</Link>
      </div>
    </div>

  )
}

export default Victoria;