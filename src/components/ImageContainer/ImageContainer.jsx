import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Parallax } from "react-scroll-parallax";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  background: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

class ImageContainer extends Component {
  render(props) {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        {/* <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure"> */}
          <Container maxWidth="xl" className={classes.background}>
            <CardMedia
              className={classes.media}
              image="../images/OC.png"
              alt="OC"
            />

          </Container>
        {/* </Parallax> */}
      </React.Fragment>
    );
  }
}

ImageContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageContainer);
