import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setTaskDisplayMode} from '../actions'

const EditButton = ({taskDisplayMode, onClick}) => {
  let btnText, newMode
  
  if (taskDisplayMode === 'EDIT') {
    btnText = 'Done'
    newMode = 'VIEW'
  }
  else {
    btnText = 'Edit'
    newMode = 'EDIT'
  }

  return (
    <div>
      <button onClick={() => onClick(newMode)}>
        {btnText}
      </button>
    </div>
  )
}

EditButton.propTypes = {
  taskDisplayMode: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}


const mapStateToProps = state => {
  return {
    taskDisplayMode: state.taskDisplayMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: mode => {
      dispatch(setTaskDisplayMode(mode))
    }
  }
}

const EditButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditButton)

export default EditButtonContainer
