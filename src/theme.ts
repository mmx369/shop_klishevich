import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { Theme } from '@mui/material/styles'

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#e6ee9c',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'white',
    },
  },
})

export default theme
