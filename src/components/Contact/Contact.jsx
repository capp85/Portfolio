import React, { Component } from "react";

//******* CSS *********/
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";

//********* MATERIAL UI **********/
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  heroContent: {
    backgroundColor: "#0C2340",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3)
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

        <main >
          <div className={classes.heroContent} id="contact">
            <Container >
              <Button
                className={classes.button}
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
            Made with React and Material UI
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Copyright Joseph J Serrato 2019
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Contact);
