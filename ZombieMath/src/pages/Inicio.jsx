import React from 'react'
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
        <h1>Inicio</h1>
        <Link to={'/principal'}>Jugar</Link>
    </div>
  );
}

export default Inicio