import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FetchAPI from '../services/api'
export const AppContext = createContext({})

export default function AppProvider ({ children }) {
  const [immobiles, setImmobiles] = useState([])
  useEffect(() => {
    FetchAPI().then(data => setImmobiles(data))
  }, [])
  const store = {
    value: 1,
    immobiles
  }

  return (
        <AppContext.Provider value={store}>
            { children }
        </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired
}
