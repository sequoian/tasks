import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Root from './components/Root'
import taskApp from './reducers'
import {loadState, saveState} from './utility/localStorage'

import './css/reset.css'
import './css/app.css'

const persistedState = loadState()
const store = createStore(taskApp, persistedState)

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks
  })
})

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
