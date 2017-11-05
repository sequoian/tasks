import React from 'react'
import FilterLink from '../containers/FilterLink'

const FilterNav = () => (
  <ul id="filter-nav">
    <li>
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
    </li>
    <li>
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
    </li>
    <li>
      <FilterLink filter="SHOW_COMPLETED">
        Complete
      </FilterLink>
    </li>
  </ul>
)

export default FilterNav
