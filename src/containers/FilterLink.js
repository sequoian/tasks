import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'

const Link = ({active, children, onClick}) => (
  <a
    href={'#/' + children}
    className={active ? "active" : null}
    onClick={e => {
      e.preventDefault()
      onClick()
    }}
  >
    {children}
  </a>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

/* Filter Link */

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
