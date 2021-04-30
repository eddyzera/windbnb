import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import ThemeProvider from './provider/ThemeProvider'

ReactDOM.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
    document.getElementById('root')
)
