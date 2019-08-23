import React, { Component } from "react";
import PropTypes from "prop-types";

//******* CSS *********/
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

//********* MATERIAL UI **********/
import {
  Container,
  Paper,
  Typography,
  Avatar,
  Grid,
  Box
} from "@material-ui/core";

const styles = theme => ({
  background: {
    position: "relative",
    backgroundColor: theme.palette.grey[800]
  },
  About: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: "center",
    padding: 5
  },
  Paper: {
    backgroundColor: "#D8D8D8"
  },
  Typography: {
    textAlign: "center",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3)
    // fontSize: 20
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
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="xl"
          item
          xs={12}
          className={classes.background}
          style={{ height: "100%" }}
        >
          <Paper className={classes.Paper}>
          <Box >
              <Typography
                component="h1"
                variant="h4"
                className={classes.About}
                gutterBottom
              >
                About Me
              </Typography>
            </Box>

            <Grid container justify="center" alignItems="center" id="about">
            <Box textAlign="center">
              <Avatar
                alt="me"
                src="../images/joe-1.png"
                className={classes.bigAvatar}
              />
                <Box my={{ xs: 1 }}>
                  <Typography 
                  component="h3" 
                  variant="h5">
                    Hi, I am Joseph J Serrato
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Box my={{ xs: 3}}>
              <Typography 
              component="h2"
              variant="h4" 
              className={classes.Typography}>
                Full stack web developer completely infatuated with front end
                development. Loves how front end development is another way to
                express art, but with ones and zeros. Experienced operations
                manager with strong communication and time management skills,
                especially under pressure.
              </Typography>
              <br />
            </Box>
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
