import React from 'react'
import PropTypes from 'prop-types'
import {Field} from 'redux-form'
import RenderField from './RenderField'

const UserForm = ({handleSubmit, submitting, error, label}) => (
  <form 
    method="post" 
    onSubmit={handleSubmit}
  >
    {error && 
      <div>{error}</div>}
    <Field
      name="email"
      component={RenderField}
      type="email"
      placeholder="Email"
    />
    <Field
      name="password"
      component={RenderField}
      type="password"
      placeholder="Password"
    />
    <button disabled={submitting}>
      {label}
    </button>
  </form>
)

UserForm.propTypes = {
  label: PropTypes.string.isRequired
}

export default UserForm
