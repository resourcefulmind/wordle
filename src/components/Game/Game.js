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
  const [letterStatuses, setLetterStatuses] = React.useState({}); //create state to be able to track and update keyboard presses and entries

  function updateLetterStatuses(statuses) {
    setLetterStatuses((prevStatuses) => {
      const newStatuses = {...prevStatuses}; //take the previous status from checkGuess in GuessResults
      
      statuses.forEach(({ letter, status }) => {
        const currentStatus = newStatuses[letter];
        
        //update keyboard status only if the new status has a higher priority
        const priorityOrder = { 
          correct: 3, 
          misplaced: 2, 
          incorrect: 1, 
        };

        if (!currentStatus || priorityOrder[status] > priorityOrder[currentStatus]) {
          newStatuses[letter] = status;
        }
      });
      console.log(newStatuses);

      return newStatuses; //to return the updated status object
    })

    
  }

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
        updateLetterStatuses={updateLetterStatuses} 
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
