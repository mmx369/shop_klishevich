import { purple } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { Theme } from '@mui/material/styles'

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
})

export default theme
