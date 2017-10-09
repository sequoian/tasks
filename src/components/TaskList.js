import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = ({tasks, onTaskClick}) => (
  <ul id="task-list">
    {tasks.map(task => (
      <li>
        <Task
          key={task.id}
          {...task}
          onClick={() => onTaskClick(task.id)}
        />
      </li>
    ))}
  </ul>
)

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired
}

export default TaskList
