import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import '../styles/components/PopUpError.css';

const PopupError = ({ show, onHide, mensaje }) => {
    return (
        <Modal tabIndex={0} className="custom-modal" show={show} onHide={onHide} centered>
            <Modal.Body tabIndex={0} className="modal-body">
                <FaExclamationTriangle className="popup-error-icon" />
                <h4 tabIndex={0} className='my-3'>{mensaje}</h4>
                <div tabIndex={0} className="popup-error-text-container">
                    <h2 tabIndex={0} className="popup-error-text-red">No te preocupes por equivocarte</h2>
                    <h3 tabIndex={0}>Sigue intentándolo ¡La perseverancia es la clave del éxito!</h3>
                </div>
                <button tabIndex={0} onClick={onHide} className="popup-error-button">
                    Cerrar
                </button>
            </Modal.Body>
        </Modal>
    );
};

export default PopupError;