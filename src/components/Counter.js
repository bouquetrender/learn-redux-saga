import React from 'react'

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>
        Increment
      </button>
      {' '}
      <button onClick={onDecrement}>
        Decrement
      </button>
      <div>
        Clicked: {value} times
      </div>
    </div>
  )
}

export default Counter
