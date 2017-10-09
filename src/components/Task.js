import React from 'react'
import PropTypes from 'prop-types'

const Task = ({onClick, completed, text}) => (
  <div 
    className={completed ? "task complete" : "task"}
    onClick={onClick}
  >
    {text}
  </div>
)

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Task
