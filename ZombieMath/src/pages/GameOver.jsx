export const GameOver = () => {

    const handlePlayAgain = () => { }
    const handleExit = () => { }
    return (
        <div className="game-over">
            <h1>Game Over</h1>
            <p>oh oh te quedaste sin material...</p>
            <button onClick={handlePlayAgain}>Intentar de nuevo</button>
            <button onClick={handleExit}>Salir</button>
        </div>
    );
}