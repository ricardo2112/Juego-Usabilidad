import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AlertSound from '../assets/Alert.mp3';  
import '../styles/components/PopUpPuerta.css';

const PopUpPuerta = ({ show, onHide }) => {
    const navigate = useNavigate();
    const audio = new Audio(AlertSound);  // Crea la instancia del audio

    useEffect(() => {
        if (show) {
            const playAudio = async () => {
                try {
                    await audio.play();
                } catch (err) {
                    console.error('Error al intentar reproducir el audio automáticamente:', err);
                }
            };

            playAudio();  // Intenta reproducir el sonido cuando el popup se muestra

            const timer = setTimeout(() => {
                navigate('/screemer'); // Cambia directamente a la ruta donde está el componente Screemer
            }, 15000); // 15 segundos

            return () => {
                clearTimeout(timer);
                audio.pause();  // Asegúrate de pausar y resetear el audio cuando el componente se oculte
                audio.currentTime = 0;
            };
        }
    }, [show, navigate, audio]);

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Body className="popup-puerta-body">
                <FaExclamationTriangle className="popup-puerta-icon" />
                <h1 className="popup-puerta-title">¡ALERTA DE SEGURIDAD!</h1>
                <h3 className="popup-puerta-subtitle">
                    ACCESO RESTRINGIDO<br />
                    MOVIMIENTO DETECTADOS CERCA DE LA ENTRADA
                </h3>
                <h5 className="popup-puerta-message">
                    Por favor, manténgase en zonas seguras y siga las instrucciones del personal.<br />
                    Procedimientos de seguridad activados.
                </h5>
                <button onClick={onHide} className="popup-puerta-button">
                    Bloquear Puerta
                </button>
            </Modal.Body>
        </Modal>
    );
};

export default PopUpPuerta;
