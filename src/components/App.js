import React from 'react'
import FilterNav from './FilterNav'
import AddTask from '../containers/AddTask'
import VisibleTaskList from '../containers/VisibleTaskList'

const App = () => (
  <div id="app">
    <AddTask />
    <FilterNav />
    <VisibleTaskList />
  </div>
)

export default App
