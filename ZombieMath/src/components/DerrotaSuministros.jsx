import React from 'react';
import { Link } from 'react-router-dom';
import FondoMuerte from '../assets/FondoMuerte.png';
import '../styles/components/DerrotaSuministros.css'; // Asegúrate de crear este archivo CSS

const DerrotaSuministros = () => {
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
        <div tabIndex={0} className="derrota-suministros" style={{ backgroundImage: `url(${FondoMuerte})` }}>
            <h1 tabIndex={0} className="highlight-text">{highlightFirstLetters('Game Over')}</h1>
            <p tabIndex={0} style={{ textAlign: 'center', fontSize: '32px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                marginBottom: '15rem' // Añadir separación debajo del párrafo
             }}>Oh oh, te quedaste sin material</p>
            <div className="derrota-buttons">
                <Link tabIndex={0} to="/" className="btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold fs-3 text-white derrota-button">Intentar de nuevo</Link>
                <Link tabIndex={0} to="/" className="btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold fs-3 text-white derrota-button">Salir</Link>
            </div>
        </div>
    );
};

export default DerrotaSuministros;