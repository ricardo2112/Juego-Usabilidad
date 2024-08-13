import React from 'react'

function InicioComponente({ irCategoria }) {
    return (
        <div>
            <h2>Componente del inicio</h2>
            <button onClick={irCategoria}>Ir a la Categoria</button>
        </div>
    );
}

export default InicioComponente;