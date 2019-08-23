import React, { Component } from "react";

//******* CSS *********/
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";

//********* MATERIAL UI **********/
import { Container, Button } from "@material-ui/core";

const styles = theme => ({
  heroContent: {
    backgroundColor: "#0C2340",
    flexGrow: 1,
    maxWidth: "100%",
    textAlign: "center",
    height: "100%",
    padding: theme.spacing(6)
  },
  linkButton: {
    display: "inline",
  },
  button: {
    margin: theme.spacing(2),
    fontSize: 30,
  }
});

class Contact extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <Container  className={classes.heroContent} id="contact">
          <main style={{ height: "100%" }} > 
            <div className={classes.linkButton} >
              <Button
                className={classes.button}
                color="secondary"
                href="https://www.linkedin.com/in/josephserrato/"
              >
                <i className="fab fa-linkedin"> LinkedIn </i>
              </Button>

              <Button
                className={classes.button}
                color="secondary"
                href="mailto:joseph.serrato@gmail.com"
              >
                <i className="fas fa-envelope"> Email </i>
              </Button>

              <Button
                className={classes.button}
                color="secondary"
                href="https://github.com/capp85"
              >
                <i className="fab fa-github"> GitHub </i>
              </Button>
            </div>
          </main>
        </Container>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Contact);
