import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore'
import rootSaga from './sagas/sagas'

import Counter from './components/Counter'
import Url from './components/Url'
import './index.css';

const store = configureStore()
store.runSaga(rootSaga)

const action = type => store.dispatch({type})
function render () {
  const { num, url, msg, error } = store.getState()
  ReactDOM.render(
    <div>
      <Url
        error={error}
        url={url}
        onFillurl={() => action('FILLURL_ASYNC')}
      />
      <br />
      <Counter
        value={num}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
      />
      <span>{msg}</span>
    </div>,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)

registerServiceWorker()
