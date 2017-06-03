import React from 'react';
import {shallow,mount} from 'enzyme';
import AddTask from './AddTask';

describe('<AddTask />', () => {
  it('renders self', () => {
    const wrapper = shallow(<AddTask />);
  });

  it('renders input and button', () => {
    const wrapper = shallow(<AddTask />);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('renders text from props', () => {
    const wrapper = shallow(<AddTask />);
    expect(wrapper.find('input').props().value).toBeFalsy();
    wrapper.setProps({text: 'test'})
    expect(wrapper.find('input').props().value).toEqual('test');
  });
});