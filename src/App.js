import React, { Component } from 'react';
import './App.css';

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
      currentPage: Pages.SCHEDULED
    }
    this.changePage = this.changePage.bind(this);
  }
  changePage(page) {
    this.setState({currentPage: page});
  }
  render() {
    return (
      <div className="App">
        <Tasks header={this.state.currentPage} />
        <Nav action={this.changePage} selected={this.state.currentPage} />
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <button className={this.props.selected === Pages.SCHEDULED && "active"} type="button" onClick={() => this.props.action(Pages.SCHEDULED)}>
            Scheduled
          </button>
        </li>
        <li>
          <button className={this.props.selected === Pages.OVERDUE && "active"} type="button" onClick={() => this.props.action(Pages.OVERDUE)}>
            Overdue
          </button>
        </li>
        <li>
          <button className={this.props.selected === Pages.ACTIVE && "active"} type="button" onClick={() => this.props.action(Pages.ACTIVE)}>
            Active
          </button>
        </li>
        <li>
          <button className={this.props.selected === Pages.COMPLETE && "active"} type="button" onClick={() => this.props.action(Pages.COMPLETE)}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        <h2>{this.props.header}</h2>
        {this.props.comp}
      </div>
    );
  }
}



export default App;
