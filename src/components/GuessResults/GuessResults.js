import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';


function GuessResults({ guesses, answer }) {
  
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const currentGuess = guesses[index] || '' //get guess for current row
        
        console.log(`Index: ${index}, Current Guess: ${currentGuess}, Answer: ${answer}`);  //Debugging line
        
        const statuses = currentGuess ? checkGuess(currentGuess, answer) : null; //checkGuess will validate the current Guess against the answer
        
        return <Guess key={index} statuses={statuses} />
      })}
    </div>
  )
}

export default GuessResults;
