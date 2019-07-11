import React, { Component } from "react";
import PropTypes from "prop-types";

//******* CSS *********/
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

//********* MATERIAL UI **********/
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  background: {
    position: "relative",
    backgroundColor: theme.palette.grey[800]
  },
  About: {
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  Paper: {
    backgroundColor: "#D8D8D8"
  },
  Typography: {
    textAlign: "center",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    fontSize: 20
  },
  bigAvatar: {
    position: "inherit",
    margin: 10,
    padding: 10,
    width: 300,
    height: 300
  }
});

class About extends Component {
  render(props) {
    const { classes } = this.props;

    return (
      <React.Fragment >
        <CssBaseline />
        <Container maxwidth="xl" className={classes.background} >
          <Paper className={classes.Paper} >
            <Grid container justify="center" alignItems="center" id="about">
              <Avatar
                alt="me"
                src="../images/joe-1.png"
                className={classes.bigAvatar}
              />
            </Grid>

            <Typography variant="h3" className={classes.About} gutterBottom>
              About:
            </Typography>

            <Typography variant="body1" className={classes.Typography} >
            Full stack web developer completely infatuated with front end development. Loves how front end development is another way to express art, but with ones and zeros. Experienced operations manager with strong communication and time management skills, especially under pressure.
              </Typography>
              <br/>

          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
