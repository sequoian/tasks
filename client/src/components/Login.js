import React from 'react'
import {reduxForm} from 'redux-form'
import {loginUser} from '../actions'
import UserForm from './UserForm'
import {validateLogin} from '../validate'

const LoginForm = reduxForm({
  form: 'login',
  validate: validateLogin,
  onSubmit: loginUser
})(UserForm)

const Login = () => (
  <div>
    <h1>Welcome back!</h1>
    <LoginForm
      label="Log In"
    />
  </div>
)

export default Login
