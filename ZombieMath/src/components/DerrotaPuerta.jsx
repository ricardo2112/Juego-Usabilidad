import React from 'react';
import { Link } from 'react-router-dom';
import FondoMuerte2 from '../assets/FondoMuerte2.png';
import '../styles/components/DerrotaSuministros.css'; // Asegúrate de crear este archivo CSS

const DerrotaPuerta = () => {
    const highlightFirstLetters = (text) => {
        return text.split(/(\s+)/).map((word, index) => {
            if (word.trim().length > 0) {
                const color = index === 0 ? 'red' : 'red'; // Cambia el color según el índice o el contenido
                return (
                    <React.Fragment key={index}>
                    <span 
                        style={{ color: color, fontWeight: 'bold'}}>
                        {word[0]}
                    </span>
                    {word.slice(1)}
                    </React.Fragment>
                );
            }
            return word;
        });
    };

    return (
        <div className="derrota-suministros" style={{ backgroundImage: `url(${FondoMuerte2})` }}>
            <h1 className="highlight-text">{highlightFirstLetters('Game Over')}</h1>
            <p style={{ textAlign: 'center', fontSize: '32px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                marginBottom: '15rem' // Añadir separación debajo del párrafo
             }}>No lograste cerrar la puerta a tiempo, un zombie te atacó</p>
            <div className="derrota-buttons">
                <Link to="/" className="btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold fs-3 text-white derrota-button">Salir</Link>
                <Link to="/" className="btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold fs-3 text-white derrota-button">Intentar de nuevo</Link>
            </div>
        </div>
    );
};

export default DerrotaPuerta;