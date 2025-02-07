import React from 'react';

function Banner({ gameStatus, answer, numOfGuesses }) {

  if (gameStatus === 'playing') {
    return null; //nothing to be shown while game is still being played
  } 
  return (
  <div className={`banner ${gameStatus === 'won' ? 'happy' : 'sad'}`}>
    {gameStatus === 'won' ? (
      <p>
        <strong>Congratulations wise one!</strong> You got it in{' '}
        <strong>{numOfGuesses} guesses</strong>.
      </p>
    ) : (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    )}
  </div>
  )
}

export default Banner;