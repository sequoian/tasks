import React from 'react';
import {shallow,mount} from 'enzyme';
import NavBar, {NavLink} from '../Nav';

describe('<NavBar />', () => {
  it('renders self', () => {
    const wrapper = shallow(<NavBar />);
  });

  it('renders nav links', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find(NavLink).length).toBeGreaterThan(0);
  });
});

function setupNavLink(activePage) {
  return shallow(
    <NavLink
      thisPage='TEST'
      currentPage={activePage}
    >
      Test Link
    </NavLink>
  )
}

describe('<NavLink />', () => {
  it('renders self', () => {
    const wrapper = setupNavLink('TEST');
  });

  it('renders as selected', () => {
    const wrapper = setupNavLink('TEST');
    expect(wrapper.find('.selected').length).toEqual(1);
  });

  it('renders as unselected', () => {
    const wrapper = setupNavLink('OTHER');
    expect(wrapper.find('.selected').length).toEqual(0);
  });
});
