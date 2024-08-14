import React from 'react';
import { useNavigate } from 'react-router-dom';
import FondoMuerte2 from '../assets/FondoMuerte2.png';
import '../styles/components/DerrotaPuerta.css';

const DerrotaPuerta = () => {
    const navigate = useNavigate();

    const handlePlayAgain = () => {
        navigate('/'); // Redirige a la página principal o al punto de inicio del juego
    };

    const handleExit = () => {
        navigate('/exit'); // Redirige a una página de salida o similar
    };

    return (
        <div className="derrota-puerta d-flex flex-column justify-content-center align-items-center vh-100" style={{ backgroundImage: `url(${FondoMuerte2})` }}>
            <h1>Game Over</h1>
            <p>Oh oh, te quedaste sin material...</p>
            <div>
                <button onClick={handlePlayAgain} className="btn btn-primary m-2">Intentar de nuevo</button>
                <button onClick={handleExit} className="btn btn-danger m-2">Salir</button>
            </div>
        </div>
    );
};

export default DerrotaPuerta;