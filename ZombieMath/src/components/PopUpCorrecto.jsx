import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa'; // Cambiamos el icono al de check
import '../styles/components/PopUpCorrecto.css'; 

const PopupCorrecto = ({ show, onHide, mensaje }) => {
    return (
        <Modal tabIndex={0} className="custom-modal-correcto" show={show} onHide={onHide} centered>
            <Modal.Body tabIndex={0} className="modal-body-correcto">
                <FaCheckCircle className="popup-correcto-icon" />
                <h4 tabIndex={0} className='my-3'>{mensaje}</h4>
                <div tabIndex={0} className="popup-correcto-text-container">
                    <h2 tabIndex={0} className="popup-correcto-text-green">¡Felicidades por tu logro!</h2>
                    <h3 tabIndex={0}>Continúa así, ¡estás en el camino correcto!</h3>
                </div>
                <button tabIndex={0} onClick={onHide} className="popup-correcto-button">
                    Cerrar
                </button>
            </Modal.Body>
        </Modal>
    );
};

export default PopupCorrecto;
