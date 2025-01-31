import React from 'react';

function GuessInput({ setGuesses }) {
  const [guessTheInput, setGuessTheInput] = React.useState('');

  const submitGuess = (event) => {
    event.preventDefault(); //prevent default form behavior

    const upperCaseGuess = guessTheInput.toUpperCase(); //change value to uppercase

    const newGuess = { id: crypto.randomUUID(), guess: upperCaseGuess };

    setGuesses((prevGuesses) => [...prevGuesses, newGuess]); //append guessed word to list and set dynamic key

    console.log(newGuess);

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
        />
      </form>
      <p>Hello: {guessTheInput}</p>
    </div>
  )
  
}

export default GuessInput;
