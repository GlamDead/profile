/* eslint-disable filenames/match-regex */
import React from "react"
import "normalize.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../src/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
