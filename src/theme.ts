import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#ffcdd2', //100
        main: '#e57373', //300
        dark: '#ef5350', //400
      contrastText: '#fff',
    },
    secondary: {
      light: '#d7ccc8',
      main: '#a1887f',
      dark: '#8d6e63',
      contrastText: '#000',
    },
  },
});

export default theme;