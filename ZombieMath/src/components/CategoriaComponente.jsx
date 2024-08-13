import React from 'react'
import { Link } from 'react-router-dom';

const CategoriaComponente = () => {
  return (
    <div>
      <h2>Pantalla de Categoría</h2>
      <Link to="/principal"><button>Ir a la pantalla principal</button></Link>
    </div>
  )
}

export default CategoriaComponente