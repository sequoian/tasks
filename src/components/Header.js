import React from 'react'

const Header = ({children}) => (
  <div id="header">
    <div className="container">
      {children}
    </div>
  </div>
)

export default Header