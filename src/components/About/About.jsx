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

const styles = theme => ({
  background: {
    position: "relative",
    // backgroundColor: "#D8D8D8",
    marginBottom: theme.spacing(4)
  },
  About: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
    // backgroundPosition: "center"
  },
  Paper: {
      backgroundColor: "#D8D8D8"
  },
  Typography: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    fontSize: 42
  },
  bigAvatar: {
    margin: 10,
    padding: 10,
    // marginLeft: theme.spacing(50),
    // marginRight: theme.spacing(50),
    width: 300,
    height: 300,
  },

});

class About extends Component {
  render(props) {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className={classes.background} id="about">
          <Paper className={classes.Paper}>
           
            
            <Typography variant="h2" className={classes.About}>
              About Me
            </Typography>
            <Typography maxWidth="md" className={classes.Typography}>
            <Avatar
              alt="me"
              src="../images/joe-1.png"
              className={classes.bigAvatar}
            />

              I was born and raised in Orange County. Recenlty returned to OC
              after three years in the Bay Area managing a logistics warehouse.
              I play bass and drums. I love the Dodgers and Tennesee Titans
              which where the palette of this site comes from. I code clean,
              well-formatted, semantic HTML5. I write CSS that is easy to read
              and build on. I take wireframes in Sketch or PhotoShop files and
              quicky & accurately convert it to webpages that are pixel-perfect
              matches. My code is accessible out of the box. I have strong
              communications and customer support experience. I can manage
              complex projects, with minimal oversite. lets talk:
              joseph.serrato@gmail.com
            </Typography>
          </Paper>
        </Container>
      </React.Fragment>
    );
  };
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
