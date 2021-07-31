import '../styles/globals.scss'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from '../components/ThemeConfig'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
