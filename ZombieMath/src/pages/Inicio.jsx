import React, { useEffect, useState } from 'react';
import CategoriaComponente from '../components/Categoria.jsx';
import InicioComponente from '../components/MenuPrincipal.jsx';
import LobbySound from '../assets/Lobby.mp3';  // Asegúrate de que la ruta del archivo es correcta

const Inicio = () => {
    const [mostrarInicio, setMostrarInicio] = useState(true);
    const audio = new Audio(LobbySound);

    useEffect(() => {
        audio.loop = true;
        const playAudio = async () => {
            try {
                await audio.play();
            } catch (err) {
                console.error('Error al intentar reproducir el audio automáticamente:', err);
                // Manejo de la política de autoplay que requiere interacción del usuario
            }
        };

        playAudio();

        return () => {
            audio.pause(); // Pausar y limpiar el audio cuando el componente se desmonte
            audio.currentTime = 0;
        };
    }, []);

    const irCategoria = () => {
        setMostrarInicio(false);
    };

    return (
        <div>
            {mostrarInicio ? (
                <InicioComponente irCategoria={irCategoria} />
            ) : (
                <CategoriaComponente />
            )}
        </div>
    );
};

export default Inicio;
