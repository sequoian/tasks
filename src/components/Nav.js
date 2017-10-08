import React from 'react';
import PropTypes from 'prop-types';

// Enum for the page states
const Pages = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETE: 'complete',
  
}

const NavBar = ({ currentPage, setPage }) => (
  <ul className="nav">
    <NavLink
      thisPage={Pages.ALL}
      currentPage={currentPage}
      setPage={setPage}
    >
      All
    </NavLink>
    <NavLink
      thisPage={Pages.ACTIVE}
      currentPage={currentPage}
      setPage={setPage}
    >
      Active
    </NavLink>
    <NavLink
      thisPage={Pages.COMPLETE}
      currentPage={currentPage}
      setPage={setPage}
    >
      Complete
    </NavLink>
  </ul>
);

NavBar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
};

export const NavLink = ({ children, thisPage, currentPage, setPage }) => (
  <li>
    <a href="#"
      className={
        currentPage === thisPage ? "selected" : null
      }
      onClick={event => {
        event.preventDefault()
        setPage(thisPage)
      }}
    >
      {children}
    </a>
  </li>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  thisPage: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
};

export default NavBar;

export {Pages}
