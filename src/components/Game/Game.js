import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner/Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guesses, setGuesses] = React.useState([]); //create state to track the previous guesses
  const [gameStatus, setGameStatus] = React.useState('playing'); //state to control whether the user has won, lost, or is still playing

  React.useEffect(() => {
    console.log('Game Status Changed:', gameStatus);
  }, [gameStatus]);
  return(
    <>
      <p>Just like the NY Times...only, you're not in New York</p>
      <GuessInput 
        setGuesses={setGuesses} 
        setGameStatus={setGameStatus} 
        answer={answer} 
        guesses={guesses} 
        gameStatus={gameStatus} 
      />
      <GuessResults 
        guesses={guesses} 
        answer={answer} 
      />
      <Banner 
        gameStatus={gameStatus} 
        answer={answer} 
        numOfGuesses={guesses.length} 
      />

    </>
    
    
  
  ) 
}

export default Game;
