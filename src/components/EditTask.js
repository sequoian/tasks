import React from 'react'
import PropTypes from 'prop-types'

const EditTask = ({id, text, onChange, onDelete}) => (
  <div className="edit-task">
    <button>Up</button>
    <button>Down</button>
    <input
      value={text}
      onChange={e => 
        onChange(
          id,
          e.target.value,
        )
      }
    />
    <button onClick={onDelete}>
      Delete
    </button>
  </div>
)

EditTask.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default EditTask
