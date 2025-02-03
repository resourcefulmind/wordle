import React from 'react';
import { range } from '../../utils';

function Guess({value}) {
  return (
    <p className='guess'>
      {range(5).map((index) => (
        <span key={index} className='cell'>
          {value[index] || ''} {/*display letter if available or empty string if it is not. */}
        </span>
      ))}
    </p>
  )
}

export default Guess;
