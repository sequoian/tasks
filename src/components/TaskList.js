import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = ({
  tasks,
  onTaskClick, 
  onTaskChange,
  onTaskDelete
}) => (
  <ul id="task-list">
    {tasks.map(task => (
      <li key={task.id}>
        <Task
          {...task}
          onChange={onTaskChange}
          onToggle={() => onTaskClick(task.id)}
          onDelete={() => onTaskDelete(task.id)}
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
  onTaskClick: PropTypes.func.isRequired,
  onTaskChange: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired
}

export default TaskList
