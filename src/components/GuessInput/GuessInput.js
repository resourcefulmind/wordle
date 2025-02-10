import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GuessInput({ setGuesses, setGameStatus, answer, guesses, gameStatus, updateLetterStatuses }) {
  const [guessTheInput, setGuessTheInput] = React.useState('');

  const submitGuess = (event) => {
    event.preventDefault(); //prevent default form submission behavior

    const upperCaseGuess = guessTheInput.toUpperCase(); //change value to uppercase

    setGuesses((prevGuesses) => [...prevGuesses, upperCaseGuess]); //append guessed word to list and set dynamic key

    const currentGuessCount = guesses.length + 1; //

    //check the guess and update the letter status here instead of GuessResult to avoid infinite loop
    const statuses = checkGuess(upperCaseGuess, answer);
    if (statuses) {
      updateLetterStatuses(statuses); // Update letter statuses for the visual keyboard

    }

    if (upperCaseGuess === answer) {
      setGameStatus('won'); //to update game status to won
    } else if(currentGuessCount === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost'); //to update game status to lost if user exhausts all attempts
    }

    setGuessTheInput(''); //clear input field
  }


  return (
    <div>
      <form 
        className='guess-input-wrapper'
        onSubmit={submitGuess}
      >
        <label htmlFor="guess-input">Enter your guess, choose wisely 😉</label>
        <input 
          id='guess-input' 
          type='text' 
          value={guessTheInput} 
          pattern='[A-Za-z]{1,5}' 
          maxLength={5}
          title='Your guess must be 1 to 5 letters (no numbers or special characters).'
          required
          onChange={(event) => setGuessTheInput(event.target.value)}
          disabled={gameStatus !== 'playing'} 
        />
      </form>
    </div>
  )
  
}

export default GuessInput;
