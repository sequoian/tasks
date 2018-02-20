import {connect} from 'react-redux'
import {toggleTask, editTask, deleteTask} from '../actions'
import TaskList from '../components/TaskList'

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return tasks.filter(task => task.completed)
    case 'SHOW_ACTIVE':
      return tasks.filter(task => !task.completed)
    default:
      return tasks
  }
}

const mapStateToProps = state => {
  return {
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(toggleTask(id))
    },
    onTaskChange: (id, text) => {
      dispatch(editTask(id, text))
    },
    onTaskDelete: id => {
      dispatch(deleteTask(id))
    }
  }
}

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default VisibleTaskList
