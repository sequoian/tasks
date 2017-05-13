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
          <NavButton page={Pages.SCHEDULED} 
          selected={this.props.selected} action={this.props.action} />
        </li>
        <li>
          <NavButton page={Pages.OVERDUE} 
          selected={this.props.selected} action={this.props.action} />
        </li>
        <li>
          <NavButton page={Pages.ACTIVE} 
          selected={this.props.selected} action={this.props.action} />
        </li>
        <li>
          <NavButton page={Pages.COMPLETE} 
          selected={this.props.selected} action={this.props.action} />
        </li>
      </ul>
    );
  }
}

class NavButton extends Component {
  render() {
    return (
      <button 
        type="button"
        className={this.props.selected === this.props.page && "selected"} 
        onClick={() => this.props.action(this.props.page)}
      >
        {this.props.page}
      </button>
    )
  }
}

class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        <h2>{this.props.header}</h2>
      </div>
    );
  }
}



export default App;
