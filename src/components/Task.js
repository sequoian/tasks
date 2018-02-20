import React from 'react'
import PropTypes from 'prop-types'

const Task = ({onClick, completed, text, onDelete, onChange}) => (
  <div className={completed ? "task complete" : "task"}>
    <div onClick={onClick}>
      O
    </div>
    <div>
      {text}
    </div>
    <button onClick={onDelete}>
      X
    </button>
  </div>
)

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Task
