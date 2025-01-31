import React from 'react';

function GuessResults({ guesses }) {
  return (
  <div className='guess-results'>
    {guesses.map((newGuess) => (
      <p key={newGuess.id} className='guess'>{newGuess.guess}</p>
    ))}
  </div>
  )
}

export default GuessResults;
