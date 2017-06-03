import React from 'react';
import PropTypes from 'prop-types';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => (
  <ul className="tasks">
    {tasks.map(task => 
      <Task
        key={task.id} 
        task={task}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    )}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export const Task = ({ task, toggleComplete, deleteTask }) => (
  <li className={
    task.complete ? 'task-item complete' : 'task-item'
  }>
    <div>
      <div 
        className="checkbox"
        onClick={() => toggleComplete(task.id)}
      />
    </div>
    <div className="task-content">
      {task.title}
    </div>
    <div>
      <div 
        className="delete" 
        onClick={() => deleteTask(task.id)}
      />
    </div>
  </li>
);

Task.propTypes = {
  task: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default TaskList;
