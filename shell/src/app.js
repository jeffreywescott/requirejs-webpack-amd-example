import React from 'react'
import { render } from 'react-dom'

import Shell from './Shell.js'

// load the remote (asynchronoiusly), then render it using react
requirejs(['remote'], ({default: Remote}) => {
  const shell = (
    <Shell>
      <Remote/>
    </Shell>
  )
  render(shell, document.getElementById('app-root'))
})
