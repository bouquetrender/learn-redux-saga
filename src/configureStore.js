import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(reducer, initialState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}
