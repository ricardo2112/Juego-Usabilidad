import React from 'react';
import Screemer from '../components/Screemer';
import { useNavigate } from 'react-router-dom';

const ScreemerPage = () => {
    const navigate = useNavigate();

    const handleFinish = () => {
        navigate('/derrota');  // Asegúrate de que esta es la ruta correcta
    };

    return (
        <div>
            <Screemer onFinish={handleFinish} />
        </div>
    );
};

export default ScreemerPage;
