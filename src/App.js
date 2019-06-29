import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Cards from './components/Card/Cards';

import { withStyles, MuiThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import styles from './App.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Asap Condensed',
    ],
  },
  palette: {
    primary: {
      light: '#bc477b',
      main: '#00838f',
      dark: '#560027',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#efdcd5',
      main: '#bcaaa4',
      dark: '#8c7b75',
      contrastText: '#000000',
    },
  },
});


class App extends React.Component {
  render() {
    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <ImageContainer />
        <Cards />
        </MuiThemeProvider>


    </div>
  );
}
}

export default withStyles(styles)(App);
