import React from 'react'

const RenderField = ({
  input,
  placeholder,
  type,
  meta: {error, touched, dirty, submitFailed, valid}
}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />

    {(((touched && dirty) || submitFailed) && error) && 
      <span>{error}</span>}

    {valid && 
      <span>valid</span>}
      
    <br/>
  </div>
)

export default RenderField
