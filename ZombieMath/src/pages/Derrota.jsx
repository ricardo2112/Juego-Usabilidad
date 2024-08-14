import React from 'react';
import { useLocation } from 'react-router-dom';
import DerrotaPuerta from '../components/DerrotaPuerta'; // Asegúrate de que la ruta sea correcta
import DerrotaSuministros from '../components/DerrotaSuministros'; // Importa el componente DerrotaSuministros
import FondoMuerte2 from '../assets/FondoMuerte2.png';
import '../styles/pages/Derrota.css'; // Estilo general para la derrota

const Derrota = () => {
    const location = useLocation();
    const motivo = location.state?.motivo; // Obtiene el motivo desde el estado de navegación

    return (
        <div className="derrota-container">
            {motivo === 'puerta' ? (
                <DerrotaPuerta /> // Renderiza el componente DerrotaPuerta si el motivo es 'puerta'
            ) : motivo === 'respuesta' ? (
                <DerrotaSuministros /> // Renderiza el componente DerrotaSuministros si el motivo es 'respuesta'
            ) : (
                <div className="derrota-default d-flex flex-column justify-content-center align-items-center vh-100" style={{ backgroundImage: `url(${FondoMuerte2})` }}>
                    <h1>Game Over</h1>
                    <p>Oh oh, te quedaste sin material...</p>
                    <div>
                        <button onClick={() => window.location.href = '/'} className="btn btn-primary m-2">Intentar de nuevo</button>
                        <button onClick={() => window.location.href = '/exit'} className="btn btn-danger m-2">Salir</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Derrota;