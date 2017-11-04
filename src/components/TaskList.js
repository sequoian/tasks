import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
import EditTask from './EditTask'

const TaskList = ({
  tasks,
  onTaskClick, 
  taskDisplayMode,
  onTaskChange,
  onTaskDelete
}) => {
  const tasksByMode = tasks.map(task => {
    switch (taskDisplayMode) {
      case 'EDIT':
        return (
          <EditTask 
            key={task.id}
            {...task}
            onChange={onTaskChange}
            onDelete={() => onTaskDelete(task.id)}
          />
        )
      default:
        return (
          <Task
            key={task.id}
            {...task}
            onClick={() => onTaskClick(task.id)}
          />
        )
    }
  })

  return (
    <ul id="task-list">
      {tasksByMode.map(task => (
        <li key={task.key}>
          {task}
        </li>
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  taskDisplayMode: PropTypes.string.isRequired,
  onTaskChange: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired
}

export default TaskList