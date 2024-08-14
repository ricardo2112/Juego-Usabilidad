import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DerrotaPuerta from '../components/DerrotaPuerta'; // Asegúrate de que la ruta sea correcta
import DerrotaSuministros from '../components/DerrotaSuministros'; // Importa el componente DerrotaSuministros
import FondoMuerte2 from '../assets/FondoMuerte2.png';
import BadEnd from '../assets/BAD_ENDING.mp3'; // Importa el sonido
import '../styles/pages/Derrota.css'; // Estilo general para la derrota

const Derrota = () => {
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

    const location = useLocation();
    const motivo = location.state?.motivo; // Obtiene el motivo desde el estado de navegación

    useEffect(() => {
        const audio = new Audio(BadEnd);
        audio.loop = true;  // El sonido se repite en bucle
        const playAudio = async () => {
            try {
                await audio.play();
            } catch (err) {
                console.error('Error al intentar reproducir el audio automáticamente:', err);
            }
        };

        playAudio();

        return () => {
            audio.pause(); // Pausar y limpiar el audio cuando el componente se desmonte
            audio.currentTime = 0;
        };
    }, []);

    return (
        <div className="derrota-container">
            {motivo === 'puerta' ? (
                <DerrotaPuerta /> // Renderiza el componente DerrotaPuerta si el motivo es 'puerta'
            ) : motivo === 'respuesta' ? (
                <DerrotaSuministros /> // Renderiza el componente DerrotaSuministros si el motivo es 'respuesta'
            ) : (
                <div className="derrota-default d-flex flex-column justify-content-center align-items-center vh-100" style={{ backgroundImage: `url(${FondoMuerte2})` }}>
                    <h1 className="highlight-text">{highlightFirstLetters('Game Over')}</h1>
                    <p style={{ textAlign: 'center', fontSize: '32px', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                        marginBottom: '15rem' // Añadir separación debajo del párrafo
                    }}>No lograste cerrar la puerta a tiempo, un zombie te atacó</p>
                    <div className="derrota-buttons">
                        <button onClick={() => window.location.href = '/'} className="btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold fs-3 text-white derrota-button">Intentar de nuevo</button>
                        <button onClick={() => window.location.href = '/'} className="btn btn-dark btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold fs-3 text-white derrota-button">Salir</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Derrota;
