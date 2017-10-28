import React from 'react'
import FilterNav from './FilterNav'
import AddTask from '../containers/AddTask'
import VisibleTaskList from '../containers/VisibleTaskList'
import EditButton from '../containers/EditButton'

const App = () => (
  <div id="app">
    <EditButton />
    <AddTask />
    <FilterNav />
    <VisibleTaskList />
  </div>
)

export default App
