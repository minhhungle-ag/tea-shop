import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export let theme = createTheme({
  palette: {
    primary: {
      light: '#69876c',
      main: '#446948',
      dark: '#2f4932',
    },
  },
  typography: {
    fontFamily: 'Alice, sans-serif',
    fontSize: 18,
  },
})
theme = responsiveFontSizes(theme)
