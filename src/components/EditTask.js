import React from 'react'
import PropTypes from 'prop-types'

const EditTask = ({text}) => (
  <div className="edit-task">
    <button>Up</button>
    <button>Down</button>
    <input
      value={text}
    />
    <button>Delete</button>
  </div>
)

EditTask.propTypes = {
  text: PropTypes.string.isRequired
}

export default EditTask
