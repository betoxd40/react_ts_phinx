import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Routes from '../routes'

const GlobalStyle = createGlobalStyle`
     html, body {
        width: 100%;
        height: 100%;
        font-family: "Roboto";
        margin: 0px;
        padding: 0px;
    }
`

const defaultTheme = {}

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ ...defaultTheme }}>
      <Routes />
    </ThemeProvider>
  </>
)

export default App
