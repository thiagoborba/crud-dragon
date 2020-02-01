import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './Store/Store'
import Routes from './Routes/Routes'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeProvider from './theme/theme'

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes/>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default App
