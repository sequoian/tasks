import {combineReducers} from 'redux'
import tasks from './tasks'
import visibilityFilter from './visibilityFilter'
import taskDisplayMode from './taskDisplayMode'

const taskApp = combineReducers({
  tasks,
  visibilityFilter,
  taskDisplayMode
})

export default taskApp
