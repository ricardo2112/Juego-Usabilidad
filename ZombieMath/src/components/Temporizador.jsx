import React, { useEffect, useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Temporizador.css';

const Temporizador = () => {
    const [tiempoRestante, setTiempoRestante] = useState(90); // 1 minuto 30 segundos en segundos
    const [activo, setActivo] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (activo && tiempoRestante > 0) {
            const intervalId = setInterval(() => {
                setTiempoRestante((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        } else if (tiempoRestante <= 0) {
            navigate('/derrota'); // Redirige a la página de derrota cuando el tiempo se agota
        }
    }, [activo, tiempoRestante, navigate]);

    useEffect(() => {
        // Reinicia el temporizador
        setTiempoRestante(90);
        setActivo(true);
    }, []);

    useEffect(() => {
        // Detiene el temporizador
        if (!activo) {
            setTiempoRestante(tiempoRestante);
        }
    }, [activo]);

    const formatearTiempo = (tiempo) => {
        const minutos = Math.floor(tiempo / 60);
        const segundos = tiempo % 60;
        return `${minutos}:${segundos < 10 ? `0${segundos}` : segundos}`;
    };

    return (
        <div className="temporizador d-flex align-items-center">
            <h2>Tiempo restante:</h2>
            <FaRegClock className="icono-temporizador" />
            <span className="tiempo-restante">{formatearTiempo(tiempoRestante)}</span>
        </div>
    );
};

export default Temporizador;
