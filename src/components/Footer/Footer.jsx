import React, { Component } from 'react';
import PropTypes from "prop-types";


import {Typography} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3)
  },
});


 class Footer extends Component {
    render() {
      const { classes } = this.props
        return (           
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
            Copyright Joseph J. Serrato 2019
          </Typography>
        </footer>
        
        )
    }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);