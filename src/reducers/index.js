import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import tasks from './tasks'
import visibilityFilter from './visibilityFilter'
import taskDisplayMode from './taskDisplayMode'

const taskApp = combineReducers({
  tasks,
  visibilityFilter,
  taskDisplayMode,
  form: formReducer
})

export default taskApp
