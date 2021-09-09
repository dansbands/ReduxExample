import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import watchAll from './sagas/saga'
import App from './App'
import reducer from './store/reducer'
import './index.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchAll)
console.log({store})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')  
)