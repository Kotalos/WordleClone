import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
    const {gameOver, currAttempt, correctWord} = useContext(AppContext)

    return (
        <div className="gameOver">
            <h3>{gameOver.guessedWord ? "You correctly guessed!" : "You failed!"}</h3>
            <h1>Correct word: {correctWord}</h1>
            {gameOver.guessedWord && (<h3> Guessed in {currAttempt.attempt} attempts.</h3>)}
        </div>
    );
}

export default GameOver;