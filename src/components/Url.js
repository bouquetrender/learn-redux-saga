import React from 'react'

const Counter = ({ url, onFillurl }) => {
  return (
    <div>
      <button onClick={onFillurl}>
        Get redux-saga download url
      </button>
      <div>
        Url: {url || 'empty'}
      </div>
    </div>
  )
}

export default Counter
