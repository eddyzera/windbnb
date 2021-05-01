import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import ThemeProvider from './provider/ThemeProvider'
import AppProvider from './provider/AppProvider'

ReactDOM.render(
    <ThemeProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeProvider>,
    document.getElementById('root')
)
