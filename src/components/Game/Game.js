import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });


function Game() {
  const [guesses, setGuesses] = React.useState([]); //create state to track the previous guesses
  const [gameStatus, setGameStatus] = React.useState('playing'); //state to control whether the user has won, lost, or is still playing
  const [letterStatuses, setLetterStatuses] = React.useState({}); //create state to be able to track and update keyboard presses and entries
  const [answer, setAnswer] = React.useState(() => sample(WORDS)); //create function-based state initializer to generate and track a new word when restarting

  function updateLetterStatuses(statuses) {``
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
      return newStatuses; //to return the updated status object
    })
  }
  // console.info({ answer });

  function restartGame() {
    setAnswer(sample(WORDS)); //pick a new random word on game restart
    setGuesses([]); //reset guesses upon any restart
    setGameStatus('playing'); //set the status of the game back to playing on restart
    setLetterStatuses({}); //clear out the keyboard and letter statuses upon reset

  }


  // React.useEffect(() => {
  //   console.log('Game Status Changed:', gameStatus);
  // }, [gameStatus]);
  return(
    <>
      <p className='subtitle'>Just like the NY Times...only, you're not in New York</p>
      <div className='how-to-play'>
        <h2>How To Play:</h2>
        <ul>
          <li>Guess the word in 6 tries or less</li>
          <li>Each guess must be a valid 5-letter word</li>
          <li>After each guess, the colors will show how close your guess was:</li>
          <ul>
            <li><span className='example correct'>Green</span> - Letter is correct and in right spot</li>
            <li><span className='example misplaced'>Yellow</span> - Letter is in the word but wrong spot</li>
            <li><span className='example incorrect'>Gray</span> - Letter is not in the word</li>
          </ul>
        </ul>
      </div>
      <GuessInput 
        setGuesses={setGuesses} 
        setGameStatus={setGameStatus} 
        answer={answer} 
        guesses={guesses} 
        gameStatus={gameStatus} 
        updateLetterStatuses={updateLetterStatuses} 

      />
      <GuessResults 
        guesses={guesses} 
        answer={answer} 
      />
      <Banner 
        gameStatus={gameStatus} 
        answer={answer} 
        numOfGuesses={guesses.length} 
        restartGame={restartGame}
      />
      <Keyboard 
        letterStatuses={letterStatuses} 
      />
    </>
  ) 
}

export default Game;
