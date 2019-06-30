import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  background: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    marginBottom: theme.spacing(4),
  },
  Typography: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
    backgroundColor: "#D8D8D8",
  }
});

class About extends Component {
  render(props) {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className={classes.background}>
          <Paper>
              <Typography variant='h2' className={classes.Typography} >
            About Me
            </Typography>
            <Typography variant='h4'>
              I was born and raised in Orange County. Recenlty returned to OC
              after three years in the Bay Area manging a logistivs warehouse. I
              play bass and drums. I love the Dodgers and Tennesee Titans which
              where the palette of this site comes from. I code clean,
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
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
