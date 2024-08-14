import React from 'react'
import { Link } from 'react-router-dom';
import FondoInicio from '../assets/FondoInicio.png'

function InicioComponente({ irCategoria }) {
    const highlightFirstLetters = (text) => {
        return text.split(/(\s+)/).map((word, index) => {
            if (word.trim().length > 0) {
                const color = index === 0 ? 'red' : 'red'; // Cambia el color según el índice o el contenido
                return (
                    <React.Fragment key={index}>
                    <span 
                        style={{ color: color, fontWeight: 'bold'}}>
                        {word[0]}
                    </span>
                    {word.slice(1)}
                    </React.Fragment>
                );
            }
            return word;
        });
    };

    return (
        <div
            className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100'
            style={{
                backgroundImage: `url(${FondoInicio})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <h2 className='highlight-text'>
                {highlightFirstLetters('Zombie Math')}
            </h2>
            <div className='text-center mx-5 px-4'>
                <p className='text-white fs-4 fw-regular mx-5 px-5 py-4'
                style={{
                    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                }}>
                    En el juego, eres un científico intentando curar a los zombis en una pantalla de computadora. Con respuestas correctas, avanzas hacia la cura, pero el tiempo es crucial. Si fallas, tus habilidades matemáticas serán tu única esperanza. ¡Prepárate para salvar el mundo!
                </p>
            </div>
            <div className='d-flex justify-content-center py-5'>
                <span className='fw-regular text-white px-4 fs-3'>Tu nombre:</span>
                <input 
                    type="text" 
                    className='form-control text-white' 
                    style={{ maxWidth: '200px', fontSize: '1.2rem', backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
                />
            </div>
            <button className='btn btn-outline-danger btn-lg d-flex justify-content-center align-items-center fw-bold text-white fs-4 px-5 py-4' onClick={irCategoria} >
                {highlightFirstLetters('Jugar')}
            </button>
        </div>
    );
}

export default InicioComponente;