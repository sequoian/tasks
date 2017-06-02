import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './Task.css';

// Enum for the page states.  The string is the label for the nav buttons
const Pages = {
  ACTIVE: 'active',
  COMPLETE: 'complete'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: Pages.ACTIVE,
      text: '',
      tasks: this.fetchLocally('tasks')
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handlePageChange(page) {
    this.setState({currentPage: page});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = this.state.text.trim();
    if (text) {
      const newTask = {
        title: this.state.text,
        id: Date.now(),
        complete: false
      };
      this.setState((prevState) => {
        const tasks = prevState.tasks.concat(newTask)
        this.storeLocally('tasks', tasks);
        return {
          tasks: prevState.tasks.concat(newTask),
          text: ''
        }
      });
    }
  }

  toggleComplete(id) {
    this.setState((prevState) => {
      const tasks = prevState.tasks.map((task) => {
        if (task.id === id) {
          task.complete = task.complete ? false : true; 
        }
        return task;
      });
      this.storeLocally('tasks', tasks);
      return {tasks: tasks};
    });
  }

  deleteTask(id) {
    this.setState((prevState) => {
      const tasks = prevState.tasks.filter(task => task.id !== id);
      this.storeLocally('tasks', tasks);
      return {tasks: tasks};
    });
  }

  storeLocally(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  fetchLocally(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data) || [];
  }

  getFilteredTasks() {
    const { tasks } = this.state;
    switch(this.state.currentPage) {
      case Pages.ACTIVE:
        return tasks.filter(task => !task.complete);
      case Pages.COMPLETE:
        return tasks.filter(task => task.complete);
      default:
        return tasks
    }
  }

  render() {
    return (
      <div className="App">  
        <NavBar
          currentPage={this.state.currentPage}
          setPage={this.handlePageChange}
        />
        <AddTask 
          text={this.state.text}
          addTask={this.state.handleSubmit}
          handleChange={this.state.handleTextChange}
        />
        <TaskList 
          tasks={this.getFilteredTasks()}
          toggleComplete={this.toggleComplete} 
          deleteTask={this.deleteTask} 
        /> 
      </div>
    );
  }
}

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
)

const NavBar = ({ currentPage, setPage }) => (
  <ul className="nav">
    <NavLink
      thisPage={Pages.ACTIVE}
      currentPage={currentPage}
      setPage={setPage}
    >
      Active
    </NavLink>
    <NavLink
      thisPage={Pages.COMPLETE}
      currentPage={currentPage}
      setPage={setPage}
    >
      Complete
    </NavLink>
  </ul>
)


const NavLink = ({ children, thisPage, currentPage, setPage }) => (
  <li>
    <a href="#"
      className={
        currentPage === thisPage ? "selected" : null
      }
      onClick={event => {
        event.preventDefault()
        setPage(thisPage)
      }}
    >
      {children}
    </a>
  </li>
)

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
)

const Task = ({ task, toggleComplete, deleteTask }) => (
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

export default App;
