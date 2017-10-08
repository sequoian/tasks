import React from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ text, addTask, handleChange }) => (
  <form onSubmit={addTask}>
    <input 
      type="text" 
      id="new-task"
      value={text}
      onChange={handleChange} 
      placeholder="Add Task" 
      autoFocus={true}  
    /> 
    <button>Add</button>
  </form>
);

AddTask.propTypes = {
  text: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default AddTask;
