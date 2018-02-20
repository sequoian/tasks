import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './components/App'
import taskApp from './reducers'
import {loadState, saveState} from './utility/localStorage'

import './css/reset.css'
import './css/index.css'
import './css/App.css'
import './css/TaskList.css'
import './css/Task.css'
import './css/FilterNav.css'
import './css/AddTask.css'

const persistedState = loadState()
const store = createStore(taskApp, persistedState)

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks
  })
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
