import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
// import Grid from '@material-ui/core/Grid'
import Button from "@material-ui/core/Button";

const styles = theme => ({
  heroContent: {
    backgroundColor: "#0C2340",
    padding: theme.spacing(8, 0, 6)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  button: {
    margin: theme.spacing(12),
    fontSize: 30,
  }
});

class Contact extends Component {
  render(props) {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <main>
          <div className={classes.heroContent}>
            <Container>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="secondary"
                gutterBottom
              >
                Via:
              </Typography>

              <Button
                className={classes.button}
                align="cneter"
                color="secondary"
                href="https://www.linkedin.com/in/josephserrato/"
              >
                <i className="fab fa-linkedin">LinkedIn</i>
              </Button>

              <Button
                className={classes.button}
                color="secondary"
                href="mailto:joseph.serrato@gmail.com"
              >
                <i className="fas fa-envelope">Email</i>
              </Button>

              <Button
                className={classes.button}
                color="secondary"
                href="https://github.com/capp85"
              >
                <i className="fab fa-github">GitHub</i>
              </Button>
            </Container>
          </div>
        </main>

        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Contact);
