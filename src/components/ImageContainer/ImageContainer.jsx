import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  mainFeaturedPost: {
    padding: theme.spacing(20),
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(0),
    backgroundImage: 'url(../images/OC.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10),
      paddingRight: 0,
    },
  },

});

class ImageContainer extends Component {
  render(props) {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main id="about">
          <Paper className={classes.mainFeaturedPost}>
            {
              <img
                style={{ display: 'none' }}
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                <Grid container justify="center" alignItems="center">
                  <Typography  component="h1" variant="h2" color="inherit" gutterBottom>
                   ABOUT ME
                  </Typography>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Paper>
          </main>






          {/* <Container maxWidth="xl" className={classes.background}>
            <CardMedia
              className={classes.media}
              image="../images/OC.png"
              alt="OC"
            />
           <div style={{position: 'absolute', color: 'white', top: '5%', left: '50%', transform:'translateX(-50%)'}}>
              {this.props.topText}
            </div>
          </Container> */}
      </React.Fragment>
    );
  }
}

ImageContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageContainer);
