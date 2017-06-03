import React, { Component } from 'react';
import NavBar, {Pages} from './Nav';
import AddTask from './AddTask';
import TaskList from './Task';

class App extends Component {
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      currentPage: Pages.ALL,
      text: '',
      tasks: []
    }
    // bind callbacks
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  /* Lifecycle */

  componentDidMount() {
    this.setState({
      tasks: this.fetchLocally('tasks')
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {tasks} = this.state;
    if (tasks !== prevState.tasks) {
      this.storeLocally('tasks', tasks);
    }
  }

  /* Callbacks */

  handlePageChange(page) {
    this.setState({
      currentPage: page
    });
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
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
      this.setState(prevState => {
        return {
          tasks: prevState.tasks.concat(newTask),
          text: ''
        }
      });
    }
  }

  toggleComplete(id) {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.map(task => {
          if (task.id === id) {
            task.complete = !task.complete
          }
          return task
        })
      }
    })
  }

  deleteTask(id) {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    })
  }

  /* Utility */

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
      case Pages.ALL:
        return tasks;
      case Pages.ACTIVE:
        return tasks.filter(task => !task.complete);
      case Pages.COMPLETE:
        return tasks.filter(task => task.complete);
      default:
        return [];
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
          addTask={this.handleSubmit}
          handleChange={this.handleTextChange}
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

export default App;
