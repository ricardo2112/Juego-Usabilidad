import React from 'react'
import { Link } from 'react-router-dom';
import FondoInicio from '../assets/FondoInicio.png'

function InicioComponente({ irCategoria }) {
    return (
        <div
        className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100'
        style={{
          backgroundImage: `url(${FondoInicio})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}> 
            <h2 className='text-white'>Zombie-Math</h2>
            <p className='text-white fw-regular mb-8 text-center px-4 py-4'>En el juego, eres un científico intentando curar a los zombis en una pantalla de computadora. Con respuestas correctas, avanzas hacia la cura, pero el tiempo es crucial. Si fallas, tus habilidades matemáticas serán tu única esperanza. ¡Prepárate para salvar el mundo!</p>
            <h3 className='text-white'>Tu nombre:</h3>
            <input type="Tu nombre" />
            <button onClick={irCategoria}>Jugar</button>
        </div>
    );
}

export default InicioComponente;