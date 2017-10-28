const taskDisplayMode = (state = 'VIEW', action) => {
  switch (action.type) {
    case 'SET_TASK_DISPLAY_MODE':
      return action.mode
    default:
      return state
  }
}

export default taskDisplayMode
