import React from 'react'
import FilterNav from './FilterNav'
import AddTask from '../containers/AddTask'
import VisibleTaskList from '../containers/VisibleTaskList'
import Header from '../components/Header'

const App = () => (
  <div id="app">
    <Header>
      <AddTask />
      <FilterNav />
    </Header>
    <VisibleTaskList />
  </div>
)

export default App
