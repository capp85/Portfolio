import React, { Component } from "react";
import PropTypes from "prop-types";

//******* CSS *********/
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

//********* MATERIAL UI **********/
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: "url(../images/keys.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    color: "#005A9C",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(22),
      paddingRight: 0
    }
  }
});

class CContainer extends Component {
  render(props) {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main >
          <Paper className={classes.mainFeaturedPost}>
            {
            <img 
            style={{ display: "none" }} 
            alt="background" 
            />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={8}>
                <div className={classes.mainFeaturedPostContent}>
                  <Grid container justify="center" alignItems="center">
                    <Typography  variant="h2" gutterBottom >
                     CONTACT ME
                    </Typography>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </main>

      </React.Fragment>
    );
  }
}

CContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CContainer);
