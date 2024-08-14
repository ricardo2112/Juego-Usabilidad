import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import '../styles/components/PopUpError.css';

const PopupError = ({ show, onHide, mensaje }) => {
    return (
        <Modal className="custom-modal" show={show} onHide={onHide} centered>
            <Modal.Body className="modal-body">
                <FaExclamationTriangle className="popup-error-icon" />
                <h4 className='my-3'>{mensaje}</h4>
                <div className="popup-error-text-container">
                    <h2 className="popup-error-text-red">No te preocupes por equivocarte</h2>
                    <h3>Sigue intentándolo ¡La perseverancia es la clave del éxito!</h3>
                </div>
                <button onClick={onHide} className="popup-error-button">
                    Cerrar
                </button>
            </Modal.Body>
        </Modal>
    );
};

export default PopupError;