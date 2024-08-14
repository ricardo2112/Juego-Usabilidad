import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FondoScreamer from '../assets/FondoScreamer.png';
import ZombieSound from '../assets/zombie-sound.mp3';
import '../styles/components/Screemer.css';

const Screemer = ({ onFinish }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const audio = new Audio(ZombieSound);
        audio.loop = true; // Configura el sonido en bucle

        const playAudio = async () => {
            try {
                await audio.play();
            } catch (err) {
                console.error('La reproducción automática fue bloqueada. El usuario necesita interactuar con la página primero.', err);
            }
        };

        playAudio();

        // Redirigir a /derrota después de 3 segundos
        const timer = setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
            onFinish(); // Llama a la función onFinish cuando el componente se desvanezca
        }, 3000);

        // Limpiar el audio y el temporizador al desmontar el componente
        return () => {
            audio.pause();
            audio.currentTime = 0;
            clearTimeout(timer);
        };
    }, [navigate, onFinish]);

    return (
        <div className="screemer-container" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <img src={FondoScreamer} alt="Screamer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
    );
};

export default Screemer;