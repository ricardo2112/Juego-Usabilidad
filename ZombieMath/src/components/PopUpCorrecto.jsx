import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PopupCorrecto = ({ show, onHide, mensaje }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>¡Correcto!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{mensaje}</Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PopupCorrecto;