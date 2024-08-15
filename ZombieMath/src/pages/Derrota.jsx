import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DerrotaPuerta from '../components/DerrotaPuerta'; 
import DerrotaSuministros from '../components/DerrotaSuministros';
import FondoMuerte2 from '../assets/FondoMuerte2.png';
import BadEnd from '../assets/BAD_ENDING.mp3'; 
import '../styles/pages/Derrota.css';

const Derrota = () => {
    const highlightFirstLetters = (text) => {
        return text.split(/(\s+)/).map((word, index) => {
            if (word.trim().length > 0) {
                const color = index === 0 ? 'red' : 'red';
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

    const location = useLocation();
    const motivo = location.state?.motivo;

    useEffect(() => {
        const audio = new Audio(BadEnd);
        audio.loop = true; 
        const playAudio = async () => {
            try {
                await audio.play();
            } catch (err) {
                console.error('Error al intentar reproducir el audio automáticamente:', err);
            }
        };

        playAudio();

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <div tabIndex={0} className="derrota-container">
            {motivo === 'puerta' ? (
                <DerrotaPuerta /> 
            ) : motivo === 'respuesta' ? (
                <DerrotaSuministros /> 
            ) : (
                <div tabIndex={0} className="derrota-default d-flex flex-column justify-content-center align-items-center vh-100" style={{ backgroundImage: `url(${FondoMuerte2})` }}>
                    <h1 tabIndex={0} className="highlight-text">{highlightFirstLetters('Game Over')}</h1>
                    <p tabIndex={0} style={{ textAlign: 'center', fontSize: '32px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                        marginBottom: '15rem' 
                    }}>No lograste cerrar la puerta a tiempo, un zombie te atacó</p>
                    <div tabIndex={0} className="derrota-buttons">
                        <button tabIndex={0} onClick={() => window.location.href = '/'} className="btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold fs-3 text-white derrota-button">Intentar de nuevo</button>
                        <button tabIndex={0} onClick={() => window.location.href = '/'} className="btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold fs-3 text-white derrota-button">Salir</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Derrota;
