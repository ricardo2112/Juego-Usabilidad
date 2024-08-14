import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import preguntasJson from '../data/preguntas.json';
import FondoPrincipal from '../assets/FondoPrincipal.png';
import FondoSound from '../assets/Fondo.mp3';  // Asegúrate de que la ruta del archivo es correcta
import PopupError from '../components/PopUpError';
import PopupCorrecto from '../components/PopUpCorrecto';
import PopUpPuerta from '../components/PopUpPuerta';
import Temporizador from '../components/Temporizador';
import Suministros from '../components/Suministros';
import Contadores from '../components/Contadores';

import '../styles/pages/Principal.css';

const Principal = () => {
    const { categoria } = useParams();
    const navigate = useNavigate();
    const [preguntas, setPreguntas] = useState([]);
    const [indicePreguntaActual, setIndicePreguntaActual] = useState(0);
    const [errores, setErrores] = useState(0);
    const [aciertos, setAciertos] = useState(0);
    const [respuestaUsuario, setRespuestaUsuario] = useState('');
    const [mostrarResultado, setMostrarResultado] = useState(null);
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [mostrarPopUpPuerta, setMostrarPopUpPuerta] = useState(false);

    useEffect(() => {
        const preguntasCategoria = preguntasJson[categoria] || [];
        setPreguntas(preguntasCategoria);
    }, [categoria]);

    useEffect(() => {
        if (errores >= 3) {
            navigate('/derrota', { state: { motivo: 'respuesta' } });
        } else if (aciertos >= 4) {
            navigate('/victoria');
        }
    }, [errores, aciertos, navigate]);

    useEffect(() => {
        const intervaloPopUpPuerta = setInterval(() => {
            if (!mostrarPopup && !mostrarPopUpPuerta && indicePreguntaActual < preguntas.length) {
                setMostrarPopUpPuerta(true);
            }
        }, 10000);

        return () => clearInterval(intervaloPopUpPuerta);
    }, [mostrarPopup, mostrarPopUpPuerta, indicePreguntaActual, preguntas.length]);

    useEffect(() => {
        const audio = new Audio(FondoSound);
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

    const handleClosePopup = () => {
        setMostrarPopup(false);
        setRespuestaUsuario('');
        if (indicePreguntaActual < preguntas.length - 1) {
            setIndicePreguntaActual(indicePreguntaActual + 1);
        }
    };

    const handleClosePopUpPuerta = () => {
        setMostrarPopUpPuerta(false);
    };

    const manejarCambioRespuesta = (e) => {
        setRespuestaUsuario(e.target.value);
    };

    const manejarEnvio = () => {
        if (!preguntas[indicePreguntaActual]) {
            return;
        }

        const respuestaCorrecta = preguntas[indicePreguntaActual].respuesta_correcta.trim().toLowerCase();
        const esCorrecto = respuestaUsuario.trim().toLowerCase() === respuestaCorrecta;
        setMostrarResultado(esCorrecto);

        if (esCorrecto) {
            setAciertos(aciertos + 1);
        } else {
            setErrores(errores + 1);
        }

        setMostrarPopup(true);
    };

    const mensaje = preguntas[indicePreguntaActual]
        ? mostrarResultado
            ? '¡Correcto!'
            : `Incorrecto. La respuesta correcta es: ${preguntas[indicePreguntaActual].respuesta_correcta}`
        : '';

    return (
        <div
            className='principal-container'
            style={{
                backgroundImage: `url(${FondoPrincipal})`,
                backgroundSize: 'cover'
            }}
        >
            <h1 className='principal-title'>Preparación del antídoto</h1>

            <Contadores aciertos={aciertos} errores={errores} />

            {indicePreguntaActual < preguntas.length ? (
                <div className='pregunta-container'>
                    <h4 className='pregunta-titulo'>{preguntas[indicePreguntaActual]?.pregunta}</h4>
                    <input
                        type='text'
                        value={respuestaUsuario}
                        onChange={manejarCambioRespuesta}
                        className='form-control input-centered'
                        placeholder='Escribe tu respuesta aquí'
                    />
                    <div className='d-flex justify-content-center'>
                        <button
                            onClick={manejarEnvio}
                            className='btn btn-light text-dark btn-custom'
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            ) : (
                <p>Cargando pregunta...</p>
            )}

            {mostrarPopup && !mostrarResultado && (
                <PopupError show={mostrarPopup} onHide={handleClosePopup} mensaje={mensaje} />
            )}

            {mostrarPopup && mostrarResultado && (
                <PopupCorrecto show={mostrarPopup} onHide={handleClosePopup} mensaje={mensaje} />
            )}

            {mostrarPopUpPuerta && (
                <PopUpPuerta
                    show={mostrarPopUpPuerta}
                    onHide={handleClosePopUpPuerta}
                />
            )}

            <Temporizador />
            <Suministros errores={errores} />
        </div>
    );
};

export default Principal;
