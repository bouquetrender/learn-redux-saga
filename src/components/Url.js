import React from 'react'

const Counter = ({ url, onFillurl, error }) => {
  return (
    <div>
      <button onClick={onFillurl}>
        Get redux-saga download url
      </button>
      <div>
        Url: {url || 'empty'}
      </div>
      <div style={{color: 'red'}}>
        {error || ''}
      </div>
    </div>
  )
}

export default Counter
