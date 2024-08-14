import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import preguntasJson from '../data/preguntas.json';
import FondoPrincipal from '../assets/FondoPrincipal.png';
import PopupError from '../components/PopUpError';
import PopupCorrecto from '../components/PopUpCorrecto';
import PopUpPuerta from '../components/PopUpPuerta';
import Temporizador from '../components/Temporizador';

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
            navigate('/derrota');
        } else if (aciertos >= 4) {
            navigate('/victoria');
        }
    }, [errores, aciertos, navigate]);

    useEffect(() => {
        // Mostrar PopUpPuerta cada 40 segundos
        const intervaloPopUpPuerta = setInterval(() => {
            if (!mostrarPopup && !mostrarPopUpPuerta && indicePreguntaActual < preguntas.length) {
                setMostrarPopUpPuerta(true);
            }
        }, 40000); // Cada 40 segundos

        return () => clearInterval(intervaloPopUpPuerta);
    }, [mostrarPopup, mostrarPopUpPuerta, indicePreguntaActual, preguntas.length]);

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
            return; // No hace nada si la pregunta actual no existe
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
        <div className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100'
            style={{
                backgroundImage: `url(${FondoPrincipal})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <h1 className='text-center py-3'>Preparación del antídoto</h1>
            {indicePreguntaActual < preguntas.length ? (
                <div className='mb-4 py-3'>
                    <h4 className='fw-regular py-4'>{preguntas[indicePreguntaActual]?.pregunta}</h4>
                    <input
                        type='text'
                        value={respuestaUsuario}
                        onChange={manejarCambioRespuesta}
                        className='form-control my-3 input-centered'
                        placeholder='Escribe tu respuesta aquí'
                    />
                    <div className='d-flex justify-content-center'>
                        <button
                            onClick={manejarEnvio}
                            className='btn btn-light border border-dark text-dark mt-2 btn-custom'
                        >
                            Enviar
                        </button>
                    </div>
                    <p className='mt-3'>Aciertos: {aciertos}/4</p>
                    <p className='mt-3'>Errores: {errores}/3</p>
                </div>
            ) : (
                <p>Cargando pregunta...</p>
            )}

            {/* Popup Error */}
            {mostrarPopup && !mostrarResultado && (
                <PopupError show={mostrarPopup} onHide={handleClosePopup} mensaje={mensaje} />
            )}

            {/* Popup Correcto */}
            {mostrarPopup && mostrarResultado && (
                <PopupCorrecto show={mostrarPopup} onHide={handleClosePopup} mensaje={mensaje} />
            )}

            {/* PopUp Puerta */}
            {mostrarPopUpPuerta && (
                <PopUpPuerta
                    show={mostrarPopUpPuerta}
                    onHide={handleClosePopUpPuerta}
                />
            )}

            {/* Temporizador */}
            <Temporizador />
        </div>
    );
};

export default Principal;
