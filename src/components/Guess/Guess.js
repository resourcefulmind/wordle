import React from 'react';
import { range } from '../../utils';

function Guess({statuses}) {
  return (
    <p className='guess'>
      {range(5).map((index) => {
        const letter = statuses ? statuses[index]?.letter || '' : '';
        const status = statuses ? statuses[index]?.status || '' : '';
        return(
        <span key={index} className={`cell ${status}`}>
          {letter}          
        </span>
        );
      })}
    </p>
  )
}

export default Guess;
