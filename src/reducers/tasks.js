const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TASK':
      return state.map(task =>
        (task.id === action.id)
        ? {...task, completed: !task.completed}
        : task
      )
    case 'EDIT_TASK':
      return state.map(task => 
        (task.id === action.id)
        ? {...task, text: action.text}
        : task
      )
    default:
      return state
  }
}

export default tasks
