import { h, render } from 'preact'

let root

function init () {
  const App = require('./App').default
  root = render(<App />, document.body, root)
}

// in development, set up HMR:
if (module.hot) {
  require('preact/devtools')
  module.hot.accept('./App', () => global.requestAnimationFrame(init))
}

init()
