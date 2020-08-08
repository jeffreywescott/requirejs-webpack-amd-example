import React from 'react'

const Shell = props => {
  return (
    <div>
      <h1>This is the Shell</h1>
      <hr />
      {props.children}
    </div>
  )
}

export default Shell
