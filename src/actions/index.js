export const addTask = text => {
  return {
    type: 'ADD_TASK',
    id: Date.now(),
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTask = id => {
  return {
    type: 'TOGGLE_TASK',
    id
  }
}

export const setTaskDisplayMode = mode => {
  return {
    type: 'SET_TASK_DISPLAY_MODE',
    mode
  }
}
