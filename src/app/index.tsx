import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Routes from '../routes'

const GlobalStyle = createGlobalStyle``

const defaultTheme = {}

const App: React.FC = () => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={{ ...defaultTheme }}>
            <Routes />
        </ThemeProvider>
        ;
    </>
)

export default App
