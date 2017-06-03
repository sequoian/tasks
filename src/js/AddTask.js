import React from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ text, addTask, handleChange }) => (
  <form onSubmit={addTask}>
    <input type="text" 
      placeholder="Add Task" 
      autoFocus={true} 
      className="new-task"
      onChange={handleChange} 
      value={text} 
    /> 
  </form>
);

AddTask.propTypes = {
  text: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default AddTask;
