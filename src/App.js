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
    switch(this.state.currentPage) {
      case Pages.ACTIVE:
        return this.state.tasks.filter(t => !t.complete);
      case Pages.COMPLETE:
        return this.state.tasks.filter(t => t.complete);
    }
  }

  render() {
    return (
      <div className="App">  
        <header>
          <div className="top-bar">
            <Nav onNavClick={this.handlePageChange} selected={this.state.currentPage} />
          </div>
          <form onSubmit={this.handleSubmit}>
            <input type="text"  placeholder="Add Task" autoFocus={true} className="new-task"
            onChange={this.handleTextChange} value={this.state.text} /> 
          </form>
        </header>
        <TaskList 
          tasks={this.getFilteredTasks()}
          toggleComplete={this.toggleComplete} 
          deleteTask={this.deleteTask} 
        /> 
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <NavButton page={Pages.ACTIVE} 
          selected={this.props.selected} onNavClick={this.props.onNavClick} />
        </li>
        <li>
          <NavButton page={Pages.COMPLETE} 
          selected={this.props.selected} onNavClick={this.props.onNavClick} />
        </li>
      </ul>
    );
  }
}

class NavButton extends Component {
  render() {
    const selected = this.props.selected === this.props.page ? "selected" : null;
    return (
      <button 
        type="button"
        className={selected}
        onClick={() => this.props.onNavClick(this.props.page)}
      >
        {this.props.page}
      </button>
    )
  }
}

/*
class Main extends Component {
  render() {
    return (
      <div className="tasks">
        <TaskList tasks={this.props.tasks} page={this.props.page} 
        toggleComplete={this.props.toggleComplete} deleteTask={this.props.deleteTask} />
      </div>
    );
  }
}
*/

/*
class TaskList extends Component {
  render() {
    let filterCallback = null;
    if (this.props.page === Pages.ACTIVE) {
      filterCallback = (task) => {return !task.complete}
    }
    else if (this.props.page === Pages.COMPLETE) {
      filterCallback = (task) => {return task.complete}
    }
    const tasks = this.props.tasks.filter(filterCallback)

    return (
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} 
          toggleComplete={this.props.toggleComplete} deleteTask={this.props.deleteTask} />
        ))}
      </ul>
    );
  }
}
*/

const TaskList = ({ tasks, toggleComplete, deleteTask }) => (
  <ul className="tasks">
    {tasks.map(task => 
      <Task 
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

/*
class TaskItem extends Component {
  render() {
    const complete = this.props.task.complete ? 'complete' : '';
    return (
      <li className={`task-item ${complete}`}>
        <div className="t-cell">
          <div className="checkbox" 
          onClick={() => this.props.toggleComplete(this.props.task.id)} />
        </div>
        <div className="task-content t-cell">
          {this.props.task.title}
        </div>
        <div className="t-cell">
          <div className="delete"
          onClick={() => this.props.deleteTask(this.props.task.id)} />
        </div>
      </li>
    );
  }
}
*/

export default App;
