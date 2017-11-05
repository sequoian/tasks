import React from 'react'
import FilterNav from './FilterNav'
import AddTask from '../containers/AddTask'
import VisibleTaskList from '../containers/VisibleTaskList'
import EditButton from '../containers/EditButton'
import {Link} from 'react-router-dom'

const App = () => (
  <div id="app">
    <Link to="/signup">Sign Up</Link> | <Link to="/login">Log In</Link>
    <EditButton />
    <AddTask />
    <FilterNav />
    <VisibleTaskList />
  </div>
)

export default App
