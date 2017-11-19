import React from 'react'
import {reduxForm} from 'redux-form'
import {createAccount} from '../actions'
import UserForm from './UserForm'
import {validateSignup, validateSignupAsync} from '../validate'

const SignupForm = reduxForm({
  form: 'signup',
  validate: validateSignup,
  onSubmit: createAccount,
  asyncValidate: validateSignupAsync,
  asyncBlurFields: ['email']
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
