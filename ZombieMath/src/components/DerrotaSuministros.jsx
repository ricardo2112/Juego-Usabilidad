import React from 'react';
import { Link } from 'react-router-dom';
import FondoMuerte from '../assets/FondoMuerte.png';
import '../styles/components/DerrotaSuministros.css'; // Asegúrate de crear este archivo CSS

const DerrotaSuministros = () => {
    return (
        <div className="derrota-suministros" style={{ backgroundImage: `url(${FondoMuerte})` }}>
            <h1 className="derrota-title">Game Over</h1>
            <p className="derrota-message">Moriste mmv</p>
            <div className="derrota-buttons">
                <Link to="/" className="btn btn-dark derrota-button">Salir</Link>
                <Link to="/" className="btn btn-dark derrota-button">Intentar de nuevo</Link>
            </div>
        </div>
    );
};

export default DerrotaSuministros;