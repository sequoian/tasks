import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions'

let AddTask = ({dispatch}) => {
  let input
  
  return (
    <form
      id="add-task"
      onSubmit={e => {
        e.preventDefault()
        if (input.value.trim()) {
          dispatch(addTask(input.value))
          input.value = ''
        }
        document.getElementById('add-text').focus()
      }}
    >
      <input 
        id="add-text"
        ref={node => input = node}
        placeholder="Add Task"
        autoFocus={true}
      />
      <button>Add</button>
    </form>
  )
}

AddTask = connect()(AddTask)

export default AddTask;
