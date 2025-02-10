import React from 'react';

function Keyboard({ letterStatuses }) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Define letters to be on the keyboard

  return (
    <div className='keyboard'>
      {letters.split('').map((letter) => {
        const status = letterStatuses[letter] || ''; //get status for each letter
        return (
          <span key={letter} className={`key ${status}`}>
            {letter}
          </span>
        )
      })}
    </div>
  )
}

export default Keyboard;
