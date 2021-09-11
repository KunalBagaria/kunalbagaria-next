import '../styles/globals.scss'
import { useEffect, useState } from 'react'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from '../components/ThemeConfig'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
      setTheme(localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme);
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
