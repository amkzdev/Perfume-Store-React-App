import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { AppRouter } from './route/AppRouter/AppRouter'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'
import { theme } from './theme/theme'

function App() {

  return (<ThemeProvider theme={responsiveFontSizes(theme)}>
    <AppRouter />
  </ThemeProvider>)
}

export default App
