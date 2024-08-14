import React from 'react';
import '../styles/components/Contadores.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Contadores = ({ aciertos, errores }) => {
    return (
        <div className="contador-aciertos-errores">
            <div className="aciertos">
                <p>Aciertos:</p>
                <div className="iconos-aciertos">
                    {[...Array(aciertos)].map((_, index) => (
                        <FaCheckCircle key={index} className="icono-acierto" />
                    ))}
                </div>
            </div>
            <div className="errores">
                <p>Errores:</p>
                <div className="iconos-errores">
                    {[...Array(errores)].map((_, index) => (
                        <FaTimesCircle key={index} className="icono-error" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contadores;