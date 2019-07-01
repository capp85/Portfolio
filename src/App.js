import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';

// ******* COMPONENTS *******
import NavBar from "./components/NavBar/NavBar";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import Cards from "./components/Card/Cards";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import styles from "./App.css";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ["Asap Condensed"]
  },
  palette: {
    primary: {
      light: "#bc477b",
      main: "#005A9C",
      dark: "#560027",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#efdcd5",
      main: "#A5ACAF",
      dark: "#8c7b75",
      contrastText: "#000000"
    }
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <ParallaxProvider>

      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <NavBar />

          <ImageContainer />
          <Cards />
          <About />
          <Contact />
        </MuiThemeProvider>
      </div>
      </ParallaxProvider>
    );
  }
}

export default withStyles(styles)(App);
