import React from 'react'
import { useState } from 'react';
import CategoriaComponente from '../components/CategoriaComponente.jsx';
import InicioComponente from '../components/InicioComponente.jsx';

const Inicio = () => {

    const [mostrarInicio, setMostrarInicio] = useState(true);

    const irCategoria = () => {
        setMostrarInicio(false);
    }

  return (
    <div>
        <h1>Inicio</h1>
        {mostrarInicio ? (
            <InicioComponente irCategoria={irCategoria} />   
        ): (
            <CategoriaComponente/>
        )}
    </div>
  );
}

export default Inicio