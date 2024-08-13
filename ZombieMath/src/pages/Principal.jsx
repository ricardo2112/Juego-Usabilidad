import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import preguntas from '../data/preguntas.json'

const Principal = () => {


  return (
    <div>
        <h1>Principal</h1>
        <Link to={'/derrota'}>Derrota</Link>
        <br />
        <Link to={'/victoria'}>Victoria</Link>
    </div>
  )
}

export default Principal