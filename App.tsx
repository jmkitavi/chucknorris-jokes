import React from 'react'

import { AppProvider } from './src/context'
import { MainNavigator } from './src/components/navigator'

const App = () => {
  return (
    <AppProvider>
      <MainNavigator />
    </AppProvider>
  )
}

export default App
