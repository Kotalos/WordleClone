import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';

function Letter({ letterPos, attemptVal }) {
  const { board, correctWord, currAttempt, disabledLetters, setDisabledLetter } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter.toLowerCase()
  const almost = !correct && letter !== "" && correctWord.includes(letter.toLowerCase())
  
  const letterState = 
  currAttempt.attempt > attemptVal && 
  (correct ? 'correct' : almost ? 'almost' : 'error');

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetter((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return <div className='letter' id={letterState}>{letter}</div>;
}

export default Letter;