import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DerrotaPuerta from '../components/DerrotaPuerta'; // Asegúrate de que la ruta sea correcta
import DerrotaSuministros from '../components/DerrotaSuministros'; // Importa el componente DerrotaSuministros
import FondoMuerte2 from '../assets/FondoMuerte2.png';
import BadEnd from '../assets/BAD_ENDING.mp3'; // Importa el sonido
import '../styles/pages/Derrota.css'; // Estilo general para la derrota

const Derrota = () => {
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
                    <h1>Game Over</h1>
                    <p>Oh oh, te quedaste sin material...</p>
                    <div>
                        <button onClick={() => window.location.href = '/'} className="btn btn-primary m-2">Intentar de nuevo</button>
                        <button onClick={() => window.location.href = '/exit'} className="btn btn-danger m-2">Salir</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Derrota;
