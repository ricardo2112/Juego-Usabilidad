import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import preguntasJson from '../data/preguntas.json';
import FondoPrincipal from '../assets/FondoPrincipal.png';

const Victoria = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const [preguntas, setPreguntas] = useState([]);
  const [indicePreguntaActual, setIndicePreguntaActual] = useState(0);
  const [errores, setErrores] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const [respuestaUsuario, setRespuestaUsuario] = useState('');
  const [mostrarResultado, setMostrarResultado] = useState(null);

  useEffect(() => {
    const preguntasCategoria = preguntasJson[categoria] || [];
    setPreguntas(preguntasCategoria);
  }, [categoria]);

  useEffect(() => {
    if (errores >= 3) {
      navigate('/derrota');
    } else if (aciertos >= 4) {
      navigate('/victoria');
    }
  }, [errores, aciertos, navigate]);

  const manejarCambioRespuesta = (e) => {
    setRespuestaUsuario(e.target.value);
  };

  const manejarEnvio = () => {
    const respuestaCorrecta = preguntas[indicePreguntaActual].respuesta_correcta.trim().toLowerCase();
    if (respuestaUsuario.trim().toLowerCase() === respuestaCorrecta) {
      setMostrarResultado(true);
      setAciertos(aciertos + 1);
    } else {
      setMostrarResultado(false);
      setErrores(errores + 1);
    }
    setTimeout(() => {
      setMostrarResultado(null);
      setRespuestaUsuario('');
      if (indicePreguntaActual < preguntas.length - 1) {
        setIndicePreguntaActual(indicePreguntaActual + 1);
      } else {
        if (aciertos < 4 && errores < 3) {
          navigate('/victoria'); // Si completa las preguntas, pero sin fallar 3 veces.
        }
      }
    }, 1000);
  };

  return (
    
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100'
    style={{
      backgroundImage: `url(${FondoPrincipal})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <h1 className='text-center py-3'>Preparación del antídoto</h1>
      {indicePreguntaActual < preguntas.length ? (
        <div className='mb-4 py-3'>
          <h4 className='fw-regular py-4'>{preguntas[indicePreguntaActual].pregunta}</h4>
          <input
            type='text'
            value={respuestaUsuario}
            onChange={manejarCambioRespuesta}
            className='form-control my-3 input-centered'
            placeholder='Escribe tu respuesta aquí'
          />
          <div className='d-flex justify-content-center'>
          <button
            onClick={manejarEnvio}
            className='btn btn-light border border-dark text-dark mt-2 btn-custom'
          >
            Enviar
          </button>
          </div>
          {mostrarResultado !== null && (
            <p className={`mt-2 ${mostrarResultado ? 'text-success' : 'text-danger'}`}>
              {mostrarResultado ? '¡Correcto!' : `Incorrecto. La respuesta correcta es: ${preguntas[indicePreguntaActual].respuesta_correcta}`}
            </p>
          )}
          <p className='mt-3'>Aciertos: {aciertos}/4</p>
          <p className='mt-3'>Errores: {errores}/3</p>
        </div>
      ) : (
        <p>Cargando pregunta...</p>
      )}
    </div>
  );
};

export default Victoria;
