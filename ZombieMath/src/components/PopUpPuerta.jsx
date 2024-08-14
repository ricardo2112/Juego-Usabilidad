import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/components/PopUpPuerta.css';

const PopUpPuerta = ({ show, onHide }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                navigate('/derrota', { state: { motivo: 'puerta' } }); // Redirige si el pop-up no se cierra en 5 segundos
            }, 40000); //   40 segundos 

            return () => clearTimeout(timer);
        }
    }, [show, navigate]);

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