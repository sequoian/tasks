import React, { Component } from 'react';
import './App.css';

// Enum for the page states.  The string is the label for the nav buttons
const Pages = {
  SCHEDULED: 'scheduled',
  OVERDUE: 'overdue',
  ACTIVE: 'active',
  COMPLETE: 'complete',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: Pages.SCHEDULED,
      text: '',
      tasks: []
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePageChange(page) {
    this.setState({currentPage: page});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(newTask),
      text: ''
    }));
  }

  render() {
    return (
      <div className="App">
        <Main header={this.state.currentPage} tasks={this.state.tasks} />
        <Nav onNavClick={this.handlePageChange} selected={this.state.currentPage} />
        <form onSubmit={this.handleSubmit}>
          <input type="text"  placeholder="Add Task" 
          onChange={this.handleTextChange} value={this.state.text} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <NavButton page={Pages.SCHEDULED} 
          selected={this.props.selected} onNavClick={this.props.onNavClick} />
        </li>
        <li>
          <NavButton page={Pages.OVERDUE} 
          selected={this.props.selected} onNavClick={this.props.onNavClick} />
        </li>
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
        <h2>{this.props.header}</h2>
        <TaskList tasks={this.props.tasks} />
      </div>
    );
  }
}

class TaskList extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    );
  }
}

export default App;
