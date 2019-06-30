import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";


const styles = theme => ({
  background: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  img: {
    height: "600px",
    width: "1600px"
  }
});

class ImageContainer extends Component {
  render(props) {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className={classes.background}>
          <div>
            <img className={classes.img} src="../images/OC.png" alt="OC" />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

ImageContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageContainer);
