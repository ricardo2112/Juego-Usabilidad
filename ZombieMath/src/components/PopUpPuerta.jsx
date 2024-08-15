import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AlertSound from '../assets/Alert.mp3';  
import '../styles/components/PopUpPuerta.css';

const PopUpPuerta = ({ show, onHide }) => {
    const navigate = useNavigate();
    const audio = new Audio(AlertSound);

    useEffect(() => {
        if (show) {
            const playAudio = async () => {
                try {
                    await audio.play();
                } catch (err) {
                    console.error('Error al intentar reproducir el audio automáticamente:', err);
                }
            };

            playAudio();  

            const timer = setTimeout(() => {
                navigate('/screemer'); 
            }, 15000); 

            return () => {
                clearTimeout(timer);
                audio.pause(); 
                audio.currentTime = 0;
            };
        }
    }, [show, navigate, audio]);

    return (
        <Modal tabIndex={0} show={show} onHide={onHide} centered>
            <Modal.Body tabIndex={0} className="popup-puerta-body">
                <FaExclamationTriangle className="popup-puerta-icon" />
                <h1 tabIndex={0} className="popup-puerta-title">¡ALERTA DE SEGURIDAD!</h1>
                <h3 tabIndex={0} className="popup-puerta-subtitle">
                    ACCESO RESTRINGIDO<br />
                    MOVIMIENTO DETECTADOS CERCA DE LA ENTRADA
                </h3>
                <h5 tabIndex={0} className="popup-puerta-message">
                    Por favor, manténgase en zonas seguras y siga las instrucciones del personal.<br />
                    Procedimientos de seguridad activados.
                </h5>
                <button tabIndex={0} onClick={onHide} className="popup-puerta-button">
                    Bloquear Puerta
                </button>
            </Modal.Body>
        </Modal>
    );
};

export default PopUpPuerta;
