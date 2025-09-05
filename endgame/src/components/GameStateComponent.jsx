import clsx from 'clsx';

export default function GameStateComponent({gameWon}) {
    return (
        <div 
            className={clsx({
                ["game-state-class"]: true,
                ["game-won-class"]: gameWon,
                ["game-lost-class"]: !gameWon
            })}
        >
            <div className="game-state-header">
                {gameWon ? "you win!" : "You lost!"}
            </div>
            <div className="game-state-text">
                {gameWon ? "Well done!" : "Better luck next time!"}
            </div>
        </div>
    );
}