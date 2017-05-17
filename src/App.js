import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './Task.css';

// Enum for the page states.  The string is the label for the nav buttons
const Pages = {
  ACTIVE: 'active',
  COMPLETE: 'complete'
}

const dummy_tasks = [
  {id: 1, title: 'Take out the trash barrels', complete: true},
  {id: 2, title: 'Do the dishes', complete: false},
  {id: 3, title: 'Get gas', complete: false},
  {id: 4, title: 'Finish Tasks app', complete: false},
  {id: 5, title: 'Hike Mt. Baldy', complete: false},
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: Pages.ACTIVE,
      text: '',
      tasks: dummy_tasks
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
      this.setState((prevState) => ({
        tasks: prevState.tasks.concat(newTask),
        text: ''
      }));
    }
  }

  toggleComplete(id) {
    this.setState((prevState) => {
      prevState.tasks.map((task) => {
        if (task.id === id) {
          return task.complete = task.complete ? false : true; 
        }
        else {
          return null;
        }
      });
      return {tasks: prevState.tasks};
    });
  }

  deleteTask(id) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }));
  }

  validateNewTask(event) {
    const ENTER_KEY = 13;
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    if (this.state.text.trim()) {

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
        <Main page={this.state.currentPage} tasks={this.state.tasks}
        toggleComplete={this.toggleComplete} deleteTask={this.deleteTask} /> 
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

export default App;
