import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TaskContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
    this.startEdit = this.startEdit.bind(this)
    this.stopEdit = this.stopEdit.bind(this)
  }

  startEdit() {
    this.setState({edit: true})
  }

  stopEdit() {
    this.setState({edit: false})
  }

  render() {
    const {id, text, onChange} = this.props
    let textComponent = this.state.edit ? (
      <EditText
        id={id}
        text={text}
        onChange={onChange}
        stopEdit={this.stopEdit}
      />
    ) : (
      <DisplayText
        text={text}
        startEdit={this.startEdit}
      />
    )

    return (
      <Task {...this.props}>
        {textComponent}
      </Task>
    )
  }
}

const Task = ({completed, onToggle, onDelete, children}) => (
  <div className={completed ? "task complete" : "task"}>
    <div className="cbox-wrap">
      <div 
        className="checkbox"
        onClick={onToggle}  
      >
        <div className="check" />
      </div>
    </div>
    {children}
    <button onClick={onDelete}>
      ×
    </button>
  </div>
)

const DisplayText = ({text, startEdit}) => (
  <div
    className='task-display'
    onClick={startEdit}
  >
    <div className="text">{text}</div>
  </div>
)

const EditText = ({id, text, onChange, stopEdit}) => (
  <div className='task-edit'>
    <input
      value={text}
      onChange={e => onChange(id, e.target.value)}
      onBlur={stopEdit}
      onKeyPress={e => {
        if (e.key === 'Enter') {
          e.preventDefault()
          stopEdit()
        }
      }}
      autoFocus
      onFocus={e => {
        const tmp = e.target.value
        e.target.value = ''
        e.target.value = tmp
      }}
    />
  </div>
)

TaskContainer.propTypes = { 
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TaskContainer
