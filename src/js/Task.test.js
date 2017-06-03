import React from 'react';
import {shallow} from 'enzyme';
import TaskList, {Task} from './Task';

function taskListSetup() {
  const props = {
    tasks: []
  }

  return shallow(
    <TaskList {...props} />
  )
}

const oneTask = [{id: 1, title: 'Test Task', complete: false}]
const twoTasks = oneTask.concat({id: 2, title: 'Test 2', complete: false})

describe('<TaskList />', () => {
  it('renders self', () => {
    const wrapper = taskListSetup();
  });

  it('renders tasks from props', () => {
    const wrapper = taskListSetup();
    expect(wrapper.find(Task).length).toEqual(0);
    wrapper.setProps({tasks: oneTask});
    expect(wrapper.find(Task).length).toEqual(1);
    wrapper.setProps({tasks: twoTasks});
    expect(wrapper.find(Task).length).toEqual(2);
  });
});

function taskSetup(isComplete) {
  return shallow(
    <Task
      task={{id: 1, title: 'Test Task', complete: isComplete}}
    />
  )
}

describe('<Task />', () => {
  it('renders self', () => {
    const wrapper = taskSetup(false);
  });

  it('shows uncompleted task', () => {
    const wrapper = taskSetup(false);
    expect(wrapper.find('.complete').length).toEqual(0);   
  });

  it('shows completed task', () => {
    const wrapper = taskSetup(true);
    expect(wrapper.find('.task-item.complete').length).toEqual(1);
  })

  it('renders checkbox', () => {
    const wrapper = taskSetup(true);
    expect(wrapper.find('.checkbox').length).toEqual(1);
  })

  it('renders delete button', () => {
    const wrapper = taskSetup(true);
    expect(wrapper.find('.delete').length).toEqual(1);
  })

  it('renders task text', () => {
    const wrapper = taskSetup(true);
    expect(wrapper.contains('Test Task')).toBe(true);
  })
});