import React from 'react';
import SuministrosImg from '../assets/Suministros.png';
import '../styles/components/Suministros.css'; // Asegúrate de que el archivo CSS esté configurado

const Suministros = ({ errores }) => {
    return (
        <div tabIndex={0} className="suministros-container">
            <h2 tabIndex={0} className="titulo-suministros">Suministros Disponibles</h2>
            <div tabIndex={0} className="suministros-imagenes">
                {[...Array(3 - errores)].map((_, index) => (
                    <div tabIndex={0} key={index} className="suministro">
                        <img src={SuministrosImg} alt={`Suministro ${index + 1}`} className="img-fluid" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Suministros;