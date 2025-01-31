import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]); //create state to track the previous guesses

  return(
    <>
      <p>Just like the NY Times...only, you're not in New York</p>
      <GuessInput setGuesses={setGuesses} />
      <GuessResults guesses={guesses} />
    </>

  ) 
}

export default Game;
