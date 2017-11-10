import React from 'react'
import {reduxForm} from 'redux-form'
import {createAccount} from '../actions'
import UserForm from './UserForm'
import {validateSignup} from '../validate'

const SignupForm = reduxForm({
  form: 'signup',
  validate: validateSignup,
  onSubmit: createAccount
})(UserForm)

const Signup = () => (
  <div>
    <h1>Create an account</h1>
    <SignupForm 
      label="Sign Up"
    />
  </div>
)

export default Signup
